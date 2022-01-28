import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Context } from '..'
import bigStar from '../assets/bigStar.svg'
import { addBasketDevice, fetchBasketDevices } from '../http/basketAPI'
import { fetchOneDevice } from '../http/deviceAPI'

export const DevicePage = observer(() => {
  const { id } = useParams()
  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data))
  }, [id])
  const [device, setDevice] = useState({ info: [] })

  const { user } = useContext(Context)
  // console.log(device.id, user.user.id)

  return (
    <Container className="mt-3 d-flex flex-column align-items-center">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col md={4}>
          <Row>
            <h2>{device.name}</h2>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 44,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              widt: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>From {device.price} rub.</h3>
            <Button
              variant={'outline-dark'}
              onClick={() => {
                addBasketDevice(device.id, user.user.id)
              }}
            >
              Add to cart
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-3" style={{ width: '100%' }}>
        <h1>Params</h1>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? 'lightgray' : 'transparent',
            }}
          >
            {info.title}: {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  )
})
