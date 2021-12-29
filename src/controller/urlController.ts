import { Request, Response } from "express";
import shortid from "shortid";
import { config } from '../config/constants';


export class URLController {
    public async shorten (req: Request, res: Response): Promise<void> {

        const { originURL } = req.body;
        const hash = shortid.generate();
        const shortUrl = `${config.API_URL}/${hash}`;

        res.json({ originURL, hash, shortUrl });

    };

    public async redirect (req: Request, res: Response): Promise<void> {

        const { hash } = req.params;

        const url = {
            originURL: "https://www.google.com/search?client=firefox-b-d&q=json",
            hash: "oXmagQXQK",
            shortUrl: "http://localhost:4000/oXmagQXQK"
        };

        res.redirect(url.originURL);
    };

}