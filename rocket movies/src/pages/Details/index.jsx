import { Container} from './styles'
import { Header } from '../../Components/Header'
import { SectionMovie } from '../../Components/SectionMovie';
import { Section } from '../../Components/Section'
import { FiStar } from 'react-icons/fi'
import { Tags } from '../../Components/Tags';
import { Icon } from "../../Components/Icon"

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
         <strong>
          <Tags title="great" />
          <Tags title="Good" />
         </strong>
        </Section>

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
         <strong>
         <Tags title="great" />
         <Tags title="Good" />
         </strong>
        </Section>

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
         <strong>
         <Tags title="great" />
         <Tags title="Good" />
         </strong>
        </Section>

      
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
         <strong>
         <Tags title="great" />
         <Tags title="Good" />
         </strong>
        </Section>
    </Container>
  );
}
  

