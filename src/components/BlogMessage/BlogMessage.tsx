import './style.css'
import type {Blog} from '../../types/Blog.ts'

const BlogMessage = (props: Blog) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p className="date">
                {props.date.toLocaleDateString("en-US", {month: "long", year: "numeric", day: "2-digit"})}
            </p>
            <p>{props.mainInformation}</p>
            <p><a href={props.readMoreUrl} color="blue" target="_blank">Read more</a></p>
        </div>
    )
}

export default BlogMessage;