import React from "react";
import Navbar from "../Layouts/Navbar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to left, rgb(192, 192, 191), rgb(252, 253, 171))
    right;
`;

const Model = () => {
  return (
    <div>
      <Navbar />
      <Container>Model</Container>
    </div>
  );
};

export default Model;
