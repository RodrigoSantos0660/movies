import { Container, Background } from './styles';
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { Ic } from'../../Components/Ic'
import { AiOutlineUnlock,AiOutlineMail,AiOutlineUser } from'react-icons/ai';

export function SingUp() {
  return (
      <Container>
        <div class="date">
          <h1>RocketMovies</h1>
          <p>app for follow everything you watch</p>
          <h2>make your login</h2>
          <section>
            <Input type="text" placeholder="Name" />
            <Ic>
              < AiOutlineUser />
            </Ic>
          </section>
          <section>
            <Input type="mailto" placeholder="Email" />
            <Ic>
              < AiOutlineMail />
            </Ic>
          </section>
          <section>
            <Input type="password" placeholder="password" />
            <Ic>
              < AiOutlineUnlock />
            </Ic>
          </section>
          <Button title="Enter" />
          <nav>
            <a href="#">Create your Account</a>
          </nav>
        </div>
      
        <div class="picture">
        <figure>
          <Background />
        </figure>  
        </div>
      </Container>


    
  )
}