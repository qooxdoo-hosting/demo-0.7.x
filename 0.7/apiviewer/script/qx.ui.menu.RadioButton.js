{type:"class",attributes:{"name":"RadioButton","packageName":"qx.ui.menu","superClass":"qx.ui.menu.CheckBox","fullName":"qx.ui.menu.RadioButton","type":"class"},children:[{type:"appearances",children:[{type:"appearance",attributes:{"type":"qx.ui.menu.RadioButton","name":"menu-radio-button"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.menu.CheckBox#checked","overriddenFrom":"qx.ui.menu.CheckBox","name":"_applyChecked"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.menu.RadioButton#manager","name":"_applyManager"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","name":"_applyName"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies the name by delegating it to the\nmanager instance (if available)</p>"}}]},{type:"method",attributes:{"access":"protected","overriddenFrom":"qx.ui.menu.CheckBox","name":"_processExecute"},children:[{type:"desc",attributes:{"text":"<p>Processes the execute action in calling the {@link #setChecked} method</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getManager","fromProperty":"manager"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>manager</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #manager}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>manager</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initManager","fromProperty":"manager"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>manager</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>manager</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #manager}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetManager","fromProperty":"manager"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>manager</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #manager}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setManager","fromProperty":"manager"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>manager</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>manager</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #manager}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"menu-radio-button\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.menu.CheckBox"}},{type:"property",attributes:{"check":"qx.ui.selection.RadioManager","allowNull":"true","propertyType":"new","name":"manager","apply":"_applyManager"},children:[{type:"desc",attributes:{"text":"<p>The assigned qx.ui.selection.RadioManager which handles the switching between registered buttons</p>"}}]}]}]}