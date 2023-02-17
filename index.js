const fs = require('fs')

// fs.mkdirSync('text-files')
// fs.mkdir('text-files', () => {
//     fs.writeFile('./text-files/some.txt', 'Hello', () => {})
// })

fs.unlink('./text-files/some.txt', () => {
    fs.rmdir('./text-files', () => {})
})