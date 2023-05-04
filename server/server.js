import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import connect from './database/connect.js'
import routes from './routes/Recipe-route.js'
import router from './routes/User-route.js'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())
config()
app.use('/user',router)
app.use('/recipe',routes)


const port = process.env.PORT || 3007
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log('listening to 3007')
        })
    } catch (err) {
        console.log('cannot connect with the server')
    }
}).catch((err) => {
    console.log('failed to connect with the database')
})