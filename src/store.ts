import { observable, useStrict, action} from 'mobx';
import './common/arrayplus';
import cefiti from './cefiti/store';
import pviaStore from './pvia/store';
import quarent from './quarent/store';

useStrict(true);

class Ui {

  @observable searchValue: string = '';
  @observable source: any[] = [];
  @observable field: string = '';
  @observable store: string = '';

  @action changeSearchValue = (text: string) => {this.searchValue = text; console.log(text); }
  @action cleanSearchValue = () => {this.searchValue = ''; }

}

let ui = new Ui();

export let store = {
  cefiti,
  pviaStore,
  quarent,
  ui
};

export default store;
