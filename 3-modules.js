//Modules - Encapsulated Code (only share minimutm)file containing related code
// CommonJS, every file is module (by default)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-gernade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);