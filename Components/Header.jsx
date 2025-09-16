import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";

export default function Header() {
  [isDark, setIsDark] = useTheme();
  return (
    <header className={`header-container ${isDark? "dark-mode" : ""}`}>
      <div className="header-content">
        <Link to="/" className="title">
          Where in the world?
        </Link>
        <div
          className="theme-mode"
          onClick={() => {
            setIsDark((prevState) => {
              localStorage.setItem("IsDarkMode",!prevState);
              return !prevState});
          }}
        >
          {isDark ? (
            <>
              <i className="material-symbols-outlined">light_mode</i>
              <p>Light Mode</p>
            </>
          ) : (
            <>
              <i className="material-symbols-outlined">dark_mode</i>
              <p>Dark Mode</p>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
