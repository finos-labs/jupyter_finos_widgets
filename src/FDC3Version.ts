// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

import * as fdc3 from '@finos/fdc3';

import { MODULE_NAME, MODULE_VERSION } from './version';

export class FDC3VersionModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: FDC3VersionModel.model_name,
      _model_module: FDC3VersionModel.model_module,
      _model_module_version: FDC3VersionModel.model_module_version,
      _view_name: FDC3VersionModel.view_name,
      _view_module: FDC3VersionModel.view_module,
      _view_module_version: FDC3VersionModel.view_module_version,
      value: null,
    };
  }

  async initialize(attr: any, opts: any) {
    super.initialize(attr, opts);
    await fdc3.fdc3Ready();
    const info = await fdc3.getInfo();
    this.set('value', info.fdc3Version);
    this.save_changes();
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
  };

  static model_name = 'FDC3VersionModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'FDC3VersionView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class FDC3VersionView extends DOMWidgetView {
  render() {
    this.value_changed();
    this.model.on('change:value', this.value_changed, this);
  }

  value_changed() {
    const fdc3Version = this.model.get('value');
    this.el.textContent = `FDC3 Version: ${fdc3Version}`;
  }
}
