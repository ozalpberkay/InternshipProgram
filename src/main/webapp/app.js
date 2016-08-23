var app = angular.module('myApp', ['ngMaterial','md.data.table']);
app.controller('myCtrl', function ($scope, $http) {
    $scope.selected=[];
    $scope.listMethod = function listMethod() {
        $http
            .get("http://192.168.1.4:8080/interns")
            .then(function(response) {
                $scope.interns = response.data;
            });
    },


        $scope.deleteMethod = function deleteMethod(id) {
            console.log("deleting " + id);
            $http
                .delete("http://192.168.1.4:8080/interns/" +id)
                .then(function (result) {
                    alert("Person deleted");
                    console.log("Person deleted", result.status, arguments);
                }, function () {
                    console.log("Reject", arguments);
                }, function () {
                    console.log("complete", arguments);
                });
        },



        $scope.addMethod = function addMethod(Name,Surname,School,Project){

            $http
                .post("http://192.168.1.4:8080/interns", {
                    Name : Name,
                    Surname : Surname,
                    School : School,
                    Project : Project
                })
                .then(function(data, status, headers) {
                    alert("Informations added");

                });


        },


        $scope.updateMethod = function updateMethod(Name,Surname,School,Project) {
            console.log("updating " + Name +" "+ Surname+" "+ School + " " + Project);
            $http
                .post("http://192.168.1.4:8080/update",{
                    Name : Name,
                    Surname : Surname,
                    School : School,
                    Project : Project
                })
                .then(function (result) {
                    console.log("Name updated", result.status, arguments);
                    alert("Informations updated");
                }, function () {
                    console.log("Reject", arguments);
                }, function () {
                    console.log("complete", arguments);
                });

        },


        $scope.evaluatePerson = function evaluatePerson(id) {
            console.log("evaluate " + id);
            $http
                .post("http://192.168.1.4:8080/interns/"+id+"/evaluate")
                .then(function(data, status, headers) {
                    alert("Person evaluated");

                });
        },


        $scope.toggleCustom= function toggleCustom() {
            $scope.custom = true;
            $scope.toggleCustom = function () {
                $scope.custom = $scope.custom === false ? true : false;
            };

        }




});
