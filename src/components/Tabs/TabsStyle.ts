import styled from "styled-components";

interface TabProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TabItem = styled.nav`
  display: flex;
  gap: 40px;
`;

export const TabText = styled.a<TabProps>`
  color: ${(props) => (props.active ? "green" : "black")};
  text-decoration: none;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;

  &:hover {
    opacity: 0.5;
  }
`;
