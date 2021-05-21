import TrailerComp from './TrailerComp'

const TrailerAllComp = ({ filmes }) => {
  return (
    <>
      { filmes.map((filme) =>
      (
        <TrailerComp filme={filme} />
      )

      )}
    </>
  );
}

export default TrailerAllComp;