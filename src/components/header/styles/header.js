import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url("https://res.cloudinary.com/strawhat/image/upload/v1630649315/Netflix%20clone/netflix-home_u8jcta.jpg");
  background-size: cover;
`;

export const Frame = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media screen (max-width: 1008px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media screen (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const Button = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;

  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  background-image: linear-gradient(to bottom, #e50914, #db0510);

  &:hover {
    background-color: #f40612;
  }
`;
