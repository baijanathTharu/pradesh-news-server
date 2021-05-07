const errorHandler = (fn) => {
  return function (req, res, next) {
    fn(req, res, next).catch((error) => {
      if (typeof error === 'string') {
        res.status(401).json({ error: error });
        return;
      }
      next(error);
    });
  };
};

module.exports = errorHandler;
