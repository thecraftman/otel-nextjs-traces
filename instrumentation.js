"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        // Import the compiled Node-specific instrumentation code
        require('./instrumentation.node.js');
    }
    else {
        // Client-side or other runtime specific code can go here
    }
}
exports.register = register;
