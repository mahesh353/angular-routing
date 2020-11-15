import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StudentService } from "./services/students.service";

@Component({
    selector: 'app-studentdetails',
    templateUrl: './app/student-details.component.html'
})

export class StudentDetailsComponent {

    //student-details/4

    studentId: any;
    student: any;

    constructor(private _activatedRoute: ActivatedRoute, private _studentService: StudentService) {

        this._activatedRoute.params.subscribe(parameter => {
            this.studentId = parameter.id;


            this.student = this._studentService.getStudentById(this.studentId);


        })


    }


}