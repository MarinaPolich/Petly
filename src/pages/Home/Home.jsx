import { Mobile } from "components/Container/Mobile";
import { Text, Container, Image, Thumba } from "./Home.styled";
import {
  pedigree_dog_d,
  pedigree_dog_m,
  pedigree_dog_t,
} from "assets/image/index";
import { Tablet } from "components/Container/Tablet";
import { Desktop } from "components/Container/Desktop";

const Home = () => {
  return (
    <Container>
      <Text>Take good care of your small pets</Text>
      <Mobile>
        <Thumba>
          <Image src={`${pedigree_dog_m}`} />
        </Thumba>
      </Mobile>
      <Tablet>
        <Thumba>
          <Image src={`${pedigree_dog_t}`} />
        </Thumba>
      </Tablet>
      <Desktop>
        <Thumba>
          <Image src={`${pedigree_dog_d}`} />
        </Thumba>
      </Desktop>
    </Container>
  );
};

export default Home;
