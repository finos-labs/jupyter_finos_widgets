// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

import * as fdc3 from '@finos/fdc3';

import { MODULE_NAME, MODULE_VERSION } from './version';

export class FDC3TickerInputModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: FDC3TickerInputModel.model_name,
      _model_module: FDC3TickerInputModel.model_module,
      _model_module_version: FDC3TickerInputModel.model_module_version,
      _view_name: FDC3TickerInputModel.view_name,
      _view_module: FDC3TickerInputModel.view_module,
      _view_module_version: FDC3TickerInputModel.view_module_version,
      ticker: '',
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
  };

  static model_name = 'FDC3TickerInputModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'FDC3TickerInputView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class FDC3TickerInputView extends DOMWidgetView {
  render() {
    const input = document.createElement('input');
    input.type = 'text';
    this.el.appendChild(input);

    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.addEventListener('click', () => {
      const ticker = input.value;
      if (ticker) {
        this.model.set('ticker', input.value);
        fdc3.broadcast({
          type: 'fdc3.instrument',
          id: { ticker },
        });
      }
    });
    this.el.appendChild(submit);

    const tickerDisplay = document.createElement('p');
    tickerDisplay.classList.add('current-ticker');
    this.el.appendChild(tickerDisplay);

    this.renderTicker();
    this.model.on('change:ticker', this.renderTicker, this);
  }

  renderTicker() {
    const ticker = this.model.get('ticker');
    const tickerDisplay: any = this.el.querySelector('.current-ticker');
    tickerDisplay.textContent = ticker;
  }
}
