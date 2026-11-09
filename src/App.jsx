import { useState } from "react";
// Componentes compartidos visibles en todas las pantallas.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Páginas que se muestran según la navegación seleccionada.
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";

// Componente raíz: coordina la navegación y los favoritos.
function App() {
  // Guarda la pantalla actual y las mascotas guardadas.
  const [pantalla, setPantalla] = useState('inicio');
  const [favoritos, setFavoritos] = useState([]);
  
  // Agrega la mascota recibida a la lista de favoritos.
  function agregar(mascota){
    setFavoritos((actuales) => [...actuales, mascota]);
  }

  // Quita la mascota seleccionada de la lista de favoritos.
  function quitar(mascota){
    setFavoritos((actuales) => actuales.filter((m) => m.id !== mascota.id));
  }

  return (
    <>
      {/* Navegación superior con el contador de favoritos. */}
      <Navbar total={favoritos.length} pantalla={pantalla}
      irA={setPantalla} />
      {/* Renderiza la página correspondiente a la pantalla actual. */}
      {pantalla === 'inicio' ? (
        <Inicio favoritos={favoritos} onAgregar={agregar} />
      ) : (
        <Favoritos favoritos={favoritos} onQuitar=
        {quitar} />
      ) }
      {/* Pie de página compartido. */}
      <Footer />
    </>
  );
}

export default App;