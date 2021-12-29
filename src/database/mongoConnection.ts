import mongoose from 'mongoose';
import { config } from '../config/constants';

export class MongoConnection {
	public async connect(): Promise<void> {
		try {
			await mongoose.connect(config.MONGO_CONNECTION);
			console.log('[+] MongoDB successfully connected.\n');
		} catch (err) {
			console.error(err.message);
			process.exit(1);
		}
	}
}
