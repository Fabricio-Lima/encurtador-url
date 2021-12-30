import express, { Response } from 'express';
import cors from 'cors';
import { URLController } from './controller/urlController';
import { MongoConnection } from 'database/mongoConnection';
import config from 'config';


const connectionApi = config.get<string>('api.PORT');

const app = express();

//config api
app.use(cors());
app.use(express());
app.use(express.json());

//database
const database = new MongoConnection();
database.connect();

//routes
const urlController = new URLController()
app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);
app.get('/', (res: Response) => res.json({success: true}));

//connection api
app.listen(connectionApi, () => {
    console.log(`\n[+] Server is running on port ${connectionApi}.\n`);
})