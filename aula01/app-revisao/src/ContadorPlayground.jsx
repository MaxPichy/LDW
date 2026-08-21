import React, { useState, useEffect } from 'react';

export function ContadorPlayground({ titulo, valorInicial = 0 }) {
    const [contador, setContador] = useState(valorInicial);
    const [cliques, setCliques] = useState(0);

    useEffect(() => {
        console.log(`O valor do contador agora é: ${contador}`);

        return () => {
            console.log('Limpando dados do efeito anterior');
        }
    }, [contador]);

    const incrementar = () => {
        setContador(contador + 1);
        setCliques((prev) => prev + 1);
    }

    const decrementar = () => {
        if (contador > 0) {
            setContador(contador - 1);
            setCliques((prev) => prev + 1);
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '300px', width: '100%' }}>
                <h2> {titulo} </h2>
                <p> Contagem Atual: <strong>{contador}</strong> </p>
                <p> Interações Totais: {cliques} </p>

                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <button onClick={incrementar}>Incrementar</button>
                    <button onClick={decrementar}>Decrementar</button>
                </div>
            </div>
        </div>
    );
}