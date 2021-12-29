import express, { Response } from 'express';
import cors from 'cors';
import { URLController } from './controller/urlController';
import { MongoConnection } from 'database/mongoConnection';


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
app.listen(4000, () => console.log('\n[+] Server is running on port 4000.\n'));
