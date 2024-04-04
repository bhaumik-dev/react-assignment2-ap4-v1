import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import EmployeeDirectory from "./components/EmployeeDirectory";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeTable from "./components/EmployeeTable";
import { Route, Routes } from "react-router-dom";
import UpdateEmployee from "./components/UpdateEmployee";
import EmployeeDetails from "./components/EmployeeDetails";
import Navbar from "./components/Navbar";

function App() {
  const [employeeData, setEmployeeData] = useState([]);

  // Defining updateEmployeeData function to update employee data
  const updateEmployeeData = (newEmployee) => {
    setEmployeeData([...employeeData, newEmployee]);
  };

  // Defining deleteEmployee function to delete an employee
  const deleteEmployee = (id) => {
    setEmployeeData(employeeData.filter((employee) => employee.id !== id));
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:4000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
              query {
                employees {
                  id
                  firstName
                  lastName
                  age
                  dateOfJoining
                  title
                  department
                  employeeType
                  currentStatus
                }
              }
            `,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          setEmployeeData(data.data.employees);
        } else {
          console.error("Failed to fetch employee data");
        }
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<EmployeeDirectory employeeData={employeeData} />}
          />
          <Route
            path="/create"
            element={<EmployeeCreate updateEmployeeData={updateEmployeeData} />}
          />
          <Route
            path="/table"
            element={<EmployeeTable employeeData={employeeData} />}
          />
          <Route
            path="/employee/:id/details"
            element={
              <EmployeeDetails
                employeeData={employeeData}
                onDeleteEmployee={deleteEmployee}
              />
            }
          />
          <Route
            path="/employee/:id/update"
            element={<UpdateEmployee employeeData={employeeData.id} />}
          />
          <Route
            path="/fullTime"
            element={
              <EmployeeTable
                employeeData={employeeData.filter(
                  (employee) => employee.employeeType === "FullTime"
                )}
              />
            }
          />
          <Route
            path="/partTime"
            element={
              <EmployeeTable
                employeeData={employeeData.filter(
                  (employee) => employee.employeeType === "PartTime"
                )}
              />
            }
          />
          <Route
            path="/seasonal"
            element={
              <EmployeeTable
                employeeData={employeeData.filter(
                  (employee) => employee.employeeType === "Seasonal"
                )}
              />
            }
          />
          <Route
            path="/contract"
            element={
              <EmployeeTable
                employeeData={employeeData.filter(
                  (employee) => employee.employeeType === "Contract"
                )}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
