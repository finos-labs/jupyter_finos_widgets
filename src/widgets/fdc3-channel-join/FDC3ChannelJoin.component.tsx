export interface Props {
  channelId: string
  userChannels: any[]
  onSelect: (id: string) => void
  onLeave: () => void
}

export const FDC3ChannelJoinComponent = ({
  channelId,
  userChannels,
  onSelect,
  onLeave,
}: Props): JSX.Element => (
  <ul className="channel-list" style={{ listStyle: 'none' }}>
    {[
      ...userChannels.map(({ displayMetadata: { name, color }, id }) => {
        return (
          <li key={id}>
            <button
              className="channel-button"
              style={{ backgroundColor: color }}
              disabled={channelId === id}
              onClick={onSelect.bind(null, id)}
            >
              {name}
            </button>
          </li>
        )
      }),
      <li key="channel-picker-button-key">
        <button
          className="channel-button"
          disabled={!channelId}
          onClick={onLeave}
        >
          Leave
        </button>
      </li>,
    ]}
  </ul>
)
