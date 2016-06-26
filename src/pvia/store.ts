import { observable, computed, autorun, useStrict, action, toJS} from 'mobx';
import {pviaDb, pvia} from './pviaDb'
import './../common/arrayplus'

useStrict(true)

interface pviaDados {
  orig:string;
  prod:string;
  gen:string;
  esp:string;
}

class Store {
  db:pvia[] = pviaDb;

  listaProd:string[] = this.db.unique('prod').sort((a, b) => a.localeCompare(b));
  listaOrig:string[] = this.db.unique('orig').sort((a, b) => a.localeCompare(b));
  listaGen:string[] = this.db.unique('gen').sort((a, b) => a.localeCompare(b));
  listaEsp:string[] = this.db.unique('esp').sort((a, b) => a.localeCompare(b));
  
  @observable dados:pviaDados = {orig: '', prod: '', gen: '', esp: '' }
  
  @computed get empty():boolean { return (this.result.length === 0)}
  @computed get completed():boolean { return (Boolean(this.dados.prod) && Boolean(this.dados.orig) && Boolean(this.dados.gen) && 
    Boolean(this.dados.esp))}
  @computed get result():pvia[] { return this.db.filter((row:pvia) => {return (
    (Boolean(this.dados.orig) ? (row.orig === this.dados.orig) : true) &&
    (Boolean(this.dados.prod) ? (row.prod === this.dados.prod) : true) &&
    (Boolean(this.dados.gen) ? (row.gen === this.dados.gen) : true) &&
    (Boolean(this.dados.esp) ? (row.esp === this.dados.esp) : true) 
  )})} 

  
  @action handleChanges = (event) => {
    console.log('handleChanges', event)
    store.dados[event.target.name] = event.target.value;
  }

  @action clean () {
    this.dados.prod = '';
    this.dados.orig = '';
    this.dados.gen = '';
    this.dados.esp = '';
  };

}

export var store = new Store();
export default store;