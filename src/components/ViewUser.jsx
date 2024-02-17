import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
import { setLoading, setUsers } from '../reducer/UserSlice'
import { SyncLoader } from "react-spinners";

const ViewUser = () => {
    const params = useParams()
    const { users,loading } = useSelector((state) => state.app)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const getData = async () => {
            try {
                dispatch(setLoading())
                const employee = await axios.get(`https://65615e6adcd355c08323c948.mockapi.io/users/${params.id}`)
                dispatch(setUsers(employee.data))
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [])
    return (
        <div className='container min-vh-100 p-0'>
            <div className="row justify-content-center align-content-center mt-5">
                <div className="  col-sm-12">
                    <div className="card text-center shadow">
                        <div className="card-header h3">
                            User Details
                        </div>
                        <div className="card-body d-flex justify-content-center">
                        {loading ? (
              
              <SyncLoader color="#36d7b7" className="text-center" />
            ) :( 
                            <div className="table-responsive mx-lg-5">
                                <table className="table table-bordered table-striped">
                                    <tbody>
                                        <tr>
                                            <td className="text-end">Name</td>
                                            <td className="">{users.name}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-end">Email</td>
                                            <td>{users.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-end">Company</td>
                                            <td>{users.company?.name}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-end">Phone</td>
                                            <td>{users.phone}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-end">Website</td>
                                            <td>{users.website}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-end">Address</td>
                                            <td>
                                                {`${users.address?.street}, ${users.address?.suite}, ${users.address?.city}, ${users.address?.zipcode}`}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>) }

                        </div>
                        <div className="card-footer text-body-secondary">
                            <div className=''>
                                <Link to={'/'} className='btn btn-primary px-lg-5'>Back to Table</Link>
                            </div>
                        </div>
                    </div></div></div>
        </div>
    )
}

export default ViewUser