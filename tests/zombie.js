const chai = require("chai");
require("../app");
const assert = chai.assert;

const Browser = require("zombie");

Browser.site = "http://localhost:3000";

describe("Functional Tests with Zombie.js", function () {
  this.timeout(5000);
  const browser = new Browser();
  before(function (done) {
    return browser.visit("/", done);
  });

  describe("Headless browser", function () {
    it('should have a working "site" property', function () {
      assert.isNotNull(browser.site);
    });
  });

  describe("people form", function () {
    it("should create a person record given name and age", function (done) {
      browser.fill("name", "Fred").then(() => {
        browser.fill("age", 10).then(() => {
          browser.pressButton("#addPerson", () => {
            setTimeout(function () {
              assert.include(
                browser.text("#result"),
                "A person record was added"
              );
              done();
            }, 100);
          });
        });
      });
    });
    it("should not create a person record without an age", function (done) {
      done();
    });
    it("should return the entries just created", function (done) {
      done();
    });
    it("should return an entry of index 1", function (done) {
      done();
    });
  });
});
