import * as fs from 'fs';
import * as parse from 'csv-parse';

var saleTax;
var rowDate;
var rowAmount;

fs.createReadStream('./data/order.csv')
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {

        if (csvrow[0] != 'number') {
            rowDate = csvrow[1];
            rowAmount = csvrow[2];
            saleTax = csvrow[2] * .125;

            console.log('Total order for ' + rowDate + ' is BZD ' + rowAmount + ', sales tax BZD $' + parseFloat(saleTax).toFixed(2));
        }
    });
