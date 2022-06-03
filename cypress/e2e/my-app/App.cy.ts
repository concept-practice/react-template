describe("App", () => {
  it("At least renders!", () => {
    cy.visit("/");

    cy.contains("Increase").click();

    cy.contains("1");
  });
});
