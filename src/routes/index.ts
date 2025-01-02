import {Application} from 'express';

const controller = require('../controllers')
const authorController = require('../controllers/author')

export default (app: Application): void => {
    app.get('/', (req, res) => controller.defaultMessage(req, res));

    app.get('/author', (req, res) => authorController.get(req, res));
    app.post('/author', (req, res) => authorController.post(req, res));
    app.patch('/author/:id', (req, res) => authorController.update(req, res));
    app.delete('/author/:id', (req, res) => authorController.remove(req, res));
};