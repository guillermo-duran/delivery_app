const User = require('../models/user');
module.exports = {
    async getAll(req, res, next){
        try {
            const data = await User.getAll();
            console.log(`Usuarios: ${data}`);
            return res.status(201).json(data);
        } catch (error) {
            console.log(`Error to get Users: ${error}`);
            return res.status(501).json({
                succes: false,
                message: 'Ha ocurrido un error al consultar los usuarios'
            });
        }
    }
};