/**
 * Created by GrandCharles on 03/12/2016.
 */

(function () {
    angular.module('pdApp').service('PessoaService', PessoaService);

    directiveName.$inject = ['$q', '$http'];

    /* @ngInject */
    function PessoaService($q, $http) {
        this.pesquisaFotos = pesquisaFotos;

        function pesquisaFotos(){
            var listaFotos1, listaFotos2;
            var deferred = $q.defer();

            $http.get('https://jsonplacehouder.typicode.com/photos').then(onPesquisar1Result, onPesquisarFault);
            $http.get('https://jsonplacehouder.typicode.com/photos').then(onPesquisar2Result, onPesquisarFault);

            return deferred.promise;

            function onPesquisar1Result(response){
                listaFotos1 = response.data;

                resolverPromisse();
            }

            function onPesquisar2Result(response){
                listaFotos2 = response.data;

                resolverPromisse();
            }

            function onPesquisarFault(rejection){
                deferred.reject(rejection);
            }


            function resolverPromisse(){
                if(listaFotos1 && listaFotos2){
                    var lista = listaFotos1.merge(listaFotos2);
                    deferred.resolve(lista);
                }

            }
        }



    }
})();


