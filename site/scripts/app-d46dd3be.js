!function(){"use strict";angular.module("admin",["ngMaterial"])}(),function(){"use strict";function e(e){var a=[{text:"Continuous integration",done:!1},{text:"Implement panel-widget directive",done:!0},{text:"Add backend",done:!1}];return{loadAllItems:function(){return e.when(a)}}}angular.module("admin").service("todoListService",["$q",e])}(),function(){function e(e){function a(){o.todos.push({text:o.todoText,done:!1}),o.todoText=""}function n(){var e=0;return angular.forEach(o.todos,function(a){e+=a.done?0:1}),e}function t(e){e.preventDefault();var a=o.todos;o.todos=[],angular.forEach(a,function(e){e.done||o.todos.push(e)})}var o=this;o.addTodo=a,o.remaining=n,o.archive=t,o.todos=[],e.loadAllItems().then(function(e){o.todos=[].concat(e)})}angular.module("admin").controller("TodoController",["todoListService",e])}(),function(){function e(){}angular.module("admin").controller("TableController",[e])}(),function(){function e(e,a,n){function t(n){var t,i=n?d.countries.filter(o(n)):[];return t=a.defer(),e(function(){t.resolve(i)},1e3*Math.random(),!1),t.promise}function o(e){var a=angular.lowercase(e);return function(e){return 0===e.value.indexOf(a)}}var d=this;d.countries=n.loadAll(),d.selectedCountry=null,d.searchText=null,d.querySearch=t}angular.module("admin").controller("SearchController",["$timeout","$q","countriesService",e])}(),function(){"use strict";function e(e){var a=[{title:"Database",value:54,theme:"dark"},{title:"Web external",value:64,theme:""},{title:"Middleware",value:13,theme:"grey"},{title:"Ruby",value:29,theme:"red"}];return{loadAllItems:function(){return e.when(a)}}}angular.module("admin").service("progressService",["$q",e])}(),function(){function e(e){var a=this;a.progressData=[],e.loadAllItems().then(function(e){a.progressData=[].concat(e)})}angular.module("admin").controller("ProgressController",["progressService",e])}(),function(){function e(){var e=this;e.user={title:"Admin",email:"contact@flatlogic.com",firstName:"",lastName:"",company:"FlatLogic Inc.",address:"Kulman street, 1",city:"Minsk",state:"",biography:"We are young and ambitious full service design and technology company. Our focus is JavaScript development and User Interface design.",postalCode:"220013"}}angular.module("admin").controller("ProfileController",[e])}(),function(){"use strict";function e(e){var a=[{name:"Dashboard",icon:"dashboard",sref:".dashboard"},{name:"Profile",icon:"profile",sref:".profile"},{name:"Table",icon:"table",sref:".table"}];return{loadAllItems:function(){return e.when(a)}}}angular.module("admin").service("navService",["$q",e])}(),function(){"use strict";function e(e){var a=[{userPhoto:"/assets/images/user.svg",subject:"Electromagnetic radiation",userName:"Wilhelm Conrad Röntgen",date:"1901",text:"In recognition of the extraordinary services he has rendered by the discovery of the remarkable rays subsequently named after him"},{userPhoto:"/assets/images/user.svg",subject:"Quantum theory",userName:"Max Planck",date:"1918",text:"For the services he rendered to the advancement of physics by his discovery of energy quanta."},{userPhoto:"/assets/images/user.svg",subject:"Photoelectric effect",userName:"Albert Einstein",date:"1921",text:"For his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect"},{userPhoto:"/assets/images/user.svg",subject:"Atomic structure",userName:"Niels Bohr",date:"1922",text:"For his services in the investigation of the structure of atoms and of the radiation emanating from them"},{userPhoto:"/assets/images/user.svg",subject:"Wave equation",userName:"Erwin Schrödinger",date:"1933",text:"For the discovery of new productive forms of atomic theory"},{userPhoto:"/assets/images/user.svg",subject:"Spin theory",userName:"Wolfgang Pauli",date:"1945",text:"For the discovery of the Exclusion Principle, also called the Pauli principle"}];return{loadAllItems:function(){return e.when(a)}}}angular.module("admin").service("messagesService",["$q",e])}(),function(){function e(e){var a=this;a.messages=[],e.loadAllItems().then(function(e){a.messages=[].concat(e)})}angular.module("admin").controller("MessagesController",["messagesService",e])}(),function(){function e(e,a,n,t,o,d,i){function m(){var e=n.hide()||o.when(!0);e.then(function(){a("left").toggle()})}function l(e){s.title=e.name,s.toggleItemsList(),s.showSimpleToast(s.title)}function r(e){function a(e){var a=this;a.actions=[{name:"Action1"},{name:"Action2"},{name:"Action3"},{name:"Action4"}],a.performAction=function(a){e.hide(a)}}n.show({parent:angular.element(document.getElementById("content")),templateUrl:"app/views/partials/bottomSheet.html",controller:["$mdBottomSheet",a],controllerAs:"vm",bindToController:!0,targetEvent:e}).then(function(e){e&&t.debug(e.name+" clicked!")})}function c(e){i.show(i.simple().content(e).hideDelay(2e3).position("top right"))}var s=this;s.menuItems=[],s.selectItem=l,s.toggleItemsList=m,s.showActions=r,s.title=d.current.data.title,s.showSimpleToast=c,e.loadAllItems().then(function(e){s.menuItems=[].concat(e)})}angular.module("admin").controller("MainController",["navService","$mdSidenav","$mdBottomSheet","$log","$q","$state","$mdToast",e])}(),function(){function e(e){function a(){n.startValue=100,n.bufferValue=100,alert=e.alert({title:"Reloading done!",content:n.reloadServer+" server reloaded.",ok:"Close"}),setTimeout(function(){e.show(alert).finally(function(){alert=void 0}),n.startValue=0,n.bufferValue=1},500)}var n=this;n.buttonEnabled=!1,n.reloadServer="Staging",n.showAlert=a,n.startValue=0,n.bufferValue=1}angular.module("admin").controller("InfoPanelController",["$mdDialog",e])}(),function(){"use strict";function e(){var e=[{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}];return{loadAll:function(){return e.map(function(e){return{value:e.name.toLowerCase(),display:e.name,code:e.code}})}}}angular.module("admin").service("countriesService",[e])}(),angular.module("angularMaterialAdmin",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router","ngMaterial","admin"]).config(["$stateProvider","$urlRouterProvider","$mdThemingProvider","$mdIconProvider",function(e,a,n,t){e.state("home",{url:"",templateUrl:"app/views/main.html",controller:"MainController",controllerAs:"vm","abstract":!0}).state("home.dashboard",{url:"/dashboard",templateUrl:"app/views/dashboard.html",data:{title:"Dashboard"}}).state("home.profile",{url:"/profile",templateUrl:"app/views/profile.html",controller:"ProfileController",controllerAs:"vm",data:{title:"Profile"}}).state("home.table",{url:"/table",controller:"TableController",controllerAs:"vm",templateUrl:"app/views/table.html",data:{title:"Table"}}),a.otherwise("/dashboard"),n.theme("default").primaryPalette("teal").accentPalette("orange"),n.theme("dark","default").primaryPalette("orange").dark(),n.theme("grey","default").primaryPalette("grey"),n.theme("red","default").primaryPalette("red"),t.defaultIconSet("assets/images/icons.svg",128).icon("menu","assets/images/menu.svg",24).icon("user","assets/images/user.svg",64)}]).directive("panelWidget",function(){return{restrict:"E",replace:!0,transclude:!0,scope:{title:"@",template:"@"},template:'<section layout-margin class="md-whiteframe-z1">  <md-toolbar md-theme="grey" class="md-hue-1">    <div class="md-toolbar-tools">     <h3>{{title}}</h3>     <span flex></span>     <md-button>Options</md-button>    </div>  </md-toolbar>  <div ng-include="template"/></section>',compile:function(e,a,n){return function(e,a){n(e,function(e){a.append(e)})}}}}),angular.module("angularMaterialAdmin").run(["$templateCache",function(e){e.put("app/views/dashboard.html",'<md-grid-list layout-margin="" flex="" md-cols="3" md-row-height="2:1" md-gutter="12px"><md-grid-tile class="md-whiteframe-z1 blue"><div layout-fill="" layout="row" layout-align="center" class="md-tile-content"><h2>Over 9000</h2></div><md-grid-tile-footer><div class="md-tile-content" layout="row"><md-icon md-svg-icon="www"></md-icon><h2 layout-padding="">Site visitors</h2></div></md-grid-tile-footer></md-grid-tile><md-grid-tile class="md-whiteframe-z1 orange"><div layout-fill="" layout="row" layout-align="center" class="md-tile-content"><h2>12</h2></div><md-grid-tile-footer><div class="md-tile-content" layout="row"><md-icon md-svg-icon="notifications"></md-icon><h2 layout-padding="">Warnings</h2></div></md-grid-tile-footer></md-grid-tile><md-grid-tile class="md-whiteframe-z1 green"><div layout-fill="" layout="row" layout-align="center" class="md-tile-content"><h2>42%</h2></div><md-grid-tile-footer><div class="md-tile-content" layout="row"><md-icon md-svg-icon="memory"></md-icon><h2 layout-padding="">Memory load</h2></div></md-grid-tile-footer></md-grid-tile></md-grid-list><div layout="row"><panel-widget flex="50" title="Information Panel" template="app/views/partials/infoPanel.html"></panel-widget><panel-widget flex="" title="Autocomplete Input" template="app/views/partials/autocomplete.html"></panel-widget></div><div layout="row"><panel-widget flex="60" title="Messages" template="app/views/partials/messages.html"></panel-widget><div layout="column"><panel-widget title="Application Performance" template="app/views/partials/progress.html"></panel-widget><panel-widget flex="" title="TODO list" template="app/views/partials/checkboxes.html"></panel-widget></div></div>'),e.put("app/views/main.html",'<md-sidenav md-is-locked-open="$mdMedia(\'gt-sm\')" md-component-id="left" class="md-whiteframe-z2 md-sidenav-left"><md-toolbar class="md-accent"><h1 class="md-toolbar-tools">Angular Material Admin</h1></md-toolbar><md-list><md-item ng-repeat="item in vm.menuItems"><md-item-content><md-button layout="row" flex="" ng-click="vm.selectItem(item)" ui-sref-active="md-accent" ui-sref="{{item.sref}}"><div flex="30" class="md-tile-content"><md-icon md-svg-icon="{{item.icon}}"></md-icon></div><div layout="row" layout-align="start" class="md-tile-content">{{item.name}}</div></md-button></md-item-content></md-item></md-list></md-sidenav><div layout="column" flex=""><md-toolbar layout="row"><md-button hide-gt-sm="" ng-click="vm.toggleItemsList()" aria-label="Show Menu"><md-icon md-svg-icon="menu"></md-icon></md-button><h2 class="md-toolbar-tools">{{vm.title}}</h2><md-select layout-fill="" layout="row" flex="10" placeholder="Admin" ng-model="admin"><md-option ui-sref="home.profile" value="1">Profile</md-option><md-option ng-click="vm.showActions($event)" value="2">Actions</md-option></md-select><md-icon flex="10" md-svg-icon="user"></md-icon></md-toolbar><md-content flex="" class="md-padding"><div ui-view=""></div></md-content></div>'),e.put("app/views/profile.html",'<md-content md-theme="dark" class="md-padding" layout="row" layout-sm="column"><md-input-container><label>Username</label> <input ng-model="vm.user.title"></md-input-container><md-input-container><label>Email</label> <input ng-model="vm.user.email" type="email"></md-input-container></md-content><md-content class="md-padding"><form name="userForm"><div layout="" layout-sm="column"><md-input-container flex="80"><label>Company (Disabled)</label> <input ng-model="vm.user.company" disabled=""></md-input-container><md-input-container flex=""><label>Submission Date</label> <input type="date" ng-model="vm.user.submissionDate"></md-input-container></div><div layout="" layout-sm="column"><md-input-container flex=""><label>First Name</label> <input ng-model="vm.user.firstName" placeholder="Placeholder text"></md-input-container><md-input-container flex=""><label>Last Name</label> <input ng-model="vm.user.lastName"></md-input-container></div><md-input-container flex=""><label>Address</label> <input ng-model="vm.user.address"></md-input-container><div layout="" layout-sm="column"><md-input-container flex=""><label>City</label> <input ng-model="vm.user.city"></md-input-container><md-input-container flex=""><label>State</label> <input ng-model="user.state"></md-input-container><md-input-container flex=""><label>Postal Code</label> <input ng-model="vm.user.postalCode"></md-input-container></div><md-input-container flex=""><label>About us</label> <textarea ng-model="vm.user.biography" columns="1" md-maxlength="150"></textarea></md-input-container></form></md-content>'),e.put("app/views/table.html","<h2>table</h2>"),e.put("app/views/partials/autocomplete.html",'<md-content ng-controller="SearchController as vm" class="md-padding"><md-autocomplete placeholder="Search country" md-selected-item="vm.selectedCountry" md-search-text="vm.searchText" md-items="item in vm.querySearch(vm.searchText)" md-item-text="item.display"><span md-highlight-text="vm.searchText">{{item.display}}</span></md-autocomplete><p>Selected country: <b>{{vm.selectedCountry.display || \'No country selected\'}}</b></p><p>Country code: <b>{{vm.selectedCountry.code || \'No country selected\'}}</b></p></md-content>'),e.put("app/views/partials/bottomSheet.html",'<md-bottom-sheet class="md-grid"><md-list><md-item ng-repeat="action in vm.actions"><md-button ng-click="vm.performAction(action)"><p>{{action.name}}</p></md-button></md-item></md-list></md-bottom-sheet>'),e.put("app/views/partials/checkboxes.html",'<md-content class="todolist-content md-padding" ng-controller="TodoController as vm"><md-subheader class="md-primary"><span>{{vm.remaining()}} of {{vm.todos.length}} remaining</span></md-subheader><md-checkbox ng-repeat="todo in vm.todos" ng-model="todo.done">{{todo.text}}</md-checkbox><form ng-submit="vm.addTodo($event)"><md-input-container><label>Add new todo</label> <input ng-model="vm.todoText"></md-input-container><md-button class="md-raised md-primary">Add new</md-button><md-button class="md-warn" ng-click="vm.archive($event)">Remove completed</md-button></form></md-content>'),e.put("app/views/partials/infoPanel.html",'<md-content ng-controller="InfoPanelController as vm" class="md-padding"><md-progress-linear class="md-warn" md-mode="buffer" value="{{vm.startValue}}" md-buffer-value="{{vm.bufferValue}}"></md-progress-linear><md-radio-group ng-model="vm.reloadServer"><md-radio-button value="Staging">Staging server</md-radio-button><md-radio-button value="Production">Production server</md-radio-button></md-radio-group><md-button class="md-raised md-warn" ng-click="vm.showAlert()">Reload server</md-button></md-content>'),e.put("app/views/partials/messages.html",'<div class="messages" ng-controller="MessagesController as vm"><md-content class="messages-content"><section><md-subheader class="md-primary">New Orders</md-subheader><md-list layout="column"><md-item ng-repeat="message in vm.messages"><md-divider></md-divider><md-item-content><md-icon flex="10" md-svg-icon="user"></md-icon><div layout="row" flex=""><div class="md-tile-content"><h3>{{message.subject}}</h3><h4>{{message.userName}}</h4><p>{{message.text}}</p></div><div flex="10"><h4>{{message.date}}</h4></div></div></md-item-content></md-item></md-list></section><section><md-subheader>Awaiting delivery</md-subheader><md-list layout="column"><md-item ng-repeat="message in vm.messages"><md-divider></md-divider><md-item-content><md-icon flex="10" md-svg-icon="user"></md-icon><div layout="row" flex=""><div class="md-tile-content"><h3>{{message.subject}}</h3><h4>{{message.userName}}</h4><p>{{message.text}}</p></div><div flex="10"><h4>{{message.date}}</h4></div></div></md-item-content></md-item></md-list></section><section><md-subheader class="md-accent">Delivered</md-subheader><md-list layout="column"><md-item ng-repeat="message in vm.messages"><md-divider></md-divider><md-item-content><md-icon flex="10" md-svg-icon="user"></md-icon><div layout="row" flex=""><div class="md-tile-content"><h3>{{message.subject}}</h3><h4>{{message.userName}}</h4><p>{{message.text}}</p></div><div flex="10"><h4>{{message.date}}</h4></div></div></md-item-content></md-item></md-list></section><section><md-subheader class="md-warn">Problems reported</md-subheader><md-list layout="column"><md-item ng-repeat="message in vm.messages"><md-divider></md-divider><md-item-content><md-icon flex="10" md-svg-icon="user"></md-icon><div layout="row" flex=""><div class="md-tile-content"><h3>{{message.subject}}</h3><h4>{{message.userName}}</h4><p>{{message.text}}</p></div><div flex="10"><h4>{{message.date}}</h4></div></div></md-item-content></md-item></md-list></section></md-content></div>'),e.put("app/views/partials/progress.html",'<md-content ng-controller="ProgressController as vm" class="md-padding"><div layout-margin="" ng-repeat="data in vm.progressData"><div layout="row"><span>{{data.title}}</span> <span flex=""></span> <span>{{data.value}}%</span></div><md-progress-linear md-theme="{{data.theme}}" md-mode="determinate" value="{{data.value}}"></md-progress-linear></div></md-content>')}]);