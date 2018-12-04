import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Boiler, BoilersService } from './boilers.service';
import { DxTreeListComponent } from 'devextreme-angular';

@Component({
  selector: 'app-boilers',
  templateUrl: './boilers.component.html',
  styleUrls: ['./boilers.component.css'],
  providers: [BoilersService]
})
export class BoilersComponent implements OnInit, AfterViewInit {
  boilers: Boiler[] = [];
  childRowsKeys: number[];
  rowForNewBrand: boolean = false;
  parentRowId: number;
  loading = false;
  count = 0;
  success = false;
  error = false;
  msg = '';

  @ViewChild('targetDataGrid') dataGrid: DxTreeListComponent;

  constructor(private boilersService: BoilersService) {
    this.boilersService.getBoilers().subscribe(
      boilers => {
        for (var i = 0; i < boilers.length; i++) {
          if (this.boilers.findIndex(x => x.Brand === boilers[i].Brand) < 0) {
            ++this.count;
            this.parentRowId = this.createParentRow(boilers[i]);
          }
          ++this.count;
          this.createChildRow(boilers[i].Family, boilers[i].Model);
        }
        this.dataGrid.instance.endCustomLoading();
      }, error => {
        this.dataGrid.instance.endCustomLoading();
        this.msg = error.message;
        this.error = true;
        this.success = false;
      });
  }

  ngOnInit() {
    this.getChildRowsKeys(this.boilers);
  }

  ngAfterViewInit(): void {
    this.dataGrid.instance.beginCustomLoading('Loading...');
  }

  createParentRow(boiler: Boiler) {
    let parentObj = new Boiler();
    parentObj.Brand = boiler.Brand;
    parentObj.ID = this.count;
    parentObj.Head_ID = 0;
    this.boilers.push(parentObj);
    return parentObj.ID;
  }

  createChildRow(family, model) {
    let childObj = new Boiler();
    childObj.Family = family;
    childObj.Model = model;
    childObj.ID = this.count;
    childObj.Head_ID = this.parentRowId;
    this.boilers.push(childObj);
    this.getChildRowsKeys(this.boilers);
    return childObj.ID;
  }

  getChildRowsKeys(boilers) {
    this.childRowsKeys = [];
    for (var i = 0; i < boilers.length; i++) {
      if (boilers[i]['Head_ID'] !== 0) {
        this.childRowsKeys.push(boilers[i]['ID']);
      }
    }
  }

  cellPrepared(e) {
    if (e.column.command === "edit" && e.rowType === "data") {
      let addLink = e.cellElement.querySelector(".dx-link-add");
      if (addLink) {
        addLink.remove();
      }
      if (e.data.Head_ID === 0) {
        e.data.Family = '';
        e.data.Model = '';
      }
    }
  }

  rowInserted(e) {
    this.boilers.splice(this.boilers.length - 1, 1);
    if (this.boilers.findIndex(x => x.Brand === e.data.Brand && ((x.Family !== e.data.Family && x.Family !== '') || (x.Model !== e.data.Model && x.Model !== ''))) < 0) {
      this.parentRowId = this.boilers.find(x => x.Brand === e.data.Brand)['ID'];
      ++this.count;
      this.createChildRow(e.data.Family, e.data.Model);
    }
    this.dataGrid.instance.beginCustomLoading('Loading...');
    this.boilersService.createBrand(e.data).subscribe(res => {
      this.dataGrid.instance.endCustomLoading();
      this.success = true;
      this.error = false;
    }, error => {
      this.dataGrid.instance.endCustomLoading();
      this.msg = error.message;
      this.success = false;   
      this.error = true;   
    });
  }
}
