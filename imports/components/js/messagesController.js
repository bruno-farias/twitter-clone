import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from '../views/list.html';

class MessagesCtrl {
    constructor() {
        this.messages = [{
            text: 'mensagem 1'
        },{
            text: 'mensagem 2'
        },{
            text: 'mensagem 3'
        }];
    }
}

export default angular.module('messages', [
    angularMeteor
])
.component('messages', {
    templateUrl: 'imports/components/views/list.html',
    controller: MessagesCtrl
})