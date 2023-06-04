import { DOMWidgetModel } from '@jupyter-widgets/base'
import { useState, useEffect } from 'react'

interface DOMWidgetViewReactComponentProps {
  model: DOMWidgetModel
}

export const FDC3VersionComponent = ({
  model,
}: DOMWidgetViewReactComponentProps): JSX.Element => {
  const [fdc3VersionString, setFDC3VersionString] = useState('Loading Model')

  useEffect(() => {
    setFDC3VersionString(model.get('fdc3Version'))
  }, [])

  useEffect(() => {
    const callback = (e: Backbone.EventHandler) => {
      setFDC3VersionString(model.get('fdc3Version'))
    }
    model.on('change:fdc3Version', callback)

    return () => {
      model.unbind('change:fdc3Version')
    }
  }, [model, setFDC3VersionString])

  return <div>{fdc3VersionString}</div>
}
