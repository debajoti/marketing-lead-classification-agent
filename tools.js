import fs from 'node:fs'

function logFiles(data) {
    try {
        const log = JSON.stringify(data) + '\n';
        fs.appendFileSync('log.txt', log, 'utf-8');
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
      "this takes classification data object and stores it in the log.txt",
  },
}