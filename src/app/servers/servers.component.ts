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
  serverName: string = '';
  serverCreated: boolean = false;
  allowNewServer: boolean = false;
  servers = ['Testserver','Testserver 2']
  serverCreationStatus: string = 'No server was created.';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name: ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    // (<HTMLInputElement>.event.target).value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
