/**
 * Created by bruno on 04/05/16.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './timeline.html';

class TimelineCtrl {
    constructor() {
        this.messages = [{
            text: 'Mensagem 1'
        }, {
            text: 'Mensagem 2'
        }, {
            text: 'Mensagem 3'
        }];
    }
}

export default angular.module('timeline', [
    angularMeteor
    ])
    .component('timeline', {
        templateUrl: 'imports/components/timeline/timeline.html',
        controller: TimelineCtrl
    });