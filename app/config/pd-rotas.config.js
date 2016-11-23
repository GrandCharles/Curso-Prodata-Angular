/**
 * Created by GrandCharles on 19/11/2016.
 */
angular.module('pdApp').config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {

    var cadastroCarro = {
        name:'cadastroCarro ',
        url:'/cadastro-carro',
        templateUrl:'app/views/carro/cadastro-carro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/carro/cadastro-carro.controller.js');
            }
        }
    };

    var pesquisaCarro = {
        name:'pesquisaCarro',
        url:'/pesquisa-carro',
        templateUrl:'app/views/carro/pesquisa-carro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/carro/pesquisa-carro.controller.js');
            }
        }
    };

    $stateProvider
        .state('cadastroCarro', cadastroCarro)
        .state('pesquisaCarro', pesquisaCarro)
}