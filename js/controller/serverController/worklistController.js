/**
 * Created by 张相伟 on 2017/5/12.
 */
var app = angular.module("App");
app.controller("worklistController",["$scope","$http",function($scope,$http){
    $scope.orderList = "订单列表";
    $scope.all = "全部";
    $scope.serch = "搜索";
    $scope.newOrder = "新增工单";
    $scope.reload = "刷新";
    $scope.change = "修改";
    $scope.cancel = "取消";
    $scope.orders = "接单";

    $http.get("js/json/worklist.json").success(function(res){
        //console.log(res);
        $scope.items = res;
        //分页
        $scope.dataNum =  res.length;  //获得数据总个数
        $scope.pages = Math.ceil($scope.dataNum/10);//按照每页显示10个数据，得到总页数
        $scope.pageNum = [];//生成页码，在 html里 ng-repeat 出来
        for(var i=0;i<$scope.pages;i++){
            $scope.pageNum.push(i);
        }

        $scope.currentPage = 0; //设置当前页是 0
        $scope.listsPerPage = 10;//设置每页显示 10 个

        $scope.setPage = function(num){// 当点击页码数字时执行的函数
            $scope.currentPage = num;//将当前页 设置为 页码数
        };

        $scope.prevPage = function(){//点击上一页执行的函数
            if($scope.currentPage > 0){
                $scope.currentPage--;
                $(".prevLink").removeClass("link");
                $(".nextLink").addClass("link");
            }
        };
        $scope.nextPage = function(){//点击下一页执行的函数
            if ($scope.currentPage < $scope.pages-1){
                $scope.currentPage++;
                $(".nextLink").removeClass("link");
                $(".prevLink").addClass("link");
            }
        }
    });

    $scope.selectNames = ['全部','待发布','已发布','已接单','正在工作-待完成','已完成','已取消'];
    //下拉框
    $scope.selectShow = function(){
        $(".select_body").slideToggle();
    };
    $scope.selectActive = function (e) {
        $(".select_header").html(this.selectName);
        $(".select_body").hide();
    };
    //点击接单的弹出框
    $scope.addOrder = function (event) {
        $("#mymodal").modal("toggle");
        //console.log($(event.target).parents('tr').find("td").eq(0).html());
        $scope.itemId = $(event.target).parents('tr').find("td").eq(0).html();
        $scope.itemServerPerson = $(event.target).parents('tr').find("td").eq(3).html();
        $scope.itemUser = $(event.target).parents('tr').find("td").eq(1).html();
        $scope.itemServerContent = $(event.target).parents('tr').find("td").eq(5).html();
        $scope.itemServerMoney = $(event.target).parents('tr').find("td").eq(6).html();
    }
}]);
//分页过滤器
app.filter('paging',function(){         //paging 过滤器
    return function(lists,start){       //两个参数 lists 是在 html 里你ng-repeat的原始数据：
                                        // start 也就是 paging 后面传的参数，即 currentPage*listsPerPage
        return lists.slice(start);      //将原始数据按照 start 分割
    };
});