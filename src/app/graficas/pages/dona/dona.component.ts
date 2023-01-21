import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

    // Doughnut
    public colors: Color[] = [
      '#F20C67',
      '#00E6B8',
      '#F2A41F'
    ]
    public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
    public doughnutChartData: ChartData<'doughnut'> = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100 ], backgroundColor: this.colors },
      ]
    };
    public doughnutChartType: ChartType = 'doughnut';

}
