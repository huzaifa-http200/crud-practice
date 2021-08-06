import { ViewChild } from '@angular/core';
import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  @ViewChild(MatTable)
  table!: MatTable<any>;

  constructor(private dataService : CrudService) { }

  data = {};
  public dataSource :any

  ngOnInit(): void {
    this.dataService.getData().subscribe(userdata => this.dataSource = userdata)
    
    // this.dataService.getData().subscribe(userData => console.log(userData))
  }

  // displayedColumns: string[] = ['name', 'username', 'email', 'phone','actions'];
  displayedColumns: string[] = ["id",'name', 'username', 'email', 'phone'];

  showdata() {
    console.log(this.data)
  }

}
