import  styled  from "styled-components";
import backgroundImg from '../../assets/imglogin.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid red;

  .date{
   width: 50%;
   height: 100vh;

   display: flex;
   align-items: flex-start;
   justify-content: center ;
   flex-direction: column;
   padding: 0px 9%;
  }

  input{
   padding-left: 30px;
  }
  section{
   position: relative;
   top: 0px;
   
  }
  section button{
    position: absolute;
    top: 3px;
    color: white;
  }

  :nth-child(7){
   max-width: 260px;
   height: 40px;
 
  
  }
  nav {
   margin: 0 auto;
   margin-top: 30px;
  }
  a {
   color: white;
  }

  h1{
   font-size: 35px;
  }
  p{
   font-size:14px;
  }
  h2{
   margin: 30px 0px;
  }
  figure {
  width: 100%;
  height: 100%;
  }

  .picture{
   width: 50%;
   height: 100vh;
   border: 1px solid white;
   }
  }

  @media (max-width:500px){
   .picture{
    display:none;
   }
   .date{
    flex-basis: fit-content;
    width: 100vh;
    border: 1px solid yellow;
  }


`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center ;
  background-size: cover;
  width: 100%;
  height: 100%;
  `;