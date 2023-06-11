// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  IBackboneModelOptions,
  ISerializers,
} from '@jupyter-widgets/base'

import * as fdc3 from '@finos/fdc3'

import { MODULE_NAME, MODULE_VERSION } from '../../version'

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
