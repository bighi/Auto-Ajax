# Auto-Ajax

Auto-Ajax is a jQuery plugin that allows you to make basic ajax operations with no javascript code. All you need is HTML.

This project is licensed under the MIT license agreement. This means you can copy, redistribute, change, sell, whatever your want, as long as you keep the permission notice and its copyright information. See the [full text of the license][1] for details.

Let me start with an example:

Let's say you want a link to make an ajax call to some.html and you want to append the response to a div with an id of "target".

    <a href="/path/to/some.html" data-remote="auto-ajax" data-appendTo="#target">Try me</a>

This is all you need. The _data-remote_ parameter will tell auto-ajax to turn your link into an ajax request and _data-appendTo_ tells the script where to append whatever HTML comes back from that ajax call.

## How to install

Just download auto_ajax.js and call it inside your <header> as you would with any other javascript file.

That's it. You need no javascript code to make it work!

## Special Parameters

Auto-Ajax recognizes some special parameters to do its magic. All of them begins with _data-_ to conform to HTML standards.

### **data-remote**

The only possible value for this is "auto-ajax". The script will work on elements where data-remote="auto-ajax". When the user interacts with this element, an ajax request is sent.

Auto-Ajax works with the following elements: **a**, **form**, **select**, **button**. It also captures the correct event (captures submit when it's a form, captures click when it's a link or button, etc)

The URL for the ajax request is taken from the _action_ or _href_ parameters. When the element is a _form_ or _select_, its data is passed along the request.

I decided to call it data-remote because Ruby On Rails uses data-remote="true" to make its Ajax magic.

### data-update

Set data-update if you want the response to update the HTML inside an element. 

The value of this parameter is any kind of jQuery selector, like "#id" or ".class" or even "div.post p:first".

Example:

    <a href="path/to/some.php" data-remote="auto-ajax" data-update="#target">Try me</a>

### data-appendTo

Set this parameter if you want the response to be appended to an element.

Like the above, the value of this parameter is a jQuery selector.

Example:

    <a href="path/to/some.php" data-remote="auto-ajax" data-appendTo="div:first">Try me</a>

### data-prependTo

Like _appendTo_, but it prepends the response.

### data-callback

This is a special parameter. When set, the script will call a callback function with the response data.

The value of this parameter should be an string with the name of a Javascript function.

Example:

    <a href="path/to/remove.php" data-remote="auto-ajax" data-callback="removeTask">Remove task</a>

[1]:/mit-license.txt
