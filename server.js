const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var dbConn  = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.post('/ordenar', urlencodedParser, function (req, res) {
    dbConn.query('CALL ordenar_producto('+req.body+')', function(err,rows) {
            if(err) {
               res.send(err)
            } else {
                res.send(rows)
                res.send('Datos guardados exitosamente, ' + req.body.username)
            }
        })
});



app.get("/1/cliente",
    (req, res) => {
        dbConn.query('SELECT * FROM cliente_mayor_compras', function(err,rows) {
            if(err) {
               res.send(err)
            } else {
                res.send(rows)
            }
        })
    });
app.get("/1/producto",
    (req, res) => {
        dbConn.query('SELECT * FROM producto_mas_vendido', function(err,rows) {
            if(err) {
                res.send(err)
            } else {
                res.send(rows)
            }
        })
    });
   app.post('/users', (req, res) => {
      users.push('User ' + users.length)
      res.send("New user add")
    });

app.use((req, res) => {
    res.status(404).send({
        success: false,
        data: {
            message: "Estás intentando hacer algo que no deberías"
        },
    })
});

app.listen(83, () => {
    console.log("Servidor ejecutándose...");
});
