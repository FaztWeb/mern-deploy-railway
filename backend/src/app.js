import express from 'express'
import Product from './models/product.model.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/products', async (req, res) => {
    const products = await Product.find()
    res.json(products)
})


app.post('/products', async (req, res) => {
    const {name, price, description} = req.body 

    const newProduct = await Product.create({
        name,
        price,
        description
    })
    res.json(newProduct)
})

export default app
