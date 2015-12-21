{type:"class",attributes:{"isStatic":"true","name":"FlexWidth","packageName":"qx.ui.util.column","fullName":"qx.ui.util.column.FlexWidth","type":"class"},children:[{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"compute"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columns"},children:[{type:"desc",attributes:{"text":"<p>An array of objects derived from {@link qx.ui.core.Widget}, but most\n  typically of class {@link qx.ui.util.column.Data}.  Each element of\n  the columns array is an object derived from {@link qx.ui.core.Widget}\n  and thus has properties width, minWidth, and maxWidth.  The width\n  property may take a numeric value indicating a fixed number of pixels\n  for that column, the string &#8220;auto&#8221;, a string with a percentage,\n  e.g. &#8220;33%&#8221;, or a flex width in the form &#8220;1*&#8221;.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]},{type:"param",attributes:{"name":"width"},children:[{type:"desc",attributes:{"text":"<p>The available width on which the column widths should be based.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Compute the width of each of a specified set of columns based on each\ncolumn&#8217;s settings.  Upon return from this funciton, the width field of\neach widget-derived object has been calculated, and may be retrieved\nwith the getWidth() method of the objects in the columns array.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Void"}}]}]}]}]}]}