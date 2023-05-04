import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

import * as fdc3 from '@finos/fdc3';

import { render } from 'preact';

import { MODULE_NAME, MODULE_VERSION } from './version';

interface Props {
  channelId: string;
  userChannels: any[];
  onSelect: (id: string) => void;
  onLeave: () => void;
}

const ChannelPicker = ({
  channelId,
  userChannels,
  onSelect,
  onLeave,
}: Props) => (
  <ul class="channel-list" style={{ listStyle: 'none' }}>
    {[
      ...userChannels.map(({ displayMetadata: { name, color }, id }) => {
        return (
          <li>
            <button
              class="channel-button"
              style={{ backgroundColor: color }}
              disabled={channelId === id}
              onClick={onSelect.bind(null, id)}
            >
              {name}
            </button>
          </li>
        );
      }),
      <li>
        <button class="leave-button" disabled={!channelId} onClick={onLeave}>
          Leave
        </button>
      </li>,
    ]}
  </ul>
);

export class FDC3ChannelJoinModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: FDC3ChannelJoinModel.model_name,
      _model_module: FDC3ChannelJoinModel.model_module,
      _model_module_version: FDC3ChannelJoinModel.model_module_version,
      _view_name: FDC3ChannelJoinModel.view_name,
      _view_module: FDC3ChannelJoinModel.view_module,
      _view_module_version: FDC3ChannelJoinModel.view_module_version,
      userChannels: [],
      channelId: null,
    };
  }

  async initialize(attr: any, opts: any) {
    super.initialize(attr, opts);
    await fdc3.fdc3Ready();
    this.set('channelId', (await fdc3.getCurrentChannel())?.id);
    this.set('userChannels', await fdc3.getUserChannels());
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
  };

  static model_name = 'FDC3ChannelJoinModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'FDC3ChannelJoinView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class FDC3ChannelJoinView extends DOMWidgetView {
  constructor(opts: any) {
    super(opts);
    this.model.bind('change', this.render.bind(this));
    this.selectChannel = this.selectChannel.bind(this);
    this.leaveChannel = this.leaveChannel.bind(this);
  }

  async selectChannel(id: string) {
    await fdc3.joinChannel(id);
    this.model.set('channelId', id);
  }

  async leaveChannel() {
    await fdc3.leaveCurrentChannel();
    this.model.set('channelId', null);
  }

  render() {
    const props: Props = {
      channelId: this.model.get('channelId'),
      userChannels: this.model.get('userChannels'),
      onSelect: this.selectChannel,
      onLeave: this.leaveChannel,
    };
    render(<ChannelPicker {...props} />, this.el);
  }
}
