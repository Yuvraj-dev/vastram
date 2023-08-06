const ProductRouter = require("./ProductRouter")

const Routes = [
    { path: '/products', router: ProductRouter}
]

Routes.init = (app) => {
    if(!app || !app.use) { 
        console.log("[Error] Route Initialization Failed: app | app.use are undefined")
        process.exit(1)
    }

    Routes.forEach( route => {
        app.use(route.path, route.router)
    })

    app.use('*', (req, res, next) => {
        const { method, originUrl } = req
        const message = `Cannot ${method} ${originUrl}`
        res.status(409).json({status: "failure", error: message})
    })
}

module.exports = { Routes }