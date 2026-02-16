import { Package, ShoppingCart } from 'lucide-react';
import { useContext, useState } from 'react'
import "./Animate.css"
import { ProductContext } from './D4Context';

const AnimatedCart = ({ product }) => {

    const { addCart } = useContext(ProductContext)
    const [isClicked, setIsClicked] = useState(false);
    const [showAdded, setShowAdded] = useState(false);

    const animateBtn = (product) => {
        addCart(product)
        setIsClicked(true)
        setTimeout(() => {
            setShowAdded(true)
        }, 2000);
        setTimeout(() => {
            setIsClicked(false)
            setShowAdded(false)
        }, 3000);
    }

    return <button onClick={() => animateBtn(product)} className={`w-10/12 mx-auto  text-sm bg-gradient-to-br cursor-pointer from-orange-600  to-amber-600 via-rose-400 via-20%  ${isClicked ? "h-10" : "h-8"} text-white font-semibold mb-2 py-1  md:py-2 px-4 rounded-full transition-all duration-300 transform  hover:scale-105 shadow-lg hover:shadow-xl  relative overflow-hidden flex items-center justify-center gap-2`}>
        {isClicked && <ShoppingCart id='carticon' className=" w-5  sm:w-6 sm:h-6  z-20 top-1/2 absolute -translate-x-1/2 -translate-y-1/2" />}
        {!isClicked && <ShoppingCart className={`  w-4 h-4 {pd ? "block" : "hidden"} sm:block `} />}
        {showAdded ? 'Added ✔️' : !isClicked ? 'Add to cart' : ""}
        {isClicked && <Package id='boxicon' className=" absolute z-30 -translate-x-1/2 -translate-y-1/2 w-3 h-3 " />}
    </button>
}

export default AnimatedCart