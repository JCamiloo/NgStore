import { EmployeeData } from '@core/models/employee.model';
import { GeneratorService } from '@core/services/generator.service';
import { Component, OnInit } from '@angular/core';

const names = ['nicolas', 'juan', 'felipe', 'maria'];
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  salesList: EmployeeData[] = [];
  auxList: EmployeeData[] = [];

  constructor(private generatorService: GeneratorService) { }

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
