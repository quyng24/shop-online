import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function CartList() {
    const cart = useSelector(state => state.cartReducer);
    return (
        <>
            <div className="cart__list">
                {cart.map(item => (
                    <CartItem item={item} key={item.id} />
                ))}
            </div>
        </>
    )
}
export default CartList;