const userController = require('../controllers/user_controller')

module.exports = (app) => {
    app.get('/api/users/getAll', userController.getAll);
}