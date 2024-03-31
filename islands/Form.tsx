import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

export const Form: FunctionComponent = () => {
  const [error, setError] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [sound, setSound] = useState<string>("");
  const [creator, setCreator] = useState<string>("");

  const submitHandler = async (
    e: JSX.TargetedEvent<HTMLFormElement, Event>,
  ) => {
    e.preventDefault();
    const errorMsg: string[] = [];
    if (name === "") {
      errorMsg.push("You must provide a name");
    }
    if (image === "") {
      errorMsg.push("You must provide an image URL");
    }
    if (sound === "") {
      errorMsg.push("You must provide a sound URL");
    }
    if (creator === "") {
      errorMsg.push("You must provide a creator name");
    }

    if (errorMsg.length > 0) {
      setError(errorMsg.join(" | "));
    } else {
      try {
        
        const response = await fetch("https://supermondongo.deno.dev/", {
          
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            image: image,
            sound: sound,
            creator: creator,
          }),
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log("Superhero added successfully with id:", data._id);
          // Aquí podrías mostrar un mensaje de éxito o redirigir a otra página
        } else {
          // Si la respuesta no es exitosa, maneja el error adecuadamente
          console.error("Failed to add superhero:", response.statusText);
          setError("Failed to add superhero: " + response.statusText);
          
        }
      } catch (error) {
        console.error("Error:", error);
        setError("Error: " + error.message);
      }
    }
  };

  return (
    <div class="form">
      <h1>Introduce los datos de tu superhéroe</h1>
      <form action="/" method="POST" onSubmit={submitHandler}>
        <div>
          <label for="name">Name</label>
          <input
            onFocus={() => setError("")}
            onInput={(e) => setName(e.currentTarget.value)}
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div>
          <label for="image">Image URL</label>
          <input
            onFocus={() => setError("")}
            onInput={(e) => setImage(e.currentTarget.value)}
            type="text"
            id="image"
            name="image"
          />
        </div>

        <div>
          <label for="sound">Sound URL</label>
          <input
            onFocus={() => setError("")}
            onInput={(e) => setSound(e.currentTarget.value)}
            type="text"
            id="sound"
            name="sound"
          />
        </div>

        <div>
          <label for="creator">Creator</label>
          <input
            onFocus={() => setError("")}
            onInput={(e) => setCreator(e.currentTarget.value)}
            type="text"
            id="creator"
            name="creator"
          />
        </div>

        <div>
          <button type="submit" disabled={error !== ""} class="btn">
            Submit
          </button>
        </div>

        {error !== "" && <div class="span-2 error">{error}</div>}
      </form>
    </div>
  );
};

export default Form;


