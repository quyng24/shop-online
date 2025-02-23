import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartMini() {
    const cart = useSelector(state => state.cartReducer);
    const safeCart = Array.isArray(cart) ? [...cart] : [];
    const total = safeCart.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <>
            <Link to='/cart'>Cart({total})</Link>
        </>
    )
}
export default CartMini;