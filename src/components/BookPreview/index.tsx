import "./style.css"

type BookPreviewProps = {
    title: string;
    authorName: string;
    coverUrl: string;
}

const BookPreview = (props: BookPreviewProps) => {
    return (
        <div className="book-preview">
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

    )
}

export default BookPreview;
