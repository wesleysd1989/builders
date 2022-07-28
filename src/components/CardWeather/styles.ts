import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    flex-direction: column;
    margin-bottom: 3rem;
    img {
      width: 6.2rem;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 0.2rem;
    width: 1.6rem;
  }
`;
