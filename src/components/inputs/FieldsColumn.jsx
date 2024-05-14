import React from 'react'

export default function FieldsColumn(props) {
  return (
    <div className='md:w-full flex flex-col space-y-4'>
        {props.children}
    </div>
  )
}