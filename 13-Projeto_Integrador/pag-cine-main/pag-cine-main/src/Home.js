import Carrousel from './Carousel';
import Posters from './Posters'
// import {useEffect} from 'react'
//import { useState } from 'react'; // Testando
// import { SliderData } from '../src/components/carousel/SliderData'
// import ImageSlider from '../src/components/carousel/ImageSlider'
//import '../src/components/carousel/carousel.css'

const Home = () => {
  // Testando
  // const [nome, setNome] = useState('Gabriel')
  // const [idade, setIdade] = useState(30)

  // const handleClick = () => {
  //   setNome('Rezende')
  //   setIdade(idade + 1)
  // }
// FIM DO TESTE

  return (
    <div className="home">
    {/* {useEffect(() => {
  document.getElementById('login').innerText = 'Login';
  document.getElementById('loginHref').href = "/login"
})} */}
      <Carrousel /> 
         <br /> 
       <Posters /> 
      {/* <br/> <!-- TESTE -->
      <div className="teste">
      <h3>Testando:</h3>
      <p>{ nome } tem { idade } anos</p>
      <button onClick={handleClick}>Troca nome</button>
      </div> */}
      {/* <ImageSlider slides={SliderData}></ImageSlider>            */}
</div>
  );
}
 
export default Home;