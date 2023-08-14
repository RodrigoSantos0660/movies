import styled from 'styled-components'

export const Container =  styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Icon = styled.button`
  
  display: flex;
  background-color: transparent;
  border: none;
  cursor: initial;
  margin: 10px 0;
 

  > svg {
   color: gray;
   margin-right: 10px;
   cursor: pointer;
    && clicked{
   background-color: white;
   }
  }

`;


