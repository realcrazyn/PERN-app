import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Refrigirator' },
      { id: 2, name: 'Smartphone' },
      { id: 3, name: 'Notebooks' },
      { id: 4, name: 'TVs' },
    ]
    this._brands = [
      { id: 1, name: 'LG' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Samsung' },
    ]
    this._devices = [
      {
        id: 1,
        name: 'Iphone 11 Pro',
        price: 25000,
        rating: 5,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX0H2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1567304952459',
      },
      {
        id: 2,
        name: 'Iphone 11 Pro',
        price: 25000,
        rating: 5,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX0H2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1567304952459',
      },
      {
        id: 3,
        name: 'Iphone 11 Pro',
        price: 25000,
        rating: 5,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX0H2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1567304952459',
      },
      {
        id: 4,
        name: 'Iphone 11 Pro',
        price: 25000,
        rating: 5,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX0H2?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1567304952459',
      },
    ]
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }

  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}
