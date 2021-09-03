import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 4px solid #222;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  color: #fff;
  max-width: 640px;
  font-size: 50px;
  font-weight: 800;
  margin: auto;

  @media screen (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: #fff;
  max-width: 640px;
  font-size: 26px;
  font-weight: normal;
  margin: auto;
  margin-top: 16px;
  margin-bottom: 16px;
  @media screen (max-width: 600px) {
    font-size: 18px;
  }
`;
