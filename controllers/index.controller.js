// controller for index page

const indexController = {};

indexController.getIndex = (req, res) => {
    res.render("index", { title: "Example App - Node.js, Express.js and Socket.io" });
};

indexController.getTime = (req, res) => {
    var now = new Date();
    res.send('Sono le ore: ' + now.toLocaleTimeString());
};

module.exports =  indexController;
