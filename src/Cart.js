import React from 'react'
import { useContext } from 'react'
import {AppContext} from './App'
export default function Cart() {
  const {name,setName} = useContext(AppContext)
 

  return (
    <div>
      {/* {name}
      <button onClick={()=>setName("Rashmi")}>Submit</button> */}
    </div>
  )
}
