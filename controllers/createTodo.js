 //import the model

const Todo = require("../models/Todo");

//define route Handler 

exports.createTodo = async(req,res) =>{
    try{
        //extract title & description from request body
        const {title,description} = req.body;
        const response = await Todo.create({title,description});
        res.status(200).json(
            {
             success:true,
             data:response,
             message:"Entry created successfully",
        });

    }
    catch(error){
         console.error(err);
         console.log(err);
         res.status(500)
         .json(
            {
                success:false,
                data:"internal server error",
                message:error.message,
            }
         );
    }
}