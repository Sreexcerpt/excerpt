import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import React__default, { useState, useEffect, useRef, useMemo, useCallback, lazy, Suspense } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { useNavigate, Link, NavLink, useLocation, Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import withSideEffect from "react-side-effect";
import isEqual from "react-fast-compare";
import objectAssign from "object-assign";
import clsx from "clsx";
import composeClasses from "@mui/utils/composeClasses";
import capitalize from "@mui/utils/capitalize";
import { unstable_createGetCssVar, createSpacing, useTheme as useTheme$1, GlobalStyles as GlobalStyles$1, unstable_memoTheme, keyframes, css, createBox, createStack } from "@mui/system";
import generateUtilityClasses from "@mui/utils/generateUtilityClasses";
import generateUtilityClass from "@mui/utils/generateUtilityClass";
import { useDefaultProps as useDefaultProps$1 } from "@mui/system/DefaultPropsProvider";
import createStyled from "@mui/system/createStyled";
import _formatErrorMessage from "@mui/utils/formatMuiErrorMessage";
import deepmerge, { isPlainObject } from "@mui/utils/deepmerge";
import { getContrastRatio, lighten, darken, alpha, private_safeDarken, private_safeLighten, private_safeAlpha, private_safeEmphasize, private_safeColorChannel, hslToRgb, emphasize } from "@mui/system/colorManipulator";
import { createUnarySpacing } from "@mui/system/spacing";
import { prepareTypographyVars, prepareCssVars, createGetColorSchemeSelector } from "@mui/system/cssVars";
import styleFunctionSx, { unstable_defaultSxConfig, extendSxProp as extendSxProp$1 } from "@mui/system/styleFunctionSx";
import systemCreateTheme from "@mui/system/createTheme";
import ClassNameGenerator from "@mui/utils/ClassNameGenerator";
import resolveProps from "@mui/utils/resolveProps";
import useId from "@mui/utils/useId";
import refType from "@mui/utils/refType";
import elementTypeAcceptingRef from "@mui/utils/elementTypeAcceptingRef";
import isFocusVisible from "@mui/utils/isFocusVisible";
import useForkRef from "@mui/utils/useForkRef";
import useEventCallback from "@mui/utils/useEventCallback";
import { TransitionGroup, Transition } from "react-transition-group";
import useTimeout from "@mui/utils/useTimeout";
import useLazyRef from "@mui/utils/useLazyRef";
import chainPropTypes from "@mui/utils/chainPropTypes";
import appendOwnerState from "@mui/utils/appendOwnerState";
import resolveComponentProps from "@mui/utils/resolveComponentProps";
import mergeSlotProps$1 from "@mui/utils/mergeSlotProps";
import integerPropType from "@mui/utils/integerPropType";
import elementAcceptingRef from "@mui/utils/elementAcceptingRef";
import getReactElementRef from "@mui/utils/getReactElementRef";
import HTMLElementType from "@mui/utils/HTMLElementType";
import ownerDocument from "@mui/utils/ownerDocument";
import createChainedFunction from "@mui/utils/createChainedFunction";
import extractEventHandlers from "@mui/utils/extractEventHandlers";
import ownerWindow from "@mui/utils/ownerWindow";
import getScrollbarSize from "@mui/utils/getScrollbarSize";
import * as ReactDOM from "react-dom";
import useEnhancedEffect from "@mui/utils/useEnhancedEffect";
import setRef from "@mui/utils/setRef";
import exactProp from "@mui/utils/exactProp";
import isHostComponent from "@mui/utils/isHostComponent";
import debounce from "@mui/utils/debounce";
import { isFragment } from "react-is";
import { useRtl } from "@mui/system/RtlProvider";
import useSlotProps from "@mui/utils/useSlotProps";
import useControlled from "@mui/utils/useControlled";
import isMuiElement from "@mui/utils/isMuiElement";
import unsupportedProp from "@mui/utils/unsupportedProp";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import QRCode from "qrcode";
import require$$2 from "lodash.debounce";
import require$$1 from "classnames";
import require$$8 from "resize-observer-polyfill";
import require$$2$1 from "json2mq";
import ReactGA from "react-ga";
var ATTRIBUTE_NAMES = {
  BODY: "bodyAttributes",
  HTML: "htmlAttributes",
  TITLE: "titleAttributes"
};
var TAG_NAMES = {
  BASE: "base",
  BODY: "body",
  HEAD: "head",
  HTML: "html",
  LINK: "link",
  META: "meta",
  NOSCRIPT: "noscript",
  SCRIPT: "script",
  STYLE: "style",
  TITLE: "title"
};
var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function(name) {
  return TAG_NAMES[name];
});
var TAG_PROPERTIES = {
  CHARSET: "charset",
  CSS_TEXT: "cssText",
  HREF: "href",
  HTTPEQUIV: "http-equiv",
  INNER_HTML: "innerHTML",
  ITEM_PROP: "itemprop",
  NAME: "name",
  PROPERTY: "property",
  REL: "rel",
  SRC: "src",
  TARGET: "target"
};
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate"
};
var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function(obj, key) {
  obj[REACT_TAG_MAP[key]] = key;
  return obj;
}, {});
var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
var HELMET_ATTRIBUTE = "data-react-helmet";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = /* @__PURE__ */ (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
var _extends$1 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var inherits = function(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var objectWithoutProperties = function(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
};
var possibleConstructorReturn = function(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};
var encodeSpecialCharacters = function encodeSpecialCharacters2(str) {
  var encode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var getTitleFromPropsList = function getTitleFromPropsList2(propsList) {
  var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
  var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, function() {
      return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
    });
  }
  var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = function getOnChangeClientState2(propsList) {
  return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function() {
  };
};
var getAttributesFromPropsList = function getAttributesFromPropsList2(tagType, propsList) {
  return propsList.filter(function(props) {
    return typeof props[tagType] !== "undefined";
  }).map(function(props) {
    return props[tagType];
  }).reduce(function(tagAttrs, current) {
    return _extends$1({}, tagAttrs, current);
  }, {});
};
var getBaseTagFromPropsList = function getBaseTagFromPropsList2(primaryAttributes, propsList) {
  return propsList.filter(function(props) {
    return typeof props[TAG_NAMES.BASE] !== "undefined";
  }).map(function(props) {
    return props[TAG_NAMES.BASE];
  }).reverse().reduce(function(innermostBaseTag, tag) {
    if (!innermostBaseTag.length) {
      var keys = Object.keys(tag);
      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
          return innermostBaseTag.concat(tag);
        }
      }
    }
    return innermostBaseTag;
  }, []);
};
var getTagsFromPropsList = function getTagsFromPropsList2(tagName, primaryAttributes, propsList) {
  var approvedSeenTags = {};
  return propsList.filter(function(props) {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn("Helmet: " + tagName + ' should be of type "Array". Instead found type "' + _typeof(props[tagName]) + '"');
    }
    return false;
  }).map(function(props) {
    return props[tagName];
  }).reverse().reduce(function(approvedTags, instanceTags) {
    var instanceSeenTags = {};
    instanceTags.filter(function(tag) {
      var primaryAttributeKey = void 0;
      var keys2 = Object.keys(tag);
      for (var i2 = 0; i2 < keys2.length; i2++) {
        var attributeKey2 = keys2[i2];
        var lowerCaseAttributeKey = attributeKey2.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey2) !== -1 && (attributeKey2 === TAG_PROPERTIES.INNER_HTML || attributeKey2 === TAG_PROPERTIES.CSS_TEXT || attributeKey2 === TAG_PROPERTIES.ITEM_PROP)) {
          primaryAttributeKey = attributeKey2;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      var value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach(function(tag) {
      return approvedTags.push(tag);
    });
    var keys = Object.keys(instanceSeenTags);
    for (var i = 0; i < keys.length; i++) {
      var attributeKey = keys[i];
      var tagUnion = objectAssign({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getInnermostProperty = function getInnermostProperty2(propsList, property) {
  for (var i = propsList.length - 1; i >= 0; i--) {
    var props = propsList[i];
    if (props.hasOwnProperty(property)) {
      return props[property];
    }
  }
  return null;
};
var reducePropsToState = function reducePropsToState2(propsList) {
  return {
    baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
    bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
    defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
    encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
    linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
    metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
    noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
    onChangeClientState: getOnChangeClientState(propsList),
    scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
    styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
    title: getTitleFromPropsList(propsList),
    titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
  };
};
var rafPolyfill = (function() {
  var clock = Date.now();
  return function(callback) {
    var currentTime = Date.now();
    if (currentTime - clock > 16) {
      clock = currentTime;
      callback(currentTime);
    } else {
      setTimeout(function() {
        rafPolyfill(callback);
      }, 0);
    }
  };
})();
var cafPolyfill = function cafPolyfill2(id) {
  return clearTimeout(id);
};
var requestAnimationFrame$1 = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
var cancelAnimationFrame$1 = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;
var warn = function warn2(msg) {
  return console && typeof console.warn === "function" && console.warn(msg);
};
var _helmetCallback = null;
var handleClientStateChange = function handleClientStateChange2(newState) {
  if (_helmetCallback) {
    cancelAnimationFrame$1(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame$1(function() {
      commitTagChanges(newState, function() {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var commitTagChanges = function commitTagChanges2(newState, cb) {
  var baseTag = newState.baseTag, bodyAttributes = newState.bodyAttributes, htmlAttributes = newState.htmlAttributes, linkTags = newState.linkTags, metaTags = newState.metaTags, noscriptTags = newState.noscriptTags, onChangeClientState = newState.onChangeClientState, scriptTags = newState.scriptTags, styleTags = newState.styleTags, title = newState.title, titleAttributes = newState.titleAttributes;
  updateAttributes(TAG_NAMES.BODY, bodyAttributes);
  updateAttributes(TAG_NAMES.HTML, htmlAttributes);
  updateTitle(title, titleAttributes);
  var tagUpdates = {
    baseTag: updateTags(TAG_NAMES.BASE, baseTag),
    linkTags: updateTags(TAG_NAMES.LINK, linkTags),
    metaTags: updateTags(TAG_NAMES.META, metaTags),
    noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
    scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
    styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
  };
  var addedTags = {};
  var removedTags = {};
  Object.keys(tagUpdates).forEach(function(tagType) {
    var _tagUpdates$tagType = tagUpdates[tagType], newTags = _tagUpdates$tagType.newTags, oldTags = _tagUpdates$tagType.oldTags;
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  cb && cb();
  onChangeClientState(newState, addedTags, removedTags);
};
var flattenArray = function flattenArray2(possibleArray) {
  return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};
var updateTitle = function updateTitle2(title, attributes) {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes(TAG_NAMES.TITLE, attributes);
};
var updateAttributes = function updateAttributes2(tagName, attributes) {
  var elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  var attributesToRemove = [].concat(helmetAttributes);
  var attributeKeys = Object.keys(attributes);
  for (var i = 0; i < attributeKeys.length; i++) {
    var attribute = attributeKeys[i];
    var value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    var indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
    elementTag.removeAttribute(attributesToRemove[_i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTags = function updateTags2(type, tags) {
  var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
  var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
  var oldTags = Array.prototype.slice.call(tagNodes);
  var newTags = [];
  var indexToDelete = void 0;
  if (tags && tags.length) {
    tags.forEach(function(tag) {
      var newElement = document.createElement(type);
      for (var attribute in tag) {
        if (tag.hasOwnProperty(attribute)) {
          if (attribute === TAG_PROPERTIES.INNER_HTML) {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some(function(existingTag, index) {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach(function(tag) {
    return tag.parentNode.removeChild(tag);
  });
  newTags.forEach(function(tag) {
    return headElement.appendChild(tag);
  });
  return {
    oldTags,
    newTags
  };
};
var generateElementAttributesAsString = function generateElementAttributesAsString2(attributes) {
  return Object.keys(attributes).reduce(function(str, key) {
    var attr = typeof attributes[key] !== "undefined" ? key + '="' + attributes[key] + '"' : "" + key;
    return str ? str + " " + attr : attr;
  }, "");
};
var generateTitleAsString = function generateTitleAsString2(type, title, attributes, encode) {
  var attributeString = generateElementAttributesAsString(attributes);
  var flattenedTitle = flattenArray(title);
  return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + '="true" ' + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + '="true">' + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};
var generateTagsAsString = function generateTagsAsString2(type, tags, encode) {
  return tags.reduce(function(str, tag) {
    var attributeHtml = Object.keys(tag).filter(function(attribute) {
      return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
    }).reduce(function(string, attribute) {
      var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + '="' + encodeSpecialCharacters(tag[attribute], encode) + '"';
      return string ? string + " " + attr : attr;
    }, "");
    var tagContent = tag.innerHTML || tag.cssText || "";
    var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
    return str + "<" + type + " " + HELMET_ATTRIBUTE + '="true" ' + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
  }, "");
};
var convertElementAttributestoReactProps = function convertElementAttributestoReactProps2(attributes) {
  var initProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.keys(attributes).reduce(function(obj, key) {
    obj[REACT_TAG_MAP[key] || key] = attributes[key];
    return obj;
  }, initProps);
};
var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes2(props) {
  var initAttributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.keys(props).reduce(function(obj, key) {
    obj[HTML_TAG_MAP[key] || key] = props[key];
    return obj;
  }, initAttributes);
};
var generateTitleAsReactComponent = function generateTitleAsReactComponent2(type, title, attributes) {
  var _initProps;
  var initProps = (_initProps = {
    key: title
  }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
  var props = convertElementAttributestoReactProps(attributes, initProps);
  return [React__default.createElement(TAG_NAMES.TITLE, props, title)];
};
var generateTagsAsReactComponent = function generateTagsAsReactComponent2(type, tags) {
  return tags.map(function(tag, i) {
    var _mappedTag;
    var mappedTag = (_mappedTag = {
      key: i
    }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);
    Object.keys(tag).forEach(function(attribute) {
      var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;
      if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
        var content = tag.innerHTML || tag.cssText;
        mappedTag.dangerouslySetInnerHTML = { __html: content };
      } else {
        mappedTag[mappedAttribute] = tag[attribute];
      }
    });
    return React__default.createElement(type, mappedTag);
  });
};
var getMethodsForTag = function getMethodsForTag2(type, tags, encode) {
  switch (type) {
    case TAG_NAMES.TITLE:
      return {
        toComponent: function toComponent() {
          return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes);
        },
        toString: function toString() {
          return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
        }
      };
    case ATTRIBUTE_NAMES.BODY:
    case ATTRIBUTE_NAMES.HTML:
      return {
        toComponent: function toComponent() {
          return convertElementAttributestoReactProps(tags);
        },
        toString: function toString() {
          return generateElementAttributesAsString(tags);
        }
      };
    default:
      return {
        toComponent: function toComponent() {
          return generateTagsAsReactComponent(type, tags);
        },
        toString: function toString() {
          return generateTagsAsString(type, tags, encode);
        }
      };
  }
};
var mapStateOnServer = function mapStateOnServer2(_ref) {
  var baseTag = _ref.baseTag, bodyAttributes = _ref.bodyAttributes, encode = _ref.encode, htmlAttributes = _ref.htmlAttributes, linkTags = _ref.linkTags, metaTags = _ref.metaTags, noscriptTags = _ref.noscriptTags, scriptTags = _ref.scriptTags, styleTags = _ref.styleTags, _ref$title = _ref.title, title = _ref$title === void 0 ? "" : _ref$title, titleAttributes = _ref.titleAttributes;
  return {
    base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
    bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
    htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
    link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
    meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
    noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
    script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
    style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
    title: getMethodsForTag(TAG_NAMES.TITLE, { title, titleAttributes }, encode)
  };
};
var Helmet = function Helmet2(Component) {
  var _class, _temp;
  return _temp = _class = (function(_React$Component) {
    inherits(HelmetWrapper, _React$Component);
    function HelmetWrapper() {
      classCallCheck(this, HelmetWrapper);
      return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }
    HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      return !isEqual(this.props, nextProps);
    };
    HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
      if (!nestedChildren) {
        return null;
      }
      switch (child.type) {
        case TAG_NAMES.SCRIPT:
        case TAG_NAMES.NOSCRIPT:
          return {
            innerHTML: nestedChildren
          };
        case TAG_NAMES.STYLE:
          return {
            cssText: nestedChildren
          };
      }
      throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    };
    HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
      var _babelHelpers$extends;
      var child = _ref.child, arrayTypeChildren = _ref.arrayTypeChildren, newChildProps = _ref.newChildProps, nestedChildren = _ref.nestedChildren;
      return _extends$1({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends$1({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
    };
    HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
      var _babelHelpers$extends2, _babelHelpers$extends3;
      var child = _ref2.child, newProps = _ref2.newProps, newChildProps = _ref2.newChildProps, nestedChildren = _ref2.nestedChildren;
      switch (child.type) {
        case TAG_NAMES.TITLE:
          return _extends$1({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends$1({}, newChildProps), _babelHelpers$extends2));
        case TAG_NAMES.BODY:
          return _extends$1({}, newProps, {
            bodyAttributes: _extends$1({}, newChildProps)
          });
        case TAG_NAMES.HTML:
          return _extends$1({}, newProps, {
            htmlAttributes: _extends$1({}, newChildProps)
          });
      }
      return _extends$1({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends$1({}, newChildProps), _babelHelpers$extends3));
    };
    HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
      var newFlattenedProps = _extends$1({}, newProps);
      Object.keys(arrayTypeChildren).forEach(function(arrayChildName) {
        var _babelHelpers$extends4;
        newFlattenedProps = _extends$1({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
      });
      return newFlattenedProps;
    };
    HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
      if (process.env.NODE_ENV !== "production") {
        if (!VALID_TAG_NAMES.some(function(name) {
          return child.type === name;
        })) {
          if (typeof child.type === "function") {
            return warn("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
          }
          return warn("Only elements types " + VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
        }
        if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function(nestedChild) {
          return typeof nestedChild !== "string";
        }))) {
          throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
        }
      }
      return true;
    };
    HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
      var _this2 = this;
      var arrayTypeChildren = {};
      React__default.Children.forEach(children, function(child) {
        if (!child || !child.props) {
          return;
        }
        var _child$props = child.props, nestedChildren = _child$props.children, childProps = objectWithoutProperties(_child$props, ["children"]);
        var newChildProps = convertReactPropstoHtmlAttributes(childProps);
        _this2.warnOnInvalidChildren(child, nestedChildren);
        switch (child.type) {
          case TAG_NAMES.LINK:
          case TAG_NAMES.META:
          case TAG_NAMES.NOSCRIPT:
          case TAG_NAMES.SCRIPT:
          case TAG_NAMES.STYLE:
            arrayTypeChildren = _this2.flattenArrayTypeChildren({
              child,
              arrayTypeChildren,
              newChildProps,
              nestedChildren
            });
            break;
          default:
            newProps = _this2.mapObjectTypeChildren({
              child,
              newProps,
              newChildProps,
              nestedChildren
            });
            break;
        }
      });
      newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
      return newProps;
    };
    HelmetWrapper.prototype.render = function render2() {
      var _props = this.props, children = _props.children, props = objectWithoutProperties(_props, ["children"]);
      var newProps = _extends$1({}, props);
      if (children) {
        newProps = this.mapChildrenToProps(children, newProps);
      }
      return React__default.createElement(Component, newProps);
    };
    createClass(HelmetWrapper, null, [{
      key: "canUseDOM",
      // Component.peek comes from react-side-effect:
      // For testing, you may use a static peek() method available on the returned component.
      // It lets you get the current state without resetting the mounted instance stack.
      // Don’t use it for anything other than testing.
      /**
       * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
       * @param {Object} bodyAttributes: {"className": "root"}
       * @param {String} defaultTitle: "Default Title"
       * @param {Boolean} defer: true
       * @param {Boolean} encodeSpecialCharacters: true
       * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
       * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
       * @param {Array} meta: [{"name": "description", "content": "Test description"}]
       * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
       * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
       * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
       * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
       * @param {String} title: "Title"
       * @param {Object} titleAttributes: {"itemprop": "name"}
       * @param {String} titleTemplate: "MySite.com - %s"
       */
      set: function set$$1(canUseDOM) {
        Component.canUseDOM = canUseDOM;
      }
    }]);
    return HelmetWrapper;
  })(React__default.Component), _class.propTypes = {
    base: PropTypes.object,
    bodyAttributes: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    defaultTitle: PropTypes.string,
    defer: PropTypes.bool,
    encodeSpecialCharacters: PropTypes.bool,
    htmlAttributes: PropTypes.object,
    link: PropTypes.arrayOf(PropTypes.object),
    meta: PropTypes.arrayOf(PropTypes.object),
    noscript: PropTypes.arrayOf(PropTypes.object),
    onChangeClientState: PropTypes.func,
    script: PropTypes.arrayOf(PropTypes.object),
    style: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    titleAttributes: PropTypes.object,
    titleTemplate: PropTypes.string
  }, _class.defaultProps = {
    defer: true,
    encodeSpecialCharacters: true
  }, _class.peek = Component.peek, _class.rewind = function() {
    var mappedState = Component.rewind();
    if (!mappedState) {
      mappedState = mapStateOnServer({
        baseTag: [],
        bodyAttributes: {},
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
    return mappedState;
  }, _temp;
};
var NullComponent = function NullComponent2() {
  return null;
};
var HelmetSideEffects = withSideEffect(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);
var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React__default.createContext && /* @__PURE__ */ React__default.createContext(DefaultContext);
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ React__default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ React__default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ React__default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ React__default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ React__default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
function TiStar(props) {
  return GenIcon({ "attr": { "version": "1.2", "baseProfile": "tiny", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z" }, "child": [] }] })(props);
}
function FaFacebook(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" }, "child": [] }] })(props);
}
function FaInstagram(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" }, "child": [] }] })(props);
}
function FaLinkedin(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" }, "child": [] }] })(props);
}
function FaChevronDown(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" }, "child": [] }] })(props);
}
function FaChevronLeft(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 320 512" }, "child": [{ "tag": "path", "attr": { "d": "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" }, "child": [] }] })(props);
}
function FaChevronRight(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 320 512" }, "child": [{ "tag": "path", "attr": { "d": "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, "child": [] }] })(props);
}
const MobileNav = ({ isLoggedIn, onLogout }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [isNavVisible, setNavVisible] = useState(true);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isWebDesignDropdownOpen, setWebDesignDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
    if (isMobileNavOpen) {
      setServicesDropdownOpen(false);
      setWebDesignDropdownOpen(false);
    }
  };
  const handleNavClick = () => {
    setMobileNavOpen(false);
    setServicesDropdownOpen(false);
    setWebDesignDropdownOpen(false);
  };
  const handleLogout = () => {
    onLogout();
    setMobileNavOpen(false);
    setServicesDropdownOpen(false);
    setWebDesignDropdownOpen(false);
  };
  const handleServicesToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setServicesDropdownOpen((prev) => !prev);
  };
  const handleWebDesignToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setWebDesignDropdownOpen((prev) => !prev);
  };
  return /* @__PURE__ */ jsx("div", { style: { backgroundColor: "white", position: "relative", zIndex: 1e3 }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: `mobile-nav-wrapper ${isNavVisible ? "visible" : ""}`,
      style: {
        textAlign: "right",
        padding: "10px",
        background: isNavVisible ? "white" : "transparent",
        transition: "background 0.3s",
        position: "relative",
        zIndex: 1001
      },
      children: [
        /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1px",
          position: "relative",
          zIndex: 1002
        }, children: [
          /* @__PURE__ */ jsxs("div", { style: { textAlign: "left", fontSize: "14px", lineHeight: "1.3" }, children: [
            /* @__PURE__ */ jsx("div", { children: "+91 6364657660" }),
            /* @__PURE__ */ jsx("div", { children: "info@excerptech.com" })
          ] }),
          /* @__PURE__ */ jsx("div", { children: isLoggedIn ? /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleLogout,
              style: {
                background: "#dc3545",
                color: "white",
                border: "none",
                padding: "2px 4px",
                borderRadius: "4px",
                fontSize: "12px",
                cursor: "pointer",
                marginLeft: "10px",
                position: "relative",
                zIndex: 1003
              },
              children: "Logout"
            }
          ) : /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => navigate("/login"),
              style: {
                background: "#007bff",
                color: "white",
                border: "none",
                padding: "2px 4px",
                borderRadius: "4px",
                fontSize: "12px",
                cursor: "pointer",
                marginLeft: "10px",
                position: "relative",
                zIndex: 1003
              },
              children: "Login / Register"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "mobile-nav-icon",
            style: { fontSize: "25px", cursor: "pointer", marginRight: "16px" },
            onClick: toggleMobileNav,
            children: "☰"
          }
        ),
        /* @__PURE__ */ jsx("div", { style: { backgroundColor: "white" }, children: isMobileNavOpen && /* @__PURE__ */ jsx(
          "div",
          {
            className: "mobile-nav-content",
            style: {
              top: "50px",
              width: "100%",
              background: "#fff",
              padding: "15px",
              boxSizing: "border-box"
            },
            children: /* @__PURE__ */ jsxs("ul", { style: {
              listStyle: "none",
              padding: 0,
              margin: 0,
              textAlign: "left"
            }, children: [
              /* @__PURE__ */ jsx("li", { style: { marginBottom: "12px" }, children: /* @__PURE__ */ jsx(Link, { to: "/", style: { fontSize: "18px" }, onClick: handleNavClick, children: /* @__PURE__ */ jsx("b", { children: "HOME" }) }) }),
              /* @__PURE__ */ jsxs("li", { style: { marginBottom: "12px" }, children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    },
                    children: [
                      /* @__PURE__ */ jsx(Link, { to: "/services", style: { fontSize: "18px" }, onClick: handleNavClick, children: /* @__PURE__ */ jsx("b", { children: "SERVICES" }) }),
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          onTouchStart: handleServicesToggle,
                          onClick: handleServicesToggle,
                          style: {
                            cursor: "pointer",
                            padding: "10px",
                            color: "#333"
                          },
                          children: isServicesDropdownOpen ? /* @__PURE__ */ jsx(FaChevronDown, {}) : /* @__PURE__ */ jsx(FaChevronRight, {})
                        }
                      )
                    ]
                  }
                ),
                isServicesDropdownOpen && /* @__PURE__ */ jsxs(
                  "div",
                  {
                    style: {
                      marginTop: "8px",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "6px",
                      padding: "12px",
                      border: "1px solid #e9ecef"
                    },
                    children: [
                      /* @__PURE__ */ jsxs("div", { style: { marginBottom: "10px" }, children: [
                        /* @__PURE__ */ jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "6px 0"
                            },
                            children: [
                              /* @__PURE__ */ jsx("span", { style: {
                                fontSize: "14px",
                                color: "#495057",
                                fontWeight: "500"
                              }, children: "Web Design & Development" }),
                              /* @__PURE__ */ jsx(
                                "div",
                                {
                                  onTouchStart: handleWebDesignToggle,
                                  onClick: handleWebDesignToggle,
                                  style: {
                                    cursor: "pointer",
                                    padding: "6px",
                                    color: "#333",
                                    fontSize: "12px"
                                  },
                                  children: isWebDesignDropdownOpen ? /* @__PURE__ */ jsx(FaChevronDown, {}) : /* @__PURE__ */ jsx(FaChevronRight, {})
                                }
                              )
                            ]
                          }
                        ),
                        isWebDesignDropdownOpen && /* @__PURE__ */ jsxs(
                          "div",
                          {
                            style: {
                              marginTop: "6px",
                              marginLeft: "15px",
                              backgroundColor: "#ffffff",
                              borderRadius: "4px",
                              padding: "8px",
                              border: "1px solid #dee2e6"
                            },
                            children: [
                              /* @__PURE__ */ jsx(Link, { to: "/Staticwebsite", style: { fontSize: "15px", display: "block", marginBottom: "18px" }, onClick: handleNavClick, children: "Static Websites" }),
                              /* @__PURE__ */ jsx(Link, { to: "/Dyanamicwebsite", style: { fontSize: "15px", display: "block", marginBottom: "18px" }, onClick: handleNavClick, children: "Dynamic Websites" }),
                              /* @__PURE__ */ jsx(Link, { to: "/Customizedwebsites", style: { fontSize: "15px", display: "block" }, onClick: handleNavClick, children: "Customized Websites" })
                            ]
                          }
                        )
                      ] }),
                      [
                        { path: "/Geekychat", name: "GeekyChat (WhatsApp Bulk)" },
                        { path: "/Erp", name: "ERP" },
                        { path: "/Crm", name: "CRM's" },
                        { path: "/Ecommerce", name: "E-commerce" },
                        { path: "/Elearning", name: "E-learning" },
                        { path: "/Lms", name: "LMS" },
                        { path: "/Digitalmarketing", name: "Digital Marketing" },
                        { path: "/Dataanalytics", name: "Data Analytics & Science" },
                        { path: "/Mobileapp", name: "Mobile Application" },
                        { path: "/Cybersecurity", name: "Cyber Security" },
                        { path: "https://trainings.excerptech.com", name: "Excerpt Trainings" }
                      ].map((item, i) => /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: item.path,
                          style: {
                            fontSize: "14px",
                            display: "block",
                            padding: "10px 15px",
                            borderRadius: "4px",
                            marginBottom: "6px"
                          },
                          onClick: handleNavClick,
                          children: item.name
                        },
                        i
                      ))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("li", { style: { marginBottom: "12px" }, children: /* @__PURE__ */ jsx(Link, { to: "/portfolio", style: { fontSize: "18px" }, onClick: handleNavClick, children: /* @__PURE__ */ jsx("b", { children: "PORTFOLIO" }) }) }),
              /* @__PURE__ */ jsx("li", { style: { marginBottom: "12px" }, children: /* @__PURE__ */ jsx(Link, { to: "/contact", style: { fontSize: "18px" }, onClick: handleNavClick, children: /* @__PURE__ */ jsx("b", { children: "CONTACT" }) }) }),
              isLoggedIn && /* @__PURE__ */ jsx("li", { style: { marginBottom: "12px" }, children: /* @__PURE__ */ jsx(Link, { to: "/dashboard", style: { fontSize: "18px", color: "#007bff" }, onClick: handleNavClick, children: /* @__PURE__ */ jsx("b", { children: "ADMIN" }) }) }),
              /* @__PURE__ */ jsx("li", { style: { marginBottom: "12px" }, children: /* @__PURE__ */ jsxs(Link, { to: "/careers", style: { color: "blue", fontSize: "18px" }, onClick: handleNavClick, children: [
                /* @__PURE__ */ jsx("b", { children: "CAREERS" }),
                " ",
                /* @__PURE__ */ jsx(TiStar, { className: "star1 blink star-button" })
              ] }) })
            ] })
          }
        ) })
      ]
    }
  ) });
};
const Navbar = ({ isLoggedIn, isAdmin, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogoutToast, setShowLogoutToast] = useState(false);
  const whiteLogo = "/image/excerptwww.png";
  const blackLogo = "/image/excerptbbb.png";
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [logoImage, setLogoImage] = useState({
    white: whiteLogo,
    black: blackLogo,
    width: "auto",
    height: "90px"
  });
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsScrolled(true);
        setLogoImage({
          ...logoImage,
          width: 200,
          height: 90,
          marginLeft: 20
        });
      } else {
        setIsScrolled(false);
        setLogoImage({
          ...logoImage,
          width: 200,
          height: 90,
          marginLeft: 20
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [logoImage]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".services-menu-container")) {
        setShowServicesDropdown(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  const handleLogout = () => {
    onLogout();
    setShowLogoutToast(true);
    setTimeout(() => {
      setShowLogoutToast(false);
      sessionStorage.setItem("isLoggedIn", "false");
    }, 3e3);
  };
  const handleSubmenuHover = (submenu) => {
    setActiveSubmenu(submenu);
  };
  const handleServicesClick = (e) => {
    e.preventDefault();
    setShowServicesDropdown(!showServicesDropdown);
  };
  const handleServicesMouseEnter = () => {
    if (window.innerWidth > 768) {
      setShowServicesDropdown(true);
    }
  };
  const handleServicesMouseLeave = () => {
    if (window.innerWidth > 768) {
      setShowServicesDropdown(false);
      setActiveSubmenu(null);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: `header-wrapper ${isScrolled ? "scrolled" : ""}`, children: [
    /* @__PURE__ */ jsx("style", { children: `
        li:hover > div { display: block !important; }
        .has-submenu:hover .level-3 { display: block !important; }
        .active-link {
          color: #0554f2 !important;
          font-weight: 600;
        }

        #topheader {
          background-color: #0554f2;
          color: white;
          transition: all 0.3s ease;
          position: relative;
          z-index: 10000;
        }

        #topheader .paragraph.notification {
          padding: 10px 0;
        }

        #topheader a {
          color: white;
          text-decoration: none;
        }

        #topheader a:hover {
          color: #e0e0e0;
        }

        .header-wrapper {
          transition: all 0.3s ease;
          width: 100%;
        }

        .header-wrapper.scrolled {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .header-wrapper.scrolled #topheader {
          background-color: #0554f2;
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
          height: auto !important;
        }

        .header-wrapper.scrolled #navbar-1 {
          background-color: white;
        }

        @media (max-width: 768px) {
          .services-dropdown {
            position: static !important;
            box-shadow: none !important;
            border: none !important;
            width: 100% !important;
            background-color: #f8f9fa !important;
            margin-top: 10px !important;
          }
          
          .web-design-submenu {
            position: static !important;
            box-shadow: none !important;
            border: none !important;
            background-color: #e9ecef !important;
            margin-left: 20px !important;
            margin-top: 5px !important;
          }
        }
      ` }),
    /* @__PURE__ */ jsx("section", { id: "topheader", children: !isScrolled ? /* @__PURE__ */ jsx("div", { className: "nav-content", style: { marginLeft: "400px" }, children: /* @__PURE__ */ jsxs("div", { className: "paragraph notification", style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 80px" }, children: [
      /* @__PURE__ */ jsxs("span", { style: { display: "flex", gap: "30px", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxs("a", { href: "mailto:info@excerptech.com", style: { display: "flex", alignItems: "center", gap: "5px" }, children: [
          /* @__PURE__ */ jsx("i", { className: "fa-solid fa-envelope" }),
          /* @__PURE__ */ jsx("b", { children: "info@excerptech.com" })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            onClick: () => window.gtag_report_conversion && window.gtag_report_conversion("tel:+916364657660"),
            href: "tel:+916364657660",
            style: { display: "flex", alignItems: "center", gap: "5px" },
            children: [
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone" }),
              /* @__PURE__ */ jsx("span", { children: "+91 63646 57660" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("span", { children: isLoggedIn ? /* @__PURE__ */ jsxs("a", { href: "#", className: "user-account", onClick: handleLogout, style: { display: "flex", alignItems: "center", gap: "5px" }, children: [
        /* @__PURE__ */ jsx("i", { className: "fa-solid fa-sign-out" }),
        " Logout"
      ] }) : /* @__PURE__ */ jsxs("a", { href: "/login", className: "user-account", style: { display: "flex", alignItems: "center", gap: "5px" }, children: [
        /* @__PURE__ */ jsx("i", { className: "fa-solid fa-user-tie" }),
        " Login / Register"
      ] }) })
    ] }) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "nav-content", style: { height: "30px", backgroundColor: "white" } }) }) }),
    /* @__PURE__ */ jsx("section", { id: "navbar-1", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: `nav-wrapper `,
        style: { height: "80px" },
        children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ jsx("div", { className: `logo-wrapper`, children: /* @__PURE__ */ jsx("div", { className: "logo", style: { marginTop: "-9px" }, children: /* @__PURE__ */ jsx(NavLink, { to: "/", style: { zIndex: 1e5 }, children: /* @__PURE__ */ jsx(
            "img",
            {
              className: `logo-img ${isScrolled ? "scrolled" : ""}`,
              src: isScrolled ? logoImage.black : logoImage.white,
              width: logoImage.width,
              height: logoImage.height,
              alt: "logo"
            }
          ) }) }) }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `nav-content `,
              style: { marginLeft: "-80px" },
              children: [
                /* @__PURE__ */ jsx("div", { className: "clip-path" }),
                /* @__PURE__ */ jsx("div", { className: "white__background" }),
                /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("div", { className: "clip-border", children: /* @__PURE__ */ jsx("div", { className: "options", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "each-optins-list d-flex align-items-center",
                    style: { marginLeft: "-10px" },
                    children: /* @__PURE__ */ jsxs("ul", { className: "menus d-flex align-items-center", children: [
                      /* @__PURE__ */ jsxs("li", { className: "", children: [
                        /* @__PURE__ */ jsx(NavLink, { to: "/", className: ({ isActive }) => isActive ? "active-link" : "", children: "HOME" }),
                        /* @__PURE__ */ jsx("div", { className: "dropdown__menu submenu" })
                      ] }),
                      /* @__PURE__ */ jsxs(
                        "li",
                        {
                          className: "services-menu-container",
                          style: {
                            position: "relative",
                            display: "inline-block",
                            listStyle: "none"
                          },
                          onMouseEnter: handleServicesMouseEnter,
                          onMouseLeave: handleServicesMouseLeave,
                          children: [
                            /* @__PURE__ */ jsx(NavLink, { onClick: handleServicesClick, children: "SERVICES" }),
                            /* @__PURE__ */ jsxs(
                              "div",
                              {
                                className: "services-dropdown",
                                style: {
                                  position: "absolute",
                                  top: "100%",
                                  left: "0",
                                  backgroundColor: "#fff",
                                  minWidth: "200px",
                                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                  zIndex: 1e3,
                                  width: "300px",
                                  display: showServicesDropdown ? "block" : "none",
                                  padding: "10px 0",
                                  border: "1px solid #eee"
                                },
                                children: [
                                  /* @__PURE__ */ jsxs(
                                    "div",
                                    {
                                      style: {
                                        position: "relative",
                                        display: "inline-block"
                                      },
                                      onMouseEnter: () => handleSubmenuHover("webdesign"),
                                      onMouseLeave: () => handleSubmenuHover(null),
                                      onClick: () => setActiveSubmenu(activeSubmenu === "webdesign" ? null : "webdesign"),
                                      children: [
                                        /* @__PURE__ */ jsx(
                                          "div",
                                          {
                                            style: {
                                              display: "block",
                                              padding: "8px 16px",
                                              cursor: "pointer"
                                            },
                                            children: /* @__PURE__ */ jsxs(
                                              "span",
                                              {
                                                style: {
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "space-between",
                                                  textDecoration: "none",
                                                  color: "#333",
                                                  fontSize: "15px"
                                                },
                                                children: [
                                                  "Web Design & Development",
                                                  /* @__PURE__ */ jsx(FaChevronRight, { style: { marginLeft: "13px" } })
                                                ]
                                              }
                                            )
                                          }
                                        ),
                                        /* @__PURE__ */ jsxs(
                                          "div",
                                          {
                                            className: "web-design-submenu",
                                            style: {
                                              position: "absolute",
                                              top: "0",
                                              left: "100%",
                                              backgroundColor: "#fff",
                                              minWidth: "180px",
                                              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                              zIndex: 1001,
                                              padding: "10px 0",
                                              border: "1px solid #eee",
                                              display: activeSubmenu === "webdesign" ? "block" : "none"
                                            },
                                            children: [
                                              /* @__PURE__ */ jsx(NavLink, { to: "/Staticwebsite", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333" }, children: "Static Websites" }),
                                              /* @__PURE__ */ jsx(NavLink, { to: "/Dyanamicwebsite", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333" }, children: "Dynamic Websites" }),
                                              /* @__PURE__ */ jsx(NavLink, { to: "/Customizedwebsites", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333" }, children: "Customized Websites" })
                                            ]
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ jsx(NavLink, { to: "/Geekychat", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333", transition: "background-color 0.3s", fontSize: "15px" }, children: "GeekyChat (WhatsApp Bulk Messaging)" }),
                                  /* @__PURE__ */ jsx(NavLink, { to: "/Erp", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333", transition: "background-color 0.3s" }, children: "ERP" }),
                                  /* @__PURE__ */ jsx(NavLink, { to: "/Crm", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333", transition: "background-color 0.3s" }, children: "CRM's" }),
                                  /* @__PURE__ */ jsx(NavLink, { to: "/Ecommerce", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333", transition: "background-color 0.3s" }, children: "E-commerce" }),
                                  /* @__PURE__ */ jsx(NavLink, { to: "/Elearning", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333", transition: "background-color 0.3s" }, children: "E-learning" }),
                                  /* @__PURE__ */ jsx(NavLink, { to: "/Lms", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333", transition: "background-color 0.3s" }, children: "LMS" }),
                                  /* @__PURE__ */ jsx(NavLink, { to: "/Digitalmarketing", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333", transition: "background-color 0.3s" }, children: "Digital Marketing" }),
                                  /* @__PURE__ */ jsx(NavLink, { to: "/Dataanalytics", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333", transition: "background-color 0.3s" }, children: "Data Analytics & Science" }),
                                  /* @__PURE__ */ jsx(NavLink, { to: "/Mobileapp", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333", transition: "background-color 0.3s" }, children: "Mobile Application" }),
                                  /* @__PURE__ */ jsx(NavLink, { to: "/Cybersecurity", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333", transition: "background-color 0.3s" }, children: "Cyber Security" }),
                                  /* @__PURE__ */ jsx(NavLink, { to: "https://trainings.excerptech.com", className: ({ isActive }) => isActive ? "active-link" : "", style: { display: "block", padding: "8px 16px", textDecoration: "none", color: "#333", transition: "background-color 0.3s" }, children: "Excerpt Trainings" })
                                ]
                              }
                            )
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx("li", { className: "menu", children: /* @__PURE__ */ jsx(NavLink, { to: "/Portfolio", className: ({ isActive }) => isActive ? "active-link" : "", children: "PORTFOLIO" }) }),
                      /* @__PURE__ */ jsx("li", { className: "menu", children: /* @__PURE__ */ jsx(NavLink, { to: "/Contact", className: ({ isActive }) => isActive ? "active-link" : "", children: "CONTACT" }) }),
                      /* @__PURE__ */ jsx("li", { className: "menu", children: /* @__PURE__ */ jsxs("a", { href: "/Careers", style: { color: "blue" }, children: [
                        "CAREERS ",
                        /* @__PURE__ */ jsx(TiStar, { className: "star blink star-button" })
                      ] }) }),
                      isAdmin && /* @__PURE__ */ jsx("li", { className: "menu search-option", children: /* @__PURE__ */ jsx(
                        NavLink,
                        {
                          to: "/dashboard",
                          className: "get-start-button d-flex align-items-center",
                          style: { width: "20px", marginTop: "-1px" },
                          children: /* @__PURE__ */ jsx("b", { children: "ADMIN" })
                        }
                      ) })
                    ] })
                  }
                ) }) }) })
              ]
            }
          )
        ] })
      }
    ) }),
    /* @__PURE__ */ jsx(MobileNav, { isLoggedIn, onLogout }),
    showLogoutToast && /* @__PURE__ */ jsx(
      "div",
      {
        className: "logout-toast",
        style: {
          position: "fixed",
          top: "10px",
          right: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          zIndex: 9999
        },
        children: "Logout successful"
      }
    )
  ] });
};
const Footer1 = () => {
  return /* @__PURE__ */ jsx("div", { id: "footer", children: /* @__PURE__ */ jsx(
    "section",
    {
      style: { backgroundImage: `url(images/footer/bg.webp), linear-gradient(0deg, #03041c, #03041c)` },
      id: "footer ",
      children: /* @__PURE__ */ jsx("div", { class: "footer-body ", children: /* @__PURE__ */ jsxs("div", { class: "container responsive_ele", children: [
        /* @__PURE__ */ jsxs("div", { class: "row g-4 ", children: [
          /* @__PURE__ */ jsx("div", { class: "col-md-6 col-12 col-xl-4 ", children: /* @__PURE__ */ jsxs("div", { class: "about-company ", style: { marginTop: "5px", height: "fit-content" }, children: [
            /* @__PURE__ */ jsx("div", { class: "logo-wrapper ", style: { height: "max-content" }, children: /* @__PURE__ */ jsx("a", { href: "/", style: { height: "max-content" }, children: /* @__PURE__ */ jsx("img", { src: "/image/excerptwww.png", alt: "", height: 100, width: 600, style: { marginTop: "10px", marginBottom: "20px", zIndex: 1 } }) }) }),
            /* @__PURE__ */ jsxs("div", { class: "content ", children: [
              /* @__PURE__ */ jsx("h2", { class: "heading-3 " }),
              /* @__PURE__ */ jsxs("div", { class: "paragraph ", children: [
                /* @__PURE__ */ jsx("b", { style: { color: "black" }, children: "  Excerpt Technologies Private Limited" }),
                /* @__PURE__ */ jsx("br", {}),
                " is a leading IT solutions and services company established with a specific mission of providing comprehensive, top of the line solutions."
              ] }),
              /* @__PURE__ */ jsx("div", { class: "socials ", children: /* @__PURE__ */ jsxs("ul", { children: [
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/Excerptech", target: "_blanck", children: /* @__PURE__ */ jsx("i", { class: "fa-brands fa-facebook-f " }) }) }),
                /* @__PURE__ */ jsx("li", { class: " ", children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/company/excerptech ", target: "_blanck", children: /* @__PURE__ */ jsx("i", { class: "fa-brands fa-linkedin-in " }) }) }),
                /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/excerpt_technologies/?igsh=Z3k5OXozNDIzZHps ", target: "_blanck", children: /* @__PURE__ */ jsx("i", { class: "fa-brands fa-instagram " }) }) })
              ] }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { class: "col-md-6 col-xl-4 ", children: /* @__PURE__ */ jsxs("div", { class: "wrapper responsive_ey", children: [
            /* @__PURE__ */ jsx("h4", { class: "heading-4 ", children: "Quick Links" }),
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("li", { class: " ", children: /* @__PURE__ */ jsx("a", { href: "/Staticwebsite ", children: "Web Design & Development" }) }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/erp", children: "ERP" }) }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/lms", children: " LMS" }) }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ecommerce ", children: "Ecommerce Solutions" }) }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/CyberSecurity", children: "Cyber Security" }) }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing ", children: "Digital Marketing" }) }),
              /* @__PURE__ */ jsx("br", {})
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "col-md-6 col-xl-4", style: { marginLeft: "" }, children: /* @__PURE__ */ jsxs("div", { className: "wrapper", style: { marginRight: "-10px" }, children: [
            /* @__PURE__ */ jsx("h4", { className: "heading-4", children: "Contact Us" }),
            /* @__PURE__ */ jsxs("div", { className: "d-flex contact", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "icon-wrapper",
                  onClick: () => window.location.href = "tel:+916364657660",
                  style: { cursor: "pointer" },
                  children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone" }) })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "info", children: [
                /* @__PURE__ */ jsx("div", { className: "paragraph", children: /* @__PURE__ */ jsx("a", { href: "tel:+916364657660", children: "+91 63646 57660" }) }),
                /* @__PURE__ */ jsx("div", { className: "paragraph", children: /* @__PURE__ */ jsx("a", { href: "tel:+919900502404", children: "+91 99005 02404" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "d-flex contact", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "icon-wrapper",
                  onClick: () => window.location.href = "mailto:info@excerptech.com",
                  style: { cursor: "pointer" },
                  children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-envelope" }) })
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "info", children: /* @__PURE__ */ jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ jsx("a", { href: "mailto:info@excerptech.com", className: "paragraph", children: "info@excerptech.com" }) }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "d-flex contact", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "icon-wrapper",
                  onClick: () => window.open(
                    "https://maps.app.goo.gl/pF2qHmpSfrtVySP3A",
                    "_blank"
                  ),
                  style: { cursor: "pointer" },
                  children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-location-dot" }) })
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "info", children: /* @__PURE__ */ jsxs("div", { className: "paragraph", children: [
                "2nd Floor, B133/1, KSSIDC ",
                /* @__PURE__ */ jsx("br", {}),
                "ITI Estate, Whitefield Road,",
                /* @__PURE__ */ jsx("br", {}),
                "Mahadevpura Post Bangalore, ",
                /* @__PURE__ */ jsx("br", {}),
                "Karnataka-560048"
              ] }) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "divider " }),
        /* @__PURE__ */ jsx("div", { class: "footer-bottom ", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-center justify-content-md-between align-items-center ", children: [
          /* @__PURE__ */ jsxs("div", { class: "paragraph ", children: [
            /* @__PURE__ */ jsx("span", { style: { textAlign: "center" }, children: "© Excerpt Technologies 2025" }),
            /* @__PURE__ */ jsx("span", { style: { marginLeft: "5px" }, children: "All Rights Reserved." })
          ] }),
          /* @__PURE__ */ jsx("div", { class: "infos ", children: /* @__PURE__ */ jsx("ul", { class: "d-none d-md-flex " }) })
        ] }) })
      ] }) })
    }
  ) });
};
function App$1() {
  return /* @__PURE__ */ jsx("div", { className: "App btn-whatsapp-pulse", children: /* @__PURE__ */ jsx("a", { href: "https://wa.me/+916364657660", target: "blank", children: /* @__PURE__ */ jsx("i", { className: "fab fa-whatsapp" }) }) });
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: isVisible && /* @__PURE__ */ jsx("div", { className: "scroll-to-top-wrapper", children: /* @__PURE__ */ jsx("button", { className: "scroll-to-top-btn", onClick: scrollToTop, children: /* @__PURE__ */ jsx("i", { className: "fa fa-arrow-up" }) }) }) });
};
const ResumeComponent = () => {
  const [resumeData, setResumeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: "createdAt", direction: "descending" });
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/resumedata");
        if (!response.ok) {
          throw new Error("Failed to fetch resume data");
        }
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error("Error fetching resume data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResumeData();
  }, []);
  const formatDate = (dateString) => {
    if (!dateString) return "Not available";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Not available";
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    } catch (error) {
      return "Not available";
    }
  };
  const handleDownload = async (resumePath) => {
    try {
      const response = await fetch(`/api/resumes/${resumePath}`);
      if (!response.ok) {
        throw new Error(`Download failed: ${response.status} ${response.statusText}`);
      }
      const contentType = response.headers.get("content-type");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(
        new Blob([blob], { type: contentType || "application/octet-stream" })
      );
      const a = document.createElement("a");
      a.href = url;
      a.download = resumePath.split("/").pop() || resumePath;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading resume file:", error);
      alert(`Failed to download: ${error.message}`);
    }
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };
  const filteredData = resumeData.filter((item) => {
    return item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.email && item.email.toLowerCase().includes(searchTerm.toLowerCase()) || item.job && item.job.toLowerCase().includes(searchTerm.toLowerCase()) || item.resumePath && item.resumePath.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.key === "createdAt") {
      const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      if (sortConfig.direction === "ascending") {
        return aDate - bDate;
      } else {
        return bDate - aDate;
      }
    } else {
      if (a[sortConfig.key] === void 0 || a[sortConfig.key] === null) return 1;
      if (b[sortConfig.key] === void 0 || b[sortConfig.key] === null) return -1;
      const aValue = typeof a[sortConfig.key] === "string" ? a[sortConfig.key].toLowerCase() : a[sortConfig.key];
      const bValue = typeof b[sortConfig.key] === "string" ? b[sortConfig.key].toLowerCase() : b[sortConfig.key];
      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    }
  });
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? " ▲" : " ▼";
    }
    return "";
  };
  const tableStyles = {
    container: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px"
    },
    searchContainer: {
      marginBottom: "20px"
    },
    searchInput: {
      padding: "8px 12px",
      width: "300px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      backgroundColor: "white",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      overflow: "hidden"
    },
    th: {
      backgroundColor: "#f8f9fa",
      color: "#333",
      fontWeight: "bold",
      padding: "12px 15px",
      textAlign: "left",
      borderBottom: "2px solid #e0e0e0",
      cursor: "pointer",
      userSelect: "none",
      position: "relative"
    },
    td: {
      padding: "10px 15px",
      borderBottom: "1px solid #e0e0e0",
      color: "#333"
    },
    tr: {
      transition: "background-color 0.2s"
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "20px",
      padding: "10px",
      backgroundColor: "#f8f9fa",
      borderRadius: "4px",
      border: "1px solid #e0e0e0"
    },
    paginationControls: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },
    paginationButton: {
      padding: "8px 16px",
      backgroundColor: "#2196F3",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      transition: "background-color 0.2s"
    },
    paginationButtonDisabled: {
      backgroundColor: "#cccccc",
      cursor: "not-allowed"
    },
    paginationInfo: {
      fontSize: "14px",
      color: "#555"
    },
    itemsPerPageContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },
    itemsPerPageLabel: {
      fontSize: "14px",
      color: "#555"
    },
    itemsPerPageSelect: {
      padding: "6px 10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      backgroundColor: "white",
      fontSize: "14px"
    },
    fileName: {
      color: "#2196F3",
      textDecoration: "underline",
      cursor: "pointer"
    },
    loadingText: {
      textAlign: "center",
      padding: "30px",
      color: "#666",
      fontSize: "16px"
    },
    downloadButton: {
      padding: "8px 16px",
      backgroundColor: "#1d4a8e",
      color: "white",
      border: "none",
      borderRadius: "4px",
      width: "100px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "background-color 0.2s"
    },
    summary: {
      marginTop: "10px",
      fontSize: "14px",
      color: "#666"
    },
    emptyMessage: {
      textAlign: "center",
      padding: "30px",
      color: "#666",
      fontSize: "16px",
      border: "1px dashed #ddd",
      borderRadius: "4px",
      backgroundColor: "#f9f9f9"
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { style: tableStyles.loadingText, children: "Loading resume data..." });
  }
  return /* @__PURE__ */ jsxs("div", { style: tableStyles.container, children: [
    /* @__PURE__ */ jsxs("div", { style: tableStyles.header, children: [
      /* @__PURE__ */ jsx("h2", { children: "Resume Data" }),
      /* @__PURE__ */ jsx("div", { style: tableStyles.searchContainer, children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Search by name, email, job...",
          value: searchTerm,
          onChange: handleSearch,
          style: tableStyles.searchInput
        }
      ) })
    ] }),
    currentItems.length === 0 ? /* @__PURE__ */ jsx("div", { style: tableStyles.emptyMessage, children: searchTerm ? "No resumes match your search criteria" : "No resume data available" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxs("table", { style: tableStyles.table, children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsxs(
            "th",
            {
              style: tableStyles.th,
              onClick: () => requestSort("name"),
              children: [
                "Name ",
                getSortIndicator("name")
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "th",
            {
              style: tableStyles.th,
              onClick: () => requestSort("email"),
              children: [
                "Email ",
                getSortIndicator("email")
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "th",
            {
              style: tableStyles.th,
              onClick: () => requestSort("job"),
              children: [
                "Job ",
                getSortIndicator("job")
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "th",
            {
              style: tableStyles.th,
              onClick: () => requestSort("createdAt"),
              children: [
                "Created ",
                getSortIndicator("createdAt")
              ]
            }
          ),
          /* @__PURE__ */ jsx("th", { style: tableStyles.th, children: "Resume File" }),
          /* @__PURE__ */ jsx("th", { style: tableStyles.th, children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: currentItems.map((resume, index) => /* @__PURE__ */ jsxs(
          "tr",
          {
            style: tableStyles.tr,
            onMouseEnter: (e) => {
              e.currentTarget.style.backgroundColor = "#f5f5f5";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.backgroundColor = "";
            },
            children: [
              /* @__PURE__ */ jsx("td", { style: tableStyles.td, children: resume.name || "N/A" }),
              /* @__PURE__ */ jsx("td", { style: tableStyles.td, children: resume.email || "N/A" }),
              /* @__PURE__ */ jsx("td", { style: tableStyles.td, children: resume.job || "N/A" }),
              /* @__PURE__ */ jsx("td", { style: tableStyles.td, children: formatDate(resume.createdAt) }),
              /* @__PURE__ */ jsx("td", { style: tableStyles.td, children: resume.resumePath ? /* @__PURE__ */ jsx(
                "span",
                {
                  style: tableStyles.fileName,
                  onClick: () => handleDownload(resume.resumePath),
                  children: resume.resumePath.split("/").pop() || resume.resumePath
                }
              ) : "No file" }),
              /* @__PURE__ */ jsx("td", { style: tableStyles.td, children: resume.resumePath ? /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => handleDownload(resume.resumePath),
                  style: tableStyles.downloadButton,
                  onMouseEnter: (e) => {
                    e.currentTarget.style.backgroundColor = "#1d4a8e";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.backgroundColor = "#1d4a8e";
                  },
                  children: "Download"
                }
              ) : /* @__PURE__ */ jsx("span", { style: { color: "#999" }, children: "No file" }) })
            ]
          },
          resume._id || index
        )) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { style: tableStyles.summary, children: [
        "Showing ",
        indexOfFirstItem + 1,
        " to ",
        Math.min(indexOfLastItem, sortedData.length),
        " of ",
        sortedData.length,
        " entries"
      ] }),
      /* @__PURE__ */ jsxs("div", { style: tableStyles.paginationContainer, children: [
        /* @__PURE__ */ jsxs("div", { style: tableStyles.itemsPerPageContainer, children: [
          /* @__PURE__ */ jsx("span", { style: tableStyles.itemsPerPageLabel, children: "Items per page:" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: itemsPerPage,
              onChange: handleItemsPerPageChange,
              style: tableStyles.itemsPerPageSelect,
              children: [
                /* @__PURE__ */ jsx("option", { value: 5, children: "5" }),
                /* @__PURE__ */ jsx("option", { value: 10, children: "10" }),
                /* @__PURE__ */ jsx("option", { value: 25, children: "25" }),
                /* @__PURE__ */ jsx("option", { value: 50, children: "50" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { style: tableStyles.paginationInfo, children: [
          "Page ",
          currentPage,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxs("div", { style: tableStyles.paginationControls, children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: goToPrevPage,
              disabled: currentPage === 1,
              style: {
                ...tableStyles.paginationButton,
                ...currentPage === 1 ? tableStyles.paginationButtonDisabled : {}
              },
              children: "Prev"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: goToNextPage,
              disabled: currentPage === totalPages || totalPages === 0,
              style: {
                ...tableStyles.paginationButton,
                ...currentPage === totalPages || totalPages === 0 ? tableStyles.paginationButtonDisabled : {}
              },
              children: "Next"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const common = {
  black: "#000",
  white: "#fff"
};
const red = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
};
const purple = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
};
const blue = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
};
const lightBlue = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
};
const green = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
const orange = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
};
const grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
const THEME_ID = "$$material";
function getLight() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common.white,
      default: common.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const light = getLight();
function getDark() {
  return {
    text: {
      primary: common.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: common.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const dark = getDark();
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function mixLightOrDark(colorSpace, intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = `color-mix(in ${colorSpace}, ${intent.main}, #fff ${(tonalOffsetLight * 100).toFixed(0)}%)`;
    } else if (direction === "dark") {
      intent.dark = `color-mix(in ${colorSpace}, ${intent.main}, #000 ${(tonalOffsetDark * 100).toFixed(0)}%)`;
    }
  }
}
function getDefaultPrimary(mode = "light") {
  if (mode === "dark") {
    return {
      main: blue[200],
      light: blue[50],
      dark: blue[400]
    };
  }
  return {
    main: blue[700],
    light: blue[400],
    dark: blue[800]
  };
}
function getDefaultSecondary(mode = "light") {
  if (mode === "dark") {
    return {
      main: purple[200],
      light: purple[50],
      dark: purple[400]
    };
  }
  return {
    main: purple[500],
    light: purple[300],
    dark: purple[700]
  };
}
function getDefaultError(mode = "light") {
  if (mode === "dark") {
    return {
      main: red[500],
      light: red[300],
      dark: red[700]
    };
  }
  return {
    main: red[700],
    light: red[400],
    dark: red[800]
  };
}
function getDefaultInfo(mode = "light") {
  if (mode === "dark") {
    return {
      main: lightBlue[400],
      light: lightBlue[300],
      dark: lightBlue[700]
    };
  }
  return {
    main: lightBlue[700],
    light: lightBlue[500],
    dark: lightBlue[900]
  };
}
function getDefaultSuccess(mode = "light") {
  if (mode === "dark") {
    return {
      main: green[400],
      light: green[300],
      dark: green[700]
    };
  }
  return {
    main: green[800],
    light: green[500],
    dark: green[900]
  };
}
function getDefaultWarning(mode = "light") {
  if (mode === "dark") {
    return {
      main: orange[400],
      light: orange[300],
      dark: orange[700]
    };
  }
  return {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: orange[500],
    dark: orange[900]
  };
}
function contrastColor(background) {
  return `oklch(from ${background} var(--__l) 0 h / var(--__a))`;
}
function createPalette(palette) {
  const {
    mode = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2,
    colorSpace,
    ...other
  } = palette;
  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode);
  function getContrastText(background) {
    if (colorSpace) {
      return contrastColor(background);
    }
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const contrast = getContrastRatio(background, contrastText);
      if (contrast < 3) {
        console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join("\n"));
      }
    }
    return contrastText;
  }
  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color = {
      ...color
    };
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }
    if (!color.hasOwnProperty("main")) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : _formatErrorMessage(11, name ? ` (${name})` : "", mainShade));
    }
    if (typeof color.main !== "string") {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : _formatErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color.main)));
    }
    if (colorSpace) {
      mixLightOrDark(colorSpace, color, "light", lightShade, tonalOffset);
      mixLightOrDark(colorSpace, color, "dark", darkShade, tonalOffset);
    } else {
      addLightOrDark(color, "light", lightShade, tonalOffset);
      addLightOrDark(color, "dark", darkShade, tonalOffset);
    }
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
    return color;
  };
  let modeHydrated;
  if (mode === "light") {
    modeHydrated = getLight();
  } else if (mode === "dark") {
    modeHydrated = getDark();
  }
  if (process.env.NODE_ENV !== "production") {
    if (!modeHydrated) {
      console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
    }
  }
  const paletteOutput = deepmerge({
    // A collection of common colors.
    common: {
      ...common
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: "success"
    }),
    // The grey colors.
    grey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset,
    // The light and dark mode object.
    ...modeHydrated
  }, other);
  return paletteOutput;
}
function createMixins(breakpoints, mixins) {
  return {
    toolbar: {
      minHeight: 56,
      [breakpoints.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [breakpoints.up("sm")]: {
        minHeight: 64
      }
    },
    ...mixins
  };
}
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
  textTransform: "uppercase"
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette, typography) {
  const {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2,
    ...other
  } = typeof typography === "function" ? typography(palette) : typography;
  if (process.env.NODE_ENV !== "production") {
    if (typeof fontSize !== "number") {
      console.error("MUI: `fontSize` is required to be a number.");
    }
    if (typeof htmlFontSize !== "number") {
      console.error("MUI: `htmlFontSize` is required to be a number.");
    }
  }
  const coef = fontSize / 14;
  const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => ({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...fontFamily === defaultFontFamily ? {
      letterSpacing: `${round(letterSpacing / size)}em`
    } : {},
    ...casing,
    ...allVariants
  });
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return deepmerge({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    ...variants
  }, other, {
    clone: false
    // No need to clone deep
  });
}
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
}
const shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
const easing = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }
  const constant = height / 36;
  return Math.min(Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10), 3e3);
}
function createTransitions(inputTransitions) {
  const mergedEasing = {
    ...easing,
    ...inputTransitions.easing
  };
  const mergedDuration = {
    ...duration,
    ...inputTransitions.duration
  };
  const create = (props = ["all"], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0,
      ...other
    } = options;
    if (process.env.NODE_ENV !== "production") {
      const isString = (value) => typeof value === "string";
      const isNumber = (value) => !Number.isNaN(parseFloat(value));
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
      }
      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }
      if (typeof options !== "object") {
        console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join("\n"));
      }
      if (Object.keys(other).length !== 0) {
        console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
      }
    }
    return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
  };
  return {
    getAutoHeightDuration,
    create,
    ...inputTransitions,
    easing: mergedEasing,
    duration: mergedDuration
  };
}
const zIndex = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function isSerializable(val) {
  return isPlainObject(val) || typeof val === "undefined" || typeof val === "string" || typeof val === "boolean" || typeof val === "number" || Array.isArray(val);
}
function stringifyTheme(baseTheme = {}) {
  const serializableTheme = {
    ...baseTheme
  };
  function serializeTheme(object) {
    const array = Object.entries(object);
    for (let index = 0; index < array.length; index++) {
      const [key, value] = array[index];
      if (!isSerializable(value) || key.startsWith("unstable_")) {
        delete object[key];
      } else if (isPlainObject(value)) {
        object[key] = {
          ...value
        };
        serializeTheme(object[key]);
      }
    }
  }
  serializeTheme(serializableTheme);
  return `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(serializableTheme, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function coefficientToPercentage(coefficient) {
  if (typeof coefficient === "number") {
    return `${(coefficient * 100).toFixed(0)}%`;
  }
  return `calc((${coefficient}) * 100%)`;
}
const parseAddition = (str) => {
  if (!Number.isNaN(+str)) {
    return +str;
  }
  const numbers = str.match(/\d*\.?\d+/g);
  if (!numbers) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += +numbers[i];
  }
  return sum;
};
function attachColorManipulators(theme) {
  Object.assign(theme, {
    alpha(color, coefficient) {
      const obj = this || theme;
      if (obj.colorSpace) {
        return `oklch(from ${color} l c h / ${typeof coefficient === "string" ? `calc(${coefficient})` : coefficient})`;
      }
      if (obj.vars) {
        return `rgba(${color.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof coefficient === "string" ? `calc(${coefficient})` : coefficient})`;
      }
      return alpha(color, parseAddition(coefficient));
    },
    lighten(color, coefficient) {
      const obj = this || theme;
      if (obj.colorSpace) {
        return `color-mix(in ${obj.colorSpace}, ${color}, #fff ${coefficientToPercentage(coefficient)})`;
      }
      return lighten(color, coefficient);
    },
    darken(color, coefficient) {
      const obj = this || theme;
      if (obj.colorSpace) {
        return `color-mix(in ${obj.colorSpace}, ${color}, #000 ${coefficientToPercentage(coefficient)})`;
      }
      return darken(color, coefficient);
    }
  });
}
function createThemeNoVars(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput,
    mixins: mixinsInput = {},
    spacing: spacingInput,
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {},
    shape: shapeInput,
    colorSpace,
    ...other
  } = options;
  if (options.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  options.generateThemeVars === void 0) {
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : _formatErrorMessage(20));
  }
  const palette = createPalette({
    ...paletteInput,
    colorSpace
  });
  const systemTheme = systemCreateTheme(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: {
      ...zIndex
    }
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  if (process.env.NODE_ENV !== "production") {
    const stateClasses = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"];
    const traverse = (node, component) => {
      let key;
      for (key in node) {
        const child = node[key];
        if (stateClasses.includes(key) && Object.keys(child).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const stateClass = generateUtilityClass("", key);
            console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`, "You can not override it like this: ", JSON.stringify(node, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join("\n"));
          }
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach((component) => {
      const styleOverrides = muiTheme.components[component].styleOverrides;
      if (styleOverrides && component.startsWith("Mui")) {
        traverse(styleOverrides, component);
      }
    });
  }
  muiTheme.unstable_sxConfig = {
    ...unstable_defaultSxConfig,
    ...other?.unstable_sxConfig
  };
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  muiTheme.toRuntimeSource = stringifyTheme;
  attachColorManipulators(muiTheme);
  return muiTheme;
}
function getOverlayAlpha(elevation) {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return Math.round(alphaValue * 10) / 1e3;
}
const defaultDarkOverlays = [...Array(25)].map((_, index) => {
  if (index === 0) {
    return "none";
  }
  const overlay = getOverlayAlpha(index);
  return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
});
function getOpacity(mode) {
  return {
    inputPlaceholder: mode === "dark" ? 0.5 : 0.42,
    inputUnderline: mode === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: mode === "dark" ? 0.2 : 0.12,
    switchTrack: mode === "dark" ? 0.3 : 0.38
  };
}
function getOverlays(mode) {
  return mode === "dark" ? defaultDarkOverlays : [];
}
function createColorScheme(options) {
  const {
    palette: paletteInput = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity,
    overlays,
    colorSpace,
    ...rest
  } = options;
  const palette = createPalette({
    ...paletteInput,
    colorSpace
  });
  return {
    palette,
    opacity: {
      ...getOpacity(palette.mode),
      ...opacity
    },
    overlays: overlays || getOverlays(palette.mode),
    ...rest
  };
}
function shouldSkipGeneratingVar(keys) {
  return !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) || // ends with sxConfig
  keys[0] === "palette" && !!keys[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const excludeVariablesFromRoot = (cssVarPrefix) => [...[...Array(25)].map((_, index) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}overlays-${index}`), `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkBg`, `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}palette-AppBar-darkColor`];
const defaultGetSelector = (theme) => (colorScheme, css2) => {
  const root = theme.rootSelector || ":root";
  const selector = theme.colorSchemeSelector;
  let rule = selector;
  if (selector === "class") {
    rule = ".%s";
  }
  if (selector === "data") {
    rule = "[data-%s]";
  }
  if (selector?.startsWith("data-") && !selector.includes("%s")) {
    rule = `[${selector}="%s"]`;
  }
  if (theme.defaultColorScheme === colorScheme) {
    if (colorScheme === "dark") {
      const excludedVariables = {};
      excludeVariablesFromRoot(theme.cssVarPrefix).forEach((cssVar) => {
        excludedVariables[cssVar] = css2[cssVar];
        delete css2[cssVar];
      });
      if (rule === "media") {
        return {
          [root]: css2,
          [`@media (prefers-color-scheme: dark)`]: {
            [root]: excludedVariables
          }
        };
      }
      if (rule) {
        return {
          [rule.replace("%s", colorScheme)]: excludedVariables,
          [`${root}, ${rule.replace("%s", colorScheme)}`]: css2
        };
      }
      return {
        [root]: {
          ...css2,
          ...excludedVariables
        }
      };
    }
    if (rule && rule !== "media") {
      return `${root}, ${rule.replace("%s", String(colorScheme))}`;
    }
  } else if (colorScheme) {
    if (rule === "media") {
      return {
        [`@media (prefers-color-scheme: ${String(colorScheme)})`]: {
          [root]: css2
        }
      };
    }
    if (rule) {
      return rule.replace("%s", String(colorScheme));
    }
  }
  return root;
};
function assignNode(obj, keys) {
  keys.forEach((k) => {
    if (!obj[k]) {
      obj[k] = {};
    }
  });
}
function setColor(obj, key, defaultValue) {
  if (!obj[key] && defaultValue) {
    obj[key] = defaultValue;
  }
}
function toRgb(color) {
  if (typeof color !== "string" || !color.startsWith("hsl")) {
    return color;
  }
  return hslToRgb(color);
}
function setColorChannel(obj, key) {
  if (!(`${key}Channel` in obj)) {
    obj[`${key}Channel`] = private_safeColorChannel(toRgb(obj[key]), `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`);
  }
}
function getSpacingVal(spacingInput) {
  if (typeof spacingInput === "number") {
    return `${spacingInput}px`;
  }
  if (typeof spacingInput === "string" || typeof spacingInput === "function" || Array.isArray(spacingInput)) {
    return spacingInput;
  }
  return "8px";
}
const silent = (fn) => {
  try {
    return fn();
  } catch (error) {
  }
  return void 0;
};
const createGetCssVar = (cssVarPrefix = "mui") => unstable_createGetCssVar(cssVarPrefix);
function attachColorScheme$1(colorSpace, colorSchemes, scheme, restTheme, colorScheme) {
  if (!scheme) {
    return void 0;
  }
  scheme = scheme === true ? {} : scheme;
  const mode = colorScheme === "dark" ? "dark" : "light";
  if (!restTheme) {
    colorSchemes[colorScheme] = createColorScheme({
      ...scheme,
      palette: {
        mode,
        ...scheme?.palette
      },
      colorSpace
    });
    return void 0;
  }
  const {
    palette,
    ...muiTheme
  } = createThemeNoVars({
    ...restTheme,
    palette: {
      mode,
      ...scheme?.palette
    },
    colorSpace
  });
  colorSchemes[colorScheme] = {
    ...scheme,
    palette,
    opacity: {
      ...getOpacity(mode),
      ...scheme?.opacity
    },
    overlays: scheme?.overlays || getOverlays(mode)
  };
  return muiTheme;
}
function createThemeWithVars(options = {}, ...args) {
  const {
    colorSchemes: colorSchemesInput = {
      light: true
    },
    defaultColorScheme: defaultColorSchemeInput,
    disableCssColorScheme = false,
    cssVarPrefix = "mui",
    nativeColor = false,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar$1 = shouldSkipGeneratingVar,
    colorSchemeSelector: selector = colorSchemesInput.light && colorSchemesInput.dark ? "media" : void 0,
    rootSelector = ":root",
    ...input
  } = options;
  const firstColorScheme = Object.keys(colorSchemesInput)[0];
  const defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== "light" ? "light" : firstColorScheme);
  const getCssVar = createGetCssVar(cssVarPrefix);
  const {
    [defaultColorScheme]: defaultSchemeInput,
    light: builtInLight,
    dark: builtInDark,
    ...customColorSchemes
  } = colorSchemesInput;
  const colorSchemes = {
    ...customColorSchemes
  };
  let defaultScheme = defaultSchemeInput;
  if (defaultColorScheme === "dark" && !("dark" in colorSchemesInput) || defaultColorScheme === "light" && !("light" in colorSchemesInput)) {
    defaultScheme = true;
  }
  if (!defaultScheme) {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${defaultColorScheme}\` option is either missing or invalid.` : _formatErrorMessage(21, defaultColorScheme));
  }
  let colorSpace;
  if (nativeColor) {
    colorSpace = "oklch";
  }
  const muiTheme = attachColorScheme$1(colorSpace, colorSchemes, defaultScheme, input, defaultColorScheme);
  if (builtInLight && !colorSchemes.light) {
    attachColorScheme$1(colorSpace, colorSchemes, builtInLight, void 0, "light");
  }
  if (builtInDark && !colorSchemes.dark) {
    attachColorScheme$1(colorSpace, colorSchemes, builtInDark, void 0, "dark");
  }
  let theme = {
    defaultColorScheme,
    ...muiTheme,
    cssVarPrefix,
    colorSchemeSelector: selector,
    rootSelector,
    getCssVar,
    colorSchemes,
    font: {
      ...prepareTypographyVars(muiTheme.typography),
      ...muiTheme.font
    },
    spacing: getSpacingVal(input.spacing)
  };
  Object.keys(theme.colorSchemes).forEach((key) => {
    const palette = theme.colorSchemes[key].palette;
    const setCssVarColor = (cssVar) => {
      const tokens = cssVar.split("-");
      const color = tokens[1];
      const colorToken = tokens[2];
      return getCssVar(cssVar, palette[color][colorToken]);
    };
    if (palette.mode === "light") {
      setColor(palette.common, "background", "#fff");
      setColor(palette.common, "onBackground", "#000");
    }
    if (palette.mode === "dark") {
      setColor(palette.common, "background", "#000");
      setColor(palette.common, "onBackground", "#fff");
    }
    function colorMix(method, color, coefficient) {
      if (colorSpace) {
        let mixer;
        if (method === private_safeAlpha) {
          mixer = `transparent ${((1 - coefficient) * 100).toFixed(0)}%`;
        }
        if (method === private_safeDarken) {
          mixer = `#000 ${(coefficient * 100).toFixed(0)}%`;
        }
        if (method === private_safeLighten) {
          mixer = `#fff ${(coefficient * 100).toFixed(0)}%`;
        }
        return `color-mix(in ${colorSpace}, ${color}, ${mixer})`;
      }
      return method(color, coefficient);
    }
    assignNode(palette, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]);
    if (palette.mode === "light") {
      setColor(palette.Alert, "errorColor", colorMix(private_safeDarken, palette.error.light, 0.6));
      setColor(palette.Alert, "infoColor", colorMix(private_safeDarken, palette.info.light, 0.6));
      setColor(palette.Alert, "successColor", colorMix(private_safeDarken, palette.success.light, 0.6));
      setColor(palette.Alert, "warningColor", colorMix(private_safeDarken, palette.warning.light, 0.6));
      setColor(palette.Alert, "errorFilledBg", setCssVarColor("palette-error-main"));
      setColor(palette.Alert, "infoFilledBg", setCssVarColor("palette-info-main"));
      setColor(palette.Alert, "successFilledBg", setCssVarColor("palette-success-main"));
      setColor(palette.Alert, "warningFilledBg", setCssVarColor("palette-warning-main"));
      setColor(palette.Alert, "errorFilledColor", silent(() => palette.getContrastText(palette.error.main)));
      setColor(palette.Alert, "infoFilledColor", silent(() => palette.getContrastText(palette.info.main)));
      setColor(palette.Alert, "successFilledColor", silent(() => palette.getContrastText(palette.success.main)));
      setColor(palette.Alert, "warningFilledColor", silent(() => palette.getContrastText(palette.warning.main)));
      setColor(palette.Alert, "errorStandardBg", colorMix(private_safeLighten, palette.error.light, 0.9));
      setColor(palette.Alert, "infoStandardBg", colorMix(private_safeLighten, palette.info.light, 0.9));
      setColor(palette.Alert, "successStandardBg", colorMix(private_safeLighten, palette.success.light, 0.9));
      setColor(palette.Alert, "warningStandardBg", colorMix(private_safeLighten, palette.warning.light, 0.9));
      setColor(palette.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
      setColor(palette.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
      setColor(palette.Alert, "successIconColor", setCssVarColor("palette-success-main"));
      setColor(palette.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
      setColor(palette.AppBar, "defaultBg", setCssVarColor("palette-grey-100"));
      setColor(palette.Avatar, "defaultBg", setCssVarColor("palette-grey-400"));
      setColor(palette.Button, "inheritContainedBg", setCssVarColor("palette-grey-300"));
      setColor(palette.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-A100"));
      setColor(palette.Chip, "defaultBorder", setCssVarColor("palette-grey-400"));
      setColor(palette.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-700"));
      setColor(palette.Chip, "defaultIconColor", setCssVarColor("palette-grey-700"));
      setColor(palette.FilledInput, "bg", "rgba(0, 0, 0, 0.06)");
      setColor(palette.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)");
      setColor(palette.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)");
      setColor(palette.LinearProgress, "primaryBg", colorMix(private_safeLighten, palette.primary.main, 0.62));
      setColor(palette.LinearProgress, "secondaryBg", colorMix(private_safeLighten, palette.secondary.main, 0.62));
      setColor(palette.LinearProgress, "errorBg", colorMix(private_safeLighten, palette.error.main, 0.62));
      setColor(palette.LinearProgress, "infoBg", colorMix(private_safeLighten, palette.info.main, 0.62));
      setColor(palette.LinearProgress, "successBg", colorMix(private_safeLighten, palette.success.main, 0.62));
      setColor(palette.LinearProgress, "warningBg", colorMix(private_safeLighten, palette.warning.main, 0.62));
      setColor(palette.Skeleton, "bg", colorSpace ? colorMix(private_safeAlpha, palette.text.primary, 0.11) : `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.11)`);
      setColor(palette.Slider, "primaryTrack", colorMix(private_safeLighten, palette.primary.main, 0.62));
      setColor(palette.Slider, "secondaryTrack", colorMix(private_safeLighten, palette.secondary.main, 0.62));
      setColor(palette.Slider, "errorTrack", colorMix(private_safeLighten, palette.error.main, 0.62));
      setColor(palette.Slider, "infoTrack", colorMix(private_safeLighten, palette.info.main, 0.62));
      setColor(palette.Slider, "successTrack", colorMix(private_safeLighten, palette.success.main, 0.62));
      setColor(palette.Slider, "warningTrack", colorMix(private_safeLighten, palette.warning.main, 0.62));
      const snackbarContentBackground = colorSpace ? colorMix(private_safeDarken, palette.background.default, 0.6825) : private_safeEmphasize(palette.background.default, 0.8);
      setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
      setColor(palette.SnackbarContent, "color", silent(() => colorSpace ? dark.text.primary : palette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, "fabHoverBg", private_safeEmphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, "border", setCssVarColor("palette-grey-400"));
      setColor(palette.StepContent, "border", setCssVarColor("palette-grey-400"));
      setColor(palette.Switch, "defaultColor", setCssVarColor("palette-common-white"));
      setColor(palette.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-100"));
      setColor(palette.Switch, "primaryDisabledColor", colorMix(private_safeLighten, palette.primary.main, 0.62));
      setColor(palette.Switch, "secondaryDisabledColor", colorMix(private_safeLighten, palette.secondary.main, 0.62));
      setColor(palette.Switch, "errorDisabledColor", colorMix(private_safeLighten, palette.error.main, 0.62));
      setColor(palette.Switch, "infoDisabledColor", colorMix(private_safeLighten, palette.info.main, 0.62));
      setColor(palette.Switch, "successDisabledColor", colorMix(private_safeLighten, palette.success.main, 0.62));
      setColor(palette.Switch, "warningDisabledColor", colorMix(private_safeLighten, palette.warning.main, 0.62));
      setColor(palette.TableCell, "border", colorMix(private_safeLighten, colorMix(private_safeAlpha, palette.divider, 1), 0.88));
      setColor(palette.Tooltip, "bg", colorMix(private_safeAlpha, palette.grey[700], 0.92));
    }
    if (palette.mode === "dark") {
      setColor(palette.Alert, "errorColor", colorMix(private_safeLighten, palette.error.light, 0.6));
      setColor(palette.Alert, "infoColor", colorMix(private_safeLighten, palette.info.light, 0.6));
      setColor(palette.Alert, "successColor", colorMix(private_safeLighten, palette.success.light, 0.6));
      setColor(palette.Alert, "warningColor", colorMix(private_safeLighten, palette.warning.light, 0.6));
      setColor(palette.Alert, "errorFilledBg", setCssVarColor("palette-error-dark"));
      setColor(palette.Alert, "infoFilledBg", setCssVarColor("palette-info-dark"));
      setColor(palette.Alert, "successFilledBg", setCssVarColor("palette-success-dark"));
      setColor(palette.Alert, "warningFilledBg", setCssVarColor("palette-warning-dark"));
      setColor(palette.Alert, "errorFilledColor", silent(() => palette.getContrastText(palette.error.dark)));
      setColor(palette.Alert, "infoFilledColor", silent(() => palette.getContrastText(palette.info.dark)));
      setColor(palette.Alert, "successFilledColor", silent(() => palette.getContrastText(palette.success.dark)));
      setColor(palette.Alert, "warningFilledColor", silent(() => palette.getContrastText(palette.warning.dark)));
      setColor(palette.Alert, "errorStandardBg", colorMix(private_safeDarken, palette.error.light, 0.9));
      setColor(palette.Alert, "infoStandardBg", colorMix(private_safeDarken, palette.info.light, 0.9));
      setColor(palette.Alert, "successStandardBg", colorMix(private_safeDarken, palette.success.light, 0.9));
      setColor(palette.Alert, "warningStandardBg", colorMix(private_safeDarken, palette.warning.light, 0.9));
      setColor(palette.Alert, "errorIconColor", setCssVarColor("palette-error-main"));
      setColor(palette.Alert, "infoIconColor", setCssVarColor("palette-info-main"));
      setColor(palette.Alert, "successIconColor", setCssVarColor("palette-success-main"));
      setColor(palette.Alert, "warningIconColor", setCssVarColor("palette-warning-main"));
      setColor(palette.AppBar, "defaultBg", setCssVarColor("palette-grey-900"));
      setColor(palette.AppBar, "darkBg", setCssVarColor("palette-background-paper"));
      setColor(palette.AppBar, "darkColor", setCssVarColor("palette-text-primary"));
      setColor(palette.Avatar, "defaultBg", setCssVarColor("palette-grey-600"));
      setColor(palette.Button, "inheritContainedBg", setCssVarColor("palette-grey-800"));
      setColor(palette.Button, "inheritContainedHoverBg", setCssVarColor("palette-grey-700"));
      setColor(palette.Chip, "defaultBorder", setCssVarColor("palette-grey-700"));
      setColor(palette.Chip, "defaultAvatarColor", setCssVarColor("palette-grey-300"));
      setColor(palette.Chip, "defaultIconColor", setCssVarColor("palette-grey-300"));
      setColor(palette.FilledInput, "bg", "rgba(255, 255, 255, 0.09)");
      setColor(palette.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)");
      setColor(palette.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)");
      setColor(palette.LinearProgress, "primaryBg", colorMix(private_safeDarken, palette.primary.main, 0.5));
      setColor(palette.LinearProgress, "secondaryBg", colorMix(private_safeDarken, palette.secondary.main, 0.5));
      setColor(palette.LinearProgress, "errorBg", colorMix(private_safeDarken, palette.error.main, 0.5));
      setColor(palette.LinearProgress, "infoBg", colorMix(private_safeDarken, palette.info.main, 0.5));
      setColor(palette.LinearProgress, "successBg", colorMix(private_safeDarken, palette.success.main, 0.5));
      setColor(palette.LinearProgress, "warningBg", colorMix(private_safeDarken, palette.warning.main, 0.5));
      setColor(palette.Skeleton, "bg", colorSpace ? colorMix(private_safeAlpha, palette.text.primary, 0.13) : `rgba(${setCssVarColor("palette-text-primaryChannel")} / 0.13)`);
      setColor(palette.Slider, "primaryTrack", colorMix(private_safeDarken, palette.primary.main, 0.5));
      setColor(palette.Slider, "secondaryTrack", colorMix(private_safeDarken, palette.secondary.main, 0.5));
      setColor(palette.Slider, "errorTrack", colorMix(private_safeDarken, palette.error.main, 0.5));
      setColor(palette.Slider, "infoTrack", colorMix(private_safeDarken, palette.info.main, 0.5));
      setColor(palette.Slider, "successTrack", colorMix(private_safeDarken, palette.success.main, 0.5));
      setColor(palette.Slider, "warningTrack", colorMix(private_safeDarken, palette.warning.main, 0.5));
      const snackbarContentBackground = colorSpace ? colorMix(private_safeLighten, palette.background.default, 0.985) : private_safeEmphasize(palette.background.default, 0.98);
      setColor(palette.SnackbarContent, "bg", snackbarContentBackground);
      setColor(palette.SnackbarContent, "color", silent(() => colorSpace ? light.text.primary : palette.getContrastText(snackbarContentBackground)));
      setColor(palette.SpeedDialAction, "fabHoverBg", private_safeEmphasize(palette.background.paper, 0.15));
      setColor(palette.StepConnector, "border", setCssVarColor("palette-grey-600"));
      setColor(palette.StepContent, "border", setCssVarColor("palette-grey-600"));
      setColor(palette.Switch, "defaultColor", setCssVarColor("palette-grey-300"));
      setColor(palette.Switch, "defaultDisabledColor", setCssVarColor("palette-grey-600"));
      setColor(palette.Switch, "primaryDisabledColor", colorMix(private_safeDarken, palette.primary.main, 0.55));
      setColor(palette.Switch, "secondaryDisabledColor", colorMix(private_safeDarken, palette.secondary.main, 0.55));
      setColor(palette.Switch, "errorDisabledColor", colorMix(private_safeDarken, palette.error.main, 0.55));
      setColor(palette.Switch, "infoDisabledColor", colorMix(private_safeDarken, palette.info.main, 0.55));
      setColor(palette.Switch, "successDisabledColor", colorMix(private_safeDarken, palette.success.main, 0.55));
      setColor(palette.Switch, "warningDisabledColor", colorMix(private_safeDarken, palette.warning.main, 0.55));
      setColor(palette.TableCell, "border", colorMix(private_safeDarken, colorMix(private_safeAlpha, palette.divider, 1), 0.68));
      setColor(palette.Tooltip, "bg", colorMix(private_safeAlpha, palette.grey[700], 0.92));
    }
    setColorChannel(palette.background, "default");
    setColorChannel(palette.background, "paper");
    setColorChannel(palette.common, "background");
    setColorChannel(palette.common, "onBackground");
    setColorChannel(palette, "divider");
    Object.keys(palette).forEach((color) => {
      const colors = palette[color];
      if (color !== "tonalOffset" && colors && typeof colors === "object") {
        if (colors.main) {
          setColor(palette[color], "mainChannel", private_safeColorChannel(toRgb(colors.main)));
        }
        if (colors.light) {
          setColor(palette[color], "lightChannel", private_safeColorChannel(toRgb(colors.light)));
        }
        if (colors.dark) {
          setColor(palette[color], "darkChannel", private_safeColorChannel(toRgb(colors.dark)));
        }
        if (colors.contrastText) {
          setColor(palette[color], "contrastTextChannel", private_safeColorChannel(toRgb(colors.contrastText)));
        }
        if (color === "text") {
          setColorChannel(palette[color], "primary");
          setColorChannel(palette[color], "secondary");
        }
        if (color === "action") {
          if (colors.active) {
            setColorChannel(palette[color], "active");
          }
          if (colors.selected) {
            setColorChannel(palette[color], "selected");
          }
        }
      }
    });
  });
  theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);
  const parserConfig = {
    prefix: cssVarPrefix,
    disableCssColorScheme,
    shouldSkipGeneratingVar: shouldSkipGeneratingVar$1,
    getSelector: defaultGetSelector(theme),
    enableContrastVars: nativeColor
  };
  const {
    vars,
    generateThemeVars,
    generateStyleSheets
  } = prepareCssVars(theme, parserConfig);
  theme.vars = vars;
  Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(([key, value]) => {
    theme[key] = value;
  });
  theme.generateThemeVars = generateThemeVars;
  theme.generateStyleSheets = generateStyleSheets;
  theme.generateSpacing = function generateSpacing() {
    return createSpacing(input.spacing, createUnarySpacing(this));
  };
  theme.getColorSchemeSelector = createGetColorSchemeSelector(selector);
  theme.spacing = theme.generateSpacing();
  theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar$1;
  theme.unstable_sxConfig = {
    ...unstable_defaultSxConfig,
    ...input?.unstable_sxConfig
  };
  theme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  theme.toRuntimeSource = stringifyTheme;
  return theme;
}
function attachColorScheme(theme, scheme, colorScheme) {
  if (!theme.colorSchemes) {
    return void 0;
  }
  if (colorScheme) {
    theme.colorSchemes[scheme] = {
      ...colorScheme !== true && colorScheme,
      palette: createPalette({
        ...colorScheme === true ? {} : colorScheme.palette,
        mode: scheme
      })
      // cast type to skip module augmentation test
    };
  }
}
function createTheme(options = {}, ...args) {
  const {
    palette,
    cssVariables = false,
    colorSchemes: initialColorSchemes = !palette ? {
      light: true
    } : void 0,
    defaultColorScheme: initialDefaultColorScheme = palette?.mode,
    ...rest
  } = options;
  const defaultColorSchemeInput = initialDefaultColorScheme || "light";
  const defaultScheme = initialColorSchemes?.[defaultColorSchemeInput];
  const colorSchemesInput = {
    ...initialColorSchemes,
    ...palette ? {
      [defaultColorSchemeInput]: {
        ...typeof defaultScheme !== "boolean" && defaultScheme,
        palette
      }
    } : void 0
  };
  if (cssVariables === false) {
    if (!("colorSchemes" in options)) {
      return createThemeNoVars(options, ...args);
    }
    let paletteOptions = palette;
    if (!("palette" in options)) {
      if (colorSchemesInput[defaultColorSchemeInput]) {
        if (colorSchemesInput[defaultColorSchemeInput] !== true) {
          paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
        } else if (defaultColorSchemeInput === "dark") {
          paletteOptions = {
            mode: "dark"
          };
        }
      }
    }
    const theme = createThemeNoVars({
      ...options,
      palette: paletteOptions
    }, ...args);
    theme.defaultColorScheme = defaultColorSchemeInput;
    theme.colorSchemes = colorSchemesInput;
    if (theme.palette.mode === "light") {
      theme.colorSchemes.light = {
        ...colorSchemesInput.light !== true && colorSchemesInput.light,
        palette: theme.palette
      };
      attachColorScheme(theme, "dark", colorSchemesInput.dark);
    }
    if (theme.palette.mode === "dark") {
      theme.colorSchemes.dark = {
        ...colorSchemesInput.dark !== true && colorSchemesInput.dark,
        palette: theme.palette
      };
      attachColorScheme(theme, "light", colorSchemesInput.light);
    }
    return theme;
  }
  if (!palette && !("light" in colorSchemesInput) && defaultColorSchemeInput === "light") {
    colorSchemesInput.light = true;
  }
  return createThemeWithVars({
    ...rest,
    colorSchemes: colorSchemesInput,
    defaultColorScheme: defaultColorSchemeInput,
    ...typeof cssVariables !== "boolean" && cssVariables
  }, ...args);
}
const defaultTheme$1 = createTheme();
function useTheme() {
  const theme = useTheme$1(defaultTheme$1);
  if (process.env.NODE_ENV !== "production") {
    React.useDebugValue(theme);
  }
  return theme[THEME_ID] || theme;
}
function slotShouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
const rootShouldForwardProp = (prop) => slotShouldForwardProp(prop) && prop !== "classes";
const styled = createStyled({
  themeId: THEME_ID,
  defaultTheme: defaultTheme$1,
  rootShouldForwardProp
});
function GlobalStyles(props) {
  return /* @__PURE__ */ jsx(GlobalStyles$1, {
    ...props,
    defaultTheme: defaultTheme$1,
    themeId: THEME_ID
  });
}
process.env.NODE_ENV !== "production" ? GlobalStyles.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.number, PropTypes.object, PropTypes.string, PropTypes.bool])
} : void 0;
function globalCss(styles2) {
  return function GlobalStylesWrapper(props) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ jsx(GlobalStyles, {
        styles: typeof styles2 === "function" ? (theme) => styles2({
          theme,
          ...props
        }) : styles2
      })
    );
  };
}
function internal_createExtendSxProp() {
  return extendSxProp$1;
}
const memoTheme = unstable_memoTheme;
process.env.NODE_ENV !== "production" ? {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  value: PropTypes.object.isRequired
} : void 0;
function useDefaultProps(params) {
  return useDefaultProps$1(params);
}
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const useUtilityClasses$B = (ownerState) => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color !== "inherit" && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = styled("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "inherit" && styles2[`color${capitalize(ownerState.color)}`], styles2[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: theme.transitions?.create?.("fill", {
    duration: (theme.vars ?? theme).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (props) => !props.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: theme.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: theme.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: theme.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((theme.vars ?? theme).palette).filter(([, value]) => value && value.main).map(([color]) => ({
      props: {
        color
      },
      style: {
        color: (theme.vars ?? theme).palette?.[color]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (theme.vars ?? theme).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (theme.vars ?? theme).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
})));
const SvgIcon = /* @__PURE__ */ React.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children,
    className,
    color = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24",
    ...other
  } = props;
  const hasSvgAsChild = /* @__PURE__ */ React.isValidElement(children) && children.type === "svg";
  const ownerState = {
    ...props,
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  };
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses$B(ownerState);
  return /* @__PURE__ */ jsxs(SvgIconRoot, {
    as: component,
    className: clsx(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref,
    ...more,
    ...other,
    ...hasSvgAsChild && children.props,
    ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /* @__PURE__ */ jsx("title", {
      children: titleAccess
    }) : null]
  });
});
process.env.NODE_ENV !== "production" ? SvgIcon.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: PropTypes.oneOfType([PropTypes.oneOf(["inherit", "large", "medium", "small"]), PropTypes.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: PropTypes.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: PropTypes.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: PropTypes.string
} : void 0;
SvgIcon.muiName = "SvgIcon";
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /* @__PURE__ */ jsx(SvgIcon, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${displayName}Icon` : void 0,
      ref,
      ...props,
      children: path
    });
  }
  if (process.env.NODE_ENV !== "production") {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon.muiName;
  return /* @__PURE__ */ React.memo(/* @__PURE__ */ React.forwardRef(Component));
}
function isEventHandler(key, value) {
  const thirdCharCode = key.charCodeAt(2);
  return key[0] === "o" && key[1] === "n" && thirdCharCode >= 65 && thirdCharCode <= 90 && typeof value === "function";
}
function mergeSlotProps(externalSlotProps, defaultSlotProps) {
  if (!externalSlotProps) {
    return defaultSlotProps;
  }
  function extractHandlers(externalSlotPropsValue, defaultSlotPropsValue) {
    const handlers2 = {};
    Object.keys(defaultSlotPropsValue).forEach((key) => {
      if (isEventHandler(key, defaultSlotPropsValue[key]) && typeof externalSlotPropsValue[key] === "function") {
        handlers2[key] = (...args) => {
          externalSlotPropsValue[key](...args);
          defaultSlotPropsValue[key](...args);
        };
      }
    });
    return handlers2;
  }
  if (typeof externalSlotProps === "function" || typeof defaultSlotProps === "function") {
    return (ownerState) => {
      const defaultSlotPropsValue = typeof defaultSlotProps === "function" ? defaultSlotProps(ownerState) : defaultSlotProps;
      const externalSlotPropsValue = typeof externalSlotProps === "function" ? externalSlotProps({
        ...ownerState,
        ...defaultSlotPropsValue
      }) : externalSlotProps;
      const className2 = clsx(ownerState?.className, defaultSlotPropsValue?.className, externalSlotPropsValue?.className);
      const handlers2 = extractHandlers(externalSlotPropsValue, defaultSlotPropsValue);
      return {
        ...defaultSlotPropsValue,
        ...externalSlotPropsValue,
        ...handlers2,
        ...!!className2 && {
          className: className2
        },
        ...defaultSlotPropsValue?.style && externalSlotPropsValue?.style && {
          style: {
            ...defaultSlotPropsValue.style,
            ...externalSlotPropsValue.style
          }
        },
        ...defaultSlotPropsValue?.sx && externalSlotPropsValue?.sx && {
          sx: [...Array.isArray(defaultSlotPropsValue.sx) ? defaultSlotPropsValue.sx : [defaultSlotPropsValue.sx], ...Array.isArray(externalSlotPropsValue.sx) ? externalSlotPropsValue.sx : [externalSlotPropsValue.sx]]
        }
      };
    };
  }
  const typedDefaultSlotProps = defaultSlotProps;
  const handlers = extractHandlers(externalSlotProps, typedDefaultSlotProps);
  const className = clsx(typedDefaultSlotProps?.className, externalSlotProps?.className);
  return {
    ...defaultSlotProps,
    ...externalSlotProps,
    ...handlers,
    ...!!className && {
      className
    },
    ...typedDefaultSlotProps?.style && externalSlotProps?.style && {
      style: {
        ...typedDefaultSlotProps.style,
        ...externalSlotProps.style
      }
    },
    ...typedDefaultSlotProps?.sx && externalSlotProps?.sx && {
      sx: [...Array.isArray(typedDefaultSlotProps.sx) ? typedDefaultSlotProps.sx : [typedDefaultSlotProps.sx], ...Array.isArray(externalSlotProps.sx) ? externalSlotProps.sx : [externalSlotProps.sx]]
    }
  };
}
const reflow = (node) => node.scrollTop;
function getTransitionProps(props, options) {
  const {
    timeout,
    easing: easing2,
    style = {}
  } = props;
  return {
    duration: style.transitionDuration ?? (typeof timeout === "number" ? timeout : timeout[options.mode] || 0),
    easing: style.transitionTimingFunction ?? (typeof easing2 === "object" ? easing2[options.mode] : easing2),
    delay: style.transitionDelay
  };
}
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const useUtilityClasses$A = (ownerState) => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
const PaperRoot = styled("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], !ownerState.square && styles2.rounded, ownerState.variant === "elevation" && styles2[`elevation${ownerState.elevation}`]];
  }
})(memoTheme(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.primary,
  transition: theme.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.square,
    style: {
      borderRadius: theme.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
})));
const Paper = /* @__PURE__ */ React.forwardRef(function Paper2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiPaper"
  });
  const theme = useTheme();
  const {
    className,
    component = "div",
    elevation = 1,
    square = false,
    variant = "elevation",
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    elevation,
    square,
    variant
  };
  const classes = useUtilityClasses$A(ownerState);
  if (process.env.NODE_ENV !== "production") {
    if (theme.shadows[elevation] === void 0) {
      console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join("\n"));
    }
  }
  return /* @__PURE__ */ jsx(PaperRoot, {
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref,
    ...other,
    style: {
      ...variant === "elevation" && {
        "--Paper-shadow": (theme.vars || theme).shadows[elevation],
        ...theme.vars && {
          "--Paper-overlay": theme.vars.overlays?.[elevation]
        },
        ...!theme.vars && theme.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${alpha("#fff", getOverlayAlpha(elevation))}, ${alpha("#fff", getOverlayAlpha(elevation))})`
        }
      },
      ...other.style
    }
  });
});
process.env.NODE_ENV !== "production" ? Paper.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: chainPropTypes(integerPropType, (props) => {
    const {
      elevation,
      variant
    } = props;
    if (elevation > 0 && variant === "outlined") {
      return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
    }
    return null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: PropTypes.bool,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: PropTypes.oneOfType([PropTypes.oneOf(["elevation", "outlined"]), PropTypes.string])
} : void 0;
function useSlot(name, parameters) {
  const {
    className,
    elementType: initialElementType,
    ownerState,
    externalForwardedProps,
    internalForwardedProps,
    shouldForwardComponentProp = false,
    ...useSlotPropsParams
  } = parameters;
  const {
    component: rootComponent,
    slots = {
      [name]: void 0
    },
    slotProps = {
      [name]: void 0
    },
    ...other
  } = externalForwardedProps;
  const elementType = slots[name] || initialElementType;
  const resolvedComponentsProps = resolveComponentProps(slotProps[name], ownerState);
  const {
    props: {
      component: slotComponent,
      ...mergedProps
    },
    internalRef
  } = mergeSlotProps$1({
    className,
    ...useSlotPropsParams,
    externalForwardedProps: name === "root" ? other : void 0,
    externalSlotProps: resolvedComponentsProps
  });
  const ref = useForkRef(internalRef, resolvedComponentsProps?.ref, parameters.ref);
  const LeafComponent = name === "root" ? slotComponent || rootComponent : slotComponent;
  const props = appendOwnerState(elementType, {
    ...name === "root" && !rootComponent && !slots[name] && internalForwardedProps,
    ...name !== "root" && !slots[name] && internalForwardedProps,
    ...mergedProps,
    ...LeafComponent && !shouldForwardComponentProp && {
      as: LeafComponent
    },
    ...LeafComponent && shouldForwardComponentProp && {
      component: LeafComponent
    },
    ref
  }, ownerState);
  return [elementType, props];
}
class LazyRipple {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new LazyRipple();
  }
  static use() {
    const ripple = useLazyRef(LazyRipple.create).current;
    const [shouldMount, setShouldMount] = React.useState(false);
    ripple.shouldMount = shouldMount;
    ripple.setShouldMount = setShouldMount;
    React.useEffect(ripple.mountEffect, [shouldMount]);
    return ripple;
  }
  constructor() {
    this.ref = {
      current: null
    };
    this.mounted = null;
    this.didMount = false;
    this.shouldMount = false;
    this.setShouldMount = null;
  }
  mount() {
    if (!this.mounted) {
      this.mounted = createControlledPromise();
      this.shouldMount = true;
      this.setShouldMount(this.shouldMount);
    }
    return this.mounted;
  }
  mountEffect = () => {
    if (this.shouldMount && !this.didMount) {
      if (this.ref.current !== null) {
        this.didMount = true;
        this.mounted.resolve();
      }
    }
  };
  /* Ripple API */
  start(...args) {
    this.mount().then(() => this.ref.current?.start(...args));
  }
  stop(...args) {
    this.mount().then(() => this.ref.current?.stop(...args));
  }
  pulsate(...args) {
    this.mount().then(() => this.ref.current?.pulsate(...args));
  }
}
function useLazyRipple() {
  return LazyRipple.use();
}
function createControlledPromise() {
  let resolve;
  let reject;
  const p = new Promise((resolveFn, rejectFn) => {
    resolve = resolveFn;
    reject = rejectFn;
  });
  p.resolve = resolve;
  p.reject = reject;
  return p;
}
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = React.useState(false);
  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  React.useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout]);
  return /* @__PURE__ */ jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /* @__PURE__ */ jsx("span", {
      className: childClassName
    })
  });
}
process.env.NODE_ENV !== "production" ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: PropTypes.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: PropTypes.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: PropTypes.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: PropTypes.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: PropTypes.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: PropTypes.number,
  /**
   * exit delay
   */
  timeout: PropTypes.number.isRequired
} : void 0;
const touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;
const exitKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
const pulsateKeyframe = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
const TouchRippleRoot = styled("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
});
const TouchRippleRipple = styled(Ripple, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${touchRippleClasses.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${enterKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  &.${touchRippleClasses.ripplePulsate} {
    animation-duration: ${({
  theme
}) => theme.transitions.duration.shorter}ms;
  }

  & .${touchRippleClasses.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${touchRippleClasses.childLeaving} {
    opacity: 0;
    animation-name: ${exitKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  & .${touchRippleClasses.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${pulsateKeyframe};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`;
const TouchRipple = /* @__PURE__ */ React.forwardRef(function TouchRipple2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className,
    ...other
  } = props;
  const [ripples, setRipples] = React.useState([]);
  const nextKey = React.useRef(0);
  const rippleCallback = React.useRef(null);
  React.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = React.useRef(false);
  const startTimer = useTimeout();
  const startTimerCommit = React.useRef(null);
  const container = React.useRef(null);
  const startCommit = React.useCallback((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ jsx(TouchRippleRipple, {
      classes: {
        ripple: clsx(classes.ripple, touchRippleClasses.ripple),
        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
        child: clsx(classes.child, touchRippleClasses.child),
        childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
        childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = React.useCallback((event = {}, options = {}, cb = () => {
  }) => {
    const {
      pulsate: pulsate2 = false,
      center = centerProp || options.pulsate,
      fakeElement = false
      // For test purposes
    } = options;
    if (event?.type === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if (event?.type === "touchstart") {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    if (event?.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = () => {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.start(DELAY_RIPPLE, () => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        });
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit, startTimer]);
  const pulsate = React.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = React.useCallback((event, cb) => {
    startTimer.clear();
    if (event?.type === "touchend" && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.start(0, () => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples((oldRipples) => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, [startTimer]);
  React.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /* @__PURE__ */ jsx(TouchRippleRoot, {
    className: clsx(touchRippleClasses.root, classes.root, className),
    ref: container,
    ...other,
    children: /* @__PURE__ */ jsx(TransitionGroup, {
      component: null,
      exit: true,
      children: ripples
    })
  });
});
process.env.NODE_ENV !== "production" ? TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string
} : void 0;
function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass("MuiButtonBase", slot);
}
const buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
const useUtilityClasses$z = (ownerState) => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
const ButtonBaseRoot = styled("button", {
  name: "MuiButtonBase",
  slot: "Root"
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${buttonBaseClasses.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
});
const ButtonBase = /* @__PURE__ */ React.forwardRef(function ButtonBase2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiButtonBase"
  });
  const {
    action,
    centerRipple = false,
    children,
    className,
    component = "button",
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    focusVisibleClassName,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type,
    ...other
  } = props;
  const buttonRef = React.useRef(null);
  const ripple = useLazyRipple();
  const handleRippleRef = useForkRef(ripple.ref, touchRippleRef);
  const [focusVisible, setFocusVisible] = React.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const enableTouchRipple = ripple.shouldMount && !disableRipple && !disabled;
  React.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple) {
      ripple.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, ripple]);
  const handleMouseDown = useRippleHandler(ripple, "start", onMouseDown, disableTouchRipple);
  const handleContextMenu = useRippleHandler(ripple, "stop", onContextMenu, disableTouchRipple);
  const handleDragLeave = useRippleHandler(ripple, "stop", onDragLeave, disableTouchRipple);
  const handleMouseUp = useRippleHandler(ripple, "stop", onMouseUp, disableTouchRipple);
  const handleMouseLeave = useRippleHandler(ripple, "stop", (event) => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  }, disableTouchRipple);
  const handleTouchStart = useRippleHandler(ripple, "start", onTouchStart, disableTouchRipple);
  const handleTouchEnd = useRippleHandler(ripple, "stop", onTouchEnd, disableTouchRipple);
  const handleTouchMove = useRippleHandler(ripple, "stop", onTouchMove, disableTouchRipple);
  const handleBlur = useRippleHandler(ripple, "stop", (event) => {
    if (!isFocusVisible(event.target)) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    if (isFocusVisible(event.target)) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  const handleKeyDown = useEventCallback((event) => {
    if (focusRipple && !event.repeat && focusVisible && event.key === " ") {
      ripple.stop(event, () => {
        ripple.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback((event) => {
    if (focusRipple && event.key === " " && focusVisible && !event.defaultPrevented) {
      ripple.stop(event, () => {
        ripple.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === "button" && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type === void 0 ? "button" : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = "button";
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
    }
  }
  const handleRef = useForkRef(ref, buttonRef);
  const ownerState = {
    ...props,
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  };
  const classes = useUtilityClasses$z(ownerState);
  return /* @__PURE__ */ jsxs(ButtonBaseRoot, {
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState,
    onBlur: handleBlur,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type,
    ...buttonProps,
    ...other,
    children: [children, enableTouchRipple ? /* @__PURE__ */ jsx(TouchRipple, {
      ref: handleRippleRef,
      center: centerRipple,
      ...TouchRippleProps
    }) : null]
  });
});
function useRippleHandler(ripple, rippleAction, eventCallback, skipRippleAction = false) {
  return useEventCallback((event) => {
    if (eventCallback) {
      eventCallback(event);
    }
    if (!skipRippleAction) {
      ripple[rippleAction](event);
    }
    return true;
  });
}
process.env.NODE_ENV !== "production" ? ButtonBase.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: refType,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: PropTypes.bool,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: PropTypes.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: PropTypes.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * @ignore
   */
  href: PropTypes.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: PropTypes.elementType,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  onContextMenu: PropTypes.func,
  /**
   * @ignore
   */
  onDragLeave: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,
  /**
   * @ignore
   */
  onMouseDown: PropTypes.func,
  /**
   * @ignore
   */
  onMouseLeave: PropTypes.func,
  /**
   * @ignore
   */
  onMouseUp: PropTypes.func,
  /**
   * @ignore
   */
  onTouchEnd: PropTypes.func,
  /**
   * @ignore
   */
  onTouchMove: PropTypes.func,
  /**
   * @ignore
   */
  onTouchStart: PropTypes.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * @default 0
   */
  tabIndex: PropTypes.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: PropTypes.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.shape({
      pulsate: PropTypes.func.isRequired,
      start: PropTypes.func.isRequired,
      stop: PropTypes.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: PropTypes.oneOfType([PropTypes.oneOf(["button", "reset", "submit"]), PropTypes.string])
} : void 0;
function hasCorrectMainProperty(obj) {
  return typeof obj.main === "string";
}
function checkSimplePaletteColorValues(obj, additionalPropertiesToCheck = []) {
  if (!hasCorrectMainProperty(obj)) {
    return false;
  }
  for (const value of additionalPropertiesToCheck) {
    if (!obj.hasOwnProperty(value) || typeof obj[value] !== "string") {
      return false;
    }
  }
  return true;
}
function createSimplePaletteValueFilter(additionalPropertiesToCheck = []) {
  return ([, value]) => value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
}
function getAlertUtilityClass(slot) {
  return generateUtilityClass("MuiAlert", slot);
}
const alertClasses = generateUtilityClasses("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function getCircularProgressUtilityClass(slot) {
  return generateUtilityClass("MuiCircularProgress", slot);
}
generateUtilityClasses("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const SIZE = 44;
const circularRotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
const circularDashKeyframe = keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`;
const rotateAnimation = typeof circularRotateKeyframe !== "string" ? css`
        animation: ${circularRotateKeyframe} 1.4s linear infinite;
      ` : null;
const dashAnimation = typeof circularDashKeyframe !== "string" ? css`
        animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
      ` : null;
const useUtilityClasses$y = (ownerState) => {
  const {
    classes,
    variant,
    color,
    disableShrink
  } = ownerState;
  const slots = {
    root: ["root", variant, `color${capitalize(color)}`],
    svg: ["svg"],
    circle: ["circle", `circle${capitalize(variant)}`, disableShrink && "circleDisableShrink"]
  };
  return composeClasses(slots, getCircularProgressUtilityClass, classes);
};
const CircularProgressRoot = styled("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: theme.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: rotateAnimation || {
      animation: `${circularRotateKeyframe} 1.4s linear infinite`
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  }))]
})));
const CircularProgressSVG = styled("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
});
const CircularProgressCircle = styled("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.circle, styles2[`circle${capitalize(ownerState.variant)}`], ownerState.disableShrink && styles2.circleDisableShrink];
  }
})(memoTheme(({
  theme
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: theme.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.variant === "indeterminate" && !ownerState.disableShrink,
    style: dashAnimation || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`
    }
  }]
})));
const CircularProgress = /* @__PURE__ */ React.forwardRef(function CircularProgress2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiCircularProgress"
  });
  const {
    className,
    color = "primary",
    disableShrink = false,
    size = 40,
    style,
    thickness = 3.6,
    value = 0,
    variant = "indeterminate",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disableShrink,
    size,
    thickness,
    value,
    variant
  };
  const classes = useUtilityClasses$y(ownerState);
  const circleStyle = {};
  const rootStyle = {};
  const rootProps = {};
  if (variant === "determinate") {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps["aria-valuenow"] = Math.round(value);
    circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
    rootStyle.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ jsx(CircularProgressRoot, {
    className: clsx(classes.root, className),
    style: {
      width: size,
      height: size,
      ...rootStyle,
      ...style
    },
    ownerState,
    ref,
    role: "progressbar",
    ...rootProps,
    ...other,
    children: /* @__PURE__ */ jsx(CircularProgressSVG, {
      className: classes.svg,
      ownerState,
      viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
      children: /* @__PURE__ */ jsx(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? CircularProgress.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), PropTypes.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: chainPropTypes(PropTypes.bool, (props) => {
    if (props.disableShrink && props.variant && props.variant !== "indeterminate") {
      return new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.");
    }
    return null;
  }),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: PropTypes.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: PropTypes.oneOf(["determinate", "indeterminate"])
} : void 0;
function getIconButtonUtilityClass(slot) {
  return generateUtilityClass("MuiIconButton", slot);
}
const iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]);
const useUtilityClasses$x = (ownerState) => {
  const {
    classes,
    disabled,
    color,
    edge,
    size,
    loading
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading", disabled && "disabled", color !== "default" && `color${capitalize(color)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = styled(ButtonBase, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.loading && styles2.loading, ownerState.color !== "default" && styles2[`color${capitalize(ownerState.color)}`], ownerState.edge && styles2[`edge${capitalize(ownerState.edge)}`], styles2[`size${capitalize(ownerState.size)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: (props) => !props.disableRipple,
    style: {
      "--IconButton-hoverBg": theme.alpha((theme.vars || theme).palette.action.active, (theme.vars || theme).palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), memoTheme(({
  theme
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      "--IconButton-hoverBg": theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: theme.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: theme.typography.pxToRem(28)
    }
  }],
  [`&.${iconButtonClasses.disabled}`]: {
    backgroundColor: "transparent",
    color: (theme.vars || theme).palette.action.disabled
  },
  [`&.${iconButtonClasses.loading}`]: {
    color: "transparent"
  }
})));
const IconButtonLoadingIndicator = styled("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator"
})(({
  theme
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (theme.vars || theme).palette.action.disabled,
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: "flex"
    }
  }]
}));
const IconButton = /* @__PURE__ */ React.forwardRef(function IconButton2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiIconButton"
  });
  const {
    edge = false,
    children,
    className,
    color = "default",
    disabled = false,
    disableFocusRipple = false,
    size = "medium",
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    ...other
  } = props;
  const loadingId = useId(idProp);
  const loadingIndicator = loadingIndicatorProp ?? /* @__PURE__ */ jsx(CircularProgress, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    edge,
    color,
    disabled,
    disableFocusRipple,
    loading,
    loadingIndicator,
    size
  };
  const classes = useUtilityClasses$x(ownerState);
  return /* @__PURE__ */ jsxs(IconButtonRoot, {
    id: loading ? loadingId : idProp,
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled || loading,
    ref,
    ...other,
    ownerState,
    children: [typeof loading === "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ jsx("span", {
      className: classes.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ jsx(IconButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState,
        children: loading && loadingIndicator
      })
    }), children]
  });
});
process.env.NODE_ENV !== "production" ? IconButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: chainPropTypes(PropTypes.node, (props) => {
    const found = React.Children.toArray(props.children).some((child) => /* @__PURE__ */ React.isValidElement(child) && child.props.onClick);
    if (found) {
      return new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join("\n"));
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), PropTypes.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: PropTypes.oneOf(["end", "start", false]),
  /**
   * @ignore
   */
  id: PropTypes.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: PropTypes.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: PropTypes.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: PropTypes.oneOfType([PropTypes.oneOf(["small", "medium", "large"]), PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
const SuccessOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined");
const ReportProblemOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined");
const ErrorOutlineIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline");
const InfoOutlinedIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined");
const ClearIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
const useUtilityClasses$w = (ownerState) => {
  const {
    variant,
    color,
    severity,
    classes
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color || severity)}`, `${variant}${capitalize(color || severity)}`, `${variant}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return composeClasses(slots, getAlertUtilityClass, classes);
};
const AlertRoot = styled(Paper, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`${ownerState.variant}${capitalize(ownerState.color || ownerState.severity)}`]];
  }
})(memoTheme(({
  theme
}) => {
  const getColor = theme.palette.mode === "light" ? theme.darken : theme.lighten;
  const getBackgroundColor = theme.palette.mode === "light" ? theme.lighten : theme.darken;
  return {
    ...theme.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color]) => ({
      props: {
        colorSeverity: color,
        variant: "standard"
      },
      style: {
        color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
        backgroundColor: theme.vars ? theme.vars.palette.Alert[`${color}StandardBg`] : getBackgroundColor(theme.palette[color].light, 0.9),
        [`& .${alertClasses.icon}`]: theme.vars ? {
          color: theme.vars.palette.Alert[`${color}IconColor`]
        } : {
          color: theme.palette[color].main
        }
      }
    })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["light"])).map(([color]) => ({
      props: {
        colorSeverity: color,
        variant: "outlined"
      },
      style: {
        color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
        border: `1px solid ${(theme.vars || theme).palette[color].light}`,
        [`& .${alertClasses.icon}`]: theme.vars ? {
          color: theme.vars.palette.Alert[`${color}IconColor`]
        } : {
          color: theme.palette[color].main
        }
      }
    })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => ({
      props: {
        colorSeverity: color,
        variant: "filled"
      },
      style: {
        fontWeight: theme.typography.fontWeightMedium,
        ...theme.vars ? {
          color: theme.vars.palette.Alert[`${color}FilledColor`],
          backgroundColor: theme.vars.palette.Alert[`${color}FilledBg`]
        } : {
          backgroundColor: theme.palette.mode === "dark" ? theme.palette[color].dark : theme.palette[color].main,
          color: theme.palette.getContrastText(theme.palette[color].main)
        }
      }
    }))]
  };
}));
const AlertIcon = styled("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
});
const AlertMessage = styled("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
});
const AlertAction = styled("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
});
const defaultIconMapping = {
  success: /* @__PURE__ */ jsx(SuccessOutlinedIcon, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ jsx(ReportProblemOutlinedIcon, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ jsx(ErrorOutlineIcon, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ jsx(InfoOutlinedIcon, {
    fontSize: "inherit"
  })
};
const Alert = /* @__PURE__ */ React.forwardRef(function Alert2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiAlert"
  });
  const {
    action,
    children,
    className,
    closeText = "Close",
    color,
    components = {},
    componentsProps = {},
    icon,
    iconMapping = defaultIconMapping,
    onClose,
    role = "alert",
    severity = "success",
    slotProps = {},
    slots = {},
    variant = "standard",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    severity,
    variant,
    colorSeverity: color || severity
  };
  const classes = useUtilityClasses$w(ownerState);
  const externalForwardedProps = {
    slots: {
      closeButton: components.CloseButton,
      closeIcon: components.CloseIcon,
      ...slots
    },
    slotProps: {
      ...componentsProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    ref,
    shouldForwardComponentProp: true,
    className: clsx(classes.root, className),
    elementType: AlertRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    additionalProps: {
      role,
      elevation: 0
    }
  });
  const [IconSlot, iconSlotProps] = useSlot("icon", {
    className: classes.icon,
    elementType: AlertIcon,
    externalForwardedProps,
    ownerState
  });
  const [MessageSlot, messageSlotProps] = useSlot("message", {
    className: classes.message,
    elementType: AlertMessage,
    externalForwardedProps,
    ownerState
  });
  const [ActionSlot, actionSlotProps] = useSlot("action", {
    className: classes.action,
    elementType: AlertAction,
    externalForwardedProps,
    ownerState
  });
  const [CloseButtonSlot, closeButtonProps] = useSlot("closeButton", {
    elementType: IconButton,
    externalForwardedProps,
    ownerState
  });
  const [CloseIconSlot, closeIconProps] = useSlot("closeIcon", {
    elementType: ClearIcon,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsxs(RootSlot, {
    ...rootSlotProps,
    children: [icon !== false ? /* @__PURE__ */ jsx(IconSlot, {
      ...iconSlotProps,
      children: icon || iconMapping[severity] || defaultIconMapping[severity]
    }) : null, /* @__PURE__ */ jsx(MessageSlot, {
      ...messageSlotProps,
      children
    }), action != null ? /* @__PURE__ */ jsx(ActionSlot, {
      ...actionSlotProps,
      children: action
    }) : null, action == null && onClose ? /* @__PURE__ */ jsx(ActionSlot, {
      ...actionSlotProps,
      children: /* @__PURE__ */ jsx(CloseButtonSlot, {
        size: "small",
        "aria-label": closeText,
        title: closeText,
        color: "inherit",
        onClick: onClose,
        ...closeButtonProps,
        children: /* @__PURE__ */ jsx(CloseIconSlot, {
          fontSize: "small",
          ...closeIconProps
        })
      })
    }) : null]
  });
});
process.env.NODE_ENV !== "production" ? Alert.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: PropTypes.node,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: PropTypes.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["error", "info", "success", "warning"]), PropTypes.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: PropTypes.shape({
    CloseButton: PropTypes.elementType,
    CloseIcon: PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: PropTypes.shape({
    closeButton: PropTypes.object,
    closeIcon: PropTypes.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: PropTypes.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: PropTypes.shape({
    error: PropTypes.node,
    info: PropTypes.node,
    success: PropTypes.node,
    warning: PropTypes.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: PropTypes.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: PropTypes.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: PropTypes.oneOfType([PropTypes.oneOf(["error", "info", "success", "warning"]), PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    action: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    closeButton: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    closeIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    message: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    action: PropTypes.elementType,
    closeButton: PropTypes.elementType,
    closeIcon: PropTypes.elementType,
    icon: PropTypes.elementType,
    message: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: PropTypes.oneOfType([PropTypes.oneOf(["filled", "outlined", "standard"]), PropTypes.string])
} : void 0;
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
const typographyClasses = generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const v6Colors = {
  primary: true,
  secondary: true,
  error: true,
  info: true,
  success: true,
  warning: true,
  textPrimary: true,
  textSecondary: true,
  textDisabled: true
};
const extendSxProp = internal_createExtendSxProp();
const useUtilityClasses$v = (ownerState) => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = styled("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.variant && styles2[ownerState.variant], ownerState.align !== "inherit" && styles2[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles2.noWrap, ownerState.gutterBottom && styles2.gutterBottom, ownerState.paragraph && styles2.paragraph];
  }
})(memoTheme(({
  theme
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: "inherit"
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  }, ...Object.entries(theme.typography).filter(([variant, value]) => variant !== "inherit" && value && typeof value === "object").map(([variant, value]) => ({
    props: {
      variant
    },
    style: value
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      color: (theme.vars || theme).palette[color].main
    }
  })), ...Object.entries(theme.palette?.text || {}).filter(([, value]) => typeof value === "string").map(([color]) => ({
    props: {
      color: `text${capitalize(color)}`
    },
    style: {
      color: (theme.vars || theme).palette.text[color]
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.paragraph,
    style: {
      marginBottom: 16
    }
  }]
})));
const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
};
const Typography = /* @__PURE__ */ React.forwardRef(function Typography2(inProps, ref) {
  const {
    color,
    ...themeProps
  } = useDefaultProps({
    props: inProps,
    name: "MuiTypography"
  });
  const isSxColor = !v6Colors[color];
  const props = extendSxProp({
    ...themeProps,
    ...isSxColor && {
      color
    }
  });
  const {
    align = "inherit",
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = "body1",
    variantMapping = defaultVariantMapping,
    ...other
  } = props;
  const ownerState = {
    ...props,
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  };
  const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  const classes = useUtilityClasses$v(ownerState);
  return /* @__PURE__ */ jsx(TypographyRoot, {
    as: Component,
    ref,
    className: clsx(classes.root, className),
    ...other,
    ownerState,
    style: {
      ...align !== "inherit" && {
        "--Typography-textAlign": align
      },
      ...other.style
    }
  });
});
process.env.NODE_ENV !== "production" ? Typography.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: PropTypes.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: PropTypes.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: PropTypes.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: PropTypes.bool,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: PropTypes.oneOfType([PropTypes.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), PropTypes.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: PropTypes.object
} : void 0;
function getContainer$1(container) {
  return typeof container === "function" ? container() : container;
}
const Portal = /* @__PURE__ */ React.forwardRef(function Portal2(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React.useState(null);
  const handleRef = useForkRef(/* @__PURE__ */ React.isValidElement(children) ? getReactElementRef(children) : null, forwardedRef);
  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer$1(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return void 0;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (/* @__PURE__ */ React.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return /* @__PURE__ */ React.cloneElement(children, newProps);
    }
    return children;
  }
  return mountNode ? /* @__PURE__ */ ReactDOM.createPortal(children, mountNode) : mountNode;
});
process.env.NODE_ENV !== "production" ? Portal.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: PropTypes.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes.bool
} : void 0;
if (process.env.NODE_ENV !== "production") {
  Portal["propTypes"] = exactProp(Portal.propTypes);
}
const CancelIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function getChipUtilityClass(slot) {
  return generateUtilityClass("MuiChip", slot);
}
const chipClasses = generateUtilityClasses("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]);
const useUtilityClasses$u = (ownerState) => {
  const {
    classes,
    disabled,
    size,
    color,
    iconColor,
    onDelete,
    clickable,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant, disabled && "disabled", `size${capitalize(size)}`, `color${capitalize(color)}`, clickable && "clickable", clickable && `clickableColor${capitalize(color)}`, onDelete && "deletable", onDelete && `deletableColor${capitalize(color)}`, `${variant}${capitalize(color)}`],
    label: ["label", `label${capitalize(size)}`],
    avatar: ["avatar", `avatar${capitalize(size)}`, `avatarColor${capitalize(color)}`],
    icon: ["icon", `icon${capitalize(size)}`, `iconColor${capitalize(iconColor)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${capitalize(size)}`, `deleteIconColor${capitalize(color)}`, `deleteIcon${capitalize(variant)}Color${capitalize(color)}`]
  };
  return composeClasses(slots, getChipUtilityClass, classes);
};
const ChipRoot = styled("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    const {
      color,
      iconColor,
      clickable,
      onDelete,
      size,
      variant
    } = ownerState;
    return [{
      [`& .${chipClasses.avatar}`]: styles2.avatar
    }, {
      [`& .${chipClasses.avatar}`]: styles2[`avatar${capitalize(size)}`]
    }, {
      [`& .${chipClasses.avatar}`]: styles2[`avatarColor${capitalize(color)}`]
    }, {
      [`& .${chipClasses.icon}`]: styles2.icon
    }, {
      [`& .${chipClasses.icon}`]: styles2[`icon${capitalize(size)}`]
    }, {
      [`& .${chipClasses.icon}`]: styles2[`iconColor${capitalize(iconColor)}`]
    }, {
      [`& .${chipClasses.deleteIcon}`]: styles2.deleteIcon
    }, {
      [`& .${chipClasses.deleteIcon}`]: styles2[`deleteIcon${capitalize(size)}`]
    }, {
      [`& .${chipClasses.deleteIcon}`]: styles2[`deleteIconColor${capitalize(color)}`]
    }, {
      [`& .${chipClasses.deleteIcon}`]: styles2[`deleteIcon${capitalize(variant)}Color${capitalize(color)}`]
    }, styles2.root, styles2[`size${capitalize(size)}`], styles2[`color${capitalize(color)}`], clickable && styles2.clickable, clickable && color !== "default" && styles2[`clickableColor${capitalize(color)})`], onDelete && styles2.deletable, onDelete && color !== "default" && styles2[`deletableColor${capitalize(color)}`], styles2[variant], styles2[`${variant}${capitalize(color)}`]];
  }
})(memoTheme(({
  theme
}) => {
  const textColor = theme.palette.mode === "light" ? theme.palette.grey[700] : theme.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    lineHeight: 1.5,
    color: (theme.vars || theme).palette.text.primary,
    backgroundColor: (theme.vars || theme).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: theme.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${chipClasses.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${chipClasses.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
      fontSize: theme.typography.pxToRem(12)
    },
    [`& .${chipClasses.avatarColorPrimary}`]: {
      color: (theme.vars || theme).palette.primary.contrastText,
      backgroundColor: (theme.vars || theme).palette.primary.dark
    },
    [`& .${chipClasses.avatarColorSecondary}`]: {
      color: (theme.vars || theme).palette.secondary.contrastText,
      backgroundColor: (theme.vars || theme).palette.secondary.dark
    },
    [`& .${chipClasses.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: theme.typography.pxToRem(10)
    },
    [`& .${chipClasses.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${chipClasses.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: theme.alpha((theme.vars || theme).palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: theme.alpha((theme.vars || theme).palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${chipClasses.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${chipClasses.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["contrastText"])).map(([color]) => {
      return {
        props: {
          color
        },
        style: {
          backgroundColor: (theme.vars || theme).palette[color].main,
          color: (theme.vars || theme).palette[color].contrastText,
          [`& .${chipClasses.deleteIcon}`]: {
            color: theme.alpha((theme.vars || theme).palette[color].contrastText, 0.7),
            "&:hover, &:active": {
              color: (theme.vars || theme).palette[color].contrastText
            }
          }
        }
      };
    }), {
      props: (props) => props.iconColor === props.color,
      style: {
        [`& .${chipClasses.icon}`]: {
          color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
        }
      }
    }, {
      props: (props) => props.iconColor === props.color && props.color !== "default",
      style: {
        [`& .${chipClasses.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: true
      },
      style: {
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: theme.alpha((theme.vars || theme).palette.action.selected, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => {
      return {
        props: {
          color,
          onDelete: true
        },
        style: {
          [`&.${chipClasses.focusVisible}`]: {
            background: (theme.vars || theme).palette[color].dark
          }
        }
      };
    }), {
      props: {
        clickable: true
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.alpha((theme.vars || theme).palette.action.selected, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.hoverOpacity}`)
        },
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: theme.alpha((theme.vars || theme).palette.action.selected, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.focusOpacity}`)
        },
        "&:active": {
          boxShadow: (theme.vars || theme).shadows[1]
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(["dark"])).map(([color]) => ({
      props: {
        color,
        clickable: true
      },
      style: {
        [`&:hover, &.${chipClasses.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette[color].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: theme.vars ? `1px solid ${theme.vars.palette.Chip.defaultBorder}` : `1px solid ${theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[700]}`,
        [`&.${chipClasses.clickable}:hover`]: {
          backgroundColor: (theme.vars || theme).palette.action.hover
        },
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: (theme.vars || theme).palette.action.focus
        },
        [`& .${chipClasses.avatar}`]: {
          marginLeft: 4
        },
        [`& .${chipClasses.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${chipClasses.icon}`]: {
          marginLeft: 4
        },
        [`& .${chipClasses.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${chipClasses.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${chipClasses.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        variant: "outlined",
        color
      },
      style: {
        color: (theme.vars || theme).palette[color].main,
        border: `1px solid ${theme.alpha((theme.vars || theme).palette[color].main, 0.7)}`,
        [`&.${chipClasses.clickable}:hover`]: {
          backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity)
        },
        [`&.${chipClasses.focusVisible}`]: {
          backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.focusOpacity)
        },
        [`& .${chipClasses.deleteIcon}`]: {
          color: theme.alpha((theme.vars || theme).palette[color].main, 0.7),
          "&:hover, &:active": {
            color: (theme.vars || theme).palette[color].main
          }
        }
      }
    }))]
  };
}));
const ChipLabel = styled("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    const {
      size
    } = ownerState;
    return [styles2.label, styles2[`label${capitalize(size)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}
const Chip = /* @__PURE__ */ React.forwardRef(function Chip2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiChip"
  });
  const {
    avatar: avatarProp,
    className,
    clickable: clickableProp,
    color = "default",
    component: ComponentProp,
    deleteIcon: deleteIconProp,
    disabled = false,
    icon: iconProp,
    label,
    onClick,
    onDelete,
    onKeyDown,
    onKeyUp,
    size = "medium",
    variant = "filled",
    tabIndex,
    skipFocusWhenDisabled = false,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const chipRef = React.useRef(null);
  const handleRef = useForkRef(chipRef, ref);
  const handleDeleteIconClick = (event) => {
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };
  const handleKeyDown = (event) => {
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleKeyUp = (event) => {
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      }
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
  };
  const clickable = clickableProp !== false && onClick ? true : clickableProp;
  const component = clickable || onDelete ? ButtonBase : ComponentProp || "div";
  const ownerState = {
    ...props,
    component,
    disabled,
    size,
    color,
    iconColor: /* @__PURE__ */ React.isValidElement(iconProp) ? iconProp.props.color || color : color,
    onDelete: !!onDelete,
    clickable,
    variant
  };
  const classes = useUtilityClasses$u(ownerState);
  const moreProps = component === ButtonBase ? {
    component: ComponentProp || "div",
    focusVisibleClassName: classes.focusVisible,
    ...onDelete && {
      disableRipple: true
    }
  } : {};
  let deleteIcon = null;
  if (onDelete) {
    deleteIcon = deleteIconProp && /* @__PURE__ */ React.isValidElement(deleteIconProp) ? /* @__PURE__ */ React.cloneElement(deleteIconProp, {
      className: clsx(deleteIconProp.props.className, classes.deleteIcon),
      onClick: handleDeleteIconClick
    }) : /* @__PURE__ */ jsx(CancelIcon, {
      className: classes.deleteIcon,
      onClick: handleDeleteIconClick
    });
  }
  let avatar = null;
  if (avatarProp && /* @__PURE__ */ React.isValidElement(avatarProp)) {
    avatar = /* @__PURE__ */ React.cloneElement(avatarProp, {
      className: clsx(classes.avatar, avatarProp.props.className)
    });
  }
  let icon = null;
  if (iconProp && /* @__PURE__ */ React.isValidElement(iconProp)) {
    icon = /* @__PURE__ */ React.cloneElement(iconProp, {
      className: clsx(classes.icon, iconProp.props.className)
    });
  }
  if (process.env.NODE_ENV !== "production") {
    if (avatar && icon) {
      console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one.");
    }
  }
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: ChipRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: true,
    ref: handleRef,
    className: clsx(classes.root, className),
    additionalProps: {
      disabled: clickable && disabled ? true : void 0,
      tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
      ...moreProps
    },
    getSlotProps: (handlers) => ({
      ...handlers,
      onClick: (event) => {
        handlers.onClick?.(event);
        onClick?.(event);
      },
      onKeyDown: (event) => {
        handlers.onKeyDown?.(event);
        handleKeyDown(event);
      },
      onKeyUp: (event) => {
        handlers.onKeyUp?.(event);
        handleKeyUp(event);
      }
    })
  });
  const [LabelSlot, labelProps] = useSlot("label", {
    elementType: ChipLabel,
    externalForwardedProps,
    ownerState,
    className: classes.label
  });
  return /* @__PURE__ */ jsxs(RootSlot, {
    as: component,
    ...rootProps,
    children: [avatar || icon, /* @__PURE__ */ jsx(LabelSlot, {
      ...labelProps,
      children: label
    }), deleteIcon]
  });
});
process.env.NODE_ENV !== "production" ? Chip.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: PropTypes.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: PropTypes.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: PropTypes.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * Icon element.
   */
  icon: PropTypes.element,
  /**
   * The content of the component.
   */
  label: PropTypes.node,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes.oneOfType([PropTypes.oneOf(["medium", "small"]), PropTypes.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: PropTypes.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    label: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * @ignore
   */
  tabIndex: PropTypes.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: PropTypes.oneOfType([PropTypes.oneOf(["filled", "outlined"]), PropTypes.string])
} : void 0;
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
const styles$2 = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function isObjectEmpty(object) {
  for (const _ in object) {
    return false;
  }
  return true;
}
function isEmpty$1(obj) {
  return isObjectEmpty(obj) || obj.outerHeightStyle === 0 && !obj.overflowing;
}
const TextareaAutosize = /* @__PURE__ */ React.forwardRef(function TextareaAutosize2(props, forwardedRef) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style,
    value,
    ...other
  } = props;
  const {
    current: isControlled
  } = React.useRef(value != null);
  const textareaRef = React.useRef(null);
  const handleRef = useForkRef(forwardedRef, textareaRef);
  const heightRef = React.useRef(null);
  const hiddenTextareaRef = React.useRef(null);
  const calculateTextareaStyles = React.useCallback(() => {
    const textarea = textareaRef.current;
    const hiddenTextarea = hiddenTextareaRef.current;
    if (!textarea || !hiddenTextarea) {
      return void 0;
    }
    const containerWindow = ownerWindow(textarea);
    const computedStyle = containerWindow.getComputedStyle(textarea);
    if (computedStyle.width === "0px") {
      return {
        outerHeightStyle: 0,
        overflowing: false
      };
    }
    hiddenTextarea.style.width = computedStyle.width;
    hiddenTextarea.value = textarea.value || props.placeholder || "x";
    if (hiddenTextarea.value.slice(-1) === "\n") {
      hiddenTextarea.value += " ";
    }
    const boxSizing = computedStyle.boxSizing;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
    const innerHeight = hiddenTextarea.scrollHeight;
    hiddenTextarea.value = "x";
    const singleRowHeight = hiddenTextarea.scrollHeight;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing === "border-box" ? padding + border : 0);
    const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflowing
    };
  }, [maxRows, minRows, props.placeholder]);
  const didHeightChange = useEventCallback(() => {
    const textarea = textareaRef.current;
    const textareaStyles = calculateTextareaStyles();
    if (!textarea || !textareaStyles || isEmpty$1(textareaStyles)) {
      return false;
    }
    const outerHeightStyle = textareaStyles.outerHeightStyle;
    return heightRef.current != null && heightRef.current !== outerHeightStyle;
  });
  const syncHeight = React.useCallback(() => {
    const textarea = textareaRef.current;
    const textareaStyles = calculateTextareaStyles();
    if (!textarea || !textareaStyles || isEmpty$1(textareaStyles)) {
      return;
    }
    const outerHeightStyle = textareaStyles.outerHeightStyle;
    if (heightRef.current !== outerHeightStyle) {
      heightRef.current = outerHeightStyle;
      textarea.style.height = `${outerHeightStyle}px`;
    }
    textarea.style.overflow = textareaStyles.overflowing ? "hidden" : "";
  }, [calculateTextareaStyles]);
  const frameRef = React.useRef(-1);
  useEnhancedEffect(() => {
    const debouncedHandleResize = debounce(syncHeight);
    const textarea = textareaRef?.current;
    if (!textarea) {
      return void 0;
    }
    const containerWindow = ownerWindow(textarea);
    containerWindow.addEventListener("resize", debouncedHandleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        if (didHeightChange()) {
          resizeObserver.unobserve(textarea);
          cancelAnimationFrame(frameRef.current);
          syncHeight();
          frameRef.current = requestAnimationFrame(() => {
            resizeObserver.observe(textarea);
          });
        }
      });
      resizeObserver.observe(textarea);
    }
    return () => {
      debouncedHandleResize.clear();
      cancelAnimationFrame(frameRef.current);
      containerWindow.removeEventListener("resize", debouncedHandleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [calculateTextareaStyles, syncHeight, didHeightChange]);
  useEnhancedEffect(() => {
    syncHeight();
  });
  const handleChange = (event) => {
    if (!isControlled) {
      syncHeight();
    }
    const textarea = event.target;
    const countOfCharacters = textarea.value.length;
    const isLastCharacterNewLine = textarea.value.endsWith("\n");
    const isEndOfTheLine = textarea.selectionStart === countOfCharacters;
    if (isLastCharacterNewLine && isEndOfTheLine) {
      textarea.setSelectionRange(countOfCharacters, countOfCharacters);
    }
    if (onChange) {
      onChange(event);
    }
  };
  return /* @__PURE__ */ jsxs(React.Fragment, {
    children: [/* @__PURE__ */ jsx("textarea", {
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style,
      ...other
    }), /* @__PURE__ */ jsx("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: hiddenTextareaRef,
      tabIndex: -1,
      style: {
        ...styles$2.shadow,
        ...style,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
process.env.NODE_ENV !== "production" ? TextareaAutosize.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * @ignore
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  placeholder: PropTypes.string,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * @ignore
   */
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.number, PropTypes.string])
} : void 0;
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}
const FormControlContext = /* @__PURE__ */ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") {
  FormControlContext.displayName = "FormControlContext";
}
function useFormControl() {
  return React.useContext(FormControlContext);
}
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}
function getInputBaseUtilityClass(slot) {
  return generateUtilityClass("MuiInputBase", slot);
}
const inputBaseClasses = generateUtilityClasses("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var _InputGlobalStyles;
const rootOverridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, ownerState.formControl && styles2.formControl, ownerState.startAdornment && styles2.adornedStart, ownerState.endAdornment && styles2.adornedEnd, ownerState.error && styles2.error, ownerState.size === "small" && styles2.sizeSmall, ownerState.multiline && styles2.multiline, ownerState.color && styles2[`color${capitalize(ownerState.color)}`], ownerState.fullWidth && styles2.fullWidth, ownerState.hiddenLabel && styles2.hiddenLabel];
};
const inputOverridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.input, ownerState.size === "small" && styles2.inputSizeSmall, ownerState.multiline && styles2.inputMultiline, ownerState.type === "search" && styles2.inputTypeSearch, ownerState.startAdornment && styles2.inputAdornedStart, ownerState.endAdornment && styles2.inputAdornedEnd, ownerState.hiddenLabel && styles2.inputHiddenLabel];
};
const useUtilityClasses$t = (ownerState) => {
  const {
    classes,
    color,
    disabled,
    error,
    endAdornment,
    focused,
    formControl,
    fullWidth,
    hiddenLabel,
    multiline,
    readOnly,
    size,
    startAdornment,
    type
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color)}`, disabled && "disabled", error && "error", fullWidth && "fullWidth", focused && "focused", formControl && "formControl", size && size !== "medium" && `size${capitalize(size)}`, multiline && "multiline", startAdornment && "adornedStart", endAdornment && "adornedEnd", hiddenLabel && "hiddenLabel", readOnly && "readOnly"],
    input: ["input", disabled && "disabled", type === "search" && "inputTypeSearch", multiline && "inputMultiline", size === "small" && "inputSizeSmall", hiddenLabel && "inputHiddenLabel", startAdornment && "inputAdornedStart", endAdornment && "inputAdornedEnd", readOnly && "readOnly"]
  };
  return composeClasses(slots, getInputBaseUtilityClass, classes);
};
const InputBaseRoot = styled("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body1,
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${inputBaseClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState,
      size
    }) => ownerState.multiline && size === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.fullWidth,
    style: {
      width: "100%"
    }
  }]
})));
const InputBaseInput = styled("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(memoTheme(({
  theme
}) => {
  const light2 = theme.palette.mode === "light";
  const placeholder = {
    color: "currentColor",
    ...theme.vars ? {
      opacity: theme.vars.opacity.inputPlaceholder
    } : {
      opacity: light2 ? 0.42 : 0.5
    },
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  };
  const placeholderHidden = {
    opacity: "0 !important"
  };
  const placeholderVisible = theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light2 ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder,
    // Firefox 19+
    "&::-ms-input-placeholder": placeholder,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${inputBaseClasses.formControl} &`]: {
      "&::-webkit-input-placeholder": placeholderHidden,
      "&::-moz-placeholder": placeholderHidden,
      // Firefox 19+
      "&::-ms-input-placeholder": placeholderHidden,
      // Edge
      "&:focus::-webkit-input-placeholder": placeholderVisible,
      "&:focus::-moz-placeholder": placeholderVisible,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": placeholderVisible
      // Edge
    },
    [`&.${inputBaseClasses.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (theme.vars || theme).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
}));
const InputGlobalStyles = globalCss({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
});
const InputBase = /* @__PURE__ */ React.forwardRef(function InputBase2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiInputBase"
  });
  const {
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    color,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    disableInjectingGlobalStyles,
    endAdornment,
    error,
    fullWidth = false,
    id,
    inputComponent = "input",
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    margin,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    size,
    slotProps = {},
    slots = {},
    startAdornment,
    type = "text",
    value: valueProp,
    ...other
  } = props;
  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = React.useRef(value != null);
  const inputRef = React.useRef();
  const handleInputRefWarning = React.useCallback((instance) => {
    if (process.env.NODE_ENV !== "production") {
      if (instance && instance.nodeName !== "INPUT" && !instance.focus) {
        console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join("\n"));
      }
    }
  }, []);
  const handleInputRef = useForkRef(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
  const [focused, setFocused] = React.useState(false);
  const muiFormControl = useFormControl();
  if (process.env.NODE_ENV !== "production") {
    React.useEffect(() => {
      if (muiFormControl) {
        return muiFormControl.registerEffect();
      }
      return void 0;
    }, [muiFormControl]);
  }
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;
  React.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = React.useCallback((obj) => {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  const handleFocus = (event) => {
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : _formatErrorMessage(1));
      }
      checkDirty({
        value: element.value
      });
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    }
    if (onChange) {
      onChange(event, ...args);
    }
  };
  React.useEffect(() => {
    checkDirty(inputRef.current);
  }, []);
  const handleClick = (event) => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  let InputComponent = inputComponent;
  let inputProps = inputPropsProp;
  if (multiline && InputComponent === "input") {
    if (rows) {
      if (process.env.NODE_ENV !== "production") {
        if (minRows || maxRows) {
          console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set.");
        }
      }
      inputProps = {
        type: void 0,
        minRows: rows,
        maxRows: rows,
        ...inputProps
      };
    } else {
      inputProps = {
        type: void 0,
        maxRows,
        minRows,
        ...inputProps
      };
    }
    InputComponent = TextareaAutosize;
  }
  const handleAutoFill = (event) => {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  React.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  const ownerState = {
    ...props,
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    endAdornment,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    startAdornment,
    type
  };
  const classes = useUtilityClasses$t(ownerState);
  const Root = slots.root || components.Root || InputBaseRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const Input3 = slots.input || components.Input || InputBaseInput;
  inputProps = {
    ...inputProps,
    ...slotProps.input ?? componentsProps.input
  };
  return /* @__PURE__ */ jsxs(React.Fragment, {
    children: [!disableInjectingGlobalStyles && typeof InputGlobalStyles === "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (_InputGlobalStyles || (_InputGlobalStyles = /* @__PURE__ */ jsx(InputGlobalStyles, {}))), /* @__PURE__ */ jsxs(Root, {
      ...rootProps,
      ref,
      onClick: handleClick,
      ...other,
      ...!isHostComponent(Root) && {
        ownerState: {
          ...ownerState,
          ...rootProps.ownerState
        }
      },
      className: clsx(classes.root, rootProps.className, className, readOnly && "MuiInputBase-readOnly"),
      children: [startAdornment, /* @__PURE__ */ jsx(FormControlContext.Provider, {
        value: null,
        children: /* @__PURE__ */ jsx(Input3, {
          "aria-invalid": fcs.error,
          "aria-describedby": ariaDescribedby,
          autoComplete,
          autoFocus,
          defaultValue,
          disabled: fcs.disabled,
          id,
          onAnimationStart: handleAutoFill,
          name,
          placeholder,
          readOnly,
          required: fcs.required,
          rows,
          value,
          onKeyDown,
          onKeyUp,
          type,
          ...inputProps,
          ...!isHostComponent(Input3) && {
            as: InputComponent,
            ownerState: {
              ...ownerState,
              ...inputProps.ownerState
            }
          },
          ref: handleInputRef,
          className: clsx(classes.input, inputProps.className, readOnly && "MuiInputBase-readOnly"),
          onBlur: handleBlur,
          onChange: handleChange,
          onFocus: handleFocus
        })
      }), endAdornment, renderSuffix ? renderSuffix({
        ...fcs,
        startAdornment
      }) : null]
    })]
  });
});
process.env.NODE_ENV !== "production" ? InputBase.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": PropTypes.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), PropTypes.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: PropTypes.shape({
    Input: PropTypes.elementType,
    Root: PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: PropTypes.shape({
    input: PropTypes.object,
    root: PropTypes.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: PropTypes.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: elementTypeAcceptingRef,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: PropTypes.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: PropTypes.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes.bool,
  /**
   * @ignore
   */
  renderSuffix: PropTypes.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: PropTypes.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The size of the component.
   */
  size: PropTypes.oneOfType([PropTypes.oneOf(["medium", "small"]), PropTypes.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes.shape({
    input: PropTypes.object,
    root: PropTypes.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: PropTypes.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes.any
} : void 0;
function getInputUtilityClass(slot) {
  return generateUtilityClass("MuiInput", slot);
}
const inputClasses = {
  ...inputBaseClasses,
  ...generateUtilityClasses("MuiInput", ["root", "underline", "input"])
};
function getOutlinedInputUtilityClass(slot) {
  return generateUtilityClass("MuiOutlinedInput", slot);
}
const outlinedInputClasses = {
  ...inputBaseClasses,
  ...generateUtilityClasses("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function getFilledInputUtilityClass(slot) {
  return generateUtilityClass("MuiFilledInput", slot);
}
const filledInputClasses = {
  ...inputBaseClasses,
  ...generateUtilityClasses("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
const ArrowDropDownIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
const styles$1 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
const Fade = /* @__PURE__ */ React.forwardRef(function Fade2(props, ref) {
  const theme = useTheme();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    easing: easing2,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition,
    ...other
  } = props;
  const nodeRef = React.useRef(null);
  const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing: easing2
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing: easing2
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps);
    node.style.transition = theme.transitions.create("opacity", transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return /* @__PURE__ */ jsx(TransitionComponent, {
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout,
    ...other,
    children: (state, {
      ownerState,
      ...restChildProps
    }) => {
      return /* @__PURE__ */ React.cloneElement(children, {
        style: {
          opacity: 0,
          visibility: state === "exited" && !inProp ? "hidden" : void 0,
          ...styles$1[state],
          ...style,
          ...children.props.style
        },
        ref: handleRef,
        ...restChildProps
      });
    }
  });
});
process.env.NODE_ENV !== "production" ? Fade.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: PropTypes.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: PropTypes.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: PropTypes.oneOfType([PropTypes.shape({
    enter: PropTypes.string,
    exit: PropTypes.string
  }), PropTypes.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes.func,
  /**
   * @ignore
   */
  onEntered: PropTypes.func,
  /**
   * @ignore
   */
  onEntering: PropTypes.func,
  /**
   * @ignore
   */
  onExit: PropTypes.func,
  /**
   * @ignore
   */
  onExited: PropTypes.func,
  /**
   * @ignore
   */
  onExiting: PropTypes.func,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
} : void 0;
function getBackdropUtilityClass(slot) {
  return generateUtilityClass("MuiBackdrop", slot);
}
generateUtilityClasses("MuiBackdrop", ["root", "invisible"]);
const useUtilityClasses$s = (ownerState) => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ["root", invisible && "invisible"]
  };
  return composeClasses(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = styled("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.invisible && styles2.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: true
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
});
const Backdrop = /* @__PURE__ */ React.forwardRef(function Backdrop2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiBackdrop"
  });
  const {
    children,
    className,
    component = "div",
    invisible = false,
    open,
    components = {},
    componentsProps = {},
    slotProps = {},
    slots = {},
    TransitionComponent: TransitionComponentProp,
    transitionDuration,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    invisible
  };
  const classes = useUtilityClasses$s(ownerState);
  const backwardCompatibleSlots = {
    transition: TransitionComponentProp,
    root: components.Root,
    ...slots
  };
  const backwardCompatibleSlotProps = {
    ...componentsProps,
    ...slotProps
  };
  const externalForwardedProps = {
    component,
    slots: backwardCompatibleSlots,
    slotProps: backwardCompatibleSlotProps
  };
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: BackdropRoot,
    externalForwardedProps,
    className: clsx(classes.root, className),
    ownerState
  });
  const [TransitionSlot, transitionProps] = useSlot("transition", {
    elementType: Fade,
    externalForwardedProps,
    ownerState
  });
  return /* @__PURE__ */ jsx(TransitionSlot, {
    in: open,
    timeout: transitionDuration,
    ...other,
    ...transitionProps,
    children: /* @__PURE__ */ jsx(RootSlot, {
      "aria-hidden": true,
      ...rootProps,
      classes,
      ref,
      children
    })
  });
});
process.env.NODE_ENV !== "production" ? Backdrop.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: PropTypes.shape({
    Root: PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: PropTypes.shape({
    root: PropTypes.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: PropTypes.bool,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    transition: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType,
    transition: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: PropTypes.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
} : void 0;
const boxClasses = generateUtilityClasses("MuiBox", ["root"]);
const defaultTheme = createTheme();
const Box = createBox({
  themeId: THEME_ID,
  defaultTheme,
  defaultClassName: boxClasses.root,
  generateClassName: ClassNameGenerator.generate
});
process.env.NODE_ENV !== "production" ? Box.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
const buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]);
const ButtonGroupContext = /* @__PURE__ */ React.createContext({});
if (process.env.NODE_ENV !== "production") {
  ButtonGroupContext.displayName = "ButtonGroupContext";
}
const ButtonGroupButtonContext = /* @__PURE__ */ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") {
  ButtonGroupButtonContext.displayName = "ButtonGroupButtonContext";
}
const useUtilityClasses$r = (ownerState) => {
  const {
    color,
    disableElevation,
    fullWidth,
    size,
    variant,
    loading,
    loadingPosition,
    classes
  } = ownerState;
  const slots = {
    root: ["root", loading && "loading", variant, `${variant}${capitalize(color)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, `color${capitalize(color)}`, disableElevation && "disableElevation", fullWidth && "fullWidth", loading && `loadingPosition${capitalize(loadingPosition)}`],
    startIcon: ["icon", "startIcon", `iconSize${capitalize(size)}`],
    endIcon: ["icon", "endIcon", `iconSize${capitalize(size)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return {
    ...classes,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...composedClasses
  };
};
const commonIconStyles = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}];
const ButtonRoot = styled(ButtonBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`${ownerState.variant}${capitalize(ownerState.color)}`], styles2[`size${capitalize(ownerState.size)}`], styles2[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === "inherit" && styles2.colorInherit, ownerState.disableElevation && styles2.disableElevation, ownerState.fullWidth && styles2.fullWidth, ownerState.loading && styles2.loading];
  }
})(memoTheme(({
  theme
}) => {
  const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
  const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
  return {
    ...theme.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${buttonClasses.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: `var(--variant-containedColor)`,
        backgroundColor: `var(--variant-containedBg)`,
        boxShadow: (theme.vars || theme).shadows[2],
        "&:hover": {
          boxShadow: (theme.vars || theme).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (theme.vars || theme).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (theme.vars || theme).shadows[8]
        },
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: (theme.vars || theme).shadows[6]
        },
        [`&.${buttonClasses.disabled}`]: {
          color: (theme.vars || theme).palette.action.disabled,
          boxShadow: (theme.vars || theme).shadows[0],
          backgroundColor: (theme.vars || theme).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: `var(--variant-outlinedBorder, currentColor)`,
        backgroundColor: `var(--variant-outlinedBg)`,
        color: `var(--variant-outlinedColor)`,
        [`&.${buttonClasses.disabled}`]: {
          border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: `var(--variant-textColor)`,
        backgroundColor: `var(--variant-textBg)`
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color
      },
      style: {
        "--variant-textColor": (theme.vars || theme).palette[color].main,
        "--variant-outlinedColor": (theme.vars || theme).palette[color].main,
        "--variant-outlinedBorder": theme.alpha((theme.vars || theme).palette[color].main, 0.5),
        "--variant-containedColor": (theme.vars || theme).palette[color].contrastText,
        "--variant-containedBg": (theme.vars || theme).palette[color].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (theme.vars || theme).palette[color].dark,
            "--variant-textBg": theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (theme.vars || theme).palette[color].main,
            "--variant-outlinedBg": theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
            "--variant-textBg": theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.hoverOpacity),
            "--variant-outlinedBg": theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: theme.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: theme.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: true
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${buttonClasses.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${buttonClasses.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: true
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: theme.transitions.duration.short
        }),
        [`&.${buttonClasses.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
}));
const ButtonStartIcon = styled("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.startIcon, ownerState.loading && styles2.startIconLoadingStart, styles2[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  theme
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: true
    },
    style: {
      transition: theme.transitions.create(["opacity"], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: true,
      fullWidth: true
    },
    style: {
      marginRight: -8
    }
  }, ...commonIconStyles]
}));
const ButtonEndIcon = styled("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.endIcon, ownerState.loading && styles2.endIconLoadingEnd, styles2[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  theme
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: true
    },
    style: {
      transition: theme.transitions.create(["opacity"], {
        duration: theme.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: true,
      fullWidth: true
    },
    style: {
      marginLeft: -8
    }
  }, ...commonIconStyles]
}));
const ButtonLoadingIndicator = styled("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: true
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (theme.vars || theme).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: true
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: true
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
}));
const ButtonLoadingIconPlaceholder = styled("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
});
const Button = /* @__PURE__ */ React.forwardRef(function Button2(inProps, ref) {
  const contextProps = React.useContext(ButtonGroupContext);
  const buttonGroupButtonContextPositionClassName = React.useContext(ButtonGroupButtonContext);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useDefaultProps({
    props: resolvedProps,
    name: "MuiButton"
  });
  const {
    children,
    color = "primary",
    component = "button",
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    id: idProp,
    loading = null,
    loadingIndicator: loadingIndicatorProp,
    loadingPosition = "center",
    size = "medium",
    startIcon: startIconProp,
    type,
    variant = "text",
    ...other
  } = props;
  const loadingId = useId(idProp);
  const loadingIndicator = loadingIndicatorProp ?? /* @__PURE__ */ jsx(CircularProgress, {
    "aria-labelledby": loadingId,
    color: "inherit",
    size: 16
  });
  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    loading,
    loadingIndicator,
    loadingPosition,
    size,
    type,
    variant
  };
  const classes = useUtilityClasses$r(ownerState);
  const startIcon = (startIconProp || loading && loadingPosition === "start") && /* @__PURE__ */ jsx(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp || /* @__PURE__ */ jsx(ButtonLoadingIconPlaceholder, {
      className: classes.loadingIconPlaceholder,
      ownerState
    })
  });
  const endIcon = (endIconProp || loading && loadingPosition === "end") && /* @__PURE__ */ jsx(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp || /* @__PURE__ */ jsx(ButtonLoadingIconPlaceholder, {
      className: classes.loadingIconPlaceholder,
      ownerState
    })
  });
  const positionClassName = buttonGroupButtonContextPositionClassName || "";
  const loader = typeof loading === "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ jsx("span", {
      className: classes.loadingWrapper,
      style: {
        display: "contents"
      },
      children: loading && /* @__PURE__ */ jsx(ButtonLoadingIndicator, {
        className: classes.loadingIndicator,
        ownerState,
        children: loadingIndicator
      })
    })
  ) : null;
  return /* @__PURE__ */ jsxs(ButtonRoot, {
    ownerState,
    className: clsx(contextProps.className, classes.root, className, positionClassName),
    component,
    disabled: disabled || loading,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    ref,
    type,
    id: loading ? loadingId : idProp,
    ...other,
    classes,
    children: [startIcon, loadingPosition !== "end" && loader, children, loadingPosition === "end" && loader, endIcon]
  });
});
process.env.NODE_ENV !== "production" ? Button.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * Element placed after the children.
   */
  endIcon: PropTypes.node,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * @ignore
   */
  id: PropTypes.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: PropTypes.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: PropTypes.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: PropTypes.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: PropTypes.oneOfType([PropTypes.oneOf(["small", "medium", "large"]), PropTypes.string]),
  /**
   * Element placed before the children.
   */
  startIcon: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * @ignore
   */
  type: PropTypes.oneOfType([PropTypes.oneOf(["button", "reset", "submit"]), PropTypes.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: PropTypes.oneOfType([PropTypes.oneOf(["contained", "outlined", "text"]), PropTypes.string])
} : void 0;
function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = "onClick",
    onClickAway,
    touchEvent = "onTouchEnd"
  } = props;
  const movedRef = React.useRef(false);
  const nodeRef = React.useRef(null);
  const activatedRef = React.useRef(false);
  const syntheticEventRef = React.useRef(false);
  React.useEffect(() => {
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef(getReactElementRef(children), nodeRef);
  const handleClickAway = useEventCallback((event) => {
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);
    if (!activatedRef.current || !nodeRef.current || "clientX" in event && clickedRootScrollbar(event, doc)) {
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;
    if (event.composedPath) {
      insideDOM = event.composedPath().includes(nodeRef.current);
    } else {
      insideDOM = !doc.documentElement.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      ) || nodeRef.current.contains(
        // @ts-expect-error returns `false` as intended when not dispatched from a Node
        event.target
      );
    }
    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  });
  const createHandleSynthetic = (handlerName) => (event) => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const childrenProps = {
    ref: handleRef
  };
  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }
  React.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener("touchmove", handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener("touchmove", handleTouchMove);
      };
    }
    return void 0;
  }, [handleClickAway, touchEvent]);
  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }
  React.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }
    return void 0;
  }, [handleClickAway, mouseEvent]);
  return /* @__PURE__ */ React.cloneElement(children, childrenProps);
}
process.env.NODE_ENV !== "production" ? ClickAwayListener.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The wrapped element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   * @default false
   */
  disableReactTree: PropTypes.bool,
  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   * @default 'onClick'
   */
  mouseEvent: PropTypes.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: PropTypes.func.isRequired,
  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   * @default 'onTouchEnd'
   */
  touchEvent: PropTypes.oneOf(["onTouchEnd", "onTouchStart", false])
} : void 0;
if (process.env.NODE_ENV !== "production") {
  ClickAwayListener["propTypes"] = exactProp(ClickAwayListener.propTypes);
}
function isOverflowing(container) {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, hide) {
  if (hide) {
    element.setAttribute("aria-hidden", "true");
  } else {
    element.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  const forbiddenTagNames = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"];
  const isForbiddenTagName = forbiddenTagNames.includes(element.tagName);
  const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, hide) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, (element) => {
    const isNotExcludedElement = !blacklist.includes(element);
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, hide);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      const scrollbarSize = getScrollbarSize(ownerWindow(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: "padding-right",
        el: container
      });
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
      const fixedElements = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedElements, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: "padding-right",
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument(container).body;
    } else {
      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      scrollContainer = parent?.nodeName === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
    }
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: "overflow",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: "overflow-x",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: "overflow-y",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, (element) => {
    if (element.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
class ModalManager {
  constructor() {
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, (item) => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.includes(modal));
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.includes(modal));
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);
    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}
const candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute("tabindex") || "", 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (node.contentEditable === "true" || (node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== "INPUT" || node.type !== "radio") {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = (selector) => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === "INPUT" && node.type === "hidden" || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map((a) => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = React.useRef(false);
  const sentinelStart = React.useRef(null);
  const sentinelEnd = React.useRef(null);
  const nodeToRestore = React.useRef(null);
  const reactFocusEventTarget = React.useRef(null);
  const activated = React.useRef(false);
  const rootRef = React.useRef(null);
  const handleRef = useForkRef(getReactElementRef(children), rootRef);
  const lastKeydown = React.useRef(null);
  React.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  React.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        if (process.env.NODE_ENV !== "production") {
          console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join("\n"));
        }
        rootRef.current.setAttribute("tabIndex", "-1");
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [open]);
  React.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
        return;
      }
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    const contain = () => {
      const rootElement = rootRef.current;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (rootElement.contains(doc.activeElement)) {
        return;
      }
      if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
        return;
      }
      if (doc.activeElement !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }
      if (!activated.current) {
        return;
      }
      let tabbable = [];
      if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current);
      }
      if (tabbable.length > 0) {
        const isShiftTab = Boolean(lastKeydown.current?.shiftKey && lastKeydown.current?.key === "Tab");
        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];
        if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
      } else {
        rootElement.focus();
      }
    };
    doc.addEventListener("focusin", contain);
    doc.addEventListener("keydown", loopFocus, true);
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === "BODY") {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener("focusin", contain);
      doc.removeEventListener("keydown", loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /* @__PURE__ */ jsxs(React.Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ React.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /* @__PURE__ */ jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" ? FocusTrap.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: elementAcceptingRef,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: PropTypes.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: PropTypes.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: PropTypes.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: PropTypes.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: PropTypes.func,
  /**
   * If `true`, focus is locked.
   */
  open: PropTypes.bool.isRequired
} : void 0;
if (process.env.NODE_ENV !== "production") {
  FocusTrap["propTypes"] = exactProp(FocusTrap.propTypes);
}
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty("in") : false;
}
const noop = () => {
};
const manager = new ModalManager();
function useModal(parameters) {
  const {
    container,
    disableEscapeKeyDown = false,
    disableScrollLock = false,
    closeAfterTransition = false,
    onTransitionEnter,
    onTransitionExited,
    children,
    onClose,
    open,
    rootRef
  } = parameters;
  const modal = React.useRef({});
  const mountNodeRef = React.useRef(null);
  const modalRef = React.useRef(null);
  const handleRef = useForkRef(modalRef, rootRef);
  const [exited, setExited] = React.useState(!open);
  const hasTransition = getHasTransition(children);
  let ariaHiddenProp = true;
  if (parameters["aria-hidden"] === "false" || parameters["aria-hidden"] === false) {
    ariaHiddenProp = false;
  }
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = () => manager.isTopModal(getModal());
  const handlePortalRef = useEventCallback((node) => {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = React.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp]);
  React.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  React.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const createHandleKeyDown = (otherHandlers) => (event) => {
    otherHandlers.onKeyDown?.(event);
    if (event.key !== "Escape" || event.which === 229 || // Wait until IME is settled.
    !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  const createHandleBackdropClick = (otherHandlers) => (event) => {
    otherHandlers.onClick?.(event);
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);
    delete propsEventHandlers.onTransitionEnter;
    delete propsEventHandlers.onTransitionExited;
    const externalEventHandlers = {
      ...propsEventHandlers,
      ...otherHandlers
    };
    return {
      /*
       * Marking an element with the role presentation indicates to assistive technology
       * that this element should be ignored; it exists to support the web application and
       * is not meant for humans to interact with directly.
       * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
       */
      role: "presentation",
      ...externalEventHandlers,
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef
    };
  };
  const getBackdropProps = (otherHandlers = {}) => {
    const externalEventHandlers = otherHandlers;
    return {
      "aria-hidden": true,
      ...externalEventHandlers,
      onClick: createHandleBackdropClick(externalEventHandlers),
      open
    };
  };
  const getTransitionProps2 = () => {
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    return {
      onEnter: createChainedFunction(handleEnter, children?.props.onEnter ?? noop),
      onExited: createChainedFunction(handleExited, children?.props.onExited ?? noop)
    };
  };
  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}
function getModalUtilityClass(slot) {
  return generateUtilityClass("MuiModal", slot);
}
generateUtilityClasses("MuiModal", ["root", "hidden", "backdrop"]);
const useUtilityClasses$q = (ownerState) => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, getModalUtilityClass, classes);
};
const ModalRoot = styled("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.open && ownerState.exited && styles2.hidden];
  }
})(memoTheme(({
  theme
}) => ({
  position: "fixed",
  zIndex: (theme.vars || theme).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.open && ownerState.exited,
    style: {
      visibility: "hidden"
    }
  }]
})));
const ModalBackdrop = styled(Backdrop, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
});
const Modal = /* @__PURE__ */ React.forwardRef(function Modal2(inProps, ref) {
  const props = useDefaultProps({
    name: "MuiModal",
    props: inProps
  });
  const {
    BackdropComponent = ModalBackdrop,
    BackdropProps,
    classes: classesProp,
    className,
    closeAfterTransition = false,
    children,
    container,
    component,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onClose,
    onTransitionEnter,
    onTransitionExited,
    open,
    slotProps = {},
    slots = {},
    // eslint-disable-next-line react/prop-types
    theme,
    ...other
  } = props;
  const propsWithDefaults = {
    ...props,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  };
  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    portalRef,
    isTopModal,
    exited,
    hasTransition
  } = useModal({
    ...propsWithDefaults,
    rootRef: ref
  });
  const ownerState = {
    ...propsWithDefaults,
    exited
  };
  const classes = useUtilityClasses$q(ownerState);
  const childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    const {
      onEnter,
      onExited
    } = getTransitionProps2();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const externalForwardedProps = {
    slots: {
      root: components.Root,
      backdrop: components.Backdrop,
      ...slots
    },
    slotProps: {
      ...componentsProps,
      ...slotProps
    }
  };
  const [RootSlot, rootProps] = useSlot("root", {
    ref,
    elementType: ModalRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other,
      component
    },
    getSlotProps: getRootProps,
    ownerState,
    className: clsx(className, classes?.root, !ownerState.open && ownerState.exited && classes?.hidden)
  });
  const [BackdropSlot, backdropProps] = useSlot("backdrop", {
    ref: BackdropProps?.ref,
    elementType: BackdropComponent,
    externalForwardedProps,
    shouldForwardComponentProp: true,
    additionalProps: BackdropProps,
    getSlotProps: (otherHandlers) => {
      return getBackdropProps({
        ...otherHandlers,
        onClick: (event) => {
          if (otherHandlers?.onClick) {
            otherHandlers.onClick(event);
          }
        }
      });
    },
    className: clsx(BackdropProps?.className, classes?.backdrop),
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return /* @__PURE__ */ jsx(Portal, {
    ref: portalRef,
    container,
    disablePortal,
    children: /* @__PURE__ */ jsxs(RootSlot, {
      ...rootProps,
      children: [!hideBackdrop && BackdropComponent ? /* @__PURE__ */ jsx(BackdropSlot, {
        ...backdropProps
      }) : null, /* @__PURE__ */ jsx(FocusTrap, {
        disableEnforceFocus,
        disableAutoFocus,
        disableRestoreFocus,
        isEnabled: isTopModal,
        open,
        children: /* @__PURE__ */ React.cloneElement(children, childProps)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" ? Modal.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: PropTypes.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: PropTypes.object,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: PropTypes.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: PropTypes.shape({
    Backdrop: PropTypes.elementType,
    Root: PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: PropTypes.shape({
    backdrop: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: PropTypes.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: PropTypes.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: PropTypes.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: PropTypes.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: PropTypes.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: PropTypes.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: PropTypes.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: PropTypes.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: PropTypes.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: PropTypes.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: PropTypes.shape({
    backdrop: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    backdrop: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
function getDialogUtilityClass(slot) {
  return generateUtilityClass("MuiDialog", slot);
}
const dialogClasses = generateUtilityClasses("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const DialogContext = /* @__PURE__ */ React.createContext({});
if (process.env.NODE_ENV !== "production") {
  DialogContext.displayName = "DialogContext";
}
const DialogBackdrop = styled(Backdrop, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (props, styles2) => styles2.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
});
const useUtilityClasses$p = (ownerState) => {
  const {
    classes,
    scroll,
    maxWidth,
    fullWidth,
    fullScreen
  } = ownerState;
  const slots = {
    root: ["root"],
    container: ["container", `scroll${capitalize(scroll)}`],
    paper: ["paper", `paperScroll${capitalize(scroll)}`, `paperWidth${capitalize(String(maxWidth))}`, fullWidth && "paperFullWidth", fullScreen && "paperFullScreen"]
  };
  return composeClasses(slots, getDialogUtilityClass, classes);
};
const DialogRoot = styled(Modal, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
});
const DialogContainer = styled("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.container, styles2[`scroll${capitalize(ownerState.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
});
const DialogPaper = styled(Paper, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.paper, styles2[`scrollPaper${capitalize(ownerState.scroll)}`], styles2[`paperWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles2.paperFullWidth, ownerState.fullScreen && styles2.paperFullScreen];
  }
})(memoTheme(({
  theme
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: theme.breakpoints.unit === "px" ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)`,
      [`&.${dialogClasses.paperScrollBody}`]: {
        [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(theme.breakpoints.values).filter((maxWidth) => maxWidth !== "xs").map((maxWidth) => ({
    props: {
      maxWidth
    },
    style: {
      maxWidth: `${theme.breakpoints.values[maxWidth]}${theme.breakpoints.unit}`,
      [`&.${dialogClasses.paperScrollBody}`]: {
        [theme.breakpoints.down(theme.breakpoints.values[maxWidth] + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState
    }) => ownerState.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${dialogClasses.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
})));
const Dialog = /* @__PURE__ */ React.forwardRef(function Dialog2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialog"
  });
  const theme = useTheme();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledbyProp,
    "aria-modal": ariaModal = true,
    BackdropComponent,
    BackdropProps,
    children,
    className,
    disableEscapeKeyDown = false,
    fullScreen = false,
    fullWidth = false,
    maxWidth = "sm",
    onClick,
    onClose,
    open,
    PaperComponent = Paper,
    PaperProps = {},
    scroll = "paper",
    slots = {},
    slotProps = {},
    TransitionComponent = Fade,
    transitionDuration = defaultTransitionDuration,
    TransitionProps,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll
  };
  const classes = useUtilityClasses$p(ownerState);
  const backdropClick = React.useRef();
  const handleMouseDown = (event) => {
    backdropClick.current = event.target === event.currentTarget;
  };
  const handleBackdropClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (!backdropClick.current) {
      return;
    }
    backdropClick.current = null;
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const ariaLabelledby = useId(ariaLabelledbyProp);
  const dialogContextValue = React.useMemo(() => {
    return {
      titleId: ariaLabelledby
    };
  }, [ariaLabelledby]);
  const backwardCompatibleSlots = {
    transition: TransitionComponent,
    ...slots
  };
  const backwardCompatibleSlotProps = {
    transition: TransitionProps,
    paper: PaperProps,
    backdrop: BackdropProps,
    ...slotProps
  };
  const externalForwardedProps = {
    slots: backwardCompatibleSlots,
    slotProps: backwardCompatibleSlotProps
  };
  const [RootSlot, rootSlotProps] = useSlot("root", {
    elementType: DialogRoot,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState,
    className: clsx(classes.root, className),
    ref
  });
  const [BackdropSlot, backdropSlotProps] = useSlot("backdrop", {
    elementType: DialogBackdrop,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState
  });
  const [PaperSlot, paperSlotProps] = useSlot("paper", {
    elementType: DialogPaper,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    ownerState,
    className: clsx(classes.paper, PaperProps.className)
  });
  const [ContainerSlot, containerSlotProps] = useSlot("container", {
    elementType: DialogContainer,
    externalForwardedProps,
    ownerState,
    className: classes.container
  });
  const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
    elementType: Fade,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      appear: true,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ jsx(RootSlot, {
    closeAfterTransition: true,
    slots: {
      backdrop: BackdropSlot
    },
    slotProps: {
      backdrop: {
        transitionDuration,
        as: BackdropComponent,
        ...backdropSlotProps
      }
    },
    disableEscapeKeyDown,
    onClose,
    open,
    onClick: handleBackdropClick,
    ...rootSlotProps,
    ...other,
    children: /* @__PURE__ */ jsx(TransitionSlot, {
      ...transitionSlotProps,
      children: /* @__PURE__ */ jsx(ContainerSlot, {
        onMouseDown: handleMouseDown,
        ...containerSlotProps,
        children: /* @__PURE__ */ jsx(PaperSlot, {
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby,
          "aria-modal": ariaModal,
          ...paperSlotProps,
          children: /* @__PURE__ */ jsx(DialogContext.Provider, {
            value: dialogContextValue,
            children
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? Dialog.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": PropTypes.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": PropTypes.string,
  /**
   * Informs assistive technologies that the element is modal.
   * It's added on the element with role="dialog".
   * @default true
   */
  "aria-modal": PropTypes.oneOfType([PropTypes.oneOf(["false", "true"]), PropTypes.bool]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: PropTypes.elementType,
  /**
   * @ignore
   */
  BackdropProps: PropTypes.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: PropTypes.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: PropTypes.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: PropTypes.oneOfType([PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", false]), PropTypes.string]),
  /**
   * @ignore
   */
  onClick: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: PropTypes.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: PropTypes.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   * @deprecated Use `slotProps.paper` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperProps: PropTypes.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: PropTypes.oneOf(["body", "paper"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    backdrop: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    container: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    paper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    transition: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    backdrop: PropTypes.elementType,
    container: PropTypes.elementType,
    paper: PropTypes.elementType,
    root: PropTypes.elementType,
    transition: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: PropTypes.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: PropTypes.object
} : void 0;
function getDialogActionsUtilityClass(slot) {
  return generateUtilityClass("MuiDialogActions", slot);
}
generateUtilityClasses("MuiDialogActions", ["root", "spacing"]);
const useUtilityClasses$o = (ownerState) => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ["root", !disableSpacing && "spacing"]
  };
  return composeClasses(slots, getDialogActionsUtilityClass, classes);
};
const DialogActionsRoot = styled("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.disableSpacing && styles2.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
});
const DialogActions = /* @__PURE__ */ React.forwardRef(function DialogActions2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialogActions"
  });
  const {
    className,
    disableSpacing = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableSpacing
  };
  const classes = useUtilityClasses$o(ownerState);
  return /* @__PURE__ */ jsx(DialogActionsRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? DialogActions.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
function getDialogContentUtilityClass(slot) {
  return generateUtilityClass("MuiDialogContent", slot);
}
generateUtilityClasses("MuiDialogContent", ["root", "dividers"]);
function getDialogTitleUtilityClass(slot) {
  return generateUtilityClass("MuiDialogTitle", slot);
}
const dialogTitleClasses = generateUtilityClasses("MuiDialogTitle", ["root"]);
const useUtilityClasses$n = (ownerState) => {
  const {
    classes,
    dividers
  } = ownerState;
  const slots = {
    root: ["root", dividers && "dividers"]
  };
  return composeClasses(slots, getDialogContentUtilityClass, classes);
};
const DialogContentRoot = styled("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.dividers && styles2.dividers];
  }
})(memoTheme(({
  theme
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.dividers,
    style: {
      [`.${dialogTitleClasses.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
})));
const DialogContent = /* @__PURE__ */ React.forwardRef(function DialogContent2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialogContent"
  });
  const {
    className,
    dividers = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    dividers
  };
  const classes = useUtilityClasses$n(ownerState);
  return /* @__PURE__ */ jsx(DialogContentRoot, {
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? DialogContent.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
const useUtilityClasses$m = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDialogTitleUtilityClass, classes);
};
const DialogTitleRoot = styled(Typography, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
});
const DialogTitle = /* @__PURE__ */ React.forwardRef(function DialogTitle2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiDialogTitle"
  });
  const {
    className,
    id: idProp,
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$m(ownerState);
  const {
    titleId = idProp
  } = React.useContext(DialogContext);
  return /* @__PURE__ */ jsx(DialogTitleRoot, {
    component: "h2",
    className: clsx(classes.root, className),
    ownerState,
    ref,
    variant: "h6",
    id: idProp ?? titleId,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? DialogTitle.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  id: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
const useUtilityClasses$l = (ownerState) => {
  const {
    classes,
    disableUnderline,
    startAdornment,
    endAdornment,
    size,
    hiddenLabel,
    multiline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline", startAdornment && "adornedStart", endAdornment && "adornedEnd", size === "small" && `size${capitalize(size)}`, hiddenLabel && "hiddenLabel", multiline && "multiline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
  return {
    ...classes,
    // forward classes to the InputBase
    ...composedClasses
  };
};
const FilledInputRoot = styled(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
  }
})(memoTheme(({
  theme
}) => {
  const light2 = theme.palette.mode === "light";
  const bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor = light2 ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light2 ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light2 ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    [`&.${filledInputClasses.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    [`&.${filledInputClasses.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    },
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${filledInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${filledInputClasses.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${theme.vars ? theme.alpha(theme.vars.palette.common.onBackground, theme.vars.opacity.inputUnderline) : bottomLineColor}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${filledInputClasses.disabled}, .${filledInputClasses.error}):before`]: {
          borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
        },
        [`&.${filledInputClasses.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        disableUnderline: false,
        color
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(theme.vars || theme).palette[color]?.main}`
        }
      }
    })), {
      props: ({
        ownerState
      }) => ownerState.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState,
        size
      }) => ownerState.multiline && size === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline && ownerState.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline && ownerState.hiddenLabel && ownerState.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
}));
const FilledInputInput = styled(InputBaseInput, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(memoTheme(({
  theme
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!theme.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
      caretColor: theme.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...theme.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [theme.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.hiddenLabel && ownerState.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
})));
const FilledInput = /* @__PURE__ */ React.forwardRef(function FilledInput2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFilledInput"
  });
  const {
    disableUnderline = false,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    hiddenLabel,
    // declare here to prevent spreading to DOM
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text",
    ...other
  } = props;
  const ownerState = {
    ...props,
    disableUnderline,
    fullWidth,
    inputComponent,
    multiline,
    type
  };
  const classes = useUtilityClasses$l(props);
  const filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  };
  const componentsProps = slotProps ?? componentsPropsProp ? deepmerge(filledInputComponentsProps, slotProps ?? componentsPropsProp) : filledInputComponentsProps;
  const RootSlot = slots.root ?? components.Root ?? FilledInputRoot;
  const InputSlot = slots.input ?? components.Input ?? FilledInputInput;
  return /* @__PURE__ */ jsx(InputBase, {
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type,
    ...other,
    classes
  });
});
process.env.NODE_ENV !== "production" ? FilledInput.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["primary", "secondary"]), PropTypes.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: PropTypes.shape({
    Input: PropTypes.elementType,
    Root: PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: PropTypes.shape({
    input: PropTypes.object,
    root: PropTypes.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the input will not have an underline.
   * @default false
   */
  disableUnderline: PropTypes.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: PropTypes.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: PropTypes.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: PropTypes.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: PropTypes.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes.shape({
    input: PropTypes.object,
    root: PropTypes.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: PropTypes.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes.any
} : void 0;
FilledInput.muiName = "Input";
function getFormControlUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
generateUtilityClasses("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const useUtilityClasses$k = (ownerState) => {
  const {
    classes,
    margin,
    fullWidth
  } = ownerState;
  const slots = {
    root: ["root", margin !== "none" && `margin${capitalize(margin)}`, fullWidth && "fullWidth"]
  };
  return composeClasses(slots, getFormControlUtilityClasses, classes);
};
const FormControlRoot = styled("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`margin${capitalize(ownerState.margin)}`], ownerState.fullWidth && styles2.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: true
    },
    style: {
      width: "100%"
    }
  }]
});
const FormControl = /* @__PURE__ */ React.forwardRef(function FormControl2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormControl"
  });
  const {
    children,
    className,
    color = "primary",
    component = "div",
    disabled = false,
    error = false,
    focused: visuallyFocused,
    fullWidth = false,
    hiddenLabel = false,
    margin = "none",
    required = false,
    size = "medium",
    variant = "outlined",
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    component,
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    margin,
    required,
    size,
    variant
  };
  const classes = useUtilityClasses$k(ownerState);
  const [adornedStart, setAdornedStart] = React.useState(() => {
    let initialAdornedStart = false;
    if (children) {
      React.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        const input = isMuiElement(child, ["Select"]) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  });
  const [filled, setFilled] = React.useState(() => {
    let initialFilled = false;
    if (children) {
      React.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        if (isFilled(child.props, true) || isFilled(child.props.inputProps, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  });
  const [focusedState, setFocused] = React.useState(false);
  if (disabled && focusedState) {
    setFocused(false);
  }
  const focused = visuallyFocused !== void 0 && !disabled ? visuallyFocused : focusedState;
  let registerEffect;
  const registeredInput = React.useRef(false);
  if (process.env.NODE_ENV !== "production") {
    registerEffect = () => {
      if (registeredInput.current) {
        console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join("\n"));
      }
      registeredInput.current = true;
      return () => {
        registeredInput.current = false;
      };
    };
  }
  const onFilled = React.useCallback(() => {
    setFilled(true);
  }, []);
  const onEmpty = React.useCallback(() => {
    setFilled(false);
  }, []);
  const childContext = React.useMemo(() => {
    return {
      adornedStart,
      setAdornedStart,
      color,
      disabled,
      error,
      filled,
      focused,
      fullWidth,
      hiddenLabel,
      size,
      onBlur: () => {
        setFocused(false);
      },
      onFocus: () => {
        setFocused(true);
      },
      onEmpty,
      onFilled,
      registerEffect,
      required,
      variant
    };
  }, [adornedStart, color, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, onEmpty, onFilled, required, size, variant]);
  return /* @__PURE__ */ jsx(FormControlContext.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsx(FormControlRoot, {
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref,
      ...other,
      children
    })
  });
});
process.env.NODE_ENV !== "production" ? FormControl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: PropTypes.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: PropTypes.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: PropTypes.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: PropTypes.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: PropTypes.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes.oneOfType([PropTypes.oneOf(["medium", "small"]), PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes.oneOf(["filled", "outlined", "standard"])
} : void 0;
function getFormHelperTextUtilityClasses(slot) {
  return generateUtilityClass("MuiFormHelperText", slot);
}
const formHelperTextClasses = generateUtilityClasses("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var _span$2;
const useUtilityClasses$j = (ownerState) => {
  const {
    classes,
    contained,
    size,
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", size && `size${capitalize(size)}`, contained && "contained", focused && "focused", filled && "filled", required && "required"]
  };
  return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
};
const FormHelperTextRoot = styled("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.size && styles2[`size${capitalize(ownerState.size)}`], ownerState.contained && styles2.contained, ownerState.filled && styles2.filled];
  }
})(memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formHelperTextClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${formHelperTextClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
})));
const FormHelperText = /* @__PURE__ */ React.forwardRef(function FormHelperText2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormHelperText"
  });
  const {
    children,
    className,
    component = "p",
    disabled,
    error,
    filled,
    focused,
    margin,
    required,
    variant,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  });
  const ownerState = {
    ...props,
    component,
    contained: fcs.variant === "filled" || fcs.variant === "outlined",
    variant: fcs.variant,
    size: fcs.size,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  };
  delete ownerState.ownerState;
  const classes = useUtilityClasses$j(ownerState);
  return /* @__PURE__ */ jsx(FormHelperTextRoot, {
    as: component,
    className: clsx(classes.root, className),
    ref,
    ...other,
    ownerState,
    children: children === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      _span$2 || (_span$2 = /* @__PURE__ */ jsx("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "​"
      }))
    ) : children
  });
});
process.env.NODE_ENV !== "production" ? FormHelperText.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: PropTypes.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: PropTypes.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOfType([PropTypes.oneOf(["filled", "outlined", "standard"]), PropTypes.string])
} : void 0;
function getFormLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormLabel", slot);
}
const formLabelClasses = generateUtilityClasses("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
const useUtilityClasses$i = (ownerState) => {
  const {
    classes,
    color,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormLabelUtilityClasses, classes);
};
const FormLabelRoot = styled("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color === "secondary" && styles2.colorSecondary, ownerState.filled && styles2.filled];
  }
})(memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${formLabelClasses.focused}`]: {
        color: (theme.vars || theme).palette[color].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${formLabelClasses.disabled}`]: {
        color: (theme.vars || theme).palette.text.disabled
      },
      [`&.${formLabelClasses.error}`]: {
        color: (theme.vars || theme).palette.error.main
      }
    }
  }]
})));
const AsteriskComponent = styled("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(memoTheme(({
  theme
}) => ({
  [`&.${formLabelClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})));
const FormLabel = /* @__PURE__ */ React.forwardRef(function FormLabel2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiFormLabel"
  });
  const {
    children,
    className,
    color,
    component = "label",
    disabled,
    error,
    filled,
    focused,
    required,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  });
  const ownerState = {
    ...props,
    color: fcs.color || "primary",
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  };
  const classes = useUtilityClasses$i(ownerState);
  return /* @__PURE__ */ jsxs(FormLabelRoot, {
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref,
    ...other,
    children: [children, fcs.required && /* @__PURE__ */ jsxs(AsteriskComponent, {
      ownerState,
      "aria-hidden": true,
      className: classes.asterisk,
      children: [" ", "*"]
    })]
  });
});
process.env.NODE_ENV !== "production" ? FormLabel.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: PropTypes.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: PropTypes.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
const styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
const isWebKit154 = typeof navigator !== "undefined" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
const Grow = /* @__PURE__ */ React.forwardRef(function Grow2(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing: easing2,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition,
    ...other
  } = props;
  const timer = useTimeout();
  const autoTimeout = React.useRef();
  const theme = useTheme();
  const nodeRef = React.useRef(null);
  const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing: easing2
    }, {
      mode: "enter"
    });
    let duration2;
    if (timeout === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration2 : duration2 * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(",");
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing: easing2
    }, {
      mode: "exit"
    });
    let duration2;
    if (timeout === "auto") {
      duration2 = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration2 : duration2 * 0.666,
      delay: isWebKit154 ? delay : delay || duration2 * 0.333,
      easing: transitionTimingFunction
    })].join(",");
    node.style.opacity = 0;
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (timeout === "auto") {
      timer.start(autoTimeout.current || 0, next);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return /* @__PURE__ */ jsx(TransitionComponent, {
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === "auto" ? null : timeout,
    ...other,
    children: (state, {
      ownerState,
      ...restChildProps
    }) => {
      return /* @__PURE__ */ React.cloneElement(children, {
        style: {
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === "exited" && !inProp ? "hidden" : void 0,
          ...styles[state],
          ...style,
          ...children.props.style
        },
        ref: handleRef,
        ...restChildProps
      });
    }
  });
});
process.env.NODE_ENV !== "production" ? Grow.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: PropTypes.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: PropTypes.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: PropTypes.oneOfType([PropTypes.shape({
    enter: PropTypes.string,
    exit: PropTypes.string
  }), PropTypes.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes.func,
  /**
   * @ignore
   */
  onEntered: PropTypes.func,
  /**
   * @ignore
   */
  onEntering: PropTypes.func,
  /**
   * @ignore
   */
  onExit: PropTypes.func,
  /**
   * @ignore
   */
  onExited: PropTypes.func,
  /**
   * @ignore
   */
  onExiting: PropTypes.func,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: PropTypes.oneOfType([PropTypes.oneOf(["auto"]), PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
} : void 0;
if (Grow) {
  Grow.muiSupportAuto = true;
}
const useUtilityClasses$h = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
  return {
    ...classes,
    // forward classes to the InputBase
    ...composedClasses
  };
};
const InputRoot = styled(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
  }
})(memoTheme(({
  theme
}) => {
  const light2 = theme.palette.mode === "light";
  let bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  if (theme.vars) {
    bottomLineColor = theme.alpha(theme.vars.palette.common.onBackground, theme.vars.opacity.inputUnderline);
  }
  return {
    position: "relative",
    variants: [{
      props: ({
        ownerState
      }) => ownerState.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState
      }) => !ownerState.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${inputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${inputClasses.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${bottomLineColor}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: theme.transitions.create("border-bottom-color", {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${inputClasses.disabled}, .${inputClasses.error}):before`]: {
          borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${bottomLineColor}`
          }
        },
        [`&.${inputClasses.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color,
        disableUnderline: false
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(theme.vars || theme).palette[color].main}`
        }
      }
    }))]
  };
}));
const InputInput = styled(InputBaseInput, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})({});
const Input = /* @__PURE__ */ React.forwardRef(function Input2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiInput"
  });
  const {
    disableUnderline = false,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text",
    ...other
  } = props;
  const classes = useUtilityClasses$h(props);
  const ownerState = {
    disableUnderline
  };
  const inputComponentsProps = {
    root: {
      ownerState
    }
  };
  const componentsProps = slotProps ?? componentsPropsProp ? deepmerge(slotProps ?? componentsPropsProp, inputComponentsProps) : inputComponentsProps;
  const RootSlot = slots.root ?? components.Root ?? InputRoot;
  const InputSlot = slots.input ?? components.Input ?? InputInput;
  return /* @__PURE__ */ jsx(InputBase, {
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type,
    ...other,
    classes
  });
});
process.env.NODE_ENV !== "production" ? Input.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["primary", "secondary"]), PropTypes.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: PropTypes.shape({
    Input: PropTypes.elementType,
    Root: PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: PropTypes.shape({
    input: PropTypes.object,
    root: PropTypes.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the `input` will not have an underline.
   * @default false
   */
  disableUnderline: PropTypes.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: PropTypes.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: PropTypes.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: PropTypes.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes.shape({
    input: PropTypes.object,
    root: PropTypes.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: PropTypes.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes.any
} : void 0;
Input.muiName = "Input";
function getInputLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiInputLabel", slot);
}
generateUtilityClasses("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const useUtilityClasses$g = (ownerState) => {
  const {
    classes,
    formControl,
    size,
    shrink,
    disableAnimation,
    variant,
    required
  } = ownerState;
  const slots = {
    root: ["root", formControl && "formControl", !disableAnimation && "animated", shrink && "shrink", size && size !== "medium" && `size${capitalize(size)}`, variant],
    asterisk: [required && "asterisk"]
  };
  const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
  return {
    ...classes,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...composedClasses
  };
};
const InputLabelRoot = styled(FormLabel, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formLabelClasses.asterisk}`]: styles2.asterisk
    }, styles2.root, ownerState.formControl && styles2.formControl, ownerState.size === "small" && styles2.sizeSmall, ownerState.shrink && styles2.shrink, !ownerState.disableAnimation && styles2.animated, ownerState.focused && styles2.focused, styles2[ownerState.variant]];
  }
})(memoTheme(({
  theme
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disableAnimation,
    style: {
      transition: theme.transitions.create(["color", "transform", "max-width"], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant,
      ownerState
    }) => variant === "filled" && ownerState.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant,
      ownerState,
      size
    }) => variant === "filled" && ownerState.shrink && size === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant,
      ownerState
    }) => variant === "outlined" && ownerState.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
})));
const InputLabel = /* @__PURE__ */ React.forwardRef(function InputLabel2(inProps, ref) {
  const props = useDefaultProps({
    name: "MuiInputLabel",
    props: inProps
  });
  const {
    disableAnimation = false,
    margin,
    shrink: shrinkProp,
    variant,
    className,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  let shrink = shrinkProp;
  if (typeof shrink === "undefined" && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["size", "variant", "required", "focused"]
  });
  const ownerState = {
    ...props,
    disableAnimation,
    formControl: muiFormControl,
    shrink,
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required,
    focused: fcs.focused
  };
  const classes = useUtilityClasses$g(ownerState);
  return /* @__PURE__ */ jsx(InputLabelRoot, {
    "data-shrink": shrink,
    ref,
    className: clsx(classes.root, className),
    ...other,
    ownerState,
    classes
  });
});
process.env.NODE_ENV !== "production" ? InputLabel.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), PropTypes.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: PropTypes.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: PropTypes.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: PropTypes.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: PropTypes.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes.oneOfType([PropTypes.oneOf(["medium", "small"]), PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["filled", "outlined", "standard"])
} : void 0;
const ListContext = /* @__PURE__ */ React.createContext({});
if (process.env.NODE_ENV !== "production") {
  ListContext.displayName = "ListContext";
}
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
generateUtilityClasses("MuiList", ["root", "padding", "dense", "subheader"]);
const useUtilityClasses$f = (ownerState) => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ["root", !disablePadding && "padding", dense && "dense", subheader && "subheader"]
  };
  return composeClasses(slots, getListUtilityClass, classes);
};
const ListRoot = styled("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.disablePadding && styles2.padding, ownerState.dense && styles2.dense, ownerState.subheader && styles2.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.subheader,
    style: {
      paddingTop: 0
    }
  }]
});
const List = /* @__PURE__ */ React.forwardRef(function List2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiList"
  });
  const {
    children,
    className,
    component = "ul",
    dense = false,
    disablePadding = false,
    subheader,
    ...other
  } = props;
  const context = React.useMemo(() => ({
    dense
  }), [dense]);
  const ownerState = {
    ...props,
    component,
    dense,
    disablePadding
  };
  const classes = useUtilityClasses$f(ownerState);
  return /* @__PURE__ */ jsx(ListContext.Provider, {
    value: context,
    children: /* @__PURE__ */ jsxs(ListRoot, {
      as: component,
      className: clsx(classes.root, className),
      ref,
      ownerState,
      ...other,
      children: [subheader, children]
    })
  });
});
process.env.NODE_ENV !== "production" ? List.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: PropTypes.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: PropTypes.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.startsWith(textCriteria.keys.join(""));
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}
const MenuList = /* @__PURE__ */ React.forwardRef(function MenuList2(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children,
    className,
    disabledItemsFocusable = false,
    disableListWrap = false,
    onKeyDown,
    variant = "selectedMenu",
    ...other
  } = props;
  const listRef = React.useRef(null);
  const textCriteriaRef = React.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  React.useImperativeHandle(actions, () => ({
    adjustStyleForScrollbar: (containerElement, {
      direction
    }) => {
      const noExplicitWidth = !listRef.current.style.width;
      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        const scrollbarSize = `${getScrollbarSize(ownerWindow(containerElement))}px`;
        listRef.current.style[direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
        listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
      }
      return listRef.current;
    }
  }), []);
  const handleKeyDown = (event) => {
    const list = listRef.current;
    const key = event.key;
    const isModifierKeyPressed = event.ctrlKey || event.metaKey || event.altKey;
    if (isModifierKeyPressed) {
      if (onKeyDown) {
        onKeyDown(event);
      }
      return;
    }
    const currentFocus = ownerDocument(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleRef = useForkRef(listRef, ref);
  let activeItemIndex = -1;
  React.Children.forEach(children, (child, index) => {
    if (!/* @__PURE__ */ React.isValidElement(child)) {
      if (activeItemIndex === index) {
        activeItemIndex += 1;
        if (activeItemIndex >= children.length) {
          activeItemIndex = -1;
        }
      }
      return;
    }
    if (process.env.NODE_ENV !== "production") {
      if (isFragment(child)) {
        console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
    if (activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
      activeItemIndex += 1;
      if (activeItemIndex >= children.length) {
        activeItemIndex = -1;
      }
    }
  });
  const items = React.Children.map(children, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return /* @__PURE__ */ React.cloneElement(child, newChildProps);
    }
    return child;
  });
  return /* @__PURE__ */ jsx(List, {
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1,
    ...other,
    children: items
  });
});
process.env.NODE_ENV !== "production" ? MenuList.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: PropTypes.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: PropTypes.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: PropTypes.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: PropTypes.bool,
  /**
   * @ignore
   */
  onKeyDown: PropTypes.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: PropTypes.oneOf(["menu", "selectedMenu"])
} : void 0;
function getPopoverUtilityClass(slot) {
  return generateUtilityClass("MuiPopover", slot);
}
generateUtilityClasses("MuiPopover", ["root", "paper"]);
function getOffsetTop(rect, vertical) {
  let offset = 0;
  if (typeof vertical === "number") {
    offset = vertical;
  } else if (vertical === "center") {
    offset = rect.height / 2;
  } else if (vertical === "bottom") {
    offset = rect.height;
  }
  return offset;
}
function getOffsetLeft(rect, horizontal) {
  let offset = 0;
  if (typeof horizontal === "number") {
    offset = horizontal;
  } else if (horizontal === "center") {
    offset = rect.width / 2;
  } else if (horizontal === "right") {
    offset = rect.width;
  }
  return offset;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map((n) => typeof n === "number" ? `${n}px` : n).join(" ");
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
const useUtilityClasses$e = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPopoverUtilityClass, classes);
};
const PopoverRoot = styled(Modal, {
  name: "MuiPopover",
  slot: "Root"
})({});
const PopoverPaper = styled(Paper, {
  name: "MuiPopover",
  slot: "Paper"
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Popover = /* @__PURE__ */ React.forwardRef(function Popover2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiPopover"
  });
  const {
    action,
    anchorEl,
    anchorOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition,
    anchorReference = "anchorEl",
    children,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    open,
    PaperProps: PaperPropsProp = {},
    // TODO: remove in v7
    slots = {},
    slotProps = {},
    transformOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent,
    // TODO: remove in v7
    transitionDuration: transitionDurationProp = "auto",
    TransitionProps = {},
    // TODO: remove in v7
    disableScrollLock = false,
    ...other
  } = props;
  const paperRef = React.useRef();
  const ownerState = {
    ...props,
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  };
  const classes = useUtilityClasses$e(ownerState);
  const getAnchorOffset = React.useCallback(() => {
    if (anchorReference === "anchorPosition") {
      if (process.env.NODE_ENV !== "production") {
        if (!anchorPosition) {
          console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.');
        }
      }
      return anchorPosition;
    }
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const box = anchorElement.getBoundingClientRect();
      if (process.env.NODE_ENV !== "test" && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
        console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
      }
    }
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
  const getTransformOrigin = React.useCallback((elemRect) => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = React.useCallback((element) => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    const elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    const anchorOffset = getAnchorOffset();
    let top = anchorOffset.top - elemTransformOrigin.vertical;
    let left = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom = top + elemRect.height;
    const right = left + elemRect.width;
    const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (marginThreshold !== null && top < marginThreshold) {
      const diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (marginThreshold !== null && bottom > heightThreshold) {
      const diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }
    if (process.env.NODE_ENV !== "production") {
      if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
        console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${elemRect.height - heightThreshold}px).`, "Please consider adding a `max-height` to improve the user-experience."].join("\n"));
      }
    }
    if (marginThreshold !== null && left < marginThreshold) {
      const diff = left - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }
    return {
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
  const [isPositioned, setIsPositioned] = React.useState(open);
  const setPositioningStyles = React.useCallback(() => {
    const element = paperRef.current;
    if (!element) {
      return;
    }
    const positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.setProperty("top", positioning.top);
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
    setIsPositioned(true);
  }, [getPositioningStyle]);
  React.useEffect(() => {
    if (disableScrollLock) {
      window.addEventListener("scroll", setPositioningStyles);
    }
    return () => window.removeEventListener("scroll", setPositioningStyles);
  }, [anchorEl, disableScrollLock, setPositioningStyles]);
  const handleEntering = () => {
    setPositioningStyles();
  };
  const handleExited = () => {
    setIsPositioned(false);
  };
  React.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  React.useImperativeHandle(action, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  React.useEffect(() => {
    if (!open) {
      return void 0;
    }
    const handleResize = debounce(() => {
      setPositioningStyles();
    });
    const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  const externalForwardedProps = {
    slots: {
      transition: TransitionComponent,
      ...slots
    },
    slotProps: {
      transition: TransitionProps,
      paper: PaperPropsProp,
      ...slotProps
    }
  };
  const [TransitionSlot, transitionSlotProps] = useSlot("transition", {
    elementType: Grow,
    externalForwardedProps,
    ownerState,
    getSlotProps: (handlers) => ({
      ...handlers,
      onEntering: (element, isAppearing) => {
        handlers.onEntering?.(element, isAppearing);
        handleEntering();
      },
      onExited: (element) => {
        handlers.onExited?.(element);
        handleExited();
      }
    }),
    additionalProps: {
      appear: true,
      in: open
    }
  });
  if (transitionDurationProp === "auto" && !TransitionSlot.muiSupportAuto) {
    transitionDuration = void 0;
  }
  const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : void 0);
  const [RootSlot, {
    slots: rootSlotsProp,
    slotProps: rootSlotPropsProp,
    ...rootProps
  }] = useSlot("root", {
    ref,
    elementType: PopoverRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    shouldForwardComponentProp: true,
    additionalProps: {
      slots: {
        backdrop: slots.backdrop
      },
      slotProps: {
        backdrop: mergeSlotProps(typeof slotProps.backdrop === "function" ? slotProps.backdrop(ownerState) : slotProps.backdrop, {
          invisible: true
        })
      },
      container,
      open
    },
    ownerState,
    className: clsx(classes.root, className)
  });
  const [PaperSlot, paperProps] = useSlot("paper", {
    ref: paperRef,
    className: classes.paper,
    elementType: PopoverPaper,
    externalForwardedProps,
    shouldForwardComponentProp: true,
    additionalProps: {
      elevation,
      style: isPositioned ? void 0 : {
        opacity: 0
      }
    },
    ownerState
  });
  return /* @__PURE__ */ jsx(RootSlot, {
    ...rootProps,
    ...!isHostComponent(RootSlot) && {
      slots: rootSlotsProp,
      slotProps: rootSlotPropsProp,
      disableScrollLock
    },
    children: /* @__PURE__ */ jsx(TransitionSlot, {
      ...transitionSlotProps,
      timeout: transitionDuration,
      children: /* @__PURE__ */ jsx(PaperSlot, {
        ...paperProps,
        children
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? Popover.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: refType,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: chainPropTypes(PropTypes.oneOfType([HTMLElementType, PropTypes.func]), (props) => {
    if (props.open && (!props.anchorReference || props.anchorReference === "anchorEl")) {
      const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join("\n"));
        }
      } else {
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${resolvedAnchorEl}\` instead.`].join("\n"));
      }
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOfType([PropTypes.oneOf(["center", "left", "right"]), PropTypes.number]).isRequired,
    vertical: PropTypes.oneOfType([PropTypes.oneOf(["bottom", "center", "top"]), PropTypes.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: PropTypes.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: PropTypes.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  BackdropProps: PropTypes.object,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: PropTypes.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: integerPropType,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: PropTypes.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: PropTypes.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overridden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: PropTypes.shape({
    component: elementTypeAcceptingRef
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    backdrop: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    paper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    transition: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    backdrop: PropTypes.elementType,
    paper: PropTypes.elementType,
    root: PropTypes.elementType,
    transition: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOfType([PropTypes.oneOf(["center", "left", "right"]), PropTypes.number]).isRequired,
    vertical: PropTypes.oneOfType([PropTypes.oneOf(["bottom", "center", "top"]), PropTypes.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated use the `slots.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: PropTypes.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.oneOf(["auto"]), PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: PropTypes.object
} : void 0;
function getMenuUtilityClass(slot) {
  return generateUtilityClass("MuiMenu", slot);
}
generateUtilityClasses("MuiMenu", ["root", "paper", "list"]);
const RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
const LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
const useUtilityClasses$d = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  };
  return composeClasses(slots, getMenuUtilityClass, classes);
};
const MenuRoot = styled(Popover, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenu",
  slot: "Root"
})({});
const MenuPaper = styled(PopoverPaper, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
});
const MenuMenuList = styled(MenuList, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Menu = /* @__PURE__ */ React.forwardRef(function Menu2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiMenu"
  });
  const {
    autoFocus = true,
    children,
    className,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    open,
    PaperProps = {},
    PopoverClasses,
    transitionDuration = "auto",
    TransitionProps: {
      onEntering,
      ...TransitionProps
    } = {},
    variant = "selectedMenu",
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const isRtl = useRtl();
  const ownerState = {
    ...props,
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  };
  const classes = useUtilityClasses$d(ownerState);
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = React.useRef(null);
  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, {
        direction: isRtl ? "rtl" : "ltr"
      });
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  let activeItemIndex = -1;
  React.Children.map(children, (child, index) => {
    if (!/* @__PURE__ */ React.isValidElement(child)) {
      return;
    }
    if (process.env.NODE_ENV !== "production") {
      if (isFragment(child)) {
        console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const externalForwardedProps = {
    slots,
    slotProps: {
      list: MenuListProps,
      transition: TransitionProps,
      paper: PaperProps,
      ...slotProps
    }
  };
  const rootSlotProps = useSlotProps({
    elementType: slots.root,
    externalSlotProps: slotProps.root,
    ownerState,
    className: [classes.root, className]
  });
  const [PaperSlot, paperSlotProps] = useSlot("paper", {
    className: classes.paper,
    elementType: MenuPaper,
    externalForwardedProps,
    shouldForwardComponentProp: true,
    ownerState
  });
  const [ListSlot, listSlotProps] = useSlot("list", {
    className: clsx(classes.list, MenuListProps.className),
    elementType: MenuMenuList,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    getSlotProps: (handlers) => ({
      ...handlers,
      onKeyDown: (event) => {
        handleListKeyDown(event);
        handlers.onKeyDown?.(event);
      }
    }),
    ownerState
  });
  const resolvedTransitionProps = typeof externalForwardedProps.slotProps.transition === "function" ? externalForwardedProps.slotProps.transition(ownerState) : externalForwardedProps.slotProps.transition;
  return /* @__PURE__ */ jsx(MenuRoot, {
    onClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: isRtl ? "right" : "left"
    },
    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
    slots: {
      root: slots.root,
      paper: PaperSlot,
      backdrop: slots.backdrop,
      ...slots.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: slots.transition
      }
    },
    slotProps: {
      root: rootSlotProps,
      paper: paperSlotProps,
      backdrop: typeof slotProps.backdrop === "function" ? slotProps.backdrop(ownerState) : slotProps.backdrop,
      transition: {
        ...resolvedTransitionProps,
        onEntering: (...args) => {
          handleEntering(...args);
          resolvedTransitionProps?.onEntering?.(...args);
        }
      }
    },
    open,
    ref,
    transitionDuration,
    ownerState,
    ...other,
    classes: PopoverClasses,
    children: /* @__PURE__ */ jsx(ListSlot, {
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem,
      variant,
      ...listSlotProps,
      children
    })
  });
});
process.env.NODE_ENV !== "production" ? Menu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: PropTypes.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: PropTypes.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: PropTypes.bool,
  /**
   * Props applied to the [`MenuList`](https://mui.com/material-ui/api/menu-list/) element.
   * @deprecated use the `slotProps.list` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  MenuListProps: PropTypes.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: PropTypes.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: PropTypes.object,
  /**
   * `classes` prop applied to the [`Popover`](https://mui.com/material-ui/api/popover/) element.
   */
  PopoverClasses: PropTypes.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    backdrop: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    list: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    paper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    transition: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    backdrop: PropTypes.elementType,
    list: PropTypes.elementType,
    paper: PropTypes.elementType,
    root: PropTypes.elementType,
    transition: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.oneOf(["auto"]), PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: PropTypes.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: PropTypes.oneOf(["menu", "selectedMenu"])
} : void 0;
function getNativeSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiNativeSelect", slot);
}
const nativeSelectClasses = generateUtilityClasses("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
const useUtilityClasses$c = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize(variant)}`, open && "iconOpen", disabled && "disabled"]
  };
  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
};
const StyledSelectSelect = styled("select", {
  name: "MuiNativeSelect"
})(({
  theme
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${nativeSelectClasses.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.variant !== "filled" && ownerState.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (theme.vars || theme).shape.borderRadius,
      "&:focus": {
        borderRadius: (theme.vars || theme).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
}));
const NativeSelectSelect = styled(StyledSelectSelect, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: rootShouldForwardProp,
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.select, styles2[ownerState.variant], ownerState.error && styles2.error, {
      [`&.${nativeSelectClasses.multiple}`]: styles2.multiple
    }];
  }
})({});
const StyledSelectIcon = styled("svg", {
  name: "MuiNativeSelect"
})(({
  theme
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (theme.vars || theme).palette.action.active,
  [`&.${nativeSelectClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
}));
const NativeSelectIcon = styled(StyledSelectIcon, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, ownerState.variant && styles2[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles2.iconOpen];
  }
})({});
const NativeSelectInput = /* @__PURE__ */ React.forwardRef(function NativeSelectInput2(props, ref) {
  const {
    className,
    disabled,
    error,
    IconComponent,
    inputRef,
    variant = "standard",
    ...other
  } = props;
  const ownerState = {
    ...props,
    disabled,
    variant,
    error
  };
  const classes = useUtilityClasses$c(ownerState);
  return /* @__PURE__ */ jsxs(React.Fragment, {
    children: [/* @__PURE__ */ jsx(NativeSelectSelect, {
      ownerState,
      className: clsx(classes.select, className),
      disabled,
      ref: inputRef || ref,
      ...other
    }), props.multiple ? null : /* @__PURE__ */ jsx(NativeSelectIcon, {
      as: IconComponent,
      ownerState,
      className: classes.icon
    })]
  });
});
process.env.NODE_ENV !== "production" ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * The CSS class name of the select element.
   */
  className: PropTypes.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: PropTypes.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: refType,
  /**
   * @ignore
   */
  multiple: PropTypes.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * The input value.
   */
  value: PropTypes.any,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["standard", "outlined", "filled"])
} : void 0;
var _span$1;
const NotchedOutlineRoot$1 = styled("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: rootShouldForwardProp
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
});
const NotchedOutlineLegend = styled("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: rootShouldForwardProp
})(memoTheme(({
  theme
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: theme.transitions.create("width", {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: theme.transitions.create("max-width", {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.withLabel && ownerState.notched,
    style: {
      maxWidth: "100%",
      transition: theme.transitions.create("max-width", {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function NotchedOutline(props) {
  const {
    children,
    classes,
    className,
    label,
    notched,
    ...other
  } = props;
  const withLabel = label != null && label !== "";
  const ownerState = {
    ...props,
    notched,
    withLabel
  };
  return /* @__PURE__ */ jsx(NotchedOutlineRoot$1, {
    "aria-hidden": true,
    className,
    ownerState,
    ...other,
    children: /* @__PURE__ */ jsx(NotchedOutlineLegend, {
      ownerState,
      children: withLabel ? /* @__PURE__ */ jsx("span", {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span$1 || (_span$1 = /* @__PURE__ */ jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "​"
        }))
      )
    })
  });
}
process.env.NODE_ENV !== "production" ? NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The label.
   */
  label: PropTypes.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: PropTypes.bool.isRequired,
  /**
   * @ignore
   */
  style: PropTypes.object
} : void 0;
const useUtilityClasses$b = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
  return {
    ...classes,
    // forward classes to the InputBase
    ...composedClasses
  };
};
const OutlinedInputRoot = styled(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(memoTheme(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.vars ? theme.alpha(theme.vars.palette.common.onBackground, 0.23) : borderColor
      }
    },
    [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color
      },
      style: {
        [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: (theme.vars || theme).palette[color].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: (theme.vars || theme).palette.error.main
        },
        [`&.${outlinedInputClasses.disabled} .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: (theme.vars || theme).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState,
        size
      }) => ownerState.multiline && size === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
}));
const NotchedOutlineRoot = styled(NotchedOutline, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(memoTheme(({
  theme
}) => {
  const borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: theme.vars ? theme.alpha(theme.vars.palette.common.onBackground, 0.23) : borderColor
  };
}));
const OutlinedInputInput = styled(InputBaseInput, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(memoTheme(({
  theme
}) => ({
  padding: "16.5px 14px",
  ...!theme.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
      caretColor: theme.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...theme.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [theme.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
})));
const OutlinedInput = /* @__PURE__ */ React.forwardRef(function OutlinedInput2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiOutlinedInput"
  });
  const {
    components = {},
    fullWidth = false,
    inputComponent = "input",
    label,
    multiline = false,
    notched,
    slots = {},
    slotProps = {},
    type = "text",
    ...other
  } = props;
  const classes = useUtilityClasses$b(props);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  });
  const ownerState = {
    ...props,
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    type
  };
  const RootSlot = slots.root ?? components.Root ?? OutlinedInputRoot;
  const InputSlot = slots.input ?? components.Input ?? OutlinedInputInput;
  const [NotchedSlot, notchedProps] = useSlot("notchedOutline", {
    elementType: NotchedOutlineRoot,
    className: classes.notchedOutline,
    shouldForwardComponentProp: true,
    ownerState,
    externalForwardedProps: {
      slots,
      slotProps
    },
    additionalProps: {
      label: label != null && label !== "" && fcs.required ? /* @__PURE__ */ jsxs(React.Fragment, {
        children: [label, " ", "*"]
      }) : label
    }
  });
  return /* @__PURE__ */ jsx(InputBase, {
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps,
    renderSuffix: (state) => /* @__PURE__ */ jsx(NotchedSlot, {
      ...notchedProps,
      notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type,
    ...other,
    classes: {
      ...classes,
      notchedOutline: null
    }
  });
});
process.env.NODE_ENV !== "production" ? OutlinedInput.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["primary", "secondary"]), PropTypes.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: PropTypes.shape({
    Input: PropTypes.elementType,
    Root: PropTypes.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: PropTypes.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: PropTypes.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: PropTypes.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: PropTypes.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * If `true`, a [TextareaAutosize](https://mui.com/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: PropTypes.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: PropTypes.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    input: PropTypes.object,
    notchedOutline: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    notchedOutline: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   * @default 'text'
   */
  type: PropTypes.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes.any
} : void 0;
OutlinedInput.muiName = "Input";
function getSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiSelect", slot);
}
const selectClasses = generateUtilityClasses("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var _span;
const SelectSelect = styled(StyledSelectSelect, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [
      // Win specificity over the input base
      {
        [`&.${selectClasses.select}`]: styles2.select
      },
      {
        [`&.${selectClasses.select}`]: styles2[ownerState.variant]
      },
      {
        [`&.${selectClasses.error}`]: styles2.error
      },
      {
        [`&.${selectClasses.multiple}`]: styles2.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${selectClasses.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
});
const SelectIcon = styled(StyledSelectIcon, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, ownerState.variant && styles2[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles2.iconOpen];
  }
})({});
const SelectNativeInput = styled("input", {
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "classes",
  name: "MuiSelect",
  slot: "NativeInput"
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function areEqualValues(a, b) {
  if (typeof b === "object" && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}
function isEmpty(display) {
  return display == null || typeof display === "string" && !display.trim();
}
const useUtilityClasses$a = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize(variant)}`, open && "iconOpen", disabled && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return composeClasses(slots, getSelectUtilityClasses, classes);
};
const SelectInput = /* @__PURE__ */ React.forwardRef(function SelectInput2(props, ref) {
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    autoFocus,
    autoWidth,
    children,
    className,
    defaultOpen,
    defaultValue,
    disabled,
    displayEmpty,
    error = false,
    IconComponent,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    required,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    // catching `type` from Input which makes no sense for SelectInput
    type,
    value: valueProp,
    variant = "standard",
    ...other
  } = props;
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  });
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: "Select"
  });
  const inputRef = React.useRef(null);
  const displayRef = React.useRef(null);
  const [displayNode, setDisplayNode] = React.useState(null);
  const {
    current: isOpenControlled
  } = React.useRef(openProp != null);
  const [menuMinWidthState, setMenuMinWidthState] = React.useState();
  const handleRef = useForkRef(ref, inputRefProp);
  const handleDisplayRef = React.useCallback((node) => {
    displayRef.current = node;
    if (node) {
      setDisplayNode(node);
    }
  }, []);
  const anchorElement = displayNode?.parentNode;
  React.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]);
  React.useEffect(() => {
    if (defaultOpen && openState && displayNode && !isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      displayRef.current.focus();
    }
  }, [displayNode, autoWidth]);
  React.useEffect(() => {
    if (autoFocus) {
      displayRef.current.focus();
    }
  }, [autoFocus]);
  React.useEffect(() => {
    if (!labelId) {
      return void 0;
    }
    const label = ownerDocument(displayRef.current).getElementById(labelId);
    if (label) {
      const handler = () => {
        if (getSelection().isCollapsed) {
          displayRef.current.focus();
        }
      };
      label.addEventListener("click", handler);
      return () => {
        label.removeEventListener("click", handler);
      };
    }
    return void 0;
  }, [labelId]);
  const update = (open2, event) => {
    if (open2) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      setOpenState(open2);
    }
  };
  const handleMouseDown = (event) => {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    displayRef.current.focus();
    update(true, event);
  };
  const handleClose = (event) => {
    update(false, event);
  };
  const childrenArray = React.Children.toArray(children);
  const handleChange = (event) => {
    const child = childrenArray.find((childItem) => childItem.props.value === event.target.value);
    if (child === void 0) {
      return;
    }
    setValueState(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  const handleItemClick = (child) => (event) => {
    let newValue;
    if (!event.currentTarget.hasAttribute("tabindex")) {
      return;
    }
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = value.indexOf(child.props.value);
      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }
    if (child.props.onClick) {
      child.props.onClick(event);
    }
    if (value !== newValue) {
      setValueState(newValue);
      if (onChange) {
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
        Object.defineProperty(clonedEvent, "target", {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(clonedEvent, child);
      }
    }
    if (!multiple) {
      update(false, event);
    }
  };
  const handleKeyDown = (event) => {
    if (!readOnly) {
      const validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        // The native select doesn't respond to enter on macOS, but it's recommended by
        // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
        "Enter"
      ];
      if (validKeys.includes(event.key)) {
        event.preventDefault();
        update(true, event);
      }
    }
  };
  const open = displayNode !== null && openState;
  const handleBlur = (event) => {
    if (!open && onBlur) {
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };
  delete other["aria-invalid"];
  let display;
  let displaySingle;
  const displayMultiple = [];
  let computeDisplay = false;
  let foundMatch = false;
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  const items = childrenArray.map((child) => {
    if (!/* @__PURE__ */ React.isValidElement(child)) {
      return null;
    }
    if (process.env.NODE_ENV !== "production") {
      if (isFragment(child)) {
        console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
      }
    }
    let selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : _formatErrorMessage(2));
      }
      selected = value.some((v) => areEqualValues(v, child.props.value));
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    if (selected) {
      foundMatch = true;
    }
    return /* @__PURE__ */ React.cloneElement(child, {
      "aria-selected": selected ? "true" : "false",
      onClick: handleItemClick(child),
      onKeyUp: (event) => {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: "option",
      selected,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": child.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  if (process.env.NODE_ENV !== "production") {
    React.useEffect(() => {
      if (!foundMatch && !multiple && value !== "") {
        const values = childrenArray.map((child) => child.props.value);
        console.warn([`MUI: You have provided an out-of-range value \`${value}\` for the select ${name ? `(name="${name}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${values.filter((x) => x != null).map((x) => `\`${x}\``).join(", ") || '""'}.`].join("\n"));
      }
    }, [foundMatch, childrenArray, multiple, name, value]);
  }
  if (computeDisplay) {
    if (multiple) {
      if (displayMultiple.length === 0) {
        display = null;
      } else {
        display = displayMultiple.reduce((output, child, index) => {
          output.push(child);
          if (index < displayMultiple.length - 1) {
            output.push(", ");
          }
          return output;
        }, []);
      }
    } else {
      display = displaySingle;
    }
  }
  let menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = anchorElement.clientWidth;
  }
  let tabIndex;
  if (typeof tabIndexProp !== "undefined") {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : void 0);
  const ownerState = {
    ...props,
    variant,
    value,
    open,
    error
  };
  const classes = useUtilityClasses$a(ownerState);
  const paperProps = {
    ...MenuProps.PaperProps,
    ...typeof MenuProps.slotProps?.paper === "function" ? MenuProps.slotProps.paper(ownerState) : MenuProps.slotProps?.paper
  };
  const listProps = {
    ...MenuProps.MenuListProps,
    ...typeof MenuProps.slotProps?.list === "function" ? MenuProps.slotProps.list(ownerState) : MenuProps.slotProps?.list
  };
  const listboxId = useId();
  return /* @__PURE__ */ jsxs(React.Fragment, {
    children: [/* @__PURE__ */ jsx(SelectSelect, {
      as: "div",
      ref: handleDisplayRef,
      tabIndex,
      role: "combobox",
      "aria-controls": open ? listboxId : void 0,
      "aria-disabled": disabled ? "true" : void 0,
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
      "aria-describedby": ariaDescribedby,
      "aria-required": required ? "true" : void 0,
      "aria-invalid": error ? "true" : void 0,
      onKeyDown: handleKeyDown,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur,
      onFocus,
      ...SelectDisplayProps,
      ownerState,
      className: clsx(SelectDisplayProps.className, classes.select, className),
      id: buttonId,
      children: isEmpty(display) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span || (_span = /* @__PURE__ */ jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "​"
        }))
      ) : display
    }), /* @__PURE__ */ jsx(SelectNativeInput, {
      "aria-invalid": error,
      value: Array.isArray(value) ? value.join(",") : value,
      name,
      ref: inputRef,
      "aria-hidden": true,
      onChange: handleChange,
      tabIndex: -1,
      disabled,
      className: classes.nativeInput,
      autoFocus,
      required,
      ...other,
      ownerState
    }), /* @__PURE__ */ jsx(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState
    }), /* @__PURE__ */ jsx(Menu, {
      id: `menu-${name || ""}`,
      anchorEl: anchorElement,
      open,
      onClose: handleClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...MenuProps,
      slotProps: {
        ...MenuProps.slotProps,
        list: {
          "aria-labelledby": labelId,
          role: "listbox",
          "aria-multiselectable": multiple ? "true" : void 0,
          disableListWrap: true,
          id: listboxId,
          ...listProps
        },
        paper: {
          ...paperProps,
          style: {
            minWidth: menuMinWidth,
            ...paperProps != null ? paperProps.style : null
          }
        }
      },
      children: items
    })]
  });
});
process.env.NODE_ENV !== "production" ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": PropTypes.string,
  /**
   * @ignore
   */
  "aria-label": PropTypes.string,
  /**
   * @ignore
   */
  autoFocus: PropTypes.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: PropTypes.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * The CSS class name of the select element.
   */
  className: PropTypes.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: PropTypes.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: PropTypes.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: PropTypes.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: refType,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: PropTypes.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: PropTypes.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: PropTypes.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes.string,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: PropTypes.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool,
  /**
   * @ignore
   */
  readOnly: PropTypes.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: PropTypes.func,
  /**
   * If `true`, the component is required.
   */
  required: PropTypes.bool,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: PropTypes.object,
  /**
   * @ignore
   */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * @ignore
   */
  type: PropTypes.any,
  /**
   * The input value.
   */
  value: PropTypes.any,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["standard", "outlined", "filled"])
} : void 0;
const useUtilityClasses$9 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  const composedClasses = composeClasses(slots, getSelectUtilityClasses, classes);
  return {
    ...classes,
    ...composedClasses
  };
};
const styledRootConfig = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) && prop !== "variant"
};
const StyledInput = styled(Input, styledRootConfig)("");
const StyledOutlinedInput = styled(OutlinedInput, styledRootConfig)("");
const StyledFilledInput = styled(FilledInput, styledRootConfig)("");
const Select = /* @__PURE__ */ React.forwardRef(function Select2(inProps, ref) {
  const props = useDefaultProps({
    name: "MuiSelect",
    props: inProps
  });
  const {
    autoWidth = false,
    children,
    classes: classesProp = {},
    className,
    defaultOpen = false,
    displayEmpty = false,
    IconComponent = ArrowDropDownIcon,
    id,
    input,
    inputProps,
    label,
    labelId,
    MenuProps,
    multiple = false,
    native = false,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    variant: variantProp = "outlined",
    ...other
  } = props;
  const inputComponent = native ? NativeSelectInput : SelectInput;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "error"]
  });
  const variant = fcs.variant || variantProp;
  const ownerState = {
    ...props,
    variant,
    classes: classesProp
  };
  const classes = useUtilityClasses$9(ownerState);
  const {
    root,
    ...restOfClasses
  } = classes;
  const InputComponent = input || {
    standard: /* @__PURE__ */ jsx(StyledInput, {
      ownerState
    }),
    outlined: /* @__PURE__ */ jsx(StyledOutlinedInput, {
      label,
      ownerState
    }),
    filled: /* @__PURE__ */ jsx(StyledFilledInput, {
      ownerState
    })
  }[variant];
  const inputComponentRef = useForkRef(ref, getReactElementRef(InputComponent));
  return /* @__PURE__ */ jsx(React.Fragment, {
    children: /* @__PURE__ */ React.cloneElement(InputComponent, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent,
      inputProps: {
        children,
        error: fcs.error,
        IconComponent,
        variant,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple,
        ...native ? {
          id
        } : {
          autoWidth,
          defaultOpen,
          displayEmpty,
          labelId,
          MenuProps,
          onClose,
          onOpen,
          open,
          renderValue,
          SelectDisplayProps: {
            id,
            ...SelectDisplayProps
          }
        },
        ...inputProps,
        classes: inputProps ? deepmerge(restOfClasses, inputProps.classes) : restOfClasses,
        ...input ? input.props.inputProps : {}
      },
      ...(multiple && native || displayEmpty) && variant === "outlined" ? {
        notched: true
      } : {},
      ref: inputComponentRef,
      className: clsx(InputComponent.props.className, className, classes.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!input && {
        variant
      },
      ...other
    })
  });
});
process.env.NODE_ENV !== "production" ? Select.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: PropTypes.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: PropTypes.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: PropTypes.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: PropTypes.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: PropTypes.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: PropTypes.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: PropTypes.object,
  /**
   * See [OutlinedInput#label](https://mui.com/material-ui/api/outlined-input/#props)
   */
  label: PropTypes.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: PropTypes.string,
  /**
   * Props applied to the [`Menu`](https://mui.com/material-ui/api/menu/) element.
   */
  MenuProps: PropTypes.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: PropTypes.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: PropTypes.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: PropTypes.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: PropTypes.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: PropTypes.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: PropTypes.oneOfType([PropTypes.oneOf([""]), PropTypes.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes.oneOf(["filled", "outlined", "standard"])
} : void 0;
Select.muiName = "Select";
function useSnackbar(parameters = {}) {
  const {
    autoHideDuration = null,
    disableWindowBlurListener = false,
    onClose,
    open,
    resumeHideDuration
  } = parameters;
  const timerAutoHide = useTimeout();
  React.useEffect(() => {
    if (!open) {
      return void 0;
    }
    function handleKeyDown(nativeEvent) {
      if (!nativeEvent.defaultPrevented) {
        if (nativeEvent.key === "Escape") {
          onClose?.(nativeEvent, "escapeKeyDown");
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);
  const handleClose = useEventCallback((event, reason) => {
    onClose?.(event, reason);
  });
  const setAutoHideTimer = useEventCallback((autoHideDurationParam) => {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }
    timerAutoHide.start(autoHideDurationParam, () => {
      handleClose(null, "timeout");
    });
  });
  React.useEffect(() => {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }
    return timerAutoHide.clear;
  }, [open, autoHideDuration, setAutoHideTimer, timerAutoHide]);
  const handleClickAway = (event) => {
    onClose?.(event, "clickaway");
  };
  const handlePause = timerAutoHide.clear;
  const handleResume = React.useCallback(() => {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);
  const createHandleBlur = (otherHandlers) => (event) => {
    const onBlurCallback = otherHandlers.onBlur;
    onBlurCallback?.(event);
    handleResume();
  };
  const createHandleFocus = (otherHandlers) => (event) => {
    const onFocusCallback = otherHandlers.onFocus;
    onFocusCallback?.(event);
    handlePause();
  };
  const createMouseEnter = (otherHandlers) => (event) => {
    const onMouseEnterCallback = otherHandlers.onMouseEnter;
    onMouseEnterCallback?.(event);
    handlePause();
  };
  const createMouseLeave = (otherHandlers) => (event) => {
    const onMouseLeaveCallback = otherHandlers.onMouseLeave;
    onMouseLeaveCallback?.(event);
    handleResume();
  };
  React.useEffect(() => {
    if (!disableWindowBlurListener && open) {
      window.addEventListener("focus", handleResume);
      window.addEventListener("blur", handlePause);
      return () => {
        window.removeEventListener("focus", handleResume);
        window.removeEventListener("blur", handlePause);
      };
    }
    return void 0;
  }, [disableWindowBlurListener, open, handleResume, handlePause]);
  const getRootProps = (externalProps = {}) => {
    const externalEventHandlers = {
      ...extractEventHandlers(parameters),
      ...extractEventHandlers(externalProps)
    };
    return {
      // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
      // See https://github.com/mui/material-ui/issues/29080
      role: "presentation",
      ...externalProps,
      ...externalEventHandlers,
      onBlur: createHandleBlur(externalEventHandlers),
      onFocus: createHandleFocus(externalEventHandlers),
      onMouseEnter: createMouseEnter(externalEventHandlers),
      onMouseLeave: createMouseLeave(externalEventHandlers)
    };
  };
  return {
    getRootProps,
    onClickAway: handleClickAway
  };
}
function getSnackbarContentUtilityClass(slot) {
  return generateUtilityClass("MuiSnackbarContent", slot);
}
generateUtilityClasses("MuiSnackbarContent", ["root", "message", "action"]);
const useUtilityClasses$8 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    action: ["action"],
    message: ["message"]
  };
  return composeClasses(slots, getSnackbarContentUtilityClass, classes);
};
const SnackbarContentRoot = styled(Paper, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(memoTheme(({
  theme
}) => {
  const emphasis = theme.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...theme.typography.body2,
    color: theme.vars ? theme.vars.palette.SnackbarContent.color : theme.palette.getContrastText(emphasize(theme.palette.background.default, emphasis)),
    backgroundColor: theme.vars ? theme.vars.palette.SnackbarContent.bg : emphasize(theme.palette.background.default, emphasis),
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "6px 16px",
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      flexGrow: "initial",
      minWidth: 288
    }
  };
}));
const SnackbarContentMessage = styled("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
});
const SnackbarContentAction = styled("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
});
const SnackbarContent = /* @__PURE__ */ React.forwardRef(function SnackbarContent2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSnackbarContent"
  });
  const {
    action,
    className,
    message,
    role = "alert",
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$8(ownerState);
  return /* @__PURE__ */ jsxs(SnackbarContentRoot, {
    role,
    elevation: 6,
    className: clsx(classes.root, className),
    ownerState,
    ref,
    ...other,
    children: [/* @__PURE__ */ jsx(SnackbarContentMessage, {
      className: classes.message,
      ownerState,
      children: message
    }), action ? /* @__PURE__ */ jsx(SnackbarContentAction, {
      className: classes.action,
      ownerState,
      children: action
    }) : null]
  });
});
process.env.NODE_ENV !== "production" ? SnackbarContent.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The message to display.
   */
  message: PropTypes.node,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
function getSnackbarUtilityClass(slot) {
  return generateUtilityClass("MuiSnackbar", slot);
}
generateUtilityClasses("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const useUtilityClasses$7 = (ownerState) => {
  const {
    classes,
    anchorOrigin
  } = ownerState;
  const slots = {
    root: ["root", `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}`]
  };
  return composeClasses(slots, getSnackbarUtilityClass, classes);
};
const SnackbarRoot = styled("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[`anchorOrigin${capitalize(ownerState.anchorOrigin.vertical)}${capitalize(ownerState.anchorOrigin.horizontal)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.snackbar,
  position: "fixed",
  display: "flex",
  left: 8,
  right: 8,
  justifyContent: "center",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical === "top",
    style: {
      top: 8,
      [theme.breakpoints.up("sm")]: {
        top: 24
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.vertical !== "top",
    style: {
      bottom: 8,
      [theme.breakpoints.up("sm")]: {
        bottom: 24
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.horizontal === "left",
    style: {
      justifyContent: "flex-start",
      [theme.breakpoints.up("sm")]: {
        left: 24,
        right: "auto"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.horizontal === "right",
    style: {
      justifyContent: "flex-end",
      [theme.breakpoints.up("sm")]: {
        right: 24,
        left: "auto"
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchorOrigin.horizontal === "center",
    style: {
      [theme.breakpoints.up("sm")]: {
        left: "50%",
        right: "auto",
        transform: "translateX(-50%)"
      }
    }
  }]
})));
const Snackbar = /* @__PURE__ */ React.forwardRef(function Snackbar2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiSnackbar"
  });
  const theme = useTheme();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    action,
    anchorOrigin: {
      vertical,
      horizontal
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration = null,
    children,
    className,
    ClickAwayListenerProps: ClickAwayListenerPropsProp,
    ContentProps: ContentPropsProp,
    disableWindowBlurListener = false,
    message,
    onBlur,
    onClose,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    open,
    resumeHideDuration,
    slots = {},
    slotProps = {},
    TransitionComponent: TransitionComponentProp,
    transitionDuration = defaultTransitionDuration,
    TransitionProps: {
      onEnter,
      onExited,
      ...TransitionPropsProp
    } = {},
    ...other
  } = props;
  const ownerState = {
    ...props,
    anchorOrigin: {
      vertical,
      horizontal
    },
    autoHideDuration,
    disableWindowBlurListener,
    TransitionComponent: TransitionComponentProp,
    transitionDuration
  };
  const classes = useUtilityClasses$7(ownerState);
  const {
    getRootProps,
    onClickAway
  } = useSnackbar({
    ...ownerState
  });
  const [exited, setExited] = React.useState(true);
  const handleExited = (node) => {
    setExited(true);
    if (onExited) {
      onExited(node);
    }
  };
  const handleEnter = (node, isAppearing) => {
    setExited(false);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };
  const externalForwardedProps = {
    slots: {
      transition: TransitionComponentProp,
      ...slots
    },
    slotProps: {
      content: ContentPropsProp,
      clickAwayListener: ClickAwayListenerPropsProp,
      transition: TransitionPropsProp,
      ...slotProps
    }
  };
  const [Root, rootProps] = useSlot("root", {
    ref,
    className: [classes.root, className],
    elementType: SnackbarRoot,
    getSlotProps: getRootProps,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState
  });
  const [ClickAwaySlot, {
    ownerState: clickAwayOwnerStateProp,
    ...clickAwayListenerProps
  }] = useSlot("clickAwayListener", {
    elementType: ClickAwayListener,
    externalForwardedProps,
    getSlotProps: (handlers) => ({
      onClickAway: (...params) => {
        const event = params[0];
        handlers.onClickAway?.(...params);
        if (event?.defaultMuiPrevented) {
          return;
        }
        onClickAway(...params);
      }
    }),
    ownerState
  });
  const [ContentSlot, contentSlotProps] = useSlot("content", {
    elementType: SnackbarContent,
    shouldForwardComponentProp: true,
    externalForwardedProps,
    additionalProps: {
      message,
      action
    },
    ownerState
  });
  const [TransitionSlot, transitionProps] = useSlot("transition", {
    elementType: Grow,
    externalForwardedProps,
    getSlotProps: (handlers) => ({
      onEnter: (...params) => {
        handlers.onEnter?.(...params);
        handleEnter(...params);
      },
      onExited: (...params) => {
        handlers.onExited?.(...params);
        handleExited(...params);
      }
    }),
    additionalProps: {
      appear: true,
      in: open,
      timeout: transitionDuration,
      direction: vertical === "top" ? "down" : "up"
    },
    ownerState
  });
  if (!open && exited) {
    return null;
  }
  return /* @__PURE__ */ jsx(ClickAwaySlot, {
    ...clickAwayListenerProps,
    ...slots.clickAwayListener && {
      ownerState: clickAwayOwnerStateProp
    },
    children: /* @__PURE__ */ jsx(Root, {
      ...rootProps,
      children: /* @__PURE__ */ jsx(TransitionSlot, {
        ...transitionProps,
        children: children || /* @__PURE__ */ jsx(ContentSlot, {
          ...contentSlotProps
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? Snackbar.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: PropTypes.node,
  /**
   * The anchor of the `Snackbar`.
   * On smaller screens, the component grows to occupy all the available width,
   * the horizontal alignment is ignored.
   * @default { vertical: 'bottom', horizontal: 'left' }
   */
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(["center", "left", "right"]).isRequired,
    vertical: PropTypes.oneOf(["bottom", "top"]).isRequired
  }),
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: PropTypes.number,
  /**
   * Replace the `SnackbarContent` component.
   */
  children: PropTypes.element,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Props applied to the `ClickAwayListener` element.
   * @deprecated Use `slotProps.clickAwayListener` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ClickAwayListenerProps: PropTypes.object,
  /**
   * Props applied to the [`SnackbarContent`](https://mui.com/material-ui/api/snackbar-content/) element.
   * @deprecated Use `slotProps.content` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ContentProps: PropTypes.object,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: PropTypes.bool,
  /**
   * When displaying multiple consecutive snackbars using a single parent-rendered
   * `<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.
   * For instance, use `<Snackbar key={message} />`. Otherwise, messages might update
   * in place, and features like `autoHideDuration` could be affected.
   */
  key: () => null,
  /**
   * The message to display.
   */
  message: PropTypes.node,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * @ignore
   */
  onMouseEnter: PropTypes.func,
  /**
   * @ignore
   */
  onMouseLeave: PropTypes.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: PropTypes.number,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    clickAwayListener: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    content: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    transition: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    clickAwayListener: PropTypes.elementType,
    content: PropTypes.elementType,
    root: PropTypes.elementType,
    transition: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default Grow
   */
  TransitionComponent: PropTypes.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  TransitionProps: PropTypes.object
} : void 0;
const Stack = createStack({
  createStyledComponent: styled("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (inProps) => useDefaultProps({
    props: inProps,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" ? Stack.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: PropTypes.oneOfType([PropTypes.oneOf(["column-reverse", "column", "row-reverse", "row"]), PropTypes.arrayOf(PropTypes.oneOf(["column-reverse", "column", "row-reverse", "row"])), PropTypes.object]),
  /**
   * Add an element between each child.
   */
  divider: PropTypes.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: PropTypes.bool
} : void 0;
const TableContext = /* @__PURE__ */ React.createContext();
if (process.env.NODE_ENV !== "production") {
  TableContext.displayName = "TableContext";
}
function getTableUtilityClass(slot) {
  return generateUtilityClass("MuiTable", slot);
}
generateUtilityClasses("MuiTable", ["root", "stickyHeader"]);
const useUtilityClasses$6 = (ownerState) => {
  const {
    classes,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ["root", stickyHeader && "stickyHeader"]
  };
  return composeClasses(slots, getTableUtilityClass, classes);
};
const TableRoot = styled("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.stickyHeader && styles2.stickyHeader];
  }
})(memoTheme(({
  theme
}) => ({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
  "& caption": {
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: (theme.vars || theme).palette.text.secondary,
    textAlign: "left",
    captionSide: "bottom"
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.stickyHeader,
    style: {
      borderCollapse: "separate"
    }
  }]
})));
const defaultComponent$3 = "table";
const Table = /* @__PURE__ */ React.forwardRef(function Table2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTable"
  });
  const {
    className,
    component = defaultComponent$3,
    padding = "normal",
    size = "medium",
    stickyHeader = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    padding,
    size,
    stickyHeader
  };
  const classes = useUtilityClasses$6(ownerState);
  const table = React.useMemo(() => ({
    padding,
    size,
    stickyHeader
  }), [padding, size, stickyHeader]);
  return /* @__PURE__ */ jsx(TableContext.Provider, {
    value: table,
    children: /* @__PURE__ */ jsx(TableRoot, {
      as: component,
      role: component === defaultComponent$3 ? null : "table",
      ref,
      className: clsx(classes.root, className),
      ownerState,
      ...other
    })
  });
});
process.env.NODE_ENV !== "production" ? Table.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the table, normally `TableHead` and `TableBody`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Allows TableCells to inherit padding of the Table.
   * @default 'normal'
   */
  padding: PropTypes.oneOf(["checkbox", "none", "normal"]),
  /**
   * Allows TableCells to inherit size of the Table.
   * @default 'medium'
   */
  size: PropTypes.oneOfType([PropTypes.oneOf(["medium", "small"]), PropTypes.string]),
  /**
   * Set the header sticky.
   * @default false
   */
  stickyHeader: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
const Tablelvl2Context = /* @__PURE__ */ React.createContext();
if (process.env.NODE_ENV !== "production") {
  Tablelvl2Context.displayName = "Tablelvl2Context";
}
function getTableBodyUtilityClass(slot) {
  return generateUtilityClass("MuiTableBody", slot);
}
generateUtilityClasses("MuiTableBody", ["root"]);
const useUtilityClasses$5 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableBodyUtilityClass, classes);
};
const TableBodyRoot = styled("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
});
const tablelvl2$1 = {
  variant: "body"
};
const defaultComponent$2 = "tbody";
const TableBody = /* @__PURE__ */ React.forwardRef(function TableBody2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableBody"
  });
  const {
    className,
    component = defaultComponent$2,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$5(ownerState);
  return /* @__PURE__ */ jsx(Tablelvl2Context.Provider, {
    value: tablelvl2$1,
    children: /* @__PURE__ */ jsx(TableBodyRoot, {
      className: clsx(classes.root, className),
      as: component,
      ref,
      role: component === defaultComponent$2 ? null : "rowgroup",
      ownerState,
      ...other
    })
  });
});
process.env.NODE_ENV !== "production" ? TableBody.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `TableRow`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
function getTableCellUtilityClass(slot) {
  return generateUtilityClass("MuiTableCell", slot);
}
const tableCellClasses = generateUtilityClasses("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]);
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes,
    variant,
    align,
    padding,
    size,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ["root", variant, stickyHeader && "stickyHeader", align !== "inherit" && `align${capitalize(align)}`, padding !== "normal" && `padding${capitalize(padding)}`, `size${capitalize(size)}`]
  };
  return composeClasses(slots, getTableCellUtilityClass, classes);
};
const TableCellRoot = styled("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`size${capitalize(ownerState.size)}`], ownerState.padding !== "normal" && styles2[`padding${capitalize(ownerState.padding)}`], ownerState.align !== "inherit" && styles2[`align${capitalize(ownerState.align)}`], ownerState.stickyHeader && styles2.stickyHeader];
  }
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  display: "table-cell",
  verticalAlign: "inherit",
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === "light" ? theme.lighten(theme.alpha(theme.palette.divider, 1), 0.88) : theme.darken(theme.alpha(theme.palette.divider, 1), 0.68)}`,
  textAlign: "left",
  padding: 16,
  variants: [{
    props: {
      variant: "head"
    },
    style: {
      color: (theme.vars || theme).palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    }
  }, {
    props: {
      variant: "body"
    },
    style: {
      color: (theme.vars || theme).palette.text.primary
    }
  }, {
    props: {
      variant: "footer"
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: "6px 16px",
      [`&.${tableCellClasses.paddingCheckbox}`]: {
        width: 24,
        // prevent the checkbox column from growing
        padding: "0 12px 0 16px",
        "& > *": {
          padding: 0
        }
      }
    }
  }, {
    props: {
      padding: "checkbox"
    },
    style: {
      width: 48,
      // prevent the checkbox column from growing
      padding: "0 0 0 4px"
    }
  }, {
    props: {
      padding: "none"
    },
    style: {
      padding: 0
    }
  }, {
    props: {
      align: "left"
    },
    style: {
      textAlign: "left"
    }
  }, {
    props: {
      align: "center"
    },
    style: {
      textAlign: "center"
    }
  }, {
    props: {
      align: "right"
    },
    style: {
      textAlign: "right",
      flexDirection: "row-reverse"
    }
  }, {
    props: {
      align: "justify"
    },
    style: {
      textAlign: "justify"
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.stickyHeader,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 2,
      backgroundColor: (theme.vars || theme).palette.background.default
    }
  }]
})));
const TableCell = /* @__PURE__ */ React.forwardRef(function TableCell2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableCell"
  });
  const {
    align = "inherit",
    className,
    component: componentProp,
    padding: paddingProp,
    scope: scopeProp,
    size: sizeProp,
    sortDirection,
    variant: variantProp,
    ...other
  } = props;
  const table = React.useContext(TableContext);
  const tablelvl22 = React.useContext(Tablelvl2Context);
  const isHeadCell = tablelvl22 && tablelvl22.variant === "head";
  let component;
  if (componentProp) {
    component = componentProp;
  } else {
    component = isHeadCell ? "th" : "td";
  }
  let scope = scopeProp;
  if (component === "td") {
    scope = void 0;
  } else if (!scope && isHeadCell) {
    scope = "col";
  }
  const variant = variantProp || tablelvl22 && tablelvl22.variant;
  const ownerState = {
    ...props,
    align,
    component,
    padding: paddingProp || (table && table.padding ? table.padding : "normal"),
    size: sizeProp || (table && table.size ? table.size : "medium"),
    sortDirection,
    stickyHeader: variant === "head" && table && table.stickyHeader,
    variant
  };
  const classes = useUtilityClasses$4(ownerState);
  let ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === "asc" ? "ascending" : "descending";
  }
  return /* @__PURE__ */ jsx(TableCellRoot, {
    as: component,
    ref,
    className: clsx(classes.root, className),
    "aria-sort": ariaSort,
    scope,
    ownerState,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? TableCell.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   * @default 'inherit'
   */
  align: PropTypes.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Sets the padding applied to the cell.
   * The prop defaults to the value (`'default'`) inherited from the parent Table component.
   */
  padding: PropTypes.oneOf(["checkbox", "none", "normal"]),
  /**
   * Set scope attribute.
   */
  scope: PropTypes.string,
  /**
   * Specify the size of the cell.
   * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
   */
  size: PropTypes.oneOfType([PropTypes.oneOf(["medium", "small"]), PropTypes.string]),
  /**
   * Set aria-sort direction.
   */
  sortDirection: PropTypes.oneOf(["asc", "desc", false]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: PropTypes.oneOfType([PropTypes.oneOf(["body", "footer", "head"]), PropTypes.string])
} : void 0;
function getTableContainerUtilityClass(slot) {
  return generateUtilityClass("MuiTableContainer", slot);
}
generateUtilityClasses("MuiTableContainer", ["root"]);
const useUtilityClasses$3 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableContainerUtilityClass, classes);
};
const TableContainerRoot = styled("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
});
const TableContainer = /* @__PURE__ */ React.forwardRef(function TableContainer2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableContainer"
  });
  const {
    className,
    component = "div",
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$3(ownerState);
  return /* @__PURE__ */ jsx(TableContainerRoot, {
    ref,
    as: component,
    className: clsx(classes.root, className),
    ownerState,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? TableContainer.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Table`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
function getTableHeadUtilityClass(slot) {
  return generateUtilityClass("MuiTableHead", slot);
}
generateUtilityClasses("MuiTableHead", ["root"]);
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableHeadUtilityClass, classes);
};
const TableHeadRoot = styled("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
});
const tablelvl2 = {
  variant: "head"
};
const defaultComponent$1 = "thead";
const TableHead = /* @__PURE__ */ React.forwardRef(function TableHead2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableHead"
  });
  const {
    className,
    component = defaultComponent$1,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$2(ownerState);
  return /* @__PURE__ */ jsx(Tablelvl2Context.Provider, {
    value: tablelvl2,
    children: /* @__PURE__ */ jsx(TableHeadRoot, {
      as: component,
      className: clsx(classes.root, className),
      ref,
      role: component === defaultComponent$1 ? null : "rowgroup",
      ownerState,
      ...other
    })
  });
});
process.env.NODE_ENV !== "production" ? TableHead.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `TableRow`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
function getTableRowUtilityClass(slot) {
  return generateUtilityClass("MuiTableRow", slot);
}
const tableRowClasses = generateUtilityClasses("MuiTableRow", ["root", "selected", "hover", "head", "footer"]);
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    selected,
    hover,
    head,
    footer
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", hover && "hover", head && "head", footer && "footer"]
  };
  return composeClasses(slots, getTableRowUtilityClass, classes);
};
const TableRowRoot = styled("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.head && styles2.head, ownerState.footer && styles2.footer];
  }
})(memoTheme(({
  theme
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${tableRowClasses.hover}:hover`]: {
    backgroundColor: (theme.vars || theme).palette.action.hover
  },
  [`&.${tableRowClasses.selected}`]: {
    backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, (theme.vars || theme).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.hoverOpacity}`)
    }
  }
})));
const defaultComponent = "tr";
const TableRow = /* @__PURE__ */ React.forwardRef(function TableRow2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableRow"
  });
  const {
    className,
    component = defaultComponent,
    hover = false,
    selected = false,
    ...other
  } = props;
  const tablelvl22 = React.useContext(Tablelvl2Context);
  const ownerState = {
    ...props,
    component,
    hover,
    selected,
    head: tablelvl22 && tablelvl22.variant === "head",
    footer: tablelvl22 && tablelvl22.variant === "footer"
  };
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsx(TableRowRoot, {
    as: component,
    ref,
    className: clsx(classes.root, className),
    role: component === defaultComponent ? null : "row",
    ownerState,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? TableRow.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Should be valid `<tr>` children such as `TableCell`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the table row will shade on hover.
   * @default false
   */
  hover: PropTypes.bool,
  /**
   * If `true`, the table row will have the selected shading.
   * @default false
   */
  selected: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
function getTextFieldUtilityClass(slot) {
  return generateUtilityClass("MuiTextField", slot);
}
generateUtilityClasses("MuiTextField", ["root"]);
const variantComponent = {
  standard: Input,
  filled: FilledInput,
  outlined: OutlinedInput
};
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTextFieldUtilityClass, classes);
};
const TextFieldRoot = styled(FormControl, {
  name: "MuiTextField",
  slot: "Root"
})({});
const TextField = /* @__PURE__ */ React.forwardRef(function TextField2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTextField"
  });
  const {
    autoComplete,
    autoFocus = false,
    children,
    className,
    color = "primary",
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps: FormHelperTextPropsProp,
    fullWidth = false,
    helperText,
    id: idOverride,
    InputLabelProps: InputLabelPropsProp,
    inputProps: inputPropsProp,
    InputProps: InputPropsProp,
    inputRef,
    label,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    select = false,
    SelectProps: SelectPropsProp,
    slots = {},
    slotProps = {},
    type,
    value,
    variant = "outlined",
    ...other
  } = props;
  const ownerState = {
    ...props,
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  if (process.env.NODE_ENV !== "production") {
    if (select && !children) {
      console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
    }
  }
  const id = useId(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : void 0;
  const inputLabelId = label && id ? `${id}-label` : void 0;
  const InputComponent = variantComponent[variant];
  const externalForwardedProps = {
    slots,
    slotProps: {
      input: InputPropsProp,
      inputLabel: InputLabelPropsProp,
      htmlInput: inputPropsProp,
      formHelperText: FormHelperTextPropsProp,
      select: SelectPropsProp,
      ...slotProps
    }
  };
  const inputAdditionalProps = {};
  const inputLabelSlotProps = externalForwardedProps.slotProps.inputLabel;
  if (variant === "outlined") {
    if (inputLabelSlotProps && typeof inputLabelSlotProps.shrink !== "undefined") {
      inputAdditionalProps.notched = inputLabelSlotProps.shrink;
    }
    inputAdditionalProps.label = label;
  }
  if (select) {
    if (!SelectPropsProp || !SelectPropsProp.native) {
      inputAdditionalProps.id = void 0;
    }
    inputAdditionalProps["aria-describedby"] = void 0;
  }
  const [RootSlot, rootProps] = useSlot("root", {
    elementType: TextFieldRoot,
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    className: clsx(classes.root, className),
    ref,
    additionalProps: {
      disabled,
      error,
      fullWidth,
      required,
      color,
      variant
    }
  });
  const [InputSlot, inputProps] = useSlot("input", {
    elementType: InputComponent,
    externalForwardedProps,
    additionalProps: inputAdditionalProps,
    ownerState
  });
  const [InputLabelSlot, inputLabelProps] = useSlot("inputLabel", {
    elementType: InputLabel,
    externalForwardedProps,
    ownerState
  });
  const [HtmlInputSlot, htmlInputProps] = useSlot("htmlInput", {
    elementType: "input",
    externalForwardedProps,
    ownerState
  });
  const [FormHelperTextSlot, formHelperTextProps] = useSlot("formHelperText", {
    elementType: FormHelperText,
    externalForwardedProps,
    ownerState
  });
  const [SelectSlot, selectProps] = useSlot("select", {
    elementType: Select,
    externalForwardedProps,
    ownerState
  });
  const InputElement = /* @__PURE__ */ jsx(InputSlot, {
    "aria-describedby": helperTextId,
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    multiline,
    name,
    rows,
    maxRows,
    minRows,
    type,
    value,
    id,
    inputRef,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    inputProps: htmlInputProps,
    slots: {
      input: slots.htmlInput ? HtmlInputSlot : void 0
    },
    ...inputProps
  });
  return /* @__PURE__ */ jsxs(RootSlot, {
    ...rootProps,
    children: [label != null && label !== "" && /* @__PURE__ */ jsx(InputLabelSlot, {
      htmlFor: id,
      id: inputLabelId,
      ...inputLabelProps,
      children: label
    }), select ? /* @__PURE__ */ jsx(SelectSlot, {
      "aria-describedby": helperTextId,
      id,
      labelId: inputLabelId,
      value,
      input: InputElement,
      ...selectProps,
      children
    }) : InputElement, helperText && /* @__PURE__ */ jsx(FormHelperTextSlot, {
      id: helperTextId,
      ...formHelperTextProps,
      children: helperText
    })]
  });
});
process.env.NODE_ENV !== "production" ? TextField.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: PropTypes.bool,
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes.oneOfType([PropTypes.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), PropTypes.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: PropTypes.bool,
  /**
   * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
   * @deprecated Use `slotProps.formHelperText` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  FormHelperTextProps: PropTypes.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: PropTypes.string,
  /**
   * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   * @deprecated Use `slotProps.inputLabel` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputLabelProps: PropTypes.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.htmlInput` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: PropTypes.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](https://mui.com/material-ui/api/filled-input/),
   * [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) or [`Input`](https://mui.com/material-ui/api/input/)
   * component depending on the `variant` prop value.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  InputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: PropTypes.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * @ignore
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  onFocus: PropTypes.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: PropTypes.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Render a [`Select`](https://mui.com/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: PropTypes.bool,
  /**
   * Props applied to the [`Select`](https://mui.com/material-ui/api/select/) element.
   * @deprecated Use `slotProps.select` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SelectProps: PropTypes.object,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes.oneOfType([PropTypes.oneOf(["medium", "small"]), PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    formHelperText: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    htmlInput: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    input: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    inputLabel: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    select: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    formHelperText: PropTypes.elementType,
    htmlInput: PropTypes.elementType,
    input: PropTypes.elementType,
    inputLabel: PropTypes.elementType,
    root: PropTypes.elementType,
    select: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types).
   */
  type: PropTypes.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes.oneOf(["filled", "outlined", "standard"])
} : void 0;
const EditIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
}), "Edit");
const DeleteIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), "Delete");
const CloseIcon = createSvgIcon(/* @__PURE__ */ jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
const Resumes = () => {
  const [resumeData, setResumeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: "createdAt", direction: "descending" });
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/resumedata");
        if (!response.ok) {
          throw new Error("Failed to fetch resume data");
        }
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error("Error fetching resume data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResumeData();
  }, []);
  const formatDate = (dateString) => {
    if (!dateString) return "Not available";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Not available";
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    } catch (error) {
      return "Not available";
    }
  };
  const handleDownload = async (resumePath) => {
    try {
      const response = await fetch(`/api/resumes/${resumePath}`);
      if (!response.ok) {
        throw new Error(`Download failed: ${response.status} ${response.statusText}`);
      }
      const contentType = response.headers.get("content-type");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(
        new Blob([blob], { type: contentType || "application/octet-stream" })
      );
      const a = document.createElement("a");
      a.href = url;
      a.download = resumePath.split("/").pop() || resumePath;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading resume file:", error);
      alert(`Failed to download: ${error.message}`);
    }
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };
  const filteredData = resumeData.filter((item) => {
    return item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.email && item.email.toLowerCase().includes(searchTerm.toLowerCase()) || item.job && item.job.toLowerCase().includes(searchTerm.toLowerCase()) || item.resumePath && item.resumePath.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.key === "createdAt") {
      const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      if (sortConfig.direction === "ascending") {
        return aDate - bDate;
      } else {
        return bDate - aDate;
      }
    } else {
      if (a[sortConfig.key] === void 0 || a[sortConfig.key] === null) return 1;
      if (b[sortConfig.key] === void 0 || b[sortConfig.key] === null) return -1;
      const aValue = typeof a[sortConfig.key] === "string" ? a[sortConfig.key].toLowerCase() : a[sortConfig.key];
      const bValue = typeof b[sortConfig.key] === "string" ? b[sortConfig.key].toLowerCase() : b[sortConfig.key];
      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    }
  });
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? " ▲" : " ▼";
    }
    return "";
  };
  const tableStyles = {
    container: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px"
    },
    searchContainer: {
      marginBottom: "20px"
    },
    searchInput: {
      padding: "8px 12px",
      width: "300px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "14px"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      backgroundColor: "white",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      overflow: "hidden"
    },
    th: {
      backgroundColor: "#f8f9fa",
      color: "#333",
      fontWeight: "bold",
      padding: "12px 15px",
      textAlign: "left",
      borderBottom: "2px solid #e0e0e0",
      cursor: "pointer",
      userSelect: "none",
      position: "relative"
    },
    td: {
      padding: "10px 15px",
      borderBottom: "1px solid #e0e0e0",
      color: "#333"
    },
    tr: {
      transition: "background-color 0.2s"
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "20px",
      padding: "10px",
      backgroundColor: "#f8f9fa",
      borderRadius: "4px",
      border: "1px solid #e0e0e0"
    },
    paginationControls: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },
    paginationButton: {
      padding: "8px 16px",
      backgroundColor: "#2196F3",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      transition: "background-color 0.2s"
    },
    paginationButtonDisabled: {
      backgroundColor: "#cccccc",
      cursor: "not-allowed"
    },
    paginationInfo: {
      fontSize: "14px",
      color: "#555"
    },
    itemsPerPageContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    },
    itemsPerPageLabel: {
      fontSize: "14px",
      color: "#555"
    },
    itemsPerPageSelect: {
      padding: "6px 10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      backgroundColor: "white",
      fontSize: "14px"
    },
    fileName: {
      color: "#2196F3",
      textDecoration: "underline",
      cursor: "pointer"
    },
    loadingText: {
      textAlign: "center",
      padding: "30px",
      color: "#666",
      fontSize: "16px"
    },
    downloadButton: {
      padding: "8px 16px",
      backgroundColor: "#1d4a8e",
      color: "white",
      border: "none",
      borderRadius: "4px",
      width: "100px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "background-color 0.2s"
    },
    summary: {
      marginTop: "10px",
      fontSize: "14px",
      color: "#666"
    },
    emptyMessage: {
      textAlign: "center",
      padding: "30px",
      color: "#666",
      fontSize: "16px",
      border: "1px dashed #ddd",
      borderRadius: "4px",
      backgroundColor: "#f9f9f9"
    }
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { style: tableStyles.loadingText, children: "Loading resume data..." });
  }
  return /* @__PURE__ */ jsxs("div", { style: tableStyles.container, children: [
    /* @__PURE__ */ jsxs("div", { style: tableStyles.header, children: [
      /* @__PURE__ */ jsx("h2", { children: "Resume Data" }),
      /* @__PURE__ */ jsx("div", { style: tableStyles.searchContainer, children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Search by name, email, job...",
          value: searchTerm,
          onChange: handleSearch,
          style: tableStyles.searchInput
        }
      ) })
    ] }),
    currentItems.length === 0 ? /* @__PURE__ */ jsx("div", { style: tableStyles.emptyMessage, children: searchTerm ? "No resumes match your search criteria" : "No resume data available" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxs("table", { style: tableStyles.table, children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsxs(
            "th",
            {
              style: tableStyles.th,
              onClick: () => requestSort("name"),
              children: [
                "Name ",
                getSortIndicator("name")
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "th",
            {
              style: tableStyles.th,
              onClick: () => requestSort("email"),
              children: [
                "Email ",
                getSortIndicator("email")
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "th",
            {
              style: tableStyles.th,
              onClick: () => requestSort("job"),
              children: [
                "Job ",
                getSortIndicator("job")
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "th",
            {
              style: tableStyles.th,
              onClick: () => requestSort("createdAt"),
              children: [
                "Created ",
                getSortIndicator("createdAt")
              ]
            }
          ),
          /* @__PURE__ */ jsx("th", { style: tableStyles.th, children: "Resume File" }),
          /* @__PURE__ */ jsx("th", { style: tableStyles.th, children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: currentItems.map((resume, index) => /* @__PURE__ */ jsxs(
          "tr",
          {
            style: tableStyles.tr,
            onMouseEnter: (e) => {
              e.currentTarget.style.backgroundColor = "#f5f5f5";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.backgroundColor = "";
            },
            children: [
              /* @__PURE__ */ jsx("td", { style: tableStyles.td, children: resume.name || "N/A" }),
              /* @__PURE__ */ jsx("td", { style: tableStyles.td, children: resume.email || "N/A" }),
              /* @__PURE__ */ jsx("td", { style: tableStyles.td, children: resume.job || "N/A" }),
              /* @__PURE__ */ jsx("td", { style: tableStyles.td, children: formatDate(resume.createdAt) }),
              /* @__PURE__ */ jsx("td", { style: tableStyles.td, children: resume.resumePath ? /* @__PURE__ */ jsx(
                "span",
                {
                  style: tableStyles.fileName,
                  onClick: () => handleDownload(resume.resumePath),
                  children: resume.resumePath.split("/").pop() || resume.resumePath
                }
              ) : "No file" }),
              /* @__PURE__ */ jsx("td", { style: tableStyles.td, children: resume.resumePath ? /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => handleDownload(resume.resumePath),
                  style: tableStyles.downloadButton,
                  onMouseEnter: (e) => {
                    e.currentTarget.style.backgroundColor = "#1d4a8e";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.backgroundColor = "#1d4a8e";
                  },
                  children: "Download"
                }
              ) : /* @__PURE__ */ jsx("span", { style: { color: "#999" }, children: "No file" }) })
            ]
          },
          resume._id || index
        )) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { style: tableStyles.summary, children: [
        "Showing ",
        indexOfFirstItem + 1,
        " to ",
        Math.min(indexOfLastItem, sortedData.length),
        " of ",
        sortedData.length,
        " entries"
      ] }),
      /* @__PURE__ */ jsxs("div", { style: tableStyles.paginationContainer, children: [
        /* @__PURE__ */ jsxs("div", { style: tableStyles.itemsPerPageContainer, children: [
          /* @__PURE__ */ jsx("span", { style: tableStyles.itemsPerPageLabel, children: "Items per page:" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: itemsPerPage,
              onChange: handleItemsPerPageChange,
              style: tableStyles.itemsPerPageSelect,
              children: [
                /* @__PURE__ */ jsx("option", { value: 5, children: "5" }),
                /* @__PURE__ */ jsx("option", { value: 10, children: "10" }),
                /* @__PURE__ */ jsx("option", { value: 25, children: "25" }),
                /* @__PURE__ */ jsx("option", { value: 50, children: "50" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { style: tableStyles.paginationInfo, children: [
          "Page ",
          currentPage,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxs("div", { style: tableStyles.paginationControls, children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: goToPrevPage,
              disabled: currentPage === 1,
              style: {
                ...tableStyles.paginationButton,
                ...currentPage === 1 ? tableStyles.paginationButtonDisabled : {}
              },
              children: "Prev"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: goToNextPage,
              disabled: currentPage === totalPages || totalPages === 0,
              style: {
                ...tableStyles.paginationButton,
                ...currentPage === totalPages || totalPages === 0 ? tableStyles.paginationButtonDisabled : {}
              },
              children: "Next"
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const Dashboard = () => {
  const location = useLocation();
  location.state ? location.state.username : "";
  const [showCertificate, setShowCertificate] = useState(false);
  const [showResume, setshowResume] = useState(false);
  const [showStudentFormDiploma, setShowStudentFormDiploma] = useState(false);
  const [showStudentForm, setshowStudentForm] = useState(false);
  const [showinternshipCertificate, setshowinternshipCertificate] = useState(false);
  return /* @__PURE__ */ jsx("div", { className: "col-xl-2", children: /* @__PURE__ */ jsxs("div", { className: "dashboard-layout", children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "Dashboard - EXCERPT TECHNOLOGIES PRIVATE LIMITED" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Manage your account and access various services at Excerpt Technologies Private Limited."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container-scroller d-flex", children: [
      /* @__PURE__ */ jsx("nav", { className: "sidebar sidebar-offcanvas", id: "sidebar", children: /* @__PURE__ */ jsxs("ul", { className: "nav", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item sidebar-category", children: /* @__PURE__ */ jsx("span", {}) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(
          "button",
          {
            className: "mdi mdi-palette menu-icon menu-title menu-arrow",
            style: { width: "160px", marginLeft: "20px" },
            children: "Dashboard"
          }
        ) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", style: { margin: "20px" }, children: /* @__PURE__ */ jsx("button", { className: "mdi mdi-palette menu-icon menu-title menu-arrow", children: /* @__PURE__ */ jsx(Link, { to: "/invoice", style: { color: "white" }, children: "Invoice" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", style: { margin: "20px" }, children: /* @__PURE__ */ jsx("button", { className: "mdi mdi-palette menu-icon menu-title menu-arrow", children: /* @__PURE__ */ jsx(Link, { to: "/invoice-display", style: { color: "white" }, children: "Invoice - List" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", style: { margin: "20px" }, children: /* @__PURE__ */ jsx("button", { className: "mdi mdi-palette menu-icon menu-title menu-arrow", children: /* @__PURE__ */ jsx(Link, { to: "/JobForm", style: { color: "white" }, children: "Job Form" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", style: { margin: "20px" }, children: /* @__PURE__ */ jsx("button", { className: "mdi mdi-palette menu-icon menu-title menu-arrow", children: /* @__PURE__ */ jsx(Link, { to: "/Quotation", style: { color: "white" }, children: "Quotation" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", style: { margin: "20px" }, children: /* @__PURE__ */ jsx("button", { className: "mdi mdi-palette menu-icon menu-title menu-arrow", children: /* @__PURE__ */ jsx(Link, { to: "/resume", style: { color: "white" }, children: "Resumes" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", style: { margin: "20px" }, children: /* @__PURE__ */ jsx("button", { className: "mdi mdi-palette menu-icon menu-title menu-arrow", children: /* @__PURE__ */ jsx(Link, { to: "/studentform", style: { color: "white" }, children: "Student Form" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", style: { margin: "20px" }, children: /* @__PURE__ */ jsx("button", { className: "mdi mdi-palette menu-icon menu-title menu-arrow", children: /* @__PURE__ */ jsx(Link, { to: "/studentcertificate", style: { color: "white" }, children: "Student Certificate" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", style: { margin: "20px" }, children: /* @__PURE__ */ jsx("button", { className: "mdi mdi-palette menu-icon menu-title menu-arrow", children: /* @__PURE__ */ jsx(Link, { to: "/certificate", style: { color: "white" }, children: "Certificate" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", style: { margin: "20px" }, children: /* @__PURE__ */ jsx("button", { className: "mdi mdi-palette menu-icon menu-title menu-arrow", children: /* @__PURE__ */ jsx(Link, { to: "/internform", style: { color: "white" }, children: "Intern Registration Form" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", style: { margin: "20px" }, children: /* @__PURE__ */ jsx("button", { className: "mdi mdi-palette menu-icon menu-title menu-arrow", children: /* @__PURE__ */ jsx(Link, { to: "/indvisit", style: { color: "white" }, children: "Industrial Visit Certificate" }) }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "container-fluid page-body-wrapper", children: /* @__PURE__ */ jsx("div", { className: "main-panel", children: /* @__PURE__ */ jsx(Outlet, {}) }) })
    ] })
  ] }) });
};
const Dashboard$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dashboard
}, Symbol.toStringTag, { value: "Module" }));
const JobFormWithTable = () => {
  const [openModal, setOpenModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert2, setAlert] = useState({ open: false, message: "", severity: "success" });
  const [errors, setErrors] = useState({});
  const [job, setJob] = useState({
    title: "",
    description: "",
    experience: "",
    qualification: "",
    skills: ""
  });
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/jobdata");
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      } else {
        showAlert("Failed to fetch jobs", "error");
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
      showAlert("Error fetching jobs", "error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  const showAlert = (message, severity = "success") => {
    setAlert({ open: true, message, severity });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };
  const validateForm = () => {
    const newErrors = {};
    if (!job.title.trim()) {
      newErrors.title = "Job title is required";
    } else if (job.title.trim().length < 3) {
      newErrors.title = "Job title must be at least 3 characters";
    } else if (job.title.trim().length > 100) {
      newErrors.title = "Job title must not exceed 100 characters";
    }
    if (!job.description.trim()) {
      newErrors.description = "Job description is required";
    } else if (job.description.trim().length < 10) {
      newErrors.description = "Job description must be at least 10 characters";
    } else if (job.description.trim().length > 1e3) {
      newErrors.description = "Job description must not exceed 1000 characters";
    }
    if (!job.experience.trim()) {
      newErrors.experience = "Experience requirement is required";
    } else if (job.experience.trim().length < 2) {
      newErrors.experience = "Experience must be at least 2 characters";
    }
    if (!job.qualification.trim()) {
      newErrors.qualification = "Qualification is required";
    } else if (job.qualification.trim().length < 3) {
      newErrors.qualification = "Qualification must be at least 3 characters";
    }
    if (!job.skills.trim()) {
      newErrors.skills = "Skills are required";
    } else {
      const skillsArray = job.skills.split(",").map((skill) => skill.trim()).filter((skill) => skill.length > 0);
      if (skillsArray.length === 0) {
        newErrors.skills = "At least one skill is required";
      } else if (skillsArray.some((skill) => skill.length < 2)) {
        newErrors.skills = "Each skill must be at least 2 characters";
      } else if (skillsArray.length > 20) {
        newErrors.skills = "Maximum 20 skills allowed";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showAlert("Please fix the validation errors", "error");
      return;
    }
    setLoading(true);
    try {
      const skillsArray = job.skills.split(",").map((skill) => skill.trim()).filter((skill) => skill.length > 0);
      const jobData = {
        title: job.title.trim(),
        description: job.description.trim(),
        experience: job.experience.trim(),
        qualification: job.qualification.trim(),
        skills: skillsArray
      };
      const url = editingJob ? `/api/jobdata/${editingJob._id}` : "/api/jobdata";
      const method = editingJob ? "PUT" : "POST";
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jobData)
      });
      if (response.ok) {
        showAlert(editingJob ? "Job updated successfully!" : "Job created successfully!");
        resetForm();
        fetchJobs();
      } else {
        const errorData = await response.json();
        showAlert(errorData.error || "Failed to save job", "error");
      }
    } catch (error) {
      console.error("Error saving job:", error);
      showAlert("Error saving job", "error");
    } finally {
      setLoading(false);
    }
  };
  const handleEdit = (jobToEdit) => {
    setJob({
      title: jobToEdit.title,
      description: jobToEdit.description,
      experience: jobToEdit.experience,
      qualification: jobToEdit.qualification,
      skills: jobToEdit.skills.join(", ")
      // Convert array back to comma-separated string
    });
    setEditingJob(jobToEdit);
    setErrors({});
    setOpenModal(true);
  };
  const handleDelete = async () => {
    if (!jobToDelete) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/jobdata/${jobToDelete._id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        showAlert("Job deleted successfully!");
        fetchJobs();
      } else {
        const errorData = await response.json();
        showAlert(errorData.error || "Failed to delete job", "error");
      }
    } catch (error) {
      console.error("Error deleting job:", error);
      showAlert("Error deleting job", "error");
    } finally {
      setLoading(false);
      setOpenDeleteDialog(false);
      setJobToDelete(null);
    }
  };
  const resetForm = () => {
    setJob({
      title: "",
      description: "",
      experience: "",
      qualification: "",
      skills: ""
    });
    setEditingJob(null);
    setErrors({});
    setOpenModal(false);
  };
  const openDeleteConfirmation = (job2) => {
    setJobToDelete(job2);
    setOpenDeleteDialog(true);
  };
  const handleOpenModal = () => {
    setErrors({});
    setOpenModal(true);
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx(Dashboard, {}),
    /* @__PURE__ */ jsx("div", { className: "col-10", children: /* @__PURE__ */ jsxs(Box, { sx: { maxWidth: "1200px", mx: "auto", p: 4 }, children: [
      /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "flex-start", mb: 3 }, children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "contained",
          onClick: handleOpenModal,
          disabled: loading,
          size: "large",
          sx: { px: 4 },
          children: "Add New Job"
        }
      ) }),
      /* @__PURE__ */ jsxs(
        Dialog,
        {
          open: openModal,
          onClose: resetForm,
          maxWidth: "md",
          fullWidth: true,
          PaperProps: {
            sx: { borderRadius: 3 }
          },
          children: [
            /* @__PURE__ */ jsx(DialogTitle, { sx: { pb: 1 }, children: /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ jsx(Typography, { variant: "h5", component: "div", children: editingJob ? "Edit Job" : "Add New Job" }),
              /* @__PURE__ */ jsx(IconButton, { onClick: resetForm, disabled: loading, children: /* @__PURE__ */ jsx(CloseIcon, {}) })
            ] }) }),
            /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsx(Box, { component: "form", onSubmit: handleSubmit, sx: { mt: 1 }, children: /* @__PURE__ */ jsxs(Stack, { spacing: 3, children: [
              /* @__PURE__ */ jsx(
                TextField,
                {
                  label: "Job Title",
                  name: "title",
                  fullWidth: true,
                  required: true,
                  value: job.title,
                  onChange: handleChange,
                  error: !!errors.title,
                  helperText: errors.title,
                  placeholder: "e.g. Senior Software Engineer"
                }
              ),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  label: "Job Description",
                  name: "description",
                  multiline: true,
                  rows: 4,
                  fullWidth: true,
                  required: true,
                  value: job.description,
                  onChange: handleChange,
                  error: !!errors.description,
                  helperText: errors.description,
                  placeholder: "Describe the role, responsibilities, and requirements..."
                }
              ),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  label: "Experience Required",
                  name: "experience",
                  fullWidth: true,
                  required: true,
                  value: job.experience,
                  onChange: handleChange,
                  error: !!errors.experience,
                  helperText: errors.experience,
                  placeholder: "e.g. 3-5 years, Fresh Graduate, 2+ years"
                }
              ),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  label: "Qualification",
                  name: "qualification",
                  fullWidth: true,
                  required: true,
                  value: job.qualification,
                  onChange: handleChange,
                  error: !!errors.qualification,
                  helperText: errors.qualification,
                  placeholder: "e.g. Bachelor's in Computer Science, MBA, etc."
                }
              ),
              /* @__PURE__ */ jsxs(Box, { children: [
                /* @__PURE__ */ jsx(
                  TextField,
                  {
                    label: "Skills",
                    name: "skills",
                    multiline: true,
                    rows: 3,
                    fullWidth: true,
                    required: true,
                    value: job.skills,
                    onChange: handleChange,
                    error: !!errors.skills,
                    placeholder: "e.g. JavaScript, React, Node.js, MongoDB, Python"
                  }
                ),
                errors.skills ? /* @__PURE__ */ jsx(FormHelperText, { error: true, children: errors.skills }) : /* @__PURE__ */ jsx(FormHelperText, { children: "Enter skills separated by commas (max 20 skills)" })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsxs(DialogActions, { sx: { px: 3, pb: 3 }, children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: resetForm,
                  variant: "outlined",
                  disabled: loading,
                  size: "large",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: handleSubmit,
                  variant: "contained",
                  disabled: loading,
                  size: "large",
                  sx: { px: 4 },
                  children: loading ? "Saving..." : editingJob ? "Update Job" : "Create Job"
                }
              )
            ] })
          ]
        }
      ),
      jobs.length > 0 && /* @__PURE__ */ jsxs(Box, { children: [
        /* @__PURE__ */ jsxs(Typography, { variant: "h5", mb: 2, children: [
          "Job Listings (",
          jobs.length,
          ")"
        ] }),
        /* @__PURE__ */ jsx(TableContainer, { component: Paper, sx: { borderRadius: 2 }, children: /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHead, { sx: { backgroundColor: "#1976d2" }, children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { sx: { color: "white", fontWeight: "bold" }, children: "Job Title" }),
            /* @__PURE__ */ jsx(TableCell, { sx: { color: "white", fontWeight: "bold" }, children: "Description" }),
            /* @__PURE__ */ jsx(TableCell, { sx: { color: "white", fontWeight: "bold" }, children: "Experience" }),
            /* @__PURE__ */ jsx(TableCell, { sx: { color: "white", fontWeight: "bold" }, children: "Qualification" }),
            /* @__PURE__ */ jsx(TableCell, { sx: { color: "white", fontWeight: "bold" }, children: "Skills" }),
            /* @__PURE__ */ jsx(TableCell, { sx: { color: "white", fontWeight: "bold", textAlign: "center" }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx(TableBody, { children: jobs.map((jobItem, index) => /* @__PURE__ */ jsxs(TableRow, { hover: true, children: [
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", fontWeight: 500, children: jobItem.title }) }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
              Typography,
              {
                variant: "body2",
                sx: {
                  maxWidth: 200,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical"
                },
                children: jobItem.description
              }
            ) }),
            /* @__PURE__ */ jsx(TableCell, { children: jobItem.experience }),
            /* @__PURE__ */ jsx(TableCell, { children: jobItem.qualification }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(Stack, { direction: "row", spacing: 0.5, flexWrap: "wrap", sx: { maxWidth: 200 }, children: [
              jobItem.skills && jobItem.skills.slice(0, 3).map((skill, idx) => /* @__PURE__ */ jsx(
                Chip,
                {
                  label: skill,
                  size: "small",
                  sx: { mb: 0.5, fontSize: "0.75rem" }
                },
                idx
              )),
              jobItem.skills && jobItem.skills.length > 3 && /* @__PURE__ */ jsx(
                Chip,
                {
                  label: `+${jobItem.skills.length - 3} more`,
                  size: "small",
                  variant: "outlined",
                  sx: { mb: 0.5, fontSize: "0.75rem" }
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(Stack, { direction: "row", spacing: 1, justifyContent: "center", children: [
              /* @__PURE__ */ jsx(
                IconButton,
                {
                  color: "primary",
                  onClick: () => handleEdit(jobItem),
                  disabled: loading,
                  size: "small",
                  title: "Edit Job",
                  children: /* @__PURE__ */ jsx(EditIcon, { fontSize: "small" })
                }
              ),
              /* @__PURE__ */ jsx(
                IconButton,
                {
                  color: "error",
                  onClick: () => openDeleteConfirmation(jobItem),
                  disabled: loading,
                  size: "small",
                  title: "Delete Job",
                  children: /* @__PURE__ */ jsx(DeleteIcon, { fontSize: "small" })
                }
              )
            ] }) })
          ] }, jobItem._id || index)) })
        ] }) })
      ] }),
      jobs.length === 0 && !loading && /* @__PURE__ */ jsxs(Paper, { sx: { p: 4, textAlign: "center", borderRadius: 2 }, children: [
        /* @__PURE__ */ jsx(Typography, { variant: "h6", color: "text.secondary", gutterBottom: true, children: "No jobs found" }),
        /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.secondary", children: "Create your first job posting to get started!" })
      ] }),
      /* @__PURE__ */ jsxs(Dialog, { open: openDeleteDialog, onClose: () => setOpenDeleteDialog(false), children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: /* @__PURE__ */ jsx(Typography, { variant: "h6", color: "error", children: "Confirm Delete" }) }),
        /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsxs(Typography, { children: [
          "Are you sure you want to delete the job ",
          /* @__PURE__ */ jsxs("strong", { children: [
            '"',
            jobToDelete?.title,
            '"'
          ] }),
          "?",
          /* @__PURE__ */ jsx("br", {}),
          "This action cannot be undone."
        ] }) }),
        /* @__PURE__ */ jsxs(DialogActions, { children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => setOpenDeleteDialog(false),
              disabled: loading,
              variant: "outlined",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleDelete,
              color: "error",
              disabled: loading,
              variant: "contained",
              children: loading ? "Deleting..." : "Delete"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        Snackbar,
        {
          open: alert2.open,
          autoHideDuration: 4e3,
          onClose: () => setAlert({ ...alert2, open: false }),
          anchorOrigin: { vertical: "top", horizontal: "right" },
          children: /* @__PURE__ */ jsx(
            Alert,
            {
              onClose: () => setAlert({ ...alert2, open: false }),
              severity: alert2.severity,
              sx: { width: "100%" },
              children: alert2.message
            }
          )
        }
      )
    ] }) })
  ] }) });
};
function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    collegeName: "",
    fatherName: "",
    course: "",
    certificateType: "",
    yop: "",
    from: "",
    to: "",
    softwareCovered: "",
    regNo: "",
    gender: ""
    // Adding gender field
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/addCourseStudent", formData);
      console.log("Data added successfully");
      setFormData({
        name: "",
        age: "",
        collegeName: "",
        fatherName: "",
        course: "",
        certificateType: "",
        yop: "",
        from: "",
        to: "",
        softwareCovered: "",
        regNo: "",
        gender: ""
        // Reset gender field
      });
      toast.success("Student data added successfully!");
      window.alert("Student data added successfully!");
    } catch (error) {
      console.error("Error adding data:", error.message);
    }
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx(Dashboard, {}),
    /* @__PURE__ */ jsx("div", { className: "col-10", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: "Add Student Data" }),
      /* @__PURE__ */ jsx(ToastContainer, {}),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "input-container", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "name", children: "Name:" }),
          /* @__PURE__ */ jsx("input", { type: "text", id: "name", value: formData.name, onChange: handleChange, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "input-container", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "collegeName", children: "College Name:" }),
          /* @__PURE__ */ jsx("input", { type: "text", id: "collegeName", value: formData.collegeName, onChange: handleChange, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "input-container", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "course", children: "Qualification:" }),
          /* @__PURE__ */ jsx("input", { type: "text", id: "course", value: formData.course, onChange: handleChange, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "input-container", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "yop", children: "Year of Passing:" }),
          /* @__PURE__ */ jsx("input", { type: "number", id: "yop", value: formData.yop, onChange: handleChange, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "input-container", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "fromD", children: "From Date:" }),
          /* @__PURE__ */ jsx("input", { type: "text", id: "from", placeholder: "e.g., 01 June 2022", value: formData.from, onChange: handleChange, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "input-container", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "toD", children: "To Date:" }),
          /* @__PURE__ */ jsx("input", { type: "text", id: "to", placeholder: "e.g., 30 June 2022", value: formData.to, onChange: handleChange, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "input-container", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "softwareCovered", children: "Software Covered:" }),
          /* @__PURE__ */ jsx("input", { type: "text", id: "softwareCovered", value: formData.softwareCovered, onChange: handleChange, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "input-container", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "regNo", children: "Registration Number:" }),
          /* @__PURE__ */ jsx("input", { type: "text", id: "regNo", value: formData.regNo, onChange: handleChange, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "input-container", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "gender", children: "Gender:" }),
          /* @__PURE__ */ jsxs("select", { id: "gender", value: formData.gender, onChange: handleChange, required: true, children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select Gender" }),
            /* @__PURE__ */ jsx("option", { value: "Male", children: "Male" }),
            /* @__PURE__ */ jsx("option", { value: "Female", children: "Female" }),
            /* @__PURE__ */ jsx("option", { value: "Other", children: "Other" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "input-container", children: /* @__PURE__ */ jsx("button", { type: "submit", children: "Submit" }) })
      ] }),
      /* @__PURE__ */ jsx(ToastContainer, {})
    ] }) })
  ] }) });
}
const NunitoBold = "/assets/NotoSansBold-CTHeVQvw.ttf";
function Studentcertificate({ students }) {
  const [courseStudents, setCourseStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDateMap, setSelectedDateMap] = useState({});
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedYOP, setSelectedYOP] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [courses, setCourses] = useState([]);
  const [years, setYears] = useState([]);
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/courseStudents");
        setCourseStudents(response.data);
        setLoading(false);
        const uniqueCourses = [...new Set(response.data.map((student) => student.course))];
        const uniqueYears = [...new Set(response.data.map((student) => student.yop))];
        const uniqueColleges = [...new Set(response.data.map((student) => student.collegeName))];
        setCourses(uniqueCourses);
        setYears(uniqueYears);
        setColleges(uniqueColleges);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  const filteredStudents = courseStudents.filter(
    (student) => (selectedCourse ? student.course === selectedCourse : true) && (selectedYOP ? student.yop === selectedYOP : true) && (selectedCollege ? student.collegeName === selectedCollege : true)
  );
  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };
  const handleYOPChange = (e) => {
    setSelectedYOP(e.target.value);
  };
  const handleCollegeChange = (e) => {
    setSelectedCollege(e.target.value);
  };
  const splitTextIntoLines = (text, maxWidth, font, fontSize) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const testLine = currentLine + " " + word;
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };
  const downloadCertificate = async (student) => {
    const { name, fatherName, course, softwareCovered, regNo, collegeName, from, to, gender } = student;
    const selectedDate = selectedDateMap[name] || "";
    if (!selectedDate) {
      alert("Please select a date before downloading the certificate.");
      return;
    }
    try {
      const existingPdfBytes = await fetch("/cert30.pdf").then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      pdfDoc.registerFontkit(fontkit);
      const fontBytes = await fetch(NunitoBold).then((res) => res.arrayBuffer());
      const customFont = await pdfDoc.embedFont(fontBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const fontBytesStudentName = await fetch(NunitoBold).then((res) => res.arrayBuffer());
      const customFontStudentName = await pdfDoc.embedFont(fontBytesStudentName);
      const upperCaseStudentName = name ? name.toUpperCase() : "";
      const upperCasecollegeName = collegeName ? collegeName.toUpperCase() : "";
      const upperCaseSoftwareCovered = softwareCovered ? softwareCovered.toUpperCase() : "";
      let title, pronoun, pronoun1, middleText, conclusionText;
      if (gender === "Male") {
        title = "Mr.";
        pronoun = "him";
        pronoun1 = "his";
        middleText = ` bearing Registration Number: ${regNo}, a student of ${upperCasecollegeName}, has successfully completed an internship course from ${from} to ${to} at EXCERPT TECHNOLOGIES PVT LTD. During his internship, `;
        conclusionText = `${pronoun.charAt(0).toUpperCase()}${pronoun1.slice(1)} conduct during ${pronoun1} stay with us was satisfactory. We wish ${pronoun} all the best for ${pronoun1} future endeavors.`;
      } else if (gender === "Female") {
        title = "Ms.";
        pronoun = "her";
        middleText = ` bearing Registration Number: ${regNo}, a student of ${upperCasecollegeName}, has successfully completed an internship course from ${from} to ${to} at EXCERPT TECHNOLOGIES PVT LTD. During her internship, `;
        conclusionText = `${pronoun.charAt(0).toUpperCase()}${pronoun.slice(1)} conduct during ${pronoun} stay with us was satisfactory. We wish ${pronoun} all the best for ${pronoun} future endeavors.`;
      } else {
        console.error("Invalid gender:", gender);
        return;
      }
      const introText = `This is to certify that `;
      const nameText = `${title} ${upperCaseStudentName}`;
      const endingText = ` worked as an Intern in "${softwareCovered}" and gained experience in the following areas:`;
      const maxWidth = 460;
      const fontSize = 12;
      const lineHeight = 23;
      const lineGap = 5;
      let yPos = firstPage.getHeight() - 300;
      const drawTextWithHighlight = (text, isHighlighted, isBold, x, y) => {
        const color = isHighlighted ? rgb(1, 1, 1) : rgb(0, 0, 0);
        const fontWeight = isBold ? "bold" : "normal";
        const parts = text.split(/(Mr\.|Miss\.)/);
        let currentX2 = x;
        parts.forEach((part) => {
          const width = customFont.widthOfTextAtSize(part, fontSize);
          firstPage.drawText(part, {
            x: currentX2,
            y,
            size: fontSize,
            font: customFont,
            color,
            fontWeight
            // Apply bold font weight if necessary
          });
          currentX2 += width;
        });
      };
      let lines = splitTextIntoLines(introText + nameText + middleText + nameText + endingText, maxWidth, customFont, fontSize);
      let currentX = 70;
      let currentY = yPos;
      lines.forEach((line, index) => {
        drawTextWithHighlight(line, false, true, currentX, currentY - index * (lineHeight + lineGap));
      });
      currentY -= lines.length * (lineHeight + lineGap) + lineGap;
      const bulletPointLines = [
        "• Research and analysis",
        "• Writing Code",
        "• Preparing Documentation"
      ];
      bulletPointLines.forEach((line, index) => {
        firstPage.drawText(line, {
          x: 70,
          y: currentY - index * (lineHeight + lineGap),
          size: fontSize,
          font: customFont,
          color: rgb(0, 0, 0)
        });
      });
      currentY -= bulletPointLines.length * (lineHeight + lineGap) + lineGap;
      const conclusionLines = splitTextIntoLines(conclusionText, maxWidth, customFont, fontSize);
      conclusionLines.forEach((line, index) => {
        firstPage.drawText(line, {
          x: 70,
          y: currentY - index * (lineHeight + lineGap),
          size: fontSize,
          font: customFont,
          color: rgb(0, 0, 0)
        });
      });
      const qrCodeData = `https://www.excerptech.com/certificate1.html?REG_NO=${regNo}`;
      const qrCodeDataURL = await QRCode.toDataURL(qrCodeData);
      const base64Data = qrCodeDataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
      const qrCodeImage = await pdfDoc.embedPng(base64Data);
      const qrCodeWidth = 80;
      const qrCodeHeight = 80;
      firstPage.drawImage(qrCodeImage, {
        x: 65,
        y: 80,
        width: qrCodeWidth,
        height: qrCodeHeight
      });
      const modifiedPdfBytes = await pdfDoc.save();
      const blob = new Blob([modifiedPdfBytes], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Certificate_${name}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating certificate:", error.message);
    }
  };
  const handleDateChange = (e, studentName) => {
    const { value } = e.target;
    setSelectedDateMap((prevState) => ({
      ...prevState,
      [studentName]: value
    }));
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx(Dashboard, {}),
    /* @__PURE__ */ jsx("div", { className: "col-10", children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "filter-container", style: { display: "flex" }, children: [
        /* @__PURE__ */ jsxs("div", { className: "filter", children: [
          /* @__PURE__ */ jsx("label", { children: "Courses:" }),
          /* @__PURE__ */ jsxs("select", { value: selectedCourse, onChange: handleCourseChange, children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "All Courses" }),
            courses.map((course, index) => /* @__PURE__ */ jsx("option", { value: course, children: course }, index))
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "filter", children: [
          /* @__PURE__ */ jsx("label", { children: "Year of Passing:" }),
          /* @__PURE__ */ jsxs("select", { value: selectedYOP, onChange: handleYOPChange, children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "All Years" }),
            years.map((year, index) => /* @__PURE__ */ jsx("option", { value: year, children: year }, index))
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "filter", children: [
          /* @__PURE__ */ jsx("label", { children: "College Name:" }),
          /* @__PURE__ */ jsxs("select", { value: selectedCollege, onChange: handleCollegeChange, children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "All Colleges" }),
            colleges.map((college, index) => /* @__PURE__ */ jsx("option", { value: college, children: college }, index))
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "card-container", children: filteredStudents.map((student, index) => /* @__PURE__ */ jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `/${student.regNo}.png`,
              alt: `Image of ${student.name}`,
              style: { width: "100px", height: "100px", borderRadius: "50%" }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "info-container", children: [
            /* @__PURE__ */ jsx("div", { className: "label", children: "Name:" }),
            /* @__PURE__ */ jsx("h3", { children: student.name.toUpperCase() }),
            /* @__PURE__ */ jsx("div", { className: "label", children: "Course:" }),
            /* @__PURE__ */ jsx("p", { children: student.course }),
            /* @__PURE__ */ jsx("div", { className: "label", children: "Year of Passing:" }),
            /* @__PURE__ */ jsx("p", { children: student.yop }),
            /* @__PURE__ */ jsx("div", { className: "label", children: "Software Covered:" }),
            /* @__PURE__ */ jsx("p", { children: student.softwareCovered }),
            /* @__PURE__ */ jsx("div", { className: "label", children: "regNo:" }),
            /* @__PURE__ */ jsx("p", { children: student.regNo }),
            /* @__PURE__ */ jsx("div", { className: "label", children: "College Name:" }),
            /* @__PURE__ */ jsx("p", { children: student.collegeName }),
            /* @__PURE__ */ jsx("div", { className: "label", children: "From Date:" }),
            /* @__PURE__ */ jsx("p", { children: student.from }),
            /* @__PURE__ */ jsx("div", { className: "label", children: "To Date:" }),
            /* @__PURE__ */ jsx("p", { children: student.to })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "button-container", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "date",
              value: selectedDateMap[student.name] || "",
              onChange: (e) => handleDateChange(e, student.name)
            }
          ),
          /* @__PURE__ */ jsx("a", { href: `https://excerptech.com/certificate1.html?REG_NO=${student.regNo}`, target: "_blank", rel: "noopener noreferrer", children: "View Certificate" })
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => downloadCertificate(student), children: "Download Certificate" })
      ] }, index)) })
    ] }) })
  ] }) });
}
const Internregistrationform = () => {
  const [formData, setFormData] = useState({
    NAME: "",
    GENDER: "",
    FATHER_NAME: "",
    REG_NO: "",
    PHOTO: "",
    college_id: "",
    Course_id: "",
    Certificate_Type_id: "",
    Course_Certificate_Type_id: "",
    yop: "",
    Role: "",
    From: "",
    To: "",
    qualification: "",
    department: ""
  });
  const [colleges, setColleges] = useState([]);
  const [courses, setCourses] = useState([]);
  const [certificateTypes, setCertificateTypes] = useState([]);
  const qualifications = ["BE", "Diploma"];
  const genders = ["MALE", "FEMALE", "OTHER"];
  const Course_Certificate_Type_id = [301, 302];
  const courseCertificateOptions = {
    301: "Internship",
    302: "Project"
  };
  useEffect(() => {
    fetchLookupData();
  }, []);
  const fetchLookupData = async () => {
    try {
      const [collegesRes, coursesRes, certificateTypesRes] = await Promise.all([
        fetch("/api/colleges"),
        fetch("/api/courses"),
        fetch("/api/certificateTypes")
      ]);
      const collegesData = await collegesRes.json();
      const coursesData = await coursesRes.json();
      const certificateTypesData = await certificateTypesRes.json();
      setColleges(collegesData);
      setCourses(coursesData);
      setCertificateTypes(certificateTypesData);
    } catch (error) {
      toast.error("Error fetching lookup data");
      console.error("Fetch error:", error);
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleCollegeChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    if (selectedIndex === 0) {
      setFormData((prev) => ({ ...prev, college_id: "" }));
      return;
    }
    const selectedCollege = colleges[selectedIndex - 1];
    setFormData((prev) => ({ ...prev, college_id: selectedCollege._id }));
  };
  const handleCourseChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    if (selectedIndex === 0) {
      setFormData((prev) => ({ ...prev, Course_id: "" }));
      return;
    }
    const selectedCourse = courses[selectedIndex - 1];
    setFormData((prev) => ({ ...prev, Course_id: selectedCourse.courseId }));
  };
  const handleCertificateTypeChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    if (selectedIndex === 0) {
      setFormData((prev) => ({ ...prev, Certificate_Type_id: "" }));
      return;
    }
    const selectedCertType = certificateTypes[selectedIndex - 1];
    setFormData((prev) => ({ ...prev, Certificate_Type_id: selectedCertType.Certificate_Type_id }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/interns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast.success("Intern data added successfully!");
        resetForm();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add intern");
      }
    } catch (error) {
      toast.error("Error submitting form: " + error.message);
    }
  };
  const resetForm = () => {
    setFormData({
      NAME: "",
      GENDER: "",
      FATHER_NAME: "",
      REG_NO: "",
      PHOTO: "",
      Course_Certificate_Type_id: "",
      college_id: "",
      Course_id: "",
      Certificate_Type_id: "",
      yop: "",
      Role: "",
      From: "",
      To: "",
      qualification: "",
      department: ""
    });
  };
  const styles2 = {
    formContainer: {
      padding: "2rem",
      maxWidth: "900px",
      margin: "0 auto",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      fontFamily: "system-ui, -apple-system, sans-serif"
    },
    formTitle: {
      fontSize: "1.75rem",
      fontWeight: "700",
      marginBottom: "1.5rem",
      textAlign: "center",
      color: "#1f2937"
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "1rem",
      marginBottom: "1rem"
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "1rem"
    },
    label: {
      marginBottom: "0.5rem",
      fontWeight: "500",
      color: "#374151"
    },
    input: {
      padding: "0.75rem",
      border: "1px solid #d1d5db",
      borderRadius: "0.375rem",
      fontSize: "1rem",
      transition: "border-color 0.2s, box-shadow 0.2s",
      outline: "none"
    },
    select: {
      padding: "0.75rem",
      border: "1px solid #d1d5db",
      borderRadius: "0.375rem",
      backgroundColor: "#ffffff",
      color: "#000000",
      fontSize: "1rem",
      appearance: "none",
      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236b7280'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
      backgroundPosition: "right 0.5rem center",
      backgroundSize: "1.5em 1.5em",
      backgroundRepeat: "no-repeat",
      paddingRight: "2.5rem",
      outline: "none"
    },
    submitButton: {
      width: "100%",
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      padding: "0.75rem 1rem",
      borderRadius: "0.375rem",
      fontWeight: "500",
      fontSize: "1rem",
      cursor: "pointer",
      border: "none",
      transition: "background-color 0.2s",
      marginTop: "1.5rem"
    }
  };
  const getFocusStyles = (e) => {
    e.target.style.borderColor = "#3b82f6";
    e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.25)";
  };
  const getBlurStyles = (e) => {
    e.target.style.borderColor = "#d1d5db";
    e.target.style.boxShadow = "none";
  };
  const getHoverButtonStyle = (e) => {
    e.target.style.backgroundColor = "#2563eb";
  };
  const getDefaultButtonStyle = (e) => {
    e.target.style.backgroundColor = "#3b82f6";
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
    /* @__PURE__ */ jsx(Dashboard, {}),
    /* @__PURE__ */ jsx("div", { className: "col-10", children: /* @__PURE__ */ jsxs("div", { style: styles2.formContainer, children: [
      /* @__PURE__ */ jsx("h2", { style: styles2.formTitle, children: "Intern Registration Form" }),
      /* @__PURE__ */ jsx(ToastContainer, {}),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsxs("div", { style: styles2.formGrid, children: [
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "NAME", style: styles2.label, children: "Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "NAME",
                value: formData.NAME,
                onChange: handleChange,
                required: true,
                style: styles2.input,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "FATHER_NAME", style: styles2.label, children: "Father Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "FATHER_NAME",
                value: formData.FATHER_NAME,
                onChange: handleChange,
                required: true,
                style: styles2.input,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: styles2.formGrid, children: [
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "department", style: styles2.label, children: "Department" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "department",
                value: formData.department,
                onChange: handleChange,
                required: true,
                style: styles2.input,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "REG_NO", style: styles2.label, children: "Registration No" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "REG_NO",
                value: formData.REG_NO,
                onChange: handleChange,
                required: true,
                style: styles2.input,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: styles2.formGrid, children: [
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "Role", style: styles2.label, children: "Role" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "Role",
                value: formData.Role,
                onChange: handleChange,
                required: true,
                style: styles2.input,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "yop", style: styles2.label, children: "Year of Passing" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "yop",
                value: formData.yop,
                onChange: handleChange,
                required: true,
                style: styles2.input,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: styles2.formGrid, children: [
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "GENDER", style: styles2.label, children: "Gender" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "GENDER",
                value: formData.GENDER,
                onChange: handleChange,
                required: true,
                style: styles2.select,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select Gender" }),
                  genders.map((gender, index) => /* @__PURE__ */ jsx("option", { value: gender, children: gender }, index))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "Course_Certificate_Type_id", style: styles2.label, children: "Course Certificate Type" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "Course_Certificate_Type_id",
                value: formData.Course_Certificate_Type_id,
                onChange: handleChange,
                required: true,
                style: styles2.select,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select Course Certificate Type" }),
                  Course_Certificate_Type_id.map((type) => /* @__PURE__ */ jsx("option", { value: type, children: courseCertificateOptions[type] || "Unknown Certificate" }, type))
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: styles2.formGrid, children: [
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "qualification", style: styles2.label, children: "Qualification" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "qualification",
                value: formData.qualification,
                onChange: handleChange,
                required: true,
                style: styles2.select,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select Qualification" }),
                  qualifications.map((qual, index) => /* @__PURE__ */ jsx("option", { value: qual, children: qual }, index))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "college_select", style: styles2.label, children: "College" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "college_select",
                onChange: handleCollegeChange,
                required: true,
                style: styles2.select,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select College" }),
                  colleges.map((college) => /* @__PURE__ */ jsx(
                    "option",
                    {
                      value: college._id,
                      children: college.name || "College Name Missing"
                    },
                    college._id
                  ))
                ]
              }
            ),
            /* @__PURE__ */ jsx("input", { type: "hidden", id: "college_id", value: formData.college_id })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: styles2.formGrid, children: [
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "course_select", style: styles2.label, children: "Course" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "course_select",
                onChange: handleCourseChange,
                required: true,
                style: styles2.select,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select Course" }),
                  courses.map((course) => /* @__PURE__ */ jsx(
                    "option",
                    {
                      value: course.courseId || "",
                      children: course.courseName || course.name || course.CourseName || "Course Name Missing"
                    },
                    course.courseId || course._id
                  ))
                ]
              }
            ),
            /* @__PURE__ */ jsx("input", { type: "hidden", id: "Course_id", value: formData.Course_id })
          ] }),
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "certificate_select", style: styles2.label, children: "Certificate Type" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "certificate_select",
                onChange: handleCertificateTypeChange,
                required: true,
                style: styles2.select,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select Certificate Type" }),
                  certificateTypes.map((certType) => /* @__PURE__ */ jsx(
                    "option",
                    {
                      value: certType.Certificate_Type_id || certType.Course_Certificate_Type_id || "",
                      children: certType.Certificate_Name || certType.Certification_Name || "Certificate Type Missing"
                    },
                    certType._id
                  ))
                ]
              }
            ),
            /* @__PURE__ */ jsx("input", { type: "hidden", id: "Certificate_Type_id", value: formData.Certificate_Type_id })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: styles2.formGrid, children: [
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "From", style: styles2.label, children: "From Date" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "date",
                id: "From",
                value: formData.From,
                onChange: handleChange,
                required: true,
                style: styles2.input,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { style: styles2.inputGroup, children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "To", style: styles2.label, children: "To Date" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "date",
                id: "To",
                value: formData.To,
                onChange: handleChange,
                required: true,
                style: styles2.input,
                onFocus: getFocusStyles,
                onBlur: getBlurStyles
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            style: styles2.submitButton,
            onMouseOver: getHoverButtonStyle,
            onMouseOut: getDefaultButtonStyle,
            children: "Submit"
          }
        )
      ] })
    ] }) })
  ] }) });
};
function HomeCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);
  const cards = [
    {
      img: "brochure/ai_chatbot.webp",
      title: "AI Chatbot Services",
      link: "/webdesign"
    },
    {
      img: "brochure/crm.webp",
      title: "CRM Solutions",
      link: "/Crm"
    },
    {
      img: "brochure/digital.webp",
      title: "Digital Marketing",
      link: "/DigitalMarketing"
    },
    {
      img: "brochure/dyanamic.webp",
      title: "Dynamic Website",
      link: "/Dyanamicwebsite"
    },
    {
      img: "brochure/e-comm.webp",
      title: "E-commerce Solutions",
      link: "/Ecommerce"
    },
    {
      img: "brochure/e-learning.webp",
      title: "E-learning Solutions",
      link: "/Elearning"
    },
    {
      img: "brochure/erp.webp",
      title: "ERP Solutions",
      link: "/Erp"
    },
    {
      img: "brochure/geeky.webp",
      title: "WhatsApp Bulk Messaging",
      link: "/Geekychat"
    },
    {
      img: "brochure/lms-1.webp",
      title: "LMS Solutions",
      link: "/Lms"
    },
    {
      img: "brochure/powerbi.webp",
      title: "Power BI Solutions",
      link: "/Dataanalytics"
    },
    {
      img: "brochure/static_web.webp",
      title: "Static Website",
      link: "/Staticwebsite"
    },
    {
      img: "brochure/wt-ecom.webp",
      title: "WhatsApp E-commerce Solution",
      link: "/WhatsappEcommerce"
    }
  ];
  const totalCards = cards.length;
  const extendedCards = [...cards, ...cards];
  const autoSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(autoSlide, 3e3);
  };
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);
  useEffect(() => {
    if (currentIndex === totalCards) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => {
          setIsTransitioning(true);
          startAutoSlide();
        }, 50);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalCards]);
  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimeout(startAutoSlide, 3e3);
  };
  const handlePrev = () => {
    stopAutoSlide();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setIsTransitioning(false);
      setCurrentIndex(totalCards);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(totalCards - 1);
      }, 50);
    }
    setTimeout(startAutoSlide, 3e3);
  };
  const handleImageClick = (link) => {
    window.location.href = link;
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { style: { backgroundImage: `url(images/home1/exclusive-service/bg.webp)` }, className: "homecard-ex-service-cards", children: /* @__PURE__ */ jsx("section", { id: "service", className: "homecard-service", children: /* @__PURE__ */ jsxs("div", { className: "homecard-container", children: [
    /* @__PURE__ */ jsx("div", { className: "homecard-slider-container", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "homecard-slider-track",
        style: {
          transform: `translateX(-${currentIndex * 25}%)`,
          transition: isTransitioning ? "transform 0.8s ease-in-out" : "none"
        },
        children: extendedCards.map((card, i) => /* @__PURE__ */ jsx("div", { className: "homecard-card", children: /* @__PURE__ */ jsxs("div", { className: "homecard-service-card", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "homecard-card-image",
              onClick: () => handleImageClick(card.link),
              style: { cursor: "pointer" },
              children: /* @__PURE__ */ jsx("img", { src: card.img, alt: card.title })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "homecard-card-content", children: /* @__PURE__ */ jsx("h5", { children: card.title }) })
        ] }) }, i))
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "homecard-slider-controls", children: [
      /* @__PURE__ */ jsx("button", { className: "homecard-slider-button", onClick: handlePrev, children: /* @__PURE__ */ jsx(FaChevronLeft, {}) }),
      /* @__PURE__ */ jsx("button", { className: "homecard-slider-button", onClick: handleNext, children: /* @__PURE__ */ jsx(FaChevronRight, {}) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "homecard-space120" })
  ] }) }) }) });
}
function Homeabout() {
  const style = {};
  return /* @__PURE__ */ jsx("div", { className: "responsive_aboutus", style: { marginBottom: "15px" }, children: /* @__PURE__ */ jsx("section", { class: "about-area pb-150s tp-el-section", children: /* @__PURE__ */ jsx("div", { class: "container", style: { maxWidth: "1440px" }, children: /* @__PURE__ */ jsxs("div", { class: "row align-items-end", children: [
    /* @__PURE__ */ jsx("div", { class: "col-xl-6 col-lg-5", children: /* @__PURE__ */ jsxs(
      "div",
      {
        class: "tp-about-thumb wow fadeInRight",
        "data-wow-duration": ".8s",
        "data-wow-delay": ".4s",
        children: [
          /* @__PURE__ */ jsxs("div", { class: "tp-about-thumb-main overlay-anim w-img tp-thumb-common fix", children: [
            /* @__PURE__ */ jsx("div", { class: "tp-thumb-common-overlay wow" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                decoding: "async",
                src: "images/111.webp",
                width: "400px",
                height: "500px",
                alt: ""
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { class: "tp-about-thumb-shape", children: [
            /* @__PURE__ */ jsx("div", { class: "tp-about-thumb-shape-one", children: /* @__PURE__ */ jsxs("div", { class: "about-image-1 overlay-anim tp-thumb-common fix", children: [
              /* @__PURE__ */ jsx("div", { class: "tp-thumb-common-overlay wow" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  decoding: "async",
                  src: "images/ab2.webp",
                  width: "400px",
                  height: "400px",
                  alt: "",
                  marginTop: "60px"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx("div", { class: "tp-about-thumb-shape-two", children: /* @__PURE__ */ jsx(
              "img",
              {
                decoding: "async",
                src: "https://data.themeim.com/wp/tecz/wp-content/themes/tecz/assets/img/about/one/about-shape-1.webp",
                alt: ""
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { class: "tp-about-exprience d-none d-xl-block" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { class: "col-xl-6 col-lg-7", style: { marginTop: "40px" }, children: /* @__PURE__ */ jsx(
      "div",
      {
        class: "tp-about-wrap ml-20 wow fadeInLeft",
        "data-wow-duration": "1s",
        "data-wow-delay": ".4s",
        children: /* @__PURE__ */ jsxs("div", { class: "tp-section mb-25", children: [
          /* @__PURE__ */ jsxs("h1", { children: [
            /* @__PURE__ */ jsx("b", { children: "About us.." }),
            "."
          ] }),
          /* @__PURE__ */ jsxs("h2", { class: "tp-section-title", children: [
            /* @__PURE__ */ jsx("br", {}),
            " Smart Solution For Business"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "container", style: { marginLeft: "-17px" }, children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "tp-section-title-wrapper",
                style: { textAlign: "justify" },
                children: /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("b", { style: { fontSize: "17px" }, children: "Excerpt Technologies Private Limited" }),
                  " ",
                  /* @__PURE__ */ jsx("span", {}),
                  "we redefine the way businesses harness technology. Backed by a team of professionals with 20+ years of proven expertise in the software industry, we specialize in building solutions that are not only powerful but purpose-driven. Our portfolio spans across AI integrated ERP and CRM platforms, advanced E-Learning and LMS solutions, dynamic E-Commerce applications, interactive Power BI dashboards, AI-powered tools, and niche projects designed to simplify complex business challenges. Each solution is crafted with precision, blending innovation, usability, and scalability. What sets us apart is our ability to translate business needs into future-ready digital ecosystems that drive measurable impact. We don’t believe in one-size-fits-all; instead, we design tailored solutions that align with every client’s unique vision and goals."
                ] })
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "tp-section-title-wrapper",
                style: { textAlign: "justify" },
                children: [
                  /* @__PURE__ */ jsx("h6", { style }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    " ",
                    /* @__PURE__ */ jsx("b", { children: "Excerpt Technologies Private Limited " }),
                    " our mission is clear—to empower businesses with technology that works smarter, faster, and better. With integrity, innovation, and collaboration at our core, we build more than software—we build success stories.",
                    " "
                  ] })
                ]
              }
            )
          ] })
        ] })
      }
    ) })
  ] }) }) }) });
}
const Contact$1 = () => {
  const [status, setStatus] = useState("Submit");
  const [showPopup, setShowPopup] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(info);
    setStatus("Sending...");
    let response = await fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        //'Content-Type': 'application/json',
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(info)
      //body: JSON.stringify(details),
    });
    console.log(info);
    setStatus("Submit");
    setInfo({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2500);
    await response.json();
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { style: { marginTop: "0px" } }),
    /* @__PURE__ */ jsxs("section", { id: "home__Page--technology", className: "homeOne__technology", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          style: { backgroundImage: `url(images/home1/technology-expert-form/bg.webp)` },
          className: "technology_banner",
          height: "auto",
          width: "100%"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(
        "div",
        {
          style: { backgroundImage: `url(images/home1/technology-expert-form/bg2.webp)` },
          className: "contact_form",
          children: /* @__PURE__ */ jsxs("div", { className: "row ", children: [
            /* @__PURE__ */ jsx("div", { className: "col-lg-12 col-xl-5 ", children: /* @__PURE__ */ jsx("div", { className: "img_wrapper ", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "images/home1/technology-expert-form/1.webp ",
                alt: " ",
                className: "img-fluid ",
                height: "auto",
                width: "100%"
              }
            ) }) }),
            /* @__PURE__ */ jsxs("div", { className: "col-xl-7", children: [
              /* @__PURE__ */ jsx("div", { className: "heading-3 mb-20 ", children: "Contact Us..." }),
              /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
                /* @__PURE__ */ jsxs("div", { className: "row homecon", children: [
                  /* @__PURE__ */ jsx("div", { className: "col-sm-6 ", children: /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "name",
                      pattern: "[a-zA-Z\\s]+",
                      id: "name",
                      value: info.name,
                      onChange: handleChange,
                      placeholder: "Your Name",
                      required: true
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "col-sm-6", children: /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      name: "email",
                      pattern: "[^\\s@]+@[^\\s@]+\\.[^\\s@]+",
                      id: "email",
                      value: info.email,
                      onChange: handleChange,
                      placeholder: "Email Address",
                      required: true
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "row", style: { marginTop: "-1vh" }, children: [
                  /* @__PURE__ */ jsx("div", { className: "col-sm-6", children: /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "phone",
                      pattern: "\\d{10}",
                      title: "Please enter a valid phone number with an optional country code",
                      id: "phone",
                      value: info.phone,
                      onChange: handleChange,
                      placeholder: "91+",
                      required: true
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "col-sm-6", children: /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "subject",
                      id: "subject",
                      value: info.subject,
                      onChange: handleChange,
                      placeholder: "Your Subject",
                      required: true
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    name: "message",
                    id: "message",
                    placeholder: "Your Comment",
                    value: info.message,
                    required: true,
                    onChange: handleChange
                  }
                ),
                /* @__PURE__ */ jsx("button", { className: "button-primary-1 mt-25 ", children: /* @__PURE__ */ jsxs("span", { children: [
                  status,
                  " "
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "space120 " })
              ] })
            ] })
          ] })
        }
      ) })
    ] }),
    showPopup && /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              background: "#fff",
              padding: "40px 60px",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "600",
              color: "#333"
            },
            children: "Thank You For Submitting"
          }
        )
      }
    )
  ] });
};
function Project() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs("div", { style: {}, children: [
    /* @__PURE__ */ jsx("div", { className: "space90 " }),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: { backgroundImage: `url(images/home1/exclusive-service/bg.webp)` },
        className: "ex-service-cards",
        children: /* @__PURE__ */ jsxs("div", { id: "projects", className: "home__projects", children: [
          /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "section-heading d-flex flex-column align-items-center justify-content-center", children: /* @__PURE__ */ jsx("h1", { className: "heading-2", children: "Our Services" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "container", style: { marginTop: "20px", maxWidth: "1340px" }, children: /* @__PURE__ */ jsxs("div", { className: "project-slider row", children: [
            /* @__PURE__ */ jsx("div", { className: "col-lg-3 mb-4", children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "project-card position-relative",
                onClick: () => navigate("/webdesign"),
                style: { cursor: "pointer" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/home1/projects/2.webp", alt: "" }) }),
                  /* @__PURE__ */ jsx("div", { className: "info d-flex flex-column align-items-center justify-content-center", children: /* @__PURE__ */ jsx("h6", { className: "heading-6", style: { marginLeft: "70px" }, children: "Web Design & Development" }) })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "col-lg-3 mb-4", children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "project-card position-relative",
                onClick: () => navigate("/erp"),
                style: { cursor: "pointer" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "service/erp21.webp", alt: "" }) }),
                  /* @__PURE__ */ jsx("div", { className: "info d-flex flex-column align-items-center justify-content-center", children: /* @__PURE__ */ jsx("h6", { className: "heading-6", children: "ERP" }) })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "col-lg-3 mb-4", children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "project-card position-relative",
                onClick: () => navigate("/ecommerce"),
                style: { cursor: "pointer" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/home1/projects/e.jfif", alt: "" }) }),
                  /* @__PURE__ */ jsx("div", { className: "info d-flex flex-column align-items-center justify-content-center", children: /* @__PURE__ */ jsx("h6", { className: "heading-6", children: "Ecommerce Solutions" }) })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "col-lg-3 mb-4", children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "project-card position-relative",
                onClick: () => navigate("/lms"),
                style: { cursor: "pointer" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "service/lms.webp", alt: "" }) }),
                  /* @__PURE__ */ jsx("div", { className: "info d-flex flex-column align-items-center justify-content-center", children: /* @__PURE__ */ jsx("h6", { className: "heading-6", children: "LMS" }) })
                ]
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "container", style: { maxWidth: "1340px" }, children: /* @__PURE__ */ jsxs("div", { className: "project-slider row", children: [
            /* @__PURE__ */ jsx("div", { className: "col-lg-3 mb-4", children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "project-card position-relative",
                onClick: () => navigate("/DigitalMarketing"),
                style: { cursor: "pointer" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/home1/projects/5.webp", alt: "" }) }),
                  /* @__PURE__ */ jsx("div", { className: "info d-flex flex-column align-items-center justify-content-center", children: /* @__PURE__ */ jsx("h6", { className: "heading-6", children: "Digital Marketing" }) })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "col-lg-3 mb-4", children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "project-card position-relative",
                onClick: () => navigate("/CyberSecurity"),
                style: { cursor: "pointer" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/home1/projects/4.webp", alt: "" }) }),
                  /* @__PURE__ */ jsx("div", { className: "info d-flex flex-column align-items-center justify-content-center", children: /* @__PURE__ */ jsx("h6", { className: "heading-6", children: "Cyber Security" }) })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "col-lg-3 mb-4", children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "project-card position-relative",
                onClick: () => navigate("/Dataanalytics"),
                style: { cursor: "pointer" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/home1/projects/7.webp", alt: "" }) }),
                  /* @__PURE__ */ jsx("div", { className: "info d-flex flex-column align-items-center justify-content-center", children: /* @__PURE__ */ jsx("h6", { className: "heading-6", style: { marginLeft: "20px" }, children: "Data Analytics & Science" }) })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "col-lg-3 mb-4", children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "project-card position-relative",
                onClick: () => navigate("/Mobileapp"),
                style: { cursor: "pointer" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/home1/projects/3.webp", alt: "" }) }),
                  /* @__PURE__ */ jsx("div", { className: "info d-flex flex-column align-items-center justify-content-center", children: /* @__PURE__ */ jsx("h6", { className: "heading-6", style: { marginLeft: "70px" }, children: "Mobile App Development" }) })
                ]
              }
            ) })
          ] }) })
        ] })
      }
    )
  ] });
}
const preloadImage = (src, priority = false) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    if (priority) {
      img.loading = "eager";
    }
    img.src = src;
  });
};
const Slider$1 = React__default.memo(() => {
  const slides = useMemo(() => [
    {
      image: "images/home1/slider/s1.webp",
      caption: "Breaking Boundaries, One Innovation At a Time."
    },
    {
      image: "images/home1/slider/s2.webp",
      caption: "Where Ideas Ignite And Dreams Take Flight"
    },
    {
      image: "images/home1/slider/s3.webp",
      caption: "A Triumphant Three Years Of Software"
    },
    {
      image: "Trainingimage/sm.webp",
      caption: ""
    }
  ], []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageCache, setImageCache] = useState(/* @__PURE__ */ new Set());
  const [screenSize, setScreenSize] = useState(() => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1200;
    if (width <= 480) return "mobile";
    if (width <= 768) return "tablet";
    return "desktop";
  });
  const intervalRef = useRef(null);
  const resizeTimeoutRef = useRef(null);
  const updateScreenSize = useCallback(() => {
    const width = window.innerWidth;
    const newSize = width <= 480 ? "mobile" : width <= 768 ? "tablet" : "desktop";
    if (newSize !== screenSize) {
      setScreenSize(newSize);
    }
  }, [screenSize]);
  const getSlideHeightClass = useCallback(() => {
    switch (screenSize) {
      case "mobile":
        return "height-200";
      case "tablet":
        return "height-300";
      default:
        return "height-600";
    }
  }, [screenSize]);
  useEffect(() => {
    let isMounted = true;
    const loadImages = async () => {
      try {
        await preloadImage(slides[0].image, true);
        if (isMounted) {
          setIsLoaded(true);
          setImageCache((prev) => /* @__PURE__ */ new Set([...prev, slides[0].image]));
        }
        const nextImages = slides.slice(1, 3).map(
          (slide) => preloadImage(slide.image).then(() => {
            if (isMounted) {
              setImageCache((prev) => /* @__PURE__ */ new Set([...prev, slide.image]));
            }
          }).catch(() => {
          })
          // Silently handle errors
        );
        await Promise.allSettled(nextImages);
        const remainingImages = slides.slice(3).map(
          (slide) => preloadImage(slide.image).then(() => {
            if (isMounted) {
              setImageCache((prev) => /* @__PURE__ */ new Set([...prev, slide.image]));
            }
          }).catch(() => {
          })
          // Silently handle errors
        );
        Promise.allSettled(remainingImages);
      } catch (error) {
        console.warn("Failed to load initial image:", error);
        if (isMounted) {
          setIsLoaded(true);
        }
      }
    };
    loadImages();
    return () => {
      isMounted = false;
    };
  }, [slides]);
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        cancelAnimationFrame(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = requestAnimationFrame(updateScreenSize);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimeoutRef.current) {
        cancelAnimationFrame(resizeTimeoutRef.current);
      }
    };
  }, [updateScreenSize]);
  useEffect(() => {
    if (!isLoaded) return;
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4e3);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [slides.length, isLoaded]);
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (resizeTimeoutRef.current) cancelAnimationFrame(resizeTimeoutRef.current);
    };
  }, []);
  const LoadingSkeleton = useMemo(() => /* @__PURE__ */ jsx("div", { className: "slider-skeleton", children: /* @__PURE__ */ jsx("div", { className: `slide-skeleton ${getSlideHeightClass()}`, children: /* @__PURE__ */ jsxs("div", { className: "skeleton-content", children: [
    /* @__PURE__ */ jsx("div", { className: "skeleton-title" }),
    /* @__PURE__ */ jsx("div", { className: "skeleton-subtitle" }),
    /* @__PURE__ */ jsx("div", { className: "skeleton-button" })
  ] }) }) }), [getSlideHeightClass]);
  if (!isLoaded) {
    return LoadingSkeleton;
  }
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("section", { id: "hero", children: [
    /* @__PURE__ */ jsxs("div", { className: "hero-1-slide", children: [
      /* @__PURE__ */ jsx("div", { className: "slide-wrapper", children: slides.map((slide, index) => {
        const isActive = index === currentSlide;
        const isImageCached = imageCache.has(slide.image);
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: `slide-image slide-card ${getSlideHeightClass()}`,
            style: {
              backgroundImage: isImageCached ? `linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${slide.image})` : "linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55))",
              display: isActive ? "block" : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            },
            role: "img",
            "aria-label": slide.caption || "Slider image",
            children: isActive && /* @__PURE__ */ jsxs("div", { className: "slide__card--wrapper", children: [
              /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-25", style: { color: "white" }, children: slide.caption }),
              /* @__PURE__ */ jsx("h1", { children: "IT Solutions" }),
              /* @__PURE__ */ jsx("div", { className: "heading-7 mb-30", style: { color: "white" }, children: "Innovative Solutions, Seamless Experiences." }),
              slide.caption === "IT Corporate Training" ? /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/Excerptitservices",
                  className: "button-primary-1",
                  "aria-label": "Learn more about IT Corporate Training",
                  children: /* @__PURE__ */ jsx("span", { children: "Read More" })
                }
              ) : /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/portfolio",
                  className: "button-primary-1",
                  "aria-label": "View our portfolio",
                  children: /* @__PURE__ */ jsx("span", { children: "Read More" })
                }
              )
            ] })
          },
          index
        );
      }) }),
      /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx(
        "img",
        {
          className: "curve-overlay",
          style: { marginTop: "100px", height: "60px" },
          src: "images/home1/c1.webp",
          alt: "",
          loading: "lazy",
          decoding: "async",
          width: "auto",
          height: "60"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "overlay-wrapper", children: [
        /* @__PURE__ */ jsx("div", { className: "left-overlay" }),
        /* @__PURE__ */ jsx("div", { className: "right-overlay" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hero-contact d-flex", children: [
      /* @__PURE__ */ jsxs("ul", { className: "d-flex phone-email", children: [
        /* @__PURE__ */ jsxs("li", { className: "paragraph-3", children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-envelope", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsx("a", { href: "mailto:info@excerptech.com", "aria-label": "Email us", children: "info@excerptech.com" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "paragraph-3", children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-phone", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsx("a", { href: "tel:+916364657660", "aria-label": "Call us", children: "+91 63646 57660" })
        ] }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.facebook.com/Excerptechnology/",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Visit our Facebook page",
            children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-facebook-f" })
          }
        ) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.instagram.com/excerpt_technologies/?igsh=Z3k5OXozNDIzZHps",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Visit our Instagram page",
            children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-instagram", "aria-hidden": "true" })
          }
        ) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.linkedin.com/company/excerptech",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Visit our LinkedIn page",
            children: /* @__PURE__ */ jsx("i", { className: "fa-brands fa-linkedin-in", "aria-hidden": "true" })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "d-flex social" })
    ] })
  ] }) });
});
Slider$1.displayName = "Slider";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var lib = {};
var slider = {};
var innerSlider = {};
var initialState = {};
var hasRequiredInitialState;
function requireInitialState() {
  if (hasRequiredInitialState) return initialState;
  hasRequiredInitialState = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var initialState2 = {
      animating: false,
      autoplaying: null,
      currentDirection: 0,
      currentLeft: null,
      currentSlide: 0,
      direction: 1,
      dragging: false,
      edgeDragged: false,
      initialized: false,
      lazyLoadedList: [],
      listHeight: null,
      listWidth: null,
      scrolling: false,
      slideCount: null,
      slideHeight: null,
      slideWidth: null,
      swipeLeft: null,
      swiped: false,
      // used by swipeEvent. differentites between touch and swipe.
      swiping: false,
      touchObject: {
        startX: 0,
        startY: 0,
        curX: 0,
        curY: 0
      },
      trackStyle: {},
      trackWidth: 0,
      targetSlide: 0
    };
    exports["default"] = initialState2;
  })(initialState);
  return initialState;
}
var innerSliderUtils = {};
var defaultProps = {};
var hasRequiredDefaultProps;
function requireDefaultProps() {
  if (hasRequiredDefaultProps) return defaultProps;
  hasRequiredDefaultProps = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(React__default);
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { "default": e };
    }
    var defaultProps2 = {
      accessibility: true,
      adaptiveHeight: false,
      afterChange: null,
      appendDots: function appendDots(dots2) {
        return /* @__PURE__ */ _react["default"].createElement("ul", {
          style: {
            display: "block"
          }
        }, dots2);
      },
      arrows: true,
      autoplay: false,
      autoplaySpeed: 3e3,
      beforeChange: null,
      centerMode: false,
      centerPadding: "50px",
      className: "",
      cssEase: "ease",
      customPaging: function customPaging(i) {
        return /* @__PURE__ */ _react["default"].createElement("button", null, i + 1);
      },
      dots: false,
      dotsClass: "slick-dots",
      draggable: true,
      easing: "linear",
      edgeFriction: 0.35,
      fade: false,
      focusOnSelect: false,
      infinite: true,
      initialSlide: 0,
      lazyLoad: null,
      nextArrow: null,
      onEdge: null,
      onInit: null,
      onLazyLoadError: null,
      onReInit: null,
      pauseOnDotsHover: false,
      pauseOnFocus: false,
      pauseOnHover: true,
      prevArrow: null,
      responsive: null,
      rows: 1,
      rtl: false,
      slide: "div",
      slidesPerRow: 1,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
      swipe: true,
      swipeEvent: null,
      swipeToSlide: false,
      touchMove: true,
      touchThreshold: 5,
      useCSS: true,
      useTransform: true,
      variableWidth: false,
      vertical: false,
      verticalSwiping: false,
      waitForAnimate: true,
      asNavFor: null,
      unslick: false
    };
    exports["default"] = defaultProps2;
  })(defaultProps);
  return defaultProps;
}
var hasRequiredInnerSliderUtils;
function requireInnerSliderUtils() {
  if (hasRequiredInnerSliderUtils) return innerSliderUtils;
  hasRequiredInnerSliderUtils = 1;
  Object.defineProperty(innerSliderUtils, "__esModule", {
    value: true
  });
  innerSliderUtils.checkSpecKeys = innerSliderUtils.checkNavigable = innerSliderUtils.changeSlide = innerSliderUtils.canUseDOM = innerSliderUtils.canGoNext = void 0;
  innerSliderUtils.clamp = clamp;
  innerSliderUtils.extractObject = void 0;
  innerSliderUtils.filterSettings = filterSettings;
  innerSliderUtils.validSettings = innerSliderUtils.swipeStart = innerSliderUtils.swipeMove = innerSliderUtils.swipeEnd = innerSliderUtils.slidesOnRight = innerSliderUtils.slidesOnLeft = innerSliderUtils.slideHandler = innerSliderUtils.siblingDirection = innerSliderUtils.safePreventDefault = innerSliderUtils.lazyStartIndex = innerSliderUtils.lazySlidesOnRight = innerSliderUtils.lazySlidesOnLeft = innerSliderUtils.lazyEndIndex = innerSliderUtils.keyHandler = innerSliderUtils.initializedState = innerSliderUtils.getWidth = innerSliderUtils.getTrackLeft = innerSliderUtils.getTrackCSS = innerSliderUtils.getTrackAnimateCSS = innerSliderUtils.getTotalSlides = innerSliderUtils.getSwipeDirection = innerSliderUtils.getSlideCount = innerSliderUtils.getRequiredLazySlides = innerSliderUtils.getPreClones = innerSliderUtils.getPostClones = innerSliderUtils.getOnDemandLazySlides = innerSliderUtils.getNavigableIndexes = innerSliderUtils.getHeight = void 0;
  var _react = _interopRequireDefault(React__default);
  var _defaultProps = _interopRequireDefault(requireDefaultProps());
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { "default": e };
  }
  function _typeof2(o) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof2(o);
  }
  function ownKeys2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
        _defineProperty2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _defineProperty2(e, r, t) {
    return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
  }
  function _toPropertyKey2(t) {
    var i = _toPrimitive2(t, "string");
    return "symbol" == _typeof2(i) ? i : i + "";
  }
  function _toPrimitive2(t, r) {
    if ("object" != _typeof2(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != _typeof2(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function clamp(number, lowerBound, upperBound) {
    return Math.max(lowerBound, Math.min(number, upperBound));
  }
  var safePreventDefault = innerSliderUtils.safePreventDefault = function safePreventDefault2(event) {
    var passiveEvents = ["onTouchStart", "onTouchMove", "onWheel"];
    if (!passiveEvents.includes(event._reactName)) {
      event.preventDefault();
    }
  };
  var getOnDemandLazySlides = innerSliderUtils.getOnDemandLazySlides = function getOnDemandLazySlides2(spec) {
    var onDemandSlides = [];
    var startIndex = lazyStartIndex(spec);
    var endIndex = lazyEndIndex(spec);
    for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
      if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
        onDemandSlides.push(slideIndex);
      }
    }
    return onDemandSlides;
  };
  innerSliderUtils.getRequiredLazySlides = function getRequiredLazySlides(spec) {
    var requiredSlides = [];
    var startIndex = lazyStartIndex(spec);
    var endIndex = lazyEndIndex(spec);
    for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
      requiredSlides.push(slideIndex);
    }
    return requiredSlides;
  };
  var lazyStartIndex = innerSliderUtils.lazyStartIndex = function lazyStartIndex2(spec) {
    return spec.currentSlide - lazySlidesOnLeft(spec);
  };
  var lazyEndIndex = innerSliderUtils.lazyEndIndex = function lazyEndIndex2(spec) {
    return spec.currentSlide + lazySlidesOnRight(spec);
  };
  var lazySlidesOnLeft = innerSliderUtils.lazySlidesOnLeft = function lazySlidesOnLeft2(spec) {
    return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
  };
  var lazySlidesOnRight = innerSliderUtils.lazySlidesOnRight = function lazySlidesOnRight2(spec) {
    return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
  };
  var getWidth = innerSliderUtils.getWidth = function getWidth2(elem) {
    return elem && elem.offsetWidth || 0;
  };
  var getHeight = innerSliderUtils.getHeight = function getHeight2(elem) {
    return elem && elem.offsetHeight || 0;
  };
  var getSwipeDirection = innerSliderUtils.getSwipeDirection = function getSwipeDirection2(touchObject) {
    var verticalSwiping = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var xDist, yDist, r, swipeAngle;
    xDist = touchObject.startX - touchObject.curX;
    yDist = touchObject.startY - touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
      return "left";
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return "right";
    }
    if (verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return "up";
      } else {
        return "down";
      }
    }
    return "vertical";
  };
  var canGoNext = innerSliderUtils.canGoNext = function canGoNext2(spec) {
    var canGo = true;
    if (!spec.infinite) {
      if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
        canGo = false;
      } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
        canGo = false;
      }
    }
    return canGo;
  };
  innerSliderUtils.extractObject = function extractObject(spec, keys) {
    var newObject = {};
    keys.forEach(function(key) {
      return newObject[key] = spec[key];
    });
    return newObject;
  };
  innerSliderUtils.initializedState = function initializedState(spec) {
    var slideCount = _react["default"].Children.count(spec.children);
    var listNode = spec.listRef;
    var listWidth = Math.ceil(getWidth(listNode));
    var trackNode = spec.trackRef && spec.trackRef.node;
    var trackWidth = Math.ceil(getWidth(trackNode));
    var slideWidth;
    if (!spec.vertical) {
      var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
      if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
        centerPaddingAdj *= listWidth / 100;
      }
      slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
    } else {
      slideWidth = listWidth;
    }
    var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
    var listHeight = slideHeight * spec.slidesToShow;
    var currentSlide = spec.currentSlide === void 0 ? spec.initialSlide : spec.currentSlide;
    if (spec.rtl && spec.currentSlide === void 0) {
      currentSlide = slideCount - 1 - spec.initialSlide;
    }
    var lazyLoadedList = spec.lazyLoadedList || [];
    var slidesToLoad = getOnDemandLazySlides(_objectSpread2(_objectSpread2({}, spec), {}, {
      currentSlide,
      lazyLoadedList
    }));
    lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
    var state = {
      slideCount,
      slideWidth,
      listWidth,
      trackWidth,
      currentSlide,
      slideHeight,
      listHeight,
      lazyLoadedList
    };
    if (spec.autoplaying === null && spec.autoplay) {
      state["autoplaying"] = "playing";
    }
    return state;
  };
  innerSliderUtils.slideHandler = function slideHandler(spec) {
    var waitForAnimate = spec.waitForAnimate, animating = spec.animating, fade = spec.fade, infinite = spec.infinite, index = spec.index, slideCount = spec.slideCount, lazyLoad = spec.lazyLoad, currentSlide = spec.currentSlide, centerMode = spec.centerMode, slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, useCSS = spec.useCSS;
    var lazyLoadedList = spec.lazyLoadedList;
    if (waitForAnimate && animating) return {};
    var animationSlide = index, finalSlide, animationLeft, finalLeft;
    var state = {}, nextState = {};
    var targetSlide = infinite ? index : clamp(index, 0, slideCount - 1);
    if (fade) {
      if (!infinite && (index < 0 || index >= slideCount)) return {};
      if (index < 0) {
        animationSlide = index + slideCount;
      } else if (index >= slideCount) {
        animationSlide = index - slideCount;
      }
      if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
        lazyLoadedList = lazyLoadedList.concat(animationSlide);
      }
      state = {
        animating: true,
        currentSlide: animationSlide,
        lazyLoadedList,
        targetSlide: animationSlide
      };
      nextState = {
        animating: false,
        targetSlide: animationSlide
      };
    } else {
      finalSlide = animationSlide;
      if (animationSlide < 0) {
        finalSlide = animationSlide + slideCount;
        if (!infinite) finalSlide = 0;
        else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
      } else if (!canGoNext(spec) && animationSlide > currentSlide) {
        animationSlide = finalSlide = currentSlide;
      } else if (centerMode && animationSlide >= slideCount) {
        animationSlide = infinite ? slideCount : slideCount - 1;
        finalSlide = infinite ? 0 : slideCount - 1;
      } else if (animationSlide >= slideCount) {
        finalSlide = animationSlide - slideCount;
        if (!infinite) finalSlide = slideCount - slidesToShow;
        else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
      }
      if (!infinite && animationSlide + slidesToShow >= slideCount) {
        finalSlide = slideCount - slidesToShow;
      }
      animationLeft = getTrackLeft(_objectSpread2(_objectSpread2({}, spec), {}, {
        slideIndex: animationSlide
      }));
      finalLeft = getTrackLeft(_objectSpread2(_objectSpread2({}, spec), {}, {
        slideIndex: finalSlide
      }));
      if (!infinite) {
        if (animationLeft === finalLeft) animationSlide = finalSlide;
        animationLeft = finalLeft;
      }
      if (lazyLoad) {
        lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread2(_objectSpread2({}, spec), {}, {
          currentSlide: animationSlide
        })));
      }
      if (!useCSS) {
        state = {
          currentSlide: finalSlide,
          trackStyle: getTrackCSS(_objectSpread2(_objectSpread2({}, spec), {}, {
            left: finalLeft
          })),
          lazyLoadedList,
          targetSlide
        };
      } else {
        state = {
          animating: true,
          currentSlide: finalSlide,
          trackStyle: getTrackAnimateCSS(_objectSpread2(_objectSpread2({}, spec), {}, {
            left: animationLeft
          })),
          lazyLoadedList,
          targetSlide
        };
        nextState = {
          animating: false,
          currentSlide: finalSlide,
          trackStyle: getTrackCSS(_objectSpread2(_objectSpread2({}, spec), {}, {
            left: finalLeft
          })),
          swipeLeft: null,
          targetSlide
        };
      }
    }
    return {
      state,
      nextState
    };
  };
  innerSliderUtils.changeSlide = function changeSlide(spec, options) {
    var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
    var slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, slideCount = spec.slideCount, currentSlide = spec.currentSlide, previousTargetSlide = spec.targetSlide, lazyLoad = spec.lazyLoad, infinite = spec.infinite;
    unevenOffset = slideCount % slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
    if (options.message === "previous") {
      slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
      targetSlide = currentSlide - slideOffset;
      if (lazyLoad && !infinite) {
        previousInt = currentSlide - slideOffset;
        targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
      }
      if (!infinite) {
        targetSlide = previousTargetSlide - slidesToScroll;
      }
    } else if (options.message === "next") {
      slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
      targetSlide = currentSlide + slideOffset;
      if (lazyLoad && !infinite) {
        targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
      }
      if (!infinite) {
        targetSlide = previousTargetSlide + slidesToScroll;
      }
    } else if (options.message === "dots") {
      targetSlide = options.index * options.slidesToScroll;
    } else if (options.message === "children") {
      targetSlide = options.index;
      if (infinite) {
        var direction = siblingDirection(_objectSpread2(_objectSpread2({}, spec), {}, {
          targetSlide
        }));
        if (targetSlide > options.currentSlide && direction === "left") {
          targetSlide = targetSlide - slideCount;
        } else if (targetSlide < options.currentSlide && direction === "right") {
          targetSlide = targetSlide + slideCount;
        }
      }
    } else if (options.message === "index") {
      targetSlide = Number(options.index);
    }
    return targetSlide;
  };
  innerSliderUtils.keyHandler = function keyHandler(e, accessibility, rtl) {
    if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
    if (e.keyCode === 37) return rtl ? "next" : "previous";
    if (e.keyCode === 39) return rtl ? "previous" : "next";
    return "";
  };
  innerSliderUtils.swipeStart = function swipeStart(e, swipe, draggable) {
    e.target.tagName === "IMG" && safePreventDefault(e);
    if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
    return {
      dragging: true,
      touchObject: {
        startX: e.touches ? e.touches[0].pageX : e.clientX,
        startY: e.touches ? e.touches[0].pageY : e.clientY,
        curX: e.touches ? e.touches[0].pageX : e.clientX,
        curY: e.touches ? e.touches[0].pageY : e.clientY
      }
    };
  };
  innerSliderUtils.swipeMove = function swipeMove(e, spec) {
    var scrolling = spec.scrolling, animating = spec.animating, vertical = spec.vertical, swipeToSlide = spec.swipeToSlide, verticalSwiping = spec.verticalSwiping, rtl = spec.rtl, currentSlide = spec.currentSlide, edgeFriction = spec.edgeFriction, edgeDragged = spec.edgeDragged, onEdge = spec.onEdge, swiped = spec.swiped, swiping = spec.swiping, slideCount = spec.slideCount, slidesToScroll = spec.slidesToScroll, infinite = spec.infinite, touchObject = spec.touchObject, swipeEvent = spec.swipeEvent, listHeight = spec.listHeight, listWidth = spec.listWidth;
    if (scrolling) return;
    if (animating) return safePreventDefault(e);
    if (vertical && swipeToSlide && verticalSwiping) safePreventDefault(e);
    var swipeLeft, state = {};
    var curLeft = getTrackLeft(spec);
    touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
    touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
    var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
    if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
      return {
        scrolling: true
      };
    }
    if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
    var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
    if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
    var dotCount = Math.ceil(slideCount / slidesToScroll);
    var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
    var touchSwipeLength = touchObject.swipeLength;
    if (!infinite) {
      if (currentSlide === 0 && (swipeDirection === "right" || swipeDirection === "down") || currentSlide + 1 >= dotCount && (swipeDirection === "left" || swipeDirection === "up") || !canGoNext(spec) && (swipeDirection === "left" || swipeDirection === "up")) {
        touchSwipeLength = touchObject.swipeLength * edgeFriction;
        if (edgeDragged === false && onEdge) {
          onEdge(swipeDirection);
          state["edgeDragged"] = true;
        }
      }
    }
    if (!swiped && swipeEvent) {
      swipeEvent(swipeDirection);
      state["swiped"] = true;
    }
    if (!vertical) {
      if (!rtl) {
        swipeLeft = curLeft + touchSwipeLength * positionOffset;
      } else {
        swipeLeft = curLeft - touchSwipeLength * positionOffset;
      }
    } else {
      swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
    }
    if (verticalSwiping) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    }
    state = _objectSpread2(_objectSpread2({}, state), {}, {
      touchObject,
      swipeLeft,
      trackStyle: getTrackCSS(_objectSpread2(_objectSpread2({}, spec), {}, {
        left: swipeLeft
      }))
    });
    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
      return state;
    }
    if (touchObject.swipeLength > 10) {
      state["swiping"] = true;
      safePreventDefault(e);
    }
    return state;
  };
  innerSliderUtils.swipeEnd = function swipeEnd(e, spec) {
    var dragging = spec.dragging, swipe = spec.swipe, touchObject = spec.touchObject, listWidth = spec.listWidth, touchThreshold = spec.touchThreshold, verticalSwiping = spec.verticalSwiping, listHeight = spec.listHeight, swipeToSlide = spec.swipeToSlide, scrolling = spec.scrolling, onSwipe = spec.onSwipe, targetSlide = spec.targetSlide, currentSlide = spec.currentSlide, infinite = spec.infinite;
    if (!dragging) {
      if (swipe) safePreventDefault(e);
      return {};
    }
    var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
    var swipeDirection = getSwipeDirection(touchObject, verticalSwiping);
    var state = {
      dragging: false,
      edgeDragged: false,
      scrolling: false,
      swiping: false,
      swiped: false,
      swipeLeft: null,
      touchObject: {}
    };
    if (scrolling) {
      return state;
    }
    if (!touchObject.swipeLength) {
      return state;
    }
    if (touchObject.swipeLength > minSwipe) {
      safePreventDefault(e);
      if (onSwipe) {
        onSwipe(swipeDirection);
      }
      var slideCount, newSlide;
      var activeSlide = infinite ? currentSlide : targetSlide;
      switch (swipeDirection) {
        case "left":
        case "up":
          newSlide = activeSlide + getSlideCount(spec);
          slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
          state["currentDirection"] = 0;
          break;
        case "right":
        case "down":
          newSlide = activeSlide - getSlideCount(spec);
          slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
          state["currentDirection"] = 1;
          break;
        default:
          slideCount = activeSlide;
      }
      state["triggerSlideHandler"] = slideCount;
    } else {
      var currentLeft = getTrackLeft(spec);
      state["trackStyle"] = getTrackAnimateCSS(_objectSpread2(_objectSpread2({}, spec), {}, {
        left: currentLeft
      }));
    }
    return state;
  };
  var getNavigableIndexes = innerSliderUtils.getNavigableIndexes = function getNavigableIndexes2(spec) {
    var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
    var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
    var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
    var indexes = [];
    while (breakpoint < max) {
      indexes.push(breakpoint);
      breakpoint = counter + spec.slidesToScroll;
      counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
    }
    return indexes;
  };
  var checkNavigable = innerSliderUtils.checkNavigable = function checkNavigable2(spec, index) {
    var navigables = getNavigableIndexes(spec);
    var prevNavigable = 0;
    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }
        prevNavigable = navigables[n];
      }
    }
    return index;
  };
  var getSlideCount = innerSliderUtils.getSlideCount = function getSlideCount2(spec) {
    var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
    if (spec.swipeToSlide) {
      var swipedSlide;
      var slickList = spec.listRef;
      var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
      Array.from(slides).every(function(slide) {
        if (!spec.vertical) {
          if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
            swipedSlide = slide;
            return false;
          }
        } else {
          if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
            swipedSlide = slide;
            return false;
          }
        }
        return true;
      });
      if (!swipedSlide) {
        return 0;
      }
      var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
      var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
      return slidesTraversed;
    } else {
      return spec.slidesToScroll;
    }
  };
  var checkSpecKeys = innerSliderUtils.checkSpecKeys = function checkSpecKeys2(spec, keysArray) {
    return keysArray.reduce(function(value, key) {
      return value && spec.hasOwnProperty(key);
    }, true) ? null : console.error("Keys Missing:", spec);
  };
  var getTrackCSS = innerSliderUtils.getTrackCSS = function getTrackCSS2(spec) {
    checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
    var trackWidth, trackHeight;
    if (!spec.vertical) {
      trackWidth = getTotalSlides(spec) * spec.slideWidth;
    } else {
      var trackChildren = spec.unslick ? spec.slideCount : spec.slideCount + 2 * spec.slidesToShow;
      trackHeight = trackChildren * spec.slideHeight;
    }
    var style = {
      opacity: 1,
      transition: "",
      WebkitTransition: ""
    };
    if (spec.useTransform) {
      var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
      var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
      var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
      style = _objectSpread2(_objectSpread2({}, style), {}, {
        WebkitTransform,
        transform,
        msTransform
      });
    } else {
      if (spec.vertical) {
        style["top"] = spec.left;
      } else {
        style["left"] = spec.left;
      }
    }
    if (spec.fade) style = {
      opacity: 1
    };
    if (trackWidth) style.width = trackWidth;
    if (trackHeight) style.height = trackHeight;
    if (window && !window.addEventListener && window.attachEvent) {
      if (!spec.vertical) {
        style.marginLeft = spec.left + "px";
      } else {
        style.marginTop = spec.left + "px";
      }
    }
    return style;
  };
  var getTrackAnimateCSS = innerSliderUtils.getTrackAnimateCSS = function getTrackAnimateCSS2(spec) {
    checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
    var style = getTrackCSS(spec);
    if (spec.useTransform) {
      style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
      style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
    } else {
      if (spec.vertical) {
        style.transition = "top " + spec.speed + "ms " + spec.cssEase;
      } else {
        style.transition = "left " + spec.speed + "ms " + spec.cssEase;
      }
    }
    return style;
  };
  var getTrackLeft = innerSliderUtils.getTrackLeft = function getTrackLeft2(spec) {
    if (spec.unslick) {
      return 0;
    }
    checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
    var slideIndex = spec.slideIndex, trackRef = spec.trackRef, infinite = spec.infinite, centerMode = spec.centerMode, slideCount = spec.slideCount, slidesToShow = spec.slidesToShow, slidesToScroll = spec.slidesToScroll, slideWidth = spec.slideWidth, listWidth = spec.listWidth, variableWidth = spec.variableWidth, slideHeight = spec.slideHeight, fade = spec.fade, vertical = spec.vertical;
    var slideOffset = 0;
    var targetLeft;
    var targetSlide;
    var verticalOffset = 0;
    if (fade || spec.slideCount === 1) {
      return 0;
    }
    var slidesToOffset = 0;
    if (infinite) {
      slidesToOffset = -getPreClones(spec);
      if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
        slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
      }
      if (centerMode) {
        slidesToOffset += parseInt(slidesToShow / 2);
      }
    } else {
      if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
        slidesToOffset = slidesToShow - slideCount % slidesToScroll;
      }
      if (centerMode) {
        slidesToOffset = parseInt(slidesToShow / 2);
      }
    }
    slideOffset = slidesToOffset * slideWidth;
    verticalOffset = slidesToOffset * slideHeight;
    if (!vertical) {
      targetLeft = slideIndex * slideWidth * -1 + slideOffset;
    } else {
      targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
    }
    if (variableWidth === true) {
      var targetSlideIndex;
      var trackElem = trackRef && trackRef.node;
      targetSlideIndex = slideIndex + getPreClones(spec);
      targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
      targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
      if (centerMode === true) {
        targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
        targetSlide = trackElem && trackElem.children[targetSlideIndex];
        targetLeft = 0;
        for (var slide = 0; slide < targetSlideIndex; slide++) {
          targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
        }
        targetLeft -= parseInt(spec.centerPadding);
        targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
      }
    }
    return targetLeft;
  };
  var getPreClones = innerSliderUtils.getPreClones = function getPreClones2(spec) {
    if (spec.unslick || !spec.infinite) {
      return 0;
    }
    if (spec.variableWidth) {
      return spec.slideCount;
    }
    return spec.slidesToShow + (spec.centerMode ? 1 : 0);
  };
  var getPostClones = innerSliderUtils.getPostClones = function getPostClones2(spec) {
    if (spec.unslick || !spec.infinite) {
      return 0;
    }
    if (spec.variableWidth) {
      return spec.slideCount;
    }
    return spec.slidesToShow + (spec.centerMode ? 1 : 0);
  };
  var getTotalSlides = innerSliderUtils.getTotalSlides = function getTotalSlides2(spec) {
    return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
  };
  var siblingDirection = innerSliderUtils.siblingDirection = function siblingDirection2(spec) {
    if (spec.targetSlide > spec.currentSlide) {
      if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
        return "left";
      }
      return "right";
    } else {
      if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
        return "right";
      }
      return "left";
    }
  };
  var slidesOnRight = innerSliderUtils.slidesOnRight = function slidesOnRight2(_ref) {
    var slidesToShow = _ref.slidesToShow, centerMode = _ref.centerMode, rtl = _ref.rtl, centerPadding = _ref.centerPadding;
    if (centerMode) {
      var right = (slidesToShow - 1) / 2 + 1;
      if (parseInt(centerPadding) > 0) right += 1;
      if (rtl && slidesToShow % 2 === 0) right += 1;
      return right;
    }
    if (rtl) {
      return 0;
    }
    return slidesToShow - 1;
  };
  var slidesOnLeft = innerSliderUtils.slidesOnLeft = function slidesOnLeft2(_ref2) {
    var slidesToShow = _ref2.slidesToShow, centerMode = _ref2.centerMode, rtl = _ref2.rtl, centerPadding = _ref2.centerPadding;
    if (centerMode) {
      var left = (slidesToShow - 1) / 2 + 1;
      if (parseInt(centerPadding) > 0) left += 1;
      if (!rtl && slidesToShow % 2 === 0) left += 1;
      return left;
    }
    if (rtl) {
      return slidesToShow - 1;
    }
    return 0;
  };
  innerSliderUtils.canUseDOM = function canUseDOM() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  };
  var validSettings = innerSliderUtils.validSettings = Object.keys(_defaultProps["default"]);
  function filterSettings(settings) {
    return validSettings.reduce(function(acc, settingName) {
      if (settings.hasOwnProperty(settingName)) {
        acc[settingName] = settings[settingName];
      }
      return acc;
    }, {});
  }
  return innerSliderUtils;
}
var track = {};
var hasRequiredTrack;
function requireTrack() {
  if (hasRequiredTrack) return track;
  hasRequiredTrack = 1;
  Object.defineProperty(track, "__esModule", {
    value: true
  });
  track.Track = void 0;
  var _react = _interopRequireDefault(React__default);
  var _classnames = _interopRequireDefault(require$$1);
  var _innerSliderUtils = requireInnerSliderUtils();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { "default": e };
  }
  function _typeof2(o) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof2(o);
  }
  function _extends2() {
    return _extends2 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) {
          ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
      }
      return n;
    }, _extends2.apply(null, arguments);
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey2(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", { writable: false }), e;
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: true, configurable: true } }), Object.defineProperty(t, "prototype", { writable: false }), e && _setPrototypeOf(t, e);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
      return t2.__proto__ = e2, t2;
    }, _setPrototypeOf(t, e);
  }
  function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
      var e, o = _getPrototypeOf(t);
      if (r) {
        var s = _getPrototypeOf(this).constructor;
        e = Reflect.construct(o, arguments, s);
      } else e = o.apply(this, arguments);
      return _possibleConstructorReturn(this, e);
    };
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof2(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t2) {
    }
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
      return !!t;
    })();
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
      return t2.__proto__ || Object.getPrototypeOf(t2);
    }, _getPrototypeOf(t);
  }
  function ownKeys2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
        _defineProperty2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _defineProperty2(e, r, t) {
    return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
  }
  function _toPropertyKey2(t) {
    var i = _toPrimitive2(t, "string");
    return "symbol" == _typeof2(i) ? i : i + "";
  }
  function _toPrimitive2(t, r) {
    if ("object" != _typeof2(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != _typeof2(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  var getSlideClasses = function getSlideClasses2(spec) {
    var slickActive, slickCenter, slickCloned;
    var centerOffset, index;
    if (spec.rtl) {
      index = spec.slideCount - 1 - spec.index;
    } else {
      index = spec.index;
    }
    slickCloned = index < 0 || index >= spec.slideCount;
    if (spec.centerMode) {
      centerOffset = Math.floor(spec.slidesToShow / 2);
      slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
      if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
        slickActive = true;
      }
    } else {
      slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
    }
    var focusedSlide;
    if (spec.targetSlide < 0) {
      focusedSlide = spec.targetSlide + spec.slideCount;
    } else if (spec.targetSlide >= spec.slideCount) {
      focusedSlide = spec.targetSlide - spec.slideCount;
    } else {
      focusedSlide = spec.targetSlide;
    }
    var slickCurrent = index === focusedSlide;
    return {
      "slick-slide": true,
      "slick-active": slickActive,
      "slick-center": slickCenter,
      "slick-cloned": slickCloned,
      "slick-current": slickCurrent
      // dubious in case of RTL
    };
  };
  var getSlideStyle = function getSlideStyle2(spec) {
    var style = {};
    if (spec.variableWidth === void 0 || spec.variableWidth === false) {
      style.width = spec.slideWidth;
    }
    if (spec.fade) {
      style.position = "relative";
      if (spec.vertical) {
        style.top = -spec.index * parseInt(spec.slideHeight);
      } else {
        style.left = -spec.index * parseInt(spec.slideWidth);
      }
      style.opacity = spec.currentSlide === spec.index ? 1 : 0;
      style.zIndex = spec.currentSlide === spec.index ? 999 : 998;
      if (spec.useCSS) {
        style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", visibility " + spec.speed + "ms " + spec.cssEase;
      }
    }
    return style;
  };
  var getKey = function getKey2(child, fallbackKey) {
    return child.key || fallbackKey;
  };
  var renderSlides = function renderSlides2(spec) {
    var key;
    var slides = [];
    var preCloneSlides = [];
    var postCloneSlides = [];
    var childrenCount = _react["default"].Children.count(spec.children);
    var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
    var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);
    _react["default"].Children.forEach(spec.children, function(elem, index) {
      var child;
      var childOnClickOptions = {
        message: "children",
        index,
        slidesToScroll: spec.slidesToScroll,
        currentSlide: spec.currentSlide
      };
      if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
        child = elem;
      } else {
        child = /* @__PURE__ */ _react["default"].createElement("div", null);
      }
      var childStyle = getSlideStyle(_objectSpread2(_objectSpread2({}, spec), {}, {
        index
      }));
      var slideClass = child.props.className || "";
      var slideClasses = getSlideClasses(_objectSpread2(_objectSpread2({}, spec), {}, {
        index
      }));
      slides.push(/* @__PURE__ */ _react["default"].cloneElement(child, {
        key: "original" + getKey(child, index),
        "data-index": index,
        className: (0, _classnames["default"])(slideClasses, slideClass),
        tabIndex: "-1",
        "aria-hidden": !slideClasses["slick-active"],
        style: _objectSpread2(_objectSpread2({
          outline: "none"
        }, child.props.style || {}), childStyle),
        onClick: function onClick(e) {
          child.props && child.props.onClick && child.props.onClick(e);
          if (spec.focusOnSelect) {
            spec.focusOnSelect(childOnClickOptions);
          }
        }
      }));
      if (spec.infinite && childrenCount > 1 && spec.fade === false && !spec.unslick) {
        var preCloneNo = childrenCount - index;
        if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec)) {
          key = -preCloneNo;
          if (key >= startIndex) {
            child = elem;
          }
          slideClasses = getSlideClasses(_objectSpread2(_objectSpread2({}, spec), {}, {
            index: key
          }));
          preCloneSlides.push(/* @__PURE__ */ _react["default"].cloneElement(child, {
            key: "precloned" + getKey(child, key),
            "data-index": key,
            tabIndex: "-1",
            className: (0, _classnames["default"])(slideClasses, slideClass),
            "aria-hidden": !slideClasses["slick-active"],
            style: _objectSpread2(_objectSpread2({}, child.props.style || {}), childStyle),
            onClick: function onClick(e) {
              child.props && child.props.onClick && child.props.onClick(e);
              if (spec.focusOnSelect) {
                spec.focusOnSelect(childOnClickOptions);
              }
            }
          }));
        }
        if (index < (0, _innerSliderUtils.getPostClones)(spec)) {
          key = childrenCount + index;
          if (key < endIndex) {
            child = elem;
          }
          slideClasses = getSlideClasses(_objectSpread2(_objectSpread2({}, spec), {}, {
            index: key
          }));
          postCloneSlides.push(/* @__PURE__ */ _react["default"].cloneElement(child, {
            key: "postcloned" + getKey(child, key),
            "data-index": key,
            tabIndex: "-1",
            className: (0, _classnames["default"])(slideClasses, slideClass),
            "aria-hidden": !slideClasses["slick-active"],
            style: _objectSpread2(_objectSpread2({}, child.props.style || {}), childStyle),
            onClick: function onClick(e) {
              child.props && child.props.onClick && child.props.onClick(e);
              if (spec.focusOnSelect) {
                spec.focusOnSelect(childOnClickOptions);
              }
            }
          }));
        }
      }
    });
    if (spec.rtl) {
      return preCloneSlides.concat(slides, postCloneSlides).reverse();
    } else {
      return preCloneSlides.concat(slides, postCloneSlides);
    }
  };
  track.Track = /* @__PURE__ */ (function(_React$PureComponent) {
    _inherits(Track, _React$PureComponent);
    var _super = _createSuper(Track);
    function Track() {
      var _this;
      _classCallCheck(this, Track);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty2(_assertThisInitialized(_this), "node", null);
      _defineProperty2(_assertThisInitialized(_this), "handleRef", function(ref) {
        _this.node = ref;
      });
      return _this;
    }
    _createClass(Track, [{
      key: "render",
      value: function render2() {
        var slides = renderSlides(this.props);
        var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave;
        var mouseEvents = {
          onMouseEnter,
          onMouseOver,
          onMouseLeave
        };
        return /* @__PURE__ */ _react["default"].createElement("div", _extends2({
          ref: this.handleRef,
          className: "slick-track",
          style: this.props.trackStyle
        }, mouseEvents), slides);
      }
    }]);
    return Track;
  })(_react["default"].PureComponent);
  return track;
}
var dots = {};
var hasRequiredDots;
function requireDots() {
  if (hasRequiredDots) return dots;
  hasRequiredDots = 1;
  function _typeof2(o) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof2(o);
  }
  Object.defineProperty(dots, "__esModule", {
    value: true
  });
  dots.Dots = void 0;
  var _react = _interopRequireDefault(React__default);
  var _classnames = _interopRequireDefault(require$$1);
  var _innerSliderUtils = requireInnerSliderUtils();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { "default": e };
  }
  function ownKeys2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
        _defineProperty2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _defineProperty2(e, r, t) {
    return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey2(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", { writable: false }), e;
  }
  function _toPropertyKey2(t) {
    var i = _toPrimitive2(t, "string");
    return "symbol" == _typeof2(i) ? i : i + "";
  }
  function _toPrimitive2(t, r) {
    if ("object" != _typeof2(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != _typeof2(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: true, configurable: true } }), Object.defineProperty(t, "prototype", { writable: false }), e && _setPrototypeOf(t, e);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
      return t2.__proto__ = e2, t2;
    }, _setPrototypeOf(t, e);
  }
  function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
      var e, o = _getPrototypeOf(t);
      if (r) {
        var s = _getPrototypeOf(this).constructor;
        e = Reflect.construct(o, arguments, s);
      } else e = o.apply(this, arguments);
      return _possibleConstructorReturn(this, e);
    };
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof2(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t2) {
    }
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
      return !!t;
    })();
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
      return t2.__proto__ || Object.getPrototypeOf(t2);
    }, _getPrototypeOf(t);
  }
  var getDotCount = function getDotCount2(spec) {
    var dots2;
    if (spec.infinite) {
      dots2 = Math.ceil(spec.slideCount / spec.slidesToScroll);
    } else {
      dots2 = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
    }
    return dots2;
  };
  dots.Dots = /* @__PURE__ */ (function(_React$PureComponent) {
    _inherits(Dots, _React$PureComponent);
    var _super = _createSuper(Dots);
    function Dots() {
      _classCallCheck(this, Dots);
      return _super.apply(this, arguments);
    }
    _createClass(Dots, [{
      key: "clickHandler",
      value: function clickHandler(options, e) {
        e.preventDefault();
        this.props.clickHandler(options);
      }
    }, {
      key: "render",
      value: function render2() {
        var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave, infinite = _this$props.infinite, slidesToScroll = _this$props.slidesToScroll, slidesToShow = _this$props.slidesToShow, slideCount = _this$props.slideCount, currentSlide = _this$props.currentSlide;
        var dotCount = getDotCount({
          slideCount,
          slidesToScroll,
          slidesToShow,
          infinite
        });
        var mouseEvents = {
          onMouseEnter,
          onMouseOver,
          onMouseLeave
        };
        var dots2 = [];
        for (var i = 0; i < dotCount; i++) {
          var _rightBound = (i + 1) * slidesToScroll - 1;
          var rightBound = infinite ? _rightBound : (0, _innerSliderUtils.clamp)(_rightBound, 0, slideCount - 1);
          var _leftBound = rightBound - (slidesToScroll - 1);
          var leftBound = infinite ? _leftBound : (0, _innerSliderUtils.clamp)(_leftBound, 0, slideCount - 1);
          var className = (0, _classnames["default"])({
            "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
          });
          var dotOptions = {
            message: "dots",
            index: i,
            slidesToScroll,
            currentSlide
          };
          var onClick = this.clickHandler.bind(this, dotOptions);
          dots2 = dots2.concat(/* @__PURE__ */ _react["default"].createElement("li", {
            key: i,
            className
          }, /* @__PURE__ */ _react["default"].cloneElement(this.props.customPaging(i), {
            onClick
          })));
        }
        return /* @__PURE__ */ _react["default"].cloneElement(this.props.appendDots(dots2), _objectSpread2({
          className: this.props.dotsClass
        }, mouseEvents));
      }
    }]);
    return Dots;
  })(_react["default"].PureComponent);
  return dots;
}
var arrows = {};
var hasRequiredArrows;
function requireArrows() {
  if (hasRequiredArrows) return arrows;
  hasRequiredArrows = 1;
  function _typeof2(o) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof2(o);
  }
  Object.defineProperty(arrows, "__esModule", {
    value: true
  });
  arrows.PrevArrow = arrows.NextArrow = void 0;
  var _react = _interopRequireDefault(React__default);
  var _classnames = _interopRequireDefault(require$$1);
  var _innerSliderUtils = requireInnerSliderUtils();
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { "default": e };
  }
  function _extends2() {
    return _extends2 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) {
          ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
      }
      return n;
    }, _extends2.apply(null, arguments);
  }
  function ownKeys2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
        _defineProperty2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _defineProperty2(e, r, t) {
    return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey2(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", { writable: false }), e;
  }
  function _toPropertyKey2(t) {
    var i = _toPrimitive2(t, "string");
    return "symbol" == _typeof2(i) ? i : i + "";
  }
  function _toPrimitive2(t, r) {
    if ("object" != _typeof2(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != _typeof2(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(t);
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: true, configurable: true } }), Object.defineProperty(t, "prototype", { writable: false }), e && _setPrototypeOf(t, e);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
      return t2.__proto__ = e2, t2;
    }, _setPrototypeOf(t, e);
  }
  function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
      var e, o = _getPrototypeOf(t);
      if (r) {
        var s = _getPrototypeOf(this).constructor;
        e = Reflect.construct(o, arguments, s);
      } else e = o.apply(this, arguments);
      return _possibleConstructorReturn(this, e);
    };
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof2(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t2) {
    }
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
      return !!t;
    })();
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
      return t2.__proto__ || Object.getPrototypeOf(t2);
    }, _getPrototypeOf(t);
  }
  arrows.PrevArrow = /* @__PURE__ */ (function(_React$PureComponent) {
    _inherits(PrevArrow, _React$PureComponent);
    var _super = _createSuper(PrevArrow);
    function PrevArrow() {
      _classCallCheck(this, PrevArrow);
      return _super.apply(this, arguments);
    }
    _createClass(PrevArrow, [{
      key: "clickHandler",
      value: function clickHandler(options, e) {
        if (e) {
          e.preventDefault();
        }
        this.props.clickHandler(options, e);
      }
    }, {
      key: "render",
      value: function render2() {
        var prevClasses = {
          "slick-arrow": true,
          "slick-prev": true
        };
        var prevHandler = this.clickHandler.bind(this, {
          message: "previous"
        });
        if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
          prevClasses["slick-disabled"] = true;
          prevHandler = null;
        }
        var prevArrowProps = {
          key: "0",
          "data-role": "none",
          className: (0, _classnames["default"])(prevClasses),
          style: {
            display: "block"
          },
          onClick: prevHandler
        };
        var customProps = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        };
        var prevArrow;
        if (this.props.prevArrow) {
          prevArrow = /* @__PURE__ */ _react["default"].cloneElement(this.props.prevArrow, _objectSpread2(_objectSpread2({}, prevArrowProps), customProps));
        } else {
          prevArrow = /* @__PURE__ */ _react["default"].createElement("button", _extends2({
            key: "0",
            type: "button"
          }, prevArrowProps), " ", "Previous");
        }
        return prevArrow;
      }
    }]);
    return PrevArrow;
  })(_react["default"].PureComponent);
  arrows.NextArrow = /* @__PURE__ */ (function(_React$PureComponent2) {
    _inherits(NextArrow, _React$PureComponent2);
    var _super2 = _createSuper(NextArrow);
    function NextArrow() {
      _classCallCheck(this, NextArrow);
      return _super2.apply(this, arguments);
    }
    _createClass(NextArrow, [{
      key: "clickHandler",
      value: function clickHandler(options, e) {
        if (e) {
          e.preventDefault();
        }
        this.props.clickHandler(options, e);
      }
    }, {
      key: "render",
      value: function render2() {
        var nextClasses = {
          "slick-arrow": true,
          "slick-next": true
        };
        var nextHandler = this.clickHandler.bind(this, {
          message: "next"
        });
        if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
          nextClasses["slick-disabled"] = true;
          nextHandler = null;
        }
        var nextArrowProps = {
          key: "1",
          "data-role": "none",
          className: (0, _classnames["default"])(nextClasses),
          style: {
            display: "block"
          },
          onClick: nextHandler
        };
        var customProps = {
          currentSlide: this.props.currentSlide,
          slideCount: this.props.slideCount
        };
        var nextArrow;
        if (this.props.nextArrow) {
          nextArrow = /* @__PURE__ */ _react["default"].cloneElement(this.props.nextArrow, _objectSpread2(_objectSpread2({}, nextArrowProps), customProps));
        } else {
          nextArrow = /* @__PURE__ */ _react["default"].createElement("button", _extends2({
            key: "1",
            type: "button"
          }, nextArrowProps), " ", "Next");
        }
        return nextArrow;
      }
    }]);
    return NextArrow;
  })(_react["default"].PureComponent);
  return arrows;
}
var hasRequiredInnerSlider;
function requireInnerSlider() {
  if (hasRequiredInnerSlider) return innerSlider;
  hasRequiredInnerSlider = 1;
  Object.defineProperty(innerSlider, "__esModule", {
    value: true
  });
  innerSlider.InnerSlider = void 0;
  var _react = _interopRequireDefault(React__default);
  var _initialState = _interopRequireDefault(requireInitialState());
  var _lodash = _interopRequireDefault(require$$2);
  var _classnames = _interopRequireDefault(require$$1);
  var _innerSliderUtils = requireInnerSliderUtils();
  var _track = requireTrack();
  var _dots = requireDots();
  var _arrows = requireArrows();
  var _resizeObserverPolyfill = _interopRequireDefault(require$$8);
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { "default": e };
  }
  function _typeof2(o) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof2(o);
  }
  function _extends2() {
    return _extends2 = Object.assign ? Object.assign.bind() : function(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) {
          ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }
      }
      return n;
    }, _extends2.apply(null, arguments);
  }
  function _objectWithoutProperties2(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose2(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (r = 0; r < s.length; r++) {
        o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
      }
    }
    return i;
  }
  function _objectWithoutPropertiesLoose2(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) {
      if ({}.hasOwnProperty.call(r, n)) {
        if (e.includes(n)) continue;
        t[n] = r[n];
      }
    }
    return t;
  }
  function ownKeys2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
        _defineProperty2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey2(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", { writable: false }), e;
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: true, configurable: true } }), Object.defineProperty(t, "prototype", { writable: false }), e && _setPrototypeOf(t, e);
  }
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
      return t2.__proto__ = e2, t2;
    }, _setPrototypeOf(t, e);
  }
  function _createSuper(t) {
    var r = _isNativeReflectConstruct();
    return function() {
      var e, o = _getPrototypeOf(t);
      if (r) {
        var s = _getPrototypeOf(this).constructor;
        e = Reflect.construct(o, arguments, s);
      } else e = o.apply(this, arguments);
      return _possibleConstructorReturn(this, e);
    };
  }
  function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof2(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
  }
  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t2) {
    }
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
      return !!t;
    })();
  }
  function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
      return t2.__proto__ || Object.getPrototypeOf(t2);
    }, _getPrototypeOf(t);
  }
  function _defineProperty2(e, r, t) {
    return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
  }
  function _toPropertyKey2(t) {
    var i = _toPrimitive2(t, "string");
    return "symbol" == _typeof2(i) ? i : i + "";
  }
  function _toPrimitive2(t, r) {
    if ("object" != _typeof2(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != _typeof2(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  innerSlider.InnerSlider = /* @__PURE__ */ (function(_React$Component) {
    _inherits(InnerSlider, _React$Component);
    var _super = _createSuper(InnerSlider);
    function InnerSlider(props) {
      var _this;
      _classCallCheck(this, InnerSlider);
      _this = _super.call(this, props);
      _defineProperty2(_assertThisInitialized(_this), "listRefHandler", function(ref) {
        return _this.list = ref;
      });
      _defineProperty2(_assertThisInitialized(_this), "trackRefHandler", function(ref) {
        return _this.track = ref;
      });
      _defineProperty2(_assertThisInitialized(_this), "adaptHeight", function() {
        if (_this.props.adaptiveHeight && _this.list) {
          var elem = _this.list.querySelector('[data-index="'.concat(_this.state.currentSlide, '"]'));
          _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
        }
      });
      _defineProperty2(_assertThisInitialized(_this), "componentDidMount", function() {
        _this.props.onInit && _this.props.onInit();
        if (_this.props.lazyLoad) {
          var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread2(_objectSpread2({}, _this.props), _this.state));
          if (slidesToLoad.length > 0) {
            _this.setState(function(prevState) {
              return {
                lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
              };
            });
            if (_this.props.onLazyLoad) {
              _this.props.onLazyLoad(slidesToLoad);
            }
          }
        }
        var spec = _objectSpread2({
          listRef: _this.list,
          trackRef: _this.track
        }, _this.props);
        _this.updateState(spec, true, function() {
          _this.adaptHeight();
          _this.props.autoplay && _this.autoPlay("update");
        });
        if (_this.props.lazyLoad === "progressive") {
          _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1e3);
        }
        _this.ro = new _resizeObserverPolyfill["default"](function() {
          if (_this.state.animating) {
            _this.onWindowResized(false);
            _this.callbackTimers.push(setTimeout(function() {
              return _this.onWindowResized();
            }, _this.props.speed));
          } else {
            _this.onWindowResized();
          }
        });
        _this.ro.observe(_this.list);
        document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(slide) {
          slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
          slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
        });
        if (window.addEventListener) {
          window.addEventListener("resize", _this.onWindowResized);
        } else {
          window.attachEvent("onresize", _this.onWindowResized);
        }
      });
      _defineProperty2(_assertThisInitialized(_this), "componentWillUnmount", function() {
        if (_this.animationEndCallback) {
          clearTimeout(_this.animationEndCallback);
        }
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
        }
        if (_this.callbackTimers.length) {
          _this.callbackTimers.forEach(function(timer) {
            return clearTimeout(timer);
          });
          _this.callbackTimers = [];
        }
        if (window.addEventListener) {
          window.removeEventListener("resize", _this.onWindowResized);
        } else {
          window.detachEvent("onresize", _this.onWindowResized);
        }
        if (_this.autoplayTimer) {
          clearInterval(_this.autoplayTimer);
        }
        _this.ro.disconnect();
      });
      _defineProperty2(_assertThisInitialized(_this), "componentDidUpdate", function(prevProps) {
        _this.checkImagesLoad();
        _this.props.onReInit && _this.props.onReInit();
        if (_this.props.lazyLoad) {
          var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread2(_objectSpread2({}, _this.props), _this.state));
          if (slidesToLoad.length > 0) {
            _this.setState(function(prevState) {
              return {
                lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
              };
            });
            if (_this.props.onLazyLoad) {
              _this.props.onLazyLoad(slidesToLoad);
            }
          }
        }
        _this.adaptHeight();
        var spec = _objectSpread2(_objectSpread2({
          listRef: _this.list,
          trackRef: _this.track
        }, _this.props), _this.state);
        var setTrackStyle = _this.didPropsChange(prevProps);
        setTrackStyle && _this.updateState(spec, setTrackStyle, function() {
          if (_this.state.currentSlide >= _react["default"].Children.count(_this.props.children)) {
            _this.changeSlide({
              message: "index",
              index: _react["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
              currentSlide: _this.state.currentSlide
            });
          }
          if (_this.props.autoplay) {
            _this.autoPlay("update");
          } else {
            _this.pause("paused");
          }
        });
      });
      _defineProperty2(_assertThisInitialized(_this), "onWindowResized", function(setTrackStyle) {
        if (_this.debouncedResize) _this.debouncedResize.cancel();
        _this.debouncedResize = (0, _lodash["default"])(function() {
          return _this.resizeWindow(setTrackStyle);
        }, 50);
        _this.debouncedResize();
      });
      _defineProperty2(_assertThisInitialized(_this), "resizeWindow", function() {
        var setTrackStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        var isTrackMounted = Boolean(_this.track && _this.track.node);
        if (!isTrackMounted) return;
        var spec = _objectSpread2(_objectSpread2({
          listRef: _this.list,
          trackRef: _this.track
        }, _this.props), _this.state);
        _this.updateState(spec, setTrackStyle, function() {
          if (_this.props.autoplay) _this.autoPlay("update");
          else _this.pause("paused");
        });
        _this.setState({
          animating: false
        });
        clearTimeout(_this.animationEndCallback);
        delete _this.animationEndCallback;
      });
      _defineProperty2(_assertThisInitialized(_this), "updateState", function(spec, setTrackStyle, callback) {
        var updatedState = (0, _innerSliderUtils.initializedState)(spec);
        spec = _objectSpread2(_objectSpread2(_objectSpread2({}, spec), updatedState), {}, {
          slideIndex: updatedState.currentSlide
        });
        var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
        spec = _objectSpread2(_objectSpread2({}, spec), {}, {
          left: targetLeft
        });
        var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);
        if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
          updatedState["trackStyle"] = trackStyle;
        }
        _this.setState(updatedState, callback);
      });
      _defineProperty2(_assertThisInitialized(_this), "ssrInit", function() {
        if (_this.props.variableWidth) {
          var _trackWidth = 0, _trackLeft = 0;
          var childrenWidths = [];
          var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread2(_objectSpread2(_objectSpread2({}, _this.props), _this.state), {}, {
            slideCount: _this.props.children.length
          }));
          var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread2(_objectSpread2(_objectSpread2({}, _this.props), _this.state), {}, {
            slideCount: _this.props.children.length
          }));
          _this.props.children.forEach(function(child) {
            childrenWidths.push(child.props.style.width);
            _trackWidth += child.props.style.width;
          });
          for (var i = 0; i < preClones; i++) {
            _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
            _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
          }
          for (var _i = 0; _i < postClones; _i++) {
            _trackWidth += childrenWidths[_i];
          }
          for (var _i2 = 0; _i2 < _this.state.currentSlide; _i2++) {
            _trackLeft += childrenWidths[_i2];
          }
          var _trackStyle = {
            width: _trackWidth + "px",
            left: -_trackLeft + "px"
          };
          if (_this.props.centerMode) {
            var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
            _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
          }
          return {
            trackStyle: _trackStyle
          };
        }
        var childrenCount = _react["default"].Children.count(_this.props.children);
        var spec = _objectSpread2(_objectSpread2(_objectSpread2({}, _this.props), _this.state), {}, {
          slideCount: childrenCount
        });
        var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
        var trackWidth = 100 / _this.props.slidesToShow * slideCount;
        var slideWidth = 100 / slideCount;
        var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;
        if (_this.props.centerMode) {
          trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
        }
        var trackStyle = {
          width: trackWidth + "%",
          left: trackLeft + "%"
        };
        return {
          slideWidth: slideWidth + "%",
          trackStyle
        };
      });
      _defineProperty2(_assertThisInitialized(_this), "checkImagesLoad", function() {
        var images = _this.list && _this.list.querySelectorAll && _this.list.querySelectorAll(".slick-slide img") || [];
        var imagesCount = images.length, loadedCount = 0;
        Array.prototype.forEach.call(images, function(image) {
          var handler = function handler2() {
            return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
          };
          if (!image.onclick) {
            image.onclick = function() {
              return image.parentNode.focus();
            };
          } else {
            var prevClickHandler = image.onclick;
            image.onclick = function(e) {
              prevClickHandler(e);
              image.parentNode.focus();
            };
          }
          if (!image.onload) {
            if (_this.props.lazyLoad) {
              image.onload = function() {
                _this.adaptHeight();
                _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
              };
            } else {
              image.onload = handler;
              image.onerror = function() {
                handler();
                _this.props.onLazyLoadError && _this.props.onLazyLoadError();
              };
            }
          }
        });
      });
      _defineProperty2(_assertThisInitialized(_this), "progressiveLazyLoad", function() {
        var slidesToLoad = [];
        var spec = _objectSpread2(_objectSpread2({}, _this.props), _this.state);
        for (var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++) {
          if (_this.state.lazyLoadedList.indexOf(index) < 0) {
            slidesToLoad.push(index);
            break;
          }
        }
        for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
          if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
            slidesToLoad.push(_index);
            break;
          }
        }
        if (slidesToLoad.length > 0) {
          _this.setState(function(state) {
            return {
              lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        } else {
          if (_this.lazyLoadTimer) {
            clearInterval(_this.lazyLoadTimer);
            delete _this.lazyLoadTimer;
          }
        }
      });
      _defineProperty2(_assertThisInitialized(_this), "slideHandler", function(index) {
        var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var _this$props = _this.props, asNavFor = _this$props.asNavFor, beforeChange = _this$props.beforeChange, onLazyLoad = _this$props.onLazyLoad, speed = _this$props.speed, afterChange = _this$props.afterChange;
        var currentSlide = _this.state.currentSlide;
        var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread2(_objectSpread2(_objectSpread2({
          index
        }, _this.props), _this.state), {}, {
          trackRef: _this.track,
          useCSS: _this.props.useCSS && !dontAnimate
        })), state = _slideHandler.state, nextState = _slideHandler.nextState;
        if (!state) return;
        beforeChange && beforeChange(currentSlide, state.currentSlide);
        var slidesToLoad = state.lazyLoadedList.filter(function(value) {
          return _this.state.lazyLoadedList.indexOf(value) < 0;
        });
        onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
        if (!_this.props.waitForAnimate && _this.animationEndCallback) {
          clearTimeout(_this.animationEndCallback);
          afterChange && afterChange(currentSlide);
          delete _this.animationEndCallback;
        }
        _this.setState(state, function() {
          if (asNavFor && _this.asNavForIndex !== index) {
            _this.asNavForIndex = index;
            asNavFor.innerSlider.slideHandler(index);
          }
          if (!nextState) return;
          _this.animationEndCallback = setTimeout(function() {
            var animating = nextState.animating, firstBatch = _objectWithoutProperties2(nextState, ["animating"]);
            _this.setState(firstBatch, function() {
              _this.callbackTimers.push(setTimeout(function() {
                return _this.setState({
                  animating
                });
              }, 10));
              afterChange && afterChange(state.currentSlide);
              delete _this.animationEndCallback;
            });
          }, speed);
        });
      });
      _defineProperty2(_assertThisInitialized(_this), "changeSlide", function(options) {
        var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var spec = _objectSpread2(_objectSpread2({}, _this.props), _this.state);
        var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
        if (targetSlide !== 0 && !targetSlide) return;
        if (dontAnimate === true) {
          _this.slideHandler(targetSlide, dontAnimate);
        } else {
          _this.slideHandler(targetSlide);
        }
        _this.props.autoplay && _this.autoPlay("update");
        if (_this.props.focusOnSelect) {
          var nodes = _this.list.querySelectorAll(".slick-current");
          nodes[0] && nodes[0].focus();
        }
      });
      _defineProperty2(_assertThisInitialized(_this), "clickHandler", function(e) {
        if (_this.clickable === false) {
          e.stopPropagation();
          e.preventDefault();
        }
        _this.clickable = true;
      });
      _defineProperty2(_assertThisInitialized(_this), "keyHandler", function(e) {
        var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
        dir !== "" && _this.changeSlide({
          message: dir
        });
      });
      _defineProperty2(_assertThisInitialized(_this), "selectHandler", function(options) {
        _this.changeSlide(options);
      });
      _defineProperty2(_assertThisInitialized(_this), "disableBodyScroll", function() {
        var preventDefault = function preventDefault2(e) {
          e = e || window.event;
          if (e.preventDefault) e.preventDefault();
          e.returnValue = false;
        };
        window.ontouchmove = preventDefault;
      });
      _defineProperty2(_assertThisInitialized(_this), "enableBodyScroll", function() {
        window.ontouchmove = null;
      });
      _defineProperty2(_assertThisInitialized(_this), "swipeStart", function(e) {
        if (_this.props.verticalSwiping) {
          _this.disableBodyScroll();
        }
        var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
        state !== "" && _this.setState(state);
      });
      _defineProperty2(_assertThisInitialized(_this), "swipeMove", function(e) {
        var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread2(_objectSpread2(_objectSpread2({}, _this.props), _this.state), {}, {
          trackRef: _this.track,
          listRef: _this.list,
          slideIndex: _this.state.currentSlide
        }));
        if (!state) return;
        if (state["swiping"]) {
          _this.clickable = false;
        }
        _this.setState(state);
      });
      _defineProperty2(_assertThisInitialized(_this), "swipeEnd", function(e) {
        var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread2(_objectSpread2(_objectSpread2({}, _this.props), _this.state), {}, {
          trackRef: _this.track,
          listRef: _this.list,
          slideIndex: _this.state.currentSlide
        }));
        if (!state) return;
        var triggerSlideHandler = state["triggerSlideHandler"];
        delete state["triggerSlideHandler"];
        _this.setState(state);
        if (triggerSlideHandler === void 0) return;
        _this.slideHandler(triggerSlideHandler);
        if (_this.props.verticalSwiping) {
          _this.enableBodyScroll();
        }
      });
      _defineProperty2(_assertThisInitialized(_this), "touchEnd", function(e) {
        _this.swipeEnd(e);
        _this.clickable = true;
      });
      _defineProperty2(_assertThisInitialized(_this), "slickPrev", function() {
        _this.callbackTimers.push(setTimeout(function() {
          return _this.changeSlide({
            message: "previous"
          });
        }, 0));
      });
      _defineProperty2(_assertThisInitialized(_this), "slickNext", function() {
        _this.callbackTimers.push(setTimeout(function() {
          return _this.changeSlide({
            message: "next"
          });
        }, 0));
      });
      _defineProperty2(_assertThisInitialized(_this), "slickGoTo", function(slide) {
        var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        slide = Number(slide);
        if (isNaN(slide)) return "";
        _this.callbackTimers.push(setTimeout(function() {
          return _this.changeSlide({
            message: "index",
            index: slide,
            currentSlide: _this.state.currentSlide
          }, dontAnimate);
        }, 0));
      });
      _defineProperty2(_assertThisInitialized(_this), "play", function() {
        var nextIndex;
        if (_this.props.rtl) {
          nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
        } else {
          if ((0, _innerSliderUtils.canGoNext)(_objectSpread2(_objectSpread2({}, _this.props), _this.state))) {
            nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
          } else {
            return false;
          }
        }
        _this.slideHandler(nextIndex);
      });
      _defineProperty2(_assertThisInitialized(_this), "autoPlay", function(playType) {
        if (_this.autoplayTimer) {
          clearInterval(_this.autoplayTimer);
        }
        var autoplaying = _this.state.autoplaying;
        if (playType === "update") {
          if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
            return;
          }
        } else if (playType === "leave") {
          if (autoplaying === "paused" || autoplaying === "focused") {
            return;
          }
        } else if (playType === "blur") {
          if (autoplaying === "paused" || autoplaying === "hovered") {
            return;
          }
        }
        _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);
        _this.setState({
          autoplaying: "playing"
        });
      });
      _defineProperty2(_assertThisInitialized(_this), "pause", function(pauseType) {
        if (_this.autoplayTimer) {
          clearInterval(_this.autoplayTimer);
          _this.autoplayTimer = null;
        }
        var autoplaying = _this.state.autoplaying;
        if (pauseType === "paused") {
          _this.setState({
            autoplaying: "paused"
          });
        } else if (pauseType === "focused") {
          if (autoplaying === "hovered" || autoplaying === "playing") {
            _this.setState({
              autoplaying: "focused"
            });
          }
        } else {
          if (autoplaying === "playing") {
            _this.setState({
              autoplaying: "hovered"
            });
          }
        }
      });
      _defineProperty2(_assertThisInitialized(_this), "onDotsOver", function() {
        return _this.props.autoplay && _this.pause("hovered");
      });
      _defineProperty2(_assertThisInitialized(_this), "onDotsLeave", function() {
        return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
      });
      _defineProperty2(_assertThisInitialized(_this), "onTrackOver", function() {
        return _this.props.autoplay && _this.pause("hovered");
      });
      _defineProperty2(_assertThisInitialized(_this), "onTrackLeave", function() {
        return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
      });
      _defineProperty2(_assertThisInitialized(_this), "onSlideFocus", function() {
        return _this.props.autoplay && _this.pause("focused");
      });
      _defineProperty2(_assertThisInitialized(_this), "onSlideBlur", function() {
        return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
      });
      _defineProperty2(_assertThisInitialized(_this), "render", function() {
        var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
          "slick-vertical": _this.props.vertical,
          "slick-initialized": true
        });
        var spec = _objectSpread2(_objectSpread2({}, _this.props), _this.state);
        var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]);
        var pauseOnHover = _this.props.pauseOnHover;
        trackProps = _objectSpread2(_objectSpread2({}, trackProps), {}, {
          onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
          onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
          onMouseOver: pauseOnHover ? _this.onTrackOver : null,
          focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
        });
        var dots2;
        if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
          var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
          var pauseOnDotsHover = _this.props.pauseOnDotsHover;
          dotProps = _objectSpread2(_objectSpread2({}, dotProps), {}, {
            clickHandler: _this.changeSlide,
            onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
            onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
            onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
          });
          dots2 = /* @__PURE__ */ _react["default"].createElement(_dots.Dots, dotProps);
        }
        var prevArrow, nextArrow;
        var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
        arrowProps.clickHandler = _this.changeSlide;
        if (_this.props.arrows) {
          prevArrow = /* @__PURE__ */ _react["default"].createElement(_arrows.PrevArrow, arrowProps);
          nextArrow = /* @__PURE__ */ _react["default"].createElement(_arrows.NextArrow, arrowProps);
        }
        var verticalHeightStyle = null;
        if (_this.props.vertical) {
          verticalHeightStyle = {
            height: _this.state.listHeight
          };
        }
        var centerPaddingStyle = null;
        if (_this.props.vertical === false) {
          if (_this.props.centerMode === true) {
            centerPaddingStyle = {
              padding: "0px " + _this.props.centerPadding
            };
          }
        } else {
          if (_this.props.centerMode === true) {
            centerPaddingStyle = {
              padding: _this.props.centerPadding + " 0px"
            };
          }
        }
        var listStyle = _objectSpread2(_objectSpread2({}, verticalHeightStyle), centerPaddingStyle);
        var touchMove = _this.props.touchMove;
        var listProps = {
          className: "slick-list",
          style: listStyle,
          onClick: _this.clickHandler,
          onMouseDown: touchMove ? _this.swipeStart : null,
          onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
          onMouseUp: touchMove ? _this.swipeEnd : null,
          onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
          onTouchStart: touchMove ? _this.swipeStart : null,
          onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
          onTouchEnd: touchMove ? _this.touchEnd : null,
          onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
          onKeyDown: _this.props.accessibility ? _this.keyHandler : null
        };
        var innerSliderProps = {
          className,
          dir: "ltr",
          style: _this.props.style
        };
        if (_this.props.unslick) {
          listProps = {
            className: "slick-list"
          };
          innerSliderProps = {
            className,
            style: _this.props.style
          };
        }
        return /* @__PURE__ */ _react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /* @__PURE__ */ _react["default"].createElement("div", _extends2({
          ref: _this.listRefHandler
        }, listProps), /* @__PURE__ */ _react["default"].createElement(_track.Track, _extends2({
          ref: _this.trackRefHandler
        }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots2 : "");
      });
      _this.list = null;
      _this.track = null;
      _this.state = _objectSpread2(_objectSpread2({}, _initialState["default"]), {}, {
        currentSlide: _this.props.initialSlide,
        targetSlide: _this.props.initialSlide ? _this.props.initialSlide : 0,
        slideCount: _react["default"].Children.count(_this.props.children)
      });
      _this.callbackTimers = [];
      _this.clickable = true;
      _this.debouncedResize = null;
      var ssrState = _this.ssrInit();
      _this.state = _objectSpread2(_objectSpread2({}, _this.state), ssrState);
      return _this;
    }
    _createClass(InnerSlider, [{
      key: "didPropsChange",
      value: function didPropsChange(prevProps) {
        var setTrackStyle = false;
        for (var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++) {
          var key = _Object$keys[_i3];
          if (!prevProps.hasOwnProperty(key)) {
            setTrackStyle = true;
            break;
          }
          if (_typeof2(prevProps[key]) === "object" || typeof prevProps[key] === "function" || isNaN(prevProps[key])) {
            continue;
          }
          if (prevProps[key] !== this.props[key]) {
            setTrackStyle = true;
            break;
          }
        }
        return setTrackStyle || _react["default"].Children.count(this.props.children) !== _react["default"].Children.count(prevProps.children);
      }
    }]);
    return InnerSlider;
  })(_react["default"].Component);
  return innerSlider;
}
var hasRequiredSlider;
function requireSlider() {
  if (hasRequiredSlider) return slider;
  hasRequiredSlider = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireDefault(React__default);
    var _innerSlider = requireInnerSlider();
    var _json2mq = _interopRequireDefault(require$$2$1);
    var _defaultProps = _interopRequireDefault(requireDefaultProps());
    var _innerSliderUtils = requireInnerSliderUtils();
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { "default": e };
    }
    function _typeof2(o) {
      "@babel/helpers - typeof";
      return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, _typeof2(o);
    }
    function _extends2() {
      return _extends2 = Object.assign ? Object.assign.bind() : function(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = arguments[e];
          for (var r in t) {
            ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
        }
        return n;
      }, _extends2.apply(null, arguments);
    }
    function ownKeys2(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
          return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t.push.apply(t, o);
      }
      return t;
    }
    function _objectSpread2(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
          _defineProperty2(e, r2, t[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
          Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
      }
      return e;
    }
    function _classCallCheck(a, n) {
      if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(e, r) {
      for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey2(o.key), o);
      }
    }
    function _createClass(e, r, t) {
      return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", { writable: false }), e;
    }
    function _inherits(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: true, configurable: true } }), Object.defineProperty(t, "prototype", { writable: false }), e && _setPrototypeOf(t, e);
    }
    function _setPrototypeOf(t, e) {
      return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
        return t2.__proto__ = e2, t2;
      }, _setPrototypeOf(t, e);
    }
    function _createSuper(t) {
      var r = _isNativeReflectConstruct();
      return function() {
        var e, o = _getPrototypeOf(t);
        if (r) {
          var s = _getPrototypeOf(this).constructor;
          e = Reflect.construct(o, arguments, s);
        } else e = o.apply(this, arguments);
        return _possibleConstructorReturn(this, e);
      };
    }
    function _possibleConstructorReturn(t, e) {
      if (e && ("object" == _typeof2(e) || "function" == typeof e)) return e;
      if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
      return _assertThisInitialized(t);
    }
    function _assertThisInitialized(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function _isNativeReflectConstruct() {
      try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (t2) {
      }
      return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
        return !!t;
      })();
    }
    function _getPrototypeOf(t) {
      return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
        return t2.__proto__ || Object.getPrototypeOf(t2);
      }, _getPrototypeOf(t);
    }
    function _defineProperty2(e, r, t) {
      return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
    }
    function _toPropertyKey2(t) {
      var i = _toPrimitive2(t, "string");
      return "symbol" == _typeof2(i) ? i : i + "";
    }
    function _toPrimitive2(t, r) {
      if ("object" != _typeof2(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r);
        if ("object" != _typeof2(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    exports["default"] = /* @__PURE__ */ (function(_React$Component) {
      _inherits(Slider2, _React$Component);
      var _super = _createSuper(Slider2);
      function Slider2(props) {
        var _this;
        _classCallCheck(this, Slider2);
        _this = _super.call(this, props);
        _defineProperty2(_assertThisInitialized(_this), "innerSliderRefHandler", function(ref) {
          return _this.innerSlider = ref;
        });
        _defineProperty2(_assertThisInitialized(_this), "slickPrev", function() {
          return _this.innerSlider.slickPrev();
        });
        _defineProperty2(_assertThisInitialized(_this), "slickNext", function() {
          return _this.innerSlider.slickNext();
        });
        _defineProperty2(_assertThisInitialized(_this), "slickGoTo", function(slide) {
          var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          return _this.innerSlider.slickGoTo(slide, dontAnimate);
        });
        _defineProperty2(_assertThisInitialized(_this), "slickPause", function() {
          return _this.innerSlider.pause("paused");
        });
        _defineProperty2(_assertThisInitialized(_this), "slickPlay", function() {
          return _this.innerSlider.autoPlay("play");
        });
        _this.state = {
          breakpoint: null
        };
        _this._responsiveMediaHandlers = [];
        return _this;
      }
      _createClass(Slider2, [{
        key: "media",
        value: function media(query, handler) {
          var mql = window.matchMedia(query);
          var listener = function listener2(_ref) {
            var matches = _ref.matches;
            if (matches) {
              handler();
            }
          };
          mql.addListener(listener);
          this._responsiveMediaHandlers.push({
            mql,
            query,
            listener
          });
        }
        // handles responsive breakpoints
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;
          if (this.props.responsive) {
            var breakpoints = this.props.responsive.map(function(breakpt) {
              return breakpt.breakpoint;
            });
            breakpoints.sort(function(x, y) {
              return x - y;
            });
            breakpoints.forEach(function(breakpoint, index) {
              var bQuery;
              if (index === 0) {
                bQuery = (0, _json2mq["default"])({
                  minWidth: 0,
                  maxWidth: breakpoint
                });
              } else {
                bQuery = (0, _json2mq["default"])({
                  minWidth: breakpoints[index - 1] + 1,
                  maxWidth: breakpoint
                });
              }
              (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function() {
                _this2.setState({
                  breakpoint
                });
              });
            });
            var query = (0, _json2mq["default"])({
              minWidth: breakpoints.slice(-1)[0]
            });
            (0, _innerSliderUtils.canUseDOM)() && this.media(query, function() {
              _this2.setState({
                breakpoint: null
              });
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._responsiveMediaHandlers.forEach(function(obj) {
            obj.mql.removeListener(obj.listener);
          });
        }
      }, {
        key: "render",
        value: function render2() {
          var _this3 = this;
          var settings;
          var newProps;
          if (this.state.breakpoint) {
            newProps = this.props.responsive.filter(function(resp) {
              return resp.breakpoint === _this3.state.breakpoint;
            });
            settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread2(_objectSpread2(_objectSpread2({}, _defaultProps["default"]), this.props), newProps[0].settings);
          } else {
            settings = _objectSpread2(_objectSpread2({}, _defaultProps["default"]), this.props);
          }
          if (settings.centerMode) {
            if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== "production") {
              console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
            }
            settings.slidesToScroll = 1;
          }
          if (settings.fade) {
            if (settings.slidesToShow > 1 && process.env.NODE_ENV !== "production") {
              console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
            }
            if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== "production") {
              console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
            }
            settings.slidesToShow = 1;
            settings.slidesToScroll = 1;
          }
          var children = _react["default"].Children.toArray(this.props.children);
          children = children.filter(function(child) {
            if (typeof child === "string") {
              return !!child.trim();
            }
            return !!child;
          });
          if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
            console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
            settings.variableWidth = false;
          }
          var newChildren = [];
          var currentWidth = null;
          for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
            var newSlide = [];
            for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
              var row = [];
              for (var k = j; k < j + settings.slidesPerRow; k += 1) {
                if (settings.variableWidth && children[k].props.style) {
                  currentWidth = children[k].props.style.width;
                }
                if (k >= children.length) break;
                row.push(/* @__PURE__ */ _react["default"].cloneElement(children[k], {
                  key: 100 * i + 10 * j + k,
                  tabIndex: -1,
                  style: {
                    width: "".concat(100 / settings.slidesPerRow, "%"),
                    display: "inline-block"
                  }
                }));
              }
              newSlide.push(/* @__PURE__ */ _react["default"].createElement("div", {
                key: 10 * i + j
              }, row));
            }
            if (settings.variableWidth) {
              newChildren.push(/* @__PURE__ */ _react["default"].createElement("div", {
                key: i,
                style: {
                  width: currentWidth
                }
              }, newSlide));
            } else {
              newChildren.push(/* @__PURE__ */ _react["default"].createElement("div", {
                key: i
              }, newSlide));
            }
          }
          if (settings === "unslick") {
            var className = "regular slider " + (this.props.className || "");
            return /* @__PURE__ */ _react["default"].createElement("div", {
              className
            }, children);
          } else if (newChildren.length <= settings.slidesToShow) {
            settings.unslick = true;
          }
          return /* @__PURE__ */ _react["default"].createElement(_innerSlider.InnerSlider, _extends2({
            style: this.props.style,
            ref: this.innerSliderRefHandler
          }, (0, _innerSliderUtils.filterSettings)(settings)), newChildren);
        }
      }]);
      return Slider2;
    })(_react["default"].Component);
  })(slider);
  return slider;
}
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _slider = _interopRequireDefault(requireSlider());
    function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { "default": e };
    }
    exports["default"] = _slider["default"];
  })(lib);
  return lib;
}
var libExports = requireLib();
const Slider = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
const Portfolio$1 = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  const sliderSettings = {
    centerMode: !isMobile,
    // Disable center mode on mobile
    centerPadding: isMobile ? "0px" : "0px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: !isMobile,
    // Disable autoplay on mobile
    autoplaySpeed: 3e3,
    arrows: !isMobile,
    // Hide arrows on mobile
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          autoplay: false,
          arrows: false,
          dots: true
        }
      }
    ]
  };
  const portfolioItems = [
    { id: 1, title: "RGVK", category: "Static", type: "Tourism", image: "portfolio/rgvk.webp", link: "https://rgvkindia.com/", className: "hideOnMd" },
    { id: 2, title: "Car Captain", category: "E-com", type: "E-Commerce", image: "portfolio/car.webp", link: "https://carcaptain.in/", className: "" },
    { id: 3, title: "DTECH", category: "CRM", type: "Civil", image: "portfolio/dtech.webp", link: "https://dtechwale.com/", className: "hideOnMd" },
    { id: 4, title: "RoyalHood", category: "E-com", type: "E-Commerce", image: "portfolio/royalhood.webp", link: "https://royalhood.in/", className: "" },
    { id: 5, title: "ANANTA SAUKHYAM", category: "Health", type: "Wellness", image: "portfolio/ananta.webp", link: "https://anantasaukhyam.com/", className: "hideOnMd" },
    { id: 6, title: "D.I.E.A", category: "CRM", type: "Industrial Association", image: "portfolio/diea.webp", link: "https://diea.in/", className: "hideOnMd" },
    { id: 7, title: "AUTOMET ENGINEERING", category: "Static", type: "Automobile", image: "portfolio/automet.webp", link: "http://www.autometengg.com/", className: "hideOnMd" },
    { id: 8, title: "GIFCO AUTO FILTERS INDIA", category: "Static", type: "Automobile", image: "portfolio/gifco.webp", link: "http://gifcoindia.com/", className: "hideOnMd" },
    { id: 9, title: "Shaw Tech Training Services", category: "LMS", type: "Educational", image: "portfolio/stts.webp", link: "https://sttsonline.com/", className: "hideOnMd" },
    { id: 10, title: "Mech Mold", category: "Static", type: "Industrial", image: "portfolio/mech.webp", link: "https://mechmold.com/", className: "hideOnMd" },
    // { id: 11, title: "IT DESK MAHADEVPURA", category: "LMS", type: "Educational", image: "images/p5.webp", link: "https://itdeskmahadevpura.com/", className: "" },
    // { id: 12, title: "CAD DESK MAHADEVPURA", category: "LMS", type: "Educational", image: "images/p4.webp", link: "http://caddeskmahadevpura.com/", className: "" },
    { id: 13, title: "Terra Clenz", category: "E-com", type: "E-Commerce", image: "portfolio/terra.webp", link: "https://terraclenz.com/", className: "" },
    { id: 14, title: "Cad desk", category: "CRM", type: "CRM", image: "portfolio/cad.webp", link: "https://caddesk.in/", className: "" },
    { id: 15, title: "JBK Academy", category: "CRM", type: "CRM", image: "portfolio/jbk.webp", link: "https://jbkadmin.jbkacademy.in/", className: "" },
    { id: 16, title: "Triicons", category: "CRM", type: "CRM", image: "portfolio/triicons.webp", link: "https://triicons.com/", className: "" },
    { id: 17, title: "City Hospitality Solutions", category: "CRM", type: "CRM", image: "portfolio/city.webp", link: "https://crm.cityhospitalitysolutions.com", className: "" },
    { id: 18, title: "Jyothi Cloud ERP", category: "ERP", type: "ERP", image: "portfolio/erp.webp", link: "https://erp.etpl.ai", className: "" },
    { id: 19, title: "BDM Technology", category: "Static", type: "Educational", image: "portfolio/bdm.webp", link: "https://bdmtech.in/", className: "" },
    { id: 20, title: "Darklick", category: "Static", type: "Product", image: "portfolio/dark.webp", link: "http://darklick.com/", className: "hideOnMd" },
    { id: 21, title: "Lynx industries", category: "Static", type: "Industrial", image: "portfolio/lynx.webp", link: "http://lynxindustries.in/", className: "hideOnMd" },
    { id: 22, title: "P and S Industries", category: "Static", type: "Industrial", image: "portfolio/ps.webp", link: "http://pandsindustries.in", className: "hideOnMd" },
    { id: 23, title: "Sri Engineering", category: "Static", type: "Industrial", image: "portfolio/srii.webp", link: "https://sriengineering.net/", className: "hideOnMd" },
    { id: 24, title: "Sai Shanti Vidya Niketan", category: "Static", type: "Industrial", image: "portfolio/ssvn.webp", link: "http://saishantividyaniketan.in/", className: "hideOnMd" },
    { id: 25, title: "Umang Marketing & Engineering Services", category: "Static", type: "Industrial", image: "portfolio/umang.webp", link: "https://umangmarketing.com/", className: "hideOnMd" },
    { id: 26, title: "Upstreams", category: "Static", type: "Industrial", image: "portfolio/upst.webp", link: "https://upstreamhotels.in/", className: "hideOnMd" },
    { id: 27, title: "Terra Batteries", category: "Static", type: "Ecommerce", image: "portfolio/terrabat.webp", link: "https://terrabatteries.com/", className: "hideOnMd" }
  ];
  const filteredItems = isMobile ? portfolioItems.filter((item) => !item.className.includes("hideOnMd")) : portfolioItems;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("section", { id: "projects", children: [
    /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "section-heading d-flex flex-column align-items-center justify-content-center", children: [
      /* @__PURE__ */ jsx("div", { className: "space50" }),
      /* @__PURE__ */ jsx("h2", { className: "", style: { fontSize: isMobile ? "26px" : "45px" }, children: /* @__PURE__ */ jsx("b", { children: "Our Latest Projects" }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { style: { overflow: "hidden", padding: isMobile ? "0 5px" : "0", marginTop: "40px" }, children: /* @__PURE__ */ jsx(Slider, { ...sliderSettings, children: filteredItems.map((item) => /* @__PURE__ */ jsx("div", { className: "portfolio-card", children: /* @__PURE__ */ jsx("a", { href: item.link, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxs("div", { className: "news-card position-relative", children: [
      /* @__PURE__ */ jsx("div", { className: "img-wrapper mb-30", children: /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title }) }),
      /* @__PURE__ */ jsxs("div", { className: "content", children: [
        /* @__PURE__ */ jsx("h5", { className: "heading-5 mb-15", children: item.title }),
        /* @__PURE__ */ jsxs("div", { className: "paragraph mb-10", children: [
          item.category,
          " | ",
          item.type
        ] })
      ] })
    ] }) }) }, item.id)) }) })
  ] }) });
};
const ContactForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [userClosed, setUserClosed] = useState(false);
  const [status, setStatus] = useState("Submit");
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`/api/contact`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify(info)
      });
      setStatus("Submitted");
      setInfo({ name: "", email: "", phone: "", subject: "", message: "" });
      let result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    const hasPopupShown = localStorage.getItem("hasPopupShown");
    if (!hasPopupShown) {
      const handleScroll = () => {
        if (window.scrollY > 0 && !userClosed) {
          setShowPopup(true);
          localStorage.setItem("hasPopupShown", "true");
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [userClosed]);
  const handleClose = () => {
    setShowPopup(false);
    setUserClosed(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: `overlay ${showPopup ? "show" : ""}` }),
    /* @__PURE__ */ jsx("div", { className: `contact-form-popup ${showPopup ? "show" : ""}`, children: /* @__PURE__ */ jsxs("div", { className: "contact-form-container", children: [
      /* @__PURE__ */ jsx("button", { className: "close-button", onClick: handleClose, children: "×" }),
      /* @__PURE__ */ jsxs("div", { className: "form-content", children: [
        /* @__PURE__ */ jsxs("div", { className: "form-left", children: [
          /* @__PURE__ */ jsx("h2", { style: { textAlign: "center" }, children: "Contact Us" }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Full Name",
                name: "name",
                value: info.name,
                onChange: handleChange,
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                placeholder: "Email Address",
                name: "email",
                value: info.email,
                onChange: handleChange,
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                placeholder: "Phone Number",
                name: "phone",
                value: info.phone
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "subject",
                id: "subject",
                value: info.subject,
                onChange: handleChange,
                placeholder: "Your Subject",
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                placeholder: "Your Message",
                name: "message",
                onChange: handleChange,
                value: info.message,
                required: true
              }
            ),
            /* @__PURE__ */ jsx("button", { type: "submit", children: status })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-right", children: [
          /* @__PURE__ */ jsx("img", { src: "images/pop.webp", alt: "Nature" }),
          /* @__PURE__ */ jsxs("div", { className: "social-icons", children: [
            /* @__PURE__ */ jsx("h2", { style: { color: "black", backgroundColor: "transparent" }, children: "Follow us on" }),
            /* @__PURE__ */ jsx("a", { href: "https://www.facebook.com/Excerptech", target: "_blank", rel: "noopener noreferrer", className: "bg-black", children: /* @__PURE__ */ jsx(FaFacebook, {}) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/excerpt_technologies/?igsh=Z3k5OXozNDIzZHps", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaInstagram, {}) }),
            /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/company/excerptech", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaLinkedin, {}) })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
const Home = () => {
  return /* @__PURE__ */ jsxs("div", { style: { overflow: "hidden" }, children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Welcome to Excerpt Technologies Private Limited. We specialize in Web Design & Development, E-commerce Solutions, Data Analytics, and BI Report Generation."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Slider$1, {}),
    /* @__PURE__ */ jsx(ContactForm, {}),
    /* @__PURE__ */ jsx(HomeCard, {}),
    /* @__PURE__ */ jsx(Homeabout, {}),
    /* @__PURE__ */ jsx(Project, {}),
    /* @__PURE__ */ jsx(Contact$1, {}),
    /* @__PURE__ */ jsx(Portfolio$1, {})
  ] });
};
const Contact = () => {
  useNavigate();
  const [status, setStatus] = useState("Submit");
  const initialFormState = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }),
    []
  );
  const [info, setInfo] = useState(initialFormState);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  }, []);
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      ReactGA.event({
        category: "contact us",
        action: "Submit button click",
        value: 1
      });
      setStatus("Submitting...");
      try {
        let response = await fetch(`/api/contact`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8"
          },
          body: JSON.stringify(info)
        });
        setStatus("Submitted");
        setInfo(initialFormState);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          setStatus("Submit");
        }, 2500);
        let result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Error submitting form:", error);
        setStatus("Submit");
      }
    },
    [info, initialFormState]
  );
  const mapIframe = useMemo(
    () => /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5670664396944!2d77.69618407356857!3d12.999519314268583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11e5beced50b%3A0x6dfbb6145c02cc8b!2sExcerpt%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1705125132851!5m2!1sen!2sin",
        style: { border: "0" },
        allowFullScreen: "",
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade"
      }
    ),
    []
  );
  return /* @__PURE__ */ jsxs("main", { id: "contact__us", children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "Contact Us - EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Welcome to Excerpt Technologies Private Limited. We specialize in Web Design & Development, E-commerce Solutions, Data Analytics, and BI Report Generation."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(/images/contact-us-banner1.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        className: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "page-info", children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "heading-2",
              style: { color: "white", textAlign: "center" },
              children: "Contact Us"
            }
          ),
          /* @__PURE__ */ jsxs("h6", { className: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "Contact" })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "get-in-touch", children: [
      /* @__PURE__ */ jsx("h2", { className: "get-in-touch-title1", style: { textAlign: "center" }, children: "Get In Touch" }),
      /* @__PURE__ */ jsxs("div", { className: "get-in-touch-cards", children: [
        /* @__PURE__ */ jsxs("div", { className: "contact-card", children: [
          /* @__PURE__ */ jsx("div", { className: "contact-icon", children: /* @__PURE__ */ jsx("i", { className: "fas fa-map-marker-alt" }) }),
          /* @__PURE__ */ jsx("h3", { children: "Address" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "B133/1, 2nd Floor, KSSIDC ITI Estate, Whitefield Main Rd, ",
            /* @__PURE__ */ jsx("br", {}),
            "Mahadevapura, Bengaluru, Karnataka 560048"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "contact-card", children: [
          /* @__PURE__ */ jsx("div", { className: "contact-icon", children: /* @__PURE__ */ jsx("i", { className: "fas fa-phone-alt" }) }),
          /* @__PURE__ */ jsx("h3", { children: "Phone Number" }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("a", { href: "tel:+916364657660", children: "+91 63646 57660" }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("a", { href: "tel:+919900502404", children: "+91 99005 02404" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "contact-card", children: [
          /* @__PURE__ */ jsx("div", { className: "contact-icon", children: /* @__PURE__ */ jsx("i", { className: "fas fa-envelope" }) }),
          /* @__PURE__ */ jsx("h3", { children: "Send us mail" }),
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "mailto:info@excerptech.com", children: "info@excerptech.com" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "contact", className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
      /* @__PURE__ */ jsx("div", { className: "col-lg-7", children: /* @__PURE__ */ jsxs("div", { className: "contact__form", children: [
        /* @__PURE__ */ jsx("div", { className: "contact__form--header mb-20", children: "Have any Question On Mind!" }),
        /* @__PURE__ */ jsx("div", { className: "contact__form--desc ", children: "Your email address will not be published. Required fields are marked" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxs("div", { className: "row g-4 mt-25", children: [
            /* @__PURE__ */ jsx("div", { className: "col-sm-6", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "name",
                id: "name",
                value: info.name,
                onChange: handleChange,
                placeholder: "Your Name",
                required: true
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "col-sm-6", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                name: "email",
                id: "email",
                value: info.email,
                onChange: handleChange,
                placeholder: "Email Address",
                required: true
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "row g-4 ", children: [
            /* @__PURE__ */ jsx("div", { className: "col-sm-6", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                name: "phone",
                id: "phone",
                value: info.phone,
                onChange: (e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    if (value.length <= 10) {
                      handleChange(e);
                    } else {
                      alert("⚠️ Phone number cannot exceed 10 digits");
                    }
                  }
                },
                placeholder: "+91",
                maxLength: "10",
                required: true
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "col-sm-6", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "subject",
                id: "subject",
                value: info.subject,
                onChange: handleChange,
                placeholder: "Your Subject",
                required: true
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              name: "message",
              id: "message",
              placeholder: "Your Comment",
              required: true,
              value: info.message,
              onChange: handleChange
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "button-primary-1 mt-25", children: /* @__PURE__ */ jsx("span", { children: status }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-lg-5 mb-40", children: /* @__PURE__ */ jsx("div", { className: "contact__map", children: mapIframe }) })
    ] }) }),
    showPopup && /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              background: "#fff",
              padding: "40px 60px",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "600",
              color: "#333"
            },
            children: "Thank You For Submitting"
          }
        )
      }
    )
  ] });
};
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const portfolioItems = [
    {
      id: 1,
      title: "RGVK",
      category: "Static",
      type: "Tourism",
      image: "/portfolio/rgvk.webp",
      link: "https://rgvkindia.com/",
      className: "hideOnMd"
    },
    {
      id: 2,
      title: "Car Captain",
      category: "E-com",
      type: "E-Commerce",
      image: "/portfolio/car.webp",
      link: "https://carcaptain.in/",
      className: ""
    },
    {
      id: 3,
      title: "DTECH",
      category: "CRM",
      type: "Civil",
      image: "/portfolio/dtech.webp",
      link: "https://dtechwale.com/",
      className: "hideOnMd"
    },
    {
      id: 4,
      title: "RoyalHood",
      category: "E-com",
      type: "E-Commerce",
      image: "/portfolio/royalhood.webp",
      link: "https://royalhood.in/",
      className: ""
    },
    {
      id: 5,
      title: "ANANTA SAUKHYAM",
      category: "Health",
      type: "Wellness",
      image: "/portfolio/ananta.webp",
      link: "https://anantasaukhyam.com/",
      className: "hideOnMd"
    },
    {
      id: 6,
      title: "DIEA",
      category: "CRM",
      type: "Industrial Association",
      image: "/portfolio/diea.webp",
      link: "",
      className: "hideOnMd"
    },
    {
      id: 7,
      title: "AUTOMET ENGINEERING",
      category: "Static",
      type: "Automobile",
      image: "/portfolio/automet.webp",
      link: "http://www.autometengg.com/",
      className: "hideOnMd"
    },
    {
      id: 8,
      title: "GIFCO AUTO FILTERS",
      category: "Static",
      type: "Automobile",
      image: "/portfolio/gifco.webp",
      link: "http://gifcoindia.com/",
      className: "hideOnMd"
    },
    {
      id: 9,
      title: "Shaw Tech Training Services",
      category: "LMS",
      type: "Educational",
      image: "portfolio/stts.webp",
      link: "https://sttsonline.com/",
      className: "hideOnMd"
    },
    {
      id: 10,
      title: "Mech Mold",
      category: "Static",
      type: "Industrial",
      image: "portfolio/mech.webp",
      link: "https://mechmold.com/",
      className: "hideOnMd"
    },
    {
      id: 11,
      title: "IT DESK MAHADEVPURA",
      category: "LMS",
      type: "Educational",
      image: "images/p5.webp",
      link: "https://itdeskmahadevpura.com/",
      className: ""
    },
    {
      id: 12,
      title: "CAD DESK MAHADEVPURA",
      category: "LMS",
      type: "Educational",
      image: "images/p4.webp",
      link: "http://caddeskmahadevpura.com/",
      className: ""
    },
    {
      id: 13,
      title: "Terra Clenz",
      category: "E-com",
      type: "E-Commerce",
      image: "portfolio/terra.webp",
      link: "https://terraclenz.com/",
      className: ""
    },
    {
      id: 14,
      title: "Cad desk",
      category: "CRM",
      type: "CRM",
      image: "portfolio/cad.webp",
      link: "https://caddesk.in/",
      className: ""
    },
    {
      id: 15,
      title: "JBK Academy",
      category: "CRM",
      type: "CRM",
      image: "portfolio/jbk.webp",
      link: "https://jbkadmin.jbkacademy.in/",
      className: ""
    },
    {
      id: 16,
      title: "Triicons",
      category: "CRM",
      type: "CRM",
      image: "portfolio/triicons.webp",
      link: "https://triicons.com/",
      className: ""
    },
    {
      id: 17,
      title: "City Hospitality Solutions",
      category: "CRM",
      type: "CRM",
      image: "portfolio/city.webp",
      link: "https://crm.cityhospitalitysolutions.com",
      className: ""
    },
    {
      id: 18,
      title: "Jyothi Cloud ERP",
      category: "ERP",
      type: "ERP",
      image: "portfolio/erp.webp",
      link: "https://erp.etpl.ai",
      className: ""
    },
    {
      id: 19,
      title: "BDM Technology",
      category: "Static",
      type: "Educational",
      image: "portfolio/bdm.webp",
      link: "https://bdmtech.in/",
      className: ""
    },
    {
      id: 20,
      title: "Darklick",
      category: "Static",
      type: "Product",
      image: "portfolio/dark.webp",
      link: "http://darklick.com/",
      className: "hideOnMd"
    },
    {
      id: 21,
      title: "Lynx industries",
      category: "Static",
      type: "Industrial",
      image: "portfolio/lynx.webp",
      link: "http://lynxindustries.in/",
      className: "hideOnMd"
    },
    {
      id: 22,
      title: "P and S Industries",
      category: "Static",
      type: "Industrial",
      image: "portfolio/ps.webp",
      link: "http://pandsindustries.in",
      className: "hideOnMd"
    },
    {
      id: 23,
      title: " Sri Engineering",
      category: "Static",
      type: "Industrial",
      image: "portfolio/srii.webp",
      link: "https://sriengineering.net/",
      className: "hideOnMd"
    },
    {
      id: 24,
      title: "Sai Shanti Vidya Niketan",
      category: "Static",
      type: "Educational",
      image: "portfolio/ssvn.webp",
      link: "http://saishantividyaniketan.in/",
      className: "hideOnMd"
    },
    {
      id: 25,
      title: "Umang Marketing & Engineering Services",
      category: "Static",
      type: "Industrial",
      image: "portfolio/umang.webp",
      link: "https://umangmarketing.com/",
      className: "hideOnMd"
    },
    {
      id: 26,
      title: "Upstreams",
      category: "Static",
      type: "Industrial",
      image: "portfolio/upst.webp",
      link: "https://upstreamhotels.in/",
      className: "hideOnMd"
    },
    {
      id: 27,
      title: "Terra Batteries",
      category: "Static",
      type: "Ecommerce",
      image: "portfolio/terrabat.webp",
      link: "https://terrabatteries.com/",
      className: "hideOnMd"
    }
  ];
  const sliderImages = portfolioItems.slice(0, 8);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4e3);
    return () => clearInterval(timer);
  }, [sliderImages.length]);
  const categories = ["All", ...new Set(portfolioItems.map((item) => item.category))];
  const filteredItems = activeTab === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeTab);
  const initialItemCount = 6;
  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, initialItemCount);
  const hasMoreItems = filteredItems.length > initialItemCount;
  const renderPortfolioCard = (item) => {
    const CardContent = () => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `news-card position-relative ${item.id === 2 ? "news-card-dyavasandra" : ""}`,
        style: item.id === 2 ? { height: "330px" } : {},
        children: [
          /* @__PURE__ */ jsx("div", { className: "img-wrapper mb-30", children: /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title }) }),
          /* @__PURE__ */ jsxs("div", { className: "content", children: [
            /* @__PURE__ */ jsx("h5", { className: "heading-5", children: item.title }),
            /* @__PURE__ */ jsx("div", { className: "paragraph mb-25", children: item.type })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "circle-1 position-absolute" }),
          /* @__PURE__ */ jsx("div", { className: "circle-2 position-absolute" })
        ]
      }
    );
    return /* @__PURE__ */ jsx("div", { className: `col-md-6 col-lg-4 ${item.className}`, children: item.link ? /* @__PURE__ */ jsx("a", { href: item.link, className: "link-to-external-website", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(CardContent, {}) }) : /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(CardContent, {}) }) }, item.id);
  };
  const handleReadMore = () => {
    setShowAll(!showAll);
  };
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("style", { children: `
                .simple-slider-ram {
                    position: relative;
                    width: 100%;
                    max-width: 100%;
                    height: 580px;
                    overflow: hidden;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    background: #e9ecef;
                }

                .simple-slides-wrapper-ram {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .simple-single-slide-ram {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: white;
                }

                .simple-single-slide-ram.active-slide-ram {
                    opacity: 1;
                    z-index: 1;
                }

                .simple-slide-img-ram {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .simple-nav-btn-ram {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255, 255, 255, 0.95);
                    border: none;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 10;
                    font-size: 24px;
                    color: #0011ff;
                    font-weight: bold;
                    transition: all 0.3s;
                }

                .simple-nav-btn-ram:hover {
                    background: #0011ff;
                    color: white;
                    transform: translateY(-50%) scale(1.1);
                }

                .simple-nav-btn-ram.left-ram {
                    left: 20px;
                }

                .simple-nav-btn-ram.right-ram {
                    right: 20px;
                }

                .simple-dots-wrapper-ram {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 12px;
                    z-index: 10;
                }

                .simple-dot-ram {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    cursor: pointer;
                    transition: all 0.3s;
                    border: 2px solid rgba(0, 17, 255, 0.3);
                }

                .simple-dot-ram.dot-active-ram {
                    background: #0011ff;
                    transform: scale(1.3);
                    border-color: #0011ff;
                }

                @media (max-width: 768px) {
                    .simple-slider-ram {
                        height: 300px;
                        margin-bottom: 30px;
                    }

                    .simple-slide-img-ram {
                        object-fit: contain;
                        padding: 20px;
                    }

                    .simple-nav-btn-ram {
                        width: 40px;
                        height: 40px;
                        font-size: 20px;
                    }

                    .simple-nav-btn-ram.left-ram {
                        left: 10px;
                    }

                    .simple-nav-btn-ram.right-ram {
                        right: 10px;
                    }

                    .simple-dots-wrapper-ram {
                        bottom: 10px;
                        gap: 8px;
                    }

                    .simple-dot-ram {
                        width: 10px;
                        height: 10px;
                    }

                    .portfolio-tabs-ram {
                        margin-top: 20px !important;
                        margin-bottom: 30px !important;
                        overflow-x: auto;
                        -webkit-overflow-scrolling: touch;
                    }

                    .tab-wrapper-ram {
                        display: flex;
                        gap: 8px;
                        padding: 0 15px;
                    }

                    .tab-btn-ram {
                        padding: 10px 18px !important;
                        font-size: 13px !important;
                        white-space: nowrap;
                        flex-shrink: 0;
                    }

                    .hideOnMd {
                        display: none !important;
                    }
                }

                @media (max-width: 480px) {
                    .simple-slider-ram {
                        height: 250px;
                    }

                    .simple-nav-btn-ram {
                        width: 35px;
                        height: 35px;
                        font-size: 18px;
                    }

                    .simple-nav-btn-ram.left-ram {
                        left: 8px;
                    }

                    .simple-nav-btn-ram.right-ram {
                        right: 8px;
                    }
                }
            ` }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/00.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        className: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "page-info ", children: [
          /* @__PURE__ */ jsx("h2", { className: "heading-2", style: { color: "white", textAlign: "center" }, children: "Our Portfolio" }),
          /* @__PURE__ */ jsxs("h6", { className: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "Portfolio" })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxs("section", { id: "projects", children: [
      /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsxs("div", { className: "simple-slider-ram", children: [
          /* @__PURE__ */ jsx("div", { className: "simple-slides-wrapper-ram", children: sliderImages.map((item, index) => /* @__PURE__ */ jsx(
            "div",
            {
              className: `simple-single-slide-ram ${index === currentSlide ? "active-slide-ram" : ""}`,
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: item.image,
                  alt: item.title,
                  className: "simple-slide-img-ram"
                }
              )
            },
            index
          )) }),
          /* @__PURE__ */ jsx("button", { className: "simple-nav-btn-ram left-ram", onClick: prevSlide, children: "‹" }),
          /* @__PURE__ */ jsx("button", { className: "simple-nav-btn-ram right-ram", onClick: nextSlide, children: "›" }),
          /* @__PURE__ */ jsx("div", { className: "simple-dots-wrapper-ram", children: sliderImages.map((_, index) => /* @__PURE__ */ jsx(
            "span",
            {
              className: `simple-dot-ram ${index === currentSlide ? "dot-active-ram" : ""}`,
              onClick: () => goToSlide(index)
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "portfolio-tabs-ram d-flex", children: /* @__PURE__ */ jsx("div", { className: "tab-wrapper-ram d-flex", children: categories.map((category) => /* @__PURE__ */ jsx(
          "button",
          {
            className: `tab-btn-ram ${activeTab === category ? "active" : ""}`,
            onClick: () => {
              setActiveTab(category);
              setShowAll(false);
            },
            style: {
              padding: "12px 24px",
              margin: "5px 8px",
              border: "none",
              borderRadius: "25px",
              backgroundColor: activeTab === category ? "#0011ffff" : "transparent",
              color: activeTab === category ? "white" : "#333",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
              fontSize: "16px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              minWidth: "120px",
              whiteSpace: "nowrap"
            },
            onMouseEnter: (e) => {
              if (activeTab !== category) {
                e.target.style.backgroundColor = "#f8f9fa";
                e.target.style.color = "#0011ffff";
              }
            },
            onMouseLeave: (e) => {
              if (activeTab !== category) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#333";
              }
            },
            children: category
          },
          category
        )) }) })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "latest-news", className: "home__latest--news", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("div", { className: "row", children: itemsToShow.map((item) => renderPortfolioCard(item)) }),
        hasMoreItems && /* @__PURE__ */ jsx("div", { className: "d-flex justify-content-center mt-50", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleReadMore,
            style: {
              padding: "15px 30px",
              border: "2px solid #0011ffff",
              borderRadius: "30px",
              backgroundColor: showAll ? "#0011ffff" : "transparent",
              color: showAll ? "white" : "#0011ffff",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              transition: "all 0.3s ease",
              minWidth: "180px"
            },
            onMouseEnter: (e) => {
              if (!showAll) {
                e.target.style.backgroundColor = "#0011ffff";
                e.target.style.color = "white";
              }
            },
            onMouseLeave: (e) => {
              if (!showAll) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#0011ffff";
              }
            },
            children: showAll ? "Show Less" : "Read More"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "space50" })
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/Newimage/digital-marketing-banner1.webp)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        },
        id: "newsletter",
        className: "portfolio__newsletter",
        children: /* @__PURE__ */ jsx("div", { className: "container newsletter-Wrapper", children: /* @__PURE__ */ jsxs("div", { className: "text", children: [
          /* @__PURE__ */ jsx("h3", { children: "Join to Our Team For More Info" }),
          /* @__PURE__ */ jsx("p", { children: "Excerpt Technologies PVT LTD" })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "space50" })
  ] });
};
const Webdesign = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "section",
      {
        style: {
          backgroundImage: "url(images/w01.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        class: "sub-header position-relative",
        children: [
          /* @__PURE__ */ jsxs(HelmetExport, { children: [
            /* @__PURE__ */ jsx("title", { children: "Web Design & Development | E-commerce Solutions | Excerpt Technologies" }),
            /* @__PURE__ */ jsx(
              "meta",
              {
                name: "description",
                content: "Discover top-tier Web Design and Development, along with cutting-edge E-commerce Solutions at Excerpt Technologies. Our expert team delivers customized, responsive websites and powerful online stores to enhance your digital footprint. Get in touch to transform your business today!"
              }
            ),
            /* @__PURE__ */ jsx(
              "meta",
              {
                name: "keywords",
                content: "software solutions website,\r\nbest website developers in bengaluru,\r\nbest website developers for small business,\r\necommerce website developers,\r\necommerce website developers in bangalore,\r\necommerce website developers near me,\r\nwebsite design & development services,\r\nwebsite developers"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "page-info", children: [
            /* @__PURE__ */ jsxs(
              "h2",
              {
                class: "heading-2",
                style: { color: "white", textAlign: "center" },
                children: [
                  "AI Chat Bot Auto Replay",
                  " "
                ]
              }
            ),
            /* @__PURE__ */ jsxs("h6", { class: "heading-6", children: [
              /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
              " / ",
              /* @__PURE__ */ jsx("a", { href: "#", children: "Ai Chat Bot" })
            ] })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { class: "space120" }),
    /* @__PURE__ */ jsx("section", { id: "service-details", class: "service-details", children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { class: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { class: "img-wrapper mb-25", children: /* @__PURE__ */ jsx("img", { src: "images/web1.webp", class: "img-fluid", alt: "" }) }),
        /* @__PURE__ */ jsx("h4", { class: "heading-4 mb-25", children: "Ai Chat Bot and Auto Replay Bot" }),
        /* @__PURE__ */ jsx("div", { class: "paragraph mb-40", children: "AI Chatbot Integration involves embedding an intelligent chatbot into your website, app, or platform to automate customer interactions, provide instant support, and improve engagement. These chatbots use AI and machine learning to understand queries, offer solutions, and collect valuable customer insights, helping businesses save time, reduce workload, and enhance user experience." }),
        /* @__PURE__ */ jsxs("div", { class: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { class: "col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/web2.webp",
              class: "img-fluid sub",
              alt: "",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { class: "d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/web3.webp", class: "img-fluid sub", alt: "" }) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "heading-3 mb-25", children: "Ai Chat Bot Services" }),
        /* @__PURE__ */ jsxs(
          "ul",
          {
            className: "paragraph mb-40",
            style: { listStyleType: "disc", paddingLeft: "20px" },
            children: [
              /* @__PURE__ */ jsx("li", { children: "Chatbot Design – Conversation flow" }),
              /* @__PURE__ */ jsx("li", { children: "AI Training – Smart responses" }),
              /* @__PURE__ */ jsx("li", { children: "Platform Integration – Website & app" }),
              /* @__PURE__ */ jsx("li", { children: "Customer Support Automation – Instant help" }),
              /* @__PURE__ */ jsx("li", { children: "Analytics & Reporting – User insights" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { class: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: "d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { class: "service", children: [
          /* @__PURE__ */ jsx("h4", { class: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { class: "underline" }),
          /* @__PURE__ */ jsxs("ul", { class: "service-list", children: [
            /* @__PURE__ */ jsx("li", { class: "active", children: /* @__PURE__ */ jsx("a", { href: "/ecommerce", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Ecommerce" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "MobileApplication" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Cybersecurity", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "CyberSecurity" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DigitalMarketing" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEOAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Dataanalytics", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DataAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "squre-banner", children: /* @__PURE__ */ jsx("h2", { class: "heading-3", children: "Easy solutions to your tech problem" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { class: "space120" })
  ] });
};
const Mobileapp = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "Mobile Application Development - EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Excerpt Technologies Private Limited offers expert Mobile Application Development services, creating custom iOS and Android apps that prioritize performance, usability, and innovation."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/m01.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        class: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "page-info", children: [
          /* @__PURE__ */ jsx("h2", { class: "heading-2", style: { color: "white", textAlign: "center" }, children: "Mobile Application " }),
          /* @__PURE__ */ jsxs("h6", { class: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "Mobile Application " })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", class: "service-details", children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { class: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { class: "img-wrapper mb-25", children: /* @__PURE__ */ jsx("img", { src: "images/mb2.png", class: "img-fluid", alt: "" }) }),
        /* @__PURE__ */ jsx("h4", { class: "heading-4 mb-25", children: "Mobile Application Development" }),
        /* @__PURE__ */ jsx("div", { class: "paragraph mb-40", children: "We excel in crafting custom mobile apps for iOS and Android, prioritizing performance, usability, and innovation. Our experienced team ensures your app meets business needs while delivering exceptional user experiences, from concept to deployment." }),
        /* @__PURE__ */ jsxs("div", { class: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { class: "col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/mb1.webp",
              class: "img-fluid sub",
              alt: "",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { class: " d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/mb3.webp", class: "img-fluid sub", alt: "" }) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { class: "heading-3 mb-25", children: "Manage designing Solutions" }),
        /* @__PURE__ */ jsx("div", { class: "paragraph mb-40", children: "Collaborating closely with you, our team crafts intuitive interfaces and engaging experiences. We prioritize user-centric designs, ensuring functionality and aesthetics seamlessly merge for your app's success." }),
        /* @__PURE__ */ jsx("div", { class: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: " d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { class: "service", children: [
          /* @__PURE__ */ jsx("h4", { class: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { class: "underline" }),
          /* @__PURE__ */ jsxs("ul", { class: "service-list", children: [
            /* @__PURE__ */ jsx("li", { class: "active", children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Mobile Appliaction Development" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ecommerce", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Ecommerce" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Cybersecurity", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "CyberSecurity" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DigitalMarketing" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEOAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Dataanalytics", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DataAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "squre-banner", children: /* @__PURE__ */ jsx("h2", { class: "heading-3", children: "Easy solutions to your tech problem" }) })
      ] })
    ] }) }) })
  ] });
};
const Cybersecurity = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "Cyber Security - EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Excerpt Technologies Private Limited provides comprehensive Cyber Security services to protect your business from cyber threats, ensuring data security and uninterrupted operations."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/banners1se1.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        class: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "page-info", children: [
          /* @__PURE__ */ jsx("h2", { class: "heading-2", style: { color: "white", textAlign: "center" }, children: "Cyber Security " }),
          /* @__PURE__ */ jsxs("h6", { class: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "Cyber Security" })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", class: "service-details", children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { class: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { class: "img-wrapper mb-25", children: /* @__PURE__ */ jsx("img", { src: "images/cb3.webp", class: "img-fluid", alt: "" }) }),
        /* @__PURE__ */ jsx("h4", { class: "heading-4 mb-25", children: "Cyber Security" }),
        /* @__PURE__ */ jsx("div", { class: "paragraph mb-40", children: "We prioritize safeguarding your digital assets with our comprehensive cyber security services. Our experts protect your business from cyber threats, ensuring data security and uninterrupted operations. From threat detection to compliance management, we offer tailored solutions with the latest technologies for robust defenses." }),
        /* @__PURE__ */ jsxs("div", { class: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { class: "col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/cb1.webp",
              class: "img-fluid sub",
              alt: "",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { class: "d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/cb2.webp", class: "img-fluid sub", alt: "" }) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { class: "heading-3 mb-25", children: "Manage designing Solutions" }),
        /* @__PURE__ */ jsx("div", { class: "paragraph mb-40", children: "We customize solutions to your security needs, crafting effective and scalable architectures. Our experts collaborate with you throughout the process, ensuring ongoing protection and adaptability for your evolving business." }),
        /* @__PURE__ */ jsx("div", { class: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: " d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { class: "service", children: [
          /* @__PURE__ */ jsx("h4", { class: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { class: "underline" }),
          /* @__PURE__ */ jsxs("ul", { class: "service-list", children: [
            /* @__PURE__ */ jsx("li", { class: "active", children: /* @__PURE__ */ jsx("a", { href: "/Cybersecurity", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Cyber Security" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "MobileApplication" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ecommerce", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Ecommerce" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DigitalMarketing" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEOAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Dataanalytics", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DataAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "squre-banner", children: /* @__PURE__ */ jsx("h2", { class: "heading-3", children: "Easy solutions to your tech problem" }) })
      ] })
    ] }) }) })
  ] });
};
const Dataanalytics = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "Data Analytics - EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Excerpt Technologies Private Limited offers expert Data Analytics and Power BI services, transforming your business data into actionable insights for informed decision-making."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/da01.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        class: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "page-info", children: [
          /* @__PURE__ */ jsx("h2", { class: "heading-2", style: { color: "white", textAlign: "center" }, children: "Data Analytics " }),
          /* @__PURE__ */ jsxs("h6", { class: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "Data Analytics " })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", class: "service-details", children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { class: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { class: "img-wrapper mb-25", children: /* @__PURE__ */ jsx("img", { src: "images/da1.webp", class: "img-fluid", alt: "" }) }),
        /* @__PURE__ */ jsx("h4", { class: "heading-4 mb-25", children: "Data Analytics" }),
        /* @__PURE__ */ jsx("div", { class: "paragraph mb-40", children: "A Power BI Dashboard is an interactive platform that visualizes your business data in real-time, helping you track performance, identify trends, and make data-driven decisions. It consolidates data from multiple sources into easy-to-understand charts, graphs, and reports, empowering businesses to act faster and smarter." }),
        /* @__PURE__ */ jsxs("div", { class: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { class: "col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/da2.webp",
              class: "img-fluid sub",
              alt: "",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { class: "d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/da3.webp", class: "img-fluid sub", alt: "" }) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "heading-3 mb-25", children: "Power BI - Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "paragraph mb-40", style: { listStyleType: "disc", paddingLeft: "20px" }, children: [
          /* @__PURE__ */ jsx("li", { children: "Dashboard Design – Visual reports" }),
          /* @__PURE__ */ jsx("li", { children: "Data Integration – Connect sources" }),
          /* @__PURE__ */ jsx("li", { children: "Analytics & Insights – Trend analysis" }),
          /* @__PURE__ */ jsx("li", { children: "Report Automation – Auto updates" }),
          /* @__PURE__ */ jsx("li", { children: "Custom Solutions – Tailored dashboards" })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: " d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { class: "service", children: [
          /* @__PURE__ */ jsx("h4", { class: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { class: "underline" }),
          /* @__PURE__ */ jsxs("ul", { class: "service-list", children: [
            /* @__PURE__ */ jsx("li", { class: "active", children: /* @__PURE__ */ jsx("a", { href: "/Dataanalytics", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Data Analytics and Power BI" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "MobileApplication" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Cybersecurity", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "CyberSecurity" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DigitalMarketing" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEOAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ecommerce", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Ecommerce" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "squre-banner", children: /* @__PURE__ */ jsx("h2", { class: "heading-3", children: "Easy solutions to your tech problem" }) })
      ] })
    ] }) }) })
  ] });
};
const DigitalMarketing = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "Digital Marketing - EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Excerpt Technologies Private Limited provides expert Digital Marketing services to enhance your online presence, drive traffic, and boost conversions through tailored strategies."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/dm01.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        class: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "page-info", children: [
          /* @__PURE__ */ jsx("h2", { class: "heading-2", style: { color: "white", textAlign: "center" }, children: "Digital Marketing " }),
          /* @__PURE__ */ jsxs("h6", { class: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "Digital Marketing" })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", class: "service-details", children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { class: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { class: "img-wrapper mb-25", children: /* @__PURE__ */ jsx("img", { src: "images/dg.webp", class: "img-fluid", alt: "" }) }),
        /* @__PURE__ */ jsx("h4", { class: "heading-4 mb-25", children: "Digital Marketing Solutions" }),
        /* @__PURE__ */ jsx("div", { class: "paragraph mb-40", children: "Digital Marketing helps businesses connect with the right audience online, boost visibility, and drive sales through targeted strategies. It’s the art of promoting brands online using SEO, social media, ads, and more to grow faster in the digital world." }),
        /* @__PURE__ */ jsxs("div", { class: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { class: "col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/dg2.webp",
              class: "img-fluid sub",
              alt: "",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { class: " d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/dg3.webp", class: "img-fluid sub", alt: "" }) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "heading-3 mb-25", children: "Digital Marketing Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "paragraph mb-40", style: { listStyleType: "disc", paddingLeft: "20px" }, children: [
          /* @__PURE__ */ jsx("li", { children: "Google Ads – Paid search campaigns" }),
          /* @__PURE__ */ jsx("li", { children: "Meta Ads – Social media ads" }),
          /* @__PURE__ */ jsx("li", { children: "SEO – Organic traffic growth" }),
          /* @__PURE__ */ jsx("li", { children: "WhatsApp Bulk Messaging – Instant mass outreach" }),
          /* @__PURE__ */ jsx("li", { children: "Social Media Marketing – Brand engagement online" }),
          /* @__PURE__ */ jsx("li", { children: "WhatsApp E-commerce – Chat-based selling" }),
          /* @__PURE__ */ jsx("li", { children: "Website Development – Custom site design" })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: "d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { class: "service", children: [
          /* @__PURE__ */ jsx("h4", { class: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { class: "underline" }),
          /* @__PURE__ */ jsxs("ul", { class: "service-list", children: [
            /* @__PURE__ */ jsx("li", { class: "active", children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Digital Marketing" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "MobileApplication" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Cybersecurity", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "CyberSecurity" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ecommerce", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Ecommerce" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEOAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Dataanalytics", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DataAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "squre-banner", children: /* @__PURE__ */ jsx("h2", { class: "heading-3", children: "Easy solutions to your tech problem" }) })
      ] })
    ] }) }) })
  ] });
};
const Ecommerce = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "E-commerce - EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Excerpt Technologies Private Limited offers comprehensive E-commerce solutions to help businesses establish a strong online presence and drive sales."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/e01.webp)",
          backgroundColor: "rgb(255, 255, 255)",
          backgroundSize: "cover",
          // or "contain" based on your preference
          backgroundPosition: "center center",
          // adjust as needed
          backgroundRepeat: "no-repeat"
        },
        class: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "page-info", children: [
          /* @__PURE__ */ jsx("h2", { class: "heading-2", children: "E-commerce " }),
          /* @__PURE__ */ jsxs("h6", { class: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "Ecommerce " })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", class: "service-details", children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { class: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { class: "img-wrapper mb-25", children: /* @__PURE__ */ jsx("img", { src: "images/ecommerce1.webp", class: "img-fluid", alt: "" }) }),
        /* @__PURE__ */ jsx("h4", { class: "heading-4 mb-25", children: "E-Commerce solutions." }),
        /* @__PURE__ */ jsx("div", { class: "paragraph mb-40", children: "An E-Commerce Website is an online platform that allows businesses to sell products or services directly to customers over the internet. It includes product catalogs, shopping carts, secure payment gateways, and order management, providing a convenient and seamless shopping experience. E-commerce websites help businesses expand their reach, boost sales, and manage operations efficiently." }),
        /* @__PURE__ */ jsxs("div", { class: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { class: "col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/ecommerce2.webp",
              class: "img-fluid sub",
              alt: "",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { class: " d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/ecommerce3.webp",
              class: "img-fluid sub",
              alt: ""
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "heading-3 mb-25", children: "E- Commerce Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "paragraph mb-40", style: { listStyleType: "disc", paddingLeft: "20px" }, children: [
          /* @__PURE__ */ jsx("li", { children: "Website Design – Visual layout" }),
          /* @__PURE__ */ jsx("li", { children: "Product Catalog – Item listing" }),
          /* @__PURE__ */ jsx("li", { children: "Payment Gateway – Secure checkout" }),
          /* @__PURE__ */ jsx("li", { children: "Order Management – Track purchases" }),
          /* @__PURE__ */ jsx("li", { children: "SEO & Marketing – Online visibility" })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: " d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { class: "service", children: [
          /* @__PURE__ */ jsx("h4", { class: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { class: "underline" }),
          /* @__PURE__ */ jsxs("ul", { class: "service-list", children: [
            /* @__PURE__ */ jsx("li", { class: "active", children: /* @__PURE__ */ jsx("a", { href: "/webdesign", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "E-Commerce" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "MobileApplication" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Cybersecurity", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "CyberSecurity" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DigitalMarketing" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEOAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Dataanalytics", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DataAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "squre-banner", children: /* @__PURE__ */ jsx("h2", { class: "heading-3", children: "Easy solutions to your tech problem" }) })
      ] })
    ] }) }) })
  ] });
};
const Seo = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "SEO Analytics - EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Excerpt Technologies Private Limited offers expert SEO Analytics services to enhance your online visibility and drive organic traffic."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/s02.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        class: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "page-info", children: [
          /* @__PURE__ */ jsx("h2", { class: "heading-2", style: { color: "white", textAlign: "center" }, children: "SEO " }),
          /* @__PURE__ */ jsxs("h6", { class: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "SEO Analytics " })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", class: "service-details", children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { class: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { class: "img-wrapper mb-25", children: /* @__PURE__ */ jsx("img", { src: "images/sr1.webp", class: "img-fluid", alt: "" }) }),
        /* @__PURE__ */ jsx("h4", { class: "heading-4 mb-25", children: "Search Engine Optimizatrion(SEO)" }),
        /* @__PURE__ */ jsx("div", { class: "paragraph mb-40", children: "Experience our SEO Analytics service, dedicated to enhancing your online visibility through strategic optimization. Leveraging advanced analytics, we customize strategies to boost organic traffic and elevate search rankings, prioritizing keyword research and engaging content optimization aligned with your objectives." }),
        /* @__PURE__ */ jsxs("div", { class: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { class: "col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/sr2.webp",
              class: "img-fluid sub",
              alt: "",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { class: "d-none d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/sr3.webp", class: "img-fluid sub", alt: "" }) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { class: "heading-3 mb-25", children: "Manage designing Solutions" }),
        /* @__PURE__ */ jsx("div", { class: "paragraph mb-40", children: "Our team collaborates closely with you to craft responsive, user-friendly layouts that reflect your brand identity and optimize user experience. With meticulous attention to detail, we ensure your website supports SEO efforts and fosters sustained growth." }),
        /* @__PURE__ */ jsx("div", { class: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: "d-none d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { class: "service", children: [
          /* @__PURE__ */ jsx("h4", { class: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { class: "underline" }),
          /* @__PURE__ */ jsxs("ul", { class: "service-list", children: [
            /* @__PURE__ */ jsx("li", { class: "active", children: /* @__PURE__ */ jsx("a", { href: "/webdesign", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Web Design and Development" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "MobileApplication" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Cybersecurity", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "CyberSecurity" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DigitalMarketing" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ecommerce", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Ecommerce" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Dataanalytics", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DataAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "squre-banner", children: /* @__PURE__ */ jsx("h2", { class: "heading-3", children: "Easy solutions to your tech problem" }) })
      ] })
    ] }) }) })
  ] });
};
const Uiux$1 = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "UI/UX Design - EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Excerpt Technologies Private Limited specializes in UI/UX design, creating user-centered interfaces that enhance user experience and engagement."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/banners1se1.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        class: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "page-info", children: [
          /* @__PURE__ */ jsx("h2", { class: "heading-2", style: { color: "white", textAlign: "center" }, children: "UI UX" }),
          /* @__PURE__ */ jsxs("h6", { class: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "UIUX" })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", class: "service-details", children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { class: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { class: "img-wrapper mb-25", children: /* @__PURE__ */ jsx("img", { src: "images/w01.webp", class: "img-fluid", alt: "" }) }),
        /* @__PURE__ */ jsx("h4", { class: "heading-4 mb-25", children: "STATIC WEBSITE" }),
        /* @__PURE__ */ jsx("div", { class: "paragraph mb-40", children: "A Static Website is a simple, fast-loading website with fixed content that doesn’t change dynamically. It’s ideal for businesses or individuals who need an online presence to showcase information, products, or services without frequent updates. Static websites are cost-effective, secure, and easy to maintain, providing a professional digital footprint." }),
        /* @__PURE__ */ jsxs("div", { class: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { class: "col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/web2.webp",
              class: "img-fluid sub",
              alt: "",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { class: " d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/web3.webp", class: "img-fluid sub", alt: "" }) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "heading-3 mb-25", children: "Static Website Services " }),
        /* @__PURE__ */ jsxs("ul", { className: "paragraph mb-40", style: { listStyleType: "disc", paddingLeft: "20px" }, children: [
          /* @__PURE__ */ jsx("li", { children: "Website Design – Visual layout" }),
          /* @__PURE__ */ jsx("li", { children: "Content Setup – Text & images" }),
          /* @__PURE__ */ jsx("li", { children: "Domain & Hosting – Online setup" }),
          /* @__PURE__ */ jsx("li", { children: "SEO Optimization – Search visibility" }),
          /* @__PURE__ */ jsx("li", { children: "Maintenance – Updates & support" })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: " d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { class: "service", children: [
          /* @__PURE__ */ jsx("h4", { class: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { class: "underline" }),
          /* @__PURE__ */ jsxs("ul", { class: "service-list", children: [
            /* @__PURE__ */ jsx("li", { class: "active", children: /* @__PURE__ */ jsx("a", { href: "/webdesign", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Web Design and Development" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "MobileApplication" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Cybersecurity", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "CyberSecurity" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DigitalMarketing" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEOAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Dataanalytics", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DataAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "squre-banner", children: /* @__PURE__ */ jsx("h2", { class: "heading-3", children: "Easy solutions to your tech problem" }) })
      ] })
    ] }) }) })
  ] });
};
const ErpSystems = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "ERP Systems - EXCERPT TECHNOLOGIES PRIVATE LIMITED" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Explore our ERP systems designed to streamline your business processes."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/banners1se1.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        className: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "page-info", children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "heading-2",
              style: { color: "white", textAlign: "center" },
              children: "ERP Systems"
            }
          ),
          /* @__PURE__ */ jsxs("h6", { className: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "ERP Systems" })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", className: "service-details", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { className: "img-wrapper mb-25", children: /* @__PURE__ */ jsx("img", { src: "service/erp22.webp", className: "img-fluid", alt: "" }) }),
        /* @__PURE__ */ jsx("h4", { className: "heading-4 mb-25", children: "ERP Systems" }),
        /* @__PURE__ */ jsx("div", { className: "paragraph mb-40", children: "ERP System (Enterprise Resource Planning) is software that helps businesses manage core processes like finance, HR, sales, inventory, and operations in one unified platform for better efficiency and decision-making." }),
        /* @__PURE__ */ jsxs("div", { className: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "service/erp21.webp",
              className: "img-fluid sub",
              alt: "",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: " d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "service/erp23.webp", className: "img-fluid sub", alt: "" }) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "heading-3 mb-25", children: "ERP Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "paragraph mb-40", style: { listStyleType: "disc", paddingLeft: "20px" }, children: [
          /* @__PURE__ */ jsx("li", { children: "Consulting – Expert process guidance" }),
          /* @__PURE__ */ jsx("li", { children: "Implementation – Seamless system setup" }),
          /* @__PURE__ */ jsx("li", { children: "Customization – Tailored feature design" }),
          /* @__PURE__ */ jsx("li", { children: "Integration – Connect existing tools" }),
          /* @__PURE__ */ jsx("li", { children: "Training – User skill building" }),
          /* @__PURE__ */ jsx("li", { children: "Support – Ongoing issue resolution" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "service", children: [
          /* @__PURE__ */ jsx("h4", { className: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { className: "underline" }),
          /* @__PURE__ */ jsxs("ul", { className: "service-list", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/webdesign", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Web Design and Development" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Mobile Application" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ecommerce", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Ecommerce" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Digital Marketing" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEO Analytics" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { className: "active", children: /* @__PURE__ */ jsx("a", { href: "/erpsystems", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "ERP Systems" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "squre-banner", children: /* @__PURE__ */ jsx("h2", { className: "heading-3", children: "Simplify operations with our ERP solutions" }) })
      ] })
    ] }) }) })
  ] });
};
const CrmSystems = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "CRM Systems - EXCERPT TECHNOLOGIES PRIVATE LIMITED" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Discover our CRM systems to enhance customer relationships and drive business growth."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/banners1se1.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        className: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "page-info", children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "heading-2",
              style: { color: "white", textAlign: "center" },
              children: "CRM Systems"
            }
          ),
          /* @__PURE__ */ jsxs("h6", { className: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "CRM Systems" })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", className: "service-details", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { className: "img-wrapper mb-25", children: /* @__PURE__ */ jsx("img", { src: "service/crm12.webp", className: "img-fluid", alt: "" }) }),
        /* @__PURE__ */ jsx("h4", { className: "heading-4 mb-25", children: "CRM Systems" }),
        /* @__PURE__ */ jsx("div", { className: "paragraph mb-40", children: "A CRM (Customer Relationship Management) system is a software platform that helps businesses manage and analyze interactions with current and potential customers. It centralizes customer information, tracks sales, marketing campaigns, and support activities, and helps improve customer relationships, retention, and business growth." }),
        /* @__PURE__ */ jsxs("div", { className: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "service/crm11.webp",
              className: "img-fluid sub",
              alt: "",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: " d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "service/crm13.webp", className: "img-fluid sub", alt: "" }) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "heading-3 mb-25", children: "CRM Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "paragraph mb-40", style: { listStyleType: "disc", paddingLeft: "20px" }, children: [
          /* @__PURE__ */ jsx("li", { children: "Contact Management: Store and organize customer data." }),
          /* @__PURE__ */ jsx("li", { children: "Sales Tracking: Monitor leads, deals, and sales pipeline." }),
          /* @__PURE__ */ jsx("li", { children: "Marketing Automation: Run campaigns and track responses." }),
          /* @__PURE__ */ jsx("li", { children: "Customer Support: Manage tickets and service requests." }),
          /* @__PURE__ */ jsx("li", { children: "Analytics & Reporting: Gain insights to improve decisions." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "service", children: [
          /* @__PURE__ */ jsx("h4", { className: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { className: "underline" }),
          /* @__PURE__ */ jsxs("ul", { className: "service-list", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/webdesign", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Web Design and Development" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Mobile Application" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ecommerce", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Ecommerce" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Digital Marketing" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEO Analytics" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { className: "active", children: /* @__PURE__ */ jsx("a", { href: "/crmsystems", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "CRM Systems" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "squre-banner", children: /* @__PURE__ */ jsx("h2", { className: "heading-3", children: "Grow customer relationships with our CRM" }) })
      ] })
    ] }) }) })
  ] });
};
const Elearning = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "E-Learning Solutions - EXCERPT TECHNOLOGIES PRIVATE LIMITED" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Explore our E-Learning solutions to enhance your educational offerings."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/banners1se1.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        className: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "page-info", children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "heading-2",
              style: { color: "white", textAlign: "center" },
              children: "E-Learning Solutions"
            }
          ),
          /* @__PURE__ */ jsxs("h6", { className: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "E-Learning" })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", className: "service-details", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { className: "img-wrapper mb-25", children: /* @__PURE__ */ jsx("img", { src: "service/el12.webp", className: "img-fluid", alt: "" }) }),
        /* @__PURE__ */ jsx("h4", { className: "heading-4 mb-25", children: "E-Learning" }),
        /* @__PURE__ */ jsx("div", { className: "paragraph mb-40", children: "An E-Learning Website is a digital platform designed to deliver educational content and online courses to learners anywhere, anytime. It includes interactive lessons, multimedia content, quizzes, and progress tracking, helping institutions and businesses provide engaging learning experiences and monitor performance effectively. Such platforms enhance knowledge retention and streamline online education." }),
        /* @__PURE__ */ jsxs("div", { className: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "service/el11.webp",
              className: "img-fluid sub",
              alt: "",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: "d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "service/el13.webp",
              className: "img-fluid sub",
              alt: ""
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "heading-3 mb-25", children: "E-Learning Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "paragraph mb-40", style: { listStyleType: "disc", paddingLeft: "20px" }, children: [
          /* @__PURE__ */ jsx("li", { children: "Website Design – Visual layout" }),
          /* @__PURE__ */ jsx("li", { children: "Analytics & Reporting – Progress insights" }),
          /* @__PURE__ */ jsx("li", { children: "Assessment Tools – Quizzes & tests" }),
          /* @__PURE__ */ jsx("li", { children: "User Management – Learner tracking" }),
          /* @__PURE__ */ jsx("li", { children: "Course Integration – Online lessons" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "service", children: [
          /* @__PURE__ */ jsx("h4", { className: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { className: "underline" }),
          /* @__PURE__ */ jsxs("ul", { className: "service-list", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/webdesign", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Web Design and Development" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Mobile Application" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ecommerce", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Ecommerce" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Digital Marketing" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEO Analytics" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { className: "active", children: /* @__PURE__ */ jsx("a", { href: "/elearning", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "E-Learning" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "squre-banner", children: /* @__PURE__ */ jsx("h2", { className: "heading-3", children: "Learn anywhere, anytime with our E-Learning solutions" }) })
      ] })
    ] }) }) })
  ] });
};
const LmsSystems = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "LMS Solutions - EXCERPT TECHNOLOGIES PRIVATE LIMITED" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Explore our LMS solutions to enhance your training and educational programs."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/banners1se1.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        className: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "page-info", children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "heading-2",
              style: { color: "white", textAlign: "center" },
              children: "LMS Solutions"
            }
          ),
          /* @__PURE__ */ jsxs("h6", { className: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "LMS" })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", className: "service-details", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { className: "img-wrapper mb-25", children: /* @__PURE__ */ jsx("img", { src: "service/lms11.png", className: "img-fluid", alt: "" }) }),
        /* @__PURE__ */ jsx("h4", { className: "heading-4 mb-25", children: "Learning Management System (LMS)" }),
        /* @__PURE__ */ jsx("div", { className: "paragraph mb-40", children: "A Learning Management System (LMS) is a digital platform that delivers, tracks, and manages educational or training programs online. It allows organizations to create courses, monitor learner progress, and assess performance efficiently. LMS systems enhance learning experiences, improve knowledge retention, and streamline training processes for employees, students, or customers." }),
        /* @__PURE__ */ jsxs("div", { className: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "service/lms12.webp",
              className: "img-fluid sub",
              alt: "",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: " d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "service/lms13.webp", className: "img-fluid sub", alt: "" }) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "heading-3 mb-25", children: "LMS Services " }),
        /* @__PURE__ */ jsxs("ul", { className: "paragraph mb-40", style: { listStyleType: "disc", paddingLeft: "20px" }, children: [
          /* @__PURE__ */ jsx("li", { children: "Our LMS solutions provide a centr" }),
          /* @__PURE__ */ jsx("li", { children: "Course Creation – Content development" }),
          /* @__PURE__ */ jsx("li", { children: "User Management – Learner tracking" }),
          /* @__PURE__ */ jsx("li", { children: "Assessments & Tests – Performance evaluation" }),
          /* @__PURE__ */ jsx("li", { children: "Reporting & Analytics – Progress insights" }),
          /* @__PURE__ */ jsx("li", { children: "Integration & Support – System setup" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "service", children: [
          /* @__PURE__ */ jsx("h4", { className: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { className: "underline" }),
          /* @__PURE__ */ jsxs("ul", { className: "service-list", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/webdesign", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Web Design and Development" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Mobile Application" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ecommerce", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Ecommerce" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Digital Marketing" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEO Analytics" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { className: "active", children: /* @__PURE__ */ jsx("a", { href: "/lms", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "LMS Solutions" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "squre-banner", children: /* @__PURE__ */ jsx("h2", { className: "heading-3", children: "Manage, deliver & track learning with LMS" }) })
      ] })
    ] }) }) })
  ] });
};
const DynamicWebsites = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "Dynamic Websites - EXCERPT TECHNOLOGIES PRIVATE LIMITED" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Explore our dynamic website solutions for a more interactive online presence."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/banners1se1.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        className: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "page-info", children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "heading-2",
              style: { color: "white", textAlign: "center" },
              children: "Dynamic Websites"
            }
          ),
          /* @__PURE__ */ jsxs("h6", { className: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "Dynamic Websites" })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", className: "service-details", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-md-8 mb-10", children: [
        /* @__PURE__ */ jsx("div", { className: "img-wrapper mb-25", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "images/Dynamic-Website.png",
            className: "img-fluid",
            alt: "Dynamic Websites"
          }
        ) }),
        /* @__PURE__ */ jsx("h4", { className: "heading-4 mb-25", children: "Dynamic Websites" }),
        /* @__PURE__ */ jsx("div", { className: "paragraph mb-40", children: "A Dynamic Website is an interactive website where content changes based on user interactions or real-time data. Unlike static websites, it allows for features like user logins, forms, e-commerce functionality, and personalized content, providing a more engaging and responsive experience for visitors. Dynamic websites are ideal for businesses that require frequent updates and interactive features." }),
        /* @__PURE__ */ jsxs("div", { className: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "portfolio/car.png",
              className: "img-fluid sub",
              alt: "Dynamic Example",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: " d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "portfolio/jbk.webp",
              className: "img-fluid sub",
              alt: "Dynamic Example"
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "heading-3 mb-25", children: "Dynamic Website Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "paragraph mb-40", style: { listStyleType: "disc", paddingLeft: "20px" }, children: [
          /* @__PURE__ */ jsx("li", { children: "Maintenance & Support – Updates & fixes" }),
          /* @__PURE__ */ jsx("li", { children: "Interactive Features – Forms & login" }),
          /* @__PURE__ */ jsx("li", { children: "Database Integration – Data storage" }),
          /* @__PURE__ */ jsx("li", { children: "Content Management – Update content" }),
          /* @__PURE__ */ jsx("li", { children: "Website Design – Visual layout" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "service", children: [
          /* @__PURE__ */ jsx("h4", { className: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { className: "underline" }),
          /* @__PURE__ */ jsxs("ul", { className: "service-list", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/webdesign", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Web Design and Development" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Mobile Application" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ecommerce", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Ecommerce" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { className: "active", children: /* @__PURE__ */ jsx("a", { href: "/dynamicwebsites", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Dynamic Websites" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Digital Marketing" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEO Analytics" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "squre-banner", children: /* @__PURE__ */ jsx("h2", { className: "heading-3", children: "Build dynamic, user-driven websites with us" }) })
      ] })
    ] }) }) })
  ] });
};
const CustomizedWebsites = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "Customized Websites - EXCERPT TECHNOLOGIES PRIVATE LIMITED" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Explore our customized website solutions tailored to your business needs."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/banners1se1.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        className: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "page-info", children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "heading-2",
              style: { color: "white", textAlign: "center" },
              children: "Customized Websites"
            }
          ),
          /* @__PURE__ */ jsxs("h6", { className: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "Customized Websites" })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", className: "service-details", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { className: "img-wrapper mb-25", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "portfolio/dtech.webp",
            className: "img-fluid",
            alt: "Customized Websites"
          }
        ) }),
        /* @__PURE__ */ jsx("h4", { className: "heading-4 mb-25", children: "Customized Websites" }),
        /* @__PURE__ */ jsx("div", { className: "paragraph mb-40", children: "Every business is unique, and so should be its website. We offer customized website solutions that are designed specifically to match your brand identity, business goals, and customer expectations. Whether you want to enhance an existing website or build a completely tailored platform from scratch, we deliver a solution that truly represents you." }),
        /* @__PURE__ */ jsxs("div", { className: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "service/crm13.webp",
              className: "img-fluid sub",
              alt: "Customized Example",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: " d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "portfolio/nipuna.webp",
              className: "img-fluid sub",
              alt: "Customized Example"
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "heading-3 mb-25", children: "Tailored to Fit Your Needs" }),
        /* @__PURE__ */ jsx("div", { className: "paragraph mb-40", children: "From personalized UI/UX designs to advanced integrations, our customized websites are flexible and scalable. We make sure your site is easy to manage, mobile-friendly, and optimized for performance, while reflecting the unique personality of your business." }),
        /* @__PURE__ */ jsx("div", { className: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "service", children: [
          /* @__PURE__ */ jsx("h4", { className: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { className: "underline" }),
          /* @__PURE__ */ jsxs("ul", { className: "service-list", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/webdesign", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Web Design and Development" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/dynamicwebsites", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Dynamic Websites" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { className: "active", children: /* @__PURE__ */ jsx("a", { href: "/customizedwebsites", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Customized Websites" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Digital Marketing" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEO Analytics" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "squre-banner", children: /* @__PURE__ */ jsx("h2", { className: "heading-3", children: "Your vision, our expertise — customized for success" }) })
      ] })
    ] }) }) })
  ] });
};
const GeekyChat = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "section",
      {
        style: {
          backgroundImage: "url(images/banners1se1.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        class: "sub-header position-relative",
        children: [
          /* @__PURE__ */ jsxs(HelmetExport, { children: [
            /* @__PURE__ */ jsx("title", { children: "GeekyChat - EXCERPT TECHNOLOGIES PRIVATE LIMITED" }),
            /* @__PURE__ */ jsx(
              "meta",
              {
                name: "description",
                content: "Send WhatsApp bulk messages easily with GeekyChat by Excerpt Technologies. Our WhatsApp marketing tool helps businesses engage customers instantly, manage campaigns, and improve reach efficiently."
              }
            ),
            /* @__PURE__ */ jsx(
              "meta",
              {
                name: "keywords",
                content: "whatsapp bulk messaging, whatsapp marketing tool, whatsapp automation software, geekychat app, bulk whatsapp sender, whatsapp campaign tool"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "page-info", children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "heading-2",
                style: { color: "white", textAlign: "center" },
                children: "GeekyChat"
              }
            ),
            /* @__PURE__ */ jsxs("h6", { className: "heading-6", children: [
              /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
              " / ",
              /* @__PURE__ */ jsx("a", { href: "#", children: "GeekyChat" })
            ] })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", className: "service-details", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { className: "img-wrapper mb-25", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "images/wa6.png",
            className: "img-fluid",
            alt: "GeekyChat WhatsApp Bulk Messaging"
          }
        ) }),
        /* @__PURE__ */ jsx("h4", { className: "heading-4 mb-25", children: "WhatsApp Bulk Messaging with GeekyChat" }),
        /* @__PURE__ */ jsx("div", { className: "paragraph mb-40", children: "GeekyChat is a powerful WhatsApp bulk messaging tool that helps businesses send messages to multiple contacts simultaneously, improving marketing reach, customer engagement, and communication efficiency. It supports personalized messaging, scheduled campaigns, and analytics, making it easier to connect with customers and drive business growth." }),
        /* @__PURE__ */ jsxs("div", { className: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/wa7.png",
              className: "img-fluid sub",
              alt: "Bulk Messaging Feature",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { className: " d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { className: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "portfolio/geeky3.webp",
              className: "img-fluid sub",
              alt: "GeekyChat Dashboard"
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "heading-3 mb-25", children: "Geeky Chat Services " }),
        /* @__PURE__ */ jsxs("ul", { className: "paragraph mb-40", style: { listStyleType: "disc", paddingLeft: "20px" }, children: [
          /* @__PURE__ */ jsx("li", { children: "Analytics & Reporting – Campaign insights" }),
          /* @__PURE__ */ jsx("li", { children: "Contact Management – Organized lists" }),
          /* @__PURE__ */ jsx("li", { children: "Personalized Messages – Customized texts" }),
          /* @__PURE__ */ jsx("li", { children: "Message Scheduling – Timed campaigns" }),
          /* @__PURE__ */ jsx("li", { children: "Bulk Messaging – Mass communication" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "service", children: [
          /* @__PURE__ */ jsx("h4", { className: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { className: "underline" }),
          /* @__PURE__ */ jsxs("ul", { className: "service-list", children: [
            /* @__PURE__ */ jsx("li", { className: "active", children: /* @__PURE__ */ jsx("a", { href: "/geekychat", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "GeekyChat" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/ecommerce", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Ecommerce" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "MobileApplication" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DigitalMarketing" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEOAnalytics" }),
              /* @__PURE__ */ jsx("div", { className: "icon", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "squre-banner", children: /* @__PURE__ */ jsx("h2", { className: "heading-3", children: "Boost Customer Engagement with GeekyChat" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "space120" })
  ] });
};
const Uiux = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "WhatsApp E-Commerce - EXCERPT TECHNOLOGIES PRIVATE LIMITED" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Explore our WhatsApp E-Commerce solutions for seamless online shopping."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "section",
      {
        style: {
          backgroundImage: "url(images/banners1se1.webp)",
          backgroundColor: "rgb(255, 255, 255)"
        },
        class: "sub-header position-relative",
        children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "page-info", children: [
          /* @__PURE__ */ jsx("h2", { class: "heading-2", style: { color: "white", textAlign: "center" }, children: "Whatsapp E-Commerce " }),
          /* @__PURE__ */ jsxs("h6", { class: "heading-6", children: [
            /* @__PURE__ */ jsx("a", { href: "/", children: "Home" }),
            " / ",
            /* @__PURE__ */ jsx("a", { href: "#", children: "Whatsapp E-commerce " })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "service-details", class: "service-details", children: /* @__PURE__ */ jsx("div", { class: "container", children: /* @__PURE__ */ jsxs("div", { class: "row g-4", children: [
      /* @__PURE__ */ jsxs("div", { class: "col-md-8 mb-40", children: [
        /* @__PURE__ */ jsx("div", { class: "img-wrapper mb-25", children: /* @__PURE__ */ jsx("img", { src: "images/wa3.webp", class: "img-fluid", alt: "" }) }),
        /* @__PURE__ */ jsx("h4", { class: "heading-4 mb-25", children: "Whatsapp E-Commerce Solution " }),
        /* @__PURE__ */ jsx("div", { class: "paragraph mb-40", children: "This service helps businesses sell products directly through WhatsApp, creating a seamless shopping experience for customers. It includes setting up product catalogs, automating order management, and enabling secure payments, making it easy to engage customers, increase sales, and track orders efficiently." }),
        /* @__PURE__ */ jsxs("div", { class: "row g-4 mb-25", children: [
          /* @__PURE__ */ jsx("div", { class: "col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "images/w4.webp",
              class: "img-fluid sub",
              alt: "",
              style: { height: "300px" }
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { class: "d-none d-md-block col-md-6", children: /* @__PURE__ */ jsx("div", { class: "img-wrapper", children: /* @__PURE__ */ jsx("img", { src: "images/wa0.jpg", class: "img-fluid sub", alt: "" }) }) })
        ] }),
        /* @__PURE__ */ jsx("h4", { className: "heading-3 mb-25", children: "Whatsapp E-Commerce Services " }),
        /* @__PURE__ */ jsxs("ul", { className: "paragraph mb-40", style: { listStyleType: "disc", paddingLeft: "20px" }, children: [
          /* @__PURE__ */ jsx("li", { children: "Catalog Setup – Product listing" }),
          /* @__PURE__ */ jsx("li", { children: "Promotions & Marketing – Sales campaigns" }),
          /* @__PURE__ */ jsx("li", { children: "Payment Integration – Secure checkout" }),
          /* @__PURE__ */ jsx("li", { children: "Order Management – Track orders" }),
          /* @__PURE__ */ jsx("li", { children: "Customer Support – Instant assistance" })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "service-divider" })
      ] }),
      /* @__PURE__ */ jsxs("div", { class: "d-none d-md-block col-md-4", children: [
        /* @__PURE__ */ jsxs("div", { class: "service", children: [
          /* @__PURE__ */ jsx("h4", { class: "heading-3", children: "Services" }),
          /* @__PURE__ */ jsx("div", { class: "underline" }),
          /* @__PURE__ */ jsxs("ul", { class: "service-list", children: [
            /* @__PURE__ */ jsx("li", { class: "active", children: /* @__PURE__ */ jsx("a", { href: "/webdesign", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "Whatsapp E-Commerce" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Mobileapp", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "MobileApplication" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Cybersecurity", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "CyberSecurity" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/DigitalMarketing", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DigitalMarketing" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Seo", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "SEOAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/Dataanalytics", children: /* @__PURE__ */ jsxs("div", { class: "d-flex justify-content-between item", children: [
              /* @__PURE__ */ jsx("span", { children: "DataAnalytics" }),
              /* @__PURE__ */ jsx("div", { class: "icon", children: /* @__PURE__ */ jsx("i", { class: "fa-solid fa-arrow-right-long" }) })
            ] }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { class: "squre-banner", children: /* @__PURE__ */ jsx("h2", { class: "heading-3", children: "Easy solutions to your tech problem" }) })
      ] })
    ] }) }) })
  ] });
};
const Carrers = lazy(() => import("./assets/Carrers-BBcQKMP1.js"));
const Login = lazy(() => import("./assets/Login-CwN6OmwS.js"));
const Register = lazy(() => import("./assets/Register-CGDx3vKa.js"));
lazy(() => Promise.resolve().then(() => Dashboard$1));
const Invoice = lazy(() => import("./assets/Invoice-D0lZE6ei.js"));
const Quotation = lazy(() => import("./assets/Quotation-ZT6tkdrN.js"));
const InvoiceDisplay = lazy(() => import("./assets/InvoiceDisplay-CyIBm8Dp.js"));
const Certificate = lazy(() => import("./assets/Certificate-DuqDvgNM.js"));
const Indvisit = lazy(() => import("./assets/indvisit-CgCuwJGe.js"));
const LoadingSpinner = () => /* @__PURE__ */ jsx(
  "div",
  {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "200px",
      fontSize: "18px"
    },
    children: "Loading..."
  }
);
const ProtectedRoute = ({ element, isLoggedIn }) => {
  console.log("ProtectedRoute - isLoggedIn:", isLoggedIn);
  return isLoggedIn ? element : element;
};
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const isAdminLoggedIn = sessionStorage.getItem("isAdminLoggedIn");
    if (isAdminLoggedIn) {
      setIsAdmin(true);
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsAdmin(true);
    sessionStorage.setItem("isAdminLoggedIn", "true");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    sessionStorage.removeItem("isAdminLoggedIn");
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(BrowserRouter, { children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(Navbar, { isLoggedIn, isAdmin, onLogout: handleLogout }),
    /* @__PURE__ */ jsxs(HelmetExport, { children: [
      /* @__PURE__ */ jsx("title", { children: "EXCERPT TECHNOLOGIES PRIVATE LIMITED - Software As A Service Provider | Best Software Solution Provider" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Welcome to Excerpt Technologies Private Limited. We specialize in Web Design & Development, E-commerce Solutions, Data Analytics, and BI Report Generation."
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(LoadingSpinner, {}), children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/login", element: /* @__PURE__ */ jsx(Login, { onLogin: handleLogin }) }),
      /* @__PURE__ */ jsx(Route, { path: "/register", element: /* @__PURE__ */ jsx(Register, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Contact", element: /* @__PURE__ */ jsx(Contact, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Portfolio", element: /* @__PURE__ */ jsx(Portfolio, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Webdesign", element: /* @__PURE__ */ jsx(Webdesign, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Mobileapp", element: /* @__PURE__ */ jsx(Mobileapp, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Cybersecurity", element: /* @__PURE__ */ jsx(Cybersecurity, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Dataanalytics", element: /* @__PURE__ */ jsx(Dataanalytics, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/DigitalMarketing", element: /* @__PURE__ */ jsx(DigitalMarketing, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Ecommerce", element: /* @__PURE__ */ jsx(Ecommerce, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Seo", element: /* @__PURE__ */ jsx(Seo, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Staticwebsite", element: /* @__PURE__ */ jsx(Uiux$1, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Careers", element: /* @__PURE__ */ jsx(Carrers, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Erp", element: /* @__PURE__ */ jsx(ErpSystems, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Crm", element: /* @__PURE__ */ jsx(CrmSystems, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Elearning", element: /* @__PURE__ */ jsx(Elearning, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Lms", element: /* @__PURE__ */ jsx(LmsSystems, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Dyanamicwebsite", element: /* @__PURE__ */ jsx(DynamicWebsites, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Customizedwebsites", element: /* @__PURE__ */ jsx(CustomizedWebsites, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/Geekychat", element: /* @__PURE__ */ jsx(GeekyChat, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/WhatsappEcommerce", element: /* @__PURE__ */ jsx(Uiux, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/invoice", element: /* @__PURE__ */ jsx(ProtectedRoute, { element: /* @__PURE__ */ jsx(Invoice, {}), isLoggedIn }) }),
      /* @__PURE__ */ jsx(Route, { path: "/Quotation", element: /* @__PURE__ */ jsx(ProtectedRoute, { element: /* @__PURE__ */ jsx(Quotation, {}), isLoggedIn }) }),
      /* @__PURE__ */ jsx(Route, { path: "/invoice-display", element: /* @__PURE__ */ jsx(ProtectedRoute, { element: /* @__PURE__ */ jsx(InvoiceDisplay, {}), isLoggedIn }) }),
      /* @__PURE__ */ jsx(Route, { path: "/Resumes", element: /* @__PURE__ */ jsx(ProtectedRoute, { element: /* @__PURE__ */ jsx(ResumeComponent, {}), isLoggedIn }) }),
      /* @__PURE__ */ jsx(Route, { path: "/JobForm", element: /* @__PURE__ */ jsx(ProtectedRoute, { element: /* @__PURE__ */ jsx(JobFormWithTable, {}), isLoggedIn }) }),
      /* @__PURE__ */ jsx(Route, { path: "/resume", element: /* @__PURE__ */ jsx(ProtectedRoute, { element: /* @__PURE__ */ jsx(Resumes, {}), isLoggedIn }) }),
      /* @__PURE__ */ jsx(Route, { path: "/studentform", element: /* @__PURE__ */ jsx(ProtectedRoute, { element: /* @__PURE__ */ jsx(StudentForm, {}), isLoggedIn }) }),
      /* @__PURE__ */ jsx(Route, { path: "/studentcertificate", element: /* @__PURE__ */ jsx(ProtectedRoute, { element: /* @__PURE__ */ jsx(Studentcertificate, {}), isLoggedIn }) }),
      /* @__PURE__ */ jsx(Route, { path: "/internform", element: /* @__PURE__ */ jsx(ProtectedRoute, { element: /* @__PURE__ */ jsx(Internregistrationform, {}), isLoggedIn }) }),
      /* @__PURE__ */ jsx(Route, { path: "/certificate", element: /* @__PURE__ */ jsx(ProtectedRoute, { element: /* @__PURE__ */ jsx(Certificate, {}), isLoggedIn }) }),
      /* @__PURE__ */ jsx(Route, { path: "/indvisit", element: /* @__PURE__ */ jsx(ProtectedRoute, { element: /* @__PURE__ */ jsx(Indvisit, {}), isLoggedIn }) })
    ] }) }),
    /* @__PURE__ */ jsx(App$1, {}),
    /* @__PURE__ */ jsx(ScrollToTopButton, {}),
    /* @__PURE__ */ jsx(Footer1, {})
  ] }) });
}
function render(url, manifest) {
  const html = renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) })
  );
  return { html };
}
export {
  Alert as A,
  ButtonBase as B,
  Chip as C,
  Dashboard as D,
  FormControlContext as F,
  HelmetExport as H,
  IconButton as I,
  ListContext as L,
  Paper as P,
  Select as S,
  Typography as T,
  useSlot as a,
  useTheme as b,
  useFormControl as c,
  createSvgIcon as d,
  TableCell as e,
  InputBase as f,
  Box as g,
  Button as h,
  TextField as i,
  Dialog as j,
  DialogTitle as k,
  CloseIcon as l,
  memoTheme as m,
  DialogContent as n,
  DeleteIcon as o,
  CircularProgress as p,
  DialogActions as q,
  rootShouldForwardProp as r,
  render,
  styled as s,
  typographyClasses as t,
  useDefaultProps as u
};
