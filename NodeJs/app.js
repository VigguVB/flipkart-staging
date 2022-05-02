let express = require('express');
let app = express();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 8080;
const mongoUrl = process.env.mongoLiveUrl
const bodyParser = require('body-parser')
const cors = require('cors')

//middleware

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

// Category

app.get('/category', (req,res)=>{
    db.collection('category').find().toArray((err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// Items
app.get('/items', (req,res)=>{
    db.collection('items').find().toArray((err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// grocery
app.get('/groceries', (req,res)=>{
    db.collection('groceries').find().toArray((err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})


// Mobiles
app.get('/mobiles', (req,res)=>{
    db.collection('mobiles').find().toArray((err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// AC
app.get('/ac', (req,res)=>{
    db.collection('ac').find().toArray((err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})


// Beauty
app.get('/beauty', (req,res)=>{
    db.collection('beauty').find().toArray((err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// men fashion
app.get('/menfashions', (req,res)=>{
    db.collection('menfashions').find().toArray((err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// women fashion
app.get('/womenfashions', (req,res)=>{
    db.collection('womenfashions').find().toArray((err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// kids
app.get('/kids', (req,res)=>{
    db.collection('kids').find().toArray((err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})
// Audio
app.get('/audios', (req,res)=>{
    db.collection('audios').find().toArray((err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// computers
app.get('/computers', (req,res)=>{
    db.collection('computers').find().toArray((err, result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// Items adding to cart
app.post('/addItemToCart',(req,res) => {
    console.log(req.body);
    if(req.body){
      
        db.collection("Cart").insertOne(req.body, (err, result)=>{
            if(err) throw err;
            res.status(200).send(result);
        });
    }else{
        res.send('Invalid Input')
    }
})

// Fetch from cart
app.get('/cart',(req,res) => {

        db.collection("Cart").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.status(200).send(result);
          });
    })
   

MongoClient.connect(mongoUrl, (err,client)=>{
    console.log("mongourl", mongoUrl)
    if(err) console.log("Error while Connecting......", err);
    db = client.db('flipkart')
    app.listen(port, ()=>{
        console.log(`server is running on port ${port} `)
    })
})