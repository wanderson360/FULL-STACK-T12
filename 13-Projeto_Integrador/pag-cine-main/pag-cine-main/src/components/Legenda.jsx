import React from "react";

import legenda from "./Legenda.module.css";

const Legenda = () => (
  <div className={legenda.wrap}>
    <div className={legenda.left}>
      <div>
        <span className={`${legenda.circle} ${legenda.selected}`} />
        <span>Disponível</span>
      </div>
      <div>
        <span className={`${legenda.circle} ${legenda.selecting}`} />
        <span>Ocupado</span>
      </div>
    </div>
    <div className={legenda.right}>
      <div>
        <span className={`${legenda.circle} ${legenda.Ouro}`} />
        <span>Ouro</span>        
      </div>
      <div>
      <span className={`${legenda.circle} ${legenda.Bronze}`} />
        <span>Bronze</span>
      </div>      
    </div>
  </div>
);

export default Legenda;
