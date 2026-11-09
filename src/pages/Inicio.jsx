import Hero from '../components/Hero';
import PetCard from '../components/PetCard';
import {mascotas} from '../data/mascotas';

// Página inicial: presenta el mensaje principal y todas las mascotas disponibles.
function Inicio({ favoritos, onAgregar}) {
    return (
        <main>
            {/* Encabezado introductorio de la aplicación. */}
            <Hero />
            <section className='cards'>
                {/* Genera una tarjeta por cada mascota del catálogo. */}
                {mascotas.map((m) => (
                    /* Comprueba si la mascota ya está en favoritos y prepara su acción. */
                    <PetCard
                    key={m.id}
                    nombre={m.nombre}
                    especie={m.especie}
                    edad={m.edad}
                    descripcion={m.descripcion}
                    esFavorito={favoritos.some((f) => f.id === m.id )}
                    onAgregar={() => onAgregar(m)}
                    />
                ))}
            </section>
        </main>
    );
}

export default Inicio;