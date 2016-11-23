/**
 * Created by GrandCharles on 23/11/2016.
 */
angular.module('pdApp').service('transportaObj', transportaObj);

     function transportaObj() {
       var ItemSelecionado = '';

        return {
            getItem: function () {
                return ItemSelecionado;
            },
            setItem: function(value) {
                ItemSelecionado = value;

            }
        };
    }