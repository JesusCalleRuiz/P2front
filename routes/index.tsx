import Axios from "npm:axios";
import { SuperheroeProps } from "../types.ts"
import Superheroes from "../components/Superheroes.tsx";

export default async function Home() {
  try {
    const response = await Axios.get<SuperheroeProps[]>(
      "https://supermondongo.deno.dev",
    );
    const superheroes = response.data;
    return (
      <div class="flex-column">
        <h1 class= "mainTitle">SuperHeroes</h1>
        <div class="flex-row flex-around">
        {superheroes.map((s) => (
          <Superheroes name={s.name} image={s.image} sound={s.sound}/>
        ))}
      </div>
      </div>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}


