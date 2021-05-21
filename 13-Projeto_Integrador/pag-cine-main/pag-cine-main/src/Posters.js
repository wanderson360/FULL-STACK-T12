import { useState, useEffect } from 'react';
import PosterComp from './components/PosterComp'
const Posters = () => {
  const [filmes, setFilmes] = useState(null)

  const [isPending, setIsPending] = useState(true)

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3333/ultimos/4`)
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
    <>
      {/* {console.log(filmes)} */}
      {error && <div>{error}</div>}
      {isPending && <div>Carregando...</div>}
      {!isPending && <PosterComp filmes={filmes} />}

    </>
  );
}

export default Posters;