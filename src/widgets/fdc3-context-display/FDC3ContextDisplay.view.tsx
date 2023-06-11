// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

import { DOMWidgetView, WidgetModel } from '@jupyter-widgets/base'
import { createRoot } from 'react-dom/client'
import { FDC3ContextDisplayComponent } from './FDC3ContextDisplay.component'

export class FDC3ContextDisplayView extends DOMWidgetView {
  constructor(opts: Backbone.ViewOptions<WidgetModel>) {
    super(opts)
    this.model.bind('change', this.render.bind(this))
  }

  render(): FDC3ContextDisplayView {
    const props = {
      contextType: this.model.get('contextType'),
      context: this.model.get('context'),
      onContextTypeChange: (value: string) => {
        this.model.set('contextType', value)
        this.model.set('context', {})
        this.model.save_changes()
      },
    }

    createRoot(this.el).render(<FDC3ContextDisplayComponent {...props} />)

    return this
  }
}
