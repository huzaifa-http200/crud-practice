import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})



export class AddStudentComponent implements OnInit {
  public profileForm: any

  @Input() rowData: any
  @Input() index: any

  constructor(private fb: FormBuilder) { }

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

    if (this.rowData.data) {
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



  onSubmit() {

    let newData: any = []

    if (!this.rowData) {
      newData.push(this.profileForm.value)
      if (localStorage.getItem('data') === null) {
        console.log("NULL Data")
        newData = JSON.stringify(newData)
        localStorage.setItem('data', newData)
      }
      else {
        let oldData: any = localStorage.getItem('data')
        oldData = JSON.parse(oldData)
        console.log(oldData)
        oldData.push(this.profileForm.value)
        oldData = JSON.stringify(oldData)
        localStorage.setItem('data', oldData)

        let showData: any = localStorage.getItem('data')
        showData = JSON.parse(showData)
      }
    }
    else if (this.rowData) {
      let oldData: any = localStorage.getItem('data')
      oldData = JSON.parse(oldData)
      oldData.splice(this.rowData.index, 1, this.profileForm.value)
      oldData = JSON.stringify(oldData)
      localStorage.setItem('data', oldData)
    }
  }

}
