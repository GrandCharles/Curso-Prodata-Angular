/**
 * Created by GrandCharles on 26/11/2016.
 */
(function () {
    'use strict';

    angular.module('pdApp').directive('pdPanel', pdPanel);

    /* @ngInject */
    function pdPanel() {
        return {
            restrict: 'E',
            templateUrl: 'app/directivas/pd-panel/pd-panel.html',
            transclude: {
                header: '?pdPanelHeader',
                body: '?pdPanelBody',
                footer: '?pdPanelFooter'
            },
            scope: {
                classPanel: '@',
                exibirFooter: '=',
                exibirHeader: '='
            },
            link: link
        };

        function link(scope, element, attrs) {
            scope.classPanel = scope.classPanel || 'panel-default';
        }
    }

})();



