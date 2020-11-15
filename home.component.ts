import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StudentService } from "./services/students.service";


@Component({
    selector: 'app-home',
    templateUrl: './app/home.component.html',
    providers: [StudentService]
})

export class HomeComponent {

    students: any = [];

    constructor(private _studentService: StudentService, private _router: Router) {

        this.students = this._studentService.getStudents();

    }

    isShowTable: any = true;

    buttonText: any = "Hide Table";

    clickEventHandler() {
        this.isShowTable = !this.isShowTable;
        this.buttonText = this.isShowTable ? "Hide Table" : "Show Table";
    }

    navigateToStudentDetails(id) {
        //console.log('student clicked with id - ' + id);


        this._router.navigateByUrl('student-details/' + id);


    }
}