import './style.css'
import type {News} from '../../types/News.ts'

const Newspaper = (props: News) => {
    return (
        <div>
            <h2>Title: {props.title}</h2>
            <p>Time: {props.time.getUTCDate()}.{props.time.getMonth()}.{props.time.getFullYear()}, {props.time.getHours()}:{props.time.getMinutes()}</p>
            <p>Link: <a href={props.newsUrl} color="blue" target="_blank">click here!</a></p>
            <p>Important: {props.isImportant ? "Yes" : "No"}</p>
        </div>
    );
};

export default Newspaper;
