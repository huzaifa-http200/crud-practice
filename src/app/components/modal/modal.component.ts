import {Component, Inject, Input} from '@angular/core';
import { AddStudentComponent } from '../../pages/add-student/add-student.component';


export interface DialogData {
  animal: string;
  name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'modal.component',
  templateUrl: 'modal.component.html',
})
export class ModalComponent{

  @Input() data : any;
  @Input() index : any;


  }

