const Todo = require("../models/Todo");

//define route Handler 

exports.getTodo = async(req,res) =>{
    try{
           const todos = await Todo.find({});
           res.status(200)
           .json({
            success:true,
            data:todos,
            message:"'Entry of TODO data is fetched",
           });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json(
           {
               success:false,
               message:"Server error",
               error:err.message,
           }
        );
    }
}

exports.getTodoById = async(req,res) =>{
    try{
       // extract 
      const id = req.param.id 
      const todo = await Todo.findById({_id: id})
       
      if(!todo){
        return res.status(400).json({
            success:false,
            message:"No data found with the given Id",
        })
      }
      res.status(200).json({
        success:true,
        data:todo,
        message:`Todo ${id} data successfully fetched`,
    })
  }
 
    catch(err){
        console.error(err);
        res.status(500)
        .json(
           {
               success:false,
               message:"Server error",
               error:err.message,
           }
        );
    }
}