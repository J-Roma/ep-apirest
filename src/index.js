const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const cors = require('cors')
//app.use(cors());

//settings
app.set('port', process.eventNames.PORT || port);

//middelwares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/v1',require('./routes/index'));

//start the server
app.listen(app.get('port'), () => {
  console.log(`Example app listening at http://localhost:${app.get('port')}`)
})
