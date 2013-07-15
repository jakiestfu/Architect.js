Architect.js
============

A simple scaffold for your client side JavaScript.


## Usage
After renaming your Architect.js file, include it before the closing body tag.

```html
<script src="Architect.custom.js"></script>
<script>
    MyAppName.extend({
        foo: function(){
            alert('bar');
        }
    });
    MyAppName.foo(); // Alerts "bar"

    MyAppName.privatize(); // Nothing can be extended now
</script>
```

### Why wouldn't I just use object literals?
This method allows you to do the following:
* Private methods/vars
* Public methods/vars
* Extensibility/modularity
* Clean, bundled, and concise

## Notes
* This is one of many ways of structuring your JS code. No extensive documentation on this code will be provided because this code should be organic, it should change to fit your needs.
* `_log()` is an internal wrapper for `console.log()`.
* `var NameSpace` should change to whatever you want.
