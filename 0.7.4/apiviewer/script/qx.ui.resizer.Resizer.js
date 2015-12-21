{type:"class",attributes:{"name":"Resizer","hasWarning":"true","packageName":"qx.ui.resizer","mixins":"qx.ui.resizer.MResizable","superClass":"qx.ui.layout.CanvasLayout","fullName":"qx.ui.resizer.Resizer","type":"class","interfaces":"qx.ui.resizer.IResizable"},children:[{type:"desc",attributes:{"text":"<p>This class acts as a wrapper for other child, and allows it to be resized (not moved), normally in\nthe right and/or bottom directions.  Child can be e.g. a qx.ui.form.TextArea,\nqx.ui.table.Table or qx.ui.form.List.  It is an alternative to splitters.</p>"}},{type:"appearances",children:[{type:"appearance",attributes:{"type":"qx.ui.basic.Terminator","name":"resizer-frame"}},{type:"appearance",attributes:{"type":"qx.ui.resizer.Resizer","name":"resizer"}}]},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"child"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"resizer\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"height","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"minHeight","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"minWidth","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"width","docFrom":"qx.ui.core.Widget","defaultValue":"\"auto\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.resizer.IResizable","name":"_changeHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.resizer.IResizable","name":"_changeWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_getMinSizeReference"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Widget"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"149"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_getResizeParent"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Widget"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"142"}}]}]}]}]}