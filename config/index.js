process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  env: process.env.NODE_ENV,
  __DEV__: process.env.NODE_ENV === 'development',
  __PROD__: process.env.NODE_ENV === 'production',
};

module.exports = config;
