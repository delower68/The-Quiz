import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
       
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-bold text-8xl text-gray-700'>
            <span className=''>404</span>
          </h2>
          <p className='text-2xl font-semibold md:text-xl mb-8'>
            Sorry, we couldn't find this page. Go Homepage
          </p>
          <Link
            to='/'
            className='px-9 py-4 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage