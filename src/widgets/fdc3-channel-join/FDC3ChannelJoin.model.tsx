import {
  DOMWidgetModel,
  IBackboneModelOptions,
  ISerializers,
} from '@jupyter-widgets/base'
import * as fdc3 from '@finos/fdc3'

import { MODULE_NAME, MODULE_VERSION } from '../../version'

export class FDC3ChannelJoinModel extends DOMWidgetModel {
  defaults(): Backbone.ObjectHash {
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
    }
  }

  // TODO - the DOMWidgetModel type should just return void, though no complaints yet?
  async initialize(
    attr: Backbone.ObjectHash,
    opts: IBackboneModelOptions
  ): Promise<void> {
    super.initialize(attr, opts)
    await fdc3.fdc3Ready()
    this.set('channelId', (await fdc3.getCurrentChannel())?.id)
    this.set(
      'userChannels',
      (await fdc3.getUserChannels()).map(({ type, id, displayMetadata }) => ({
        type,
        id,
        displayMetadata,
      }))
    )
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
  }

  static model_name = 'FDC3ChannelJoinModel'
  static model_module = MODULE_NAME
  static model_module_version = MODULE_VERSION
  static view_name = 'FDC3ChannelJoinView'
  static view_module = MODULE_NAME
  static view_module_version = MODULE_VERSION
}
