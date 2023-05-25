// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  IBackboneModelOptions,
  ISerializers,
  WidgetModel,
} from '@jupyter-widgets/base'

import * as fdc3 from '@finos/fdc3'

import { render as preactRender } from 'preact'
import { useState, useEffect, useCallback } from 'preact/hooks'

import { MODULE_NAME, MODULE_VERSION } from './version'

interface Props {
  value: string
  error: string
  onSubmit: (v: any) => void
}

const TickerInput = ({ value, error, onSubmit }: Props) => {
  const [ticker, setTicker] = useState(value)
  const onInput = (e: any) => setTicker(e.target.value)
  const submit = useCallback(
    (e: any) => {
      e.preventDefault()
      onSubmit(ticker)
    },
    [ticker]
  )

  useEffect(() => {
    setTicker(value)
  }, [value])

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" value={ticker} onInput={onInput} />
        <input type="submit" value="Submit" />
        <p style={{ color: 'red' }}>{error}</p>
      </form>
    </div>
  )
}

export class FDC3TickerInputModel extends DOMWidgetModel {
  private _listener: any = null

  defaults(): Backbone.ObjectHash {
    return {
      ...super.defaults(),
      _model_name: FDC3TickerInputModel.model_name,
      _model_module: FDC3TickerInputModel.model_module,
      _model_module_version: FDC3TickerInputModel.model_module_version,
      _view_name: FDC3TickerInputModel.view_name,
      _view_module: FDC3TickerInputModel.view_module,
      _view_module_version: FDC3TickerInputModel.view_module_version,
      value: '',
      error: '',
    }
  }

  async initialize(
    attr: Backbone.ObjectHash,
    opts: IBackboneModelOptions
  ): Promise<void> {
    super.initialize(attr, opts)
    this.on('change:value', async ({ changed: { value } }) => {
      await fdc3.fdc3Ready()
      if (value) {
        try {
          await fdc3.broadcast({
            type: 'fdc3.instrument',
            id: { ticker: value },
          })
          this.set('error', '')
        } catch (e: any) {
          this.set('error', e.message)
        }
      } else {
        const error = 'Ticker input is empty'
        this.set('error', error, { silent: true })
        this.trigger('change')
      }
    })

    await fdc3.fdc3Ready()
    this._listener?.unsubscribe()
    this._listener = await fdc3.addContextListener(
      'fdc3.instrument',
      (ctx: any) => {
        this.set('value', ctx.id.ticker)
        this.save_changes()
      }
    )
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
  }

  static model_name = 'FDC3TickerInputModel'
  static model_module = MODULE_NAME
  static model_module_version = MODULE_VERSION
  static view_name = 'FDC3TickerInputView'
  static view_module = MODULE_NAME
  static view_module_version = MODULE_VERSION
}

export class FDC3TickerInputView extends DOMWidgetView {
  constructor(opts: Backbone.ViewOptions<WidgetModel>) {
    super(opts)
    this.model.bind('change', this.render.bind(this))
    this.submit = this.submit.bind(this)
  }

  submit(ticker: string): void {
    console.log(ticker, this.model.get('value'))
    if (this.model.get('value') === ticker) {
      this.model.trigger('change:value', { changed: { value: ticker } })
    } else {
      this.model.set('value', ticker)
      this.model.save_changes()
    }
  }

  render(): void {
    const props = {
      value: this.model.get('value'),
      error: this.model.get('error'),
      onSubmit: this.submit,
    }

    preactRender(<TickerInput {...props} />, this.el)
  }
}
