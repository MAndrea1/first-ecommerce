/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Context } from '../../context/Context'
import ShoppingCard from './ShoppingCard'
import NumberFormat from 'react-number-format'

export default function ShoppingCart({isOpen, setOpen}) {
    const { basket } = useContext(Context)

    const total = () => {
        return(
            basket?.reduce((amount, item) => amount + item.price * item.quantity, 0)
        )
    }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed z-50 inset-0 overflow-hidden" onClose={() => setOpen(false)}>
        <div className="absolute inset-0 overflow-hidden font-serif">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-brown-700 shadow-xl overflow-y-scroll">

                    <div className="flex items-start justify-between px-4 sm:px-6 pt-5">
                        <Dialog.Title className="text-lg font-medium text-brown-200 mb-5">Shopping cart</Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                        <button
                            type="button"
                            className="bg-brown-600 navbtn"
                            onClick={() => setOpen(false)}
                        >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        </div>
                    </div>

                    {basket?.length !== 0 ? <>
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                        <div className="mt-8">
                            <div className="flow-root">
                            <ul role="feed" className="-my-6 divide-y divide-gray-200">
                                {basket?.map((product, key) => (
                                    <ShoppingCard key={key} product={product}/>
                                ))}
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-brown-800 bg-brown-300 py-3 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-brown-900">
                            <p>Subtotal</p>
                            <NumberFormat decimalScale={2} fixedDecimalScale={true} value={total()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        </div>
                        <p className="mt-0.5 text-sm text-brown-700">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-3">
                            <a
                            href="/"
                            className="flex justify-center items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brown-600 hover:bg-brown-700"
                            >
                            Checkout
                            </a>
                        </div>
                        <div className="mt-3 flex justify-center text-sm text-center text-brown-700">
                            <p>
                            or{' '}
                            <button
                                type="button"
                                className="text-brown-600 font-medium hover:text-brown-900"
                                onClick={() => setOpen(false)}
                            >
                                Continue Shopping<span aria-hidden="true"> &rarr;</span>
                            </button>
                            </p>
                        </div>
                    </div> </> : <>
                                    <div className=" h-screen flex flex-col items-center justify-center">
                                        <h2 className="text-brown-300 text-2xl">Nothing yet!</h2>
                                        <button
                                            type="button"
                                            className="flex justify-center items-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brown-600 hover:bg-brown-800 mt-5"
                                            onClick={() => setOpen(false)}
                                        >
                                            Start Shopping<span aria-hidden="true"> &rarr;</span>
                                        </button>                                        
                                    </div>
                    </>}
                  
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
