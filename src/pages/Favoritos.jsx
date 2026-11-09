import FavItem from '../components/FavItem'

// Página que muestra las mascotas guardadas por la persona usuaria.
function Favoritos({ favoritos, onQuitar}) {
    return (
        <main className='pagina'>
            <h2>Mis Favoritos</h2>
            {/* Informa si no hay favoritos o muestra la lista guardada. */}
            {favoritos.length === 0 ? (
                <p className='vacio'>Aún no tienes favoritos.
                Agregalos desde el inicio.</p>
            ) : (
                <ul className='lista'>
                    {/* Crea un elemento de lista y su acción de eliminación. */}
                    {favoritos.map((m) => (
                        <FavItem
                        key={m.id}
                        nombre={m.nombre}
                        especie={m.especie}
                        edad={m.edad}
                        descripcion={m.descripcion}
                        onQuitar={() => onQuitar(m)}
                        />
                    ))}
                </ul>
            )}
        </main>
    );
}
export default Favoritos;