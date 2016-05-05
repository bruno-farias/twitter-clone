/**
 * Created by bruno on 04/05/16.
 */
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Messages } from '../../api/messages'

import template from './timeline.html';


class TimelineCtrl {
    constructor($scope) {
        $scope.viewModel(this);

        this.helpers({
            messages() {
                return Messages.find({}, {
                    sort: {
                        createdAt: -1
                    }
                });
            }
        })
    }

    addMessage(newMessage) {
        //Insert a new message to database
        Messages.insert({
            text: newMessage,
            createdAt: new Date
        });

        //Clear form
        this.newMessage = '';
    }

}

export default angular.module('timeline', [
    angularMeteor
    ])
    .component('timeline', {
        templateUrl: 'imports/components/timeline/timeline.html',
        controller: ['$scope', TimelineCtrl]
    });