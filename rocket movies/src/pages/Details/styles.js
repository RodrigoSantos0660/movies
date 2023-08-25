import styled from 'styled-components'

export const Container =  styled.div`
  width: 100%;
  height: 80vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
  overflow-y: auto;

  > header {
   position: fixed;
   top: 0;
  }
  section button  {
   display: flex;
   position: relative;
   width: 20px;
   height: 30px;
   color: white;   
  }
  .Icons_likes{
   display: flex;
   align-items: center;
   justify-content: start;
   margin-left: -2px;
   
 
  }
`;

  




