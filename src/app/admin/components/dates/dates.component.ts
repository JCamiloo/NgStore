import { Component, OnInit } from '@angular/core';
import { addDays, format } from 'date-fns';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  date: string;

  constructor() { }

  ngOnInit() {
    const addNewsDays = addDays(new Date(), 20);
    this.date = format(addNewsDays, 'yyyy/MMMM/dd');
  }

}
