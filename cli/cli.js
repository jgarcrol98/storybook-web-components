import { createWC } from './create-wc.js';

const action = process.argv[2];

switch (action) {
    case "wc:create":
        const wcName = process.argv[3];
        createWC(wcName);
        break;
    default:
        console.log(`
    ****** Not found command ******        
            check with: ./cli wc:create <name-wc>
            `);
}