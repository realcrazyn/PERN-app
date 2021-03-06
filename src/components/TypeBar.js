import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '..'

export const TypeBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <ListGroup>
      <ListGroup.Item
        style={{ cursor: 'pointer' }}
        active={device.selectedType.id === undefined}
        onClick={() => device.setSelectedType({})}
      >
        All
      </ListGroup.Item>
      {device.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}
        >
          {type.name}{' '}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
})
