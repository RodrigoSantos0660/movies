import styled from 'styled-components';
import backgroundImg from '../../assets/imglogin.png';
export const Container = styled.section`
 
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "Date" "picture";


  .date{
    grid-area: "Date";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0px 15%;


    > h1{
    letter-spacing: 2px;
    font-size: 35px;
    }
    > p{
     width: 260px;
     font-size: 14px;
     font-weight:regular;
     color: gray;
    }
    >h2{
     width: 260px;
     font-size: 20px;
     padding: 35px 0px;
    }
    > nav {
     width:100% ;
     padding-top: 30px;

     display: flex;
     justify-content: center;
    }
    > nav a {
      color: white;
      cursor: pointer;
    }
    > button{
      height: 45px;
      width: 260px;
     
    }
    input{
      padding-left: 28px;
 
    } 
    section {
     position: relative;
     top: 0px;
      
    } 
    section button{
    position: absolute;
    top: 3px;
    color: white;
    } 
  }
  figure{
   grid-area: "picture";
   width: 100%;
   height: 100%;
  
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center ;
  background-size: cover;
  width: 100%;
  height: 100%;
 
  `;
