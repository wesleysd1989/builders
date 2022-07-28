import styled from "styled-components";
import { GrUpdate } from "react-icons/gr";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 68rem;
  height: 40rem;
  background-color: rgba(221, 221, 221, 0.4);
  padding: 5rem;
  @media (max-width: 720px) {
    width: 100vw;
    height: 100vh;
    padding: 1rem 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const CardListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const IconContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const IconUpdate = styled(GrUpdate)`
  cursor: pointer;
`;
