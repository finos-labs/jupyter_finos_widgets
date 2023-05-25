// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  IBackboneModelOptions,
  ISerializers,
} from '@jupyter-widgets/base'

import * as fdc3 from '@finos/fdc3'

import { MODULE_NAME, MODULE_VERSION } from './version'
export class FDC3RaiseIntentModel extends DOMWidgetModel {
  defaults(): Backbone.ObjectHash {
    return {
      ...super.defaults(),
      _model_name: FDC3RaiseIntentModel.model_name,
      _model_module: FDC3RaiseIntentModel.model_module,
      _model_module_version: FDC3RaiseIntentModel.model_module_version,
      _view_name: FDC3RaiseIntentModel.view_name,
      _view_module: FDC3RaiseIntentModel.view_module,
      _view_module_version: FDC3RaiseIntentModel.view_module_version,
      context: {},
      intent: '',
    }
  }

  async initialize(
    attr: Backbone.ObjectHash,
    opts: IBackboneModelOptions
  ): Promise<void> {
    super.initialize(attr, opts)
    await fdc3.fdc3Ready()
    fdc3.addContextListener('fdc3.instrument', (ctx) => {
      this.set('context', ctx)
      this.save_changes()
    })
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
  }

  static model_name = 'FDC3RaiseIntentModel'
  static model_module = MODULE_NAME
  static model_module_version = MODULE_VERSION
  static view_name = 'FDC3RaiseIntentView'
  static view_module = MODULE_NAME
  static view_module_version = MODULE_VERSION
}

export class FDC3RaiseIntentView extends DOMWidgetView {
  render(): void {
    this.el.classList.add('raise-intent-widget')
    this.selectDropdown = document.createElement('select')
    this.selectDropdown.appendChild(createPlaceholderOption())

    intents.map((intent) => {
      const selectOption = document.createElement('option')
      selectOption.value = intent.action
      selectOption.text = intent.text
      this.selectDropdown.appendChild(selectOption)
    })

    const raiseIntentButton = document.createElement('button')
    raiseIntentButton.textContent = 'Raise Intent'
    raiseIntentButton.addEventListener('click', () => this.raiseIntent())

    this.message = document.createElement('p')

    this.el.appendChild(this.selectDropdown)
    this.el.appendChild(raiseIntentButton)
    this.el.appendChild(this.message)

    this.model.on('change:intent', this.onSelectChanged, this)
    this.selectDropdown.onchange = this.onSelectChanged.bind(this)
  }

  private onSelectChanged() {
    this.model.set('intent', this.selectDropdown.value)
    this.model.save_changes()
  }

  async raiseIntent(): Promise<void | fdc3.IntentResolution> {
    const ctx = this.model.get('context')
    const intent = this.model.get('intent')

    if (isFalsyOrEmpty(intent)) {
      this.message.innerHTML = 'Cannot raise intent: No intent selected'
      return
    }

    if (isFalsyOrEmpty(ctx)) {
      this.message.innerHTML = 'Cannot raise intent: No context data'
      return
    }

    this.message.innerHTML = ''
    try {
      await fdc3.raiseIntent(intent, ctx)
    } catch (error) {
      this.message.innerHTML = `${error}`
    }
  }

  private selectDropdown: HTMLSelectElement
  private message: HTMLParagraphElement
}

const createPlaceholderOption = () => {
  const placeholderOption = document.createElement('option')
  placeholderOption.value = ''
  placeholderOption.text = 'Select an intent'
  placeholderOption.disabled = true
  placeholderOption.selected = true
  return placeholderOption
}

const intents = [
  { action: 'ViewChart', text: 'View Chart' },
  { action: 'ViewInstrument', text: 'View Instrument' },
  { action: 'ViewNews', text: 'View News' },
  { action: 'ViewQuote', text: 'View Quote' },
]

const isFalsyOrEmpty = (value: any) => {
  if (typeof value === 'object') {
    return Object.keys(value).length ? false : true
  }
  return value ? false : true
}
