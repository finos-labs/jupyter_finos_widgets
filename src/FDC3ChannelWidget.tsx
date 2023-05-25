import {
  DOMWidgetModel,
  DOMWidgetView,
  IBackboneModelOptions,
  ISerializers,
  WidgetModel,
} from '@jupyter-widgets/base'

import * as fdc3 from '@finos/fdc3'

import { render } from 'preact'

import { MODULE_NAME, MODULE_VERSION } from './version'

interface Props {
  channelId: string
  userChannels: any[]
  onSelect: (id: string) => void
  onLeave: () => void
}

const ChannelPicker = ({
  channelId,
  userChannels,
  onSelect,
  onLeave,
}: Props) => (
  <ul className="channel-list">
    {[
      ...userChannels.map(({ displayMetadata: { name, color }, id }) => {
        return (
          <li key={id}>
            <button
              className="channel-button"
              style={{ backgroundColor: color }}
              disabled={channelId === id}
              onClick={onSelect.bind(null, id)}
            >
              {name}
            </button>
          </li>
        )
      }),
      <li key="channel-picker-button-key">
        <button
          className="leave-button"
          disabled={!channelId}
          onClick={onLeave}
          id="mwahahahahah-BUTTON"
        >
          Leave
        </button>
      </li>,
    ]}
  </ul>
)

export class ChannelModel extends DOMWidgetModel {
  defaults(): Backbone.ObjectHash {
    return {
      ...super.defaults(),
      _model_name: ChannelModel.model_name,
      _model_module: ChannelModel.model_module,
      _model_module_version: ChannelModel.model_module_version,
      _view_name: ChannelModel.view_name,
      _view_module: ChannelModel.view_module,
      _view_module_version: ChannelModel.view_module_version,
      userChannels: [],
      channelId: null,
    }
  }

  async initialize(
    attr: Backbone.ObjectHash,
    opts: IBackboneModelOptions
  ): Promise<void> {
    super.initialize(attr, opts)
    await fdc3.fdc3Ready()
    this.set('channelId', (await fdc3.getCurrentChannel())?.id)
    this.set('userChannels', await fdc3.getUserChannels())
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  }

  static model_name = 'ChannelModel'
  static model_module = MODULE_NAME
  static model_module_version = MODULE_VERSION
  static view_name = 'ChannelView' // Set to null if no view
  static view_module = MODULE_NAME // Set to null if no view
  static view_module_version = MODULE_VERSION
}

export class ChannelView extends DOMWidgetView {
  constructor(opts: Backbone.ViewOptions<WidgetModel>) {
    super(opts)
    this.model.bind('change', this.render.bind(this))
    this.selectChannel = this.selectChannel.bind(this)
    this.leaveChannel = this.leaveChannel.bind(this)
  }

  async selectChannel(id: string): Promise<void> {
    await fdc3.joinChannel(id)
    this.model.set('channelId', id)
  }

  async leaveChannel(): Promise<void> {
    await fdc3.leaveCurrentChannel()
    this.model.set('channelId', null)
  }

  render(): void {
    const props: Props = {
      channelId: this.model.get('channelId'),
      userChannels: this.model.get('userChannels'),
      onSelect: this.selectChannel,
      onLeave: this.leaveChannel,
    }

    render(<ChannelPicker {...props} />, this.el)
  }
}
