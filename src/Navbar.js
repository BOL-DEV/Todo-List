import "./Navbar.css";

const Navbar = ({ onToggleTheme, theme }) => {
  return (
    <nav className="nav-container">
      <h1>T O D O</h1>
      <img
        src={
          theme === "dark" ? "/images/icon-sun.svg" : "/images/icon-moon.svg"
        }
        alt={theme === "dark" ? "sun" : "moon"}
        onClick={onToggleTheme}
        style={{ cursor: "pointer" }}
      />
    </nav>
  );
};

// import "./Navbar.css"

// const Navbar = () => {
//     return <nav className="nav-container">
//         <h1>T O D O</h1>
//         <img src="/images/icon-sun.svg" alt="sunn"/>
//     </nav>
// }

export default Navbar
