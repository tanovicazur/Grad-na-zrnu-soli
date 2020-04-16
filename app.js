const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
var bodyParser=require('body-parser');
const app = express();

//JSON parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enable CORS
app.use(cors());
app.options('*', cors());

//Allow CORS server-side
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

//Create connection
var connection = mysql.createConnection({
    host               : '192.168.1.3',
    user               : 'root',
    password           : 'P@55word',
    database           : 'mydb'
});

//Connect
connection.connect((err) => {
    if(err)
        throw err;
    else
        console.log("Database connection succesful")
});

//---------------GET REQUESTOVI----------------------
app.get('/korisnici', (req, res) => {
    connection.query('SELECT * FROM mydb.korisnik', (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

//--------------POST REQUEST-------------------------

app.post('/post', function(req, res){
    console.log(req.body);
    var sql = 'INSERT INTO mydb.korisnik SET ?';
    connection.query(sql, req.body, function(err, result){
        if(err){
            throw err;
        }else{
            console.log("ok");
        }
    });
});

//Starting server
app.listen(3000, '192.168.1.3', () => {
    console.log('Server started on 192.168.1.3:3000');
});