{type:"class",attributes:{"name":"RadioManager","hasWarning":"true","packageName":"qx.ui.selection","superClass":"qx.core.Target","fullName":"qx.ui.selection.RadioManager","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Each instance manages vItems set of radio options: qx.ui.form.RadioButton, qx.ui.toolbar.RadioButton, ...</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vName"}},{type:"param",attributes:{"name":"vMembers"}}]}]}]},{type:"constants",children:[{type:"constant",attributes:{"type":"String","name":"AUTO_NAME_PREFIX","value":"qx-radio-"}}]},{type:"events",children:[{type:"event",attributes:{"name":"changeSelected"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #selected}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.ChangeEvent"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.selection.RadioManager#name","name":"_applyName"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.selection.RadioManager#selected","name":"_applySelected"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_selectByIndex"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vIndex"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vIndex</code> is not documented.","column":"22","line":"355"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"355"}}]}]},{type:"method",attributes:{"hasError":"true","name":"add"},children:[{type:"params",children:[{type:"param",attributes:{"name":"varargs"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>varargs</code> is not documented.","column":"11","line":"183"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"11","line":"183"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getEnabledItems"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"135"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getItems"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"124"}}]}]},{type:"method",attributes:{"name":"getName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getSelected","fromProperty":"selected"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>selected</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>selected</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"handleItemChecked"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vItem"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vChecked"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"25","line":"158"}},{type:"error",attributes:{"msg":"Parameter <code>vChecked</code> is not documented.","column":"25","line":"158"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"25","line":"158"}}]}]},{type:"method",attributes:{"access":"protected","name":"initName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>name</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initSelected","fromProperty":"selected"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>selected</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>selected</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"remove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vItem"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"14","line":"221"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"14","line":"221"}}]}]},{type:"method",attributes:{"name":"resetName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>name</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetSelected","fromProperty":"selected"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>selected</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"selectNext"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vItem"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"18","line":"293"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"293"}}]}]},{type:"method",attributes:{"hasError":"true","name":"selectPrevious"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vItem"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vItem</code> is not documented.","column":"22","line":"324"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"324"}}]}]},{type:"method",attributes:{"name":"setName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setSelected","fromProperty":"selected"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>selected</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>selected</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #selected}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"hasError":"true","name":"name","allowNull":"true","propertyType":"new","apply":"_applyName","check":"String"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"84"}}]}]},{type:"property",attributes:{"hasError":"true","name":"selected","check":"qx.core.Object","allowNull":"true","propertyType":"new","apply":"_applySelected","event":"changeSelected"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"3","line":"84"}}]}]}]}]}