import React from 'react'
import { formatPrice } from '../utils'

const FormInput = ({label,name,type,defaultValue, size, maxPrice}) => {
  return (
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text capitalize">{label}</span>
  </label>
  <input type={type} 
  name={name}
  defaultValue={defaultValue}
 className={`input input-bordered ${size}`} />
 {/* <div className="w-full flex justify-between text-xs px-2 mt-2">
  <span className='font-bold text-md'>0</span>
  <span className='font-bold text-md'>Max : {formatPrice(maxPrice)}</span>
 </div> */}
</div>
  )
}

export default FormInput