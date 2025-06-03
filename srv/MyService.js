module.exports = (srv) => {
    srv.on('hello', (req, res) => {
        return 'Welcome ' + req.data.name
    })
}