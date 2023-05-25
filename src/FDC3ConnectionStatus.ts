// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base'

import * as fdc3 from '@finos/fdc3'

import { MODULE_NAME, MODULE_VERSION } from './version'

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
