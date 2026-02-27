import "./style.css";
import { useAppDispatch } from "../../hooks/redux.ts";
import { addBookToCart } from "../../store/slices/userSlice.ts";
import type { CartItemType } from "../../types/cartItem.ts";
import { getBookById } from "../../services/localStorageHelper.ts";

type AddToCartProps = {
  bookId: number;
};

const AddToCart = (props: AddToCartProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const book = getBookById(props.bookId);
    if (!book) {
      return;
    }
    const item: CartItemType = {
      book: book,
      quantity: 1,
    };
    dispatch(addBookToCart(item));
  };

  return (
    <button className="add-to-cart-button" onClick={handleClick}>
      Add to cart
    </button>
  );
};
export default AddToCart;
