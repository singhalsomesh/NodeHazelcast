const {createStudent,getStudent} = require('./../service/studentOperation')


exports.createStudentData =  async (req,res) => {
    try{
        let isCreated = await createStudent(req.body);
        if(isCreated){
            return res.status(200).json({
                status : 'success',
                message : 'A student data is inserted in cache'
            })
        }else{
            return res.status(400).json({
                status : 'failed',
                message : 'Please connect hazelcast server'
            })
        }
        
    }catch(err){
        return res.status(400).json({
            status : 'failed',
            message : 'Error occur while inserting value in cache'
        })
    }
}

exports.getStudentData = async (req,res) => {
    try{
        let data = await getStudent(req.body);
        if(data){
            return res.status(200).json({
                status : 'success',
               data
            })
        }else{
            return res.status(400).json({
                status : 'failed',
                message : 'Please connect hazelcast server'
            })
        }
        
    }catch(err){
        return res.status(400).json({
            status : 'failed',
            message : 'Error occur while inserting value in cache'
        })
    }
}