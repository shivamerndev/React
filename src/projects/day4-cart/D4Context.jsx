import { createContext, useState } from 'react'
import axios from 'axios'
import { Star } from 'lucide-react'

export const ProductContext = createContext()

const D4Context = ({ children }) => {

    const lsp = JSON.parse(localStorage.getItem("products"))
    const [products, setProducts] = useState(lsp || null)
    const categories = [...new Set(lsp?.map(p => p.category))]
    const [carts, setCarts] = useState(JSON.parse(localStorage.getItem("carts")) || [])
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wish")) || [])

    const getProducts = async () => {
        try {
            let res = await axios.get("https://fakestoreapi.com/products")
            return res.data
        } catch (err) {
            console.log(err.message)
        }
    }

    const renderStars = (rating) => {

        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) stars.push(<Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)

        if (hasHalfStar) stars.push(<Star key="half" className="w-3 h-3 fill-yellow-400/50 text-yellow-400" />)

        const emptyStars = 5 - Math.ceil(rating);

        for (let i = 0; i < emptyStars; i++) stars.push(<Star key={`empty-${i}`} className="w-3 h-3 text-gray-300" />);

        return stars;
    }

    const addCart = (product) => {
        let lsc = JSON.parse(localStorage.getItem("carts")) || [];
        let newObj = lsc.find(c => c.id === product.id);
        let arr = [];
        if (newObj) {
            // Update quantity for existing product
            arr = lsc.map(c => c.id === product.id ? { ...c, quantity: c.quantity + 1 } : c);
        } else {
            // Add new product to cart
            arr = [...lsc, { id: product.id, quantity: 1 }];
        }
        localStorage.setItem("carts", JSON.stringify(arr));
        if (setCarts) setCarts(arr);
    }


    return (
        <ProductContext.Provider value={{ addCart, getProducts, setProducts, renderStars, products, lsp, categories, carts, setCarts, wishlist, setWishlist }}>
            {children}
        </ProductContext.Provider>
    )
}

export default D4Context