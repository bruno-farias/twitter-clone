import angular from 'angular';
import angularMeteor from 'angular-meteor';
import timelineCtrl from '../imports/components/timeline/timeline';

angular.module('twitter-clone', [
    angularMeteor,
    timelineCtrl.name
]);