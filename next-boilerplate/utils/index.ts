import { UAParser } from 'ua-parser-js';

export const isMobileDevice = (): boolean => {
    const parser = new UAParser();

    if (parser.getDevice()?.type === 'mobile') {
        return true;
    }

    return false;
};
