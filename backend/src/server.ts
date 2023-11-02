import { config as loadEnviromentVars } from 'dotenv';
import app from './socket';
import { AppDataSource } from './db';

async function main() {
    try {
        loadEnviromentVars();
        const port = process.env.APP_PORT;

        await AppDataSource.initialize();

        app.listen(port, () => {
            console.log('server ready in ' + port);
        });
    } catch (error) {
        console.log('server error', error);
    }
}

main();
