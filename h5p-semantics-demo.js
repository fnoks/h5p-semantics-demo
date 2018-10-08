H5P.SemanticsDemo = (function ($) {

  function SemanticsDemo(options) {

    //var optionsString = JSON.stringify(options);

    var highlight = function (json) {
      json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      var output = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
          var cls = 'number';
          if (/^"/.test(match)) {
              if (/:$/.test(match)) {
                  cls = 'key';
              } else {
                  cls = 'string';
              }
          } else if (/true|false/.test(match)) {
              cls = 'boolean';
          } else if (/null/.test(match)) {
              cls = 'null';
          }
          return '<span class="' + cls + '">' + match + '</span>';
      });

      return '<pre>' + output + '</pre>';
    };

    this.attach = function ($wrapper) {
      $wrapper.append(highlight(JSON.stringify(options, undefined, 2)));
    };
  }

  return SemanticsDemo;

}(H5P.jQuery));
