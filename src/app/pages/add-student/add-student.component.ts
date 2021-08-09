import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})



export class AddStudentComponent implements OnInit {
  public profileForm: any


  @Input() rowData: any
  @Input() index: any

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {



    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      grade: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });

    if (this.rowData) {
      this.profileForm.patchValue(this.rowData.data)
    }

  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }


  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Muhammad',
      lastname: 'Ahmed',
      grade: 'Class 2',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }


  openSnackBar(msg: any) {
    this._snackBar.open(msg, 'close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }






  onSubmit() {

    let newData: any = []

    function validateName(arr: any, name: any): any {
      let validFlag: any = false;
      // console.log(newData[0].firstName)
      for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i].firstName )
        if (arr[i].firstName === name) {
          validFlag = true
        }
      }
      return validFlag
    }

    if (!this.rowData) {
      newData.push(this.profileForm.value)
      if (localStorage.getItem('data') === null) {
        console.log("NULL Data")
        newData = JSON.stringify(newData)
        localStorage.setItem('data', newData)

        this.profileForm.patchValue({
          firstName: '',
          lastname: '',
          grade: '',
          address: {
            street: '',
            city: '',
            state: ''
          }
        });
        this.openSnackBar("Record Saved");
      }
      else {
        let oldData: any = localStorage.getItem('data')
        oldData = JSON.parse(oldData)

        let chkName = validateName(oldData, newData[0].firstName)
        if (chkName === true) {
          this.openSnackBar("Name already Exist");
        }
        else if (chkName === false) {
          oldData.push(this.profileForm.value)
          oldData = JSON.stringify(oldData)
          localStorage.setItem('data', oldData)


          this.profileForm.patchValue({
            firstName: '',
            lastname: '',
            grade: '',
            address: {
              street: '',
              city: '',
              state: ''
            }
          });
          this.openSnackBar("Record Saved");
        }
      }
    }
    else if (this.rowData) {

      let oldData: any = localStorage.getItem('data')
      oldData = JSON.parse(oldData)
      let chkName = validateName(oldData, newData[0].firstName)


      if (chkName === true) {
        this.openSnackBar("Name already Exist");
      }
      else if (chkName === false) {
        oldData.splice(this.rowData.index, 1, this.profileForm.value)
        oldData = JSON.stringify(oldData)
        localStorage.setItem('data', oldData)
        this.openSnackBar("Record Saved");
      }
    }
  }
}
