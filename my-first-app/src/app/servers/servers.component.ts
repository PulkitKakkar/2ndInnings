import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = '';
  serverName = '';
  userName = '';
  servers = ['testServer'];

  displayDetails = true;
  hits = [];
  counter = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

  onServerCreation() {
    this.serverCreationStatus = "Sever was created, i.e " + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdatingUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
 
  onButtonClick() {
    this.userName = '';
  }

  onClickDD() {
    this.displayDetails = !this.displayDetails
    this.hits.push(this.hits.length + 1);
    return !this.displayDetails;
  }

  getColor() {
    if (this.counter > 5) {
      return 'blue';
    }else{
      return 'white';
    }
  }
}
