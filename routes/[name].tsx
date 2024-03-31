import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { SuperheroeProps } from "../types.ts"
import Superheroe from "../islands/Superheroe.tsx";



export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, SuperheroeProps>) => {
    try {
      const name = ctx.params.name;
      const heroe = await Axios.get<SuperheroeProps[]>(
        `https://supermondongo.deno.dev/${name}`,
      );
      if (heroe.status !== 200) {
        throw new Error("Error");
      }
      return ctx.render(heroe.data);
    }catch (e) {
      throw e;
    }
  },
};

const Page = (props: PageProps<SuperheroeProps[]>) => {
  const heroe = props.data;

  return (
    <div class="flex-column">
        <div class="flex-row flex-around">
        {heroe.map((s) => (
          <Superheroe name={s.name} image={s.image} sound={s.sound}/>
        ))}
      </div>
      </div>
  );
};

export default Page;
