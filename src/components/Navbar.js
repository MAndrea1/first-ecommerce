import { useState, useContext, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { XIcon, ChipIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../media/Logo.svg';
import { Context } from '../context/Context'
import ShoppingCart from './shopping/ShoppingCart';
import { getAuth, signOut } from "firebase/auth";

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
  const {user, totalItems, setusername} = useContext(Context)
  const {emptybasket} = useContext(Context)
  const auth = getAuth();

  const SignInOutButton = () => {
    if (user === 'Guest') {
      return(
        <Link to='/sign-in'>
        <button
          type="button"
          className="px-4 bg-brown-600 navbtn shrink-0"
        > Sign In
        </button>
      </Link>
      )
    } else {
      return(
        <button onClick={() => {
          signOut(auth).then(() => {
            emptybasket();
            setusername('Guest')
          }).catch((error) => {
            // An error happened.
          });
        }}
          type="button"
          className="px-4 bg-brown-600 navbtn"
        > Sign out
        </button>
      )
    }
  }

  return (
    <Disclosure as="nav" className="bg-brown-700 fixed w-screen z-40">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
            <div className="relative flex items-center justify-between h-16 pr-5">
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
              <div className="invisible sm:flex-1 sm:visible flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center ml-2">
                    <Link to='/'>
                  <Logo className='block h-8 w-auto'aria-hidden="true"/>                 
                  </Link>
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
              <div className="inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-3">
                <h3 className="text-brown-300 mr-3 flex-grow">Hello, {user}!</h3>
                 <SignInOutButton/>
                 <span class="relative inline-block sm:mr-3">
                <ShoppingBagIcon onClick={() => setOpen(true)} className="navbtn block h-10 ml-2 bg-brown-600"/>
                {totalItems ? <span class="mt-1 absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{totalItems}
                  </span> : null}
                </span>
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
