import HTTP_STATUS from "../enums/http-status.enums"
import HttpException from "./http.exception"

export default class UnauthroizedException extends HttpException {
  constructor(message = "Unauthorized") {
    super(message, HTTP_STATUS.UNAUTHORIZED)
  }
}
