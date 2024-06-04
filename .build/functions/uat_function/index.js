const express = require('express')
const cors = require('cors');
const catalyst = require('zcatalyst-sdk-node');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/getUserData', async(req,res)=>{
    
	try {
		 const adminApp = catalyst.initialize(req,{scope:'admin'});
		 const query = `SELECT * FROM table1`;
		 const response = await adminApp.zcql().executeZCQLQuery(query);
		 
		 res.status(200).json({success:true,message:"Successfully got data !!", data:response})
	} 
	catch (error) {
		console.log({error})
		res.status(400).json({success:false,message:"unSuccessfully got data !!", error:error})
	}

})
app.post('/addUser', async(req,res)=>{
    //    console.log(req.body)
       const data = req.body.formData
	try {
		 const adminApp = catalyst.initialize(req,{scope:'admin'});
		 const response = await adminApp.datastore().table('table1').insertRow(data)
		//   console.log({response})
		 res.status(200).json({success:true,message:"Successfully got data !!", data:response})
	} 
	catch (error) {
		console.log({error})
		res.status(400).json({success:false,message:"unSuccessfully got data !!", error:error})
	}

})
app.delete('/delete-user/:ROWID', async(req,res)=>{

    console.log("ROWID from frontend",req.params.ROWID)
    // console.log(req.body)
    // const data = req.body.formData
//  try {
//       const adminApp = catalyst.initialize(req,{scope:'admin'});
//       const response = await adminApp.datastore().table('table1').insertRow(data)
//        console.log({response})
//       res.status(200).json({success:true,message:"Successfully got data !!", data:response})
//  } 
//  catch (error) {
//      console.log({error})
//      res.status(400).json({success:false,message:"unSuccessfully got data !!", error:error})
//  }

})

module.exports = app;
