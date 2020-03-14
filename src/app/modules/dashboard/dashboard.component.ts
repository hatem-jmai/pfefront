import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

export interface PeriodicElement {
 
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


 

  constructor(private dashboardService: DashboardService,private router:Router) { }

  ngOnInit() {
   
  }

   suivant(){
this.router.navigateByUrl('/dashboard/noteM');

}

}
