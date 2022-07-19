'use strict';

/**
 * public-message router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::public-message.public-message');
