import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
 
  @Input() horizontal: boolean = false;
  @Input() barChartLabels: string[] = [
    // '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];
 
  @Input() barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#93E612', hoverBackgroundColor: '#CFFAE6' },
      // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#4613F0', hoverBackgroundColor: '#91A7ED' },
      // { data: [58, 98, 30, 99, 36, 87, 24], label: 'Series C', backgroundColor: '#D91C29', hoverBackgroundColor: '#E0A5CA' },
    ],
  };

  ngOnInit(): void {
    if( this.horizontal ) {
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!["y"]!.min = 0;
    }
  }

}
