import { DOMWidgetView } from '@jupyter-widgets/base'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { FDC3VersionComponent } from './FDC3Version.component'

export class FDC3VersionView extends DOMWidgetView {
  render(): FDC3VersionView {
    createRoot(this.el).render(
      <React.StrictMode>
        <FDC3VersionComponent model={this.model} />
      </React.StrictMode>
    )

    return this
  }
}
