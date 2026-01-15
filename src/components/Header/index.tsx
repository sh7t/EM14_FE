import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="our-blog">
        <h3>Our blog</h3>
      </div>
      <a href="https://tinyurl.com/ydpyjbmb" target="_blank">
        <h1>Resources and insights</h1>
      </a>
      <p>The latest industry news, interviews, technologies, and resources.</p>
      <label>
        <input type="text" placeholder="Search" />
      </label>
    </header>
  );
};

export default Header;
