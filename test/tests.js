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


