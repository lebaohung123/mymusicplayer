import "./SideNav.css";
import { MdOutlineMusicVideo, MdOndemandVideo } from "react-icons/md";
import { SiCircle } from "react-icons/si";
import { FaChartLine } from "react-icons/fa";
import { GiMusicSpell } from "react-icons/gi";
import { BiNews, BiCategoryAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FiMusic } from "react-icons/fi";
import { AiOutlineLeft, AiOutlineRight, AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";

const SideNav = () => {
  const [showNav, setShowNav] = useState(true);
  const showSideNav = () => {
    document.querySelector(".sideNav").classList.toggle("tablet");
  };

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, [showNav]);

  return (
    <div className={`sideNav ${showNav ? " " : "tablet"}`}>
      <NavLink to="/" className="logo">My Music</NavLink>
      <div className="navigation">
        <NavLink to="/mymusic" className="navigation-item" title="Individual ">
          <img src="https://img.icons8.com/?size=512&id=u2YES2H0rze7&format=png" alt="" className="iconImg"/>
          <span className="navigation-item-title">My Music</span>
        </NavLink>

        <NavLink to="/" className="navigation-item" title="Discover">
          <img src="https://img.icons8.com/?size=512&id=vEhf1Go2f5ed&format=png" alt="" className="iconImg" />
          <span className="navigation-item-title">Discover</span>
        </NavLink>
        <NavLink
          to="/chart"
          className="navigation-item"
          title="MyMusic chart"
        >
          <div className="navigation-item-icon">
            <img src="https://img.icons8.com/?size=512&id=11890&format=png" alt="" className="iconImg" />
          </div>
          <div className="navigation-item-title">Chart</div>
        </NavLink>
        <NavLink to="/radio" className="navigation-item" title="Radio">
          <img src="https://img.icons8.com/?size=512&id=9LJb35C3K8Gp&format=png" alt="" className="iconImg" />
          <div className="navigation-item-title">Radio</div>
        </NavLink>
        <NavLink to="/follow" className="navigation-item" title="Following">
          <img src="https://img.icons8.com/?size=512&id=Am8K12nmaCH1&format=png" alt="" className="iconImg" />
          <div className="navigation-item-title">Following</div>
        </NavLink>
        <div className="side-line">
          <span></span>
        </div>
        <div className="subSideNav">
          <NavLink to="/newmusic" className="navigation-item" title="New Music">
            <img src="https://img.icons8.com/?size=512&id=31151&format=png" alt="" className="iconImg" />
            <div className="navigation-item-title">New Music</div>
          </NavLink>
          <NavLink to="/category" className="navigation-item" title="Category">
            <img src="https://img.icons8.com/?size=512&id=jdWoHcgiEf4n&format=png" alt="" className="iconImg" />
            <div className="navigation-item-title">Category</div>
          </NavLink>
          <NavLink to="/topmusic" className="navigation-item" title="Top 100">
            <img src="https://img.icons8.com/?size=512&id=104236&format=png" alt="" className="iconImg" />
            <div className="navigation-item-title">Top 100</div>
          </NavLink>
        </div>
      </div>
      <div
        className="showNavBtn"
        style={{ display: `${showNav ? "none" : "flex"}` }}
      >
        <div className="showNav-icon open" onClick={showSideNav}>
          <AiOutlineRight />
        </div>
        <div className="showNav-icon close" onClick={showSideNav}>
          <AiOutlineLeft />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
