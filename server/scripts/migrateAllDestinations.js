import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const destinations = [
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

async function migrateAll() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    for (const destination of destinations) {
      console.log(`\n${'='.repeat(60)}`);
      console.log(`🚀 Migrating ${destination} data...`);
      console.log('='.repeat(60));
      
      try {
        const migrationModule = await import(`./migrate${destination}Data.js`);
        // The migration scripts export their main function as default
        if (migrationModule.default && typeof migrationModule.default === 'function') {
          await migrationModule.default();
        }
        console.log(`✅ ${destination} migration completed successfully`);
      } catch (error) {
        console.error(`❌ Error migrating ${destination}:`, error.message);
      }
    }

    console.log('\n' + '='.repeat(60));
    console.log('🎉 All migrations completed!');
    console.log('='.repeat(60));
    
  } catch (error) {
    console.error('❌ Error in migration process:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\n✅ Database connection closed');
  }
}

migrateAll();
