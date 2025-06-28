import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';


const router = express.Router();

router.post('/register',async(req,res)=>{
  const {name,email,password} = req.body;
  try{
    let user = await User.findOne({email});
    if(user) return res.status(400).json({msg:"User already exists"});

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await  bcrypt.hash(password,salt);

    user = new User({
      name,
      email,
      password:hashedPassword,
    });
    await user.save();

    const token = jwt.sign({id:user._id},"jwtSecretKey",{
      expiresIn:3600

    });
    res.json({token})



  }catch(err){
    console.error(err);
    res.status(500).send('server Error');
  }
});
// //Login
// router.post('/login',async(req,res)=>{
//   const {name,email,password} = req.body;
//   try{
//     const user = {name,email,password}
//     if(!user) return res.status(400).json({msg:'Invalid Credential'});
//     const isMatch = await bcrypt.compare(password,user.password);

//     if(!isMatch) return res.status(400).json({msg:'Invalid Credential'});

//     const token = jwt.sign({id:user._id},"jwtSecretKey",{
//       expiresIn:3600
//     });
//     res.json({token});


//   }catch(err){
//     console.log(err);
//     res.status(500).send('server error');

//   }
// });
// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;   // only need email + password
  try {
    // find user in DB
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    // sign token
    const token = jwt.sign({ id: user._id }, "jwtSecretKey", {
      expiresIn: 3600
    });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

export default router;