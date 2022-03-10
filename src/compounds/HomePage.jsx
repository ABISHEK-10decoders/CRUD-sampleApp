import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch, useParams } from 'react-redux'
import { removeusrs, fetchUsers } from "../store/reducers/ActionCreator/ReducersFunction"

const HomePage = () => {
    const Results = useSelector(state => state.users.users);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, []);


    // const LocalUsers = localStorage.getItem("users")

    // useEffect(() => {
    //     dispatch(fetchUsers(LocalUsers))



    // }, []);



    // dispatch(fetchUsers(Results))
    const deleteContact = (id) => {
        console.log(id)
        dispatch(removeusrs(id))

    }

    console.log(Results, "-=-=-=-=-")
    return (
        <div className='container'>
            <div className='row d-flex flex-column align-middle'>
                <h4 className='mt-5 fw-lighter'> Here !! Update your Deatils</h4>
                <Link to="/add" className='btn btn-success my-2 ml-auto w-50 mx-auto shadow'> Add Deatils</Link>
                <div className='col-10  mx-auto my-4 border-end  border'>
                    <table className='table table-hover "'>
                        <thead className='table-header bg-secondary p-2 text-dark bg-opacity-10 text-white'>
                            <tr className='col bg-info' >
                                <th scope="" className="fw-light "> I D</th>
                                <th scope="" className="fw-light "> N A M E</th>
                                <th scope="" className="fw-light ">E - M A I L</th>
                                <th scope="" className="fw-light ">P H O N E  N U M B E R</th>
                                <th scope="" className="fw-light "> E D I T   - O R -  D E L E T E</th>
                            </tr>


                        </thead>
                        <tbody>
                            {
                                Results && Results.length > 0 && Results.map((Result, id) => (
                                    <tr key={id}>
                                        <td className="fw-light">{Result.id}</td>
                                        <td className="fw-light">{Result.name}</td>
                                        <td className="fw-light">{Result.email}</td>
                                        <td className="fw-light">{Result.phonenumber}</td>
                                        <td className="fw-light"> <Link
                                            to={`/edit/${Result.id}`}

                                        ><button type="button" className="btn btn-info mx-4">  Edit</button>

                                        </Link>
                                            <button
                                                type="button"
                                                onClick={() => deleteContact(Result.id)}
                                                className="btn  btn-danger "
                                            >
                                                Delete
                                            </button></td>
                                    </tr>
                                ))
                            }
                        </tbody>



                    </table>

                </div>


            </div>

        </div>
    )
}

export default HomePage