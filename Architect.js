(function(win, doc){

    "use strict";

    var NameSpace = 'MyAppName',

    __App = __App || (function(){

        var _settings = {
                debug: true,
                extendable: true,
                initialized: false,
                basePub: []
            },
            _noop = function(){},
            _utils = {
                deepExtend: function(destination, source) {
                    var property;
                    for (property in source) {
                        if (source[property] && source[property].constructor && source[property].constructor === Object) {
                            destination[property] = destination[property] || {};
                            _utils.deepExtend(destination[property], source[property]);
                        } else {
                            destination[property] = source[property];
                        }
                    }
                    return destination;
                }
            },
            _log = function(what) {
                if (_settings.debug) {
                    console.log(what);
                }
            },
            _Private = {
                init: function(){
                    var k;
                    for( k in _Public ){
                        _settings.basePub.push( k );
                    }
                }
            },
            _Public = {

                extend: function(extensions){
                    if(_settings.extendable){
                        var i;
                        for( i = 0; i < _settings.basePub.length; i++ ){
                            if(typeof extensions[ _settings.basePub[i] ] !== 'undefined'){
                                delete extensions[ _settings.basePub[i] ];
                            }
                        }
                        _Public = _utils.deepExtend(_Public, extensions);
                    }
                },
                privatize: function(){
                    _settings.extendable = false;
                }

            };

        if( !_settings.initialized ){
            _Private.init();
        }

        return _Public;

    })();


    this[NameSpace] = __App;

}).call(this, window, document);
