
import React, { useEffect, useState } from 'react'

export const ClockFun = () => {

    // Variable del estado inicial.
    const usuarioInicial = {
        fecha: new Date(),
        edad: 0,
        nombre: "Martin",
        apellidos: "San José"
    };

    // Estado inicial del componente
    const [usuario, setUsuario] = useState(usuarioInicial);

    // Ciclo de vida del componente
    useEffect(() => {

        const timerID = setInterval(() => {
            setUsuario({
                fecha: new Date(),
                edad: usuario.edad + 1,
                nombre: "Martin",
                apellidos: "San José"
                })
        }, 1000)

        return () => {
            clearInterval(timerID)
        }
    })


    return (
        <div>
            <h2>
                Hora Actual:
                { usuario.fecha.toLocaleTimeString()}
            </h2>
            <h3>{usuario.nombre} {usuario.apellidos}</h3>
            <h1>Edad: {usuario.edad}</h1>
        </div>
    )
}
