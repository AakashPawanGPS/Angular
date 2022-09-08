import { Component, OnInit } from '@angular/core';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  providers:[CountService]
})
export class RightComponent implements OnInit {

  constructor(public _count : CountService) { }

  ngOnInit(): void {
  }

  increment(){
    this._count.addOne();
  }

}
