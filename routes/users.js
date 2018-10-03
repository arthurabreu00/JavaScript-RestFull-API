module.exports = (app)=> {

	app.get('/users', (req, res) => {

		res.StatusCode = 200;
		res.setHeader('Content-type', 'application/json')
		res.json({

			users: [{

				name: "Arthur",
				email: 'arthurabreu00@gmail.com',
				id: 1

			}]

		})
	});

	app.get('/users/admin', (req, res) => {

		res.StatusCode = 200;
		res.setHeader('Content-type', 'application/json')
		res.json({

			users: []

		})

	})


};