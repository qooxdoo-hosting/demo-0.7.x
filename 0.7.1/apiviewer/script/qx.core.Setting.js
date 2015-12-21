{type:"class",attributes:{"isStatic":"true","name":"Setting","packageName":"qx.core","fullName":"qx.core.Setting","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Manage settings for framework/application wide initial setup routines.</p>\n\n<p><strong>Background information</strong></p>\n\n<p>One of the major problem of JavaScript frameworks is that you, as the\nuser of such a framework, cannot easily control one of the initial\nsettings. For example the framework may have defaults which only can\nbe changed after the framework is loaded, but not before. Most of the\ntime this restriction is not problematic. Many stuff is just then\ninteresting when the application main gets processed. But there are\nexceptions like things which must be configured at loadtime and not\nafter that.</p>\n\n<p><strong>What are settings?</strong></p>\n\n<p>This is where qooxdoo&#8217;s new sophisticated settings system comes in.\nAnd the best is that this feature is directly built into the core of\nqooxdoo. This means that many intial settings are easily controlable\nusing a simple hash map structure or using simple generator flags.</p>\n\n<p>For example you can control the following things in qooxdoo:</p>\n\n<ul>\n<li>All type of themes (colors, icons, widgets, appearance)</li>\n<li>Default log level and appender</li>\n<li>Resource-URLs of standard qooxdoo icons and widgets images</li>\n<li>Timeout of the image preloader</li>\n<li>The init component (graphical or non-graphical)</li>\n<li>Different debugging options for json, remote io, etc.</li>\n</ul>\n\n<p>This list shows you some of your possibilities.</p>\n\n<p>Also take a look at the documentation at:\n<a href=\"http://qooxdoo.org/documentation/user_manual/settings\">http://qooxdoo.org/documentation/user_manual/settings</a></p>\n\n<p><strong>Usage</strong></p>\n\n<p>A setting generally should only store simple primitive types\nlike strings. Settings are not update-able. They do not fire events\nand they do not inform depending objects. The best way to work with\nsettings is to &#8220;compile&#8221; them into the application code. This is easily\npossible using the corresponding flags of the qooxdoo build system.</p>\n\n<p>At initialisation of this class all settings defined in the global\nmap <code>qxsettings</code> are imported. This map can also created\nby hand and should be defined before loading qooxdoo. After the import\nthe settings system deletes the map.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"access":"private","isStatic":"true","name":"__init"},children:[{type:"desc",attributes:{"text":"<p>Import settings from global qxsettings into current environment</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__loadUrlSettings"},children:[{type:"desc",attributes:{"text":"<p>Load settings from <span class=\"caps\">URL</span> parameters if the setting <code>&#8220;qx.allowUrlSettings&#8221;</code>\nis set to true.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"define"},children:[{type:"params",children:[{type:"param",attributes:{"name":"key"},children:[{type:"desc",attributes:{"text":"<p>The key to store the value under</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"defaultValue"},children:[{type:"desc",attributes:{"text":"<p>Primitive default value for the new setting</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"Boolean"}},{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Define a new setting</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"get"},children:[{type:"params",children:[{type:"param",attributes:{"name":"key"},children:[{type:"desc",attributes:{"text":"<p>The key where the data is stored under</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the value of a previously defined setting</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The primitive value stored for the given setting</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"Boolean"}},{type:"entry",attributes:{"type":"Number"}}]}]}]}]}]}