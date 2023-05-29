const gs = require('./services/generalService');
const cron = require('node-cron');


// execute cron task (Database feeding)
const feedingJob = cron.schedule('* * * * *', async () => {
    try {
        console.log('Ejecutando tarea cada minuto');
        await gs.databasefeed();
      } catch (err) {
        console.error('Error ejecutando la tarea de cron:', err);
      }
});

module.exports = feedingJob;