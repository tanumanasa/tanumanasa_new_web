#!/usr/bin/env node
// Usage: npm run hash-password            (prompts)
//        npm run hash-password -- "my long password"
import crypto from 'node:crypto';
import readline from 'node:readline';

async function ask() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((res) => rl.question('Admin password (12+ characters): ', (a) => { rl.close(); res(a); }));
}

const pw = process.argv[2] || (await ask());
if (!pw || pw.length < 12) {
  console.error('Please use at least 12 characters.');
  process.exit(1);
}
const salt = crypto.randomBytes(16);
const hash = crypto.scryptSync(pw, salt, 64);
console.log('\nAdd this line to your environment (.env.local or host settings):\n');
console.log(`ADMIN_PASSWORD_HASH=${salt.toString('hex')}:${hash.toString('hex')}\n`);
