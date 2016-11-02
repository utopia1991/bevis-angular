"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 1, name: '路飞' },
    { id: 2, name: '索隆' },
    { id: 3, name: '山治' },
    { id: 4, name: '乌索普' },
    { id: 5, name: '娜美' },
    { id: 6, name: '乔巴' },
    { id: 7, name: '罗宾' },
    { id: 8, name: '弗兰克' },
    { id: 9, name: '布鲁克' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = '英雄的旅途';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t<h2>\u6211\u4EEC\u7684\u82F1\u96C4\u4EEC</h2>\n\t\t<ul class=\"heroes\">\n\t\t\t<li *ngFor=\"let hero of heroes\"\n\t\t\t\t[class.selected]=\"hero === selectedHero\"\n\t\t\t\t(click)=\"onSelect(hero)\">\n\t\t\t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t\t</li>\n\t\t</ul>\n\t\t<div *ngIf=\"selectedHero\" class='heroDetails'>\n\t\t\t<h2>{{selectedHero.name}} - \u7B80\u4ECB</h2>\n\t\t\t<p>\n\t\t\t\t<label>ID \u53F7: </label>{{selectedHero.id}}\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<label>\u540D\u5B57: </label>\n\t\t\t\t<input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n\t\t\t</p>\n\t\t</div>\n\t",
            styles: ["\n\t\t.selected {\n\t\t\tbackground-color: #CFD8DC !important;\n\t\t\tcolor: white;\n\t\t}\n\t\t.heroes {\n\t\t\tmargin: 0 0 2em 0;\n\t\t\tlist-style-type: none;\n\t\t\tpadding: 0;\n\t\t\twidth: 15em;\n\t\t}\n\t\t.heroes li {\n\t\t\tcursor: pointer;\n\t\t\tposition: relative;\n\t\t\tleft: 0;\n\t\t\tbackground-color: #EEE;\n\t\t\tmargin: .5em;\n\t\t\tpadding: .3em 0;\n\t\t\theight: 1.6em;\n\t\t\tborder-radius: 4px;\n\t\t\tbox-shadow: 5px 5px 10px #ccc;\n\t\t}\n\t\t.heroes li.selected:hover {\n\t\t\tbackground-color: #BBD8DC !important;\n\t\t\tcolor: white;\n\t\t}\n\t\t.heroes li:hover {\n\t\t\tcolor: #607D8B;\n\t\t\tbackground-color: #DDD;\n\t\t\tleft: .1em;\n\t\t}\n\t\t.heroes .text {\n\t\t\tposition: relative;\n\t\t\ttop: -3px;\n\t\t}\n\t\t.heroes .badge {\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: small;\n\t\t\tcolor: white;\n\t\t\tpadding: 0.8em 0.7em 0 0.7em;\n\t\t\tbackground-color: #607D8B;\n\t\t\tline-height: 1em;\n\t\t\tposition: relative;\n\t\t\tleft: -1px;\n\t\t\ttop: -4px;\n\t\t\theight: 1.8em;\n\t\t\tmargin-right: .8em;\n\t\t\tborder-radius: 4px 0 0 4px;\n\t\t}\n\t\t.heroDetails {\n\t\t\twidth: 15em;\n\t\t\tbackground-color: #eee;\n\t\t\tmargin: .5em;\n\t\t\tpadding: 1em;\n\t\t\tborder-radius: 4px;\n\t\t\tbox-shadow: 5px 5px 10px #ccc;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map