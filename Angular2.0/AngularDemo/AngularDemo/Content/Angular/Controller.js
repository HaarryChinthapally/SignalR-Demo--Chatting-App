app.controller("myCntrl", function ($scope, myService) {
    $scope.divEmployee = false;
    GetAllCustomer();
    //To Get All Records 
    function GetAllCustomer() {
        debugger;
        var getData = myService.getEmployees();
        debugger;
        getData.then(function (emp) {
            $scope.employees = emp.data;
        }, function () {
            alert('Error in getting records');
        });
    }

    $scope.editEmployee = function (employee) {
        debugger;
        var getData = myService.getEmployee(employee.id);
        getData.then(function (emp) {
            $scope.employee = emp.data;
            $scope.id    = employee.id;
            $scope.Name    = employee.Name;
            $scope.Address1 = employee.Address1;
            $scope.Address2 = employee.Address2;
            $scope.City   = employee.City;
            $scope.State = employee.State;
            $scope.Zipcode = employee.Zipcode;
            $scope.Country = employee.Country;
            $scope.Action  = "Update";
            $scope.divEmployee   = true;
        }, 
        function () {
            alert('Error in getting records');
        });
    }

    $scope.AddUpdateEmployee = function () {
        debugger;
        var Employee = {
            Name   : $scope.Name,
            Address1 : $scope.Address1,
            Address2 : $scope.Address2,
            City   : $scope.City,
            State : $scope.State,
            Zipcode : $scope.Zipcode,
            Country : $scope.Country
        };
        var getAction = $scope.Action;

        if (getAction == "Update") {
            Employee.id = $scope.id;
            var getData = myService.updateEmp(Employee);
            getData.then(function (msg) {
                GetAllCustomer();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in updating record');
            });
        } else {
            var getData = myService.AddEmp(Employee);
            getData.then(function (msg) {
                GetAllEmployee();
                alert(msg.data);
                $scope.divEmployee = false;
            }, function () {
                alert('Error in adding record');
            });
        }
    }

    $scope.AddEmployeeDiv = function () {
        debugger;
        ClearFields();
        $scope.Action = "Add";
        $scope.divEmployee = true;
    }

    $scope.deleteEmployee = function (employee) {
        var getData = myService.DeleteEmp(employee.Id);
        getData.then(function (msg) {
            GetAllEmployee();
            alert('Employee Deleted');
        }, function () {
            alert('Error in Deleting Record');
        });
    }

    function ClearFields() {
        $scope.id       = "";
        $scope.Name     = "";
        $scope.Address1 = "";
        $scope.Address2 = "";
        $scope.City     = "";
        $scope.State    = "";
        $scope.Zipcode  = "";
        $scope.Country  = "";
    }
});