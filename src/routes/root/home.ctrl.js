const main = (req, res) => {
	res.render('index')
}

const sub = (req, res) => {
	res.render('sub')
}

module.exports = {
	main,
	sub,
};