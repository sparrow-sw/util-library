import Pino from 'pino';

import { ENVIRONMENT } from './constants.js';

const logger = new Pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            errorProps: '*',
            ignore: 'pid,hostname',
            messageFormat: '{msg}',
            translateTime: 'SYS:mm-dd-yy HH:mm:ss.l'
        },
    }
});

if (ENVIRONMENT == 'local') {
    logger.level = 'debug';
}

const clr = {
    // effects
    'reset': '\x1b[0m',
    'bright': '\x1b[1m',
    'red_bg': '\x1b[41m',
    // actual colors
    'black': '\x1b[30m',
    'red': '\x1b[31m',
    'green': '\x1b[32m',
    'yellow': '\x1b[33m',
    'blue': '\x1b[34m',
    'magenta': '\x1b[35m',
    'cyan': '\x1b[36m',
    'white': '\x1b[37m',
    'gray': '\x1b[90m'
};

// find directory, line, and parent function where logger was called
const trace = () => {

    // remove unwanted substrings
    const clean = (str) => str.replace(process.cwd(), '').replace(/[()\n\r\t\s]+/g, '');

    // get an array of stacks
    // NOTE: must be "at " with a space or will cause issues for log.fatal
    const stackLayers = Error().stack.split('at ').slice(1);

    // get fourth stack & clean up address
    const messyAddress = stackLayers[3].split('file://');
    const address = clean((messyAddress[messyAddress.length - 1]));

    // choose third from last stack & clean up function name
    const messyFunction = stackLayers[stackLayers.length - 3];
    const originalFunction = clean(messyFunction.split('(file://')[0]);

    return `${address} ${originalFunction}()`;
};

const logMessage = (msg, loggerCallback, logType) => {

    let logColor = clr.white;
    switch (logType) {
        case 'debug':
            logColor = clr.blue;
            break;
        case 'info':
            logColor = clr.green;
            break;
        case 'warn':
            logColor = clr.yellow;
            break;
        case 'error':
            logColor = clr.red;
            break;
        case 'fatal':
            logColor = clr.red_bg;
            break;
        default:
            logColor = clr.white;
            break;
    }

    // check if the message has more than one parameter, if so- log params separately
    msg.length > 1 ? loggerCallback(msg[0], clr.gray + `[${trace()}] ${logColor}${msg[1]}` + clr.reset) : loggerCallback(clr.gray + `[${trace()}] ${logColor}${msg}` + clr.reset);
};

const log = () => { };
log.debug = (...msg) => logMessage(msg, logger.debug.bind(logger), 'debug');
log.info = (...msg) => logMessage(msg, logger.info.bind(logger), 'info');
log.warn = (...msg) => logMessage(msg, logger.warn.bind(logger), 'warn');
log.error = (...msg) => logMessage(msg, logger.error.bind(logger), 'error');
log.fatal = (...msg) => logMessage(msg, logger.fatal.bind(logger), 'fatal');

// const example = () => {
//   log.info('hello world');
//   log.warn('sketchy stuff');
//   log.error(Error('something broke!'), 'WHAT HAVE YOU DONE');
//   log.debug('not important');
//   log.fatal('everything has broken');
// }

// example();

// log.info('hello world');
// log.warn('sketchy stuff');
// log.error(Error('something broke!'), 'WHAT HAVE YOU DONE');
// log.debug('not important');
// log.fatal('everything has broken');

export default log;