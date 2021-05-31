import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Create Your Own</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.midas-pr.com/wp-content/uploads/2020/06/blog-sample.jpg"
        alt=""
      />
    </div>
  );
}
