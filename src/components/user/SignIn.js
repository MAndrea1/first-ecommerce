import { ReactComponent as Logo } from '../../media/Logo.svg';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { LockClosedIcon } from '@heroicons/react/solid'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignIn() {
const [password, setPassword] = useState()
const [email, setEmail] = useState()
const navigate = useNavigate()

const handleSignIn = (e) => {
    console.log('received')
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    navigate('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
}

  return (
    <>
      <div className="bg-brown-500 min-h-full flex items-center justify-center py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
          <Logo className='mx-auto h-12 w-auto block'aria-hidden="true"/>   
            <h2 className="mt-6 text-center text-3xl font-extrabold text-brown-800">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-brown-900 focus:border-brown-900 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => {setEmail(e.target.value)}}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-brown-900 focus:border-brown-900 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) => {setPassword(e.target.value)}}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-brown-600 focus:ring-brown-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                  <Link to='/sign-up' className="font-medium text-grey-100 hover:text-grey-200">
                  Don't have an account? Sign up!
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brown-600 hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
                onClick={(e) => {handleSignIn(e)}}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-brown-500 group-hover:text-brown-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
