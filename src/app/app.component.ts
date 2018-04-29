import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elem',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() title: string;

  zone: string;

  ngOnInit() {
    this.zone = (window as any).Zone.current.name;
  }
}
