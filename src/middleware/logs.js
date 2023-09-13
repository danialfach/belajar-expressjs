const logRequest = (req, res, next) => {
    console.info("Logging request in PATH: ", req.path);
    next();
};

export default logRequest;