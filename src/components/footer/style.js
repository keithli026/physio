import styled, { css } from "styled-components/macro";
export const Footer = styled.div`
  background-color: ${prop => prop.dark ? "#343434" : "#585858"};
  color: white;
  padding: 30px 0;
`;

export const StyledButton = styled.button`
  color: black;
  background: white;
  border: 1px solid black;
  font-size: 20px;
  border-radius: 5px;
  padding: 0.75rem 0.5rem;
  
  ${prop => 
    prop.primary && 
    css`
      color: white;
      background: #1cb7ef;
      border: 1px solid #1cb7ef;
    `
  };
`;

export const Column = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  @media (min-width: 576px) {
    
  }
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 992px) {
  
  }
  @media (min-width: 1200px) {
    width: 25%;
  }
  @media (min-width: 1400px) {
   
  }
`;
