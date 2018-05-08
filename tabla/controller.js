angular.module("datatable",[])
.controller("controller",function($scope,$http){

$scope.comentarios=[];

var config = {
    params: "safjnsdfndkfdnsf",
    headers: [{Authorization: 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='},{'Accept' : 'application/json'}]
};
    
$http.get("https://jsonplaceholder.typicode.com/comments")
.then(function(data){
console.log(data.data)
$scope.comentarios=data.data
    





}, function(err){
    
    
});

    
    


});
