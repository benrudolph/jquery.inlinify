$.fn.inlinify = function() {
  var rules, i, j, len, sheets, nodes, parent;

  sheets = document.styleSheets;

  // nodes should be children and actual node itself
  nodes = $.merge(this.find('*'), this)

  for(i = sheets.length - 1; i >= 0; i--){
    rules = sheets[i].cssRules || sheets[i].rules;

    for (j = 0, len = rules.length; j < len; j++) {

      // Skip if hover style or no selectText
      if (!rules[j].selectorText || rules[j].selectorText.indexOf("hover") !== -1)
        continue;

      $ele = $(rules[j].selectorText);

      $ele.each(function (i, elem) {
        if (nodes.index(elem) !== -1) {
          elem.style.cssText = rules[j].style.cssText + elem.style.cssText;
        }
      });
    }
  }

};
