/**
 * Created by GrandCharles on 14/11/2016.
 */
(function () {
    'use strict';

    angular.module('pdApp',
        [
            'ngMessages',         /** Exibir mensagens de erro,validação etc de formulário . */
            'ngAnimate',          /** Dar animações no Angularjs*/
            'toastr',             /** Biblioteca para notificações, alertas personalizada*/
            'ui.grid',            /** Componente de Grid*/
            'ngMaterial',         /** Biblioteca baseada em AngularJS que provê components baseados em Material Design */
            'ui.router',          /** Roteamento baseado em url */
            'oc.lazyLoad',        /** Gerenciamento de carga de formulário */
            'br.cidades.estados', /** Cidade e estados **/
            'LocalStorageModule',  /** **/
            'angular-loading-bar'  /** Barra de progressão**/
        ]);

})();



