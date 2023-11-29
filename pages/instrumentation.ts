// instrumentation.ts
import { registerOTel } from '@vercel/otel';

export function register() {
  registerOTel("next-app");
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Import the compiled Node-specific instrumentation code
    require('../instrumentation.node.ts');
  } else {
    // Client-side or other runtime specific code can go here
  }
}
