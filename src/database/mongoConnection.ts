import mongoose from 'mongoose';
import config from 'config';


const connectionDb = config.get<string>('database.MONGO_CONNECTION');

export class MongoConnection {
	public async connect(): Promise<void> {
		try {
			await mongoose.connect(connectionDb);
			console.log('[+] MongoDB successfully connected.\n');
		} catch (err) {
			console.error(err.message);
			process.exit(1);
		}
	}
}
