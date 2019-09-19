import clientsRouter from './clientsRouter'
import adminRouter from './adminRouter'

let initRouter = (app) =>{
  clientsRouter(app)
  adminRouter(app)
}
module.exports = initRouter