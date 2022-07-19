"use strict";

/**
 *  featured-media-release-bottom controller
 */

const schema = require("../content-types/featured-media-release-bottom/schema.json");
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController(
  "api::featured-media-release-bottom.featured-media-release-bottom",
  schema
);
