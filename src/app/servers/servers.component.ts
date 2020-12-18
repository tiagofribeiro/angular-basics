import { Component, OnInit } from '@angular/core';

// template: interface aplicada diretamente
@Component({
  // selector: '[app-servers]',  // permite selecionar o componente através de atributos
  // selector: '.app-servers',   // e através de classes
  selector: 'app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
