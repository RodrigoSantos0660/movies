import { Container, LineUp, DarkLine } from "./styles"
import { Input } from "../../Components/Input"
import { FiCamera,FiAtSign,FiLock,FiArrowLeft } from 'react-icons/fi'
import { Button } from "../../Components/Button"
import { Ic } from "../../Components/Ic"
export function PageProfile() {
  return (
    <Container>
      <LineUp>
        <Ic>
         <a href="/"> <FiArrowLeft /> Home </a>
        </Ic>
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
          <div class="icon">
            <Input type="text" placeholder="Name" />
            <Ic><FiCamera /></Ic>
          </div>
          <div class="icon">
            <Input type="mailto" placeholder="email" />
            <Ic><FiAtSign /></Ic>
          </div>
        </section>

        <section class="separador">
          <div class="icon">
            <Input type="password" placeholder="Old Password" />
            <Ic><FiLock /></Ic>
          </div>
          <div class="icon">
            <Input type="password" placeholder="New Password" />
            <Ic><FiLock /></Ic>
          </div>
        </section>
        <Button title="save" />
        <h1>passinho developer dont move it</h1>
      </DarkLine>
    </Container>
  )
}

