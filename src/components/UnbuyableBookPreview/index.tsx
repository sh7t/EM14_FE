import "./style.css"
import {useNavigate} from "react-router";

type UnbuyableBookPreviewProps = {
    title: string;
    authorName: string;
    coverUrl: string;
    price: number;
}

const UnbuyableBookPreview = (props: UnbuyableBookPreviewProps) => {
    const navigate = useNavigate();
    return (
        <div className="unbuyable-book-preview">
            <div className="unbuyable-clickable-preview" onClick={() => navigate("/")}>
                <div className="unbuyable-cover">
                    <img src={props.coverUrl} alt="Cover"/>
                </div>
                <div className="unbuyable-title">
                    <span>{props.title}</span>
                </div>
                <div className="unbuyable-author">
                    <span>{props.authorName}</span>
                </div>
                <div className="unbuyable-price">
                    <span>${props.price}</span>
                </div>
            </div>
        </div>
    )
}

export default UnbuyableBookPreview;
