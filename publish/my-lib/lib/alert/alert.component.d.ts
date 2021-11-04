import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare type AlertType = 'success' | 'danger' | 'warning' | 'info';
export declare class AlertComponent implements OnInit {
    type: AlertType;
    showIcon: boolean;
    closeable: boolean;
    clonseEvent: EventEmitter<boolean>;
    hid: boolean;
    constructor();
    ngOnInit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "lib-alert", never, { "type": "type"; "showIcon": "showIcon"; "closeable": "closeable"; }, { "clonseEvent": "clonseEvent"; }, never, ["*"]>;
}
