const errorHandler = (err, req, res, next) => {
  // Log the Error message
  console.error("Error caught by middleware:", err.message);
  res.status(500).json({
    message: "Something went wrong!",
    // Shows the message on the ThunderClient
    error: err.message,
  });
};

export default errorHandler;
