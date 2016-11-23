/**
 * Created by GrandCharles on 22/11/2016.
 */
/**
 * Created by GrandCharles on 14/11/2016.
 */
angular.module('pdApp').controller('CadastroCarroController', CadastroCarroController);

/* CadastroCarroController.$inject = ['$scope', 'AlertService', '$filter']; */

function CadastroCarroController($scope, alertService, $filter) {
    $scope.nome = "GrandCharles";

    $scope.entidade = {};
    $scope.listaCarros = [];

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;

    $scope.gridOptions = {
        columnDefs: [
            {name:'Nome do carro', field:'nmCarro', minWidth: 130},
            {name:'Cor do carro', field:'nmCor', width: 280},
            {name:'Dt lançamento', field:'dtLanc', cellTemplate:'app/template/grid/cell-template-date.html', width: 150},
            {name:'', field:'excluir', cellTemplate:'app/template/grid/cell-template-excluir.html', width: 40}
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
}