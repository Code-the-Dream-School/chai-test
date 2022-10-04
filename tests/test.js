const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

chai.use(chaiHttp);
chai.should();

describe("People", () => {
  describe("post /api/v1/people", () => {
    it("should not create a people entry without a name", (done) => {
      chai
        .request(app)
        .post("/api/v1/people")
        .send({ age: 10 })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.eql({ error: "Please enter a name." });
          done();
        });
    });
    it("should create a people entry with valid input", (done) => {
      done();
    });
  });
  describe("get /api/v1/people", () => {
    it("should return an array of person entries of length 1", (done) => {
      done();
    });
  });
  describe("get /apl/v1/people/:id", () => {
    it("should return the entry corresponding to person[0]", (done) => {
      done();
    });
    it("should return an error if the index is >= the length of the array", (done) => {
      done();
    });
  });
});
