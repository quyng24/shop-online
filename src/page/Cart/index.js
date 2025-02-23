import { useSelector } from "react-redux";
import './Cart.scss';
import CartList from "./CartList";
import { useDispatch } from "react-redux";
import { deleteAll } from "../../action/Cart";

function Cart() {
    const cart = useSelector(state => state.cartReducer);
    const safeCart = Array.isArray(cart) ? [...cart] : [];
    const total = safeCart.reduce((sum, item) => sum + (item.info.price * item.quantity), 0);
    const dispath = useDispatch();
    const handleDelAll = () => {
        dispath(deleteAll());
    };
    return (
        <>
            <div className="cart">
                <div className="cart__header">
                    <h2>Cart</h2>
                    <button onClick={handleDelAll}>Delete All</button>
                </div>
                {cart.length > 0 ? (
                    <>
                        <CartList/>
                        <div className="cart__total">Total amount: <span>{total.toFixed(2)}$</span></div>
                    </>
                ) : (<h3 className="text-center">No products have been added yet</h3>)}
                
            </div>
        </>
    )
}
export default Cart;