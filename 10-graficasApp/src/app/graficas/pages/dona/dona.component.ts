import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Other',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100, 45],
        backgroundColor: [
          '#ADFADD',
          '#DFCC6F',
          '#F5B5BD',
          '#99A7DE',
          '#BFFAAD',
        ],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  ngOnInit(): void {}
}
