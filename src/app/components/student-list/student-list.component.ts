import { ModalComponent } from './../modal/modal.component';
import {Component, OnInit,ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

 @Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
  })


export class StudentListComponent implements OnInit {

  @ViewChild(MatTable)
   table!: MatTable<any>;

  constructor(public dialog: MatDialog) {}

  public dataSource : any

  



  openDialog(element :any ,ind: any ): void {
    
    let dial = this.dialog.open(ModalComponent);
    dial.componentInstance.data = {data:element,index:ind}
    dial.afterClosed().subscribe(result => {
      var tableData : any  = localStorage.getItem('data')
      this.dataSource = JSON.parse(tableData);
      this.table.renderRows();
    });
    
    
    
  }

  deleteRecord(ind:any): void {
      let oldData: any = localStorage.getItem('data')
      oldData = JSON.parse(oldData)
      oldData.splice(ind,1)
      oldData = JSON.stringify(oldData)
      localStorage.setItem('data', oldData)
      var tableData : any  = localStorage.getItem('data')
      this.dataSource = JSON.parse(tableData);
      this.table.renderRows();

  }

  


  

  ngOnInit(): void {
    var tableData : any  = localStorage.getItem('data')
    this.dataSource = JSON.parse(tableData);
    // tableData  = localStorage.getItem('data')
  }

  displayedColumns: string[] = ['firstName', 'lastName', 'grade', 'address','actions'];
  
}










// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-student-list',
//   templateUrl: './student-list.component.html',
//   styleUrls: ['./student-list.component.css']
// })
// export class StudentListComponent implements OnInit {

//   export interface PeriodicElement {
//     name: string;
//     position: number;
//     weight: number;
//     symbol: string;
//   }


//   constructor() { }

//   ngOnInit(): void {
//   }

//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  




// }
