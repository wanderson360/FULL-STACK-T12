import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import ListaComp from './components/ListaComp'
// import filmes from './filmes/listaFilmes'

const ListaDeFilmes = () => {
    const [filmes, setFilmes] = useState(null)

    const [isPending, setIsPending] = useState(true)

    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3333/listaFilmes')
            .then(res => {
                if (!res.ok) {
                    throw Error('Problema com conexão com o servidor'); // mensagem do erro
                }
                return res.json()
            })
            .then((data) => {
                // console.log(data)
                setFilmes(data)
                setIsPending(false)
            })
            .catch(err => {
                setIsPending(true)
                setError(err.message)
                // setError(null)
            })
    }, [])

    return (
        <div className='listaDeFilme mt-4'>
            {error && <div>{error}</div>}
            {isPending && <div>Carregando...</div>}
            {!isPending && <ListaComp filmes={filmes} />}

        </div>
    );
}

export default ListaDeFilmes;