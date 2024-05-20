import { TiShoppingCart } from "react-icons/ti";

function Cart () {
    return(
        <div id="cart">
            <TiShoppingCart size={30} />

            <div id="cart-items">4</div>
        </div>

    );

}

export default Cart;