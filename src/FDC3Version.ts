// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  IBackboneModelOptions,
  ISerializers,
  WidgetModel,
} from '@jupyter-widgets/base'
import * as fdc3 from '@finos/fdc3'

import { MODULE_NAME, MODULE_VERSION } from './version'

export const FDC3ReadyErrorMessage = 'Timed out waiting for `fdc3Ready` event.'

export const FDC3_VERSION_DEFAULT = 'loading...'
export const FDC3_NOT_FOUND_MESSAGE = 'FDC3 Not Found'
export const FDC3_READY_UNKNOWN_ERROR =
  'Unknown error - please contact developers. FDC3 was not found in a strange way.'

export class FDC3VersionModel extends DOMWidgetModel {
  private readyCheck: (readyForMs?: number) => Promise<void>
  private readyForMs?: number

  constructor(
    attr: Backbone.ObjectHash,
    opts: IBackboneModelOptions,
    readyCheck: (x?: number) => Promise<void> = fdc3.fdc3Ready,
    readyFormMs?: number
  ) {
    super(attr, opts)
    this.readyCheck = readyCheck
    this.readyForMs = readyFormMs
    this.retrieveFDC3Version()
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
      if (e instanceof Error && e.message === FDC3ReadyErrorMessage) {
        this.set('fdc3Version', FDC3_NOT_FOUND_MESSAGE)
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

export class FDC3VersionView extends DOMWidgetView {
  constructor(opts: Backbone.ViewOptions<WidgetModel>) {
    super(opts)
    this.listenTo(this.model, 'change:fdc3Version', this.render)
  }

  render(): void {
    this.el.textContent = this.model.get('fdc3Version')
  }
}
