import { Component, OnInit } from '@angular/core';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  constructor(public _count : CountService) { }

  ngOnInit(): void {
  }

}
