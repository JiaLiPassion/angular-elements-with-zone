import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-elem',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() title: string;
  @Output() update = new EventEmitter();

  count: number = 0;
  zone: string;

  ngOnInit() {
    this.zone = (window as any).Zone.current.name;
  }

  onClick() {
    this.title = 'updated' + this.count++ + this.title;
    this.update.emit(this.title);
  }
}
