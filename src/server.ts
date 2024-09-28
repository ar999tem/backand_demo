import express from 'express'

const app = express()
const port = process.env.PORT || 4000
app.get('/', (_req: any, res: any) => {
    let hellomessage = '33 devd44d'
    res.send(hellomessage)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})