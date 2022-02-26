// Xử lý vấn đề bảo mạt dữ liệu của handlebars
module.exports = {
    mutipleMongooseToObject: function(mongooseArray){
        return mongooseArray.map(mongooseArray => mongooseArray.toObject())
    },
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    },
};
