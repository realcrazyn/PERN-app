import { useContext } from 'react'
import { Context } from '..'
import { Card, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

export const BrandBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <Row style={{ display: 'flex' }}>
      {device.brands.map((brand) => (
        <Card
          className="p-3"
          style={{ cursor: 'pointer', width: 'auto' }}
          border={brand.id === device.selectedBrand.id ? 'danger' : null}
          onClick={() => device.setSelectedBrand(brand)}
          key={brand.id}
        >
          {brand.name}{' '}
        </Card>
      ))}
    </Row>
  )
})
