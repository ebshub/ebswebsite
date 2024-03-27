import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css"

export const Navbar = () => {
  // const toggle_mode = () => {
  //     toggle == 'cart' ? setToggle('horse') :
  // }

  //onClick={()=>{toggle_mode()}}
  return (
    <div className="navbar ">
      <div className="links">
        <Link className="shopIcon" to="/">
          Home
        </Link>
        <Link className="cartIcon " to="/cart">
          <ShoppingCart size={20} />
        </Link>
      </div>
    </div>
  );
};
