
import { ADD_USERS, REMOVE_USERS, FETCH_USERS, GET_USERS } from "../insital/index"
const insital = { users: [] }

const Reducers = (state = insital, action) => {
    switch (action.type) {
        case FETCH_USERS:
            // return { ...state, users: [...state.users, action.payload] }
            return {
                ...state,
                users: action.payload,
            }

        case ADD_USERS:
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        case REMOVE_USERS:
            return {
                ...state,
                users: state.users.filter((ste) => ste.id !== action.payload),

            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }


        default: return state

    }
}
export default Reducers;