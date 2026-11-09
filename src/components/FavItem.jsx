// Representa una mascota guardada en la lista de favoritos.
function FavItem({ nombre, especie, edad, descripcion, onQuitar}) {
    return(
        <li>
            {/* Resume los datos identificativos de la mascota. */}
            <span>
                <strong>{nombre}</strong> {especie} {edad} años
            </span>
            {/* Descripción y acción para quitar el elemento. */}
            <p>{descripcion}</p>
            <button onClick={onQuitar}>Eliminar</button>
        </li>
    );
}

export default FavItem;