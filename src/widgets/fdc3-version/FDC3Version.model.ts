// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  IBackboneModelOptions,
  ISerializers,
} from '@jupyter-widgets/base'
import * as fdc3 from '@finos/fdc3'

import { MODULE_NAME, MODULE_VERSION } from '../../version'
import {
  FDC3_READY_ERROR_MSG,
  FDC3_NOT_FOUND_MSG,
  FDC3_READY_UNKNOWN_ERROR,
  FDC3_VERSION_DEFAULT,
} from '../../constants'

export class FDC3VersionModel extends DOMWidgetModel {
  private readyCheck: (readyForMs?: number) => Promise<void>
  private readyForMs?: number

  constructor(
    attr: Backbone.ObjectHash,
    opts: IBackboneModelOptions,
    autoLoad = true,
    readyCheck: (x?: number) => Promise<void> = fdc3.fdc3Ready,
    readyFormMs?: number
  ) {
    super(attr, opts)
    this.readyCheck = readyCheck
    this.readyForMs = readyFormMs
    if (autoLoad) {
      this.retrieveFDC3Version()
    }
  }

  defaults(): Backbone.ObjectHash {
    return {
      ...super.defaults(),
      _model_name: FDC3VersionModel.model_name,
      _model_module: FDC3VersionModel.model_module,
      _model_module_version: FDC3VersionModel.model_module_version,
      _view_name: FDC3VersionModel.view_name,
      _view_module: FDC3VersionModel.view_module,
      _view_module_version: FDC3VersionModel.view_module_version,
      fdc3Version: FDC3_VERSION_DEFAULT,
    }
  }

  private async retrieveFDC3Version(): Promise<void> {
    try {
      await this.readyCheck(this.readyForMs)
      const { fdc3Version } = await fdc3.getInfo()
      this.set('fdc3Version', `FDC3 Version: ${fdc3Version}`)
    } catch (e: unknown) {
      if (e instanceof Error && e.message === FDC3_READY_ERROR_MSG) {
        this.set('fdc3Version', FDC3_NOT_FOUND_MSG)
      } else {
        this.set('fdc3Version', FDC3_READY_UNKNOWN_ERROR)
      }
    }
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
  }

  static model_name = 'FDC3VersionModel'
  static model_module = MODULE_NAME
  static model_module_version = MODULE_VERSION
  static view_name = 'FDC3VersionView'
  static view_module = MODULE_NAME
  static view_module_version = MODULE_VERSION
}
