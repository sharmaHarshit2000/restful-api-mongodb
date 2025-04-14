const validateUser = (req, res, next) => {
    const { firstName, lastName, hobby } = req.body;
  
    // Check if required fields are present
    if (!firstName || !lastName || !hobby) {
      return res.status(400).json({
        message: "All fields (firstName, lastName, hobby) are required.",
      });
    }
  
    // Check for string type and non-empty values
    if (
      typeof firstName !== "string" ||
      typeof lastName !== "string" ||
      typeof hobby !== "string" ||
      !firstName.trim() ||
      !lastName.trim() ||
      !hobby.trim()
    ) {
      return res.status(400).json({
        message: "All fields must be non-empty strings.",
      });
    }
  
    next(); // Everything looks good, proceed to controller
  };
  
  export default validateUser;