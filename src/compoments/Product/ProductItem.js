import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, updateCart } from "../../action/Cart";
import { useSelector } from "react-redux";
import cartReducer from "../../reducer/Cart";

function ProductItem(props) {
    const { item } = props;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer);
    const handleAddCart = () => {
        if(cart.some(itemCart => itemCart.id === item.id)) {
            dispatch(updateCart(item.id));
        } else {
            dispatch(addToCart(item.id, item));
        }
    }
    return (
        <>
            <div className="product__item">
                <div className="product__img">
                    <img src={item.thumbnail} />
                </div>
                <h3 className="product__title">{item.title}</h3>
                <p className="product__desc">{item.description}</p>
                <div className="product__price">
                    <p>{item.price}</p>
                    <span>{item.discountPercentage}%</span>
                </div>
                <p className="product__rating"><FaStar/>{item.rating}</p>
                <div className="product__footer">
                    <p className="product__brand">{item.brand}</p>
                    <button onClick={handleAddCart}>Add Cart</button>
                </div>
            </div>
        </>
    )
}
export default ProductItem;