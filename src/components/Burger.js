import React from 'react';


const Burger = () => {
  return (
    <div style={StyledBurger.burger}>
      <div />
      <div />
      <div />
    </div>
  )
}

const StyledBurger = {
  burger:{
      position: "absolute",
        top: "5%",
        left: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "spaceAround",
        width: "2rem",
        height: "2rem",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: 0,
        zIndex: 10,
  },
  focus:{
    outline: "none",
  },
  div:{
    width: "2rem",
    height: "0.25rem",
    background: "#EFFFFA",
    borderRadius: "10px",
    transition: "all 0.3s linear",
    position: "relative",
    transformOrigin: "1px",
  },
}

export default Burger;