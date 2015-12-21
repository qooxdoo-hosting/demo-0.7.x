{type:"class",attributes:{"isAbstract":"true","name":"Abstract","hasWarning":"true","packageName":"qx.ui.table.model","superClass":"qx.core.Target","childClasses":"qx.ui.table.model.Remote,qx.ui.table.model.Simple","fullName":"qx.ui.table.model.Abstract","type":"class","interfaces":"qx.ui.table.ITableModel"},children:[{type:"desc",attributes:{"text":"<p>An abstract table model that performs the column handling, so subclasses only\nneed to care for row handling.</p>"}},{type:"events",children:[{type:"event",attributes:{"name":"dataChanged"},children:[{type:"desc",attributes:{"text":"<p>Fired when the table data changed (the stuff shown in the table body).\nThe data property of the event may be null or a map having the following attributes:\n<ul>\n  <li>firstRow: The index of the first row that has changed.</li>\n  <li>lastRow: The index of the last row that has changed.</li>\n  <li>firstColumn: The model index of the first column that has changed.</li>\n  <li>lastColumn: The model index of the last column that has changed.</li>\n</ul></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}]}]},{type:"event",attributes:{"name":"metaDataChanged"},children:[{type:"desc",attributes:{"text":"<p>Fired when the meta data changed (the stuff shown in the table header).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}]}]}]},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"hasError":"true","name":"getColumnCount"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"22","line":"117"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getColumnId"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"127"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getColumnIndexById"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnId"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"122"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getColumnName"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"132"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getRowCount"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"70"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getRowData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"rowIndex"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"18","line":"74"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getSortColumnIndex"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"89"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}},{type:"param",attributes:{"name":"rowIndex"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"100"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getValueById"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnId"}},{type:"param",attributes:{"name":"rowIndex"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"104"}}]}]},{type:"method",attributes:{"hasError":"true","name":"isColumnEditable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"78"}}]}]},{type:"method",attributes:{"hasError":"true","name":"isColumnSortable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"24","line":"82"}}]}]},{type:"method",attributes:{"hasError":"true","name":"isSortAscending"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"23","line":"93"}}]}]},{type:"method",attributes:{"hasError":"true","name":"prefetchRows"},children:[{type:"params",children:[{type:"param",attributes:{"name":"firstRowIndex"}},{type:"param",attributes:{"name":"lastRowIndex"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"97"}}]}]},{type:"method",attributes:{"name":"setColumnIds"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIdArr"},children:[{type:"desc",attributes:{"text":"<p>the IDs of the columns.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String","dimensions":"1"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the column IDs. These IDs may be used internally to identify a column.</p>\n\n<p>Note: This will clear previously set column names.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"see",attributes:{"name":"#setColumns"}}]},{type:"method",attributes:{"name":"setColumnNamesById"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnNameMap"},children:[{type:"desc",attributes:{"text":"<p>a map containing the column IDs as keys and the\n         column name as values.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the column names. These names will be shown to the user.</p>\n\n<p>Note: The column IDs have to be defined before.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"see",attributes:{"name":"#setColumnIds"}}]},{type:"method",attributes:{"name":"setColumnNamesByIndex"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnNameArr"},children:[{type:"desc",attributes:{"text":"<p>the names of the columns.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String","dimensions":"1"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the column names. These names will be shown to the user.</p>\n\n<p>Note: The column IDs have to be defined before.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"see",attributes:{"name":"#setColumnIds"}}]},{type:"method",attributes:{"name":"setColumns"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnNameArr"},children:[{type:"desc",attributes:{"text":"<p>The column names. These names will be shown to\n         the user.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String","dimensions":"1"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"columnIdArr"},children:[{type:"desc",attributes:{"text":"<p>The column IDs. These IDs may be used\n         internally to identify a column. If null, the column names are used as\n         IDs.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String","dimensions":"1"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the columns.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"setValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}},{type:"param",attributes:{"name":"rowIndex"}},{type:"param",attributes:{"name":"value"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"108"}}]}]},{type:"method",attributes:{"hasError":"true","name":"setValueById"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnId"}},{type:"param",attributes:{"name":"rowIndex"}},{type:"param",attributes:{"name":"value"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"112"}}]}]},{type:"method",attributes:{"hasError":"true","name":"sortByColumn"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}},{type:"param",attributes:{"name":"ascending"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"86"}}]}]}]}]}