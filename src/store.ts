import { observable, useStrict, action} from 'mobx';
import './common/arrayplus'
import cefiti from './cefiti/store'
import pvia from './pvia/store'
import quarent from './quarent/store'


useStrict(true)

class Ui {

  @observable searchValue = ''
  @observable source = []
  @observable field = ''
  @observable store = ''

  @action changeSearchValue = (text) => {this.searchValue = text; console.log(text)}
  @action cleanSearchValue = () => {this.searchValue = ''}

}

var ui = new Ui();

var store = {
  cefiti,
  pvia,
  quarent,
  ui
}


export default store;