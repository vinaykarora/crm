const routes = (app) => {
    app.route('/contact')
        .get((req, resp) =>
            resp.send('GET request successfull!'))

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