import { Container } from "./styles";
import { FiPlus } from 'react-icons/fi'
import { Button } from "../../Components/Button";
export function SectionMovie (){
  return(
   <Container>
    <h1>My Movies</h1>  
    <Button title="Add Movie" 
      {...FiPlus}
      ></Button>
  
  </Container> 
 )
}