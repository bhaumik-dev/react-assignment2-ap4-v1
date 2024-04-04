const Employee = require("../models/Employee");

const resolvers = {
  Query: {
    // Resolver to fetch all employees
    employees: async () => {
      return await Employee.find();
    },
    // Resolver to fetch a specific employee by ID. Might be useful in Assignment 2 for update
    employee: async (_, { id }) => {
      return await Employee.findById(id);
    },
  },
  Mutation: {
    // Resolver to create a new employee
    createEmployee: async (_, args) => {
      const employee = new Employee(args);
      await employee.save();
      return employee;
    },
    // Resolvers for update and delete -> for assignment 2

    updateEmployee: async (_, { id, input }) => {
      try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, input, {
          new: true,
        });
        return updatedEmployee;
      } catch (error) {
        console.error("Error updating employee:", error);
        throw new Error("Failed to update employee");
      }
    },

    deleteEmployee: async (_, { id }) => {
      const deletedEmployee = await Employee.findByIdAndDelete(id);
      return deletedEmployee;
    },
  },
};

module.exports = resolvers;
