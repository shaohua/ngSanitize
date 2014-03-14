define([], function() {

/*
There may be times when you do want to reference a script directly and not conform to the "baseUrl + paths" rules for finding it. If a module ID has one of the following characterstics, the ID will not be passed through the "baseUrl + paths" configuration, and just be treated like a regular URL that is relative to the document:
Ends in ".js".
Starts with a "/".
Contains an URL protocol, like "http:" or "https:".
*/

  /* app specs here */
  var specs = [
    'test/basic_functions_spec',
  ];

  require.config({
    paths: {},

    callback: function() {
      require(specs, function() {
        if (window.mochaPhantomJS) {
          mochaPhantomJS.run();
        } else {
          mocha.run();
        }
      });
    }
  });

});
