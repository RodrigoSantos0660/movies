import { Container, Profile,  } from "./styles";
import {Input} from '../Input'
import { Logo } from'../Logo'

export function Header (){
   return(
    <Container>
      <Logo />
      <Input placeholder="searching title"/>
      <Profile>
         <div>
            <strong>
               Rodrigo Santos
            </strong>
            <a href="/">
              Go out
            </a>
         </div>
         <img src="https://github.com/RodrigoSantos0660.png"
         alt= "picture of user" />

      </Profile>
      
    </Container>
 )
}