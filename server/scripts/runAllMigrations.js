import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

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

async function runAllMigrations() {
  console.log('\n🚀 Starting all migrations...\n');
  
  for (const destination of destinations) {
    try {
      await runMigration(destination);
      // Small delay between migrations to avoid connection issues
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Failed to migrate ${destination}, continuing with next...`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('🎉 All migrations completed!');
  console.log('='.repeat(60));
}

runAllMigrations();
