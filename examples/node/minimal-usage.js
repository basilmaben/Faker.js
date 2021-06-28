#!/usr/bin/env node

var faker = require('../../index');
const mobile = require('../../lib/locales/en/mobile');
faker.locale = "en";

//console.log(faker.lorem.sentences())

console.log(faker.mobile.OS());
console.log(faker.mobile.screen());
console.log(faker.mobile.manufacturer());
console.log(faker.mobile.sim());
console.log(faker.mobile.color());
return;
console.log(faker.address)
console.log(faker.internet.email())
console.log(faker.date.recent())
console.log(faker.helpers.contextualCard());

faker.locale = "uk";

console.log(faker.helpers.contextualCard());