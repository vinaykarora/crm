const routes = (app) => {
    app.route('/contact')
        .get((req, resp, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, (req, resp, next) => {
            resp.send('GET request successfull!')
        })

        .post((req, resp) =>
            resp.send('POST request successfull!'));

    app.route('/contact/:contactID')
        .get((req, resp) =>
            resp.send('GET by id request successfull!'))

        .put((req, resp) =>
            resp.send('PUT request successfull!'))

        .delete((req, resp) =>
            resp.send('DELETE request successfull!'))
}

export default routes;