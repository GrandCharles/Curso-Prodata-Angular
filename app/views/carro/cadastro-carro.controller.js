/**
 * Created by GrandCharles on 19/11/2016.
 */
angular.module('pdApp').controller('CadastroCarroController', CadastroCarroController);

/* CadastroCarroController.$inject = ['$scope', 'AlertService', '$filter']; */

function CadastroCarroController($scope, alertService, $filter, transportaObj) {
    $scope.nome = "GrandCharles";

    $scope.entidade = {};
    $scope.listaCarros = [];

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.consultar = consultar;

    $scope.gridOptions = {
        columnDefs: [
            {name:'Nome do carro', field:'nmCarro', width: 300},
            {name:'Cor do carro', field:'nmCor', width: 150},
            {name:'Data lançamento', field:'dtLanc', cellTemplate:'app/template/grid/cell-template-date.html', width: 150},
            {name:'', field:'excluir', cellTemplate:'app/template/grid/cell-template-excluir.html', width: 35},
            {name:' ', field:'consultar', cellTemplate:'app/template/grid/cell-template-consultar.html', width: 35}
        ],
        data:'listaCarros',
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
        $scope.listaCarros.push($scope.entidade);

        alertService.success('Salvo com Sucesso!');

        limpar();
    }


    function limpar() {
        $scope.entidade = {};
        $scope.carroForm.$setUntouched();

        angular.element('#nmCarro').focus();
    }

    function excluir(linha) {
        var index = $scope.listaCarros.indexOf(linha);

        $scope.listaCarros.splice(index, 1)
    }


    function consultar(linha) {

        transportaObj.setItem(linha);

         /** abrirPagina('pesquisaCarro'); **/
    }

}