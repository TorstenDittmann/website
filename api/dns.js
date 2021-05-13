const dns = require("dns");

module.exports = (req, res) => {
    dns.resolveAny("www.appwrite.io", (err, ret) => {
        if (err) throw err;

        res.json(ret)
    });

}