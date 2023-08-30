import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  flex-direction:column;
  align-items: center;
  overflow-y: auto;

.inputs{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -15px;
  margin-top: 15px;
}
.text_area input{
  height: 150px;
}

.tags_into{
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 10px;
  background-color: #868686;
  width: 100%;
  height: 40px;
  margin-top: 15px;
}
.buttons{
  display: flex;
  gap: 20px;
}
section {
  background-color: transparent;
}
button {
 background-color: white;
} 

.buttons :nth-child(1){
background-color: #868686;
} 
`;