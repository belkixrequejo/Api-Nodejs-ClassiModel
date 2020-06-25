const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var dbConn  = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/ordenar',   (req, res) => {
    dbConn.query('CALL ordenar_producto ?', request.body,(error, result) => {
        if (error) throw error;
        response.status(201).send(`Orden añadida con ID: ${result.insertId}`);
    });
});

//ya modificado
app.post('/order', (request, response) => {
    dbConn.query('INSERT INTO orders SET ?', request.body, (error, result) => {
        if (error) throw error;

        response.status(201).send(`Orden added with ID: ${result.insertId}`);
    });
    response.status(201).send(`Los datos query ${ dbConn.query}`);
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
