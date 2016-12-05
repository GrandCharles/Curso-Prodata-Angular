/**
 * Created by GrandCharles on 03/12/2016.
 */
(function () {
    angular.module('pdApp').config('LoadingConfig', LoadingConfig);

    directiveName.$inject = ['cfpLoadingBarProvider'];

    /* @ngInject */
    function LoadingConfig(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner=false;
    }

})();


