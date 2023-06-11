// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import { DOMWidgetModel, ISerializers } from '@jupyter-widgets/base'

import { MODULE_NAME, MODULE_VERSION } from '../../version'

export class FDC3ConnectionStatusModel extends DOMWidgetModel {
  defaults(): Backbone.ObjectHash {
    return {
      ...super.defaults(),
      _model_name: FDC3ConnectionStatusModel.model_name,
      _model_module: FDC3ConnectionStatusModel.model_module,
      _model_module_version: FDC3ConnectionStatusModel.model_module_version,
      _view_name: FDC3ConnectionStatusModel.view_name,
      _view_module: FDC3ConnectionStatusModel.view_module,
      _view_module_version: FDC3ConnectionStatusModel.view_module_version,
    }
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
  }

  static model_name = 'FDC3ConnectionStatusModel'
  static model_module = MODULE_NAME
  static model_module_version = MODULE_VERSION
  static view_name = 'FDC3ConnectionStatusView'
  static view_module = MODULE_NAME
  static view_module_version = MODULE_VERSION
}
