import { prop, Typegoose } from '@hasezoey/typegoose';


export class Url extends Typegoose {
    @prop({ required: true })
    hash: string;

    @prop({ required: true })
    originUrl: string;

    @prop({ required: true })
    shortUrl: string;

}

export const urlModel = new Url().getModelForClass(Url);