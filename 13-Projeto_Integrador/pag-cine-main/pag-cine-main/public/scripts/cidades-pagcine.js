    new statesCitiesBR({
      states: {
        elementID: "selects_estado",
        initial: true,
        defaultOption: "Estado"
      }
    });

    let estados = document.getElementById('selects_estado')
    estados.onchange = function () {
      new statesCitiesBR({
        cities: {
          elementID: "selects_cidades",
          state: `${this.value}`,
          defaultOption: "Selecione uma Cidade"
        }
      });
    }

    new statesCitiesBR({
      cities: {
        elementID: "selects_cidades",
        state: `${this.value}`,
        defaultOption: "--------"
      }
    });