import express from 'express';
import User from '../models/userModel.js';
import {getToken} from '../util.js';

const router = express.Router();

router.post('/signin', async (req,res) => {
	try {
		const signinUser = await User.findOne({
			email:req.body.email,
			password:req.body.password
		});
	
		if(signinUser){
			res.send({
				id:signinUser.id,
				name:signinUser.name,
				email:signinUser.email,
				isAdmin:signinUser.isAdmin,
				token: getToken(signinUser)
			})
		}
		else{
			res.status(401).send({msg:'Invalid email or password'})
		}
	}
	catch(err){
		res.status(400).send({message: err.message});
	}
});

router.post('/register', async (req, res) => {
	try{

		const user = new User({
		    name: req.body.name,
		    email: req.body.email,
		    password: req.body.password,
		});

		const newUser = await user.save();
		if (newUser) {
		    res.send({
		      id: newUser.id,
		      name: newUser.name,
		      email: newUser.email,
		      isAdmin: newUser.isAdmin,
		      token: getToken(newUser),
		    });
		} else {
		    res.status(401).json({ message: 'Invalid User Data.' });
		}
	}

	catch(err){
		res.status(400).json({message: err.message});
	}
});

router.get('/createadmin', async (req, res) => {
	try {
		const user = new User ({
			name : 'Basir',
			email: 'admin@example.com',
			password: '1234',
			isAdmin: true,
		});

		const newUser = await user.save();
		res.send(newUser);
	}
	catch(error) {
		res.send({ msg : error.message });
	}
});

export default router;