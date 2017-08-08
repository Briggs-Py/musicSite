let controller = require('./../controllers/controller');

module.exports=(app)=>{
  app.post('/api/register', controller.register)
  app.post('/api/login', controller.login)
  app.get('/logout', controller.logout)
  app.get('/api/currentUser', controller.currentUser)
  app.get('/api/allEvents', controller.allEvents)
}
