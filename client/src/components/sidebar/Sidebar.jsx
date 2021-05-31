import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/236x/90/88/00/908800002942ab99979fe188fd7f83bc.jpg"
          alt=""
        />
        <p>
          Writting blogs are fun and awesome. Start writing your own blogs and post them online. Create your own blog and stay clam.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="sidebarIcon fab fa-facebook-square"></i></a>
           <a href="https://twitter.com/?logout=1622440057089" target="_blank" rel="noopener noreferrer">
          <i className="sidebarIcon fab fa-twitter-square"></i></a>
          <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer">
          <i className="sidebarIcon fab fa-pinterest-square"></i></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="sidebarIcon fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
  );
}
