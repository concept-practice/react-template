describe("App", () => {
  it("At least renders!", () => {
    cy.visit("localhost:3000");

    cy.contains("Increase").click();

    cy.contains("1");
  });
});
