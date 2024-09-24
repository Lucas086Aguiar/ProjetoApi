import express from 'express'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

//criar
app.post('/usuarios', async(req, res) =>{
    await prisma.user.create({
        data:{
            email: req.body.email,
            nome: req.body.nome
        }
    })
    res.status(201).json(req.body)
})
app.listen(3000)