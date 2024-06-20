import { createWC } from './feature/create-wc.js';
import { showIntroCLI } from './utils.js';

showIntroCLI();

const action = process.argv[2];

if (action === "wc:create") {
    console.log(process.argv)
    const wcName = process.argv[3];
    createWC(wcName);
} else {
    console.log(`
    ****** Not found command ******        
            check with: ./cli wc:create <name-wc>
            `);
}


