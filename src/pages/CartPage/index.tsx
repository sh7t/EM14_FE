import "./style.css";
import Layout from "../layout/Layout";
import { useAppSelector } from "../../hooks/redux.ts";
import type { CartItemType } from "../../types/cartItem.ts";
import CartItem from "../../components/CartItem";

const CartPage = () => {
  const userData = useAppSelector((state) => state.user);
  const userCart = userData.cart ?? [];
  const subtotal = userCart.reduce(
    (acc, item) => acc + item.book.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    // nothing there for now...
  };
  return (
    <Layout>
      <main className="main">
        <div className="cart-page">
          <div className="cart-container">
            <h2>My cart</h2>
            <hr />
            <div className="cart-headers">
              <div className="cart-header-product">Product</div>
              <div className="cart-header-price">Price</div>
              <div className="cart-header-total">Total</div>
            </div>
            {userCart.map((cartItem: CartItemType) => {
              return (
                <CartItem
                  key={cartItem.book.id}
                  bookId={cartItem.book.id}
                  quantity={cartItem.quantity}
                />
              );
            })}
          </div>
          <div className="cart-sidebar">
            <h3>SUMMARY</h3>
            <hr />
            <p>Do you have promo code?</p>
            <form className="promo-form" action="">
              <input
                className="promo-input"
                id="promo-input"
                name="promo-input"
              />
              <input className="promo-button" type="submit" value="APPLY" />
            </form>
            <hr />
            <h3 className="cart-span-end">
              SUBTOTAL
              <span>${subtotal.toFixed(2)}</span>
            </h3>
            <p className="cart-span-end">
              Shipping<span>$TBD</span>
            </p>
            <p className="cart-span-end">
              Sales tax<span>$TBD</span>
            </p>
            <hr />
            <h3 className="cart-span-end">
              ESTIMATED TOTAL<span>${subtotal.toFixed(2)}</span>
            </h3>
            <hr />
            <button onClick={handleCheckout}>Checkout</button>
            <span>Need help? Call us at 1-424-242-4242</span>
            <hr />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default CartPage;
