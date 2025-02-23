import { useDispatch } from "react-redux";
import { deleteCart, updateCart } from '../../action/Cart';
import { useRef } from "react";

function CartItem(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const inputRef = useRef();
    const handleUp = () => {
        dispatch(updateCart(item.id));
        inputRef.current.value = parseInt(inputRef.current.value) + 1;
    };
    const handleDown = () => {
        if(item.quantity > 1) {
            dispatch(updateCart(item.id, -1));
            inputRef.current.value = parseInt(inputRef.current.value) - 1;
        }
    };
    const HandleDel = () => {
        dispatch(deleteCart(item.id));
    }
    return (
        <>
            <div className="cart__item">
                <img src={item.info.thumbnail}/>
                <div className="cart__content">
                    <h4>{item.info.title}</h4>
                    <p>{item.info.price}$</p>
                </div>
                <div className="cart__quantity">
                    <button onClick={handleDown}>-</button>
                    <input ref={inputRef} defaultValue={item.quantity} />
                    <button onClick={handleUp}>+</button>
                </div>
                <button onClick={HandleDel}>Del</button>
            </div>
        </>
    )
}
export default CartItem;