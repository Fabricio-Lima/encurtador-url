import { urlModel } from "database/model/url";
import { Request, Response } from "express";
import shortid from "shortid";
import config from 'config';


const urlApi = config.get<string>('api.URL');

export class URLController {
    public async shorten (req: Request, res: Response): Promise<void> {

        const { originUrl } = req.body;
        const url = await urlModel.findOne({ originUrl });

        if(url){
            res.json(url);
            return;
        }

        const hash = shortid.generate();
        const shortUrl = `${urlApi}/${hash}`;
        const newUrl = await urlModel.create({ hash, shortUrl, originUrl });

        res.json(newUrl);
    };

    public async redirect (req: Request, res: Response): Promise<void> {

        const { hash } = req.params;
        const url = await urlModel.findOne({ hash });

        if(url){
            res.redirect(url.originUrl);
            return;
        }

        res.status(400).json({ error: 'URL not found' });
    };

}