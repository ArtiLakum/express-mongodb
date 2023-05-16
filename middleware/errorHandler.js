const {constant} = require("../constant");
const errorHandler = (err,req,res,next) => {
const statusCode = res.statusCode ? res.statusCode : 500
switch (statusCode) {
    case constant.VALIDATION_ERROR:
        res.json({title: "validation failed", message: err.message, stackTrace: err.stack} );
        break;

    case constant.NOT_FOUND:
        res.json({title: "not found", message: err.message, stackTrace: err.stack} );

    case constant.UNAUTHORIZED:
        res.json({title: "unauthorized", message: err.message, stackTrace: err.stack} );    

    case constant.FORBIDDEN:
        res.json({title: "forbidden", message: err.message, stackTrace: err.stack} );    

    case constant.SERVER_ERROR:
        res.json({title: "server error", message: err.message, stackTrace: err.stack} );    
        
    default:
        console.log("no error");
        break;
}

};

module.exports = errorHandler;