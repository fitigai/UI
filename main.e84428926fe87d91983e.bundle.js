(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1104:function(module,exports,__webpack_require__){"use strict";__webpack_require__(4),__webpack_require__(53),__webpack_require__(41),__webpack_require__(26),__webpack_require__(43),__webpack_require__(1105),__webpack_require__(1106),__webpack_require__(7),__webpack_require__(42);var _clientApi=__webpack_require__(57),_clientLogger=__webpack_require__(36),_configFilename=__webpack_require__(1107);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1107:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1108:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(366).configure)([__webpack_require__(1109),__webpack_require__(1110)],module,!1)}).call(this,__webpack_require__(109)(module))},1109:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1109},1110:function(module,exports,__webpack_require__){var map={"./ui/avatar/Avatar.stories.js":1115,"./ui/button/Button.stories.js":1116,"./ui/dropdown/Dropdown.stories.js":1117,"./ui/heading/Heading.stories.js":1118,"./ui/icon/Icon.stories.js":1119,"./ui/input/Input.stories.js":1120,"./ui/loader/Loader.stories.js":1121,"./ui/logo/Logo.stories.js":1122,"./ui/text/Text.stories.js":1123};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1110},1115:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Avatar_stories_Default}));__webpack_require__(2);var jsx_runtime=__webpack_require__(12),styled_components_browser_esm=(__webpack_require__(0),__webpack_require__(6),__webpack_require__(26),__webpack_require__(29),__webpack_require__(47));function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  font-size: 16px;\n"]);return _templateObject=function _templateObject(){return data},data}var StyledAvatar=Object(styled_components_browser_esm.a)((function(_ref){var props=_extends({},_ref);return Object(jsx_runtime.jsx)("div",Object.assign({},props))}))(_templateObject()),Avatar_Avatar=function Avatar(){return Object(jsx_runtime.jsx)(StyledAvatar,{children:"avatar"})};Avatar_Avatar.displayName="Avatar",Avatar_Avatar.propTypes={},Avatar_Avatar.defaultProps={},Avatar_Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar"};var avatar_Avatar=Avatar_Avatar;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/avatar/Avatar.jsx"]={name:"Avatar",docgenInfo:Avatar_Avatar.__docgenInfo,path:"src/ui/avatar/Avatar.jsx"});__webpack_exports__.default={title:"UI/Avatar",component:avatar_Avatar};var Avatar_stories_Default=function Default(){return Object(jsx_runtime.jsx)(avatar_Avatar,{})};Avatar_stories_Default.displayName="Default",Avatar_stories_Default.parameters=Object.assign({storySource:{source:"() => <Avatar />"}},Avatar_stories_Default.parameters),Avatar_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/avatar/Avatar.stories.js"]={name:"Default",docgenInfo:Avatar_stories_Default.__docgenInfo,path:"src/ui/avatar/Avatar.stories.js"})},1116:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(16),__webpack_require__(259),__webpack_require__(2),__webpack_require__(7);var jsx_runtime=__webpack_require__(12),prop_types=(__webpack_require__(0),__webpack_require__(1)),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=(__webpack_require__(6),__webpack_require__(26),__webpack_require__(29),__webpack_require__(47)),constants=__webpack_require__(27);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  ","\n  ","\n  ","\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-block;\n  font-family: ",";\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n  margin: 0;\n  outline: none;\n  padding: 14px 24px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.2s ease;\n\n  &:active,\n  &:focus,\n  &:hover {\n    ","\n    ","\n    ","\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var style_getBackground=function getBackground(type){var color,isHover=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(type){case constants.a.MINIMAL:color=isHover?constants.c.BACKGROUND_LIGHT:"transparent";break;case constants.a.PLAIN:color=isHover?constants.c.BACKGROUND_DARKEST:"transparent";break;case constants.a.PRIMARY:default:color=isHover?"transparent":constants.c.BACKGROUND_DARKEST}return"background-color: ".concat(color,";")},style_getColor=function getColor(type){var color,isHover=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(type){case constants.a.MINIMAL:color=constants.c.TEXT;break;case constants.a.PLAIN:color=isHover?constants.c.TEXT_WHITE:constants.c.TEXT;break;case constants.a.PRIMARY:default:color=isHover?constants.c.TEXT:constants.c.TEXT_WHITE}return"color: ".concat(color,";")},style_getBorder=function getBorder(type){var color;switch(type){case constants.a.MINIMAL:color="transparent";break;case constants.a.PLAIN:color=constants.c.BACKGROUND_DARKEST;break;case constants.a.PRIMARY:default:color=constants.c.BACKGROUND_DARKEST}return"border: 2px solid ".concat(color,";")},StyledButton=Object(styled_components_browser_esm.a)((function(_ref){var Tag=_ref.as,props=(_ref.type,_objectWithoutProperties(_ref,["as","type"]));return Object(jsx_runtime.jsx)(Tag,Object.assign({},props))}))(_templateObject(),(function(_ref2){var type=_ref2.type;return style_getBackground(type)}),(function(_ref3){var type=_ref3.type;return style_getColor(type)}),(function(_ref4){var type=_ref4.type;return style_getBorder(type)}),constants.d.DEFAULT,(function(_ref5){var type=_ref5.type;return style_getBackground(type,!0)}),(function(_ref6){var type=_ref6.type;return style_getColor(type,!0)}),(function(_ref7){var type=_ref7.type;return style_getBorder(type)}));function Button_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Button_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}StyledButton.defaultProps={as:"button"};var Button_Button=function Button(_ref){var children=_ref.children,type=_ref.type,props=Button_objectWithoutProperties(_ref,["children","type"]);return Object(jsx_runtime.jsx)(StyledButton,Object.assign({type:type},props,{children:children}))};Button_Button.displayName="Button",Button_Button.propTypes={children:prop_types_default.a.any,type:prop_types_default.a.oneOf(constants.b)},Button_Button.defaultProps={},Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{type:{name:"any"},required:!1,description:""},type:{type:{name:"enum",computed:!0,value:"BUTTON_TYPES"},required:!1,description:""}}};var button_Button=Button_Button;function Button_stories_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Button_stories_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/button/Button.jsx"]={name:"Button",docgenInfo:Button_Button.__docgenInfo,path:"src/ui/button/Button.jsx"});__webpack_exports__.default={title:"UI/Button",component:button_Button,argTypes:{type:{control:{type:"select",options:constants.b}}}};var Button_stories_Story=function Story(_ref){var type=_ref.type,props=Button_stories_objectWithoutProperties(_ref,["type"]);return Object(jsx_runtime.jsx)(button_Button,Object.assign({type:type},props,{children:"Main title"}))};Button_stories_Story.displayName="Story";var Default=Button_stories_Story.bind({});Default.parameters=Object.assign({storySource:{source:"({ type, ...props }) => (\n  <Button type={type} {...props}>\n    Main title\n  </Button>\n)"}},Default.parameters)},1117:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Dropdown_stories_Default}));__webpack_require__(2);var jsx_runtime=__webpack_require__(12),styled_components_browser_esm=(__webpack_require__(0),__webpack_require__(6),__webpack_require__(26),__webpack_require__(29),__webpack_require__(47));function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  border: 1px solid blue;\n"]);return _templateObject=function _templateObject(){return data},data}var StyledDropdown=Object(styled_components_browser_esm.a)((function(_ref){var Tag=_ref.as,props=_objectWithoutProperties(_ref,["as"]);return Object(jsx_runtime.jsx)(Tag,Object.assign({},props))}))(_templateObject());StyledDropdown.defaultProps={as:"i"};var Dropdown_Dropdown=function Dropdown(){return Object(jsx_runtime.jsx)(StyledDropdown,{})};Dropdown_Dropdown.displayName="Dropdown",Dropdown_Dropdown.propTypes={},Dropdown_Dropdown.defaultProps={},Dropdown_Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown"};var dropdown_Dropdown=Dropdown_Dropdown;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/dropdown/Dropdown.jsx"]={name:"Dropdown",docgenInfo:Dropdown_Dropdown.__docgenInfo,path:"src/ui/dropdown/Dropdown.jsx"});__webpack_exports__.default={title:"UI/Dropdown",component:dropdown_Dropdown};var Dropdown_stories_Default=function Default(){return Object(jsx_runtime.jsx)(dropdown_Dropdown,{})};Dropdown_stories_Default.displayName="Default",Dropdown_stories_Default.parameters=Object.assign({storySource:{source:"() => <Dropdown />"}},Dropdown_stories_Default.parameters),Dropdown_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/dropdown/Dropdown.stories.js"]={name:"Default",docgenInfo:Dropdown_stories_Default.__docgenInfo,path:"src/ui/dropdown/Dropdown.stories.js"})},1118:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Heading_stories_Default}));__webpack_require__(2);var jsx_runtime=__webpack_require__(12),prop_types=(__webpack_require__(0),__webpack_require__(1)),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=(__webpack_require__(6),__webpack_require__(26),__webpack_require__(29),__webpack_require__(47)),constants=__webpack_require__(27);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  color: ",";\n  font-family: ",";\n  font-size: 52px;\n  line-height: 58px;\n  margin: 0;\n  padding: 0;\n\n  "," {\n    font-size: 42px;\n    line-height: 48px;\n  }\n  "," {\n    font-size: 32px;\n    line-height: 36px;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var StyledHeading=Object(styled_components_browser_esm.a)((function(_ref){var Tag=_ref.as,props=_objectWithoutProperties(_ref,["as"]);return Object(jsx_runtime.jsx)(Tag,Object.assign({},props))}))(_templateObject(),constants.c.TEXT,constants.d.DEFAULT,constants.e.M_AND_DOWN,constants.e.S_AND_DOWN);StyledHeading.defaultProps={as:"h1"};var Heading_Heading=function Heading(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)(StyledHeading,{children:children})};Heading_Heading.displayName="Heading",Heading_Heading.propTypes={children:prop_types_default.a.any},Heading_Heading.defaultProps={},Heading_Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{children:{type:{name:"any"},required:!1,description:""}}};var heading_Heading=Heading_Heading;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/heading/Heading.jsx"]={name:"Heading",docgenInfo:Heading_Heading.__docgenInfo,path:"src/ui/heading/Heading.jsx"});__webpack_exports__.default={title:"UI/Heading",component:heading_Heading};var Heading_stories_Default=function Default(){return Object(jsx_runtime.jsx)(heading_Heading,{children:"Main title"})};Heading_stories_Default.displayName="Default",Heading_stories_Default.parameters=Object.assign({storySource:{source:"() => <Heading>Main title</Heading>"}},Heading_stories_Default.parameters),Heading_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/heading/Heading.stories.js"]={name:"Default",docgenInfo:Heading_stories_Default.__docgenInfo,path:"src/ui/heading/Heading.stories.js"})},1119:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Icon_stories_Default}));__webpack_require__(2);var jsx_runtime=__webpack_require__(12),styled_components_browser_esm=(__webpack_require__(0),__webpack_require__(6),__webpack_require__(26),__webpack_require__(29),__webpack_require__(47));function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  border: 1px solid blue;\n"]);return _templateObject=function _templateObject(){return data},data}var StyledIcon=Object(styled_components_browser_esm.a)((function(_ref){var Tag=_ref.as,props=_objectWithoutProperties(_ref,["as"]);return Object(jsx_runtime.jsx)(Tag,Object.assign({},props))}))(_templateObject());StyledIcon.defaultProps={as:"i"};var Icon_Icon=function Icon(){return Object(jsx_runtime.jsx)(StyledIcon,{})};Icon_Icon.displayName="Icon",Icon_Icon.propTypes={},Icon_Icon.defaultProps={},Icon_Icon.__docgenInfo={description:"",methods:[],displayName:"Icon"};var icon_Icon=Icon_Icon;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/icon/Icon.jsx"]={name:"Icon",docgenInfo:Icon_Icon.__docgenInfo,path:"src/ui/icon/Icon.jsx"});__webpack_exports__.default={title:"UI/Icon",component:icon_Icon};var Icon_stories_Default=function Default(){return Object(jsx_runtime.jsx)(icon_Icon,{})};Icon_stories_Default.displayName="Default",Icon_stories_Default.parameters=Object.assign({storySource:{source:"() => <Icon />"}},Icon_stories_Default.parameters),Icon_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/icon/Icon.stories.js"]={name:"Default",docgenInfo:Icon_stories_Default.__docgenInfo,path:"src/ui/icon/Icon.stories.js"})},1120:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Input_stories_Default}));__webpack_require__(2);var jsx_runtime=__webpack_require__(12),styled_components_browser_esm=(__webpack_require__(0),__webpack_require__(6),__webpack_require__(26),__webpack_require__(29),__webpack_require__(47));function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  border: 1px solid blue;\n"]);return _templateObject=function _templateObject(){return data},data}var StyledInput=Object(styled_components_browser_esm.a)((function(_ref){var Tag=_ref.as,props=_objectWithoutProperties(_ref,["as"]);return Object(jsx_runtime.jsx)(Tag,Object.assign({},props))}))(_templateObject());StyledInput.defaultProps={as:"input"};var Input_Input=function Input(){return Object(jsx_runtime.jsx)(StyledInput,{})};Input_Input.displayName="Input",Input_Input.propTypes={},Input_Input.defaultProps={},Input_Input.__docgenInfo={description:"",methods:[],displayName:"Input"};var input_Input=Input_Input;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/input/Input.jsx"]={name:"Input",docgenInfo:Input_Input.__docgenInfo,path:"src/ui/input/Input.jsx"});__webpack_exports__.default={title:"UI/Input",component:input_Input};var Input_stories_Default=function Default(){return Object(jsx_runtime.jsx)(input_Input,{})};Input_stories_Default.displayName="Default",Input_stories_Default.parameters=Object.assign({storySource:{source:"() => <Input />"}},Input_stories_Default.parameters),Input_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/input/Input.stories.js"]={name:"Default",docgenInfo:Input_stories_Default.__docgenInfo,path:"src/ui/input/Input.stories.js"})},1121:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Loader_stories_Default}));__webpack_require__(2);var jsx_runtime=__webpack_require__(12);__webpack_require__(0),__webpack_require__(1),__webpack_require__(6),__webpack_require__(26),__webpack_require__(29);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  font-size: 16px;\n"]);return _templateObject=function _templateObject(){return data},data}var StyledLoader=__webpack_require__(47).a.div(_templateObject()),Loader_Loader=function Loader(){return Object(jsx_runtime.jsx)(StyledLoader,{})};Loader_Loader.displayName="Loader",Loader_Loader.propTypes={},Loader_Loader.defaultProps={},Loader_Loader.__docgenInfo={description:"",methods:[],displayName:"Loader"};var loader_Loader=Loader_Loader;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/loader/Loader.jsx"]={name:"Loader",docgenInfo:Loader_Loader.__docgenInfo,path:"src/ui/loader/Loader.jsx"});__webpack_exports__.default={title:"UI/Loader",component:loader_Loader};var Loader_stories_Default=function Default(){return Object(jsx_runtime.jsx)(loader_Loader,{})};Loader_stories_Default.displayName="Default",Loader_stories_Default.parameters=Object.assign({storySource:{source:"() => <Loader />"}},Loader_stories_Default.parameters),Loader_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/loader/Loader.stories.js"]={name:"Default",docgenInfo:Loader_stories_Default.__docgenInfo,path:"src/ui/loader/Loader.stories.js"})},1122:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Logo_stories_Default}));__webpack_require__(2);var jsx_runtime=__webpack_require__(12),prop_types=(__webpack_require__(0),__webpack_require__(1)),prop_types_default=__webpack_require__.n(prop_types);__webpack_require__(6),__webpack_require__(26),__webpack_require__(29);function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}([""]);return _templateObject=function _templateObject(){return data},data}var StyledLogo=__webpack_require__(47).a.div(_templateObject()),logo=__webpack_require__(486),logo_default=__webpack_require__.n(logo),Logo_Logo=function Logo(_ref){var alt=_ref.alt;return Object(jsx_runtime.jsx)(StyledLogo,{children:Object(jsx_runtime.jsx)("img",{src:logo_default.a,alt:alt})})};Logo_Logo.displayName="Logo",Logo_Logo.propTypes={children:prop_types_default.a.string},Logo_Logo.defaultProps={alt:"Fitigai logo"},Logo_Logo.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{alt:{defaultValue:{value:"'Fitigai logo'",computed:!1},required:!1},children:{type:{name:"string"},required:!1,description:""}}};var logo_Logo=Logo_Logo;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/logo/Logo.jsx"]={name:"Logo",docgenInfo:Logo_Logo.__docgenInfo,path:"src/ui/logo/Logo.jsx"});__webpack_exports__.default={title:"UI/Logo",component:logo_Logo};var Logo_stories_Default=function Default(){return Object(jsx_runtime.jsx)(logo_Logo,{})};Logo_stories_Default.displayName="Default",Logo_stories_Default.parameters=Object.assign({storySource:{source:"() => <Logo />"}},Logo_stories_Default.parameters),Logo_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/logo/Logo.stories.js"]={name:"Default",docgenInfo:Logo_stories_Default.__docgenInfo,path:"src/ui/logo/Logo.stories.js"})},1123:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Text_stories_Default}));__webpack_require__(2);var jsx_runtime=__webpack_require__(12),prop_types=(__webpack_require__(0),__webpack_require__(1)),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=(__webpack_require__(6),__webpack_require__(26),__webpack_require__(29),__webpack_require__(47)),constants=__webpack_require__(27);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _templateObject(){var data=function _taggedTemplateLiteral(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  font-size: 16px;\n  line-height: 20px;\n  font-family: ",";\n  margin: 0;\n  padding: 0;\n  color: ",";\n"]);return _templateObject=function _templateObject(){return data},data}var StyledText=Object(styled_components_browser_esm.a)((function(_ref){var Tag=_ref.as,props=_objectWithoutProperties(_ref,["as"]);return Object(jsx_runtime.jsx)(Tag,Object.assign({},props))}))(_templateObject(),constants.d.DEFAULT,constants.c.TEXT);StyledText.defaultProps={as:"p"};var Text_Text=function Text(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)(StyledText,{children:children})};Text_Text.displayName="Text",Text_Text.propTypes={children:prop_types_default.a.any},Text_Text.defaultProps={},Text_Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{type:{name:"any"},required:!1,description:""}}};var text_Text=Text_Text;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/text/Text.jsx"]={name:"Text",docgenInfo:Text_Text.__docgenInfo,path:"src/ui/text/Text.jsx"});__webpack_exports__.default={title:"UI/Text",component:text_Text};var Text_stories_Default=function Default(){return Object(jsx_runtime.jsx)(text_Text,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, aperiam voluptas numquam, assumenda blanditiis veniam quasi necessitatibus natus officiis totam temporibus. Culpa fugit optio distinctio voluptatem commodi consequatur delectus fuga."})};Text_stories_Default.displayName="Default",Text_stories_Default.parameters=Object.assign({storySource:{source:"() => (\n  <Text>\n    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, aperiam\n    voluptas numquam, assumenda blanditiis veniam quasi necessitatibus natus\n    officiis totam temporibus. Culpa fugit optio distinctio voluptatem commodi\n    consequatur delectus fuga.\n  </Text>\n)"}},Text_stories_Default.parameters),Text_stories_Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ui/text/Text.stories.js"]={name:"Default",docgenInfo:Text_stories_Default.__docgenInfo,path:"src/ui/text/Text.stories.js"})},27:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return COLOR})),__webpack_require__.d(__webpack_exports__,"d",(function(){return FONT})),__webpack_require__.d(__webpack_exports__,"e",(function(){return MEDIA_QUERY})),__webpack_require__.d(__webpack_exports__,"a",(function(){return BUTTON_TYPE})),__webpack_require__.d(__webpack_exports__,"b",(function(){return BUTTON_TYPES}));var SYSTEM_COLOR_AQUA_HAZE="#F1F5F7",COLOR={BACKGROUND_DARKEST:"#00171F",BACKGROUND_LIGHT:SYSTEM_COLOR_AQUA_HAZE,BACKGROUND_WHITE:"#FFFFFF",BORDER:"#BCBBBB",TEXT:"#353745",TEXT_LIGHT:"#717171",TEXT_WHITE:SYSTEM_COLOR_AQUA_HAZE},BREAKPOINT_M="768px",MEDIA_QUERY={S_AND_DOWN:"@media screen and (max-width: ".concat("498px",")"),M_AND_DOWN:"@media screen and (max-width: ".concat(BREAKPOINT_M,")")},FONT={DEFAULT:"'Montserrat Alternates', sans-serif"},BUTTON_TYPE=(__webpack_require__(102),{MINIMAL:"minimal",PLAIN:"plain",PRIMARY:"primary"}),BUTTON_TYPES=Object.values(BUTTON_TYPE)},486:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/logo.75ba5b5c.svg"},489:function(module,exports,__webpack_require__){__webpack_require__(490),__webpack_require__(661),__webpack_require__(662),__webpack_require__(825),__webpack_require__(1043),__webpack_require__(1075),__webpack_require__(1083),__webpack_require__(1095),__webpack_require__(1097),__webpack_require__(1102),__webpack_require__(1104),module.exports=__webpack_require__(1108)},564:function(module,exports){},662:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(366)}},[[489,1,2]]]);
//# sourceMappingURL=main.e84428926fe87d91983e.bundle.js.map