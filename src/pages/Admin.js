import { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { CreateBrand } from '../components/modals/CreateBrand'
import { CreateDevice } from '../components/modals/CreateDevice'
import { CreateType } from '../components/modals/CreateType'

export const Admin = () => {
  const [typeModal, setTypeModal] = useState(false)
  const [deviceModal, setDeviceModal] = useState(false)
  const [brandModal, setBrandModal] = useState(false)

  return (
    <Container className="d-flex flex-column">
      <Button
        variant={'outline-dark'}
        className="mt-3"
        onClick={() => setTypeModal(true)}
      >
        Add type
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-3"
        onClick={() => setBrandModal(true)}
      >
        Add brand
      </Button>
      <Button
        variant={'outline-dark'}
        className="mt-3"
        onClick={() => setDeviceModal(true)}
      >
        Add device
      </Button>
      <CreateBrand show={brandModal} onHide={() => setBrandModal(false)} />
      <CreateDevice show={deviceModal} onHide={() => setDeviceModal(false)} />
      <CreateType show={typeModal} onHide={() => setTypeModal(false)} />
    </Container>
  )
}
