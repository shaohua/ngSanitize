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

    it('should NOT remove image tag', function(){
      var input = "test<img src=' http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif' onload='alert(\"hi there\")'>";
      var output = ngSanitize(input);
      expect(output).to.equal(input);
    });

    it('should remove script tag', function(){
      var input = "test<script>alert('Hi!'');</script>";
      var output = ngSanitize(input);
      expect(output).to.equal('test');
    });

    it('should remove malformatted a tag version 1', function(){
      var input = "test<a href=javascript:(alert('oh no'))>CLICK HERE FOR FREE CAR!</a>";
      var output = ngSanitize(input);
      expect(output).to.equal('test<a>CLICK HERE FOR FREE CAR!</a>');
    });

    it('should remove malformatted a tag version 2', function(){
      var input = "test<a href='javascript:(alert(1))'>CLICK HERE FOR FREE CAR!</a>";
      var output = ngSanitize(input);
      expect(output).to.equal('test<a>CLICK HERE FOR FREE CAR!</a>');
    });

    it('should remove incomplete a tag', function(){
      var input = 'test<a href=">" onmouseover="attackCode()">';
      var output = ngSanitize(input);
      expect(output).to.equal('test<a></a>');
    });


  });
});
