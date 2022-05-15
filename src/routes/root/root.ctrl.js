const output = {
    main: (req, res) => {
        res.render('index')
    },

    login: (req, res) => {
        res.render('login')
    }
}

const pcs = {
    login: (req, res) => {
        console.log(req.body);
    },
}

module.exports = {
    output,
    pcs
};