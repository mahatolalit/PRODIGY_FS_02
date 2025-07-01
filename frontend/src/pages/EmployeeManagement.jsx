import React, { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import AddEmployee from "../components/AddEmployee";
import { GetAllEmployees } from "../api/api";
import { ToastContainer } from "react-toastify";
import SplitText from "../../Reactbits/Text/SplitText/SplitText";

const EmployeeManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [employeeObj, setEmployeeObj] = useState(null);
  const [employeesData, setEmployeesData] = useState({
    employees: [],
    pagination: {
      currentPage: 1,
      pageSize: 5,
      totalEmployees: 0,
      totalPages: 0,
    },
  });

  const fetchEmployees = async (search = "", page = 1, limit = 5) => {
    console.log("Called fetchEmployees");
    try {
      const data = await GetAllEmployees(search, page, limit);
      console.log(data);
      setEmployeesData(data);
    } catch (err) {
      alert("Error", err);
    }
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSearch = (e) => {
    fetchEmployees(e.target.value);
  };

  const handleUpdateEmployee = async (emp) => {
    setEmployeeObj(emp);
    setShowModal(true);
  };
  return (
    <div className="flex flex-col justify-center items-center w-screen p-3 overflow-hidden relative">
      <div>
        <SplitText
          text="Employee Management App"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
      <div className="w-100 d-flex justify-content-center">
        <div className="w-80 border bg-light p-3" style={{ width: "80%" }}>
          <div className="d-flex justify-content-between mb-3">
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Add
            </button>
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search Employees..."
              className="form-control w-50"
            />
          </div>
          <EmployeeTable
            employees={employeesData.employees}
            pagination={employeesData.pagination}
            fetchEmployees={fetchEmployees}
            handleUpdateEmployee={handleUpdateEmployee}
          />

          <AddEmployee
            fetchEmployees={fetchEmployees}
            showModal={showModal}
            setShowModal={setShowModal}
            employeeObj={employeeObj}
          />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default EmployeeManagement;
