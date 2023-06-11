// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import { DOMWidgetView } from '@jupyter-widgets/base'
import * as fdc3 from '@finos/fdc3'

export class FDC3ConnectionStatusView extends DOMWidgetView {
  async render(): Promise<void> {
    const channelColor = getChannelColor(
      isFalsyOrEmpty(window.fdc3) ? undefined : await fdc3.getCurrentChannel()
    )

    this.el.classList.add('connection-status-widget')

    this.badge = document.createElement('p')
    this.badge.innerHTML = 'FDC3 API connection'

    this.status = document.createElement('p')
    this.status.innerHTML = isFalsyOrEmpty(window.fdc3) ? 'not found' : 'found'
    this.status.classList.add(
      isFalsyOrEmpty(window.fdc3) ? 'failure' : 'success'
    )
    this.status.style.borderBottom = `7px solid ${channelColor}`

    this.el.appendChild(this.badge)
    this.el.appendChild(this.status)
  }

  // TODO does this method do anything?
  value_changed(): string {
    return this.model.get('fdc3_info')
  }

  private badge: HTMLParagraphElement
  private status: HTMLParagraphElement
}

const getChannelColor = (channel_data: any): string => {
  const default_color = '#808080'
  return channel_data ? channel_data.displayMetadata.color : default_color
}

const isFalsyOrEmpty = (value: any) => {
  if (typeof value === 'object') {
    return Object.keys(value).length ? false : true
  }
  return value ? false : true
}
