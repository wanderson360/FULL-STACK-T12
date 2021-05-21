// import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import TrailersAllComp from '../components/TrailersAllComp'
// import filmes from './listaFilmes';

const TrailersAll = () => {
    const [filmes, setFilmes] = useState(null)

    const [isPending, setIsPending] = useState(true)

    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3333/listaFilmes`)
            .then(res => {
                if (!res.ok) {
                    throw Error('Problema com conexão com o servidor'); // mensagem do erro
                }
                return res.json()
            })
            .then((data) => {
                setFilmes(data)
                setIsPending(false)
            })
            .catch(err => {
                setIsPending(true)
                setError(err.message)
            })
    }, [])

    return (
        <div className="container">
            {error && <div>{error}</div>}
            {isPending && <div>Carregando...</div>}
            {!isPending && <TrailersAllComp filmes={filmes} />}
        </div>

    );
}

export default TrailersAll;