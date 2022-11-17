import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

export default function Products() {
  return (
    <>
        <input type='search' placeholder="search for product"/>
        <nav className='secondry-nav'>
            <Link to="featured">Featured</Link>
            <Link to="new">New</Link>
        </nav>
        <Outlet/>
    </>
  )
}
