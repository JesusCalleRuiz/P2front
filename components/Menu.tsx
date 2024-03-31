import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "List" | "Add" | "Search";
};
const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/" class={selected === "List" ? "selected" : ""}>
        Lista de Heroes
      </a>
      <a href="/add" class={selected === "Add" ? "selected" : ""}>
        Añadir Heroe
      </a>
      <a href="/buscar" class={selected === "Search" ? "selected" : ""}>
        Buscar Heroe
      </a>
    </div>
  );
};

export default Menu;
