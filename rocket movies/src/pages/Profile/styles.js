import styled from "styled-components";

export const Container = styled.div`
 display: grid;
 grid-template-rows: 130px auto;
 grid-template-areas : 
 "light_band"
 "dark_band";

`;

export const LineUp = styled.div`
 grid-area: "light_band";
 width: 100%;
 background-color: white;

`;
export const DarkLine = styled.div`
 grid-area: "dark_band";
 width: 30%;
 max-width: 250px;
 margin-left:42%;
 margin-top: 120px;
 position:relative;


 > figure img {
  position: absolute;
 left: 130px;
 width: 150px;
 border-radius: 50%;
 margin-bottom: 30px;
 top:-190px;
 left: 15%;
  }
  > figure button{
 
   position: absolute;
   left: 150px;
   top: -90px;
   background-color: whitesmoke;
   width: 40px;
   height: 40px;
   padding: 8px;
   border-radius: 50%;
   color: gray;
  }
  

 >  button{
    height: 40px;
  }
> section {
    margin-bottom: 15px;
  }
  >section input {
    padding-left: 40px;
  }

 
`;
