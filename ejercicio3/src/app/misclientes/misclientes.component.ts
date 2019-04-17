import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'misclientes',
  templateUrl: './misclientes.component.html',
  styleUrls: ['./misclientes.component.sass']
})
export class MisclientesComponent implements OnInit {
  misclientes;
  misclientes: any;
    this.misclientes = new Array();
    this.misclientes.push({});
    this.misclientes.push({});
	ngOnInit(){}
  }
   var client = class client {
   constructor(nombre, direccion) {
    this.nombre = nombre;
    this.direccion = direccion;
	}
  }