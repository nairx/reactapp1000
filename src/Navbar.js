import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <Link to="/product">Home</Link> |
      <Link to="/cart">Cart</Link> | 
      <Link to="/login">Login</Link>
    </div>
  )
}
