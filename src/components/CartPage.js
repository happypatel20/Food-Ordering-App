import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../utils/cartSlice";


const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return <div className="m-8 w-6/12 mx-auto">
    <h1 className="text-3xl font-bold text-center bg-slate-300 rounded-lg p-3">cart</h1>
    <button className="p-2 bg-black text-white rounded-lg ml-auto flex mt-3" onClick={handleClearCart}>Clear Cart</button>
    <MenuItemList items={cartItems} />
  </div>
}

export default CartPage
