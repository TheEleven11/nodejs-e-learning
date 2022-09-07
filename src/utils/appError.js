class AppError extends Error {
  constructor(message, statusCode, validationError = null) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    if (validationError) this.data = { validationError: validationError };
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
