import { Container, LineUp, DarkLine } from "./styles"
import { Input } from "../../Components/Input"
import {FiCamera } from'react-icons/fi'
import { Button } from "../../Components/Button"
import { Ic } from "../../Components/Ic"
export function PageProfile() {
  return (
    <Container>
      <LineUp>


      </LineUp>
      
      <DarkLine >
      <figure>
        <img src="https://github.com/RodrigoSantos0660.png"
          alt="picture of user" />
          <Ic>
            <FiCamera />
          </Ic>
      </figure>
      
        <section class="separador">
          <Input type="text" placeholder="Name" />
           <Ic><FiCamera /></Ic>
          <Input type="email" placeholder="Type your e-mail" />
          <Ic> <FiCamera /> </Ic>
        </section>
        <section class="separador">
         <Input type="password" placeholder="Current Password" />
          <Ic> <FiCamera /> </Ic>
         <Input type="password" placeholder="New Password" />
          <Ic> <FiCamera /> </Ic>
        </section>
        
        <Button title="save" />
      </DarkLine>
    </Container>
  )
}

