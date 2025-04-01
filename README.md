# UI Automation Framework – Bookstore Automation






This UI Automation framework repository has some basic functional tests for user registration, login and book listings. 
It covers sucessfull registration, unsuccessfull registration, sucessfull login, unsuccessfull login, book search with valid details and book search with invalid details.

## Tech

This framework was built with the following:

- Javascript
- node.js 
- Playwright
- CI  - github
- IDE - Visual Studio Code



## Framework Design
The pages package contains page classes
- HomPage - books list objects and methods
- RegisterPage - registration page objects and methods
- LoginPage - login page objects and methods
- ShoppingCartPage - cart page objects

## Test Design

- Each test in the tests package is independent and complete.
- The tests are designed with the use of playwright assertions and screenshots are captured for failed tests.
- Test data is configured in separate JSON files.


 ## Installation
-	Clone the repository into a folder
  
```sh
git clone https://github.com/tomaslqa/BookstoreAutomation.git
```
- Go to Project root directory and install Dependencies (select Javasript):
```sh
npm install
```
```sh
npx playwright install
```
```sh
npm install @faker-js/faker
```

## Test Execution


•   Run all tests with one of these commands:

 
**npx playwright test** : Runs the end-to-end tests in headless mode

**npx playwright test --headed** : Runs the end-to-end tests in browser

____________________________________




•   Run one of the test files separately with one of these command:



**npx playwright test createAccount.spec** : Runs the tests in a specific file

**npx playwright test login.spec.js** : Runs the tests in a specific file

**npx playwright test bookListings.spec.js** : Runs the tests in a specific file



## Open HTML report
```sh
npx playwright show-report
```

## Location of report and screenshots
HTML report:
- Go to Project root directory: ./playwright-report/index.html

Screenshots:
- Go to Project root directory: ./playwright-report/data
