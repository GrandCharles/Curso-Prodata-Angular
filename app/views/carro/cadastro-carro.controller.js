/**
 * Created by GrandCharles on 19/11/2016.
 */
angular.module('pdApp').controller('CadastroCarroController', CadastroCarroController);

/* CadastroCarroController.$inject = ['$scope', 'AlertService', '$filter']; */

function CadastroCarroController($scope, $rootScope, $state, alertService, $filter) {
    $scope.nome = "GrandCharles";

    $scope.entidade = {};
    $rootScope.dadosSalvos = {};

    $scope.listaCarro = $rootScope.listaDados;

    var indice = 0;
    $scope.incluir = true;

    $scope.salvar = salvar;
    $scope.novo = novo;
    $scope.fechar = fechar;

    $scope.editar = editar;
    $scope.excluir = excluir;

    $scope.consultar = consultar;
    $scope.abrirPag = abrirPag;

    $scope.gridOptions = {
        columnDefs: [
            {name: 'Nome do carro', field: 'nmCarro', width: 400},
            {name: 'Cor do carro', field: 'nmCor', width: 150},
            {
                name: 'Data lançamento',
                field: 'dtLanc',
                cellTemplate: 'app/template/grid/cell-template-date.html',
                width: 150
            },
            {name: '', field: 'editar', cellTemplate: 'app/template/grid/cell-template-editar.html', width: 35},
            {name: ' ', field: 'excluir', cellTemplate: 'app/template/grid/cell-template-excluir.html', width: 35},

            {
                name: '  ', field: 'consultar',
                cellTemplate: 'app/template/grid/cell-template-consultar.html',
                width: 35
            }

        ],
        data: 'listaCarro',
        enableColumnMenus: false
    };

    function salvar() {
        if ($scope.carroForm.$invalid) {
            $scope.carroForm.nmCarro.$setTouched();
            $scope.carroForm.nmCor.$setTouched();
            $scope.carroForm.dtLanc.$setTouched();

            alertService.error('Formulário apresenta erros de preenchimento!');

            return;
        }

        if ($scope.incluir) {
            $scope.entidade.nmCor = $filter('maiusculo')($scope.entidade.nmCor);
            $scope.listaCarro.push($scope.entidade);

            alertService.success('Salvo com Sucesso!');
        } else {

            alertService.success('Alterado com sucesso!');
        }

        novo();
    }

    function novo() {
        $scope.entidade = {};
        $scope.carroForm.$setUntouched();
        $scope.incluir = true;

        angular.element('#nmCarro').focus();
    }


    function fechar() {
        $scope.carroForm.$setUntouched();
        $rootScope.listaDados = [];
        abrirPag('blank');
    }


    function editar(linha) {
        indice = $scope.listaDados.indexOf(linha);

        $scope.entidade = linha;

        $scope.incluir = false;

        angular.element('#nmCarro').focus();
    }

    function excluir(linha) {
        var index = $scope.listaCarro.indexOf(linha);

        $scope.listaCarro.splice(index, 1)
    }


    function consultar(linha) {
        $rootScope.dadosSalvos = linha;

        abrirPag('pesquisaCarro');
    }

    function abrirPag(nomeState) {
        $state.go(nomeState);
    }
}