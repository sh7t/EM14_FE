import "./style.css"
import {useNavigate} from "react-router";

type BuyableBookPreviewProps = {
    title: string;
    authorName: string;
    coverUrl: string;
}

const BuyableBookPreview = (props: BuyableBookPreviewProps) => {
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

export default BuyableBookPreview;
