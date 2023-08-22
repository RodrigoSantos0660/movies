import styled from "styled-components";

export const Container = styled.div`
 display: grid;
 grid-template-rows: 130px auto;
 grid-template-areas : 
 "light_band"
 "dark_band";

 > img {
 width: 150px;
 border-radius: 50%;
 margin-bottom: 30px;
 position: absolute;
 top:60px;
 left: 45%;
  }
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
`;