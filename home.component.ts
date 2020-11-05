import { Component } from "@angular/core";
import { StudentService } from "./services/students.service";


@Component({
    selector: 'app-home',
    templateUrl: './app/home.component.html',
    providers: [StudentService]
})

export class HomeComponent {

    // students: any = [];

    // constructor(private _studentService : StudentService){

    //     this.students = this._studentService.getStudents();

    // }



    // isShowTable: any = true;

    // buttonText: any = "Hide Table";

    // // students: any = [
    // //     { id: 1, name: 'Ram', address: 'Thane', gender: 'Male' },
    // //     { id: 2, name: 'Seeta', address: 'Kalyan', gender: 'Female' },
    // //     { id: 3, name: 'Laxman', address: 'Thane', gender: 'Male' },
    // //     { id: 4, name: 'Bharat', address: 'Thane', gender: 'Male' }
    // // ]

    // clickEventHandler() {
    //     this.isShowTable = !this.isShowTable;
    //     this.buttonText = this.isShowTable ? "Hide Table" : "Show Table";
    // }
}