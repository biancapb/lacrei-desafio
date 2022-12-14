import styled from "styled-components";

interface TabProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TabItem = styled.nav``;

export const TabText = styled.a<TabProps>`
  color: ${(props) => (props.active ? "red" : "green")};
  text-decoration: none;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 20px;

  &:hover {
    opacity: 0.5;
  }
`;
