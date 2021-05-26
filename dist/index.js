/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var e={265:function(e,t,n){var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(87)),o=n(570);function i(e,t,n){const r=new a(e,t,n);process.stdout.write(r.toString()+s.EOL)}t.issueCommand=i,t.issue=function(e,t=""){i(e,{},t)};class a{constructor(e,t,n){e||(e="missing.command"),this.command=e,this.properties=t,this.message=n}toString(){let e="::"+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let n=!0;for(const r in this.properties)if(this.properties.hasOwnProperty(r)){const s=this.properties[r];s&&(n?n=!1:e+=",",e+=`${r}=${t=s,o.toCommandValue(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}`)}}var t;return e+=`::${function(e){return o.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}(this.message)}`,e}}},225:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}u((r=r.apply(e,t||[])).next())}))},s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(265),i=n(108),a=n(570),u=s(n(87)),c=s(n(622));var l;function d(e){o.issue("error",e instanceof Error?e.toString():e)}function p(e){o.issue("group",e)}function h(){o.issue("endgroup")}!function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"}(l=t.ExitCode||(t.ExitCode={})),t.exportVariable=function(e,t){const n=a.toCommandValue(t);if(process.env[e]=n,process.env.GITHUB_ENV){const t="_GitHubActionsFileCommandDelimeter_",r=`${e}<<${t}${u.EOL}${n}${u.EOL}${t}`;i.issueCommand("ENV",r)}else o.issueCommand("set-env",{name:e},n)},t.setSecret=function(e){o.issueCommand("add-mask",{},e)},t.addPath=function(e){process.env.GITHUB_PATH?i.issueCommand("PATH",e):o.issueCommand("add-path",{},e),process.env.PATH=`${e}${c.delimiter}${process.env.PATH}`},t.getInput=function(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n)throw new Error(`Input required and not supplied: ${e}`);return n.trim()},t.setOutput=function(e,t){process.stdout.write(u.EOL),o.issueCommand("set-output",{name:e},t)},t.setCommandEcho=function(e){o.issue("echo",e?"on":"off")},t.setFailed=function(e){process.exitCode=l.Failure,d(e)},t.isDebug=function(){return"1"===process.env.RUNNER_DEBUG},t.debug=function(e){o.issueCommand("debug",{},e)},t.error=d,t.warning=function(e){o.issue("warning",e instanceof Error?e.toString():e)},t.info=function(e){process.stdout.write(e+u.EOL)},t.startGroup=p,t.endGroup=h,t.group=function(e,t){return r(this,void 0,void 0,(function*(){let n;p(e);try{n=yield t()}finally{h()}return n}))},t.saveState=function(e,t){o.issueCommand("save-state",{name:e},t)},t.getState=function(e){return process.env[`STATE_${e}`]||""}},108:function(e,t,n){var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=r(n(747)),o=r(n(87)),i=n(570);t.issueCommand=function(e,t){const n=process.env[`GITHUB_${e}`];if(!n)throw new Error(`Unable to find environment variable for file command ${e}`);if(!s.existsSync(n))throw new Error(`Missing file at path: ${n}`);s.appendFileSync(n,`${i.toCommandValue(t)}${o.EOL}`,{encoding:"utf8"})}},570:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toCommandValue=function(e){return null==e?"":"string"==typeof e||e instanceof String?e:JSON.stringify(e)}},371:(e,t,n)=>{const{PuppeteerExtraPlugin:r}=n(935);class s extends r{constructor(e={}){super(e)}get name(){return"stealth"}get defaults(){const e=new Set(["chrome.app","chrome.csi","chrome.loadTimes","chrome.runtime","iframe.contentWindow","media.codecs","navigator.hardwareConcurrency","navigator.languages","navigator.permissions","navigator.plugins","navigator.webdriver","sourceurl","user-agent-override","webgl.vendor","window.outerdimensions"]);return{availableEvasions:e,enabledEvasions:new Set([...e])}}get dependencies(){return new Set([...this.opts.enabledEvasions].map((e=>`${this.name}/evasions/${e}`)))}get availableEvasions(){return this.defaults.availableEvasions}get enabledEvasions(){return this.opts.enabledEvasions}set enabledEvasions(e){this.opts.enabledEvasions=e}async onBrowser(e){e&&e.setMaxListeners&&e.setMaxListeners(30)}}e.exports=e=>new s(e)},935:(e,t,n)=>{n.r(t),n.d(t,{PuppeteerExtraPlugin:()=>i});const r=require("debug");var s=n.n(r);const o=n(976);class i{constructor(e){this._debugBase=s()(`puppeteer-extra-plugin:base:${this.name}`),this._childClassMembers=[],this._opts=o(this.defaults,e||{}),this._debugBase("Initialized.")}get name(){throw new Error('Plugin must override "name"')}get defaults(){return{}}get requirements(){return new Set([])}get dependencies(){return new Set([])}get data(){return[]}get opts(){return this._opts}get debug(){return s()(`puppeteer-extra-plugin:${this.name}`)}async beforeLaunch(e){}async afterLaunch(e,t={options:{}}){}async beforeConnect(e){}async afterConnect(e,t={}){}async onBrowser(e,t){}async onTargetCreated(e){}async onPageCreated(e){}async onTargetChanged(e){}async onTargetDestroyed(e){}async onDisconnected(){}async onClose(){}async onPluginRegistered(){}getDataFromPlugins(e){return[]}_getMissingDependencies(e){const t=new Set(e.map((e=>e.name)));return new Set(Array.from(this.dependencies.values()).filter((e=>!t.has(e))))}async _bindBrowserEvents(e,t={}){(this._hasChildClassMember("onTargetCreated")||this._hasChildClassMember("onPageCreated"))&&e.on("targetcreated",this._onTargetCreated.bind(this)),this._hasChildClassMember("onTargetChanged")&&this.onTargetChanged&&e.on("targetchanged",this.onTargetChanged.bind(this)),this._hasChildClassMember("onTargetDestroyed")&&this.onTargetDestroyed&&e.on("targetdestroyed",this.onTargetDestroyed.bind(this)),this._hasChildClassMember("onDisconnected")&&this.onDisconnected&&e.on("disconnected",this.onDisconnected.bind(this)),"launch"===t.context&&this._hasChildClassMember("onClose")&&this.onClose&&(process.on("exit",this.onClose.bind(this)),e.on("disconnected",this.onClose.bind(this)),!1!==t.options.handleSIGINT&&process.on("SIGINT",this.onClose.bind(this)),!1!==t.options.handleSIGTERM&&process.on("SIGTERM",this.onClose.bind(this)),!1!==t.options.handleSIGHUP&&process.on("SIGHUP",this.onClose.bind(this))),"launch"===t.context&&this.afterLaunch&&await this.afterLaunch(e,t),"connect"===t.context&&this.afterConnect&&await this.afterConnect(e,t),this.onBrowser&&await this.onBrowser(e,t)}async _onTargetCreated(e){if(this.onTargetCreated&&await this.onTargetCreated(e),"page"===e.type()){const t=await e.page();this.onPageCreated&&await this.onPageCreated(t)}}_register(e){this._registerChildClassMembers(e),this.onPluginRegistered&&this.onPluginRegistered()}_registerChildClassMembers(e){this._childClassMembers=Object.getOwnPropertyNames(e)}_hasChildClassMember(e){return!!this._childClassMembers.includes(e)}get _isPuppeteerExtraPlugin(){return!0}}},432:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}u((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,s,o,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(s=2&o[0]?r.return:o[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;switch(r=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((s=(s=i.trys).length>0&&s[s.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){i.label=o[1];break}if(6===o[0]&&i.label<s[1]){i.label=s[1],s=o;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(o);break}s[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(225),i=n(129);console.log("installing puppeteer"),i.exec("sudo npm i puppeteer --unsafe-perm=true --allow-root",(function(){try{var e=n(750),t=n(371),i=o.getInput("account-id"),a=o.getInput("account-password");e.use(t()),r(void 0,void 0,void 0,(function(){var t,n,r;return s(this,(function(s){switch(s.label){case 0:return[4,e.launch({headless:!0})];case 1:return[4,(t=s.sent()).newPage()];case 2:return[4,(n=s.sent()).goto("https://accounts.google.com/signin/v2/identifier",{waitUntil:"networkidle2"})];case 3:return s.sent(),[4,n.waitForSelector("#identifierId")];case 4:return s.sent(),[4,n.type('input[type="email"]',i)];case 5:return s.sent(),[4,n.keyboard.press("Enter")];case 6:return s.sent(),[4,n.waitForSelector('input[type="password"]')];case 7:return s.sent(),[4,n.type('input[type="password"]',a)];case 8:return s.sent(),[4,n.keyboard.press("Enter")];case 9:return s.sent(),[4,n.content()];case 10:return r=s.sent(),console.log("data",r),[4,t.close()];case 11:return s.sent(),[2,new Promise((function(e){return e("end")}))]}}))})).then((function(e){return console.log(e)}),(function(e){return console.log(e)}))}catch(e){o.setFailed(e.message)}}))},129:e=>{e.exports=require("child_process")},747:e=>{e.exports=require("fs")},976:e=>{e.exports=require("merge-deep")},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")},750:e=>{e.exports=require("puppeteer")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(432)})();
//# sourceMappingURL=index.js.map