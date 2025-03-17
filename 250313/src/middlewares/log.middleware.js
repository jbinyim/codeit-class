const logMiddleware = (req, res, next) => {
  console.log(`[${Date.now()}] ${req.ip} - ${req.method}:${req.url}`);
  next();
};

module.exports = logMiddleware;
