module.exports = {
     "node_port": 3000,
     "FRONT_END_URL": "http://localhost:4200/",
     "BACK_END_URL": "http://localhost:3000/",

     //For hosting website 
    //"node_port": 28028,
    //"FRONT_END_URL": "http://129.173.22.35:28027/",
     //"BACK_END_URL": "http://129.173.22.35:28028/",
    // "database": "mongodb://localhost:27017/photographer",
    "database":"mongodb+srv://userMongo:MongoDb56@cluster0-nvrek.mongodb.net/PhotoBook?retryWrites=true&w=majority",
    "ACCESS_TOKEN_SECRET_KEY":"abcdefghijklmnopqrstuvwxyz",

    //Encription
    "SALT_WORK_FACTOR": 10,
    
    //Status Configuration
    "OK_STATUS": 200,
    "BAD_REQUEST": 400,
    "UNAUTHORIZED": 401,
    "NOT_FOUND": 404,
    "MEDIA_ERROR_STATUS": 415,
    "VALIDATION_FAILURE_STATUS": 417,
    "DATABASE_ERROR_STATUS": 422,
    "INTERNAL_SERVER_ERROR": 500
};