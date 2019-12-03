import { Subscription, Observable } from 'rxjs';
import { EmployeeData } from '@core/models/employee.model';
import { GeneratorService } from '@core/services/generator.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

const names = ['nicolas', 'juan', 'felipe', 'maria'];
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  salesList: EmployeeData[] = [];
  auxList: EmployeeData[] = [];
  value$: Observable<number>;

  constructor(private generatorService: GeneratorService) {
    this.value$ = this.generatorService.getData();
  }

  ngOnInit() {
    this.salesList = this.generatorService.generate(names, [10, 20], 10);
    this.auxList = this.generatorService.generate(names, [10, 20], 10);
    
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10,20])
    })
  }
}
