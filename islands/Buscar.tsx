import { useState } from "preact/hooks";
import { FunctionalComponent } from "preact";
import axios from "npm:axios";

const Buscar: FunctionalComponent = () => {
  const [name, setName] = useState<string>("");
  const [characters, setCharacters] = useState<string[]>([]);

  const onSearch = async (searchText: string): Promise<void> => {
    
    const url = `https://supermondongo.deno.dev/${searchText}`;
    const response = await axios.get<{name:string}[]>(url);
    const names = response.data.map((n) => n.name);
    setCharacters(names);
    
  };

  return (
    <div class="search-container">
      <h1>Busca tu heroe</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="heroe name"
          value={name}
          onInput={(e) => setName(e.currentTarget.value)}
          class="search-input"
        />
        
        <button
          onClick={(e) => {
            e.preventDefault();
            onSearch(name);
          }}
          class="search-button"
        >
          Buscar
        </button>
      </form>
      {characters.length > 0 && characters.map((n) => <div key={n}>{n}</div>)}
    </div>
  );
};

export default Buscar;
