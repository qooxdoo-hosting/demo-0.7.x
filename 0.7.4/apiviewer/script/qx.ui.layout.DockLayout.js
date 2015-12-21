{type:"class",attributes:{"name":"DockLayout","hasWarning":"true","packageName":"qx.ui.layout","superClass":"qx.ui.core.Parent","fullName":"qx.ui.layout.DockLayout","type":"class"},children:[{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","hasError":"true","name":"_addAlignedHorizontal"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vAlign"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vArgs"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vAlign</code> is not documented.","column":"23","line":"189"}},{type:"error",attributes:{"msg":"Parameter <code>vArgs</code> is not documented.","column":"23","line":"189"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"189"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_addAlignedVertical"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vAlign"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vArgs"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vAlign</code> is not documented.","column":"21","line":"171"}},{type:"error",attributes:{"msg":"Parameter <code>vArgs</code> is not documented.","column":"21","line":"171"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"171"}}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.layout.DockLayout#mode","name":"_applyMode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>mode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMode}.</p>"}}]},{type:"method",attributes:{"access":"protected","hasError":"true","overriddenFrom":"qx.ui.core.Parent","name":"_createLayoutImpl"},children:[{type:"desc",attributes:{"text":"<p>This creates an new instance of the layout impl this widget uses</p>"}},{type:"errors",children:[{type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>widget</code>.","column":"19","line":"102"}}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.BoxLayout"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"addBottom"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add multiple childrens and make them bottom aligned</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>widget</code> is not documented.","column":"11","line":"158"}}]}]},{type:"method",attributes:{"hasError":"true","name":"addLeft"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add multiple childrens and make them left aligned</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>widget</code> is not documented.","column":"9","line":"122"}}]}]},{type:"method",attributes:{"hasError":"true","name":"addRight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add multiple childrens and make them right aligned</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>widget</code> is not documented.","column":"10","line":"134"}}]}]},{type:"method",attributes:{"hasError":"true","name":"addTop"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add multiple childrens and make them top aligned</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>widget</code> is not documented.","column":"8","line":"146"}}]}]},{type:"method",attributes:{"name":"getMode","fromProperty":"mode"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>mode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>mode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMode","fromProperty":"mode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>mode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>mode</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetMode","fromProperty":"mode"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>mode</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setMode","fromProperty":"mode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>mode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>mode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"possibleValues":"\"vertical\",\"horizontal\",\"ordered\"","name":"mode","defaultValue":"\"vertical\"","propertyType":"new","apply":"_applyMode","themeable":"true"},children:[{type:"desc",attributes:{"text":"<p>The layout mode (in which order the children should be layouted)</p>"}}]}]}]}