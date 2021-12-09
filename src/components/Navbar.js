import { useState, useContext } from 'react'
import { Disclosure } from '@headlessui/react'
import { XIcon, ChipIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../media/Logo.svg';
import { Context } from '../context/Context'
import ShoppingCart from './shopping/ShoppingCart';

const navigation = [
  { name: 'True', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const {user} = useContext(Context)

  return (
    <Disclosure as="nav" className="bg-brown-700 fixed w-screen z-40">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="navbtn">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <ChipIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center ml-2">
                  <Logo className='block h-8 w-auto'aria-hidden="true"/>                 
                  <h1 className='text-2xl italic text-gray-200 lg:block sm:hidden'>'N Craft</h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-brown-900 text-white' : 'text-gray-300 hover:bg-brown-800 hover:text-brown-200',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <h3 className="text-brown-300 mr-3">Hello, {user}!</h3>
                <button
                  type="button"
                  className="px-4 bg-brown-600 navbtn"
                > Sign Up
                </button>
                <ShoppingBagIcon onClick={() => setOpen(true)} className="navbtn block h-10 ml-2 bg-brown-600"/>
                <ShoppingCart isOpen={isOpen} setOpen={setOpen}/>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name}>
                  <Link
                      to={item.href}
                      className={classNames(
                        item.current ? 'bg-brown-900 text-white' : 'text-gray-300 hover:bg-brown-800 hover:text-brown-200',
                        'flex px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
