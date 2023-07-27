// import dependancies and models in controllers js files
const User=require("../models/user_models");


// create Register api using post method
const User_Signup=async(req,res)=>{
	
	const {user_name,email,password}=req.body;
	const register_user = await User.findOne({email});
	if(register_user){
	    res.status(400).json({
            result:'false',
            msg:'user allready registered, please go to login page..',
            data:register_user  
        });
    }else{
		if(user_name && email && password){

	        try{
                const user = new User({user_name,email,password})
		        const user_data=await user.save()
	            res.status(200).json({
                    result:"true",
                    msg:"user registered sucessfully..",
                    data:user_data
                });
	        }catch(error){
	            res.status(400).json({
	        	    result:"false",
                    msg:"user does not register please try again.."
                })
            }
        }else{
		    res.status(400).json({
                result:"false",
                msg:"parameter required user_name, email & password.."
            });
	    }
    }
};


//create user login api
 const User_Login =async(req,res)=>{
 	const {email,password} =req.body;

    try{
 		if(email && password){
 			const user = await User.findOne({email:email,password:password});
 			if(user != null){
 			    res.status(200).json({
                    result:"true",
                    msg:'user sucessfully login..',
                    data:user
                });
            }else{ 
                res.status(400).json({
                    result:"false",
                    msg:'please enter correct email & password..'
                });
            }
        }else{
            res.status(400).json({
                result:"false",
                msg:'parameter required email & password..'
            });	
        }        
 	}catch(error){
 	    console.log(error.message)
 	}
};


module.exports ={
	User_Signup,
	User_Login
}