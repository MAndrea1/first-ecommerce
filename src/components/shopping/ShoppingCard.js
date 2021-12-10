import React, { useContext } from 'react'
import NumberFormat from 'react-number-format'
import { Context } from '../../context/Context'

const ShoppingCard = ({product}) => {
    const {removefrombasket} = useContext(Context)

    const Handleremove = (e) => {
        e.preventDefault()
        removefrombasket(product)
      }

    return (
        <li className="bg-brown-300 p-6 mb-5 rounded-md flex">
        <div className="flex-shrink-0 w-24 h-24 border-brown-900 rounded-md overflow-hidden">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="ml-4 flex-1 flex flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-brown-800">
              <h3>
                <a href={product.href}>{product.name}</a>
              </h3>
              <p className="ml-4"><NumberFormat decimalScale={2} fixedDecimalScale={true} value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
            </div>
            <p className="mt-1 text-sm text-brown-800">{product.description}</p>
          </div>
          <div className="flex-1 flex items-end justify-between text-sm">
            <p className="text-gray-500">Qty {product.quantity}</p>

            <div className="flex">
              <button onClick={Handleremove} type="button" className="font-medium text-brown-600 hover:text-brown-900">
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    )
}

export default ShoppingCard
