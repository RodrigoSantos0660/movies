import { Container,LineUp,DarkLine } from "./styles"
import { Input } from "../../Components/Input"
import { Button } from"../../Components/Button"
export function PageProfile(){
  return(
    <Container>
      <LineUp>
       
      </LineUp>
      <img src="https://github.com/RodrigoSantos0660.png"
       alt= "picture of user" />  
      <DarkLine >
      <Input type="text" placeholder="Name"/>
      <Input type="email"placeholder="Type your e-mail" />
      <Input type="password"placeholder="Current Password" />
      <Input type="password" placeholder="New Password"/>
      <Button title="save" />
      </DarkLine>
    </Container>   
 )
}

