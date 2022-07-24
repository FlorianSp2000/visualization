import Chart from "react-apexcharts";
import React, { Component } from "react";

class AscendingBubblesort extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
            name: "Runtime in ms",
            data: [
                {'x': 1024, 'y': 0.001},
                {'x': 2048, 'y': 0.001},
                {'x': 4096, 'y': 0.002},
                {'x': 8192, 'y': 0.004},
                {'x': 16384, 'y': 0.008},
                {'x': 32768, 'y': 0.015},
                {'x': 65536, 'y': 0.030},
                {'x': 131072, 'y': 0.060},
                // {'x': 262144, 'y': 0.001},
                // {'x': 524288, 'y': 0.001},
                // {'x': 1048576, 'y': 0.001},
                // {'x': 2097152, 'y': 0.001},
                // {'x': 4194304, 'y': 0.001},
                // {'x': 8388608, 'y': 0.001},
                // {'x': 16777216, 'y': 0.001},
                // {'x': 33554432, 'y': 0.001},
                // {'x': 67108864, 'y': 0.001},
                // {'x': 134217728, 'y': 0.001},
                // {'x': 268435456, 'y': 0.001},
                // {'x': 536870912, 'y': 0.001},
            ]
        },

    ],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            },
            toolbar: {
                show: false,
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Bubblesort on ascending data',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            title: {
                text: "Array size"
            },
            min: 0,
            max: 140000,
            tickAmount: 7,
          },
          yaxis: {
            title: {
                text: "Runtime (ms)"
            },
            min: 0,
            max: 0.1,
            tickAmount: 10
          }
        //   xaxis: {
        //     categories: ['100,000', '200,000', '300,000', '400,000', '500,000'],
        //   }
        },
      
      
      };
    }

  

    render() {
      return (
        
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />

);
}
}

export default AscendingBubblesort;

