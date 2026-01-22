import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destinations = [
  'Thailand',
  'Bali',
  'Vietnam',
  'Dubai',
  'Maldives',
  'Singapore',
  'Malaysia',
  'Bhutan',
  'Kazakhstan',
  'Europe',
  'Rajasthan',
  'Ladakh',
  'SpitiValley',
  'Meghalaya',
  'Kashmir',
  'Nagaland',
  'Andaman',
  'Kerala',
  'HimachalPradesh'
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function runMigration(destination) {
  return new Promise((resolve, reject) => {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🚀 Migrating ${destination} data...`);
    console.log('='.repeat(60));

    const scriptPath = path.join(__dirname, `migrate${destination}Data.js`);
    const child = spawn('node', [scriptPath], {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit'
    });

    child.on('close', (code) => {
      if (code === 0) {
        console.log(`✅ ${destination} migration completed successfully`);
        resolve();
      } else {
        console.error(`❌ ${destination} migration failed with code ${code}`);
        reject(new Error(`Migration failed for ${destination}`));
      }
    });

    child.on('error', (error) => {
      console.error(`❌ Error migrating ${destination}:`, error);
      reject(error);
    });
  });
}

async function runProductionMigrations() {
  console.log('\n⚠️  PRODUCTION DATABASE MIGRATION ⚠️\n');
  console.log('This will migrate data to your PRODUCTION MongoDB database.');
  console.log('Make sure you have updated MONGODB_URI in your .env file to point to production.\n');
  
  const confirm = await askQuestion('Are you sure you want to continue? (yes/no): ');
  
  if (confirm.toLowerCase() !== 'yes') {
    console.log('\n❌ Migration cancelled.');
    rl.close();
    process.exit(0);
  }

  console.log('\n🚀 Starting production migrations...\n');
  
  for (const destination of destinations) {
    try {
      await runMigration(destination);
      // Small delay between migrations to avoid connection issues
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error(`Failed to migrate ${destination}, continuing with next...`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('🎉 All production migrations completed!');
  console.log('='.repeat(60));
  
  rl.close();
}

runProductionMigrations();
