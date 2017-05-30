/**
 * Created by Patrick on 2017/4/27.
 */
//路由配置
angular.module('App', ["ui.router"])
    .config(function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("desk");
        $stateProvider.state("desk", {
            url: "/desk",
            templateUrl: "view/desk.html",
            controller:"deskController"
        }).state("server", {
            url: "/server",
            templateUrl: "view/server.html",
            controller:"serverController"
        }).state("server.rechargeManagement",{//服务管理二级页面
            url:"/rechargeManagement",
            templateUrl:"view/server/rechargeManagement.html"
        }).state("server.healthDetection",{
            url:"/healthDetection",
            templateUrl:"view/server/healthDetection.html"
        }).state("server.healthRecord",{
            url:"/healthRecord",
            templateUrl:"view/server/healthRecord.html"
        }).state("server.locationQuery",{
            url:"/locationQuery",
            templateUrl:"view/server/locationQuery.html"
        }).state("server.police",{
            url:"/police",
            templateUrl:"view/server/police.html"
        }).state("server.workList",{
            url:"/workList",
            templateUrl:"view/server/workList.html",
            controller:"worklistController"
        }).state("server.orderService",{
            url:"/orderService",
            templateUrl:"view/server/orderService.html"
        }).state("server.orderSetting",{
            url:"/orderSetting",
            templateUrl:"view/server/orderSetting.html"
        }).state("server.callManagement",{
            url:"/callManagement",
            templateUrl:"view/server/callManagement.html"
        }).state("server.deviceManagement",{
            url:"/deviceManagement",
            templateUrl:"view/server/deviceManagement.html"
        }).state("member", {
            url: "/member",
            templateUrl: "view/member.html",
            controller:"memberController"
        }).state("member.receptionRegistration",{//会员管理二级页面
            url:"/receptionRegistration",
            templateUrl:"view/member/receptionRegistration.html"
        }).state("member.memberManagement",{
            url:"/memberManagement",
            templateUrl:"view/member/memberManagement.html"
        }).state("datamanage", {
            url: "/datamanage",
            templateUrl: "view/datamanage.html",
            controller:"datamanageController"
        }).state("datamanage.companyData",{//数据管理二级页面
            url:"/companyData",
            templateUrl:"view/datamanage/companyData.html"
        }).state("company", {
            url: "/company",
            templateUrl: "view/company.html",
            controller:"companyController"
        }).state("company.siteManagement",{//企业管理二级页面
            url:"/siteManagement",
            templateUrl:"view/company/siteManagement.html"
        }).state("company.companyManagement",{
            url:"/companyManagement",
            templateUrl:"view/company/companyManagement.html"
        }).state("company.departmentManagement",{
            url:"/departmentManagement",
            templateUrl:"view/company/departmentManagement.html"
        }).state("company.staffManagement",{
            url:"/staffManagement",
            templateUrl:"view/company/staffManagement.html"
        }).state("company.roleManagement",{
            url:"/roleManagement",
            templateUrl:"view/company/roleManagement.html"
        }).state("company.accountManagement",{
            url:"/accountManagement",
            templateUrl:"view/company/accountManagement.html"
        }).state("company.socialArchives",{
            url:"/socialArchives",
            templateUrl:"view/company/socialArchives.html"
        }).state("company.activityManagement",{
            url:"/activityManagement",
            templateUrl:"view/company/activityManagement.html"
        }).state("company.demandManagement",{
            url:"/demandManagement",
            templateUrl:"view/company/demandManagement.html"
        }).state("system", {
            url: "/system",
            templateUrl: "view/system.html",
            controller:"systemController"
        }).state("system.passwordModification",{//系统设置二级页面
            url:"/passwordModification",
            templateUrl:"view/system/passwordModification.html"
        }).state("system.log",{
            url:"/log",
            templateUrl:"view/system/log.html"
        })

    });
