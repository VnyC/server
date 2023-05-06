const { json, urlencoded } = require('express');
const express = require('express');
// const cors = require('cors');
// const knex = require('knex');
// const bodyParser = require('body-parser')
const serverless = require('serverless-http')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(json());
// app.use(cors());

const app = express();

const router = express.Router();


// const pgdb = knex({
//     client: 'pg',
//     connection: {
//       connectionString: "postgres://profile:Vinayak17598@vinayakchawdimaniprofilepage.cpiqwwkm5tdd.ap-south-1.rds.amazonaws.com/postgres",
//       ssl: {
//         rejectUnauthorized: false
//       }
//     }
//   });



router.get('/', (req, res) => {
    res.send("It works 8, goto vinayakc.netlify.app");
});

router.get('/hello', (req, res) => {
    res.json({
        "name":"Vinay"
    });
});

// app.get('/getall', (req, res) => {
//     pgdb('profilepage').then(data => {
//         res.json(data);
//     });
// });

// app.put('/putdata', (req, res) => {
//     var body = req.body;
//         pgdb('postgres')
//         .where({head:body.head, type:body.type})
//         .update({
//             title:body.title,
//             subtitle:body.subtitle,
//             para1:body.para1,
//             para2:body.para2,
//             image:body.image,
//             icon:body.icon,
//             url:body.url
//         }, ['*']).then(data => {
//             res.send(data);
//         });
// });

// app.post('/postdata', (req, res) => {
//     var body = req.body;
//         pgdb('vnyc')
//         .insert({
//             head:body.head,
//             type:body.type,
//             title:body.title,
//             subtitle:body.subtitle,
//             para1:body.para1,
//             para2:body.para2,
//             image:body.image,
//             icon:body.icon,
//             url:body.url
//         }, ['*']).then(data => {
//             res.send(data);
//         });
// });

// app.get('/getdata', (req, res) => {
//     var head = req.query.head;
//     var type = req.query.type;
//     if (type == "*") {
//         var que = {head:head};
//       } else {
//         var que = {head:head,type:type};
//       }
//     pgdb('profilepage')
//         .where(que)
//         .then(data => {
//             res.json(data)
//         });
// });

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app)

// app.listen(process.env.PORT || 5000);