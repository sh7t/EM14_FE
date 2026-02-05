import "./style.css"
import {useNavigate} from "react-router";

type BookPreviewProps = {
    title: string;
    authorName: string;
    coverUrl: string;
}

const BookPreview = (props: BookPreviewProps) => {
    const navigate = useNavigate();
    return (
        <div className="book-preview">
            <div className="clickable-preview" onClick={() => navigate("/")}>
                <div className="cover">
                    <img src={props.coverUrl} alt="Cover"/>
                </div>
                <div className="title">
                    <span>{props.title}</span>
                </div>
                <div className="author">
                    <span>{props.authorName}</span>
                </div>
                <div className="add-to-cart">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>

    )
}

export default BookPreview;
