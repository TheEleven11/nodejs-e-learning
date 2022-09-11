import lodash from 'lodash';

const cleanObject = (...correctProperties) => {
  return (req, res, next) => {
    req.body = lodash.pick(req.body, correctProperties);
    return next();
  };
};

export default cleanObject;
