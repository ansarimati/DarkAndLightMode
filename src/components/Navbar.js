import { Link } from "react-router-dom";
import { useTheme } from "../Theme-context";
import { useContext } from "react";
import { ThemeContext } from "../Theme-context";

const Navbar = () => {
    const { theme, toggleMode } = useTheme();
    // const { theme, toggleMode } = useContext(ThemeContext);
    console.log(toggleMode);

    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>

            <button onClick={() => toggleMode()}>Change mode</button>
        </div>
    )
};

export default Navbar