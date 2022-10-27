// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.9;

contract Service {
  constructor() {}

  event UserPayed(address user, string service, string feature);

  // register registers a new service using a unique identifier.
  function register(string memory service) public {}

  // setFeaturePrice adds a payed feature to a service.
  // Needs to be called from the same address as the service registration.
  function setFeaturePrice(
    string memory service,
    string memory feature,
    uint price
  ) public {}

  // payment for service feature by user
  function pay(string memory service, string memory feature) public payable {}

  // cashout cashes out all of the payments received for various service features
  // to the specified address.
  // Needs to be called from the same address as the service registration.
  function cashout(string memory service, address to) public {}
}
