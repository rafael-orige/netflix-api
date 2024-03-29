import HTTP_STATUS from "../enums/http-status.enums"
import HttpException from "./http.exception"

export default class BadRequestException extends HttpException {
  constructor(message: string) {
    super(message, HTTP_STATUS.BAD_REQUEST)
  }
}
