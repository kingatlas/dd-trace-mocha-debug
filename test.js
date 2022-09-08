describe("foo", () => {
    before(function () {
        this.skip();
    })
    it("should be skipped", () => {
        console.log("done")
    });
});
describe("another", () => {
    it("should always run", () => {
        console.log("done")
    });
})