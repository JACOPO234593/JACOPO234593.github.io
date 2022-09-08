const express = require('express')
const app = express()
const bcrypt = require('bcrypt') //criptare password
const fs = require('fs');
const axios = require("axios");
var bodyParser = require('body-parser');
let urlEncoded = bodyParser.urlencoded({extended: false});


const session = require('express-session');
app.use(session({
    secret: "PWM2021",
    resave: false,
    saveUninitialized: false,
    // secure: true require HTTPS, maxAge in milliseconds
    cookie: {secure: false, maxAge: 3600000} 
    }));var sess;


app.get('/',function(req,res){
    sess=req.session;
    /*
    * Here we have assigned the 'session' to 'sess'.
    * Now we can create any number of session variables we want.
    * in PHP we do as $_SESSION['var name'].
    * Here we do like this.
    */
    sess.email; // equivalent to $_SESSION['email'] in PHP.
    sess.username = ""; // equivalent to $_SESSION['username'] in PHP.
});


app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.get('/index.html', function(req, res) {

    res.render('index.html');
});

app.get('/stats.html', function(req, res) {
    res.render('stats.html');

    function loadCurry() {
        const options = {
            method: 'GET',
            url: 'https://api-nba-v1.p.rapidapi.com/players/statistics',
            params: {id: '124', season: '2021'},
            headers: {
            'X-RapidAPI-Key': 'ee90d9614amsh12e1996da4153a4p171c06jsnb868f906cd51',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        }; 
        var ar = [];
        axios.request(options).then(function (response) {
            ar.push(response.data);
            fs.writeFile('public/stat.json', JSON.stringify(ar, null, 4), (err) => {
                if (err) throw err;
            })
        }).catch(function (error) {
            console.error(error);
        });
    }
    function loadJames() {
        const options = {
            method: 'GET',
            url: 'https://api-nba-v1.p.rapidapi.com/players/statistics',
            params: {id: '265', season: '2021'},
            headers: {
            'X-RapidAPI-Key': 'ee90d9614amsh12e1996da4153a4p171c06jsnb868f906cd51',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        }; 
        axios.request(options).then( function (response) {
            fs.readFile('public/stat.json', (err,data) => {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                } else {
                    var json = JSON.parse(data)   
                    json.push(response.data)
                    fs.writeFile('public/stat.json', JSON.stringify(json, null, 4), (err) => {
                        if (err) throw err;
                    })
                
                }     
            })
        }).catch(function (error) {
            console.error(error);
        });
    }
    function loadEmbiid() {
        const options = {
            method: 'GET',
            url: 'https://api-nba-v1.p.rapidapi.com/players/statistics',
            params: {id: '159', season: '2021'},
            headers: {
            'X-RapidAPI-Key': 'ee90d9614amsh12e1996da4153a4p171c06jsnb868f906cd51',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        }; 
        axios.request(options).then(function (response) {
            fs.readFile('public/stat.json',(err,data) => {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                } else {
                    var json = JSON.parse(data)   
                    console.log(data);
                    json.push(response.data)
                    fs.writeFile('public/stat.json', JSON.stringify(json, null, 4), (err) => {
                        if (err) throw err;
                    })                    
                }     
            })
        }).catch(function (error) {
            console.error(error);
        }).finally( () => {
            
        });
    }
    function loadGiannis() {
        const options = {
            method: 'GET',
            url: 'https://api-nba-v1.p.rapidapi.com/players/statistics',
            params: {id: '20', season: '2021'},
            headers: {
            'X-RapidAPI-Key': 'ee90d9614amsh12e1996da4153a4p171c06jsnb868f906cd51',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        }; 
        axios.request(options).then(function (response) {
            fs.readFile('public/stat.json', (err,data) => {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                } else {
                    var json = JSON.parse(data)   
                    json.push(response.data)
                    fs.writeFile('public/stat.json', JSON.stringify(json, null, 4), (err) => {
                        if (err) throw err;
                    })
                }     
            })
        }).catch(function (error) {
            console.error(error);
        });
    }
    function loadJokic() {
        const options = {
            method: 'GET',
            url: 'https://api-nba-v1.p.rapidapi.com/players/statistics',
            params: {id: '279', season: '2021'},
            headers: {
            'X-RapidAPI-Key': 'ee90d9614amsh12e1996da4153a4p171c06jsnb868f906cd51',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
            }
        }; 
        axios.request(options).then(function (response) {
            fs.readFile('public/stat.json', (err,data) => {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                } else {
                    var json = JSON.parse(data)   
                    json.push(response.data)
                    fs.writeFile('public/stat.json', JSON.stringify(json, null, 4), (err) => {
                        if (err) throw err;
                    })
                }     
            })
        }).catch(function (error) {
            console.error(error);
        });
    }
    //loadCurry();
    //loadJames();
    //loadEmbiid();
    //loadGiannis();
   //loadJokic();
});

app.get('/standing.html', function(req, res) {
    res.render('standing.html');
   /* function statWest (){
        const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/standings',
        params: {league: 'standard', season: '2021', conference: 'west'},
        headers: {
          'X-RapidAPI-Key': 'ee90d9614amsh12e1996da4153a4p171c06jsnb868f906cd51',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      };
      var ar = [];
      axios.request(options).then(function (response) {
          //console.log(response.data);
          ar.push(response.data);
          console.log(ar);
          fs.writeFile('public/response.json', JSON.stringify(ar, null, 4), (err) => {
              if (err) throw err;
          })
      }).catch(function (error) {
          console.error(error);
      });
    }
    function statEast (){
        const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/standings',
        params: {league: 'standard', season: '2021', conference: 'east'},
        headers: {
          'X-RapidAPI-Key': 'ee90d9614amsh12e1996da4153a4p171c06jsnb868f906cd51',
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
         // console.log(response.data);
         fs.readFile('public/response.json', (err,data) => {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            } else {
                var json = JSON.parse(data)
                console.log(json);

                json.push(response.data)
                console.log(json);
                //console.log("josn "+JSON.stringify(jsonContent))
                fs.writeFile('public/response.json', JSON.stringify(json, null, 4), (err) => {
                    if (err) throw err;
                })
            }     
        })
          
      }).catch(function (error) {
          console.error(error);
      });
    }*/
   // statWest();
    //statEast();
});

app.get('/matches.html', function(req, res) {
    res.render('matches.html');
});

app.get('/register.html', function(req, res) {
    res.render('register.html');
});

app.get('/login.ejs', function(req, res) {
    
    res.render('login.ejs', {name:req.session.username});
});

app.get('/logOut.ejs', function(req, res) {
    delete req.session.username
    res.redirect('/login.ejs')
});

app.use(express.urlencoded({extended: false}))

var jsonLog = []

app.post('/login.ejs', urlEncoded, (req, res) => {    

    jsonLog.splice(0,1)
    jsonLog.push({
        //id: Date.now().toString(),
       // name: req.body.lname,
        mail: req.body.lemail,
        password: req.body.lpassword
    })
   // res.redirect('/index.html')
    
    fs.readFile('account.json',async (err,data) => {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        } else {
            try{
                delete req.session.username
                var json = JSON.parse(data)
                var count = Object.keys(json).length; //numero elementi presenti nel file
                var check = 0
                for (var i=0; i < count; i++){
                    if (json[i].mail === jsonLog[0].mail) {
                        check = 1
                        const match = await bcrypt.compare(jsonLog[0].password, json[i].password,)
                        if (match){
                            //utente trovato
                            req.session.username = json[i].name;
                           // res.redirect('/index.html')
                           res.redirect('/login.ejs')

                        } else {
                            //utente non trovato(passwor errata)
                            res.redirect('/login.ejs')
                        }
                    } else if(check === 0 && i === count-1) {
                        //utente non trovato
                        res.redirect('/login.ejs')
                    }               
                }
            }catch{
                res.redirect('/login.ejs')
            } 
        }     
    })
    
})

// json data
var jsonData = []

app.post('/register.html', async (req, res) => {
        try {
            const hashhedPassword = await bcrypt.hash(req.body.rpassword, 10)
            jsonData.push({
                id: Date.now().toString(),
                name: req.body.cname,
                mail: req.body.remail,
                password: hashhedPassword
            })
            // stringify JSON Object
            
            fs.readFile('account.json', (err,data) => {
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                } else {
                    var json = JSON.parse(data)
                    json.push(jsonData[0])
                    //console.log("josn "+JSON.stringify(jsonContent))
                    fs.writeFile('account.json', JSON.stringify(json, null, 4), (err) => {
                        if (err) throw err;
                    })
                }     
            })
            res.redirect('/index.html')
        } catch {
            res.redirect('/register.html')
        }
        

})

app.listen(3000)