import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {
  @Input() items: any;
  @Output() itemClick: EventEmitter<string> = new EventEmitter();

  opened = false;
  position: any;

  constructor() {}

  ngOnInit(): void {}

  open($event: any): void {
    $event.preventDefault();

    this.opened = true;

    this.position = {
      top: `${$event.layerY}px`,
      left: `${$event.layerX}px`
    };
  }

  @HostListener('document:click')
  close(): void {
    this.opened = false;
    this.position = null;
  }

  onItemClick($event: any, action: string): void {
    $event.preventDefault();

    this.itemClick.emit(action);
  }
}
