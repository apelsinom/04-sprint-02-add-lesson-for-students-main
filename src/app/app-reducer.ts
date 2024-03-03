export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET-STATUS':
      return {...state, status: action.status}
    default:
      return state
  }
}
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'SET-STATUS', status} as const)

type ActionsType = ReturnType<typeof setAppStatusAC>