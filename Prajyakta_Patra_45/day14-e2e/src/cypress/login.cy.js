describe("Login E2E Test", () => {
  it("shows success message after clicking login", () => {
    cy.visit("http://localhost:5173/");

    cy.contains("Login").click();

    cy.contains("Login Successful").should("be.visible");
  });
});
