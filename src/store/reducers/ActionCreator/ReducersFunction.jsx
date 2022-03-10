import axios from "axios"
import { ADD_USERS, REMOVE_USERS, EDIT_USERS, FETCH_USERS, GET_USERS } from "../insital/index"
export const addusrs = (users) => (dispatch) => {
    axios
        .post(`https://6227174a2dfa52401813ed75.mockapi.io/users`, users)
        .then((data) => {
            console.log("DISPATH", data)
            dispatch({ type: ADD_USERS, payload: data.data });
        })
        .catch((error) => {
            console.log(error);
        });



}
export const fetchUsers = () => (dispatch) => {
    axios.get("https://6227174a2dfa52401813ed75.mockapi.io/users")
        .then((user) => {
            dispatch({ type: FETCH_USERS, payload: user.data })

        })
        .catch((error) => {
            console.log(error)
        })
}
export const removeusrs = (id) => (dispatch) => {
    console.log(id)
    axios
        .delete(`https://6227174a2dfa52401813ed75.mockapi.io/users/${id}`)
        .then((data) => {
            // console.log("ddddd", data  );
            dispatch({ type: REMOVE_USERS, payload: id });
        })
        .catch((error) => {
            console.log(error);
        });
    // dispatch({ type: REMOVE_USERS, payload: id })
}
// export const editusrs = (users) => (dispatch) => {


// }
export const getUsers = (id) => (dispatch) => {
    axios.get(`https://6227174a2dfa52401813ed75.mockapi.io/users/${id}`)
        .then((data) => {
            dispatch({ type: GET_USERS, payload: data.data })
        })
}
export const editUsers = (users, id) => (dispatch) => {
    axios.put(`https://6227174a2dfa52401813ed75.mockapi.io/users/${id}`, users)
        .then(() => {
            dispatch(fetchUsers())
        })
}

