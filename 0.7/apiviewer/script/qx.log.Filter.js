{type:"class",attributes:{"isAbstract":"true","name":"Filter","packageName":"qx.log","superClass":"qx.core.Object","childClasses":"qx.log.DefaultFilter","fullName":"qx.log.Filter","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A filter for log events.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"constants",children:[{type:"constant",attributes:{"type":"Number","name":"DENY","value":"2"},children:[{type:"desc",attributes:{"text":"<p>Specifies that the log event is denied.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"int"}}]}]},{type:"constant",attributes:{"type":"Number","name":"NEUTRAL","value":"3"},children:[{type:"desc",attributes:{"text":"<p>Specifies that the filter is neutral to the log event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"int"}}]}]},{type:"constant",attributes:{"type":"Number","name":"ACCEPT","value":"1"},children:[{type:"desc",attributes:{"text":"<p>Specifies that the log event is accepted.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"int"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"isAbstract":"true","name":"decide"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"},children:[{type:"desc",attributes:{"text":"<p>The event to check.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Decidies whether a log event is accepted.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>{@link #ACCEPT}, {@link #DENY} or {@link #NEUTRAL}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]}]}]}