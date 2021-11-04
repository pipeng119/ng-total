(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('my-lib', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["my-lib"] = {}, global.ng.core, global.ng.common));
})(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var AlertComponent = /** @class */ (function () {
        function AlertComponent() {
            // Alert 类型
            this.type = 'info';
            // 是否显示图标，用于支持用户自定义图标
            this.showIcon = true;
            // 是否可关闭
            this.closeable = false;
            // 关闭回调
            this.clonseEvent = new i0.EventEmitter();
            this.hid = false;
        }
        AlertComponent.prototype.ngOnInit = function () {
        };
        AlertComponent.prototype.close = function () {
            this.clonseEvent.emit(true);
            this.hid = true;
        };
        return AlertComponent;
    }());
    AlertComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AlertComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    AlertComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: AlertComponent, selector: "lib-alert", inputs: { type: "type", showIcon: "showIcon", closeable: "closeable" }, outputs: { clonseEvent: "clonseEvent" }, ngImport: i0__namespace, template: "<div class=\"devui-alert devui-alert-{{type}}\" *ngIf=\"!hid\">\n  <button type=\"button\" class=\"devui-close\" (click)=\"close()\" *ngIf=\"closeable\"></button>\n  <span class=\"devui-alert-icon icon-{{type}}\" *ngIf=\"showIcon\">\u25CB</span>\n  <ng-content></ng-content>\n</div>\n", styles: [":host{display:block}.devui-alert{color:#000;font-size:16px;border:1px solid transparent;padding:8px 16px;line-height:24px;border-radius:2px;word-break:normal;word-wrap:break-word}.devui-alert .devui-close{color:#000;opacity:1;line-height:26px;height:24px}.devui-alert .devui-close>svg path{fill:#000}.devui-alert .devui-close span{color:#000;font-size:16px;font-weight:bold}.devui-alert.devui-alert-success{background-color:light-green;border-color:green;color:#000}.devui-alert.devui-alert-success .devui-close>svg path{fill:green}.devui-alert.devui-alert-info{background-color:#ff0;border-color:#000;color:#000}.devui-alert.devui-alert-info .devui-close>svg path{fill:#000}.devui-alert.devui-alert-warning{background-color:red;border-color:#000;color:#000}.devui-alert.devui-alert-warning .devui-close>svg path{fill:#000}.devui-alert.devui-alert-danger{background-color:red;border-color:red;color:#000}.devui-alert.devui-alert-danger .devui-close>svg path{fill:red}.devui-alert.devui-alert-simple{border-color:#000;color:#000}.devui-alert.devui-alert-simple .devui-close>svg path{fill:#000}.devui-alert svg.devui-icon{width:16px;height:16px;vertical-align:middle;transform:translateY(-1px)}.devui-alert .devui-icon.devui-icon-success>g path{fill:green}.devui-alert .devui-icon.devui-icon-success>g polygon{fill:#000;stroke:#000}.devui-alert .devui-icon.devui-icon-warning>g path.devui-icon-warning-outer{fill:#000}.devui-alert .devui-icon.devui-icon-warning>g path.devui-icon-warning-inner{fill:#000;stroke:#000}.devui-alert .devui-icon.devui-icon-info>g path.devui-icon-info-outer{fill:#000}.devui-alert .devui-icon.devui-icon-info>g path.devui-icon-info-inner{fill:#000;stroke:#000}.devui-alert .devui-icon.devui-icon-error>g path.devui-icon-error-outer{fill:red}.devui-alert .devui-icon.devui-icon-error>g path.devui-icon-error-inner{fill:#000;stroke:#000}.devui-alert-icon{margin-right:4px}\n"], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AlertComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-alert',
                        templateUrl: './alert.component.html',
                        styleUrls: ['./alert.component.scss']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { type: [{
                    type: i0.Input
                }], showIcon: [{
                    type: i0.Input
                }], closeable: [{
                    type: i0.Input
                }], clonseEvent: [{
                    type: i0.Output
                }] } });

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        return AlertModule;
    }());
    AlertModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AlertModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlertModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AlertModule, declarations: [AlertComponent], imports: [i1.CommonModule], exports: [AlertComponent] });
    AlertModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AlertModule, imports: [[
                i1.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AlertModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            AlertComponent
                        ],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [AlertComponent]
                    }]
            }] });

    var MyLibModule = /** @class */ (function () {
        function MyLibModule() {
        }
        return MyLibModule;
    }());
    MyLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: MyLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MyLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: MyLibModule, imports: [i1.CommonModule], exports: [AlertModule] });
    MyLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: MyLibModule, providers: [], imports: [[i1.CommonModule], AlertModule] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: MyLibModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.CommonModule],
                        exports: [AlertModule],
                        providers: []
                    }]
            }] });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AlertComponent = AlertComponent;
    exports.AlertModule = AlertModule;
    exports.MyLibModule = MyLibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=my-lib.umd.js.map
