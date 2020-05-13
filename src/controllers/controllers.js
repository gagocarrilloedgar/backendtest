const { Pool } = require('pg'); // CONJUNTO DE CONEXIONES (POOL)

// postgreSQL connection
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Ed99Ga99.',
    database: 'firstapi',
    port: '5432'
});
// conexión a postgreSQL



// rutas
const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    console.log(response);
    res.json({
        message: 'User modified Succesfuly',
        body: {
            user: { name, email }

        }
    })
}

const getUserById = async (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}

const deleteUserById = async (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json(`user ${id} successfully deleted `);

}

const createUser = async (req, res) => {

    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1,$2)', [name, email]); // todas las consultas
    // a base de datos se tienen que escribir de forma asíncrona
    console.log(response);
    res.json({
        message: 'User Added Succesfuly',
        body: {
            user: { name, email }

        }
    })
}


module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUserById,
    updateUser,
}