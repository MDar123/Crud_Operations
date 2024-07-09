import { Component, inject, TemplateRef, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import JSON from 'json5';
import { Student } from '../../module';
@Component({
  selector: 'app-crud-practice',
  standalone: true,
  imports: [NgbDatepickerModule,FormsModule,CommonModule,NgbModule],
  templateUrl: './crud-practice.component.html',
  styleUrl: './crud-practice.component.css'
})
export class CrudPracticeComponent implements OnInit {

    /* Read operation */

	ngOnInit(): void {
        const localdata = localStorage.getItem('StudentList');
        if(localdata!=null){
            this.studentArr = JSON.parse(localdata);
        }
    }
	studentArr:Student[] = [];
	student:Student = {
    studentid:0,
	fullName: '',
	mobile :0,
	email:'',
	address : ''
	};
	private modalService = inject(NgbModal);
    closeResult = '';
    open(content: Student) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
            (result: any) => {
                this.closeResult = `Closed with: ${result}`;
            },
            (reason: any) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
        this.student= {
            studentid:0,
            fullName: '',
            mobile:0,
            email:'',
            address : ''
            };
    }

    private getDismissReason(reason: any): string {
        switch (reason) {
            case ModalDismissReasons.ESC:
                return 'by pressing ESC';
            case ModalDismissReasons.BACKDROP_CLICK:
                return 'by clicking on a backdrop';
            default:
                return `with: ${reason}`;
        }
    }
    /* Create operation */
	saveBtn(data:Student){
    this.student.studentid = this.studentArr.length + 1;
    this.studentArr.push(this.student);
    localStorage.setItem('StudentList', JSON.stringify(this.studentArr));
    this.student= {
        studentid:0,
        fullName: '',
        mobile:0,
        email:'',
        address : ''
        };
    }
    /* Edit operation */

    editBtn(content:Student , stud:Student){

        this.open(content);
        this.student = stud;
    }

    
    /* Update operation */
    update(){
    let record:any = this.studentArr.find(m =>  m.studentid == this.student.studentid);
    record.fullName = this.student.fullName;
    record.mobile = this.student.mobile;
    record.email = this.student.email;
    record.address = this.student.address;  
    localStorage.setItem('StudentList', JSON.stringify(this.studentArr));
}

/* Delete operation */
deleteBtn(id:number){
for (let i = 0; i < this.studentArr.length; i++) {
    if( this.studentArr[i].studentid ==id){
    this.studentArr.splice(i,1);
    break;
    }
}
localStorage.setItem('StudentList', JSON.stringify(this.studentArr));
}
}

