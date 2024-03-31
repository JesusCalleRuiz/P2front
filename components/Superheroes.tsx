import { FunctionComponent } from "preact";
import {SuperheroeProps} from "../types.ts"

const Superheroes: FunctionComponent<SuperheroeProps> = (props) => {
  const { name, image,sound} = props;
  return (
    <a href={`/${name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className ="superheroes-container">
      <h2 class="text-overflow">{name}</h2>
      <img class="img-m half-rounded" src={image} alt={name} />
      <audio controls>
            <source src={sound} type="audio/mp3" />
            Tu navegador no soporta el elemento de audio.
      </audio>
      </div>
    </a>
  );
};

export default Superheroes;