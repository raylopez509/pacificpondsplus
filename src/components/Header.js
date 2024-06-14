import styles from "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img className="logo" src="pacificpondsplus.png"></img>
        </div>
        <div className="title">Pacific Ponds Plus</div>
        <div className="phone">(714)123-4567</div>
      </header>
    </>
  );
};

export default Header;
