define([
  'dojo/text!./templates/<%=widgetName%>.html',
  'dojo/_base/declare',
  'dijit/_WidgetBase',<% if(widgetsInTemplate) { %>
  'dijit/_TemplatedMixin',
  'dijit/_WidgetsInTemplateMixin'<% } else { %>
  'dijit/_TemplatedMixin'<%}%>
], function(
  template,
  declare,
  _WidgetBase,<% if(widgetsInTemplate) { %>
  _TemplatedMixin,
  _WidgetsInTemplateMixin<% } else { %>
  _TemplatedMixin<%}%>
) {<% if(widgetsInTemplate) { %>
  return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {<% } else { %>
  return declare([_WidgetBase, _TemplatedMixin], {<%}%>
    templateString: template,
    baseClass: '<%= _.dasherize(widgetName).slice(1) %>',<% if(widgetsInTemplate) { %>
    widgetsInTemplate: true,<% }%>

    // Properties to be sent into constructor

    postCreate: function() {
      this.setupConnections();
      this.inherited(arguments);
    },

    setupConnections: function() {

    }
  });
});