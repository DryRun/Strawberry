Ember.TEMPLATES["member"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div id=\"member-info-box-interior\">\n	<!--<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Edit</button>-->\n	<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">X</button>\n\n	<h2>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "nameF", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("&nbsp;");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "nameL", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h2>\n	<p>Division: ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.getAgeDivision || (depth0 && depth0.getAgeDivision)),stack1 ? stack1.call(depth0, "dob", options) : helperMissing.call(depth0, "getAgeDivision", "dob", options))));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.getPrettyGender || (depth0 && depth0.getPrettyGender)),stack1 ? stack1.call(depth0, "gender", options) : helperMissing.call(depth0, "getPrettyGender", "gender", options))));
  data.buffer.push("</p>\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["member/edit"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n		<h2>Edit Member Info</h2>\n	");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n		<h2>Add New Member</h2>\n	");
  }

  data.buffer.push("<div>\n<div id=\"modal-outlet\">\n	<div class=\"floatright\">\n		<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">X</button>\n	</div>\n	<div class=\"clearfloat\"></div>\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "member.nameF", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	<!--<div>\n		<label>Username</label>\n		");
  hashContexts = {'value': depth0,'name': depth0};
  hashTypes = {'value': "ID",'name': "STRING"};
  options = {hash:{
    'value': ("username"),
    'name': ("username")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	</div>-->\n	<div>\n		<label>First</label>\n		");
  hashContexts = {'value': depth0,'name': depth0};
  hashTypes = {'value': "ID",'name': "STRING"};
  options = {hash:{
    'value': ("nameF"),
    'name': ("nameF")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		<label>Middle</label>\n		");
  hashContexts = {'value': depth0,'name': depth0};
  hashTypes = {'value': "ID",'name': "STRING"};
  options = {hash:{
    'value': ("nameM"),
    'name': ("nameM")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		<label>Last</label>\n		");
  hashContexts = {'value': depth0,'name': depth0};
  hashTypes = {'value': "ID",'name': "STRING"};
  options = {hash:{
    'value': ("nameL"),
    'name': ("nameL")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	</div>\n	<div>\n		<label>Gender</label>\n		");
  hashContexts = {'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'name': depth0,'value': depth0};
  hashTypes = {'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'name': "STRING",'value': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("controllers.members.genders"),
    'optionValuePath': ("content.value"),
    'optionLabelPath': ("content.display"),
    'name': ("gender"),
    'value': ("gender")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	</div>\n	<div>\n		<label>Month</label>\n		");
  hashContexts = {'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'name': depth0,'value': depth0};
  hashTypes = {'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'name': "STRING",'value': "ID"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("controllers.members.months"),
    'optionValuePath': ("content.value"),
    'optionLabelPath': ("content.display"),
    'name': ("dobMonth"),
    'value': ("intDobMonth")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n		<label>Day</label>\n		");
  hashContexts = {'value': depth0,'name': depth0};
  hashTypes = {'value': "ID",'name': "STRING"};
  options = {hash:{
    'value': ("intDobDay"),
    'name': ("dobDay")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		<label>Year</label>\n		");
  hashContexts = {'value': depth0,'name': depth0};
  hashTypes = {'value': "ID",'name': "STRING"};
  options = {hash:{
    'value': ("intDobYear"),
    'name': ("dobYear")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	</div>\n	<div id=\"recaptcha-box\">\n	</div>\n	<div id=\"create-member-output-box\"></div>\n\n	<div class=\"floatleft\">\n		<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Save </button>\n	</div>\n	<div class=\"clearfloat\"></div>\n</div>\n</div>\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
});

Ember.TEMPLATES["members"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n						");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "member.display", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n							<li class=\"horizontal-li\">\n								<ul class=\"member-info-ul\">\n									<li class=\"member-info-name\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "member", "member", options) : helperMissing.call(depth0, "link-to", "member", "member", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n									<li class=\"member-info-division\">\n										");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.getAgeDivision || (depth0 && depth0.getAgeDivision)),stack1 ? stack1.call(depth0, "member.dob", options) : helperMissing.call(depth0, "getAgeDivision", "member.dob", options))));
  data.buffer.push(" ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.getPrettyGender || (depth0 && depth0.getPrettyGender)),stack1 ? stack1.call(depth0, "member.gender", options) : helperMissing.call(depth0, "getPrettyGender", "member.gender", options))));
  data.buffer.push("\n									</li>\n								</ul>\n							</li>\n						");
  return buffer;
  }
function program3(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "member.nameFormatted", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n						<li>No members found!</li>\n					");
  }

  data.buffer.push("	<div id=\"membership-content-box\">\n		<div id=\"content-right-title\">\n			<h1>Roster</h1>\n		</div>\n		<div id=\"roster-div\">\n			<div id=\"roster-box\" class=\"floatleft\">\n				<ul id=\"roster-ul\" class=\"members-listing\">\n					<li>\n						<ul class=\"member-info-ul\" style=\"font-family: QuicksandBook, FuturaBook, sans serif; font-weight: 200; font-size: 1.1em\">\n							<li class=\"member-info-name\">\n								Name\n							</li>\n							<li class=\"member-info-division\">\n								Division\n							</li>\n						</ul>\n					</li>\n					");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "member", "in", "controller", {hash:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				</ul>\n				<div style=\"display: block\">\n					<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "create", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">New Member</button>\n\n					<p>Don't see yourself? Click the button above, or send a message to our <a href=\"http://strawberrycanyontc.org/clubinfo/contact.php\">contact form</a>, including your name and birthday.</p>\n				</div>\n			</div>\n			<div id=\"member-info-box\" class=\"floatright\">\n				");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n			</div>\n			<div class=\"clearfloat\"></div>\n			");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet || (depth0 && depth0.outlet)),stack1 ? stack1.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  data.buffer.push("\n		</div>\n	</div>");
  return buffer;
  
});

Ember.TEMPLATES["members/create"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n		<h2>Edit Member Info</h2>\n	");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n		<h2>Add New Member</h2>\n	");
  }

  data.buffer.push("	<div class=\"floatright\">\n		<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">X</button>\n	</div>\n	<div class=\"clearfloat\"></div>\n	");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "member", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	<div>\n		<label>Username</label>\n		");
  hashContexts = {'value': depth0,'name': depth0};
  hashTypes = {'value': "ID",'name': "STRING"};
  options = {hash:{
    'value': ("handle"),
    'name': ("handle")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	</div>\n	<div>\n		<label>First</label>\n		");
  hashContexts = {'value': depth0,'name': depth0};
  hashTypes = {'value': "ID",'name': "STRING"};
  options = {hash:{
    'value': ("nameF"),
    'name': ("nameF")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		<label>Middle</label>\n		");
  hashContexts = {'value': depth0,'name': depth0};
  hashTypes = {'value': "ID",'name': "STRING"};
  options = {hash:{
    'value': ("nameM"),
    'name': ("nameM")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		<label>Last</label>\n		");
  hashContexts = {'value': depth0,'name': depth0};
  hashTypes = {'value': "ID",'name': "STRING"};
  options = {hash:{
    'value': ("nameL"),
    'name': ("nameL")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	</div>\n	<div>\n		<label>Gender</label>\n		");
  hashContexts = {'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'name': depth0};
  hashTypes = {'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'name': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("controllers.members.genders"),
    'optionValuePath': ("content.value"),
    'optionLabelPath': ("content.display"),
    'name': ("gender")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	<div>\n		<label>Month</label>\n		");
  hashContexts = {'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'name': depth0};
  hashTypes = {'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'name': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("controllers.members.months"),
    'optionValuePath': ("content.value"),
    'optionLabelPath': ("content.display"),
    'name': ("dobMonth")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n		<label>Day</label>\n		");
  hashContexts = {'value': depth0,'name': depth0};
  hashTypes = {'value': "STRING",'name': "STRING"};
  options = {hash:{
    'value': ("DD"),
    'name': ("dobDay")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		<label>Year</label>\n		");
  hashContexts = {'value': depth0,'name': depth0};
  hashTypes = {'value': "STRING",'name': "STRING"};
  options = {hash:{
    'value': ("YYYY"),
    'name': ("dobYear")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || (depth0 && depth0.input)),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	</div>\n	<div class=\"floatleft\">\n		<button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("> Save </button>\n	</div>\n	<div class=\"clearfloat\"></div>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  return buffer;
  
});