const { Recipe } = require('../models');

// 1ª forma que voces podem encontrar de exportar metodos do controller
module.exports = {
  async index(req, res, next){
    let recipes = await Recipe.findAll();
    res.render('recipes', { recipes, user: req.session.user });
  },

  async save(req, res, next){
    let recipe = { ...req.body };
    await Recipe.create(recipe);

    res.redirect('/recipes');
  },

  async edit(req, res, next){
    let id = req.params.id;

    // obter a receita para altera-la
    let recipe = await Recipe.findByPk(id);

    res.render('edit-recipe', { recipe, user: req.session.user });
  },

  async update(req, res, next){
    let id = req.params.id;
    let { name, email, message } = req.body;

    // obter a receita para altera-la
    let recipe = await Recipe.findByPk(id);  
    
    recipe.update({
      name,
      email,
      message
    });

    res.render('edit-recipe', { recipe, updated: true });
  },

  // Outra forma de efetuar update nos registros
  // async update(req, res, next){
  //   let id = req.params.id;
  //   let { name, email, message } = req.body;

  //   // obter a receita para altera-la
  //   let recipe = await Recipe.findByPk(id);

  //   // Alterar as propriedades do objeto que desejamos fazer update
  //   recipe.name = name;
  //   recipe.email = email;
  //   recipe.message = message;

  //   // Salvando atualizacao do registro
  //   await recipe.save();

  //   res.render('edit-recipe', { recipe, updated: true });
  // },

  async delete(req, res, next){
    let id = req.params.id;

    // obter a receita para altera-la
    let recipe = await Recipe.findByPk(id);  

    recipe.destroy();

    res.redirect('/recipes');
  }
}

// 2ª forma que voces podem encontrar de exportar metodos do controller
// const RecipeController = {
//   index: (req, res, next) => {
//     res.render('recipes');
//   }
// }

// module.exports = RecipeController