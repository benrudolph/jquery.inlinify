QUnit.test( "should apply styles to div", function (assert) {
  $('#mydiv').inlinify()

  assert.equal($('div[style="color: red;"]').length, 1);

  // Should not apply hover styles
  assert.equal($('div[style="background-color: blue;"]').length, 0);
});

QUnit.test('should apply styles to child div', function (assert) {
  $('#mydiv').inlinify()

  assert.equal($('div[style="color: yellow;"]').length, 1);
});

QUnit.test('should apply styles attribute selector', function (assert) {
  $('#mydiv').inlinify()

  assert.equal($('div[style="color: blue;"]').length, 1);
});

QUnit.test('should not apply styles to parent', function (assert) {
  $('.mysecond').inlinify()

  assert.equal($('div[style="color: red;"]').length, 0);
  assert.equal($('div[style="color: yellow;"]').length, 1);
});

QUnit.test('Inline styles should take precedence over non-inlined styles', function (assert) {
  $('#inlined').inlinify()
  styles = $('#inlined')[0].style.cssText

  assert.ok(styles.indexOf('color: red') !== -1)
});

QUnit.test('Consecutive styles should give precedence to latter', function (assert) {
  $('#inlined').inlinify()
  styles = $('#inlined')[0].style.cssText
  console.log(styles);

  assert.ok(styles.indexOf('background-color: rgb(100, 100, 100)') !== -1)
});


