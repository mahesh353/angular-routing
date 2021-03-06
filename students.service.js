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
var StudentService = (function () {
    function StudentService() {
        this.students = [
            { id: 1, name: 'Ram', address: 'Thane', gender: 'Male', age: 30, city: 'Mumbai' },
            { id: 2, name: 'Seeta', address: 'Kalyan', gender: 'Female', age: 28, city: 'Mumbai' },
            { id: 3, name: 'Laxman', address: 'Thane', gender: 'Male', age: 30, city: 'Mumbai' },
            { id: 4, name: 'Bharat', address: 'Thane', gender: 'Male', age: 30, city: 'Mumbai' }
        ];
    }
    StudentService.prototype.getStudents = function () {
        return this.students;
    };
    StudentService.prototype.getStudentById = function (studentId) {
        var student = this.students.filter(function (student) { return student.id == studentId; })[0];
        return student;
    };
    StudentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StudentService);
    return StudentService;
}());
exports.StudentService = StudentService;
//# sourceMappingURL=students.service.js.map