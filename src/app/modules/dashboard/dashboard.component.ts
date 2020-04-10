import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import * as jspdf from 'jspdf';
import html2canvas from  'html2canvas' ;

export interface PeriodicElement {
 
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {



  constructor(private router:Router) { }

  ngOnInit() {
   
  }

   suivant(){
    this.router.navigateByUrl('/dashboard/noteM');
}

captureScreen()  
{  console.log("ahla")
  var data = document.getElementById('contentToConvert');  
  html2canvas(data).then(canvas => {  
    // Few necessary setting options  
    var imgWidth = 208;   
    var pageHeight = 295;    
    var imgHeight = canvas.height * imgWidth / canvas.width;  
    var heightLeft = imgHeight;  

    const contentDataURL = canvas.toDataURL('image/png')  
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
    var position = 0;  
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
    pdf.save('MYPdf.pdf'); // Generated PDF   
  });  
}  

}
