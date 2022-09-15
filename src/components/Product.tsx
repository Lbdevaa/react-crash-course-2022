import React from 'react'
import { IProduct } from '../models';

interface ProductProps {
  product: IProduct
}

export default function Product(props: ProductProps) {
  console.log(props);
  return (
    <div className='border p-2'>
      {props.product.title}
    </div>
  )
}
