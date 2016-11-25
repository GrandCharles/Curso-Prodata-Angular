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

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.fechar = fechar;

    $scope.editar = editar;
    $scope.excluir = excluir;

    $scope.consultar = consultar;
    $scope.abrirPag = abrirPag;

    $scope.gridOptions = {
        columnDefs: [
            {name:'Nome do carro', field:'nmCarro', width: 400},
            {name:'Cor do carro', field:'nmCor', width: 150},
            {name:'Data lançamento', field:'dtLanc', cellTemplate:'app/template/grid/cell-template-date.html', width: 150},
            {name:'', field:'editar', cellTemplate:'app/template/grid/cell-template-editar.html', width: 35},
            {name:' ', field:'excluir', cellTemplate:'app/template/grid/cell-template-excluir.html', width: 35},

            {name:'  ', field:'consultar',
                cellTemplate:'app/template/grid/cell-template-consultar.html',
                width: 35
            }

        ],
        data:'listaCarro',
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

        $scope.entidade.nmCor = $filter('maiusculo')($scope.entidade.nmCor);
        $scope.listaCarro.push($scope.entidade);
        $rootScope.listaDados = $scope.listaCarro

        alertService.success('Salvo com Sucesso!');

        limpar();
    }

    function limpar() {
        $scope.entidade = {};
        $scope.carroForm.$setUntouched();

        angular.element('#nmCarro').focus();
    }


    function fechar(){
        $rootScope.listaDados = [];
        abrirPag('blank');
    }


    function editar(linha) {
        $scope.entidade.nmCarro = linha.nmCarro;
        $scope.entidade.nmCor = linha.nmCor;
        $scope.entidade.dtLanc = linha.dtLanc;
    }
    function excluir(linha) {
        var index = $scope.listaCarro.indexOf(linha);

        $scope.listaCarro.splice(index, 1)
        $rootScope.listaDados = $scope.listaCarro
    }


    function consultar(linha) {
        $rootScope.dadosSalvos.nmCarro = linha.nmCarro;
        $rootScope.dadosSalvos.nmCor = linha.nmCor;
        $rootScope.dadosSalvos.dtLanc = linha.dtLanc;

        abrirPag('pesquisaCarro');
    }
    function abrirPag(nomeState) {
        $state.go(nomeState);
    }
}