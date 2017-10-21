import { observable, computed, action, useStrict} from 'mobx';
import {quarentDb, quarent} from './quarentDb';
import './../common/arrayplus';

useStrict(true);

class Store {
  db:quarent[] = quarentDb;

  listaPest: string[] = []; //this.db.unique('Pest').sort((a, b) => a.localeCompare(b));

  @observable dados = {Pest: '' };

  @computed get empty(): boolean { return (this.result.length === 0)}
  //@computed get completed():boolean { return (Boolean(this.dados.prod) && Boolean(this.dados.orig) && Boolean(this.dados.gen) && 
  //  Boolean(this.dados.esp))}
  @computed get result(): quarent[] { return this.db.filter((row: quarent) => {return  row.Pest === this.dados.Pest; })}


  @action handleChanges = (event) => {
    console.log('handleChanges', event)
    store.dados[event.target.name] = event.target.value;
  }

  @action clean () {
    this.dados.Pest = '';
  };

}

export var store: Store = new Store();
export default store;