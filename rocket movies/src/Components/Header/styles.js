import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid ${({ theme })=> theme.COLORS.BACKGROUND_900};

  display: flex;
  justify-content: space-between ;
 
  padding: 0 80px;
  background-color: red;
`;