import React from 'react';

function NavbarOption({ name, onClick }) {
  return (
    <li onClick={() => onClick(name)}>{name}</li>
  );
}

function Navbar({ onOptionClick }) {
  return (
    <ul>
      <NavbarOption name="Home" onClick={onOptionClick} />
      <NavbarOption name="About" onClick={onOptionClick} />
      <NavbarOption name="Contact us" onClick={onOptionClick} />
    </ul>
  );
}

function HomeScreen() {
  const handleNavbarOptionClick = (optionName) => {
    console.log(optionName);
  };

  return (
    <div>
      <h1>Welcome to the Home Screen</h1>
      <Navbar onOptionClick={handleNavbarOptionClick} />
    </div>
  );
}

export default HomeScreen;
