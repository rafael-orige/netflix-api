import HttpException from "./http.exception"
import HTTP_STATUS from "../enums/http-status.enums"

export default class NotFoundException extends HttpException {
  constructor(message: string) {
    super(message, HTTP_STATUS.NOT_FOUND)
  }
}
