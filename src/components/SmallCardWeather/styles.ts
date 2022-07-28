import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  color: #fff;
  @media (max-width: 720px) {
    flex-direction: row;
    height: 4rem;
    img {
      width: 4.2rem;
    }
    strong {
      margin-left: 1rem;
    }
  }
`;

export const Line = styled.hr`
  width: 2rem;
  border: 0;
  border-top: 1px solid #000;
  margin: 0.3rem 0;
  @media (max-width: 720px) {
    display: none;
  }
`;
