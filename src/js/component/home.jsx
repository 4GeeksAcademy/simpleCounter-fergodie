import React from 'react';


function Home(props) {
    const reloj = {
        fontSize: '5rem',
        fontWeight: 'bold',
        color: '#212529',
        padding: '20px',
        background: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const digitos = {
        margin: '0 8px',
        padding: '10px 20px',
        background: '#e9ecef',
        borderRadius: '5px',
    };

    return (
        <div className="container mt-5">
            <div className="card bg-light p-4 rounded">
                <h1 className="text-center mb-4">Tiempo:</h1>
                <div style={reloj}>
                    <span style={digitos}>{props.horas < 10 ? `0${props.horas}` : props.horas}</span>
                    <span style={digitos}>:</span>
                    <span style={digitos}>{props.minutos < 10 ? `0${props.minutos}` : props.minutos}</span>
                    <span style={digitos}>:</span>
                    <span style={digitos}>{props.segundos < 10 ? `0${props.segundos}` : props.segundos}</span>
                </div>
            </div>
        </div>
    );
}

export default Home;