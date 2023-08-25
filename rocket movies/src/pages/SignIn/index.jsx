import { Container } from './styles';
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'


export function SignIn() {
  return (
    <Container>
      <div class="date">
        <h1>RocketMovies</h1>
        <p>app for follow everything you watch</p>
        <h2>make your login</h2>
        <Input type="mailto" placeholder="Email" />
        <Input type="password" placeholder="password" />
        <Button title="Enter" />
        <nav>
          <a href="#">Creat Acconunt</a>
        </nav>
      </div>
      
    </Container>
  );
}