import "./style.css"
import {useNavigate} from "react-router"

type BookPreviewProps = {
    title: string;
    authorName: string;
    coverUrl: string;
    variant: "buyable" | "unbuyable";
    price?: number;
}

const BookPreview = (props: BookPreviewProps) => {
    const navigate = useNavigate();

    return (
        <div className={`book-preview book-preview--${props.variant}`}>
            <div
                className="book-preview-clickable"
                onClick={() => navigate("/")}>
                <div className="book-preview-cover">
                    <img src={props.coverUrl} alt="Cover"/>
                </div>

                <p className="book-preview-title">{props.title}</p>

                <p className="book-preview-author">{props.authorName}</p>

                {props.variant === "buyable" && (
                    <div className="book-preview-footer">
                        <button>Add to cart</button>
                    </div>
                )}

                {props.variant === "unbuyable" && props.price && (
                    <p className="book-preview-price">${props.price}</p>
                )}
            </div>
        </div>
    )
}

export default BookPreview;