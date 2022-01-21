import { useContext } from 'react'
import { Context } from '..'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'

export const NavBar = observer(() => {
  const { user } = useContext(Context)

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          BuyDevice
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'}>Admin panel</Button>
            <Button
              variant={'outline-light'}
              style={{ marginLeft: '10px' }}
              onClick={() => {
                user.setIsAuth(false)
              }}
            >
              Exit
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => {
                user.setIsAuth(true)
              }}
            >
              Auth
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
})
