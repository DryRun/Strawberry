Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("			<div id=\"content-right-title\">\n				<h1>Roster</h1>\n			</div>\n			<div id=\"membership-content-box\">\n				<p>\n					<a href=\"updateroster.php\">Enter or update</a> your roster entry.\n				</p>\n				<div id=\"roster-div\">\n					");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n				</div>\n			</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push(" Go to the members page ");
  }

  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "members", options) : helperMissing.call(depth0, "link-to", "members", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["member"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"member-overlay\">\n	<h2>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "nameFormatted", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h2>\n	<span>Gender: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "gender", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n	<span>DOB: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "dob", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["members"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n					<li class=\"horizontal-li\">\n						<ul class=\"member-info-ul\">\n							<li class=\"member-info-name\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "member", "member", options) : helperMissing.call(depth0, "link-to", "member", "member", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n							<li class=\"member-info-gender\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "member.gender", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</li>\n							<li class=\"member-info-division\">Unknown</li>\n						</ul>\n					</li>\n				");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "member.nameFormatted", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n					<li>No members found!</li>\n				");
  }

  data.buffer.push("			<ul id=\"roster-ul\" class=\"members-listing\">\n				<li>\n					<ul class=\"member-info-ul\" style=\"font-family: QuicksandBook, FuturaBook, sans serif; font-weight: 200; font-size: 1.1em\">\n						<li class=\"member-info-name\">\n							Name\n						</li>\n						<li class=\"member-info-gender\">\n							Gender\n						</li>\n						<li class=\"member-info-division\">\n							Division\n						</li>\n					</ul>\n				</li>\n				");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "member", "in", "controller", {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n			</ul>\n");
  return buffer;
  
});