'use strict';

/**
 *  featured-content-hub controller
 */
const schema = require("../content-types/featured-content-hub/schema.json");
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController(
  "api::featured-content-hub.featured-content-hub",
  schema
);
