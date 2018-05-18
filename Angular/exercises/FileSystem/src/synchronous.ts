import * as fs from 'fs';

// trycatch because of no call back because using readfilesync
try {
    var data = fs.readFileSync('./data/file.txt','utf8');
    console.log(data);
} catch (error) {
    console.log(error);
}
