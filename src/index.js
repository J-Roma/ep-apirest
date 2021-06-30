const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

//settings
app.set('port', process.eventNames.PORT || port);

//middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));

//start the server
app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`)
})
