import styled from "styled-components"

export const Container = styled.main`
  display: flex;
  flex-direction:column;
  align-items: center;
  overflow-y: auto;
  

  .logo{
    display:none;
    margin-top: 30px;
   }
  .header{
   position :fixed ;
  }


  @media (max-width:450px){
   header{
    display: none;
   }
   .logo{
    display:flex;
   }
  }

  
  .btn_back{
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 10px;
    width: 87%;
    
  }

  .btn_back :nth-child(1){
   margin-left: 2px;
   color: #868686;
  
  }

.inputs{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -15px;
  margin-top: 15px;
  margin-bottom: 15px;
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
  border-radius: 10px;
}
.buttons{
  display: flex;
  gap: 20px;
}
section {
  background-color: transparent;
}

.buttons :nth-child(2){
  background-color: white;
} 
button {
 border: 10pz solid black;
 background-color:#868686;
 height: 46px;
} 
`;