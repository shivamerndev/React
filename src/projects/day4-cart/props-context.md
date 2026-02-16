// productPage
let lsp = JSON.parse(localStorage.getItem("products"))
const [carts, setCarts] = useState(JSON.parse(localStorage.getItem("carts")) || [])
const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wish")) || [])
const [products, setProducts] = useState(lsp || null)

getProducts, setProducts, products, lsp, categories =>

// Nav reciver from productPage
carts, wishlist <=

// Card reciver from ProductPage
setCarts, setWishlist, wishlist <=
RenderStar =>

// Wishlist
 const [lsw, setLsw] = useState(JSON.parse(localStorage.getItem("wish")) || [])

// Cart Page
const [carts, setCarts] = useState(JSON.parse(localStorage.getItem("carts")) || [])


First time fetch and chache in localstorage then never fetch.
cart me only [1,2,4]
wish me only [2,1,4]
get data by those id in cart page and wishlist page
state manged by context
category wise filteraiton
search wise filteration
discount add with math calculation
Star rendering
animated cart btn