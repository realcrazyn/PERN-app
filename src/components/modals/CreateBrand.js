import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { createBrand } from '../../http/deviceAPI'

export const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState('')
  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      setValue('')
      onHide()
    })
  }

  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={'Enter brand name'}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={'outline-success'} onClick={addBrand}>
          Add
        </Button>
        <Button variant={'outline-danger'} onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
