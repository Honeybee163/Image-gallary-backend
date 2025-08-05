import joi from "joi";

//register validation
export const UserValidation = joi.object({
  username: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  adminCode: joi.string(),
});


//login schema
export const LoginValidation = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

