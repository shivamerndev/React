import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import Loader from '../../utils/Loader'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from './D4Context'

const Wishlist = () => {

  const { wishlist } = useContext(ProductContext)
  const [wishes, setWishes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    let lsp = JSON.parse(localStorage.getItem("products")) || []
    let newArr = lsp.filter((p) => wishlist.includes(p.id))
    setWishes(newArr)
  }, [wishlist])

  return (
    <div className='min-h-screen bg-gray-300 relative'>
      <h1 className='bg-gray-200 shadow-md sticky top-0 z-40  text-center text-4xl font-bold  py-4'>
      <span onClick={() => navigate(-1)} className='text-base text-red-400 absolute z-50 top-6 left-8 font-semibold  cursor-pointer'>Back</span>
         Wishlist Page</h1>
      {wishes.length ? <div className='grid grid-cols-5 gap-6 mt-8 px-12 '>
        {wishes.map(p => <Card key={p.id} discount={Math.floor(Math.random() * 50)} product={p} />)}
      </div> : <h1 className='text-center content-center h-[80vh] text-2xl capitalize font-semibold' > Your Wishlist is blank.</h1>}
    </div>
  )
}

export default Wishlist