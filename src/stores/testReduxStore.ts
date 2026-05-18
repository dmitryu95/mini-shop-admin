interface IUser {
  id: number;
  name: string;
  email: string;
}

const initialState = {
  users: [] as IUser[],
  isLoading: false,
  error: null as string | null,
}

export const usersReducer = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case 'users/loading':
      return {
        ...state,
        isLoading: true,
        error: null,
      }

    case 'users/success':
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      }

    case 'users/error':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    default:
      return state
  }
}