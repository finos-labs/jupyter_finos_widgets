import { useState, useCallback, useEffect } from 'react'

interface Props {
  value: string
  error: string
  onSubmit: (v: any) => void
}

export const FDC3TickerInputComponent = ({
  value,
  error,
  onSubmit,
}: Props): JSX.Element => {
  const [ticker, setTicker] = useState(value)
  const onInput = (e: any) => setTicker(e.target.value)
  const submit = useCallback(
    (e: any) => {
      e.preventDefault()
      onSubmit(ticker)
    },
    [ticker]
  )

  useEffect(() => {
    setTicker(value)
  }, [value])

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" value={ticker} onInput={onInput} />
        <input type="submit" value="Submit" />
        <p style={{ color: 'red' }}>{error}</p>
      </form>
    </div>
  )
}
