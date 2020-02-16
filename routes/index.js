// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/', (req, res) => {
	res.render('index', {text: 'This is the dynamic data. Open index.js from the routes directory to see. PINA'})
})
//ocalhost:3000/query?timeframe=h1&instrument=eurjpy&strategie=classic
router.get('/query', (req,res) => {
	const instrument = req.query.instrument
	const timeframe = req.query.timeframe
	const strategie = req.query.strategie

	res.render('strategiePage', {instrument: instrument, timeframe: timeframe, strategie: strategie})
})

router.post('/post', (req, res) => {
	const body = req.body

	res.render('strategiePage', body)
})

router.get('/:instrument/:strategie', (req,res) => {
	const instrument = req.params.instrument
	const strategie = req.params.strategie

	res.render('profile',{instrument: instrument, strategie: strategie})
})


module.exports = router
