/**
 * Created by GrandCharles on 03/12/2016.
 */
(function () {

    angular.module('pdApp').service('pdSuperCrudService', pdSuperCrudService);

    directiveName.$inject = ['$http', '$q', 'AlertService'];

    /* @ngInject */
    function pdSuperCrudService($http, $q, AlertService) {


        function excluir() {
            var isExcluir = onAntesExcluir();
            if (isExcluir == false) {
                return $q.reject();
            }

            var deffered = $q.defer();

            /** BackEnd**/
            $http.delete().then(excluirResult, excluirDefault);

        }
    }


})();

