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
app.get('/getUserdata5',async(req,res)=> {
	try {
		const adminApp = catalyst.initialize(req,{scope:'admin'});
		const query= 'SELECT * FROM table1';
		const response = await adminApp.zcql().executeZCQLQuery(query) ;
		res.status(200).json({sucess:true,message:"succesfully got data",data:response})
	} catch (error){
console.log({error})
res.status(400).json({success:false,message:"oops",error:error})
	}
		
	}
)
app.get('/getUserdata6', async(req,res)=>{
	try {
		const adminApp = catalyst.initialize(req,{scope:'admin'});
		const query = 'SELECT * FROM table1';
		const response = await adminApp.zcql().executeZCQLQuery(query);
		res.status(200).json({success:true,message:'succefully got data',data:response})
		
	} catch (error) {
		console.log({error})
		res.status(400).json({success:false,message:'oops',error:error})
		
	}
})

module.exports = app;
