/**
 * Created by GrandCharles on 24/11/2016.
 */
angular.module('pdApp').controller('CadastroBairroController', CadastroBairroController);

/* CadastroBairroController.$inject = ['$scope', 'AlertService', '$filter']; */

function CadastroBairroController($scope, $rootScope, $state, alertService, $filter) {
    $scope.entidade = {};
    $rootScope.dadosSalvos = {};
    $scope.listaBairro = $rootScope.listaDados;

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.fechar = fechar;

    $scope.editar = editar;
    $scope.excluir = excluir;

    $scope.consultar = consultar;
    $scope.abrirPag = abrirPag;

    $scope.gridOptions = {
        columnDefs: [
            {name: 'Bairro', field: 'nmBairro', width: 400},
            {name: 'Cidade', field: 'nmCidade', width: 150},
            {name: 'Estado', field: 'nmEstado', width: 150},

            {name: '', field: 'editar', cellTemplate: 'app/template/grid/cell-template-editar.html', width: 35},
            {name: ' ', field: 'excluir', cellTemplate: 'app/template/grid/cell-template-excluir.html', width: 35},
            {name: '  ', field: 'consultar', cellTemplate: 'app/template/grid/cell-template-consultar.html', width: 35}
        ],
        data: 'listaBairro',
        enableColumnMenus: false
    };

    function salvar() {
        if ($scope.bairroForm.$invalid) {
            $scope.bairroForm.nmBairro.$setTouched();
            $scope.bairroForm.nmCidade.$setTouched();
            $scope.bairroForm.nmEstado.$setTouched();

            alertService.error('Formulário apresenta erros de preenchimento!');

            return;
        }
        /**  $scope.entidade.nmCidade = $filter('maiusculo')($scope.entidade.nmCidade); **/
        $scope.listaBairro.push($scope.entidade);
        $rootScope.listaDados = $scope.listaBairro

        alertService.success('Salvo com Sucesso!');

        limpar();
    }

    function limpar() {
        $scope.entidade = {};
        $scope.bairroForm.$setUntouched();

        angular.element('#nmBairro').focus();
    }


    function fechar() {
        $rootScope.listaDados = [];
        abrirPag('blank');
    }


    function editar(linha) {
        $scope.entidade.nmBairro = linha.nmBairro;
        $scope.entidade.nmCidade = linha.nmCidade;
        $scope.entidade.nmEstado = linha.nmEstado;
    }

    function excluir(linha) {
        var index = $scope.listaDados.indexOf(linha);

        $scope.listaBairro.splice(index, 1)
        $rootScope.listaDados = $scope.listaBairro
    }


    function consultar(linha) {
        $rootScope.dadosSalvos.nmBairro = linha.nmBairro;
        $rootScope.dadosSalvos.nmCidade = linha.nmCidade;
        $rootScope.dadosSalvos.nmEstado = linha.nmEstado;

        abrirPag('pesquisaBairro');
    }
    function abrirPag(nomeState) {
        $state.go(nomeState);
    }
}