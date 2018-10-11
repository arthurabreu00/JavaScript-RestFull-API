let NeDB = require('nedb');
let db = new NeDB({

	filename: 'users.db',
	autoLoad: true,

});

module.exports = (app) => {

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

	app.post('/users', (req, res) => {

		db.find({}).sort({name: 1}).exec((err, users) => {

			if (err) {
				console.log("Erro", err);
				res.status(400).json({
					error: err
				})
			} else {


				res.StatusCode = 200;
				res.setHeader('Content-type', 'application/json')
				res.json({
					users
				});
			}
		});


		db.insert(req.body, (err, user) => {

			if (err) {
				app.utils.error.send();
			} else {

				res.status(200).json(user);
			}

		})

	})


};