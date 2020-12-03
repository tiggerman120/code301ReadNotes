# Local Storage

## Brief History

In the beginning there was only ineternext explorer.

userdata allows web pages to store up to 64kb of data per domain in a heirarchal XML-based structure

in 2002 adobe introduced a feature in flash 6 that gained the unfortunate and misleading title of flash cookies within the flash environment the feature is properly known as local shared objects. it allows flash objects to store up to 100kb of data per domain

## html5 storage

html5 storage is a spec named web storage which used to be part of html5 specs

html5 storage is a way for web pages to store named key/value pairs(dictionaries?) locally within the web client browser.
like cookies this data persists even after you navigate away from the web site close your browser tab exit your browser. it supports most modern browsers
CHECKING FOR HTML5 STORAGE

```JS

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
Instead of writing this function yourself, you can use Modernizr to detect support for HTML5 Storage.

if (Modernizr.localstorage) {
  // window.localStorage is available!
} else {
  // no native support for HTML5 storage :(
  // maybe try dojox.storage or a third-party solution
}

```

html5 storage is based on key value pairs you store data on a named basis that you can retrieve using the key pair

calling setItem() with a named key already exists will SILENTLY overwrite the previous value
calling getItem() with a non-existant key will return NULL rather than throw an exception
USEFUL CODE BLOCK

```JS

var foo = localStorage.getItem("bar");
// ...
localStorage.setItem("bar", foo);
…could be rewritten to use square bracket syntax instead:

var foo = localStorage["bar"];
// ...
localStorage["bar"] = foo;
There are also methods for removing 

```

Like other JavaScript objects, you can treat the localStorage object as an associative array. Instead of using the getItem() and setItem() methods, you can simply use square brackets. For example, this snippet of code:


```JS

var foo = localStorage.getItem("bar");
// ...
localStorage.setItem("bar", foo);
…could be rewritten to use square bracket syntax instead:

var foo = localStorage["bar"];
// ...
localStorage["bar"] = foo;

```

There are also methods for removing the value for a given named key, and clearing the entire storage area (that is, deleting all the keys and values at once).

interface Storage {
  deleter void removeItem(in DOMString key);
  void clear();
};
Calling removeItem() with a non-existent key will do nothing.

Finally, there is a property to get the total number of values in the storage area, and to iterate through all of the keys by index (to get the name of each key).

```JS

interface Storage {
  readonly attribute unsigned long length;
  getter DOMString key(in unsigned long index);
};

```

If you call key() with an index that is not between 0–(length-1), the function will return null.

## tracking changes to html5 storage

if you want to keep track programmatically of when the storage area chnages you can trap the storage event. the storage event is fired on the window object whenever setitem() removeitem() or clear() is called and actually changes something.
for example if you sat an item to its existing value or call clear wjem tjere ate no named keys the storage event will not fire because nothing changed in the sotrage area.

The storage event is supported everywhere the localStorage object is supported, which includes Internet Explorer 8. IE 8 does not support the W3C standard addEventListener (although that will finally be added in IE 9). Therefore, to hook the storage event, you’ll need to check which event mechanism the browser supports. (If you’ve done this before with other events, you can skip to the end of this section. Trapping the storage event works the same as every other event you’ve ever trapped.

```JS

if (window.addEventListener) {
  window.addEventListener("storage", handle_storage, false);
} else {
  window.attachEvent("onstorage", handle_storage);
};
The handle_storage callback function will be called with a StorageEvent object, except in Internet Explorer where the event object is stored in window.event.

function handle_storage(e) {
  if (!e) { e = window.event; }
}

```

“5 megabytes” is how much storage space each origin gets by default
“QUOTA_EXCEEDED_ERR” is the exception that will get thrown if you exceed your storage quota of 5 megabytes. “No” is the answer to the next obvious question, “Can I ask the user for more storage space?”

data is stored as strings if you are storing something other than a string then you need to type coerce it yourself.

