import styled from 'styled-components';
 export const Container = styled.button`
   width: 100%;
   background-color: ${({ theme}) => theme.COLORS.COLOR_BUTTON} ;
   color: ${({ theme}) => theme.COLORS.TEXT_BUTTON} ;
   
   display:flex;
   align-items: center;
   justify-content: center;

   height: 56px;
   border: 0;
   padding: 0 16px;
   margin-top: 16px;
   border-radius: 10px;
   font-weight: 500;
   font-size: 14px;

   &:disabled{
   opacity: 0.5;

  }
`;