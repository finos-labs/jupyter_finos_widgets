// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  IBackboneModelOptions,
  ISerializers,
  WidgetModel,
} from '@jupyter-widgets/base'

import { render as preactRender } from 'preact'

import * as fdc3 from '@finos/fdc3'

import { MODULE_NAME, MODULE_VERSION } from './version'

interface Props {
  context: any
  contextType: string
  onContextTypeChange: (value: string) => void
}

const CONTEXT_TYPES = [
  'fdc3.contact',
  'fdc3.contactList',
  'fdc3.country',
  'fdc3.instrument',
  'fdc3.instrumentList',
  'fdc3.organization',
  'fdc3.position',
  'fdc3.portfolio',
]

const ContextDisplay = ({
  contextType,
  context,
  onContextTypeChange,
}: Props) => (
  <div>
    <div>
      <label htmlFor="context-type">Select Context Type: </label>
      <select
        name="context-type"
        value={contextType}
        onChange={(e: any) => onContextTypeChange(e.target.value)}
      >
        {CONTEXT_TYPES.map((contextType, index) => {
          const contextName = contextType.split('.')[1]
          return (
            <option value={contextType} key={index}>
              {contextName.charAt(0).toUpperCase() + contextName.slice(1)}
            </option>
          )
        })}
      </select>
    </div>
    <pre>{JSON.stringify(context, undefined, 2)}</pre>
  </div>
)

export class FDC3ContextDisplayModel extends DOMWidgetModel {
  private _listener: any = null

  defaults(): Backbone.ObjectHash {
    return {
      ...super.defaults(),
      _model_name: FDC3ContextDisplayModel.model_name,
      _model_module: FDC3ContextDisplayModel.model_module,
      _model_module_version: FDC3ContextDisplayModel.model_module_version,
      _view_name: FDC3ContextDisplayModel.view_name,
      _view_module: FDC3ContextDisplayModel.view_module,
      _view_module_version: FDC3ContextDisplayModel.view_module_version,
      contextType: null,
      context: {},
    }
  }

  async onContextChange(): Promise<void> {
    this._listener?.unsubscribe()
    this._listener = await fdc3.addContextListener(
      this.get('contextType'),
      (ctx) => {
        this.set('context', ctx)
        this.save_changes()
      }
    )
  }

  async initialize(
    attr: Backbone.ObjectHash,
    opts: IBackboneModelOptions
  ): Promise<void> {
    super.initialize(attr, opts)
    await fdc3.fdc3Ready()
    this.on('change:contextType', this.onContextChange.bind(this))
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  }

  static model_name = 'FDC3ContextDisplayModel'
  static model_module = MODULE_NAME
  static model_module_version = MODULE_VERSION
  static view_name = 'FDC3ContextDisplayView' // Set to null if no view
  static view_module = MODULE_NAME // Set to null if no view
  static view_module_version = MODULE_VERSION
}

export class FDC3ContextDisplayView extends DOMWidgetView {
  constructor(opts: Backbone.ViewOptions<WidgetModel>) {
    super(opts)
    this.model.bind('change', this.render.bind(this))
  }

  render(): void {
    const props: Props = {
      contextType: this.model.get('contextType'),
      context: this.model.get('context'),
      onContextTypeChange: (value) => {
        this.model.set('contextType', value)
        this.model.set('context', {})
        this.model.save_changes()
      },
    }

    preactRender(<ContextDisplay {...props} />, this.el)
  }
}
