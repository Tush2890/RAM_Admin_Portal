import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { VariablesService, Variables } from './variables.service';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements AfterViewInit {
  variables: Variables[] = [];
  currentColor: string;
  count = 0;

  @ViewChild('targetDataGrid') dataGrid: DxDataGridComponent;

  constructor(private variableService: VariablesService) {

    this.variableService.getVariables().subscribe(variables => {
      for (var i = 0; i < variables.length; i++) {
        let variable: Variables = {
          VariableId: variables[i].VariableId,
          Color: variables[i].Color,
          DeviceType: variables[i].DeviceType,
          MaxValue: variables[i].MaxValue,
          MinValue: variables[i].MinValue,
          Name: variables[i].Name,
          SeriesType: variables[i].SeriesType,
          Unit: variables[i].Unit,
          VariableType: variables[i].VariableType,
          DataPointsSource: variables[i].DataPointsSource,
          Description: variables[i].Description,
          ID: ++this.count
        };

        this.variables.push(variable);
      }
      this.dataGrid.instance.endCustomLoading();
    });
  }

  ngAfterViewInit(): void {
    this.dataGrid.instance.beginCustomLoading('Loading...');
  }


  cellPrepared(e) {
    if (e.column.dataField === 'Color' && e.rowType == "data") {
      let variableColorCell = e.cellElement;
      if (variableColorCell) {
        variableColorCell.style['color'] = e.value;
      }
    }
  }

  onEditorPreparing(e) {
    if (e.dataField === 'VariableId' || e.dataField === 'DeviceType' || e.dataField === 'VariableType' || e.dataField === 'DataPointsSource') {
      e.editorOptions.readOnly = true;
    }
    else if (e.dataField === "Color") {
      e.editorName = "dxColorBox";
      e.editorOptions.applyValueMode = 'instantly';
    }
  }

  rowUpdating(e) {
    let variable = new Variables();
    variable.Color = typeof e.newData.Color === typeof undefined ? e.oldData.Color : e.newData.Color;
    variable.MaxValue = typeof e.newData.MaxValue === typeof undefined ? e.oldData.MaxValue : e.newData.MaxValue;
    variable.MinValue = typeof e.newData.MinValue === typeof undefined ? e.oldData.MinValue : e.newData.MinValue;
    variable.Name = typeof e.newData.Name === typeof undefined ? e.oldData.Name : e.newData.Name;
    variable.SeriesType = typeof e.newData.SeriesType === typeof undefined ? e.oldData.SeriesType : e.newData.SeriesType;
    variable.Unit = typeof e.newData.Unit === typeof undefined ? e.oldData.Unit : e.newData.Unit;
    variable.Description = typeof e.newData.Description === typeof undefined ? e.oldData.Description : e.newData.Description;

    this.variableService.updateVariable(e.oldData.VariableId, variable).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
}
