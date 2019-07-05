import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Counter from './components/Counter'

var app = express();
// add static path
app.use(express.static('public'))
// add top page routing
app.get('/', (req, res) => {
const elem = ReactDOMServer.renderToString(<Counter />);
  res.send(
    ReactDOMServer.renderToString(
     //<Counter first={1}/>   
     <div>
       <div id="app">${elem}</div>
       <script src="client4public.js" />
     </div>    
   )
  )
})

// start listen
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})