import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  constructor(private service: ApiserviceService) {}

  readData: any;

  ngOnInit(): void {
    this.getAllData();
  }

  deleteData(id: any) {
    this.service.deleteData(id).subscribe((res) => {
      console.log(res);
      this.getAllData();
    });
  }

  getAllData() {
    this.service.getAllData().subscribe((res) => {
      this.readData = res.data;
      console.log(this.readData, 'result ===> ');
    });
  }
}
