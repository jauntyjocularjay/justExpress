
import pkg from 'express'



const app = pkg()
app.use(express.static('public'))





app.listen(3000)
