// EmployeeDirectory.jsx
import React, { useState, useEffect } from "react";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeTable from "./EmployeeTable";
import { useParams } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";
import "../styles/styles.css";

const EmployeeDirectory = ({ employeeData }) => {
  const { id } = useParams(); // Extracting the employeeId from the path
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);

  useEffect(() => {
    // Setting filtered employees to all employees initially
    if (employeeData) {
      setFilteredEmployees(employeeData);
    }
  }, [employeeData]); // Re-running this effect whenever employeeData changes

  useEffect(() => {
    // Checking if id exists in the route params to know whether to show EmployeeDetails
    setShowEmployeeDetails(!!id);
  }, [id]);

  return (
    <div>
      <h1>Employee Directory</h1>
      <EmployeeSearch />
      {filteredEmployees && filteredEmployees.length > 0 ? (
        <>
          <EmployeeTable employeeData={filteredEmployees} />
          {showEmployeeDetails && <EmployeeDetails />}
        </>
      ) : (
        <p>No employee data available</p>
      )}
    </div>
  );
};

export default EmployeeDirectory;
