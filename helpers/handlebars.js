const Handlebars = require('handlebars')

module.exports = {
    sum: (a,b) => a+b,
    sortable: (filed, sort) => {

        const sortType = filed === sort.colum ? sort.type : 'default'
        
        const icons = {
            default: 'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending',
        }
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        }

        const icon = icons[sortType]
        const type = types[sortType]

        const href = Handlebars.escapeExpression(`me/stored/courses?_sort&colum=${filed}&type=${type}`)

        const output =  `<a href = "${href}">
            <span class = "${icon}"></span>
        </a>`

        return new Handlebars.SafeString(output)
    }
}