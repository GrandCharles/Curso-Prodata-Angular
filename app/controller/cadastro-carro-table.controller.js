/**
 * Created by GrandCharles on 14/11/2016.
 */
angular.module('pdApp').controller('CadastroCarroController', CadastroCarroController);

function CadastroCarroController($scope, alertService, $filter) {
    $scope.nome = "GrandCharles";

    $scope.entidade = {};
    $scope.listaCarros = [];

    $scope.salvar = salvar;
    $scope.limpar = limpar;

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

}