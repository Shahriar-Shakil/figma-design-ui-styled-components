import React from "react";
import styled from "styled-components";

export default function HeroText() {
  return (
    <Container>
      <h5>Online Education For people of all ages</h5>
      <h1>Learn</h1>
      <h1>Anything.</h1>
      <h1>Anytime.</h1>
      <h1>Anywhere.</h1>
      <BtnContainer>
        <button className="read-more">Read More</button>
        <button>7 Day Free Trail</button>
      </BtnContainer>
    </Container>
  );
}
const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background-color: #81d1ff;
    border: none;
    border-radius: 1rem;
    padding: 0.9rem 1.1rem;
    color: #fff;
    box-shadow: 0px 13px 24px -7px #ecb6d7;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #ecb6d7;
      transform: translateY(-5px);
    }
  }
  .read-more {
    color: #81d1ff;
    background: transparent;
    border: 3px solid #81d1ff;
    box-shadow: 0px 13px 24px -7px #7bb2f8c9;
  }
`;
const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;

    &:nth-of-type(1) {
      color: #af60ff;
    }
    &:nth-of-type(2) {
      color: #a100c8;
    }
    &:nth-of-type(3) {
      color: #73079b;
    }
    &:nth-of-type(4) {
      color: #68028d;
    }
  }
`;
