const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.connect((err) => {
    if (err) {
        throw err;
    }
    else {
        console.log('Conectado!');
    }

    var sqlCreateTable = "CREATE TABLE IF NOT EXISTS people (id int not null auto_increment primary key, name varchar(255))";
    connection.query(sqlCreateTable, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            console.log('Tabela criada');
        }
    });

    var sqlInsertIntoPeople = `INSERT INTO people(name) values('Otavio')`;
    connection.query(sqlInsertIntoPeople, (err, result) => {
        if(err) {
            throw err;
        }
        else {
            console.log('Número de linhas afetadas: ' + result.affectedRows);
        }
    });
});

app.get('/', (req, res) => {
    var sqlSelect = `SELECT * FROM people`;
    var linhas = [];

    connection.query(sqlSelect, (err, result, fields) => {
        if (err) {
            throw err;
        }
        else {
            console.log(result);

            var tabela = '';

            for(var i = 0; i < result.length; i++){
                tabela +='<tr><td>' + result[i].name +'</td></tr>';
            }

            // table ='<table border="1"><tr><th>Nr.</th><th>Name</th><th>Address</th></tr>'+ table +'</table>';

            res.send(
                '<style> \
                    table, th, td {border: 1px solid black;} \
                </style> \
                <h1>FullCycle Rocks!</h1> \
                <table> \
                    <tr> \
                        <th> Nome </th> \
                    </tr>'
                        + tabela +
                '</table>'
            );
        }
    });
});

app.listen(port, () => {
    console.log('Escutando na porta: ' + port)
});