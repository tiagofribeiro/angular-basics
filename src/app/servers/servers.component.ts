import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',  // permite selecionar o componente através de atributos
  // selector: '.app-servers',   // e através de classes
  selector: 'app-servers',
  // template: `                 // permite adicionar o estilo diretamente ao decorator
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

}
