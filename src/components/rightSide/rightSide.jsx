import React from 'react'
import InputBox from './inputBox'
import FieldCardHolder from './fieldCardHolder'

export default function RightSide(){
    return(
        <div className='w-1/2 p-12 flex flex-col items-center'>
        {/* <InputBox/> */}
        <FieldCardHolder/>
        </div>
    )
}