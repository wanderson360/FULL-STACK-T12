import React from "react";
import Legenda from "./Legenda";
import Zoom from "./Zoom";
import Pagamento from "./Pagamento";
import { rows } from "../utils";
import cine from "./Cinema.module.css";

const valorIngresso  = 27.50;
const filmeEscolhido = 'Minari'
                              
const qtdePoltronas  = 72;

class Cinema extends React.Component {
  state = {
    chairs: this.props.chairs,
    selection: 0,
    scale: 0.8
  };
    
  toggleChair = chair => {        
    let { chairs, selection } = this.state;
    const linha = chair.pos[0];
    const coluna = chair.pos[1];
    const currentItem = chairs[linha][coluna];    
    const item = { ...currentItem, selecting: !currentItem.selecting };
    if (item.selecting) {
      selection += 1;      
    } else {
      selection -= 1;      
    }    

    if (selection > qtdePoltronas) {
      alert("Atenção: Sessão Lotada")
      return;
    }
    chairs[linha][coluna] = item;
    this.setState({ chairs, selection });
  };

  zoomIn = () => {
    this.setState({ scale: this.state.scale + 0.1 });
  };

  zoomOut = () => {
    this.setState({ scale: this.state.scale - 0.1 });
  };

  render() {
    const { chairs, scale, selection } = this.state;
    return (
      <div>
        <div className={cine.cinema}>
          <h2>Filme: {filmeEscolhido}</h2>
          <p>Escolha sua poltrona</p> 
          <Legenda />                                      
          <div className={cine.chairs}>
            <Zoom zoomIn={this.zoomIn} zoomOut={this.zoomOut} />
            <div style={{ transform: `scale(${scale})` }}>
              {chairs.map((row, i) => (
                <div key={i} className={cine.row}>
                  <div className={cine.rowName}>{rows[i]}</div>
                  {row.map(column => (
                    <div
                      key={column.number}
                      className={`${cine.column} ${cine[column.type]} ${
                        column.selecting ? cine.selecting : ""
                      }`}
                      onClick={() => this.toggleChair(column)}
                    >
                      {column.number}
                    </div>
                  ))}
                </div>
              ))}
              <h3 className={cine.screenText}>T e l a</h3>               
               <br></br> <Pagamento precoUn={valorIngresso} qtde={selection} money={selection * valorIngresso}/>                                                    
            </div>            
          </div>         
        </div>       
      </div>
    );
  }
}

export default Cinema;
