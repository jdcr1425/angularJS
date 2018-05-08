var app=angular.module("myfirstapp",[])

app.controller("firstcontroller", function($scope,$http){


$scope.posts=[];

var config = {
 params: "safjnsdfndkfdnsf",
 headers: [{Authorization: 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='},{'Accept' : 'application/json'}]
};

$http.get("https://jsonplaceholder.typicode.com/posts",config)
.then(function(data){
//console.log(data.data)
$scope.posts=data.data

}, function(err){


});

$scope.postobj={};
$scope.addpost= function(){

$http.post("https://jsonplaceholder.typicode.com/posts",{

	tittle:$scope.postobj.title,
	body:$scope.postobj.body,
	userId:1
}).then(function(data){

	$scope.posts.push($scope.postobj);

	$scope.postobj={};
}, function(err){

});


}


/*$scope.nombre="Juan"
$scope.comentarios=[

{comentario:"buen tuto",
 username:"codigof"
},
{comentario:"mal tuto",
 username:"codigofac"
}


]

$scope.newcomment={};
$scope.agregarcomentario=function(){
$scope.comentarios.push($scope.newcomment)
$scope.newcomment={};
}
*/
});
