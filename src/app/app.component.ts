import { Component, OnInit } from '@angular/core';
import { DataTestService } from './services/data-test.service';
import { TodoItem } from './models/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dataStuff: TodoItem;
  title: string;

  constructor (private dataService: DataTestService){}

  ngOnInit() {
    this.dataService.getDummyData().subscribe(value => {
      this.dataStuff = value;
      this.title = this.dataStuff.title;
    });
  }

}
