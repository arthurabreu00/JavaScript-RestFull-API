module.exports = (app)=>{

	app.get('/',(req,res) =>{

		res.StatusCode = 200;
		res.setHeader('Content-type','text/html')
		res.end("<h1> Olá Feijao! </h1>")

	});

};