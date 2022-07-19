module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bdfb314661a1fdacdea7eb97ee1e97fb'),
  },
});
