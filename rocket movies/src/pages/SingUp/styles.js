import  styled  from "styled-components";
import backgroundImg from '../../assets/imglogin.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 100vh;

  .date{
   
   height: 100vh;
   width:fit-content;
   min-width: 300px;
   max-width: 500px;

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
   display: flex;
   margin: 0 auto;
   margin-top: 30px;
   position: relative;
  }
  nav button{
   color: white;
   left: -29px;
   top:-3px
  }
  a {
   color: white;
  }

  h1{
   font-size: 35px;
  }
  p{
   font-size:12px;
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
 
   }
  }

  @media (max-width:500px){
   .picture{
    display:none;
   }
   .date{
    flex-basis: fit-content;
    width: 100vh;
    
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center ;
  background-size: cover;
  width: 100%;
  height: 100%;
  `;