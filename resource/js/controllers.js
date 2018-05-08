angular.module("FinalApp")
.controller("MainController",function($scope,$resource){

Post=$resource("https://jsonplaceholder.typicode.com/posts/:id",{id:"@id"});

$scope.posts = Post.query();

})
.controller("PostController", function($scope,$resource,$routeParams){

    Post=$resource("https://jsonplaceholder.typicode.com/posts/:id",{id:"@id"});
    $scope.post=Post.get({id:$routeParams.id})
})


;