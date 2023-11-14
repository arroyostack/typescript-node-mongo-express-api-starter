import mongoose from 'mongoose';
import config from 'config';
import logger from './loggers';

async function connect() {
    const dbUri = config.get<string>( 'dbUri' );

    try {
        mongoose.connect( dbUri );
        logger.info( 'Connected to DB' );
    } catch ( error ) {
        logger.error( 'There was an error connecting to DB.' );
        process.exit( 1 );
    }

};

export default connect;