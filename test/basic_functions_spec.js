define(
['index'],
function(NgSanitize){

  describe("Basic sanitization", function() {
    var ngSanitize = NgSanitize.ngSanitize;

    beforeEach(function() {
    });

    afterEach(function() {
    });

    it("should sanitize Angular's offical example", function(){
      var output = ngSanitize('<p style="color:blue">an html\n' +
        '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
        'snippet</p>');
      expect(output).to.equal('<p>an html&#10;<em>click here</em>&#10;snippet</p>');
    });

  });
});
