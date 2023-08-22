import styled from 'styled-components';

export const Container = styled.section`
  width: 90%;

  margin-bottom: 24px;
  padding:20px 24px;
  background-color: ${({ theme}) => theme.COLORS.GRAY_300} ;
  border-radius: 10px;

  > strong {
 display: flex;
  }
`;