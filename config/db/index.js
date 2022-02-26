const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Hoc_tai_F8_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("connect susseccfully")
    }
    catch(error) {
        console.log("error connect")
    }
}

module.exports = {connect}
