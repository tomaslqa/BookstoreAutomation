const { faker } = require('@faker-js/faker');

/**
 * Generates a random email address.
 *
 * @returns {string} A randomly generated email address.
 */
function generateRandomEmail() {
  return faker.internet.email();
}

/**
 * Generates a random full name.
 *
 * @returns {string} A randomly generated full name.
 */
function generateRandomName() {
  return faker.person.fullName();
}

/**
 * Generates a random password.
 *
 * @returns {string} A randomly generated password.
 */
function generateRandomPassword() {
    return faker.internet.password();
}

module.exports = {
  generateRandomEmail,
  generateRandomName,
  generateRandomPassword
};