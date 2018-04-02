const express=require('express');
const bodyparse = require('body-parser');
const mysql=require('mysql');


const app=express();
const pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:"123456",
	database:'item',
	port:3306
})
app.use(bodyparse.urlencoded({}));
app.post('/add',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	var json=req.body;
	pool.getConnection((err,con)=>{
		console.log('hahah')
		if(err) throw err;
		con.query(`INSERT INTO loupan (name,price,des,img,fenlei) VALUES (${json.name},${json.price},${json.des},${json.img},${json.fenlei})`,(err)=>{
			if(err) throw err
		})
	})
	res.end()
})

app.listen(8082)