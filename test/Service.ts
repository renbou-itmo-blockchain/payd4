describe("Service", function () {
  describe("Register", function () {
    it("Should add the service to the storage", function () {});

    it("Fails if such service already exists", function () {});
  });

  describe("Features", function () {
    it("Should add features to the storage", function () {});

    it("Should modify the price if a feature already exists", function () {});

    it("Fails if the service doesn't exist", function () {});
  });

  describe("Payments", function () {
    it("Should emit an event when a user pays", function () {});

    it("Fails if the service doesn't exist", function () {});

    it("Fails if the feature doesn't exist", function () {});

    it("Fails if the payment doesn't match the price", function () {});
  });

  describe("Cashout", function () {
    it("Should transfer funds on cashout", function () {});

    it("Fails if the service doesn't exist", function () {});
  });
});
