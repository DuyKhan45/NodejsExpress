const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../../uti/mongoose')

class MeController {
    
    // [GET] me/stored/courses
    storedCourses(req, res, next) {

        let courseQuery = Course.find({})

        if(req.query.hasOwnProperty('_sort')) {
            const isValidType = ['asc', 'desc'].includes(req.query.type)
            courseQuery = courseQuery.sort({
                [req.query.colum]: isValidType ? req.query.type : 'desc',
            })
        }



        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) => 
                res.render('./me/stored-courses', {
                deleteCount,
                courses: mutipleMongooseToObject(courses),
                })
            )
            .catch(next)
        // đã gộp 2 promise dưới thành 1 như ở bên trên
        // Course.countDocumentsDeleted()
        //     .then((deleteCount) => {
        //         console.log(deleteCount)
        //     })
        //     .catch(()=> {})
        // Course.find({ })
        //     .then(courses=> res.render('./me/stored-courses', {
        //         courses: mutipleMongooseToObject(courses),
        //     }))
        //     .catch(next)     
    }

    // [GET] me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({ })
            .then(courses=> res.render('./me/trash-courses', {
                courses: mutipleMongooseToObject(courses),
            }))
            .catch(next)     
    }
}

module.exports = new MeController();
