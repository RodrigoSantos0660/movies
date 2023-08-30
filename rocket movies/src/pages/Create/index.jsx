import { Container } from './styles';
import { Header } from '../../Components/Header';
import { Section } from '../../Components/Section';
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input';
import { Tags } from '../../Components/Tags';


export function Create() {
  return (
    <Container>
      <Header />
      <Section title="new Movie">
        <div class="inputs">
          <Input type="text" placeholder="Title" />
          <Input type="number" placeholder="your note (0 a 5)"/>
        </div>
        <div class="text_area">
          <Input type="text-area" placeholder="comments" />
        </div>
      </Section>

      <Section title="markers">
        <div class="tags_into">
          <Tags/>
        </div>
        <div class="buttons">
          <Button title="Delete MOvie"/>
          <Button title="Save Changes" />
        </div>

      </Section>



    </Container>
  )
}