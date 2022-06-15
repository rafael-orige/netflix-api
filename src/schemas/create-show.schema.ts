import Joi from "joi"

const createShow = Joi.object({
  title: Joi.string().required(),
  cover: Joi.string().required(),
  director: Joi.string().required(),
  actors: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string().required()
})

export default createShow
