
const services = require('../data/services.json');

let saved=[], hired=[];

exports.getAll=(req,res)=>res.json(services);

exports.getOne=(req,res)=>{
 const s=services.find(x=>x.id==req.params.id);
 if(!s) return res.status(404).json({error:"Not found"});
 res.json(s);
};

exports.save=(req,res)=>{
 const s=services.find(x=>x.id==req.body.id);
 if(!s) return res.status(404).json({error:"Not found"});
 saved.push(s);
 res.json({msg:"Saved"});
};

exports.hire=(req,res)=>{
 const s=services.find(x=>x.id==req.body.id);
 if(!s) return res.status(404).json({error:"Not found"});
 hired.push(s);
 res.json({msg:"Hired"});
};

exports.saved=(req,res)=>res.json(saved);
exports.hired=(req,res)=>res.json(hired);
