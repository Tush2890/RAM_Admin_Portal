import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  createChart(): any {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  getCharts(): Chart[] {
    //call api to get charts
    return charts;
  }

  getAxes(chartId): Axes[] {
    //call api to get axes of a particular chart
    return axes;
  }

  updateCharts(newData: any, charts: Chart[]): any {
    throw new Error("Method not implemented.");
  }

}

export class Chart {
  ID: number;
  Head_ID: number;
  ChartName: string;
  ChartId: string;
  ChartDescription: string;
  VariableName: string;
  VariableUnit: string;
  VariableColor: string;
}

export class Axes {
  ID: number;
  Title: string;
  Unit: string;
  Position: string;
}

var charts: Chart[] = [{
  ID: 1,
  Head_ID: 0,
  ChartName: "Boiler Flow-Return Temperature Difference",
  ChartId: "Chart5",
  ChartDescription: "",
  VariableName: "",
  VariableUnit: "",
  VariableColor: ""
}, {
  ID: 2,
  Head_ID: 1,
  ChartName: "",
  ChartId: "",
  ChartDescription: "",
  VariableName: "Water temperature difference",
  VariableUnit: "°C",
  VariableColor: "#3ec329"
},
{
  ID: 3,
  Head_ID: 0,
  ChartName: "Boiler Flue Temp and Fan Speed",
  ChartId: "Chart14",
  ChartDescription: "",
  VariableName: "",
  VariableUnit: "",
  VariableColor: ""
},
{
  ID: 4,
  Head_ID: 3,
  ChartName: "",
  ChartId: "",
  ChartDescription: "",
  VariableName: "Boiler fan speed actual",
  VariableUnit: "°C",
  VariableColor: "#3ec329"
  ,
},
{
  ID: 5,
  Head_ID: 3,
  ChartName: "",
  ChartId: "",
  ChartDescription: "",
  VariableName: "Boiler flow temperature",
  VariableUnit: "°C",
  VariableColor: "#DC5A50"
  ,
},
{
  ID: 6,
  Head_ID: 3,
  ChartName: "",
  ChartId: "",
  ChartDescription: "",
  VariableName: "DHW temperature",
  VariableUnit: "°C",
  VariableColor: "#6600CC"
  ,
},
{
  ID: 7,
  Head_ID: 3,
  ChartName: "",
  ChartId: "",
  ChartDescription: "",
  VariableName: "ExhaustTemperature",
  VariableUnit: "°C",
  VariableColor: "#e66cf9"
  ,
}];

var axes: Axes[] = [
  { 'ID': 1, 'Title': 'Temperature', 'Unit': '°C', 'Position': 'left' },
  { 'ID': 2, 'Title': 'Speed', 'Unit': '°C', 'Position': 'right' },
  { 'ID': 3, 'Title': 'Status', 'Unit': 'ON/OFF', 'Position': 'right' }
];