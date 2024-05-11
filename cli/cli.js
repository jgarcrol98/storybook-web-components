import { createWC } from './create-wc.js';

const action = process.argv[2];

if (action === "wc:create") {
    const wcName = process.argv[3];
    createWC(wcName);
} else {
    console.log(`
    ****** Not found command ******        
            check with: ./cli wc:create <name-wc>
            `);
}
