import React, {useState} from 'react';

export const PrimerComponente = () => {

    const [nombre, setNombre] = useState("Mario Dominguez");
    const [web, setWeb] = useState("mario22@gmail.com");

    const cambiarnombre =  (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

    const cambiarweb =  (nuevaWeb) => {
        setWeb(nuevaWeb);
    }

  return (
    <div>
        <h1>Primer componente</h1>
        <p>Este es un texto en mi componente</p>
        <p>Mi nombre es: <strong className={nombre.length >= 6 ? 'verde' : 'rojo'}>{nombre}</strong></p>
        <p>Mi web es: <strong className={web.length >= 8 ? 'verde' : 'rojo'}>{web}</strong></p>

        <input type='text' onChange={e => cambiarnombre(e.target.value)} placeholder='Cambia el nombre'/>
        <br></br>
        <input type='text' onChange={e => cambiarweb(e.target.value)} placeholder='Cambia la web'/>
        <br></br>

        <button onClick={e => {
            console.log("El valor guardado en tu estado es: ", nombre, web);
        }}>Mostrar valor de estado</button>

        <button onClick={e => cambiarnombre("Antonio Lopez")}>Cambiar Nombre</button>
    </div>
  )
}
