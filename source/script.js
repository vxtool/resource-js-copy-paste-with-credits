var copyWithCredits = function () {
    var $bodyElement  = document.getElementsByTagName('body')[0];
    var $element      = document.createElement('div');
    var url           = document.location.href;
    var pagelink;

    var selection;
    var copytext;

    pagelink = "<br /><br /> Link: <a href='"+url+"'>"+url+"</a><br />Copyright &copy; Copiar e Colar com créditos";

    selection = window.getSelection();
    copytext = selection + pagelink;

    $element.style.position='absolute';
    $element.style.left='-99999px';

    $bodyElement.appendChild($element);
    $element.innerHTML = copytext;
    selection.selectAllChildren($element);

    window.setTimeout(function() {
      $bodyElement.removeChild($element);
    },0);
}

document.oncopy = copyWithCredits;
