import Joi from "joi"

const enumToString = (enumarator: Object) => {
  return Joi.string().valid(...Object.values(enumarator))
}

export default enumToString
