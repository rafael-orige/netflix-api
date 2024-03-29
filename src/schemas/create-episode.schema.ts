import Joi from "joi"

const CreateEpisodeSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  cover: Joi.number().required(),
  showId: Joi.number().required()
})

export default CreateEpisodeSchema
