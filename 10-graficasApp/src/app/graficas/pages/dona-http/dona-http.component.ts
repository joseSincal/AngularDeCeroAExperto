import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: string[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
    // 'Other',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [
          //350, 450, 100, 45
        ],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    this.graficasService
      .getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, datasets }) => {
        this.doughnutChartData = { labels, datasets };
      });
  }
}
