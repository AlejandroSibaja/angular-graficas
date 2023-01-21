import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  
  // Doughnut
  public colors: Color[] = [
    '#F20C67',
    '#00E6B8',
    '#F2A41F',
    '#0E00FF',
    '#B0FC21'
  ]
  public doughnutChartLabels: string[] = [ 
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      // { data: [ 350, 450, 100 ], backgroundColor: this.colors },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor( private graficasService: GraficasService ) {}
  
  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     console.log( data )
    //     const labels = Object.keys( data );
    //     const values = Object.values( data );

    //     this.doughnutChartData.labels = labels;
    //     this.doughnutChartData.datasets.push( {data: values, backgroundColor: this.colors } );

    //   });

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({ labels, values }) => {

        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets.push( {data: values, backgroundColor: this.colors } );

      })
  }

}
