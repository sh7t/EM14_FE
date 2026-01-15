import "./style.css";
import arrowDown from "../../assets/UI/arrow-down.svg";

const LoadMore = () => {
  return (
    <div className="load-more">
      <a href="https://tinyurl.com/thinking-gif" target="_blank">
        <img src={arrowDown} alt="Arrow down" />
        <h3>Load more</h3>
      </a>
    </div>
  );
};

export default LoadMore;
