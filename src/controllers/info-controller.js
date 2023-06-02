const info = (req, res) => {
    return res.json({
        success:  true,
        messsage : "API is live",
        error: {},
        data : {}
    });
}

module.exports  = {
    info
}