import styled from 'styled-components'

export const Container = styled.div`
 width: 100%;
 display: flex;
 align-items: center;

 background-color: ${({ theme }) => theme.COLORS.GRAY_100};
 color: ${({ theme }) => theme.COLORS.GRAY_200};
 
 margin-bottom: 8px;
 border-radius: 10px;
 margin-right: 20px;
 

 > input {
  height: 36px;
  width : 100%;
  padding: 12px;

 

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: transparent;
  border: 0;

  &::placeholder {
  color: aqua;
  }
 }
`;