import "./style.css";
import {
  getBookWithAuthorById,
  getCategoryById,
} from "../../services/localStorageHelper.ts";
import { useAppDispatch } from "../../hooks/redux.ts";
import {
  removeBookFromCart,
  updateBookQuantity,
} from "../../store/slices/userSlice.ts";
import { useState } from "react";

type CartItemProps = {
  bookId: number;
  quantity: number;
};

const CartItem = (cartItemProps: CartItemProps) => {
  const bookWithAuthorName = getBookWithAuthorById(cartItemProps.bookId)!;
  const dispatch = useAppDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [newQuantity, setNewQuantity] = useState(cartItemProps.quantity);

  const handleRemove = () => dispatch(removeBookFromCart(cartItemProps.bookId));
  const handleEdit = () => setIsEdit(true);
  const handleCancel = () => {
    setNewQuantity(cartItemProps.quantity);
    setIsEdit(false);
  };
  const handleUpdate = () => {
    dispatch(
      updateBookQuantity({
        book: bookWithAuthorName,
        quantity: cartItemProps.quantity,
      }),
    );
    setIsEdit(false);
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={bookWithAuthorName.image} alt="Cart item" height="170px" />
      </div>
      <div className="item-info">
        <h3>{bookWithAuthorName.title}</h3>
        <p>Author: {bookWithAuthorName.authorName}</p>
        <p>Book ID: {bookWithAuthorName.id}</p>
        <p>
          Category: {getCategoryById(bookWithAuthorName.categoryId)?.name ?? ""}
        </p>
        <p>Description: {bookWithAuthorName.shortDescription}</p>
        <p>
          Publishing date:{" "}
          {new Date(bookWithAuthorName.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p>
          Quantity:{" "}
          {isEdit ? (
            <input
              type="number"
              value={newQuantity}
              min={1}
              onChange={(e) => setNewQuantity(Number(e.target.value))}
            />
          ) : (
            newQuantity
          )}
        </p>
        <div className="item-quick-buttons">
          {isEdit ? (
            <>
              <button onClick={handleUpdate}>UPDATE</button>
              <hr />
              <button onClick={handleCancel}>CANCEL</button>
            </>
          ) : (
            <>
              <button onClick={handleRemove}>REMOVE</button>
              <hr />
              <button onClick={handleEdit}>EDIT</button>
            </>
          )}
        </div>
      </div>
      <div className="item-price">
        <p>${bookWithAuthorName.price}</p>
      </div>
      <div className="item-total">
        <p>${(bookWithAuthorName.price * newQuantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
