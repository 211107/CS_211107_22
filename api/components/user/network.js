import { Router } from 'express';
import { success } from '../../../network/response.js';
import { getUser } from '../../../model/Users.js';
import { getData } from '../../../model/db.js';





const router = Router();

router.get('/success1', async function (req, res) {
    const client = await getConnection();

    const query_request = {
        text: 'SELECT * FROM tbl_usersdb',
    }

    client.query(query_request)
        .then(r => { success(req, res, r, 200); })
        .catch(e => { success(req, res, e.stack, 400); })


})

router.post('/register', async function (req, res) {
    const client = await getConnection();

    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;

    const query_request = {
        text: 'INSERT INTO tbl_usersdb(username, email, password, phone_number) VALUES($1, $2, $3, $4)',
        values: [username, email, password, phone_number]
    };

    client.query(query_request)
        .then(r => { success(req, res, r, 200) })
        .catch(e => { success(req, res, e.detail, 200) })


});

router.delete('/delete', async function (req, res) {
    const client = await getConnection();
    let id = req.query.id;
    const query_request = {
        text: `DELETE FROM tbl_usersdb WHERE id=${req.query.id}`,
    };

    client.query(query_request)
        .then(r => { success(req, res, r, 200) })
        .catch(e => { success(req, res, e.detail, 200) })
});
router.patch('/update', async function (req, res) {
    const client = await getConnection();

    let id = req.query.id;
    let username = req.query.username;
    let email = req.query.email;
    let password = req.query.password;
    let phone_number = req.query.phone_number;
    const query_request = {
        text: `update tbl_usersdb set username=$2, email=$3 , password=$4 , phone_number=$5 where id=$1 `,
        values: [id, username, email, password, phone_number]

    };
    client.query(query_request)
        .then(r => { success(req, res, r, 200) })
        .catch(e => { success(req, res, e, 200) });
});
router.get('/all_users', async function (req, res) {
    getUser.findAll({ atributes: ['name'] })
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            console.log(err)
        })

});
router.post('/registroUser', async function (req, res) {
    getUser.create({
       // id: req.query.id,
        name: req.query.username,
        //email: req.query.email,
        //password: req.query.password,
        //phone_number: req.query.phone_number

    }).then(users => {
        res.send(users)
    })

});
router.put('/actualiza', async function (req, res) {
    let id = req.query.id
    let nuevosDatos = req.query
    getUser.findOne({ where: { id: id } })
        .then(users => {

            users.update(nuevosDatos)
        })
});

router.delete('/eli', async function (req, res) {
    let id = req.query.id;
    console.log("id:" + req.query.id);
    getUser.destroy({
        where: {
            id: id
        }
    })
        .then(() => {
            res.send('persona eliminaada')

        })
});












export default router;