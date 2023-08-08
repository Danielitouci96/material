import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export const CONDITIONS_LIST = [
  /* { value: "nono", label: "Nono" }, */
  { value: "is-empty", label: "Vacio" },
  { value: "is-not-empty", label: "No vacio" },
  { value: "is-equal", label: "Igual" },
  { value: "is-not-equal", label: "Diferente" }
];

export const CONDITIONS_FUNCTIONS = { // search method base on conditions list value
  "is-empty": function (value: string, filterdValue: any) {
    return value === "";
  },
  "is-not-empty": function (value: string, filterdValue: any) {
    return value !== "";
  },
  "is-equal": function (value: any, filterdValue: any) {
    return value == filterdValue;
  },
  "is-not-equal": function (value: any, filterdValue: any) {
    return value != filterdValue;
  }
};

@Component({
  selector: 'app-column-filter',
  templateUrl: './column-filter.component.html',
  styleUrls: ['./column-filter.component.css']
})
export class ColumnFilterComponent implements OnInit {

  conditionsList = CONDITIONS_LIST;
  searchValue: any = {};
  searchCondition: any = {};
  private _filterMethods = CONDITIONS_FUNCTIONS;

  dataSource: MatTableDataSource<any> = this.datos.data


//DialogOverviewExampleDialog
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public datos: any,) { }

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: any, filter: any) => {
      let result = true;
      let keys = Object.keys(filter.conditions); // keys of the search conditions

      for (const key of keys) {
        let searchCondition = filter.conditions[key]; // get search filter method

        if (searchCondition && searchCondition !== 'none') {
          let value = data[key].toString().toLowerCase(); // convert value to lowercase
          let searchValue = filter.values[key].toString().toLowerCase(); // convert search value to lowercase
          let method = filter.methods[searchCondition]; // get search filter method

          if (method) {
            result = method(value, searchValue); // invoke search filter
          }

          if (!result) {
            break;
          }
        }
      }

      return result;
    };
  }


  applyFilterMultiply() {
    let searchFilter: any = {
      values: this.searchValue,
      conditions: this.searchCondition,
      methods: this._filterMethods
    }
    console.log(searchFilter);


    this.dataSource.filter = searchFilter;
    this.dialogRef.close();
  }

  clearColumn(columnKey: string): void {
    this.searchValue[columnKey] = null;
    this.searchCondition[columnKey] = 'none';
    this.applyFilterMultiply();
    this.dialogRef.close();
  }

}
