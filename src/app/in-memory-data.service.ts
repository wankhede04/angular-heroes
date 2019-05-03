import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      {id: 11, name: 'Walter', profession: 'Chemist'},
      {id: 12, name: 'CapCook', profession: 'Salesman'},
      {id: 13, name: 'Hank', profession: 'Cop'},
      {id: 14, name: 'Gus', profession: 'Mafia'},
      {id: 15, name: 'Sherlock', profession: 'Detective'},
      {id: 16, name: 'Salamanca', profession: 'Farmer'},
      {id: 17, name: 'Tuco', profession: 'Agent'},
      {id: 18, name: 'George', profession: 'Diplomat'},
      {id: 19, name: 'Travis', profession: 'Music'},
      {id: 20, name: 'David', profession: 'Director'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  
}
