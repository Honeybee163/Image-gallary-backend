import Joi from "joi";

export const BlogPostValidation = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});
