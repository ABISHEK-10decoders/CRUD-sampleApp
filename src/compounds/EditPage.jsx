import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getUsers, editUsers } from "../store/reducers/ActionCreator/ReducersFunction"


const EditPage = () => {
    const [users, setUsers] = useState({
        id: '',
        name: '',
        email: '',
        phonenumber: '',

    });
    const handleValues = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
        console.log("console users", users);
    }
    const dispatch = useDispatch()
    let Navigation = useNavigate()
    const { id } = useParams()
    const Result = useSelector((state) => state.users.users)
    console.log(Result)


    useEffect(() => {
        dispatch(getUsers(id))

    }, []);
    useEffect(() => {
        if (Result) {
            setUsers({ ...Result })
        }

    }, [Result]);
    const handleSubmit = () => {
        if (!users.name || !users.email || !users.phonenumber) {
            return console.log("Please enter your fields")
        }
        else {
            dispatch(editUsers(users, id))
            Navigation("/")
        }



    }


    return (
        <div>
            <button type="button" className="btn btn-danger my-5 p-20 ml-50 " onClick={() => Navigation('/')}>
                HOME
            </button>
            <div className="container">
                <h1>Edit your Deatils of  0{id} ID</h1>

                <div className="row d-flex flex-column" >

                    <form className="col-md-6 mx-auto shadow p-5" onSubmit={handleSubmit}>
                        <div className="form-group  my-4" >
                            <input type="text"
                                className="form-control"
                                placeholder={Result.name}
                                name="name" value={users.name}
                                onChange={handleValues} />
                        </div>
                        <div className="form-group my-4 ">
                            <input type="text"
                                className="form-control"
                                placeholder={Result.email}
                                name="email" value={users.email}
                                onChange={handleValues} />
                        </div>
                        <div className="form-group  my-4">
                            <input type="text"
                                className="form-control"
                                placeholder={Result.phonenumber}
                                name="phonenumber"
                                value={users.phonenumber}
                                onChange={handleValues} />
                        </div>
                        <div className="form-group  my-4">
                            <input type="submit"
                                className="btn btn-block btn-dark 
                            " />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default EditPage
/* eslint-disable react/style-prop-object */
/* eslint-disable react/style-prop-object */
// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { getUsers } from "../store/reducers/ActionCreator/ReducersFunction";
// const EditPage = () => {
//     const [users, setUsers] = useState({
//         id: "",
//         name: "",
//         email: "",
//         phonenumber: "",
//     });
//     const { id } = useParams();
//     const [error, seterror] = useState("");
//     const dispatch = useDispatch();
//     let Navigation = useNavigate();
//     const { Results } = useSelector((state) => state.users.users);
//     //   console.log(Results);
//     // useEffect(() => {

//     // });

//     dispatch(getUsers(id));
//     const handleValues = (e) => {
//         setUsers({ ...users, [e.target.name]: e.target.value });
//         // console.log("console users", users);
//     };
//     // console.log(users)
//     // useEffect(() => {
//     //     if (Results) {
//     //         setUsers({ ...Results });
//     //     }
//     // }, [Results]);
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (
//             users.name === undefined &&
//             users.email === undefined &&
//             users.phonenumber === undefined
//         ) {
//             console.log("working condition", users.name);
//             seterror("please enter values");
//         }
//         if (!users.name || !users.email || !users.phonenumber) {
//             return console.log("Please enter your fields");
//         }
//         // else {
//         //     dispatch(editUsers({ ...data }, id));
//         //     navigate("/");
//         // }
//     };
//     return (
//         <div className="container">
//             <button className="btn btn-warning mt-5" onClick={Navigation("/")}>
//                 to back Home
//             </button>
//             <h2 className="text-center text-dark py-3 display-6"> Edit your {id}</h2>
//             <div>
//                 <div className="row">
//                     <div className="col-md-6 p-5 shadow mx-auto shadow">
//                         {error && <h2 style={{ color: "red" }}> {error}</h2>}
//                         <form onSubmit={handleSubmit}>
//                             <div className="form-group mt-3 ">
//                                 <input
//                                     type="text"
//                                     className="form-control "
//                                     placeholder="Enter Your Name"
//                                     name="name"
//                                     value={users.name}
//                                     onChange={handleValues}
//                                 />
//                             </div>
//                             <div className="form-group mt-3 ">
//                                 <input
//                                     type="text"
//                                     name="email"
//                                     placeholder="Enter Your email"
//                                     value={users.email}
//                                     onChange={handleValues}
//                                     className="form-control "
//                                 />
//                             </div>
//                             <div className="form-group mt-3 ">
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     placeholder="Enter Your Phone Number"
//                                     name="phonenumber"
//                                     value={users.phonenumber}
//                                     onChange={handleValues}
//                                 />
//                             </div>
//                             <div className="form-group mt-3  ">
//                                 <input type="submit" className="btn btn-block btn-dark " />
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default EditPage;