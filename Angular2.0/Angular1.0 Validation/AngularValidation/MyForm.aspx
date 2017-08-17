<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MyForm.aspx.cs" Inherits="AngularValidation.MyForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Angular validation</title>
    <link href="Content/bootstrap.css" rel="stylesheet" />
    <script src="Scripts/angular.js"></script>
    <script src="Scripts/jquery-1.9.1.js"></script>
    <script src="Scripts/bootstrap.js"></script>
    <%--<script type="text/javascript">
        var myApp = angular.module("myApp", []);
        myApp.controller("LoginCtrl", login);
        function login($scope) {
            $scope.username = "hari";
            $scope.password = "12345678";
            $scope.$watch("username", function () {
                if($scope.username.length < 4)
                {
                    $scope.mycolor = "red";
                    $scope.lbluser = "Username Should not less than 4 Char's";
                }
                else if ($scope.username.length > 15)
                {
                    $scope.mycolor = "yellow";
                    $scope.lbluser = "Username Should not greater than 15 Char's";
                }
                else
                {
                    $scope.mycolor = "grey";
                    $scope.lbluser = "";
                }
            });
            $scope.$watch("password", function () {
                if ($scope.password.length < 8) {
                    $scope.mypcolor = "red";
                    $scope.lblpass = "Password Should not less than 8 Char's";
                }
                else if ($scope.password.length > 8 && $scope.password.length < 15)
                {
                    debugger;
                    $scope.handlePatternPassword=(function(){
                        var regex = /^[A-Za-z0-9@#$]{8,20}$/;
                        return regex.test($scope.password);
                    })();
                    if (!($scope.handlePatternPassword))
                    {
                        $scope.lblpass1 = "Password failed to Match the Pattern /^[A-Za-z0-9@#$]$/";
                    }
                }
                else if ($scope.password.length > 15) {
                    $scope.mypcolor = "yellow";
                    $scope.lblpass = "Password Should not greater than 15 Char's";
                }
                else {
                    $scope.mypcolor = "grey";
                    $scope.lblpass = "";
                }
            });
        }

    </script>--%>

    <script type="text/javascript">

        $(document).ready(function () {
            $("#btncheck").on("click", function () {
                $('body').append('<div id="over" style="position: absolute;top:0;left:0;width: 100%;height:100%;z-index:2;opacity:0.4;filter: alpha(opacity = 50)"></div>');
            });
        });

        var myApp = angular.module("myApp", []);
        myApp.controller("LoginCtrl", login);
        function login($scope, $window) {
            $scope.username = "juju";
            $scope.password = "12345678";
            $scope.$watch("username", function () {
                $scope.handlePatternUser = (function () {
                    var regex = /^[0-9A-Za-z@]{1,12}$/;
                    return regex.test($scope.username);
                })();
                if (!($scope.handlePatternUser)) {
                    $scope.lblpass2 = "User Should Not Contain Special chars Except '@'";
                }
                else {
                    $scope.lblpass2 = "";
                }
                if ($scope.username.length < 4) {
                    $scope.mycolor = "lightblue";
                    $scope.lbluser = "Username Should not less than 4 Char's";
                }
                else if ($scope.username.length > 15) {
                    $scope.mycolor = "lightyellow";
                    $scope.lbluser = "Username Should not greater than 15 Char's";
                }
                else {
                    $scope.mycolor = "lightgrey";
                    $scope.lbluser = "";
                }
            });
            $scope.$watch("password", function () {

                $scope.handlePatternPassword = (function () {
                    var regex = /^[0-9A-Za-z]{1,15}$/;
                    return regex.test($scope.password);
                })();
                if (!($scope.handlePatternPassword)) {
                    $scope.lblpass1 = "Password failed to Match the Pattern /^[A-Za-z0-9@#$]$/";
                }
                else {
                    $scope.lblpass1 = "";
                }
                if ($scope.password.length < 8) {
                    $scope.mypcolor = "lightblue";
                    $scope.lblpass = "Password Should not less than 8 Char's";
                }
                else if ($scope.password.length > 15) {
                    $scope.mypcolor = "lightyellow";
                    $scope.lblpass = "Password Should not greater than 15 Char's";
                }
                else {
                    $scope.mypcolor = "lightgrey";
                    $scope.lblpass = "";
                }
            });
            $scope.Fruits = [
                 {
                     Id: 0,
                     Name: ''
                 },
                {
                    Id: 1,
                    Name: 'Apple'
                }, {
                    Id: 2,
                    Name: 'Mango'
                }, {
                    Id: 3,
                    Name: 'Orange'
                }];
            //$scope.disable = true;
            debugger;
            $scope.ddlFruits = 'Select';
            $scope.$watch("ddlFruits", function () {
                debugger;

                var fruitId = $scope.ddlFruits;
                if (fruitId === 0) {
                    $scope.ddlFruits = 'Select';
                }
            });
            $scope.GetValue = function () {
                debugger;
                var fruitId = $scope.ddlFruits;
                var fruitName = $.grep($scope.Fruits, function (fruit) {
                    return fruit.Id == fruitId;
                })[0].Name;
                $window.alert("Selected Value: " + fruitId + "\nSelected Text: " + fruitName);
            }
        }

    </script>
</head>
<body ng-app="myApp">
    
   <div id="divid" >
    <div ng-controller="LoginCtrl" style="margin-left:200px">
       :: <b> #@#@#@#@#@ </b>:: <br /><br />
      <label for="lbluser" value="Username">Username: <input type="text" id="txtname" ng-pattern="handlePatternUser" ng-model="username" style="background-color:{{mycolor}};width:250px;" name="txtname" class="form-control" /><span style="color:aqua">{{lbluser}}</span><span style="color:blue">{{lblpass2}}</span></label><br />
     <label for="lblpass" value="Password"> Password:  <input type="password" id="txtpassword" ng-pattern="handlePatternPassword" ng-model="password" style="width:250px;background-color:{{mypcolor}};" name="txtpassword" class="form-control" /><span style="color:aqua">{{lblpass}}&nbsp&nbsp</span><span style="color:blue">{{lblpass1}}</span></label><br /><br />
                <input type="text" id="Text1" ng-pattern="handlePatternUser" ng-model="username" style="background-color:{{mycolor}};width:250px;" name="txtname" class="form-control" />

        <select ng-model="ddlFruits" class="form-control" style="width:200px" ng-options="fruit.Id as fruit.Name for fruit in Fruits">
        </select>
        <br />
        <br />
        <input type="button" class="form-control btn-danger" style="width:75px" value = "Get" ng-disabled="ddlFruits ==='Select'" ng-click = "GetValue()" />
    </div>
    <input type="button" id="btncheck" class="form-control btn-danger" style="width:75px" value = "Get" />
    </div>
    
</body>
</html>
