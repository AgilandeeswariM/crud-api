import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../reducer/UserSlice';
import axios from 'axios'; 
import { toast } from 'react-toastify';

const Table = ({ userData }) => {
  const dispatch = useDispatch();
  const closeAfter15 = (name) => toast(`${name} is deleted`, {  type: toast.TYPE.WARNING, autoClose: 2000 });

  const handleDelete = async (userId, name) => {
    try {
      await axios.delete(`https://65615e6adcd355c08323c948.mockapi.io/users/${userId}`);
      closeAfter15(name);
      dispatch(deleteUser(userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      {Array.isArray(userData.users) && userData.users.length > 0 ? (
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellSpacing={0}
        >
          <thead>
            <tr className="text-center">
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {userData.users.map((user, index) => (
              <tr key={index}>
                <th className='text-center' scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td className="email-column">{user.email}</td>
                <td>
                  {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
                </td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                <td className="option-column">
                  <Link
                    to={`/edit-user/${user.id}`}
                    className="btn btn-sm btn-warning ml-2"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/view-user/${user.id}`}
                    className="btn btn-sm btn-info ml-2"
                  >
                    View
                  </Link>
                  <button
                    className="btn btn-sm btn-danger ml-2"
                    onClick={() => handleDelete(user.id, user.name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No user data available</p>
      )}
    </div>
  );
}

export default Table;