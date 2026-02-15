import "./style.css"
import Layout from "../layout/Layout";
import CartItem from "../../components/CartItem";

const CartPage = () => {
    const handleCheckout = () => {
        // nothing there for now...
    }
    return (
        <Layout>
            <main className="main">
                <div className="cart-page">
                    <div className="cart-container">
                        <h2>My cart</h2>
                        <hr/>
                    </div>
                    <div className="cart-sidebar">
                        <h3>SUMMARY</h3>
                        <hr/>
                        <p>Do you have promo code?</p>
                        <form className="promo-form" action="">
                            <input className="promo-input" id="promo-input" name="promo-input"/>
                            <input className="promo-button" type="submit" value="APPLY"/>
                        </form>
                        <hr/>
                        <h3 className="cart-span-end">SUBTOTAL<span>$1090.50</span></h3>
                        <p className="cart-span-end">Shipping<span>$TBD</span></p>
                        <p className="cart-span-end">Sales tax<span>$TBD</span></p>
                        <hr/>
                        <h3 className="cart-span-end">ESTIMATED TOTAL<span>$1090.50</span></h3>
                        <hr/>
                        <button onClick={handleCheckout}>Checkout</button>
                        <span>Need help? Call us at 1-424-242-4242</span>
                        <hr/>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default CartPage;
