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
        <div className="buyable-book-preview">
            <div className="buyable-clickable-preview" onClick={() => navigate("/")}>
                <div className="buyable-cover">
                    <img src={props.coverUrl} alt="Cover"/>
                </div>
                <div className="buyable-title">
                    <span>{props.title}</span>
                </div>
                <div className="buyable-author">
                    <span>{props.authorName}</span>
                </div>
                <div className="buyable-add-to-cart">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>

    )
}

export default BuyableBookPreview;
