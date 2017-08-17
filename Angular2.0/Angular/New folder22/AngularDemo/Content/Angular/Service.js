app.service("myService", function ($http,$q) {
    //get All Eployee
    this.getEmployees = function () {
        debugger;
        //var response1 = $http({
        //    method: "get",
        //    url: "Home/getAll"
        //});
        //return response1;
        return $http.get("Home/getAll");
        debugger;
    };

    // get Employee By Id
    this.getEmployee = function (employeeID) {
        var response = $http({
            method: "post",
            url: "Home/getCustomerByNo",
            params: {
                id: JSON.stringify(employeeID)
            }
        });
        return response;
    }

    // Update Employee
    this.updateEmp = function (employee) {
        var response = $http({
            method: "post",
            url: "Home/UpdateCustomer",
            data: JSON.stringify(employee),
            dataType: "json"
        });
        return response;
    }

    // Add Employee
    this.AddEmp = function (employee) {
        debugger;
        var response = $http({
            method: "post",
            url: "Home/AddEmployee",
            data: JSON.stringify(employee),
            dataType: "json"
        });
        return response;
    }

    //Delete Employee
    this.DeleteEmp = function (employeeID) {
        debugger;
        var response = $http({
            method: "post",
            url: "Home/DeleteEmployee",
            params: {
                id: JSON.stringify(employeeID)
            }
        });
        return response;
    }

});