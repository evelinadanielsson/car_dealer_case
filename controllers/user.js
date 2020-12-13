const User = require('../models').users;
const bcrypt = require('bcryptjs');

module.exports = {
    create(req, res) {
        var {email, password, password2} = req.body;


        password = bcrypt.hashSync(password, 10);

        return User
        .create({
            email: email,
            password: password,
        })
        .then(user => res.status(201).redirect('/users/login'))
        .catch(error => res.status(400).send(error))
    },

    setEmployeeId(req, res) {
        await User.update({ employee_id: req.body.employee_id }, {
            where: {
              email: req.body.email
            }
          });
    },
};

        
// bcrypt.genSalt(10, (err, salt) => bcrypt.hash(password, salt, (err, hash) => {
//     if (err) throw(err);
//     var u = User.build({
//         email: email,
//         password: hash
//     })


// }
// ))

// return u.save()
// .then(user => res.status(201).send(user))
// .catch(error => res.status(400).send(error))