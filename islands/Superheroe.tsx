import { FunctionComponent} from "preact";
import { SuperheroeProps } from "../types.ts";
import { useState } from "preact/hooks"; 

const Superheroe: FunctionComponent<SuperheroeProps> = (props) => {
  const { name, image, sound, creator } = props;
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    // Aquí iría tu lógica para eliminar el superhéroe utilizando 'creator' como método de autenticación
    // Por ejemplo, podrías enviar una solicitud HTTP DELETE a tu API
    setShowModal(false); // Cerrar el modal después de eliminar el superhéroe
  };

  return (
    <div className="superheroe-container">
      <h2 className="mainTitle">{name}</h2>
      <img className="img-m half-rounded" src={image} alt={name} />
      <audio controls>
        <source src={sound} type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <button className=".modal-buttons" onClick={() => setShowModal(true)}>Eliminar</button>

      {/* Modal de confirmación para eliminar */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>¿Estás seguro de que deseas eliminar a {name}?</h2>
            <div className="modal-buttons">
              <button onClick={handleDelete}>Eliminar</button>
              <button onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Superheroe;


