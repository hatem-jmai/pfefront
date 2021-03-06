import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as jspdf from 'jspdf';
import html2canvas from  'html2canvas' ;
import { from } from 'rxjs';

@Component({
  selector: 'app-notemission',
  templateUrl: './notemission.component.html',
  styleUrls: ['./notemission.component.scss']
})
export class NotemissionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  suivant(){
    this.router.navigateByUrl('/dashboard/fiche');
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
