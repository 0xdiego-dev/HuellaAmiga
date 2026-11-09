// Barra de navegación que muestra la pantalla actual y el total de favoritos.
function Navbar ({total, pantalla, irA}) {
    return (
        <nav className="navbar">
            {/* Nombre de la aplicación. */}
            <span className="logo">Huella Amiga</span>
            <div className="links">
                {/* Cambia a la pantalla de inicio y marca el botón activo. */}
                <button 
                className={pantalla === 'inicio' ? 'activo' : ''}
                onClick={() => irA('inicio')}
                >
                Inicio
                </button>
                {/* Cambia a favoritos y muestra cuántos elementos contiene. */}
                <button 
                className={pantalla === 'favoritos' ? 'activo' : ''}
                onClick={() => irA('favoritos')}
                >
                    Favoritos({total})
                </button>
            </div>

        </nav>
    );
}

export default Navbar;