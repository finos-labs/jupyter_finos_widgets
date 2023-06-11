// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  IBackboneModelOptions,
  ISerializers,
} from '@jupyter-widgets/base'
import * as fdc3 from '@finos/fdc3'

import { MODULE_NAME, MODULE_VERSION } from '../../version'

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
