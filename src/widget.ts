// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.
import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

import * as fdc3 from '@finos/fdc3';

import { MODULE_NAME, MODULE_VERSION } from './version';

// Import the CSS
import '../css/widget.css';

export class ExampleModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ExampleModel.model_name,
      _model_module: ExampleModel.model_module,
      _model_module_version: ExampleModel.model_module_version,
      _view_name: ExampleModel.view_name,
      _view_module: ExampleModel.view_module,
      _view_module_version: ExampleModel.view_module_version,
      fdc3Info: {},
    };
  }

  async initialize(attr: any, opts: any) {
    super.initialize(attr, opts);
    await fdc3.fdc3Ready();
    const info = await fdc3.getInfo();
    this.set('fdc3Info', info);
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'ExampleModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ExampleView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class ExampleView extends DOMWidgetView {
  render() {
    this.value_changed();
    this.model.on('change:fdc3Info', this.value_changed, this);
  }

  value_changed() {
    const { fdc3Version } = this.model.get('fdc3Info');
    this.el.textContent = `FDC3 Version: ${fdc3Version}`;
  }
}

// Channel Select

export class ChannelModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ChannelModel.model_name,
      _model_module: ChannelModel.model_module,
      _model_module_version: ChannelModel.model_module_version,
      _view_name: ChannelModel.view_name,
      _view_module: ChannelModel.view_module,
      _view_module_version: ChannelModel.view_module_version,
      systemChannels: [],
      channelId: null,
    };
  }

  async initialize(attr: any, opts: any) {
    super.initialize(attr, opts);
    await fdc3.fdc3Ready();
    const chan = await fdc3.getCurrentChannel();
    this.set('channelId', chan?.id);
    this.set('systemChannels', await fdc3.getSystemChannels());
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'ChannelModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ChannelView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class ChannelView extends DOMWidgetView {
  render() {
    const channelList = document.createElement('ul');
    channelList.classList.add('channel-list');

    this.el.append(channelList);

    this.channelListUpdated();
    this.model.on('change:channelId', this.channelIdUpdated, this);
    this.model.on('change:systemChannels', this.channelListUpdated, this);
  }

  channelListUpdated() {
    const channelList: any = this.el.querySelector('.channel-list');
    const channels = this.model.get('systemChannels');
    const channelId = this.model.get('channelId');

    channelList?.replaceChildren(
      ...channels.map((chan: any) => {
        const { color, name } = chan.displayMetadata;
        const channelButton = document.createElement('button');

        channelButton.classList.add(`channel-button-${chan.id}`);
        channelButton.style.backgroundColor = color;
        channelButton.textContent = name;
        channelButton.addEventListener('click', async () => {
          await fdc3.joinChannel(chan.id);
          this.model.set('channelId', chan.id);
        });

        if (chan.id === channelId) {
          channelButton.disabled = true;
          channelButton.classList.add('disabled');
        }

        return channelButton;
      })
    );

    const leaveButton = document.createElement('button');
    leaveButton.textContent = 'Leave';
    leaveButton.classList.add('leave-button');
    leaveButton.addEventListener('click', async () => {
      await fdc3.leaveCurrentChannel();
      this.model.set('channelId', null);
    });

    if (!channelId) {
      leaveButton.disabled = true;
    }

    channelList.appendChild(leaveButton);
  }

  channelIdUpdated() {
    const id = this.model.get('channelId');

    let button: any = this.el.querySelector('button.disabled');
    if (button) {
      button.classList.remove('disabled');
      button.disabled = false;
    }

    const leaveButton: any = this.el.querySelector('.leave-button');
    if (id) {
      button = this.el.querySelector(`.channel-button-${id}`);
      if (button) {
        button.classList.add('disabled');
        button.disabled = true;
      }
      leaveButton.disabled = false;
    } else {
      leaveButton.disabled = true;
    }
  }
}

// Ticker Input

export class TickerInputModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: TickerInputModel.model_name,
      _model_module: TickerInputModel.model_module,
      _model_module_version: TickerInputModel.model_module_version,
      _view_name: TickerInputModel.view_name,
      _view_module: TickerInputModel.view_module,
      _view_module_version: TickerInputModel.view_module_version,
      ticker: '',
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'TickerInputModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'TickerInputView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class TickerInputView extends DOMWidgetView {
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

// ContextView

export class ContextModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ContextModel.model_name,
      _model_module: ContextModel.model_module,
      _model_module_version: ContextModel.model_module_version,
      _view_name: ContextModel.view_name,
      _view_module: ContextModel.view_module,
      _view_module_version: ContextModel.view_module_version,
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
    // Add any extra serializers here
  };

  static model_name = 'ContextModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ContextView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class ContextView extends DOMWidgetView {
  render() {
    this.value_changed();
    this.model.on('change:context', this.value_changed, this);
  }

  value_changed() {
    const ctx = this.model.get('context');
    this.el.textContent = `Context: ${JSON.stringify(ctx)}`;
  }
}

// Connection Status Badge

export class ConnectionStatusModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ConnectionStatusModel.model_name,
      _model_module: ConnectionStatusModel.model_module,
      _model_module_version: ConnectionStatusModel.model_module_version,
      _view_name: ConnectionStatusModel.view_name,
      _view_module: ConnectionStatusModel.view_module,
      _view_module_version: ConnectionStatusModel.view_module_version,
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
  };

  static model_name = 'ConnectionStatusModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ConnectionStatusView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class ConnectionStatusView extends DOMWidgetView {
  async render() {
    const channel_color = getChannelColor(
      isFalsyOrEmpty(window.fdc3) ? undefined : await fdc3.getCurrentChannel()
    );

    this.el.classList.add('connection-status-widget');

    this._badge = document.createElement('p');
    this._badge.innerHTML = 'FDC3 API connection';

    this._status = document.createElement('p');
    this._status.innerHTML = isFalsyOrEmpty(window.fdc3)
      ? 'not found'
      : 'found';
    this._status.classList.add(
      isFalsyOrEmpty(window.fdc3) ? 'failure' : 'success'
    );
    this._status.style.borderBottom = `7px solid ${channel_color}`;

    this.el.appendChild(this._badge);
    this.el.appendChild(this._status);
  }

  value_changed() {
    return this.model.get('fdc3_info');
  }

  private _badge: HTMLParagraphElement;
  private _status: HTMLParagraphElement;
}

const getChannelColor = (channel_data: any): string => {
  const default_color = '#808080';
  return channel_data ? channel_data.displayMetadata.color : default_color;
};

const isFalsyOrEmpty = (value: any) => {
  if (typeof value === 'object') {
    return Object.keys(value).length ? false : true;
  }
  return value ? false : true;
};
