import { Container } from "./styles";
import { Tags } from '../../Components/Tags'
export function NewMovie ({data,...rest}){
  return(
    <Container {...rest}>
      <h2>{data.title}</h2>
      <p>Lorem ipsum dolor sit amet consec!</p>
      <Tags  />
    </Container>  
 )
}