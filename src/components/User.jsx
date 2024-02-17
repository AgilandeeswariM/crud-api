import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, setLoading, setError } from "../reducer/UserSlice";
import { Link } from "react-router-dom";
import Table from "./Table";

import { SyncLoader } from "react-spinners";

const User = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.app);

  const getData = async () => {
    try {
      dispatch(setLoading());
      const userDataResponse = await axios.get(
        "https://65615e6adcd355c08323c948.mockapi.io/users"
      );
      dispatch(setUsers(userDataResponse.data));
    } catch (error) {
      console.error(error);
      dispatch(setError("Error fetching user data")); 
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User List</h1>
        <Link
          to="/create-user"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50" /> Create User
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
          <div className="card-body">
            {userData.loading ? (
              
              <SyncLoader color="#36d7b7" className="text-center" />
            ) : (
             
              <div className="table-responsive">
                <Table userData={userData} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;