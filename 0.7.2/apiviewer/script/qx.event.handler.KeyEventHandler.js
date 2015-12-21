{type:"class",attributes:{"name":"KeyEventHandler","packageName":"qx.event.handler","superClass":"qx.core.Target","isSingleton":"true","fullName":"qx.event.handler.KeyEventHandler","type":"class"},children:[{type:"desc",attributes:{"text":"<p>This class provides unified key event handler for Internet Explorer,\nFirefox, Opera and Safari</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_attachEvents"},children:[{type:"desc",attributes:{"text":"<p>attach the key event handler to the <span class=\"caps\">DOM</span> events</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_charCodeToIdentifier"},children:[{type:"params",children:[{type:"param",attributes:{"name":"charCode"},children:[{type:"desc",attributes:{"text":"<p>character code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>converts a character code to the corresponding identifier</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>key identifier</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_detachEvents"},children:[{type:"desc",attributes:{"text":"<p>detach the key event handler from the <span class=\"caps\">DOM</span> events</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_idealKeyHandler"},children:[{type:"params",children:[{type:"param",attributes:{"name":"keyCode"},children:[{type:"desc",attributes:{"text":"<p>keyboard code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"charCode"},children:[{type:"desc",attributes:{"text":"<p>character code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"eventType"},children:[{type:"desc",attributes:{"text":"<p>type of the event (keydown, keypress, keyup)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"domEvent"},children:[{type:"desc",attributes:{"text":"<p>DomEvent</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Key handler for an idealized browser.\nRuns after the browser specific key handlers have normalized the key events.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_identifierToKeyCode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"keyIdentifier"},children:[{type:"desc",attributes:{"text":"<p>The key identifier to convert</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>converts a key identifier back to a keycode</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>keyboard code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_isIdentifiableKeyCode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"keyCode"},children:[{type:"desc",attributes:{"text":"<p>key code to check.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Check whether the keycode can be reliably detected in keyup/keydown events</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Wether the keycode can be reliably detected in keyup/keydown events.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_isNonPrintableKeyCode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"keyCode"},children:[{type:"desc",attributes:{"text":"<p>key code to check.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Checks whether the keyCode represents a non printable key</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Wether the keyCode represents a non printable key.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_keyCodeToIdentifier"},children:[{type:"params",children:[{type:"param",attributes:{"name":"keyCode"},children:[{type:"desc",attributes:{"text":"<p>key code</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>converts a keyboard code to the corresponding identifier</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>key identifier</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onkeypress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"domEvent"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Low level key press handler</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onkeyupdown"},children:[{type:"params",children:[{type:"param",attributes:{"name":"domEvent"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Low level handler for &#8220;keyup&#8221; and &#8220;keydown&#8221; events</p>"}}]},{type:"method",attributes:{"name":"isValidKeyIdentifier"},children:[{type:"params",children:[{type:"param",attributes:{"name":"keyIdentifier"},children:[{type:"desc",attributes:{"text":"<p>The key identifier.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Checks whether a given string is a valid keyIdentifier</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the given string is a valid keyIdentifier</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[{type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.handler.KeyEventHandler"}}]}]}]}]}]}