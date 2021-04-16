import {
    addNewContact,
    getContact,
    getContactWithId
} from '../controllers/crmControllers'

const routes = (app) => {
    app.route('/contact')
        .get((req, resp, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContact)

        .post(addNewContact);

    app.route('/contact/:contactID')
        .get(getContactWithId)

        .put((req, resp) =>
            resp.send('PUT request successfull!'))

        .delete((req, resp) =>
            resp.send('DELETE request successfull!'))
}

export default routes;