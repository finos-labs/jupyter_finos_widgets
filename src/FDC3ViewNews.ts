// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

import * as fdc3 from '@finos/fdc3';

import { MODULE_NAME, MODULE_VERSION } from './version';

export class FDC3ViewNewsModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: FDC3ViewNewsModel.model_name,
      _model_module: FDC3ViewNewsModel.model_module,
      _model_module_version: FDC3ViewNewsModel.model_module_version,
      _view_name: FDC3ViewNewsModel.view_name,
      _view_module: FDC3ViewNewsModel.view_module,
      _view_module_version: FDC3ViewNewsModel.view_module_version,
      context: {},
    };
  }

  async initialize(attr: any, opts: any) {
    super.initialize(attr, opts);
    await fdc3.fdc3Ready();
    fdc3.addContextListener('fdc3.instrument', (ctx) => {
      this.set('context', ctx);
    });
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
  };

  static model_name = 'FDC3ViewNewsModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'FDC3ViewNewsView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class FDC3ViewNewsView extends DOMWidgetView {
  render() {
    this.value_changed();
    this.model.on('change:context', this.value_changed, this);
    this.el.innerText = 'Opening News...';
  }

  async value_changed() {
    const ctx = this.model.get('context');
    await fdc3.raiseIntent('ViewNews', ctx);
  }
}
