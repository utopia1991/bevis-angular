import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

const HEROES: Hero[] = [
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

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<h2>我们的英雄们</h2>
		<ul class="heroes">
			<li *ngFor="let hero of heroes"
				[class.selected]="hero === selectedHero"
				(click)="onSelect(hero)">
				<span class="badge">{{hero.id}}</span> {{hero.name}}
			</li>
		</ul>
		<div *ngIf="selectedHero" class='heroDetails'>
			<h2>{{selectedHero.name}} - 简介</h2>
			<p>
				<label>ID 号: </label>{{selectedHero.id}}
			</p>
			<p>
				<label>名字: </label>
				<input [(ngModel)]="selectedHero.name" placeholder="name"/>
			</p>
		</div>
	`,
	styles: [`
		.selected {
			background-color: #CFD8DC !important;
			color: white;
		}
		.heroes {
			margin: 0 0 2em 0;
			list-style-type: none;
			padding: 0;
			width: 15em;
		}
		.heroes li {
			cursor: pointer;
			position: relative;
			left: 0;
			background-color: #EEE;
			margin: .5em;
			padding: .3em 0;
			height: 1.6em;
			border-radius: 4px;
			box-shadow: 5px 5px 10px #ccc;
		}
		.heroes li.selected:hover {
			background-color: #BBD8DC !important;
			color: white;
		}
		.heroes li:hover {
			color: #607D8B;
			background-color: #DDD;
			left: .1em;
		}
		.heroes .text {
			position: relative;
			top: -3px;
		}
		.heroes .badge {
			display: inline-block;
			font-size: small;
			color: white;
			padding: 0.8em 0.7em 0 0.7em;
			background-color: #607D8B;
			line-height: 1em;
			position: relative;
			left: -1px;
			top: -4px;
			height: 1.8em;
			margin-right: .8em;
			border-radius: 4px 0 0 4px;
		}
		.heroDetails {
			width: 15em;
			background-color: #eee;
			margin: .5em;
			padding: 1em;
			border-radius: 4px;
			box-shadow: 5px 5px 10px #ccc;
		}
	`]
})

export class AppComponent {
	title = '英雄的旅途';
	heroes = HEROES;
	selectedHero: Hero;
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}
