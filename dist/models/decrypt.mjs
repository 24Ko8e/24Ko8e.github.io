import { readFile, writeFile } from 'fs/promises';
import crypto from 'crypto';

async function generateAESKey(password) {
  const passwordBuffer = new TextEncoder().encode(password);
  const hashedPassword = crypto.createHash('sha256').update(passwordBuffer).digest();
  return hashedPassword.slice(0, 32);
}

async function decryptFile(inputPath, outputPath, password) {
  const encryptedData = await readFile(inputPath);
  const iv = encryptedData.slice(0, 16);
  const data = encryptedData.slice(16);
  const key = await generateAESKey(password);

  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
  await writeFile(outputPath, decrypted);
  console.log(`✅ Decryption complete: saved to ${outputPath}`);
}

const input = 'character.enc';
const output = 'decrypted_character.glb';
const password = 'Character3D#@';

decryptFile(input, output, password).catch(console.error);
