// interface - ни во что не конверитруется с точки зрения js
// описывает типы объектов
export interface IProduct {
  id?: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}