import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'condicionales',
  templateUrl: './condicionales.component.html',
  styleUrls: ['./condicionales.component.sass']
})
export class CondicionalesComponent implements OnInit {
  condicionales;
  condicionales: any;
    this.condicionales = new Array();
    this.condicionales.push({});
    this.condicionales.push({});
	ngOnInit(){}
  }
   var condvar = true 