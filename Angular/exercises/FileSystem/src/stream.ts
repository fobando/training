import * as fs from 'fs';

var data = '';
// readStream is a child of EventEmitter
var readStream = fs.createReadStream('./data/file.txt', 'utf8');

readStream.on('data',
(chunk) => {data += chunk;})
          .on('end', () => {console.log(data);})
          .on('error', (err) => {console.log(err);})
