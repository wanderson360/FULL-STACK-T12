// import ReactDOM from "react-dom";
import React, { Component } from 'react';
import QRCode from 'qrcode.react';
class Ingresso extends Component {
		render() { 		
		return (
			<div>			
               <h4>			   
			   Ingresso PagCine <br/>
			   Valor: R$ 9.50
               </h4>	   
			   
			    <QRCode
                  id='abc'  
                  value='https://www.digitalhouse.com/br'
                />
			</div>
		);
	}	
}

export default Ingresso;