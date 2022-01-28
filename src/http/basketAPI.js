import { $host } from '.'

export const fetchBasketDevices = async (id) => {
  const data = await $host.post('api/basket', { id })
  return data
}

export const addBasketDevice = async (deviceId, basketId) => {
  const data = await $host.post('api/basket/add', { deviceId, basketId })
  return data
}
