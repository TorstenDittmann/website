import dns from "dns";
export default (req, res) => {
    dns.resolveAny("www.appwrite.io", (err, ret) => {
        if (err) throw err;

        res.json(ret)
    });

}