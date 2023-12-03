import React from 'react'

const Input = (props) => {
    let {type, placeholder, value, name, id, disabled, label, className, onChange} = props
  return (
    <>
    <div class={`${className} mb-2`}>
      {
        label&&
      
      <label for={id} class="form-label text-muted mb-0 text-capitalize fw-bold">{name}</label>
      }

        <input
          className='form-control'
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            id={id}
            disabled={disabled?disabled:false}
            onChange={onChange}
        
        />
        </div>
    </>
  )
}

export default Input