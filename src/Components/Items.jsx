import React from 'react'
import {MdDeleteForever, MdCheck, MdCancel} from 'react-icons/md'

const Items = ({data,deleteHandler,updateStatus}) => {
  return (
    <div>
      <div className='text-[#494c6b] px-5 h-16 flex border-t-[1px] border-solid border-black justify-between items-center bg-white w-[700px]'>
        <div className='flex items-center'>
          {data.complete ?
          <MdCheck onClick={ () => updateStatus(data.id)} className='h-4 w-4 mr-3 text-[#3a7cfd]'/> 
          :
          <MdCancel onClick={ () => updateStatus(data.id)} className='h-4 w-4 mr-3 text-[#3a7cfd]'/>}
          <p className={`${data.complete && "line-through"}`}>{data.todoTitle}</p>
        </div>
        <MdDeleteForever onClick={() => deleteHandler(data.id)}className=' text-red-500 h-5 w-5'/>

      </div>
    </div>
  )
}

export default Items 