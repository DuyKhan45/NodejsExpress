module.exports = function SortMiddleware(req, res, next) {
    

    res.locals._sort = {
        enabled: false,
        type: 'default',
    };

    if(req.query.hasOwnProperty('_sort')) {
        // req.locals._sort.enabled = true
        // req.locals._sort.type = req.query.type
        // req.locals._sort.colum = req.query.colum
        // Thay thế bằng cách viết bên dưới

        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            colum: req.query.colum,
        })
    }

    next();
}