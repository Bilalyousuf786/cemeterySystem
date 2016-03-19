/**
 * Created by Muhammad Bilal on 2/7/2016.
 *//*



(function(){
//export html table to pdf, excel and doc format directive

    angular.module("myApp")
        .directive("exportTable", exportTable)

    var exportTable = function(){
        var link = function($scope,$element,$attrs){
            $scope.$on("export-pdf", function(e, d){
                $element.tableExport({type:"pdf", escape:false});
        })
        $scope.$on("export-excel", function(e, d){
            $element.tableExport({type:"excel", escape:false});
    })
    $scope.$on("export-doc", function(e, d){
        $element.tableExport({type: "doc", escape:false});
})
}
        return {
            restrict: 'c',
        link: link
            }
    }


})();
*/
