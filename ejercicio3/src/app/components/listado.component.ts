import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {
  listado;
  listado: any;
    this.listado = new Array();
    this.listado.push({text: "Yoga"});
    this.listado.push({text: "Tai-Chi"});
	ngOnInit(){}
  }