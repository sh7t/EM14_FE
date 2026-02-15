import "./style.css"
import {getBookWithAuthorById, getCategoryById} from "../../services/localStorageHelper.ts";

type CartItemProps = {
    bookId: number;
    quantity: number;
}

const CartItem = (cartItemProps: CartItemProps) => {
    const bookWithAuthorName = getBookWithAuthorById(cartItemProps.bookId)!;

    return (
        <div className="cart-item">
            <div className="item-image">
                <img src={bookWithAuthorName.image} alt="Cart item" height="170px"/>
            </div>
            <div className="item-info">
                <h3>{bookWithAuthorName.title}</h3>
                <p>Author: {bookWithAuthorName.authorName}</p>
                <p>Book ID: {bookWithAuthorName.id}</p>
                <p>Category: {getCategoryById(bookWithAuthorName.categoryId)?.name ?? ''}</p>
                <p>Description: {bookWithAuthorName.shortDescription}</p>
                <p>Publishing date: {new Date(bookWithAuthorName.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}</p>
                <p>Quantity: {cartItemProps.quantity}</p>
                <div className="item-quick-buttons">
                    <button>REMOVE</button>
                    <hr/>
                    <button>EDIT</button>
                </div>
            </div>
            <div className="item-price">
                <p>${bookWithAuthorName.price}</p>
            </div>
            <div className="item-total">
                <p>${bookWithAuthorName.price}</p>
            </div>
        </div>
    )
}

export default CartItem