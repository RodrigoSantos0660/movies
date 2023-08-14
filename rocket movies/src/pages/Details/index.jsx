import { Container,Icon} from './styles'
import { Header } from '../../Components/Header'
import { SectionMovie } from '../../Components/SectionMovie';
import { Section } from '../../Components/Section'
import { FiStar } from 'react-icons/fi'
import { Tags } from '../../Components/Tags';

export function Details () {
  return (
    <Container>
        <Header /> 
        <SectionMovie />
        <Section title="Interestelar">
         < Icon >
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar /> 
          <FiStar />
         </ Icon>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium iste, possimus magni velit tempora ratione vitae culpa iusto nesciunt assumenda autem similique nemo ad fugit veritatis non veniam officia aut?
         </p>
         <Tags tilte="great" />
        </Section>
    </Container>
  );
}
  

