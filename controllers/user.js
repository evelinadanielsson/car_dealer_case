const User = require('../models').users;
const bcrypt = require('bcryptjs');

module.exports = {
    create(req, res) {
        const by = req.body;
        console.log(by)
        var {email, password, password2} = req.body;

        password = bcrypt.hashSync(password, 10);

        return User
        .create({
            email: email,
            password: password,
        })
        .then(user => res.status(201).redirect('/users/login'))
        .catch(error => res.status(400).send(error));
    },

    setEmployeeId(req, res) {
        const email = req.body.email;
        const employee_id = req.body.employee_id;
        const by = req.body;
        console.log(by)
        console.log(email);
        console.log(employee_id);
        User
        .update({ employee_id: employee_id}, {
            where: {
                email: email
            }
        })
        .then(user => res.status(201).redirect('/dashboard'))
        .catch(error => res.status(400).send(error));
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