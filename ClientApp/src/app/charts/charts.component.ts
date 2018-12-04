import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Chart, Axes, ChartsService } from './charts.service';
import { Variables, VariablesService } from '../variables/variables.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  @ViewChild('ddgAxe') axeDdg: ElementRef;

  charts: Chart[];
  variables: Variables[];
  dropdownList = [];
  axesTitle: Array<string> = [];
  axes: Axes[] = [];
  childRowsKeys: number[];
  childVariablesOfARow = [];
  parentRowID: number;
  selectedVariables = [];
  gridDataSource: Variables[];
  gridBoxValue: number[];
  applyButtonOptions: any;
  positions: Array<string>;

  constructor(private chartService: ChartsService,
    private variableService: VariablesService, private ref: ChangeDetectorRef) {
    this.charts = this.chartService.getCharts();
    // this.gridDataSource = this.variableService.getVariables();
  }

  ngOnInit() {
    this.getChildRowsKeys(this.charts);
    this.positions = ["left", "bottom", "right"];
  }

  removeAxe(axeId, axeTitle) {
    const idIndex = this.axes.findIndex(x => x.ID === axeId);
    this.axes.splice(idIndex, 1);
    const titleIndex = this.axesTitle.indexOf(axeTitle);
    this.axesTitle.splice(titleIndex, 1);
  }

  getChildRowsKeys(charts) {
    this.childRowsKeys = [];
    for (var i = 0; i < charts.length; i++) {
      if (charts[i]['Head_ID'] !== 0) {
        this.childRowsKeys.push(charts[i]['ID']);
      }
    }
  }

  cellPrepared(e) {
    if (e.column.command === "edit" && e.rowType === "data") {
      e.cellElement.style.textAlign = 'right';
      //remove add link from rows
      let addLink = e.cellElement.querySelector(".dx-link-add");
      if (addLink) {
        addLink.remove();
      }

      //remove edit link from child rows
      if (this.childRowsKeys.indexOf(e.key) >= 0) {
        let editLink = e.cellElement.querySelector(".dx-link-edit");
        if (editLink) {
          editLink.remove();
        }
      }
    }

    //add color style to "Variable Color" column
    if (e.column.dataField === 'VariableColor' && e.rowType === "data" && this.childRowsKeys.indexOf(e.key) >= 0) {
      let variableColorCell = e.cellElement;
      if (variableColorCell) {
        variableColorCell.style['color'] = e.value;
      }
    }
  }


  editorPreparing(e) {
    if (e.dataField === 'ChartId') {
      this.gridBoxValue = [];
      //new row
      if (e.row.inserted) {
        e.editorOptions.readOnly = false;
        this.axes.length = 0;
      }
      //edit row
      else {
        e.editorOptions.readOnly = true;
        if (e.row.node.hasChildren) {
          for (var i = 0; i < e.row.node.children.length; i++) {
            this.childVariablesOfARow.push(e.row.node.children[i]['data']['VariableName']);
            this.gridBoxValue.push(this.gridDataSource.find(x => x.Name === e.row.node.children[i]['data']['VariableName'])['ID']);
          }
          this.parentRowID = e.row.node['data']['ID'];

          //get axes of the editing chart
          this.axesTitle = [];
          this.axes = this.chartService.getAxes(e.row.data.ChartId);
          for (var i = 0; i < this.axes.length; i++) {
            this.axesTitle.push(this.axes[i]['Title']);
          }
        }
      }
    }
  }

  removeChildRows() {
    while (this.charts.findIndex(x => x.Head_ID === this.parentRowID) !== -1) {
      this.charts.splice(this.charts.findIndex(x => x.Head_ID === this.parentRowID), 1);
    }
  }

  rowUpdating(e) {
    this.removeChildRows();
    let lastRowID = this.charts[this.charts.length - 1]['ID'];
    this.createChildRows(lastRowID);
    // this.chartService.updateCharts(e.newData, this.charts);
  }

  createChildRows(rowId) {
    for (var i = 0; i < this.selectedVariables.length; i++) {
      let variableObj = new Chart();
      variableObj.VariableName = this.selectedVariables[i]['Name'];
      variableObj.VariableColor = this.selectedVariables[i]['Color'];
      variableObj.VariableUnit = this.selectedVariables[i]['Unit'];
      variableObj.ID = rowId + (i + 1);
      variableObj.Head_ID = typeof this.parentRowID === typeof undefined ? rowId : this.parentRowID;
      this.charts.push(variableObj);
    }
    this.getChildRowsKeys(this.charts);
  }

  rowInserted(e) {
    let lastRowID = this.charts[this.charts.length - 2]['ID'];
    this.charts.find(x => x.ID === e.key)['ID'] = lastRowID + 1;
    this.parentRowID = undefined;
    this.createChildRows(lastRowID + 1);
    // this.chartService.createChart();
  }

  axeRowInserted(e) {
    let length = this.axes.length;
    let newAxeTitle = this.axes[length - 1]['Title'];
    this.axesTitle.push(newAxeTitle);
  }

  count = 0;
  axeEditorPreparing(e) {
    if (e.caption === 'Id') {
      if (this.count === 1) {
        e.editorOptions.readOnly = true;
        this.count = 0;
      } else if (this.count === 0) {

        let length = this.axes.length;
        this.count++;
        if (length > 0) {
          e.component.cellValue(0, 'ID', this.axes[length - 1]['ID'] + 1);
        } else {
          e.component.cellValue(0, 'ID', 1);
        }
      }
    }

    else if (e.dataField === 'Position') {
      e.editorName = 'dxSelectBox';
      e.editorOptions.dataSource = this.positions;
      e.editorOptions.value = this.positions[0];
    }
  }

  onSelectionChanged(e, dropDownBoxInstance) {
    //selected variables from dropdown
    this.selectedVariables = e.selectedRowsData;
    let keys = e.selectedRowKeys;
    dropDownBoxInstance.option("value", keys.length > 0 ? keys : null);
  }

  onValueChanged(args, setValueMethod) {
    setValueMethod(args.value);
  }

  cancelEditData(e) {

  }
}
