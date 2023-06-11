import { DOMWidgetView, WidgetModel } from '@jupyter-widgets/base'
import { createRoot } from 'react-dom/client'
import * as fdc3 from '@finos/fdc3'
import { FDC3ChannelJoinComponent } from './FDC3ChannelJoin.component'

export class FDC3ChannelJoinView extends DOMWidgetView {
  constructor(opts: Backbone.ViewOptions<WidgetModel>) {
    super(opts)
    this.model.bind('change', this.render.bind(this))
    this.selectChannel = this.selectChannel.bind(this)
    this.leaveChannel = this.leaveChannel.bind(this)
  }

  async selectChannel(id: string): Promise<void> {
    await fdc3.joinChannel(id)
    this.model.set('channelId', id)
    this.model.save_changes()
  }

  async leaveChannel(): Promise<void> {
    await fdc3.leaveCurrentChannel()
    this.model.set('channelId', null)
    this.model.save_changes()
  }

  render(): FDC3ChannelJoinView {
    const props = {
      channelId: this.model.get('channelId'),
      userChannels: this.model.get('userChannels'),
      onSelect: this.selectChannel,
      onLeave: this.leaveChannel,
    }

    createRoot(this.el).render(<FDC3ChannelJoinComponent {...props} />)

    return this
  }
}
