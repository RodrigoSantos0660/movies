import styled from 'styled-components';

export const Container = styled.section`
 
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "Date" "picture";

  
  .date{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    height: 100vh;
    background-color: blueviolet;
    padding: 0px 15%;


    > h1{
    letter-spacing: 2px;
    font-size: 35px;
    }
    > p{
      
     font-size: 14px;
     font-weight:regular;
     color: gray;
    }
    >h2{
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
    }
  }
`;