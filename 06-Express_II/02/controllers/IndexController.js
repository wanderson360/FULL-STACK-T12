const IndexController = {
    showSobre: (req, res) => {
        res.render('sobre', { nomeDoVisitante:"João Lima" });
    },
    showIndex: (req, res) => {
        res.render('index', { title: 'Express' });
    }
}

module.exports = IndexController;
