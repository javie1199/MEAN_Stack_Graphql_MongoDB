import Joi from 'joi';

export default Joi.object().keys({
    email: Joi.string().email().required().label('Email'),
    username: Joi.string().alphanum().min(3).max(30).required().label('Username'),
    name: Joi.string().max(100).label('Name'),   
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/).label('Password').options({
        language:{
            string:{
                regex:{
                    base: 'must have at least one lowercase, one uppercase, on speacial character and one digit'
                }
            }
        }
    })
})