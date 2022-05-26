const exportPeople = require('./people');
//console.log(exportPeople); 
//manually imports the string 'this should manually export the file'
console.log(exportPeople)
console.log(exportPeople.people, exportPeople.ages);

const os = require('os');
console.log(os);
