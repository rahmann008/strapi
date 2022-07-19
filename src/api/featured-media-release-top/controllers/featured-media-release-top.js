"use strict";

/**
 *  featured-media-release-top controller
 */

const schema = require("../content-types/featured-media-release-top/schema.json");
const createPopulatedController = require("../../../helpers/populate");

module.exports = createPopulatedController(
  "api::featured-media-release-top.featured-media-release-top",
  schema
);
