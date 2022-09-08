import { Component, OnInit } from '@angular/core';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor(public _count: CountService) { }

  ngOnInit(): void {
  }

  increment(){
    this._count.addOne();
  }

}
