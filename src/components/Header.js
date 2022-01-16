import React from "react";
import PropTypes from "prop-types";
// function doesn't need this

//prep to {title} distructure
const Header = ({ title }) => {
  return (
    <header>
      {/* <h1 style={headingStyle}>{title}</h1> */}
      <h1>{title}</h1>
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
