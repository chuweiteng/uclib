Ext.data.JsonP.obj_t({"tagname":"class","name":"obj_t","autodetected":{},"files":[{"filename":"obj.js","href":"obj.html#obj_t"}],"members":[{"name":"obj_copy","tagname":"method","owner":"obj_t","id":"method-obj_copy","meta":{}},{"name":"obj_dup","tagname":"method","owner":"obj_t","id":"method-obj_dup","meta":{}},{"name":"obj_emit","tagname":"method","owner":"obj_t","id":"method-obj_emit","meta":{}},{"name":"obj_init","tagname":"method","owner":"obj_t","id":"method-obj_init","meta":{}},{"name":"obj_off","tagname":"method","owner":"obj_t","id":"method-obj_off","meta":{}},{"name":"obj_on","tagname":"method","owner":"obj_t","id":"method-obj_on","meta":{}},{"name":"obj_prop","tagname":"method","owner":"obj_t","id":"method-obj_prop","meta":{}},{"name":"obj_ref","tagname":"method","owner":"obj_t","id":"method-obj_ref","meta":{}},{"name":"obj_set_prop","tagname":"method","owner":"obj_t","id":"method-obj_set_prop","meta":{}},{"name":"obj_unref","tagname":"method","owner":"obj_t","id":"method-obj_unref","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-obj_t","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/obj.html#obj_t' target='_blank'>obj.js</a></div></pre><div class='doc-contents'><p>通用的对象。提供通用的属性设置/获取函数，和事件注册/分发功能。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-obj_copy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='obj_t'>obj_t</span><br/><a href='source/obj.html#obj_t-method-obj_copy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/obj_t-method-obj_copy' class='name expandable'>obj_copy</a>( <span class='pre'>obj, other</span> ) : bool_t<span class=\"signature\"></span></div><div class='description'><div class='short'>深度拷贝对象。 ...</div><div class='long'><p>深度拷贝对象。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : obj_t*<div class='sub-desc'><p>obj对象。</p>\n</div></li><li><span class='pre'>other</span> : obj_t*<div class='sub-desc'><p>源obj对象。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>bool_t</span><div class='sub-desc'><p>成功返回TRUE，失败返回FALSE。</p>\n</div></li></ul></div></div></div><div id='method-obj_dup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='obj_t'>obj_t</span><br/><a href='source/obj.html#obj_t-method-obj_dup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/obj_t-method-obj_dup' class='name expandable'>obj_dup</a>( <span class='pre'>obj</span> ) : obj_t*<span class=\"signature\"></span></div><div class='description'><div class='short'>复制对象。 ...</div><div class='long'><p>复制对象。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : obj_t*<div class='sub-desc'><p>obj对象。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>obj_t*</span><div class='sub-desc'><p>新的obj对象。</p>\n</div></li></ul></div></div></div><div id='method-obj_emit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='obj_t'>obj_t</span><br/><a href='source/obj.html#obj_t-method-obj_emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/obj_t-method-obj_emit' class='name expandable'>obj_emit</a>( <span class='pre'>obj, event</span> ) : bool_t<span class=\"signature\"></span></div><div class='description'><div class='short'>分发事件。 ...</div><div class='long'><p>分发事件。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : obj_t*<div class='sub-desc'><p>事件发射器对象。</p>\n</div></li><li><span class='pre'>event</span> : event_t*<div class='sub-desc'><p>事件。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>bool_t</span><div class='sub-desc'><p>成功返回TRUE，失败返回FALSE。</p>\n</div></li></ul></div></div></div><div id='method-obj_init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='obj_t'>obj_t</span><br/><a href='source/obj.html#obj_t-method-obj_init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/obj_t-method-obj_init' class='name expandable'>obj_init</a>( <span class='pre'>obj, magic</span> ) : obj_t*<span class=\"signature\"></span></div><div class='description'><div class='short'>初始化obj，在分配对象内存之后，就应该调用本函数。 ...</div><div class='long'><p>初始化obj，在分配对象内存之后，就应该调用本函数。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : obj_t*<div class='sub-desc'><p>对象</p>\n</div></li><li><span class='pre'>magic</span> : uint16_t<div class='sub-desc'><p>对象属类的标识。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>obj_t*</span><div class='sub-desc'><p>返回对象本身。</p>\n</div></li></ul></div></div></div><div id='method-obj_off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='obj_t'>obj_t</span><br/><a href='source/obj.html#obj_t-method-obj_off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/obj_t-method-obj_off' class='name expandable'>obj_off</a>( <span class='pre'>obj, name, on_event, ctx</span> ) : bool_t<span class=\"signature\"></span></div><div class='description'><div class='short'>注销指定的事件处理函数。 ...</div><div class='long'><p>注销指定的事件处理函数。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : obj_t*<div class='sub-desc'><p>事件发射器对象。</p>\n</div></li><li><span class='pre'>name</span> : const char*<div class='sub-desc'><p>事件名。</p>\n</div></li><li><span class='pre'>on_event</span> : on_event_t*<div class='sub-desc'><p>回调函数指针。</p>\n</div></li><li><span class='pre'>ctx</span> : void*<div class='sub-desc'><p>回调函数的上下文。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>bool_t</span><div class='sub-desc'><p>成功返回TRUE，失败返回FALSE。</p>\n</div></li></ul></div></div></div><div id='method-obj_on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='obj_t'>obj_t</span><br/><a href='source/obj.html#obj_t-method-obj_on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/obj_t-method-obj_on' class='name expandable'>obj_on</a>( <span class='pre'>obj, name, on_event, ctx</span> ) : bool_t<span class=\"signature\"></span></div><div class='description'><div class='short'>注册指定的事件处理函数，事件发生后调用指定的回调函数。 ...</div><div class='long'><p>注册指定的事件处理函数，事件发生后调用指定的回调函数。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : obj_t*<div class='sub-desc'><p>事件发射器对象。</p>\n</div></li><li><span class='pre'>name</span> : const char*<div class='sub-desc'><p>事件名。</p>\n</div></li><li><span class='pre'>on_event</span> : on_event_t*<div class='sub-desc'><p>回调函数指针。</p>\n</div></li><li><span class='pre'>ctx</span> : void*<div class='sub-desc'><p>回调函数的上下文。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>bool_t</span><div class='sub-desc'><p>成功返回TRUE，失败返回FALSE。</p>\n</div></li></ul></div></div></div><div id='method-obj_prop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='obj_t'>obj_t</span><br/><a href='source/obj.html#obj_t-method-obj_prop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/obj_t-method-obj_prop' class='name expandable'>obj_prop</a>( <span class='pre'>obj, prop</span> ) : bool_t<span class=\"signature\"></span></div><div class='description'><div class='short'>获取对象的属性。 ...</div><div class='long'><p>获取对象的属性。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : obj_t*<div class='sub-desc'><p>obj对象。</p>\n</div></li><li><span class='pre'>prop</span> : const char*<div class='sub-desc'><p>属性名。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>bool_t</span><div class='sub-desc'><p>返回属性值。</p>\n</div></li></ul></div></div></div><div id='method-obj_ref' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='obj_t'>obj_t</span><br/><a href='source/obj.html#obj_t-method-obj_ref' target='_blank' class='view-source'>view source</a></div><a href='#!/api/obj_t-method-obj_ref' class='name expandable'>obj_ref</a>( <span class='pre'>obj</span> ) : obj_t*<span class=\"signature\"></span></div><div class='description'><div class='short'>增加引用计数。 ...</div><div class='long'><p>增加引用计数。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : obj_t*<div class='sub-desc'><p>obj对象。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>obj_t*</span><div class='sub-desc'><p>obj对象本身。</p>\n</div></li></ul></div></div></div><div id='method-obj_set_prop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='obj_t'>obj_t</span><br/><a href='source/obj.html#obj_t-method-obj_set_prop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/obj_t-method-obj_set_prop' class='name expandable'>obj_set_prop</a>( <span class='pre'>obj, prop, value</span> ) : bool_t<span class=\"signature\"></span></div><div class='description'><div class='short'>获取对象的属性。 ...</div><div class='long'><p>获取对象的属性。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : obj_t*<div class='sub-desc'><p>obj对象。</p>\n</div></li><li><span class='pre'>prop</span> : obj_t*<div class='sub-desc'><p>属性名。</p>\n</div></li><li><span class='pre'>value</span> : value_t<div class='sub-desc'><p>属性值。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>bool_t</span><div class='sub-desc'><p>成功返回TRUE，失败返回FALSE。</p>\n</div></li></ul></div></div></div><div id='method-obj_unref' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='obj_t'>obj_t</span><br/><a href='source/obj.html#obj_t-method-obj_unref' target='_blank' class='view-source'>view source</a></div><a href='#!/api/obj_t-method-obj_unref' class='name expandable'>obj_unref</a>( <span class='pre'>obj</span> ) : obj_t*<span class=\"signature\"></span></div><div class='description'><div class='short'>减少引用计数。 ...</div><div class='long'><p>减少引用计数。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : obj_t*<div class='sub-desc'><p>obj对象。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>obj_t*</span><div class='sub-desc'><p>引用计数仍然大于0返回obj对象本身，否则返回NULL。</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});