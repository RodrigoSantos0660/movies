import { Container } from "./styles";

export function NewMovie ({data,...rest}){
  return(
    <Container {...rest}>
      <h2>{data.title}</h2>
      <p>Lorem ipsum dolor sit amet consec!</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map( tag => {
             <span key={tag.id}>
              {tag.name}
             </span>
            })
          }
        </footer>
      }
    </Container>  
 );
}