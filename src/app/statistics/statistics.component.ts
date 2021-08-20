import { Component, OnInit } from '@angular/core';
import { std, median, mean } from 'mathjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  
  inputNum: any = null;
  dataSet: Array<number> = [];
  avg: number = 0;
  median: number = 0;
  stdDev: number = 0;
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  // Method called when Add and Update Statistics button is clicked.
  // Executes when entry is defined and not 0.
  // Statistical values displayed are fixed to 3 decimal places. 
  addToDataSet(inputNumber: number) {
    if(inputNumber && inputNumber !== 0) {
      this.dataSet.push(Number(inputNumber));
      this.avg = Number(mean(this.dataSet).toFixed(3));
      this.median = Number(median(this.dataSet).toFixed(3));
      this.stdDev = Number(std(this.dataSet).toFixed(3));
      this.inputNum = '';
    }
  }
  
  // Method called when Reset Data button is clicked
  resetData() {
    this.dataSet.length = 0;
    this.avg = 0;
    this.median = 0;
    this.stdDev = 0;
  }
  
}
