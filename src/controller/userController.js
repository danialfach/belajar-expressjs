const getAllUsers = (req, res) => {
    const data = {
        id: "1",
        name: "DANIAL FACHRUDIN",
        email: "danialfacrudin@gmail.com",
        address: "MALANG"
    };
    res.json({
        message: "GET all user success.",
        data: data
    });
};

const createNewUsers = (req, res) => {
    console.info(req.body);
    res.json({
        message: "CREATE new user success.",
        data: req.body
    });
};

const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.info('id: ', idUser);
    console.log(req.body);
    res.json({
        message: "UPDATE user success.",
        data: req.body
    });
};

const deleteUser = (req, res) => {
    const {idUser} = req.params;
    res.json({
        message: "DELETE user success.",
        data: {
            id: idUser,
            name: "Bryan",
            email: "bryan@example.com"
        }
    });
};

export default {
    getAllUsers,
    createNewUsers,
    updateUser,
    deleteUser
};