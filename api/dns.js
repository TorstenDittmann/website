import dns from "dns";

export default (req, res) => {
    dns.resolveAny("www.appwrite.io", (err, ret) => {
        if (err) {
            res.status(400).json(err.message);
            return;
        }

        res.json(ret);
    });
}