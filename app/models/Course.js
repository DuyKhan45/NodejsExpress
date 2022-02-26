const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Course = new Schema({
    _id: {type: Number},
    name: {type: String,require: true, maxLength: 255}, //require: true là bắt buộc phải nhập
    description: {type: String, maxLength: 600},
    image: {type: String},
    videoId: {type: String},
    slug: {type: String, slug: 'name', unique: true},
    level: {type: String},
},{
    _id: false,
    timestamps: true,
});

// Add plugin
mongoose.plugin(slug);

Course.plugin(AutoIncrement)
Course.plugin(mongooseDelete, { 
    deletedAt : true ,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course)
