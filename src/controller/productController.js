const getAllProducts = (req, res) => {
    const data = {
        id: 1,
        productName: "Shampoo",
        brand: "Nuvo",
        price: 5000
    };
    res.json({
        message: "GET product success.",
        data: data
    });
};

const addProducts = (req, res) => {
    console.info(req.body);
    res.json({
        message: "Add new product success.",
        data: req.body
    });
};

const updateProducts = (req, res) => {
    const {idProducts} = req.params;
    console.info('id: ', idProducts);
    console.log(req.body);
    res.json({
        message: "UPDATE product success.",
        data: req.body
    });
};

const deleteProducts = (req, res) => {
    const{idProducts} = req.params;
    res.json({
        message: "DELETE product success.",
        data: {
            id: 1,
            productName: "Shampoo",
            brand: "Nuvo",
            price: 5000 
        }
    });
};

export default {
    getAllProducts,
    addProducts,
    updateProducts,
    deleteProducts
};