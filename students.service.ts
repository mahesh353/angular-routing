import { Injectable } from "@angular/core";


@Injectable()
export class StudentService {

    //whenever we create the instance of the class constructor will get called automaticalluy
    //constructor is used to initialize the data

    private students: any;

    constructor() {

        this.students = [
            { id: 1, name: 'Ram', address: 'Thane', gender: 'Male', age: 30, city: 'Mumbai' },
            { id: 2, name: 'Seeta', address: 'Kalyan', gender: 'Female', age: 28, city: 'Mumbai' },
            { id: 3, name: 'Laxman', address: 'Thane', gender: 'Male', age: 30, city: 'Mumbai' },
            { id: 4, name: 'Bharat', address: 'Thane', gender: 'Male', age: 30, city: 'Mumbai' }
        ]
    }


    getStudents() {
        return this.students;
    }


    getStudentById(studentId) {

        var student = this.students.filter(student => student.id == studentId)[0];

        return student;

    }






}