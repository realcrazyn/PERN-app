import { observer } from 'mobx-react-lite'
import { Fragment, useContext, useEffect, useState } from 'react'
import { Context } from '..'
import { DeviceItem } from '../components/DeviceItem'
import { fetchBasketDevices } from '../http/basketAPI'

export const Basket = observer(() => {
  const [basket, setBasket] = useState([])

  const { user } = useContext(Context)

  useEffect(() => {
    fetchBasketDevices(user.user.id).then((data) => {
      console.log(data)
      setBasket(data.data.map((el) => el))
    })
  }, [])

  if (basket.length !== 0) {
    return (
      <Fragment>
        <div className="d-flex">
          {basket.map((device, i) => (
            <DeviceItem key={i} device={device} />
          ))}
        </div>
      </Fragment>
    )
  }
  return <h1>Basket is empty</h1>
})
