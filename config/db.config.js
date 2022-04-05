module.exports = {
  HOST: "http://fucitechlegal.com.s3-website-us-east-1.amazonaws.com",
  USER: "root",
  PASSWORD: "Imaginal123!",
  DB: 'ProdDashboardData',
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
