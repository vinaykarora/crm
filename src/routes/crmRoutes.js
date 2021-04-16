import {
    addNewContact,
    getContact,
    getContactWithId,
    updateContact,
    deleteContact
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

        .put(updateContact)

        .delete(deleteContact)
}

export default routes;