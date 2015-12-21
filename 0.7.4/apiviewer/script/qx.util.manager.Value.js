{type:"class",attributes:{"isAbstract":"true","name":"Value","packageName":"qx.util.manager","superClass":"qx.core.Target","childClasses":"qx.io.Alias,qx.locale.Manager,qx.theme.manager.Border,qx.theme.manager.Color,qx.theme.manager.Font","fullName":"qx.util.manager.Value","type":"class"},children:[{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_updateObjects"},children:[{type:"desc",attributes:{"text":"<p>Update all registered objects regarding the value switch</p>"}}]},{type:"method",attributes:{"name":"connect"},children:[{type:"params",children:[{type:"param",attributes:{"name":"callback"},children:[{type:"desc",attributes:{"text":"<p>The callback function which handles the\n  apply of the resulting dynamically resolved value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"obj"},children:[{type:"desc",attributes:{"text":"<p>The context, the callback will be caled with.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Any acceptable value, but no booleans and no undefined</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Processing a value and handle callback execution on updates.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"disconnect"},children:[{type:"params",children:[{type:"param",attributes:{"name":"obj"},children:[{type:"desc",attributes:{"text":"<p>The class, which should be disconnected.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Disconnect all connections to the given object.</p>"}}]},{type:"method",attributes:{"name":"isDynamic"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>dynamically interpreted idenfier</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether a value is interpreted dynamically</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>returns true if the value is interpreted dynamically</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resolveDynamic"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>dynamically interpreted idenfier</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the dynamically interpreted result for the incoming value</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>return the (translated) result of the incoming value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]}]}