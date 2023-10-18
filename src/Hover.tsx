import { styled } from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  background: #222222;
  &:hover {
    background: #eeeeee;
  }
`;

export const Hover = () => <Container />;
