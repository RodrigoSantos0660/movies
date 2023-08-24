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
 border-bottom: 1px solid aqua;
 background-color: gray;

 display: flex;

 align-items:center;
 justify-content: flex-start;
 padding-left: 49px;
 a  {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font: 14px;
 }
  
  a svg {
  color: white;
  width: 30px;
  height: 30px;
 
}

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
   background-color: white;
   width: 40px;
   height: 40px;
   padding: 8px;
   border-radius: 50%;
   color: gray;

  }
  
 .icon input{
  padding-left: 30px;
  
 }
 >  button{
    height: 40px;
  }
> section {
    margin-bottom: 15px;
  }
  .icon {
    position: relative;
  }
  .icon button{
    position: absolute;
    top: 3px;
    border:none;
    background-color: transparent;
    color: white;
    cursor: initial;
  }
 
`;
