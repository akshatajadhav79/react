const User = require('../models/user-model');
const Contact = require('../models/contact-model');
const Services = require('../models/services-model');
//*---------------------------------
//Get all Users logic
//*---------------------------------
const getAllUsers=  async  (req,res)=>{
    try {
        const users= await User.find({},{password:0});
        // console.log(users);
        if (!users || users.length===0) {
            return res.status(404).json({message: 'No Users found'});
        }
       return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message : "Server error getalluser" });
    }
}
//*---------------------------------
//Delete user logic
//*---------------------------------
const deleteUser=async (req,res) =>{
try {
    const id = req.params.id;
    await User.deleteOne({_id:id})
    return res.status(200).json({message:"Deleted the user Successfully"});
} catch (error) {
    
}
}


//*---------------------------------
//Get all Contacts logic
//*---------------------------------
const getAllContacts=  async  (req,res)=>{
    try {
        const contacts= await Contact.find();
        console.log(contacts);
        if (!contacts || contacts.length===0) {
            return res.status(404).json({message: 'No Contacts found'});
        }
       return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}
//*---------------------------------
//Get all Services logic
//*---------------------------------
const getAllServices=  async  (req,res)=>{
    try {
        const services= await Services.find();
        console.log(services);
        if (!services || services.length===0) {
            return res.status(404).json({message: 'No Services found'});
        }
       return res.status(200).json(services);
    } catch (error) {
        next(error);
    }
}
module.exports= {getAllUsers,getAllContacts,getAllServices,deleteUser};
