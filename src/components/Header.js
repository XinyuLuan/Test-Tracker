import React from "react";
// function doesn't need this
import PropTypes from "prop-types";
import Button from "./Button";

//prep to {title} distructure
const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  return (
    <header className="header">
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick}></Button>
      {/* <Button color="blue" text="Hello"></Button>
      <Button color="red" text="Hello"></Button> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Test Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in js
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };
export default Header;

// import React from "react";

// class Header extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>;
//   }
// }

// export default Header;
