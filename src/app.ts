import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/loggers';
import routes from './routes';


const app = express();

const port = config.get<number>( 'port' );

app.listen( port, async () => {
    logger.info( 'App is running on port 1337' );
    await connect();

    routes( app );
} );
