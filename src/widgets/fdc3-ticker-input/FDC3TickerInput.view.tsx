import { DOMWidgetView, WidgetModel } from '@jupyter-widgets/base'
import { createRoot } from 'react-dom/client'
import { FDC3TickerInputComponent } from './FDC3TickerInput.component'

export class FDC3TickerInputView extends DOMWidgetView {
  constructor(opts: Backbone.ViewOptions<WidgetModel>) {
    super(opts)
    this.model.bind('change', this.render.bind(this))
    this.submit = this.submit.bind(this)
  }

  submit(ticker: string): void {
    console.log(ticker, this.model.get('value'))
    if (this.model.get('value') === ticker) {
      this.model.trigger('change:value', { changed: { value: ticker } })
    } else {
      this.model.set('value', ticker)
      this.model.save_changes()
    }
  }

  render(): FDC3TickerInputView {
    const props = {
      value: this.model.get('value'),
      error: this.model.get('error'),
      onSubmit: this.submit,
    }

    createRoot(this.el).render(<FDC3TickerInputComponent {...props} />)

    return this
  }
}
