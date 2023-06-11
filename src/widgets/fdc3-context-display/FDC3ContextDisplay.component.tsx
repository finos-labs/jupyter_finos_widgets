// Copyright (c) Adaptive
// Distributed under the terms of the Modified BSD License.

interface Props {
  context: any
  contextType: string
  onContextTypeChange: (value: string) => void
}

const CONTEXT_TYPES = [
  'fdc3.contact',
  'fdc3.contactList',
  'fdc3.country',
  'fdc3.instrument',
  'fdc3.instrumentList',
  'fdc3.organization',
  'fdc3.position',
  'fdc3.portfolio',
]

export const FDC3ContextDisplayComponent = ({
  contextType,
  context,
  onContextTypeChange,
}: Props): JSX.Element => (
  <div>
    <div>
      <label htmlFor="context-type">Select Context Type: </label>
      <select
        name="context-type"
        value={contextType}
        onChange={(e: any) => onContextTypeChange(e.target.value)}
      >
        {CONTEXT_TYPES.map((contextType, index) => {
          const contextName = contextType.split('.')[1]
          return (
            <option value={contextType} key={index}>
              {contextName.charAt(0).toUpperCase() + contextName.slice(1)}
            </option>
          )
        })}
      </select>
    </div>
    <pre>{JSON.stringify(context, undefined, 2)}</pre>
  </div>
)
