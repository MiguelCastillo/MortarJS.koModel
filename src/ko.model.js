var Binder = (function() {

  function Binder() {
  }


  Binder.prototype.serialize = function(data) {
    if ( this.__koConverted !== true ) {
      this.__koConverted = true;
      this.data = koFactory.serialize(this.data || data);
    }
    else {
      koFactory.serialize(data, this.data);
    }

    return this.data;
  };


  Binder.prototype.deserialize = function() {
    return koFactory.deserialize(this.data);
  };


  Binder.prototype.bind = function( options ) {
    options = options || {};
    if ( options instanceof jQuery ) {
      options = {
        $el: options
      };
    }

    var _self = this;

    // Make sure we use the document as the default recipient of the binding
    options.$el = options.$el || $(document);

    if ( options.convert !== false ) {
      this.serialize();
    }

    // Do the binding
    koFactory.bind(options.$el, _self.data);
  };


  Binder.prototype.unbind = function( options ) {
    options = options || {};
    if ( options instanceof jQuery ) {
      options = {
        $el: options
      };
    }

    // If no el is provided, then
    options.$el = options.$el || $(this._els);
    koFactory.unbind(options.$el);
  };


  return Binder;
})();
