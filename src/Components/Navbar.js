import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { useNavigate } from "react-router-dom";
import { auth, fs } from "../Config/Config";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import logo from "../Assets/Images/crazybillzlogo.svg";

export const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="navbar">
      <div className="leftside">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="rightside">
        {!user && (
          <>
            <div>
              <Link className="navlink " to="/signup">
                SIGN UP
              </Link>
            </div>
            <div>
              <Link className="navlink" to="/login">
                LOGIN
              </Link>
            </div>
          </>
        )}

        {user && (
          <>
            <div>
              <Link className="navlink" to="/">
                {user}
              </Link>
            </div>
            <div className="cart-menu-btn">
              <Link className="navlink" to="/cart">
                <Icon icon={shoppingCart} size={20} />
              </Link>
              {/* <span className='cart-indicator'>{totalQty}</span> */}
            </div>
            <div className="btn btn-danger btn-md" onClick={handleLogout}>
              LOGOUT
            </div>
          </>
        )}
      </div>
    </div>
  );
};
