import React, { useContext, useEffect } from 'react'
import NumberFormat from 'react-number-format';
import { Context } from '../../context/Context'

const ProductCard = ({product}) => {
  const {basket, addproduct, editproduct} = useContext(Context);

  const Handleadd = (e) => {
    e.preventDefault()
      addproduct(product)
  }

    return (
        <div key={product.id} className="group relative" onClick={(e) => Handleadd(e)}>
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">
          <NumberFormat decimalScale={2} fixedDecimalScale={true} value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
        </div>
      </div>
    )
}

export default ProductCard
