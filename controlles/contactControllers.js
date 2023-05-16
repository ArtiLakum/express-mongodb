const asyncHandler = require("express-async-handler");

//@desc get all contact
//@route get /api/contacts
//@access public

const getContact = asyncHandler (async(req,res) => {
    res.status(200).json({ message: "get all contact"});
  });

  //@desc create  contact
//@route post /api/contacts
//@access public

const createContact = asyncHandler(async(req,res) => {
  console.log("the request body is",req.body);
  const {name, email, phone} = req.body;
  if(!name || !email || !phone){
    res.status(400)
    throw  new Error ("All field are mendotory !")
  }
  res.status(201).json({ message: "create  contact"});
}) ;

 //@desc update contact
//@route get /api/contacts
//@access public

const getallContact = asyncHandler(async(req,res) => {
    res.status(200).json({ message: `get contact ${req.params.id}`});
});

 //@desc get all contact
//@route put /api/contacts/:id
//@access public

const updateContact = asyncHandler(async(req,res) => {
    res.status(200).json({ message: `update contact ${req.params.id}`});
  });


   //@desc delete  contact
//@route delete /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async(req,res) => {
  res.status(200).json({ message: `delete contact ${req.params.id}`});
}); 

  module.exports = {getContact,createContact,getallContact, updateContact, deleteContact} ;