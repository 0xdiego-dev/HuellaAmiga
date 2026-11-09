// Muestra la información de una mascota y permite agregarla a favoritos.
function PetCard({ nombre, especie, edad, descripcion, esFavorito, onAgregar}) {
    return (
        <article className="card">
            {/* Usa la primera letra del nombre como representación visual. */}
            <div className="foto">{nombre.charAt(0)}</div>
            {/* Datos principales de la mascota. */}
            <h3>{nombre}</h3>
            <p className="detalle">{especie} {edad} años</p>
            <p>{descripcion}</p>
            {/* El botón se desactiva cuando la mascota ya está guardada. */}
            <button onClick={onAgregar} disabled={esFavorito}>
                {esFavorito ? 'En favoritos' : 'Agrega' }
            </button>
        </article>
    );
}

export default PetCard;