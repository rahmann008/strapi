'use strict';

/**
 * public-message service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::public-message.public-message');
