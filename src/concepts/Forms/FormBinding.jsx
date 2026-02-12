import React, { useState } from 'react'

const FormBinding = () => {
    const [inps, setInps] = useState("")
    const [obj, setObj] = useState({
        name: "",
        email: "",
        phone: ""
    })
    let arr = []
    console.log('rendering...', arr)
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            arr.push(obj)
            console.log(arr)
        }} className='bg-black text-white h-screen flex flex-col gap-4 justify-center items-center '>
            <h1 className='text-5xl font-semibold '>{inps}</h1>
            <input value={obj.name} onChange={(e) => {
                // obj.name = 'shivam'
                // console.log(obj.name)
                // setObj(obj)      // this will not work because we are mutating the same object and react will not detect the change and will not re-render the component. we need to create a new object and set it to the state.

                setObj({ ...obj, name: e.target.value }) // this will work defenetly.
            }} className=' text-white border px-4 text-2xl rounded  bg-transparent ' type="text" placeholder='Enter your name.' />
            <input value={inps} onChange={(e) => {
                setInps(e.target.value)
            }} className=' text-white border px-4 text-2xl rounded  bg-transparent ' type="email" placeholder='Enter your email.' />
            <input value={inps} onChange={(e) => {
                setInps(e.target.value)
            }} className=' text-white border px-4 text-2xl rounded  bg-transparent ' type="tel" placeholder='Enter Your Phone.' />
            <button>Submit</button>
        </form>
    )
}

export default FormBinding