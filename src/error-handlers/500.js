'use strict';

module.exports = (err, req, res, next) => {
  const errors = err.message ? err.message : err;

  const errObj = {
    status: 500,
    message: errors
  }

  res.status(500).json(errObj);
}