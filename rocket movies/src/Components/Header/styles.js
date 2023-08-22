import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid ${({ theme })=> theme.COLORS.GRAY_200};

  display: flex;
  justify-content: space-between;
  align-items: center;
 
  padding: 0 90px;
  background-color: ${({ theme })=> theme.BACKGROUND_900};
`;

