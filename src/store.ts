import { observable, computed, autorun, useStrict, action, toJS} from 'mobx';
import './common/arrayplus'
import cefiti from './cefiti/store'




useStrict(true)

class Ui {

@observable searchValue = ''
@observable source = ''
@observable field = ''
@observable store = ''

}

export var ui = new Ui();

var store = {
  cefiti,
  ui
}


export default {store};