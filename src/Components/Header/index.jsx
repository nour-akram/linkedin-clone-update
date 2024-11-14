import { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { SingOutAPI } from "../../redux/actions";
// import { useNavigate } from "react-router-dom"
// import Cookies from "js-cookie";

const Header = () => {
  const [active, setActive] = useState(null);
  const [showLogout, setLogout] = useState(false);

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const user = useSelector((state) => state.userState.user);
  const handelShowLogOutPopup = () => {
    setLogout(!showLogout);
  };

  const handleItemClick = (index) => {
    setActive(index);
    if (index === 5) {
      handelShowLogOutPopup();
    } else {
      setLogout(false);
    }
  };

  // const token = Cookies.get("accessToken");
  // useEffect(() => {
  //   if (!token) {
  //     navigate("/", { replace: true });
  //   }
  // }, [token, navigate]);

  return (
    <div className="header">
      <div className="header_content">
        <div className="container">
          <div className="logo">
            <img src="/Images/home-logo.svg" alt="Logo not found" />
          </div>
          <div className="search">
            <img src="/Images/search-icon.svg" alt="Search icon not found" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <ul className="navItems">
          {[
            { icon: "/Images/nav-home.svg", label: "Home" },
            { icon: "/Images/nav-network.svg", label: "My Network" },
            { icon: "/Images/nav-jobs.svg", label: "Jobs" },
            { icon: "/Images/nav-messaging.svg", label: "Messaging" },
            { icon: "/Images/nav-notifications.svg", label: "Notifications" },
            { icon: "/Images/user.svg", label: "Me", hasDropdown: true },
            { icon: "/Images/nav-work.svg", label: "Work", hasDropdown: true },
          ].map((item, index) => (
            <li
              key={index}
              className={`navList ${active === index ? "active" : ""}`}
              onClick={() => handleItemClick(index)}
            >
              <a href="#">
                {item.label === "Me" && user && user.photoURL ? (
                  <img src={user.photoURL} alt="Icon not found" />
                ) : (
                  <img src={item.icon} alt="Icon not found" />
                )}
                <span>
                  {item.label}
                  {item.hasDropdown && (
                    <img src="/Images/down-icon.svg" alt="Dropdown icon not found" />
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
        {showLogout && (
          <div className="logout-popup">
            <div onClick={() => dispatch(SingOutAPI())}>Logout</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
