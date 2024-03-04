import { Dispatch } from 'redux'
import { isAxiosError } from 'axios'
import { setErrorAC } from '../../app/app-reducer.ts'

export type ErrorType = {
  message: string
}
type ServerError = {
  errorMessages: Array<{field: string; message: string}>
}
export const handleError = (dispatch: Dispatch, e: ErrorType) => {
  let ourMessageError: string
  if (isAxiosError<ServerError>(e)) {
    ourMessageError = e.response ? e.response.data.errorMessages[0].message : e.message
  } else {
    ourMessageError = (e as Error).message
  }
  dispatch(setErrorAC(ourMessageError))
}