import { Container, } from "./styles";
import {Input} from '../Input'
import { Logo } from'../Logo'
import { Profile } from'../Profile'

export function Header (){
   return(
    <Container>
      <Logo />
      <Input placeholder="searching title"/>
      
      <Profile />

    </Container>
 )
}