import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type AlertType = 'success' | 'danger' | 'warning' | 'info';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  // Alert 类型
  @Input() public type: AlertType = 'info';

  // 是否显示图标，用于支持用户自定义图标
  @Input() public showIcon: boolean = true;

  // 是否可关闭
  @Input() public closeable: boolean = false;

  // 关闭回调
  @Output() public clonseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public hid: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public close(): void {
    this.clonseEvent.emit(true);
    this.hid = true;
  }

}
