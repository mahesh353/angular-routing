"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var students_service_1 = require("./services/students.service");
var HomeComponent = (function () {
    function HomeComponent(_studentService, _router) {
        this._studentService = _studentService;
        this._router = _router;
        this.students = [];
        this.isShowTable = true;
        this.buttonText = "Hide Table";
        this.students = this._studentService.getStudents();
    }
    HomeComponent.prototype.clickEventHandler = function () {
        this.isShowTable = !this.isShowTable;
        this.buttonText = this.isShowTable ? "Hide Table" : "Show Table";
    };
    HomeComponent.prototype.navigateToStudentDetails = function (id) {
        //console.log('student clicked with id - ' + id);
        this._router.navigateByUrl('student-details/' + id);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './app/home.component.html',
            providers: [students_service_1.StudentService]
        }), 
        __metadata('design:paramtypes', [students_service_1.StudentService, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map