import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({}, {strict: false});
const Log = mongoose.model('Log', LogSchema);

async function logFiles(data) {
    try {
        const log = new Log({
            ...data,
            timestamp: new Date()
        })
        await log.save();
        return "Your response has been stored!"
    } catch (error) {
        console.error(error.message)
        return `Failed to write file.`
    }
}

export const available_tools = {
  logFiles: {
    fn: logFiles,
    description:
      "This takes classification data object and stores it in the log.txt",
  },
}