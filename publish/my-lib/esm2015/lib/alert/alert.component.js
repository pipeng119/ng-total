import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class AlertComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXktbGliL2xpYi9hbGVydC9hbGVydC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1saWIvbGliL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVMvRSxNQUFNLE9BQU8sY0FBYztJQWdCekI7UUFkQSxXQUFXO1FBQ0ssU0FBSSxHQUFjLE1BQU0sQ0FBQztRQUV6QyxxQkFBcUI7UUFDTCxhQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpDLFFBQVE7UUFDUSxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNDLE9BQU87UUFDVSxnQkFBVyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBRTNFLFFBQUcsR0FBWSxLQUFLLENBQUM7SUFFWixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRU0sS0FBSztRQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7OzJHQXhCVSxjQUFjOytGQUFkLGNBQWMsa0tDVDNCLDhSQUtBOzJGRElhLGNBQWM7a0JBTDFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7b0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2lCQUN0QzswRUFJaUIsSUFBSTtzQkFBbkIsS0FBSztnQkFHVSxRQUFRO3NCQUF2QixLQUFLO2dCQUdVLFNBQVM7c0JBQXhCLEtBQUs7Z0JBR1csV0FBVztzQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgQWxlcnRUeXBlID0gJ3N1Y2Nlc3MnIHwgJ2RhbmdlcicgfCAnd2FybmluZycgfCAnaW5mbyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hbGVydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FsZXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIEFsZXJ0IOexu+Wei1xuICBASW5wdXQoKSBwdWJsaWMgdHlwZTogQWxlcnRUeXBlID0gJ2luZm8nO1xuXG4gIC8vIOaYr+WQpuaYvuekuuWbvuagh++8jOeUqOS6juaUr+aMgeeUqOaIt+iHquWumuS5ieWbvuagh1xuICBASW5wdXQoKSBwdWJsaWMgc2hvd0ljb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vIOaYr+WQpuWPr+WFs+mXrVxuICBASW5wdXQoKSBwdWJsaWMgY2xvc2VhYmxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8g5YWz6Zet5Zue6LCDXG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xvbnNlRXZlbnQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwdWJsaWMgaGlkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb25zZUV2ZW50LmVtaXQodHJ1ZSk7XG4gICAgdGhpcy5oaWQgPSB0cnVlO1xuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJkZXZ1aS1hbGVydCBkZXZ1aS1hbGVydC17e3R5cGV9fVwiICpuZ0lmPVwiIWhpZFwiPlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRldnVpLWNsb3NlXCIgKGNsaWNrKT1cImNsb3NlKClcIiAqbmdJZj1cImNsb3NlYWJsZVwiPjwvYnV0dG9uPlxuICA8c3BhbiBjbGFzcz1cImRldnVpLWFsZXJ0LWljb24gaWNvbi17e3R5cGV9fVwiICpuZ0lmPVwic2hvd0ljb25cIj7il4s8L3NwYW4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19