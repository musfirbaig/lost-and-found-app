import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-side-panel',
  templateUrl: './user-side-panel.component.html',
  styleUrls: ['./user-side-panel.component.css']
})
export class UserSidePanelComponent implements OnInit {
  @Output() btnSelector = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  myReportedItems(){
    this.btnSelector.emit(1);
  }
  reportLostItem() {
    this.btnSelector.emit(2);
  }
  reportFoundItem(){
    this.btnSelector.emit(3);
  }

}
