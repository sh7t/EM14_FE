import "./style.css";
import type { PostType } from "../../types/postType.ts";
import arrowUpRight from "../../assets/UI/arrow-up-right.svg";

const Post = (props: PostType) => {
  return (
    <div className="post" id={"post-" + props.id}>
      <img src={props.imageUrl} alt="Posted image" />
      <div className="post-info">
        <p className="theme">{props.theme}</p>
        <div className="post-title">
          <h2>{props.title}</h2>
          <a href={props.redirectTo} target="_blank">
            <img src={arrowUpRight} alt="Arrow up-right" />
          </a>
        </div>
        <p className="post-description">{props.description}</p>
      </div>
      <div className="post-author">
        <img
          src={props.authorImageUrl}
          alt={"Picture of " + props.authorName}
        />
        <div className="post-author-info">
          <p>{props.authorName}</p>
          <span>
            {props.publishedAt.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
