exports.getData = function(req,res,next){
    var data = {
        status:200,
        data:[{
            name:"Sumit",
            age:26
        },{
            name:"Vinod",
            age:28  
        }]
    }
    res.status(200).send(data);
}