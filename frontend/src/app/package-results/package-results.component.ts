import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DefaultService, PackageMetadata } from 'generated';
import { PackageQuery } from 'generated';
@Component({
  selector: 'app-package-results',
  templateUrl: './package-results.component.html',
  styleUrls: ['./package-results.component.scss']
})
export class PackageResultsComponent implements OnInit {
  @Input() name?: string;
  @Input() version?: string;
  @Input() regex?: string;

  packages!: PackageMetadata[];

  constructor (private route: ActivatedRoute, private service: DefaultService, private _snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.searchByNameVersion()
  }
  searchByNameVersion() {
    var query:PackageQuery
    if (this.name && this.version) {
      query = {Name: this.name, Version: this.version}
    } else if (this.name) {
      query = {Name: this.name}
    } else {
      query = {Name: "*"}
    }
 
    var queries = [query]

    this.service.packagesList(queries, "").subscribe(body => {
      this.packages = body;
      console.log(this.packages);
      this._snackbar.dismiss()
    }, error => {
      this._snackbar.open(error.message)
    })
    // TODO: Deal with pagination
  }

  rate(id: string) {
    this.service.packageRate(id, "").subscribe(body => {
      console.log("Rating: ", id)
      console.log("Reponse: ", body)
    }, error => {
      this._snackbar.open(error.message, "ok")
      //this._snackbar.open()
    })
  }

  delete(id: string) {
    this.service.packageDelete("", id).subscribe(body => {
      console.log("Deleting: ", id)
      console.log("Reponse: ", id)
    }, error => {
      this._snackbar.open(error.message, "ok")
    })
  }

  //TODO: LATER
  searchByRegex(regex: string) {
  }
}

