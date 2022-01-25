import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Context } from '..'
import { BrandBar } from '../components/BrandBar'
import { DeviceList } from '../components/DeviceList'
import { Pages } from '../components/Pages'
import { TypeBar } from '../components/TypeBar'
import { fetchBrands, fetchDevice, fetchTypes } from '../http/deviceAPI'

export const Shop = observer(() => {
  const { device } = useContext(Context)

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data))
    fetchBrands().then((data) => device.setBrands(data))
  }, [])

  useEffect(() => {
    fetchDevice(
      device.selectedType.id,
      device.selectedBrand.id,
      device.page,
      device.limit
    ).then((data) => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [
    device.limit,
    device.page,
    device.selectedType.id,
    device.selectedBrand.id,
  ])

  return (
    <Container>
      <Row>
        <Col md={3} className="mt-2">
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  )
})
