
$().ready(function () {
    var dragElements = document.querySelectorAll('.drag');

    for (var i = 0; i < dragElements.length; i++) {

        dragElements[i].ondragstart = function (e) {
            e.dataTransfer.dropEffect = 'move';
            //e.target=main/main1/main2
            e.dataTransfer.setData("Text", e.target.id);
        };
        dragElements[i].ondragover = function (e) {
            e.preventDefault();
            e.stopPropagation();
        };

        dragElements[i].ondragenter = function (e) {
            e.preventDefault();
            e.stopPropagation();
        };
    }
});
