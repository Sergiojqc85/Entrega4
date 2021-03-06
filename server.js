const express = require('express')

const app = express()

const puerto = 8080

const router = require('./app/routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))
app.use(router)


// app.listen(puerto, err => {
// 	if (err) {
// 		console.log(`Se produjo un error al iniciar el servidor ${puerto}`)
// 	} else {
// 		console.log(`El servidor esta escuchando el puerto ${puerto}`)
// 	}
// })

app.listen(puerto, () => {
    console.log('la aplicación esta en linea!')
})