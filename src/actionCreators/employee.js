import instance from "./axios-instance";
import {
  GET_ALL_EMPLOYEES,
  SET_SESSION_EXPIRE,
  GET_ONE_EMPLOYEE,
} from "../actionTypes";
import { notification } from "antd";
// import { Parser } from 'json2csv';

// const getAllEmployeesAction = (data) => {
//   console.log("data>",data);
//   return {type: GET_ALL_EMPLOYEES, payload: data }
// }

// export function getAllEmployees() {
//   return (dispatch) => {
//     instance
//       .get(`/employee`)
//       .then((axiosResponse) => {
//         // console.log("axiosResponse >",axiosResponse.status);
//         const response = axiosResponse.data;
//         // console.log(response);

//         if (response.success) {
//           // console.log("innn3333",response.data);
//           dispatch({ type: GET_ALL_EMPLOYEES, payload: response.data });
//           // console.log("GET_ALL_EMPLOYEES",response.data);

//         }
//       })
//       .catch((error) => {
//         if (error.response.status === 401) {
//           dispatch({ type: SET_SESSION_EXPIRE });
//         }
//       });
//   };
// }

export function createEmployee(employee) {
  return (dispatch) => {
    instance.post(`/employee/create`, { employee }).then((axiosResponse) => {
      const response = axiosResponse.data;
      // console.log("create response:", axiosResponse);
      // console.log("res  >",response);
      // console.log(" .....>",employee);
      if (response.success) {
        // console.log("innn3333",response.message);
        notification.success({
          message: `Notification `,
          description: response.message,
          placement: "bottomRight",
        });
        // dispatch({ type: SET_NEW_EMPLOYEE, payload: response.message });
      } else {
        notification.error({
          message: `Notification `,
          description: response.message,
          placement: "bottomRight",
        });
      }
    });
  };
}
export function deleteEmployee(employeeId) {
  return (dispatch) => {
    instance
      .delete(`/employee/delete/${employeeId}`, { employeeId })

      .then((axiosResponse) => {
        const response = axiosResponse.data;
        if (response.success) {
          notification.success({
            message: `Notification `,
            description: response.message,
            placement: "bottomRight",
          });
        } else {
          notification.error({
            message: `Notification `,
            description: response.message,
            placement: "bottomRight",
          });
        }
      });
  };
}

export function updateEmployee(employeeId, employee) {
  return (dispatch) => {
    // console.log(employee);
    // console.log(employeeId);
    instance
      .put(`/employee/update/${employeeId}`, { employeeId, employee })

      .then((axiosResponse) => {
        const response = axiosResponse.data;
        if (response.success) {
          notification.success({
            message: `Notification `,
            description: response.message,
            placement: "bottomRight",
          });
        } else {
          notification.error({
            message: `Notification `,
            description: response.message,
            placement: "bottomRight",
          });
        }
      });
  };
}
export function findOneEmployee(employeeId) {
  return (dispatch) => {
    instance
      .get(`/employee/find-one/${employeeId}`, { employeeId })
      .then((axiosResponse) => {
        // console.log("axiosResponse >",axiosResponse.status);
        const response = axiosResponse.data;
        // console.log(response);

        if (response.success) {
          // console.log("innn3333",response.data.position);
          dispatch({ type: GET_ONE_EMPLOYEE, payload: response.data });
          // console.log("......>",response.data );
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          dispatch({ type: SET_SESSION_EXPIRE });
        }
      });
  };
}

export function getAllEmployees(
  currentPage,
  itemsPerPage,
  name,
  department,
  sortDirection,
  sortBy
) {
  return (dispatch) => {
    // console.log(
    //   "axios...>",
    //   currentPage,
    //   itemsPerPage,
    //   name,
    //   department,
    //   sortDirection,
    //   sortBy
    // );
    instance
      .get(`/employee/find-all-employee`, {
        params: {
          currentPage,
          itemsPerPage,
          name,
          department,
          sortDirection,
          sortBy,
        },
      })

      .then((axiosResponse) => {
        // console.log("axiosResponse >",axiosResponse.status);
        const response = axiosResponse.data;
        // console.log("response",response.pagination.itemCount);
        if (response.success) {
          // console.log("innn3333",response.data);
          dispatch({ type: GET_ALL_EMPLOYEES, payload: response });
          // console.log("payload",response);

          // console.log("GET_ALL_EMPLOYEES",response.data);
        }
      });
  };
}

export function generateCSV() {
  return () => {
    // Fetch the CSV data from the server
    instance.get(`/employee/downloadCSV`).then((axiosResponse) => {
      const response = axiosResponse.data;
      // console.log(response);

      if (response.success) {
        // Check if the response data is an array
        if (Array.isArray(response.data)) {
          // Convert the array of objects to a CSV string
          const csvString = response.data.map(obj => {
            return Object.values(obj).join(',');
          }).join('\n');

          // Convert the CSV string to a Blob object
          const blob = new Blob([csvString], { type: 'text/csv' });

          // Generate a URL for the Blob object
          const url = window.URL.createObjectURL(blob);

          // Create a link and trigger the download
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "employees.csv");
          document.body.appendChild(link);
          link.click();
          
          // Clean up: Revoke the URL object to release memory
          window.URL.revokeObjectURL(url);
          
          // Remove the link from the DOM
          link.remove();
        } else {
          console.error('CSV data is not an array:', response.data);
        }
      } else {
        console.error('Failed to fetch CSV data:', response.error);
      }
    }).catch((error) => {
      console.error('Error fetching CSV data:', error);
    });
  };
}




