import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class AlertComponent {
    constructor() {
        // Alert 类型
        this.type = 'info';
        // 是否显示图标，用于支持用户自定义图标
        this.showIcon = true;
        // 是否可关闭
        this.closeable = false;
        // 关闭回调
        this.clonseEvent = new EventEmitter();
        this.hid = false;
    }
    ngOnInit() {
    }
    close() {
        this.clonseEvent.emit(true);
        this.hid = true;
    }
}
AlertComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AlertComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: AlertComponent, selector: "lib-alert", inputs: { type: "type", showIcon: "showIcon", closeable: "closeable" }, outputs: { clonseEvent: "clonseEvent" }, ngImport: i0, template: "<div class=\"devui-alert devui-alert-{{type}}\" *ngIf=\"!hid\">\n  <button type=\"button\" class=\"devui-close\" (click)=\"close()\" *ngIf=\"closeable\"></button>\n  <span class=\"devui-alert-icon icon-{{type}}\" *ngIf=\"showIcon\">\u25CB</span>\n  <ng-content></ng-content>\n</div>\n", styles: [":host{display:block}.devui-alert{color:#000;font-size:16px;border:1px solid transparent;padding:8px 16px;line-height:24px;border-radius:2px;word-break:normal;word-wrap:break-word}.devui-alert .devui-close{color:#000;opacity:1;line-height:26px;height:24px}.devui-alert .devui-close>svg path{fill:#000}.devui-alert .devui-close span{color:#000;font-size:16px;font-weight:bold}.devui-alert.devui-alert-success{background-color:light-green;border-color:green;color:#000}.devui-alert.devui-alert-success .devui-close>svg path{fill:green}.devui-alert.devui-alert-info{background-color:#ff0;border-color:#000;color:#000}.devui-alert.devui-alert-info .devui-close>svg path{fill:#000}.devui-alert.devui-alert-warning{background-color:red;border-color:#000;color:#000}.devui-alert.devui-alert-warning .devui-close>svg path{fill:#000}.devui-alert.devui-alert-danger{background-color:red;border-color:red;color:#000}.devui-alert.devui-alert-danger .devui-close>svg path{fill:red}.devui-alert.devui-alert-simple{border-color:#000;color:#000}.devui-alert.devui-alert-simple .devui-close>svg path{fill:#000}.devui-alert svg.devui-icon{width:16px;height:16px;vertical-align:middle;transform:translateY(-1px)}.devui-alert .devui-icon.devui-icon-success>g path{fill:green}.devui-alert .devui-icon.devui-icon-success>g polygon{fill:#000;stroke:#000}.devui-alert .devui-icon.devui-icon-warning>g path.devui-icon-warning-outer{fill:#000}.devui-alert .devui-icon.devui-icon-warning>g path.devui-icon-warning-inner{fill:#000;stroke:#000}.devui-alert .devui-icon.devui-icon-info>g path.devui-icon-info-outer{fill:#000}.devui-alert .devui-icon.devui-icon-info>g path.devui-icon-info-inner{fill:#000;stroke:#000}.devui-alert .devui-icon.devui-icon-error>g path.devui-icon-error-outer{fill:red}.devui-alert .devui-icon.devui-icon-error>g path.devui-icon-error-inner{fill:#000;stroke:#000}.devui-alert-icon{margin-right:4px}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-alert',
                    templateUrl: './alert.component.html',
                    styleUrls: ['./alert.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                type: Input
            }], showIcon: [{
                type: Input
            }], closeable: [{
                type: Input
            }], clonseEvent: [{
                type: Output
            }] } });

class AlertModule {
}
AlertModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlertModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AlertModule, declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] });
AlertModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AlertModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        AlertComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [AlertComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AlertComponent, AlertModule };
//# sourceMappingURL=my-lib-lib-alert.js.map
