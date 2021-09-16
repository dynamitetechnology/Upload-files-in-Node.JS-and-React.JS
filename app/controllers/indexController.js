const {
    check,
    validationResult
} = require('express-validator');


module.exports = {

    fileupload:(req,res, next)=>{
        ;(async()=>{

            console.log('Body----------------->',req.body)
            console.log('File ----------------->',req.file)
            let db = req.app.locals.db;
            let redisDb = req.app.locals.redisdb;
            let loginToken = req.cookies.token;
            let errors = validationResult(req);
            // let getAlluser = await new Promise(resolve => {
            //     const statement = {
            //         text: "SELECT * FROM users ",
            //         values: []
            //     }
            
            //     db.query(statement, async function (err, obj) {
            //         if (err) throw err;
            //         let resultSet = await obj.rows
            //         return resolve(resultSet);
            //     })
            // })
            //console.log(getAlluser)
            res.json({status:"200",message:"Successfully uploaded",resp:req.file})
        })()

    },

}