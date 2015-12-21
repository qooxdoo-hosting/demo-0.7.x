{type:"class",attributes:{"name":"IframeTransport","hasWarning":"true","packageName":"qx.io.remote","superClass":"qx.io.remote.AbstractRemoteTransport","fullName":"qx.io.remote.IframeTransport","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Transports requests to a server using an <span class=\"caps\">IFRAME</span>.</p>\n\n<p>This class should not be used directly by client programmers.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"methods-static",children:[{type:"method",attributes:{"hasError":"true","isStatic":"true","name":"isSupported"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"13","line":"117"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","hasError":"true","name":"_onload"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Converting complete state to numeric value and update state property</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"9","line":"236"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_onreadystatechange"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Converting named readyState to numeric value and update state property</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"21","line":"253"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_switchReadyState"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vReadyState"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vReadyState</code> is not documented.","column":"19","line":"265"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"265"}}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"getFetchedLength"},children:[{type:"desc",attributes:{"text":"<p>Returns the length of the content as fetched thus far</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"getIframeBody"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"400"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getIframeDocument"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"389"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getIframeHtmlContent"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"448"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getIframeTextContent"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"null"}},{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"419"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getIframeWindow"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"17","line":"378"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getResponseContent"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"null"}},{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"473"}}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"getResponseHeader"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vLabel"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vLabel</code> is not documented.","column":"19","line":"318"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"318"}}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"getResponseHeaders"},children:[{type:"desc",attributes:{"text":"<p>Provides an hash of all response headers.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"getStatusCode"},children:[{type:"desc",attributes:{"text":"<p>Returns the current status code of the request if available or -1 if not.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"getStatusText"},children:[{type:"desc",attributes:{"text":"<p>Provides the status text for the current request if available and null otherwise.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"string"}}]}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"send"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"6","line":"170"}}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.io.remote.AbstractRemoteTransport","name":"setRequestHeader"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vLabel"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vValue"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vLabel</code> is not documented.","column":"18","line":"301"}},{type:"error",attributes:{"msg":"Parameter <code>vValue</code> is not documented.","column":"18","line":"301"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"301"}}]}]}]}]}