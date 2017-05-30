/**
 * Created by Patrick on 2017/4/27.
 */
angular.module("App").controller("memberController",["$scope","$state",function($scope,$state){
    $(".panel_text").on("click",function(){
        $(this).next().toggleClass("server_active");
        $(this).addClass("border_active").parent().siblings().find("div").removeClass("border_active");
        $(this).toggleClass("text_active");
        if($(this).find("span").html()=="-"){
            $(this).find("span").html("+");
        }else{
            $(this).find("span").html("-");
        }
    });
    $(".panel_list a").on("click",function(){
        $(this).addClass("list_active").parent().siblings().find("a").removeClass("list_active");
        $(this).parents(".panel_head").siblings().find("a").removeClass("list_active");
        $(this).parents(".panel_head").find("div").addClass("border_active").parent().siblings().find("div").removeClass("border_active");
    });
    $state.go("member.receptionRegistration");
}]);