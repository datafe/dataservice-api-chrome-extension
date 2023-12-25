var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { r as reactExports, j as jsxRuntimeExports, b as reactDomExports } from "./client.js";
import { aY as _baseGetTag$1, aZ as _root$1, a_ as isObjectLike_1$1, a$ as _freeGlobal$1, b0 as isArray_1, b1 as _Symbol$1, b2 as isSymbol_1$1, b3 as toString_1, a as _slicedToArray, z as useLayoutEffect, a2 as CSSMotion, f as _objectSpread2, O as composeRef, c as classNames, e as _objectWithoutProperties, E as useMergedState, $ as omit, _ as _extends, b as _defineProperty$1, d as _typeof, h as genStyleHooks, m as merge, a5 as textEllipsis, r as resetComponent, D as unit, k as ConfigContext, am as useSize, b4 as classnamesExports, aV as defaultInstance, aP as Input, b5 as isArray$6, aT as AntdIcon, aW as useStorage, aX as logo, aw as Select, B as Button } from "./useIntl.js";
import { g as getDefaultExportFromCjs, c as commonjsGlobal$1, a as getAugmentedNamespace } from "./_commonjsHelpers.js";
import { d as defaultResultTableDataKey, a as apiInfoStorage, e as events, P as PRODUCT_NAME } from "./common.js";
import { s as selectionInfoStorage } from "./selectionInfoStorage.js";
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var eq$1 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index = assocIndexOf$3(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index = assocIndexOf$2(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
function isObject$b(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1$1 = isObject$b;
var baseGetTag$8 = _baseGetTag$1, isObject$a = isObject_1$1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$a(value)) {
    return false;
  }
  var tag = baseGetTag$8(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;
var root$9 = _root$1;
var coreJsData$1 = root$9["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$2 = isFunction_1, isMasked = _isMasked, isObject$9 = isObject_1$1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$c = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$9).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value) {
  if (!isObject$9(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative, root$8 = _root$1;
var Map$4 = getNative$6(root$8, "Map");
var _Map = Map$4;
var getNative$5 = _getNative;
var nativeCreate$4 = getNative$5(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$b = Object.prototype;
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$8.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$a = Object.prototype;
var hasOwnProperty$7 = objectProto$a.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$7.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$3 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$2(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache$2.prototype.clear = mapCacheClear;
MapCache$2.prototype["delete"] = mapCacheDelete;
MapCache$2.prototype.get = mapCacheGet;
MapCache$2.prototype.has = mapCacheHas;
MapCache$2.prototype.set = mapCacheSet;
var _MapCache = MapCache$2;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$1(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$1.prototype.clear = stackClear;
Stack$1.prototype["delete"] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;
var _Stack = Stack$1;
function arrayEach$1(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$1;
var getNative$4 = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative$4(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$2;
var defineProperty$1 = _defineProperty;
function baseAssignValue$2(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$2;
var baseAssignValue$1 = _baseAssignValue, eq = eq_1;
var objectProto$9 = Object.prototype;
var hasOwnProperty$6 = objectProto$9.hasOwnProperty;
function assignValue$3(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$6.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$3;
var assignValue$2 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$4(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$2(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$4;
function baseTimes$1(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var baseGetTag$7 = _baseGetTag$1, isObjectLike$9 = isObjectLike_1$1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$9(value) && baseGetTag$7(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$8 = isObjectLike_1$1;
var objectProto$8 = Object.prototype;
var hasOwnProperty$5 = objectProto$8.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$8.propertyIsEnumerable;
var isArguments$1 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$8(value) && hasOwnProperty$5.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$1;
var isBuffer$2 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
isBuffer$2.exports;
(function(module, exports) {
  var root2 = _root$1, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$2, isBuffer$2.exports);
var isBufferExports = isBuffer$2.exports;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$2;
var baseGetTag$6 = _baseGetTag$1, isLength$1 = isLength_1, isObjectLike$7 = isObjectLike_1$1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$3 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$7(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$6(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$3(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$3;
var _nodeUtil = { exports: {} };
_nodeUtil.exports;
(function(module, exports) {
  var freeGlobal2 = _freeGlobal$1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var _nodeUtilExports = _nodeUtil.exports;
var baseIsTypedArray = _baseIsTypedArray, baseUnary$2 = _baseUnary, nodeUtil$2 = _nodeUtilExports;
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$1 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$1;
var baseTimes = _baseTimes, isArguments = isArguments_1, isArray$5 = isArray_1, isBuffer$1 = isBufferExports, isIndex$1 = _isIndex, isTypedArray = isTypedArray_1;
var objectProto$7 = Object.prototype;
var hasOwnProperty$4 = objectProto$7.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$5(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex$1(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
var objectProto$6 = Object.prototype;
function isPrototype$3(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$6;
  return value === proto;
}
var _isPrototype = isPrototype$3;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var nativeKeys$1 = overArg$1(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype$2 = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$5 = Object.prototype;
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype$2(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction$1 = isFunction_1, isLength = isLength_1;
function isArrayLike$2(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$2;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$1 = isArrayLike_1;
function keys$3(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object) : baseKeys(object);
}
var keys_1 = keys$3;
var copyObject$3 = _copyObject, keys$2 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$3(source, keys$2(source), object);
}
var _baseAssign = baseAssign$1;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$8 = isObject_1$1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$4 = Object.prototype;
var hasOwnProperty$2 = objectProto$4.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$8(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$2.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike = isArrayLike_1;
function keysIn$3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$3;
var copyObject$2 = _copyObject, keysIn$2 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$2(source, keysIn$2(source), object);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBuffer = { exports: {} };
_cloneBuffer.exports;
(function(module, exports) {
  var root2 = _root$1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
var _cloneBufferExports = _cloneBuffer.exports;
function copyArray$1(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var _copyArray = copyArray$1;
function arrayFilter$1(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$3 = Object.prototype;
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$3;
var copyObject$1 = _copyObject, getSymbols$2 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$1(source, getSymbols$2(source), object);
}
var _copySymbols = copySymbols$1;
function arrayPush$2(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var _arrayPush = arrayPush$2;
var overArg = _overArg;
var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$2;
var arrayPush$1 = _arrayPush, getPrototype$1 = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush$1(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var arrayPush = _arrayPush, isArray$4 = isArray_1;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$4(object) ? result : arrayPush(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$2;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys$1(object, keys$1, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1 = keysIn_1;
function getAllKeysIn$1(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1;
var getNative$3 = _getNative, root$7 = _root$1;
var DataView$1 = getNative$3(root$7, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$6 = _root$1;
var Promise$2 = getNative$2(root$6, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$5 = _root$1;
var Set$1 = getNative$1(root$5, "Set");
var _Set = Set$1;
var getNative = _getNative, root$4 = _root$1;
var WeakMap$1 = getNative(root$4, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set = _Set, WeakMap = _WeakMap, baseGetTag$5 = _baseGetTag$1, toSource = _toSource;
var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
var getTag$3 = baseGetTag$5;
if (DataView && getTag$3(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag$3(new Map$1()) != mapTag$3 || Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag || Set && getTag$3(new Set()) != setTag$3 || WeakMap && getTag$3(new WeakMap()) != weakMapTag$1) {
  getTag$3 = function(value) {
    var result = baseGetTag$5(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag$3;
var objectProto$2 = Object.prototype;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$1.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var root$3 = _root$1;
var Uint8Array$1 = root$3.Uint8Array;
var _Uint8Array = Uint8Array$1;
var Uint8Array2 = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$4 = _Symbol$1;
var symbolProto = Symbol$4 ? Symbol$4.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$2 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$2:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var isObject$7 = isObject_1$1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$7(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
var baseCreate = _baseCreate, getPrototype = _getPrototype, isPrototype = _isPrototype;
function initCloneObject$1(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
var _initCloneObject = initCloneObject$1;
var getTag$2 = _getTag, isObjectLike$6 = isObjectLike_1$1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$6(value) && getTag$2(value) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtilExports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike$5 = isObjectLike_1$1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike$5(value) && getTag$1(value) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack = _Stack, arrayEach = _arrayEach, assignValue$1 = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBufferExports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray$3 = isArray_1, isBuffer = isBufferExports, isMap = isMap_1, isObject$6 = isObject_1$1, isSet = isSet_1, keys = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag$1 = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag$1 = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag$1] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag$1] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$6(value)) {
    return value;
  }
  var isArr = isArray$3(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue$1(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
const cloneDeep$1 = /* @__PURE__ */ getDefaultExportFromCjs(cloneDeep_1);
var FUNC_ERROR_TEXT$3 = "Expected a function";
function baseDelay$1(func, wait, args) {
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$3);
  }
  return setTimeout(function() {
    func.apply(void 0, args);
  }, wait);
}
var _baseDelay = baseDelay$1;
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax$1 = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1, overRest = _overRest, setToString = _setToString;
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var _baseRest = baseRest$1;
var reWhitespace$1 = /\s/;
function trimmedEndIndex$3(string) {
  var index = string.length;
  while (index-- && reWhitespace$1.test(string.charAt(index))) {
  }
  return index;
}
var _trimmedEndIndex$1 = trimmedEndIndex$3;
var trimmedEndIndex$2 = _trimmedEndIndex$1;
var reTrimStart$1 = /^\s+/;
function baseTrim$3(string) {
  return string ? string.slice(0, trimmedEndIndex$2(string) + 1).replace(reTrimStart$1, "") : string;
}
var _baseTrim$1 = baseTrim$3;
var baseTrim$2 = _baseTrim$1, isObject$5 = isObject_1$1, isSymbol$4 = isSymbol_1$1;
var NAN$1 = 0 / 0;
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary$1 = /^0b[01]+$/i;
var reIsOctal$1 = /^0o[0-7]+$/i;
var freeParseInt$1 = parseInt;
function toNumber$3(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol$4(value)) {
    return NAN$1;
  }
  if (isObject$5(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$5(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim$2(value);
  var isBinary = reIsBinary$1.test(value);
  return isBinary || reIsOctal$1.test(value) ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8) : reIsBadHex$1.test(value) ? NAN$1 : +value;
}
var toNumber_1$1 = toNumber$3;
var baseDelay = _baseDelay, baseRest = _baseRest, toNumber$2 = toNumber_1$1;
var delay = baseRest(function(func, wait, args) {
  return baseDelay(func, toNumber$2(wait) || 0, args);
});
var delay_1 = delay;
const delay$1 = /* @__PURE__ */ getDefaultExportFromCjs(delay_1);
var isArray$2 = isArray_1, isSymbol$3 = isSymbol_1$1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$1(value, object) {
  if (isArray$2(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$1;
var MapCache = _MapCache;
var FUNC_ERROR_TEXT$2 = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache)();
  return memoized;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
var isArray$1 = isArray_1, isKey = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$2(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$2;
var isSymbol$2 = isSymbol_1$1;
var INFINITY = 1 / 0;
function toKey$2(value) {
  if (typeof value == "string" || isSymbol$2(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$2;
var assignValue = _assignValue, castPath$1 = _castPath, isIndex = _isIndex, isObject$4 = isObject_1$1, toKey$1 = _toKey;
function baseSet$1(object, path, value, customizer) {
  if (!isObject$4(object)) {
    return object;
  }
  path = castPath$1(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey$1(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject$4(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var _baseSet = baseSet$1;
var baseSet = _baseSet;
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}
var set_1 = set;
const set$1 = /* @__PURE__ */ getDefaultExportFromCjs(set_1);
function useForceUpdate() {
  const [, forceUpdate] = reactExports.useReducer((x) => x + 1, 0);
  return forceUpdate;
}
function withSuspense(Component, SuspenseComponent) {
  return function WithSuspense(props) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: SuspenseComponent, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...props }) });
  };
}
class ErrorBoundary extends reactExports.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", { hasError: false });
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
function withErrorBoundary(Component2, ErrorComponent) {
  return function WithErrorBoundary(props) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, { fallback: ErrorComponent, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component2, { ...props }) });
  };
}
var main = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t(reactExports);
  }(commonjsGlobal$1, function(e) {
    return function(e2) {
      var t = {};
      function n(a) {
        if (t[a])
          return t[a].exports;
        var r = t[a] = { i: a, l: false, exports: {} };
        return e2[a].call(r.exports, r, r.exports, n), r.l = true, r.exports;
      }
      return n.m = e2, n.c = t, n.d = function(e3, t2, a) {
        n.o(e3, t2) || Object.defineProperty(e3, t2, { enumerable: true, get: a });
      }, n.r = function(e3) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
      }, n.t = function(e3, t2) {
        if (1 & t2 && (e3 = n(e3)), 8 & t2)
          return e3;
        if (4 & t2 && "object" == typeof e3 && e3 && e3.__esModule)
          return e3;
        var a = /* @__PURE__ */ Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: true, value: e3 }), 2 & t2 && "string" != typeof e3)
          for (var r in e3)
            n.d(a, r, (function(t3) {
              return e3[t3];
            }).bind(null, r));
        return a;
      }, n.n = function(e3) {
        var t2 = e3 && e3.__esModule ? function() {
          return e3.default;
        } : function() {
          return e3;
        };
        return n.d(t2, "a", t2), t2;
      }, n.o = function(e3, t2) {
        return Object.prototype.hasOwnProperty.call(e3, t2);
      }, n.p = "", n(n.s = 48);
    }([function(t, n) {
      t.exports = e;
    }, function(e2, t) {
      var n = e2.exports = { version: "2.6.12" };
      "number" == typeof __e && (__e = n);
    }, function(e2, t, n) {
      var a = n(26)("wks"), r = n(17), o = n(3).Symbol, i = "function" == typeof o;
      (e2.exports = function(e3) {
        return a[e3] || (a[e3] = i && o[e3] || (i ? o : r)("Symbol." + e3));
      }).store = a;
    }, function(e2, t) {
      var n = e2.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = n);
    }, function(e2, t, n) {
      e2.exports = !n(8)(function() {
        return 7 != Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a;
      });
    }, function(e2, t) {
      var n = {}.hasOwnProperty;
      e2.exports = function(e3, t2) {
        return n.call(e3, t2);
      };
    }, function(e2, t, n) {
      var a = n(7), r = n(16);
      e2.exports = n(4) ? function(e3, t2, n2) {
        return a.f(e3, t2, r(1, n2));
      } : function(e3, t2, n2) {
        return e3[t2] = n2, e3;
      };
    }, function(e2, t, n) {
      var a = n(10), r = n(35), o = n(23), i = Object.defineProperty;
      t.f = n(4) ? Object.defineProperty : function(e3, t2, n2) {
        if (a(e3), t2 = o(t2, true), a(n2), r)
          try {
            return i(e3, t2, n2);
          } catch (e4) {
          }
        if ("get" in n2 || "set" in n2)
          throw TypeError("Accessors not supported!");
        return "value" in n2 && (e3[t2] = n2.value), e3;
      };
    }, function(e2, t) {
      e2.exports = function(e3) {
        try {
          return !!e3();
        } catch (e4) {
          return true;
        }
      };
    }, function(e2, t, n) {
      var a = n(40), r = n(22);
      e2.exports = function(e3) {
        return a(r(e3));
      };
    }, function(e2, t, n) {
      var a = n(11);
      e2.exports = function(e3) {
        if (!a(e3))
          throw TypeError(e3 + " is not an object!");
        return e3;
      };
    }, function(e2, t) {
      e2.exports = function(e3) {
        return "object" == typeof e3 ? null !== e3 : "function" == typeof e3;
      };
    }, function(e2, t) {
      e2.exports = {};
    }, function(e2, t, n) {
      var a = n(39), r = n(27);
      e2.exports = Object.keys || function(e3) {
        return a(e3, r);
      };
    }, function(e2, t) {
      e2.exports = true;
    }, function(e2, t, n) {
      var a = n(3), r = n(1), o = n(53), i = n(6), s = n(5), c = function(e3, t2, n2) {
        var l, u, f, p = e3 & c.F, d = e3 & c.G, b = e3 & c.S, h = e3 & c.P, v = e3 & c.B, m = e3 & c.W, y = d ? r : r[t2] || (r[t2] = {}), g = y.prototype, E = d ? a : b ? a[t2] : (a[t2] || {}).prototype;
        for (l in d && (n2 = t2), n2)
          (u = !p && E && void 0 !== E[l]) && s(y, l) || (f = u ? E[l] : n2[l], y[l] = d && "function" != typeof E[l] ? n2[l] : v && u ? o(f, a) : m && E[l] == f ? function(e4) {
            var t3 = function(t4, n3, a2) {
              if (this instanceof e4) {
                switch (arguments.length) {
                  case 0:
                    return new e4();
                  case 1:
                    return new e4(t4);
                  case 2:
                    return new e4(t4, n3);
                }
                return new e4(t4, n3, a2);
              }
              return e4.apply(this, arguments);
            };
            return t3.prototype = e4.prototype, t3;
          }(f) : h && "function" == typeof f ? o(Function.call, f) : f, h && ((y.virtual || (y.virtual = {}))[l] = f, e3 & c.R && g && !g[l] && i(g, l, f)));
      };
      c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e2.exports = c;
    }, function(e2, t) {
      e2.exports = function(e3, t2) {
        return { enumerable: !(1 & e3), configurable: !(2 & e3), writable: !(4 & e3), value: t2 };
      };
    }, function(e2, t) {
      var n = 0, a = Math.random();
      e2.exports = function(e3) {
        return "Symbol(".concat(void 0 === e3 ? "" : e3, ")_", (++n + a).toString(36));
      };
    }, function(e2, t, n) {
      var a = n(22);
      e2.exports = function(e3) {
        return Object(a(e3));
      };
    }, function(e2, t) {
      t.f = {}.propertyIsEnumerable;
    }, function(e2, t, n) {
      var a = n(52)(true);
      n(34)(String, "String", function(e3) {
        this._t = String(e3), this._i = 0;
      }, function() {
        var e3, t2 = this._t, n2 = this._i;
        return n2 >= t2.length ? { value: void 0, done: true } : (e3 = a(t2, n2), this._i += e3.length, { value: e3, done: false });
      });
    }, function(e2, t) {
      var n = Math.ceil, a = Math.floor;
      e2.exports = function(e3) {
        return isNaN(e3 = +e3) ? 0 : (e3 > 0 ? a : n)(e3);
      };
    }, function(e2, t) {
      e2.exports = function(e3) {
        if (null == e3)
          throw TypeError("Can't call method on  " + e3);
        return e3;
      };
    }, function(e2, t, n) {
      var a = n(11);
      e2.exports = function(e3, t2) {
        if (!a(e3))
          return e3;
        var n2, r;
        if (t2 && "function" == typeof (n2 = e3.toString) && !a(r = n2.call(e3)))
          return r;
        if ("function" == typeof (n2 = e3.valueOf) && !a(r = n2.call(e3)))
          return r;
        if (!t2 && "function" == typeof (n2 = e3.toString) && !a(r = n2.call(e3)))
          return r;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(e2, t) {
      var n = {}.toString;
      e2.exports = function(e3) {
        return n.call(e3).slice(8, -1);
      };
    }, function(e2, t, n) {
      var a = n(26)("keys"), r = n(17);
      e2.exports = function(e3) {
        return a[e3] || (a[e3] = r(e3));
      };
    }, function(e2, t, n) {
      var a = n(1), r = n(3), o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
      (e2.exports = function(e3, t2) {
        return o[e3] || (o[e3] = void 0 !== t2 ? t2 : {});
      })("versions", []).push({ version: a.version, mode: n(14) ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" });
    }, function(e2, t) {
      e2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(e2, t, n) {
      var a = n(7).f, r = n(5), o = n(2)("toStringTag");
      e2.exports = function(e3, t2, n2) {
        e3 && !r(e3 = n2 ? e3 : e3.prototype, o) && a(e3, o, { configurable: true, value: t2 });
      };
    }, function(e2, t, n) {
      n(62);
      for (var a = n(3), r = n(6), o = n(12), i = n(2)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
        var l = s[c], u = a[l], f = u && u.prototype;
        f && !f[i] && r(f, i, l), o[l] = o.Array;
      }
    }, function(e2, t, n) {
      t.f = n(2);
    }, function(e2, t, n) {
      var a = n(3), r = n(1), o = n(14), i = n(30), s = n(7).f;
      e2.exports = function(e3) {
        var t2 = r.Symbol || (r.Symbol = o ? {} : a.Symbol || {});
        "_" == e3.charAt(0) || e3 in t2 || s(t2, e3, { value: i.f(e3) });
      };
    }, function(e2, t) {
      t.f = Object.getOwnPropertySymbols;
    }, function(e2, t) {
      e2.exports = function(e3, t2, n) {
        return Math.min(Math.max(e3, t2), n);
      };
    }, function(e2, t, n) {
      var a = n(14), r = n(15), o = n(37), i = n(6), s = n(12), c = n(55), l = n(28), u = n(61), f = n(2)("iterator"), p = !([].keys && "next" in [].keys()), d = function() {
        return this;
      };
      e2.exports = function(e3, t2, n2, b, h, v, m) {
        c(n2, t2, b);
        var y, g, E, j = function(e4) {
          if (!p && e4 in O)
            return O[e4];
          switch (e4) {
            case "keys":
            case "values":
              return function() {
                return new n2(this, e4);
              };
          }
          return function() {
            return new n2(this, e4);
          };
        }, x = t2 + " Iterator", _ = "values" == h, k = false, O = e3.prototype, C = O[f] || O["@@iterator"] || h && O[h], S = C || j(h), w = h ? _ ? j("entries") : S : void 0, A = "Array" == t2 && O.entries || C;
        if (A && (E = u(A.call(new e3()))) !== Object.prototype && E.next && (l(E, x, true), a || "function" == typeof E[f] || i(E, f, d)), _ && C && "values" !== C.name && (k = true, S = function() {
          return C.call(this);
        }), a && !m || !p && !k && O[f] || i(O, f, S), s[t2] = S, s[x] = d, h)
          if (y = { values: _ ? S : j("values"), keys: v ? S : j("keys"), entries: w }, m)
            for (g in y)
              g in O || o(O, g, y[g]);
          else
            r(r.P + r.F * (p || k), t2, y);
        return y;
      };
    }, function(e2, t, n) {
      e2.exports = !n(4) && !n(8)(function() {
        return 7 != Object.defineProperty(n(36)("div"), "a", { get: function() {
          return 7;
        } }).a;
      });
    }, function(e2, t, n) {
      var a = n(11), r = n(3).document, o = a(r) && a(r.createElement);
      e2.exports = function(e3) {
        return o ? r.createElement(e3) : {};
      };
    }, function(e2, t, n) {
      e2.exports = n(6);
    }, function(e2, t, n) {
      var a = n(10), r = n(56), o = n(27), i = n(25)("IE_PROTO"), s = function() {
      }, c = function() {
        var e3, t2 = n(36)("iframe"), a2 = o.length;
        for (t2.style.display = "none", n(60).appendChild(t2), t2.src = "javascript:", (e3 = t2.contentWindow.document).open(), e3.write("<script>document.F=Object<\/script>"), e3.close(), c = e3.F; a2--; )
          delete c.prototype[o[a2]];
        return c();
      };
      e2.exports = Object.create || function(e3, t2) {
        var n2;
        return null !== e3 ? (s.prototype = a(e3), n2 = new s(), s.prototype = null, n2[i] = e3) : n2 = c(), void 0 === t2 ? n2 : r(n2, t2);
      };
    }, function(e2, t, n) {
      var a = n(5), r = n(9), o = n(57)(false), i = n(25)("IE_PROTO");
      e2.exports = function(e3, t2) {
        var n2, s = r(e3), c = 0, l = [];
        for (n2 in s)
          n2 != i && a(s, n2) && l.push(n2);
        for (; t2.length > c; )
          a(s, n2 = t2[c++]) && (~o(l, n2) || l.push(n2));
        return l;
      };
    }, function(e2, t, n) {
      var a = n(24);
      e2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e3) {
        return "String" == a(e3) ? e3.split("") : Object(e3);
      };
    }, function(e2, t, n) {
      var a = n(39), r = n(27).concat("length", "prototype");
      t.f = Object.getOwnPropertyNames || function(e3) {
        return a(e3, r);
      };
    }, function(e2, t, n) {
      var a = n(24), r = n(2)("toStringTag"), o = "Arguments" == a(function() {
        return arguments;
      }());
      e2.exports = function(e3) {
        var t2, n2, i;
        return void 0 === e3 ? "Undefined" : null === e3 ? "Null" : "string" == typeof (n2 = function(e4, t3) {
          try {
            return e4[t3];
          } catch (e5) {
          }
        }(t2 = Object(e3), r)) ? n2 : o ? a(t2) : "Object" == (i = a(t2)) && "function" == typeof t2.callee ? "Arguments" : i;
      };
    }, function(e2, t) {
      var n;
      n = function() {
        return this;
      }();
      try {
        n = n || new Function("return this")();
      } catch (e3) {
        "object" == typeof window && (n = window);
      }
      e2.exports = n;
    }, function(e2, t) {
      var n = /-?\d+(\.\d+)?%?/g;
      e2.exports = function(e3) {
        return e3.match(n);
      };
    }, function(e2, t, n) {
      Object.defineProperty(t, "__esModule", { value: true }), t.getBase16Theme = t.createStyling = t.invertTheme = void 0;
      var a = d(n(49)), r = d(n(76)), o = d(n(81)), i = d(n(89)), s = d(n(93)), c = function(e3) {
        if (e3 && e3.__esModule)
          return e3;
        var t2 = {};
        if (null != e3)
          for (var n2 in e3)
            Object.prototype.hasOwnProperty.call(e3, n2) && (t2[n2] = e3[n2]);
        return t2.default = e3, t2;
      }(n(94)), l = d(n(132)), u = d(n(133)), f = d(n(138)), p = n(139);
      function d(e3) {
        return e3 && e3.__esModule ? e3 : { default: e3 };
      }
      var b = c.default, h = (0, i.default)(b), v = (0, f.default)(u.default, p.rgb2yuv, function(e3) {
        var t2, n2 = (0, o.default)(e3, 3), a2 = n2[0], r2 = n2[1], i2 = n2[2];
        return [(t2 = a2, t2 < 0.25 ? 1 : t2 < 0.5 ? 0.9 - t2 : 1.1 - t2), r2, i2];
      }, p.yuv2rgb, l.default), m = function(e3) {
        return function(t2) {
          return { className: [t2.className, e3.className].filter(Boolean).join(" "), style: (0, r.default)({}, t2.style || {}, e3.style || {}) };
        };
      }, y = function(e3, t2) {
        var n2 = (0, i.default)(t2);
        for (var o2 in e3)
          -1 === n2.indexOf(o2) && n2.push(o2);
        return n2.reduce(function(n3, o3) {
          return n3[o3] = function(e4, t3) {
            if (void 0 === e4)
              return t3;
            if (void 0 === t3)
              return e4;
            var n4 = void 0 === e4 ? "undefined" : (0, a.default)(e4), o4 = void 0 === t3 ? "undefined" : (0, a.default)(t3);
            switch (n4) {
              case "string":
                switch (o4) {
                  case "string":
                    return [t3, e4].filter(Boolean).join(" ");
                  case "object":
                    return m({ className: e4, style: t3 });
                  case "function":
                    return function(n5) {
                      for (var a2 = arguments.length, r2 = Array(a2 > 1 ? a2 - 1 : 0), o5 = 1; o5 < a2; o5++)
                        r2[o5 - 1] = arguments[o5];
                      return m({ className: e4 })(t3.apply(void 0, [n5].concat(r2)));
                    };
                }
              case "object":
                switch (o4) {
                  case "string":
                    return m({ className: t3, style: e4 });
                  case "object":
                    return (0, r.default)({}, t3, e4);
                  case "function":
                    return function(n5) {
                      for (var a2 = arguments.length, r2 = Array(a2 > 1 ? a2 - 1 : 0), o5 = 1; o5 < a2; o5++)
                        r2[o5 - 1] = arguments[o5];
                      return m({ style: e4 })(t3.apply(void 0, [n5].concat(r2)));
                    };
                }
              case "function":
                switch (o4) {
                  case "string":
                    return function(n5) {
                      for (var a2 = arguments.length, r2 = Array(a2 > 1 ? a2 - 1 : 0), o5 = 1; o5 < a2; o5++)
                        r2[o5 - 1] = arguments[o5];
                      return e4.apply(void 0, [m(n5)({ className: t3 })].concat(r2));
                    };
                  case "object":
                    return function(n5) {
                      for (var a2 = arguments.length, r2 = Array(a2 > 1 ? a2 - 1 : 0), o5 = 1; o5 < a2; o5++)
                        r2[o5 - 1] = arguments[o5];
                      return e4.apply(void 0, [m(n5)({ style: t3 })].concat(r2));
                    };
                  case "function":
                    return function(n5) {
                      for (var a2 = arguments.length, r2 = Array(a2 > 1 ? a2 - 1 : 0), o5 = 1; o5 < a2; o5++)
                        r2[o5 - 1] = arguments[o5];
                      return e4.apply(void 0, [t3.apply(void 0, [n5].concat(r2))].concat(r2));
                    };
                }
            }
          }(e3[o3], t2[o3]), n3;
        }, {});
      }, g = function(e3, t2) {
        for (var n2 = arguments.length, o2 = Array(n2 > 2 ? n2 - 2 : 0), s2 = 2; s2 < n2; s2++)
          o2[s2 - 2] = arguments[s2];
        if (null === t2)
          return e3;
        Array.isArray(t2) || (t2 = [t2]);
        var c2 = t2.map(function(t3) {
          return e3[t3];
        }).filter(Boolean), l2 = c2.reduce(function(e4, t3) {
          return "string" == typeof t3 ? e4.className = [e4.className, t3].filter(Boolean).join(" ") : "object" === (void 0 === t3 ? "undefined" : (0, a.default)(t3)) ? e4.style = (0, r.default)({}, e4.style, t3) : "function" == typeof t3 && (e4 = (0, r.default)({}, e4, t3.apply(void 0, [e4].concat(o2)))), e4;
        }, { className: "", style: {} });
        return l2.className || delete l2.className, 0 === (0, i.default)(l2.style).length && delete l2.style, l2;
      }, E = t.invertTheme = function(e3) {
        return (0, i.default)(e3).reduce(function(t2, n2) {
          return t2[n2] = /^base/.test(n2) ? v(e3[n2]) : "scheme" === n2 ? e3[n2] + ":inverted" : e3[n2], t2;
        }, {});
      }, j = (t.createStyling = (0, s.default)(function(e3) {
        for (var t2 = arguments.length, n2 = Array(t2 > 3 ? t2 - 3 : 0), a2 = 3; a2 < t2; a2++)
          n2[a2 - 3] = arguments[a2];
        var o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, l2 = o2.defaultBase16, u2 = void 0 === l2 ? b : l2, f2 = o2.base16Themes, p2 = void 0 === f2 ? null : f2, d2 = j(c2, p2);
        d2 && (c2 = (0, r.default)({}, d2, c2));
        var v2 = h.reduce(function(e4, t3) {
          return e4[t3] = c2[t3] || u2[t3], e4;
        }, {}), m2 = (0, i.default)(c2).reduce(function(e4, t3) {
          return -1 === h.indexOf(t3) ? (e4[t3] = c2[t3], e4) : e4;
        }, {}), E2 = e3(v2), x = y(m2, E2);
        return (0, s.default)(g, 2).apply(void 0, [x].concat(n2));
      }, 3), t.getBase16Theme = function(e3, t2) {
        if (e3 && e3.extend && (e3 = e3.extend), "string" == typeof e3) {
          var n2 = e3.split(":"), a2 = (0, o.default)(n2, 2), r2 = a2[0], i2 = a2[1];
          e3 = (t2 || {})[r2] || c[r2], "inverted" === i2 && (e3 = E(e3));
        }
        return e3 && e3.hasOwnProperty("base00") ? e3 : void 0;
      });
    }, function(e2, t, n) {
      var a, r = "object" == typeof Reflect ? Reflect : null, o = r && "function" == typeof r.apply ? r.apply : function(e3, t2, n2) {
        return Function.prototype.apply.call(e3, t2, n2);
      };
      a = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(e3) {
        return Object.getOwnPropertyNames(e3).concat(Object.getOwnPropertySymbols(e3));
      } : function(e3) {
        return Object.getOwnPropertyNames(e3);
      };
      var i = Number.isNaN || function(e3) {
        return e3 != e3;
      };
      function s() {
        s.init.call(this);
      }
      e2.exports = s, e2.exports.once = function(e3, t2) {
        return new Promise(function(n2, a2) {
          function r2() {
            void 0 !== o2 && e3.removeListener("error", o2), n2([].slice.call(arguments));
          }
          var o2;
          "error" !== t2 && (o2 = function(n3) {
            e3.removeListener(t2, r2), a2(n3);
          }, e3.once("error", o2)), e3.once(t2, r2);
        });
      }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
      var c = 10;
      function l(e3) {
        if ("function" != typeof e3)
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e3);
      }
      function u(e3) {
        return void 0 === e3._maxListeners ? s.defaultMaxListeners : e3._maxListeners;
      }
      function f(e3, t2, n2, a2) {
        var r2, o2, i2, s2;
        if (l(n2), void 0 === (o2 = e3._events) ? (o2 = e3._events = /* @__PURE__ */ Object.create(null), e3._eventsCount = 0) : (void 0 !== o2.newListener && (e3.emit("newListener", t2, n2.listener ? n2.listener : n2), o2 = e3._events), i2 = o2[t2]), void 0 === i2)
          i2 = o2[t2] = n2, ++e3._eventsCount;
        else if ("function" == typeof i2 ? i2 = o2[t2] = a2 ? [n2, i2] : [i2, n2] : a2 ? i2.unshift(n2) : i2.push(n2), (r2 = u(e3)) > 0 && i2.length > r2 && !i2.warned) {
          i2.warned = true;
          var c2 = new Error("Possible EventEmitter memory leak detected. " + i2.length + " " + String(t2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          c2.name = "MaxListenersExceededWarning", c2.emitter = e3, c2.type = t2, c2.count = i2.length, s2 = c2, console && console.warn && console.warn(s2);
        }
        return e3;
      }
      function p() {
        if (!this.fired)
          return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
      }
      function d(e3, t2, n2) {
        var a2 = { fired: false, wrapFn: void 0, target: e3, type: t2, listener: n2 }, r2 = p.bind(a2);
        return r2.listener = n2, a2.wrapFn = r2, r2;
      }
      function b(e3, t2, n2) {
        var a2 = e3._events;
        if (void 0 === a2)
          return [];
        var r2 = a2[t2];
        return void 0 === r2 ? [] : "function" == typeof r2 ? n2 ? [r2.listener || r2] : [r2] : n2 ? function(e4) {
          for (var t3 = new Array(e4.length), n3 = 0; n3 < t3.length; ++n3)
            t3[n3] = e4[n3].listener || e4[n3];
          return t3;
        }(r2) : v(r2, r2.length);
      }
      function h(e3) {
        var t2 = this._events;
        if (void 0 !== t2) {
          var n2 = t2[e3];
          if ("function" == typeof n2)
            return 1;
          if (void 0 !== n2)
            return n2.length;
        }
        return 0;
      }
      function v(e3, t2) {
        for (var n2 = new Array(t2), a2 = 0; a2 < t2; ++a2)
          n2[a2] = e3[a2];
        return n2;
      }
      Object.defineProperty(s, "defaultMaxListeners", { enumerable: true, get: function() {
        return c;
      }, set: function(e3) {
        if ("number" != typeof e3 || e3 < 0 || i(e3))
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e3 + ".");
        c = e3;
      } }), s.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
      }, s.prototype.setMaxListeners = function(e3) {
        if ("number" != typeof e3 || e3 < 0 || i(e3))
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e3 + ".");
        return this._maxListeners = e3, this;
      }, s.prototype.getMaxListeners = function() {
        return u(this);
      }, s.prototype.emit = function(e3) {
        for (var t2 = [], n2 = 1; n2 < arguments.length; n2++)
          t2.push(arguments[n2]);
        var a2 = "error" === e3, r2 = this._events;
        if (void 0 !== r2)
          a2 = a2 && void 0 === r2.error;
        else if (!a2)
          return false;
        if (a2) {
          var i2;
          if (t2.length > 0 && (i2 = t2[0]), i2 instanceof Error)
            throw i2;
          var s2 = new Error("Unhandled error." + (i2 ? " (" + i2.message + ")" : ""));
          throw s2.context = i2, s2;
        }
        var c2 = r2[e3];
        if (void 0 === c2)
          return false;
        if ("function" == typeof c2)
          o(c2, this, t2);
        else {
          var l2 = c2.length, u2 = v(c2, l2);
          for (n2 = 0; n2 < l2; ++n2)
            o(u2[n2], this, t2);
        }
        return true;
      }, s.prototype.addListener = function(e3, t2) {
        return f(this, e3, t2, false);
      }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e3, t2) {
        return f(this, e3, t2, true);
      }, s.prototype.once = function(e3, t2) {
        return l(t2), this.on(e3, d(this, e3, t2)), this;
      }, s.prototype.prependOnceListener = function(e3, t2) {
        return l(t2), this.prependListener(e3, d(this, e3, t2)), this;
      }, s.prototype.removeListener = function(e3, t2) {
        var n2, a2, r2, o2, i2;
        if (l(t2), void 0 === (a2 = this._events))
          return this;
        if (void 0 === (n2 = a2[e3]))
          return this;
        if (n2 === t2 || n2.listener === t2)
          0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete a2[e3], a2.removeListener && this.emit("removeListener", e3, n2.listener || t2));
        else if ("function" != typeof n2) {
          for (r2 = -1, o2 = n2.length - 1; o2 >= 0; o2--)
            if (n2[o2] === t2 || n2[o2].listener === t2) {
              i2 = n2[o2].listener, r2 = o2;
              break;
            }
          if (r2 < 0)
            return this;
          0 === r2 ? n2.shift() : function(e4, t3) {
            for (; t3 + 1 < e4.length; t3++)
              e4[t3] = e4[t3 + 1];
            e4.pop();
          }(n2, r2), 1 === n2.length && (a2[e3] = n2[0]), void 0 !== a2.removeListener && this.emit("removeListener", e3, i2 || t2);
        }
        return this;
      }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e3) {
        var t2, n2, a2;
        if (void 0 === (n2 = this._events))
          return this;
        if (void 0 === n2.removeListener)
          return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n2[e3] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n2[e3]), this;
        if (0 === arguments.length) {
          var r2, o2 = Object.keys(n2);
          for (a2 = 0; a2 < o2.length; ++a2)
            "removeListener" !== (r2 = o2[a2]) && this.removeAllListeners(r2);
          return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
        }
        if ("function" == typeof (t2 = n2[e3]))
          this.removeListener(e3, t2);
        else if (void 0 !== t2)
          for (a2 = t2.length - 1; a2 >= 0; a2--)
            this.removeListener(e3, t2[a2]);
        return this;
      }, s.prototype.listeners = function(e3) {
        return b(this, e3, true);
      }, s.prototype.rawListeners = function(e3) {
        return b(this, e3, false);
      }, s.listenerCount = function(e3, t2) {
        return "function" == typeof e3.listenerCount ? e3.listenerCount(t2) : h.call(e3, t2);
      }, s.prototype.listenerCount = h, s.prototype.eventNames = function() {
        return this._eventsCount > 0 ? a(this._events) : [];
      };
    }, function(e2, t, n) {
      e2.exports.Dispatcher = n(140);
    }, function(e2, t, n) {
      e2.exports = n(142);
    }, function(e2, t, n) {
      t.__esModule = true;
      var a = i(n(50)), r = i(n(65)), o = "function" == typeof r.default && "symbol" == typeof a.default ? function(e3) {
        return typeof e3;
      } : function(e3) {
        return e3 && "function" == typeof r.default && e3.constructor === r.default && e3 !== r.default.prototype ? "symbol" : typeof e3;
      };
      function i(e3) {
        return e3 && e3.__esModule ? e3 : { default: e3 };
      }
      t.default = "function" == typeof r.default && "symbol" === o(a.default) ? function(e3) {
        return void 0 === e3 ? "undefined" : o(e3);
      } : function(e3) {
        return e3 && "function" == typeof r.default && e3.constructor === r.default && e3 !== r.default.prototype ? "symbol" : void 0 === e3 ? "undefined" : o(e3);
      };
    }, function(e2, t, n) {
      e2.exports = { default: n(51), __esModule: true };
    }, function(e2, t, n) {
      n(20), n(29), e2.exports = n(30).f("iterator");
    }, function(e2, t, n) {
      var a = n(21), r = n(22);
      e2.exports = function(e3) {
        return function(t2, n2) {
          var o, i, s = String(r(t2)), c = a(n2), l = s.length;
          return c < 0 || c >= l ? e3 ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === l || (i = s.charCodeAt(c + 1)) < 56320 || i > 57343 ? e3 ? s.charAt(c) : o : e3 ? s.slice(c, c + 2) : i - 56320 + (o - 55296 << 10) + 65536;
        };
      };
    }, function(e2, t, n) {
      var a = n(54);
      e2.exports = function(e3, t2, n2) {
        if (a(e3), void 0 === t2)
          return e3;
        switch (n2) {
          case 1:
            return function(n3) {
              return e3.call(t2, n3);
            };
          case 2:
            return function(n3, a2) {
              return e3.call(t2, n3, a2);
            };
          case 3:
            return function(n3, a2, r) {
              return e3.call(t2, n3, a2, r);
            };
        }
        return function() {
          return e3.apply(t2, arguments);
        };
      };
    }, function(e2, t) {
      e2.exports = function(e3) {
        if ("function" != typeof e3)
          throw TypeError(e3 + " is not a function!");
        return e3;
      };
    }, function(e2, t, n) {
      var a = n(38), r = n(16), o = n(28), i = {};
      n(6)(i, n(2)("iterator"), function() {
        return this;
      }), e2.exports = function(e3, t2, n2) {
        e3.prototype = a(i, { next: r(1, n2) }), o(e3, t2 + " Iterator");
      };
    }, function(e2, t, n) {
      var a = n(7), r = n(10), o = n(13);
      e2.exports = n(4) ? Object.defineProperties : function(e3, t2) {
        r(e3);
        for (var n2, i = o(t2), s = i.length, c = 0; s > c; )
          a.f(e3, n2 = i[c++], t2[n2]);
        return e3;
      };
    }, function(e2, t, n) {
      var a = n(9), r = n(58), o = n(59);
      e2.exports = function(e3) {
        return function(t2, n2, i) {
          var s, c = a(t2), l = r(c.length), u = o(i, l);
          if (e3 && n2 != n2) {
            for (; l > u; )
              if ((s = c[u++]) != s)
                return true;
          } else
            for (; l > u; u++)
              if ((e3 || u in c) && c[u] === n2)
                return e3 || u || 0;
          return !e3 && -1;
        };
      };
    }, function(e2, t, n) {
      var a = n(21), r = Math.min;
      e2.exports = function(e3) {
        return e3 > 0 ? r(a(e3), 9007199254740991) : 0;
      };
    }, function(e2, t, n) {
      var a = n(21), r = Math.max, o = Math.min;
      e2.exports = function(e3, t2) {
        return (e3 = a(e3)) < 0 ? r(e3 + t2, 0) : o(e3, t2);
      };
    }, function(e2, t, n) {
      var a = n(3).document;
      e2.exports = a && a.documentElement;
    }, function(e2, t, n) {
      var a = n(5), r = n(18), o = n(25)("IE_PROTO"), i = Object.prototype;
      e2.exports = Object.getPrototypeOf || function(e3) {
        return e3 = r(e3), a(e3, o) ? e3[o] : "function" == typeof e3.constructor && e3 instanceof e3.constructor ? e3.constructor.prototype : e3 instanceof Object ? i : null;
      };
    }, function(e2, t, n) {
      var a = n(63), r = n(64), o = n(12), i = n(9);
      e2.exports = n(34)(Array, "Array", function(e3, t2) {
        this._t = i(e3), this._i = 0, this._k = t2;
      }, function() {
        var e3 = this._t, t2 = this._k, n2 = this._i++;
        return !e3 || n2 >= e3.length ? (this._t = void 0, r(1)) : r(0, "keys" == t2 ? n2 : "values" == t2 ? e3[n2] : [n2, e3[n2]]);
      }, "values"), o.Arguments = o.Array, a("keys"), a("values"), a("entries");
    }, function(e2, t) {
      e2.exports = function() {
      };
    }, function(e2, t) {
      e2.exports = function(e3, t2) {
        return { value: t2, done: !!e3 };
      };
    }, function(e2, t, n) {
      e2.exports = { default: n(66), __esModule: true };
    }, function(e2, t, n) {
      n(67), n(73), n(74), n(75), e2.exports = n(1).Symbol;
    }, function(e2, t, n) {
      var a = n(3), r = n(5), o = n(4), i = n(15), s = n(37), c = n(68).KEY, l = n(8), u = n(26), f = n(28), p = n(17), d = n(2), b = n(30), h = n(31), v = n(69), m = n(70), y = n(10), g = n(11), E = n(18), j = n(9), x = n(23), _ = n(16), k = n(38), O = n(71), C = n(72), S = n(32), w = n(7), A = n(13), M = C.f, P = w.f, F = O.f, D = a.Symbol, I = a.JSON, R = I && I.stringify, L = d("_hidden"), B = d("toPrimitive"), N = {}.propertyIsEnumerable, z = u("symbol-registry"), T = u("symbols"), q = u("op-symbols"), V = Object.prototype, K = "function" == typeof D && !!S.f, W = a.QObject, H = !W || !W.prototype || !W.prototype.findChild, U = o && l(function() {
        return 7 != k(P({}, "a", { get: function() {
          return P(this, "a", { value: 7 }).a;
        } })).a;
      }) ? function(e3, t2, n2) {
        var a2 = M(V, t2);
        a2 && delete V[t2], P(e3, t2, n2), a2 && e3 !== V && P(V, t2, a2);
      } : P, G = function(e3) {
        var t2 = T[e3] = k(D.prototype);
        return t2._k = e3, t2;
      }, J = K && "symbol" == typeof D.iterator ? function(e3) {
        return "symbol" == typeof e3;
      } : function(e3) {
        return e3 instanceof D;
      }, Y = function(e3, t2, n2) {
        return e3 === V && Y(q, t2, n2), y(e3), t2 = x(t2, true), y(n2), r(T, t2) ? (n2.enumerable ? (r(e3, L) && e3[L][t2] && (e3[L][t2] = false), n2 = k(n2, { enumerable: _(0, false) })) : (r(e3, L) || P(e3, L, _(1, {})), e3[L][t2] = true), U(e3, t2, n2)) : P(e3, t2, n2);
      }, $ = function(e3, t2) {
        y(e3);
        for (var n2, a2 = v(t2 = j(t2)), r2 = 0, o2 = a2.length; o2 > r2; )
          Y(e3, n2 = a2[r2++], t2[n2]);
        return e3;
      }, Q = function(e3) {
        var t2 = N.call(this, e3 = x(e3, true));
        return !(this === V && r(T, e3) && !r(q, e3)) && (!(t2 || !r(this, e3) || !r(T, e3) || r(this, L) && this[L][e3]) || t2);
      }, Z = function(e3, t2) {
        if (e3 = j(e3), t2 = x(t2, true), e3 !== V || !r(T, t2) || r(q, t2)) {
          var n2 = M(e3, t2);
          return !n2 || !r(T, t2) || r(e3, L) && e3[L][t2] || (n2.enumerable = true), n2;
        }
      }, X = function(e3) {
        for (var t2, n2 = F(j(e3)), a2 = [], o2 = 0; n2.length > o2; )
          r(T, t2 = n2[o2++]) || t2 == L || t2 == c || a2.push(t2);
        return a2;
      }, ee = function(e3) {
        for (var t2, n2 = e3 === V, a2 = F(n2 ? q : j(e3)), o2 = [], i2 = 0; a2.length > i2; )
          !r(T, t2 = a2[i2++]) || n2 && !r(V, t2) || o2.push(T[t2]);
        return o2;
      };
      K || (s((D = function() {
        if (this instanceof D)
          throw TypeError("Symbol is not a constructor!");
        var e3 = p(arguments.length > 0 ? arguments[0] : void 0), t2 = function(n2) {
          this === V && t2.call(q, n2), r(this, L) && r(this[L], e3) && (this[L][e3] = false), U(this, e3, _(1, n2));
        };
        return o && H && U(V, e3, { configurable: true, set: t2 }), G(e3);
      }).prototype, "toString", function() {
        return this._k;
      }), C.f = Z, w.f = Y, n(41).f = O.f = X, n(19).f = Q, S.f = ee, o && !n(14) && s(V, "propertyIsEnumerable", Q, true), b.f = function(e3) {
        return G(d(e3));
      }), i(i.G + i.W + i.F * !K, { Symbol: D });
      for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne; )
        d(te[ne++]);
      for (var ae = A(d.store), re = 0; ae.length > re; )
        h(ae[re++]);
      i(i.S + i.F * !K, "Symbol", { for: function(e3) {
        return r(z, e3 += "") ? z[e3] : z[e3] = D(e3);
      }, keyFor: function(e3) {
        if (!J(e3))
          throw TypeError(e3 + " is not a symbol!");
        for (var t2 in z)
          if (z[t2] === e3)
            return t2;
      }, useSetter: function() {
        H = true;
      }, useSimple: function() {
        H = false;
      } }), i(i.S + i.F * !K, "Object", { create: function(e3, t2) {
        return void 0 === t2 ? k(e3) : $(k(e3), t2);
      }, defineProperty: Y, defineProperties: $, getOwnPropertyDescriptor: Z, getOwnPropertyNames: X, getOwnPropertySymbols: ee });
      var oe = l(function() {
        S.f(1);
      });
      i(i.S + i.F * oe, "Object", { getOwnPropertySymbols: function(e3) {
        return S.f(E(e3));
      } }), I && i(i.S + i.F * (!K || l(function() {
        var e3 = D();
        return "[null]" != R([e3]) || "{}" != R({ a: e3 }) || "{}" != R(Object(e3));
      })), "JSON", { stringify: function(e3) {
        for (var t2, n2, a2 = [e3], r2 = 1; arguments.length > r2; )
          a2.push(arguments[r2++]);
        if (n2 = t2 = a2[1], (g(t2) || void 0 !== e3) && !J(e3))
          return m(t2) || (t2 = function(e4, t3) {
            if ("function" == typeof n2 && (t3 = n2.call(this, e4, t3)), !J(t3))
              return t3;
          }), a2[1] = t2, R.apply(I, a2);
      } }), D.prototype[B] || n(6)(D.prototype, B, D.prototype.valueOf), f(D, "Symbol"), f(Math, "Math", true), f(a.JSON, "JSON", true);
    }, function(e2, t, n) {
      var a = n(17)("meta"), r = n(11), o = n(5), i = n(7).f, s = 0, c = Object.isExtensible || function() {
        return true;
      }, l = !n(8)(function() {
        return c(Object.preventExtensions({}));
      }), u = function(e3) {
        i(e3, a, { value: { i: "O" + ++s, w: {} } });
      }, f = e2.exports = { KEY: a, NEED: false, fastKey: function(e3, t2) {
        if (!r(e3))
          return "symbol" == typeof e3 ? e3 : ("string" == typeof e3 ? "S" : "P") + e3;
        if (!o(e3, a)) {
          if (!c(e3))
            return "F";
          if (!t2)
            return "E";
          u(e3);
        }
        return e3[a].i;
      }, getWeak: function(e3, t2) {
        if (!o(e3, a)) {
          if (!c(e3))
            return true;
          if (!t2)
            return false;
          u(e3);
        }
        return e3[a].w;
      }, onFreeze: function(e3) {
        return l && f.NEED && c(e3) && !o(e3, a) && u(e3), e3;
      } };
    }, function(e2, t, n) {
      var a = n(13), r = n(32), o = n(19);
      e2.exports = function(e3) {
        var t2 = a(e3), n2 = r.f;
        if (n2)
          for (var i, s = n2(e3), c = o.f, l = 0; s.length > l; )
            c.call(e3, i = s[l++]) && t2.push(i);
        return t2;
      };
    }, function(e2, t, n) {
      var a = n(24);
      e2.exports = Array.isArray || function(e3) {
        return "Array" == a(e3);
      };
    }, function(e2, t, n) {
      var a = n(9), r = n(41).f, o = {}.toString, i = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      e2.exports.f = function(e3) {
        return i && "[object Window]" == o.call(e3) ? function(e4) {
          try {
            return r(e4);
          } catch (e5) {
            return i.slice();
          }
        }(e3) : r(a(e3));
      };
    }, function(e2, t, n) {
      var a = n(19), r = n(16), o = n(9), i = n(23), s = n(5), c = n(35), l = Object.getOwnPropertyDescriptor;
      t.f = n(4) ? l : function(e3, t2) {
        if (e3 = o(e3), t2 = i(t2, true), c)
          try {
            return l(e3, t2);
          } catch (e4) {
          }
        if (s(e3, t2))
          return r(!a.f.call(e3, t2), e3[t2]);
      };
    }, function(e2, t) {
    }, function(e2, t, n) {
      n(31)("asyncIterator");
    }, function(e2, t, n) {
      n(31)("observable");
    }, function(e2, t, n) {
      t.__esModule = true;
      var a, r = n(77), o = (a = r) && a.__esModule ? a : { default: a };
      t.default = o.default || function(e3) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = arguments[t2];
          for (var a2 in n2)
            Object.prototype.hasOwnProperty.call(n2, a2) && (e3[a2] = n2[a2]);
        }
        return e3;
      };
    }, function(e2, t, n) {
      e2.exports = { default: n(78), __esModule: true };
    }, function(e2, t, n) {
      n(79), e2.exports = n(1).Object.assign;
    }, function(e2, t, n) {
      var a = n(15);
      a(a.S + a.F, "Object", { assign: n(80) });
    }, function(e2, t, n) {
      var a = n(4), r = n(13), o = n(32), i = n(19), s = n(18), c = n(40), l = Object.assign;
      e2.exports = !l || n(8)(function() {
        var e3 = {}, t2 = {}, n2 = Symbol(), a2 = "abcdefghijklmnopqrst";
        return e3[n2] = 7, a2.split("").forEach(function(e4) {
          t2[e4] = e4;
        }), 7 != l({}, e3)[n2] || Object.keys(l({}, t2)).join("") != a2;
      }) ? function(e3, t2) {
        for (var n2 = s(e3), l2 = arguments.length, u = 1, f = o.f, p = i.f; l2 > u; )
          for (var d, b = c(arguments[u++]), h = f ? r(b).concat(f(b)) : r(b), v = h.length, m = 0; v > m; )
            d = h[m++], a && !p.call(b, d) || (n2[d] = b[d]);
        return n2;
      } : l;
    }, function(e2, t, n) {
      t.__esModule = true;
      var a = o(n(82)), r = o(n(85));
      function o(e3) {
        return e3 && e3.__esModule ? e3 : { default: e3 };
      }
      t.default = function(e3, t2) {
        if (Array.isArray(e3))
          return e3;
        if ((0, a.default)(Object(e3)))
          return function(e4, t3) {
            var n2 = [], a2 = true, o2 = false, i = void 0;
            try {
              for (var s, c = (0, r.default)(e4); !(a2 = (s = c.next()).done) && (n2.push(s.value), !t3 || n2.length !== t3); a2 = true)
                ;
            } catch (e5) {
              o2 = true, i = e5;
            } finally {
              try {
                !a2 && c.return && c.return();
              } finally {
                if (o2)
                  throw i;
              }
            }
            return n2;
          }(e3, t2);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }, function(e2, t, n) {
      e2.exports = { default: n(83), __esModule: true };
    }, function(e2, t, n) {
      n(29), n(20), e2.exports = n(84);
    }, function(e2, t, n) {
      var a = n(42), r = n(2)("iterator"), o = n(12);
      e2.exports = n(1).isIterable = function(e3) {
        var t2 = Object(e3);
        return void 0 !== t2[r] || "@@iterator" in t2 || o.hasOwnProperty(a(t2));
      };
    }, function(e2, t, n) {
      e2.exports = { default: n(86), __esModule: true };
    }, function(e2, t, n) {
      n(29), n(20), e2.exports = n(87);
    }, function(e2, t, n) {
      var a = n(10), r = n(88);
      e2.exports = n(1).getIterator = function(e3) {
        var t2 = r(e3);
        if ("function" != typeof t2)
          throw TypeError(e3 + " is not iterable!");
        return a(t2.call(e3));
      };
    }, function(e2, t, n) {
      var a = n(42), r = n(2)("iterator"), o = n(12);
      e2.exports = n(1).getIteratorMethod = function(e3) {
        if (null != e3)
          return e3[r] || e3["@@iterator"] || o[a(e3)];
      };
    }, function(e2, t, n) {
      e2.exports = { default: n(90), __esModule: true };
    }, function(e2, t, n) {
      n(91), e2.exports = n(1).Object.keys;
    }, function(e2, t, n) {
      var a = n(18), r = n(13);
      n(92)("keys", function() {
        return function(e3) {
          return r(a(e3));
        };
      });
    }, function(e2, t, n) {
      var a = n(15), r = n(1), o = n(8);
      e2.exports = function(e3, t2) {
        var n2 = (r.Object || {})[e3] || Object[e3], i = {};
        i[e3] = t2(n2), a(a.S + a.F * o(function() {
          n2(1);
        }), "Object", i);
      };
    }, function(e2, t, n) {
      (function(t2) {
        var n2 = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]], a = /^\s+|\s+$/g, r = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, o = /\{\n\/\* \[wrapped with (.+)\] \*/, i = /,? & /, s = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i, l = /^\[object .+?Constructor\]$/, u = /^0o[0-7]+$/i, f = /^(?:0|[1-9]\d*)$/, p = parseInt, d = "object" == typeof t2 && t2 && t2.Object === Object && t2, b = "object" == typeof self && self && self.Object === Object && self, h = d || b || Function("return this")();
        function v(e3, t3, n3) {
          switch (n3.length) {
            case 0:
              return e3.call(t3);
            case 1:
              return e3.call(t3, n3[0]);
            case 2:
              return e3.call(t3, n3[0], n3[1]);
            case 3:
              return e3.call(t3, n3[0], n3[1], n3[2]);
          }
          return e3.apply(t3, n3);
        }
        function m(e3, t3) {
          return !!(e3 ? e3.length : 0) && function(e4, t4, n3) {
            if (t4 != t4)
              return function(e5, t5, n4, a3) {
                var r3 = e5.length, o2 = n4 + (a3 ? 1 : -1);
                for (; a3 ? o2-- : ++o2 < r3; )
                  if (t5(e5[o2], o2, e5))
                    return o2;
                return -1;
              }(e4, y, n3);
            var a2 = n3 - 1, r2 = e4.length;
            for (; ++a2 < r2; )
              if (e4[a2] === t4)
                return a2;
            return -1;
          }(e3, t3, 0) > -1;
        }
        function y(e3) {
          return e3 != e3;
        }
        function g(e3, t3) {
          for (var n3 = e3.length, a2 = 0; n3--; )
            e3[n3] === t3 && a2++;
          return a2;
        }
        function E(e3, t3) {
          for (var n3 = -1, a2 = e3.length, r2 = 0, o2 = []; ++n3 < a2; ) {
            var i2 = e3[n3];
            i2 !== t3 && "__lodash_placeholder__" !== i2 || (e3[n3] = "__lodash_placeholder__", o2[r2++] = n3);
          }
          return o2;
        }
        var j, x, _, k = Function.prototype, O = Object.prototype, C = h["__core-js_shared__"], S = (j = /[^.]+$/.exec(C && C.keys && C.keys.IE_PROTO || "")) ? "Symbol(src)_1." + j : "", w = k.toString, A = O.hasOwnProperty, M = O.toString, P = RegExp("^" + w.call(A).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), F = Object.create, D = Math.max, I = Math.min, R = (x = H(Object, "defineProperty"), (_ = H.name) && _.length > 2 ? x : void 0);
        function L(e3) {
          return X(e3) ? F(e3) : {};
        }
        function B(e3) {
          return !(!X(e3) || function(e4) {
            return !!S && S in e4;
          }(e3)) && (function(e4) {
            var t3 = X(e4) ? M.call(e4) : "";
            return "[object Function]" == t3 || "[object GeneratorFunction]" == t3;
          }(e3) || function(e4) {
            var t3 = false;
            if (null != e4 && "function" != typeof e4.toString)
              try {
                t3 = !!(e4 + "");
              } catch (e5) {
              }
            return t3;
          }(e3) ? P : l).test(function(e4) {
            if (null != e4) {
              try {
                return w.call(e4);
              } catch (e5) {
              }
              try {
                return e4 + "";
              } catch (e5) {
              }
            }
            return "";
          }(e3));
        }
        function N(e3, t3, n3, a2) {
          for (var r2 = -1, o2 = e3.length, i2 = n3.length, s2 = -1, c2 = t3.length, l2 = D(o2 - i2, 0), u2 = Array(c2 + l2), f2 = !a2; ++s2 < c2; )
            u2[s2] = t3[s2];
          for (; ++r2 < i2; )
            (f2 || r2 < o2) && (u2[n3[r2]] = e3[r2]);
          for (; l2--; )
            u2[s2++] = e3[r2++];
          return u2;
        }
        function z(e3, t3, n3, a2) {
          for (var r2 = -1, o2 = e3.length, i2 = -1, s2 = n3.length, c2 = -1, l2 = t3.length, u2 = D(o2 - s2, 0), f2 = Array(u2 + l2), p2 = !a2; ++r2 < u2; )
            f2[r2] = e3[r2];
          for (var d2 = r2; ++c2 < l2; )
            f2[d2 + c2] = t3[c2];
          for (; ++i2 < s2; )
            (p2 || r2 < o2) && (f2[d2 + n3[i2]] = e3[r2++]);
          return f2;
        }
        function T(e3) {
          return function() {
            var t3 = arguments;
            switch (t3.length) {
              case 0:
                return new e3();
              case 1:
                return new e3(t3[0]);
              case 2:
                return new e3(t3[0], t3[1]);
              case 3:
                return new e3(t3[0], t3[1], t3[2]);
              case 4:
                return new e3(t3[0], t3[1], t3[2], t3[3]);
              case 5:
                return new e3(t3[0], t3[1], t3[2], t3[3], t3[4]);
              case 6:
                return new e3(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5]);
              case 7:
                return new e3(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5], t3[6]);
            }
            var n3 = L(e3.prototype), a2 = e3.apply(n3, t3);
            return X(a2) ? a2 : n3;
          };
        }
        function q(e3, t3, n3, a2, r2, o2, i2, s2, c2, l2) {
          var u2 = 128 & t3, f2 = 1 & t3, p2 = 2 & t3, d2 = 24 & t3, b2 = 512 & t3, v2 = p2 ? void 0 : T(e3);
          return function m2() {
            for (var y2 = arguments.length, j2 = Array(y2), x2 = y2; x2--; )
              j2[x2] = arguments[x2];
            if (d2)
              var _2 = W(m2), k2 = g(j2, _2);
            if (a2 && (j2 = N(j2, a2, r2, d2)), o2 && (j2 = z(j2, o2, i2, d2)), y2 -= k2, d2 && y2 < l2) {
              var O2 = E(j2, _2);
              return V(e3, t3, q, m2.placeholder, n3, j2, O2, s2, c2, l2 - y2);
            }
            var C2 = f2 ? n3 : this, S2 = p2 ? C2[e3] : e3;
            return y2 = j2.length, s2 ? j2 = Y(j2, s2) : b2 && y2 > 1 && j2.reverse(), u2 && c2 < y2 && (j2.length = c2), this && this !== h && this instanceof m2 && (S2 = v2 || T(S2)), S2.apply(C2, j2);
          };
        }
        function V(e3, t3, n3, a2, r2, o2, i2, s2, c2, l2) {
          var u2 = 8 & t3;
          t3 |= u2 ? 32 : 64, 4 & (t3 &= ~(u2 ? 64 : 32)) || (t3 &= -4);
          var f2 = n3(e3, t3, r2, u2 ? o2 : void 0, u2 ? i2 : void 0, u2 ? void 0 : o2, u2 ? void 0 : i2, s2, c2, l2);
          return f2.placeholder = a2, $(f2, e3, t3);
        }
        function K(e3, t3, n3, a2, r2, o2, i2, s2) {
          var c2 = 2 & t3;
          if (!c2 && "function" != typeof e3)
            throw new TypeError("Expected a function");
          var l2 = a2 ? a2.length : 0;
          if (l2 || (t3 &= -97, a2 = r2 = void 0), i2 = void 0 === i2 ? i2 : D(te(i2), 0), s2 = void 0 === s2 ? s2 : te(s2), l2 -= r2 ? r2.length : 0, 64 & t3) {
            var u2 = a2, f2 = r2;
            a2 = r2 = void 0;
          }
          var p2 = [e3, t3, n3, a2, r2, u2, f2, o2, i2, s2];
          if (e3 = p2[0], t3 = p2[1], n3 = p2[2], a2 = p2[3], r2 = p2[4], !(s2 = p2[9] = null == p2[9] ? c2 ? 0 : e3.length : D(p2[9] - l2, 0)) && 24 & t3 && (t3 &= -25), t3 && 1 != t3)
            d2 = 8 == t3 || 16 == t3 ? function(e4, t4, n4) {
              var a3 = T(e4);
              return function r3() {
                for (var o3 = arguments.length, i3 = Array(o3), s3 = o3, c3 = W(r3); s3--; )
                  i3[s3] = arguments[s3];
                var l3 = o3 < 3 && i3[0] !== c3 && i3[o3 - 1] !== c3 ? [] : E(i3, c3);
                if ((o3 -= l3.length) < n4)
                  return V(e4, t4, q, r3.placeholder, void 0, i3, l3, void 0, void 0, n4 - o3);
                var u3 = this && this !== h && this instanceof r3 ? a3 : e4;
                return v(u3, this, i3);
              };
            }(e3, t3, s2) : 32 != t3 && 33 != t3 || r2.length ? q.apply(void 0, p2) : function(e4, t4, n4, a3) {
              var r3 = 1 & t4, o3 = T(e4);
              return function t5() {
                for (var i3 = -1, s3 = arguments.length, c3 = -1, l3 = a3.length, u3 = Array(l3 + s3), f3 = this && this !== h && this instanceof t5 ? o3 : e4; ++c3 < l3; )
                  u3[c3] = a3[c3];
                for (; s3--; )
                  u3[c3++] = arguments[++i3];
                return v(f3, r3 ? n4 : this, u3);
              };
            }(e3, t3, n3, a2);
          else
            var d2 = function(e4, t4, n4) {
              var a3 = 1 & t4, r3 = T(e4);
              return function t5() {
                var o3 = this && this !== h && this instanceof t5 ? r3 : e4;
                return o3.apply(a3 ? n4 : this, arguments);
              };
            }(e3, t3, n3);
          return $(d2, e3, t3);
        }
        function W(e3) {
          return e3.placeholder;
        }
        function H(e3, t3) {
          var n3 = function(e4, t4) {
            return null == e4 ? void 0 : e4[t4];
          }(e3, t3);
          return B(n3) ? n3 : void 0;
        }
        function U(e3) {
          var t3 = e3.match(o);
          return t3 ? t3[1].split(i) : [];
        }
        function G(e3, t3) {
          var n3 = t3.length, a2 = n3 - 1;
          return t3[a2] = (n3 > 1 ? "& " : "") + t3[a2], t3 = t3.join(n3 > 2 ? ", " : " "), e3.replace(r, "{\n/* [wrapped with " + t3 + "] */\n");
        }
        function J(e3, t3) {
          return !!(t3 = null == t3 ? 9007199254740991 : t3) && ("number" == typeof e3 || f.test(e3)) && e3 > -1 && e3 % 1 == 0 && e3 < t3;
        }
        function Y(e3, t3) {
          for (var n3 = e3.length, a2 = I(t3.length, n3), r2 = function(e4, t4) {
            var n4 = -1, a3 = e4.length;
            for (t4 || (t4 = Array(a3)); ++n4 < a3; )
              t4[n4] = e4[n4];
            return t4;
          }(e3); a2--; ) {
            var o2 = t3[a2];
            e3[a2] = J(o2, n3) ? r2[o2] : void 0;
          }
          return e3;
        }
        var $ = R ? function(e3, t3, n3) {
          var a2, r2 = t3 + "";
          return R(e3, "toString", { configurable: true, enumerable: false, value: (a2 = G(r2, Q(U(r2), n3)), function() {
            return a2;
          }) });
        } : function(e3) {
          return e3;
        };
        function Q(e3, t3) {
          return function(e4, t4) {
            for (var n3 = -1, a2 = e4 ? e4.length : 0; ++n3 < a2 && false !== t4(e4[n3], n3, e4); )
              ;
          }(n2, function(n3) {
            var a2 = "_." + n3[0];
            t3 & n3[1] && !m(e3, a2) && e3.push(a2);
          }), e3.sort();
        }
        function Z(e3, t3, n3) {
          var a2 = K(e3, 8, void 0, void 0, void 0, void 0, void 0, t3 = n3 ? void 0 : t3);
          return a2.placeholder = Z.placeholder, a2;
        }
        function X(e3) {
          var t3 = typeof e3;
          return !!e3 && ("object" == t3 || "function" == t3);
        }
        function ee(e3) {
          return e3 ? (e3 = function(e4) {
            if ("number" == typeof e4)
              return e4;
            if (function(e5) {
              return "symbol" == typeof e5 || function(e6) {
                return !!e6 && "object" == typeof e6;
              }(e5) && "[object Symbol]" == M.call(e5);
            }(e4))
              return NaN;
            if (X(e4)) {
              var t3 = "function" == typeof e4.valueOf ? e4.valueOf() : e4;
              e4 = X(t3) ? t3 + "" : t3;
            }
            if ("string" != typeof e4)
              return 0 === e4 ? e4 : +e4;
            e4 = e4.replace(a, "");
            var n3 = c.test(e4);
            return n3 || u.test(e4) ? p(e4.slice(2), n3 ? 2 : 8) : s.test(e4) ? NaN : +e4;
          }(e3)) === 1 / 0 || e3 === -1 / 0 ? 17976931348623157e292 * (e3 < 0 ? -1 : 1) : e3 == e3 ? e3 : 0 : 0 === e3 ? e3 : 0;
        }
        function te(e3) {
          var t3 = ee(e3), n3 = t3 % 1;
          return t3 == t3 ? n3 ? t3 - n3 : t3 : 0;
        }
        Z.placeholder = {}, e2.exports = Z;
      }).call(this, n(43));
    }, function(e2, t, n) {
      function a(e3) {
        return e3 && e3.__esModule ? e3.default : e3;
      }
      t.__esModule = true;
      var r = n(95);
      t.threezerotwofour = a(r);
      var o = n(96);
      t.apathy = a(o);
      var i = n(97);
      t.ashes = a(i);
      var s = n(98);
      t.atelierDune = a(s);
      var c = n(99);
      t.atelierForest = a(c);
      var l = n(100);
      t.atelierHeath = a(l);
      var u = n(101);
      t.atelierLakeside = a(u);
      var f = n(102);
      t.atelierSeaside = a(f);
      var p = n(103);
      t.bespin = a(p);
      var d = n(104);
      t.brewer = a(d);
      var b = n(105);
      t.bright = a(b);
      var h = n(106);
      t.chalk = a(h);
      var v = n(107);
      t.codeschool = a(v);
      var m = n(108);
      t.colors = a(m);
      var y = n(109);
      t.default = a(y);
      var g = n(110);
      t.eighties = a(g);
      var E = n(111);
      t.embers = a(E);
      var j = n(112);
      t.flat = a(j);
      var x = n(113);
      t.google = a(x);
      var _ = n(114);
      t.grayscale = a(_);
      var k = n(115);
      t.greenscreen = a(k);
      var O = n(116);
      t.harmonic = a(O);
      var C = n(117);
      t.hopscotch = a(C);
      var S = n(118);
      t.isotope = a(S);
      var w = n(119);
      t.marrakesh = a(w);
      var A = n(120);
      t.mocha = a(A);
      var M = n(121);
      t.monokai = a(M);
      var P = n(122);
      t.ocean = a(P);
      var F = n(123);
      t.paraiso = a(F);
      var D = n(124);
      t.pop = a(D);
      var I = n(125);
      t.railscasts = a(I);
      var R = n(126);
      t.shapeshifter = a(R);
      var L = n(127);
      t.solarized = a(L);
      var B = n(128);
      t.summerfruit = a(B);
      var N = n(129);
      t.tomorrow = a(N);
      var z = n(130);
      t.tube = a(z);
      var T = n(131);
      t.twilight = a(T);
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "threezerotwofour", author: "jan t. sott (http://github.com/idleberg)", base00: "#090300", base01: "#3a3432", base02: "#4a4543", base03: "#5c5855", base04: "#807d7c", base05: "#a5a2a2", base06: "#d6d5d4", base07: "#f7f7f7", base08: "#db2d20", base09: "#e8bbd0", base0A: "#fded02", base0B: "#01a252", base0C: "#b5e4f4", base0D: "#01a0e4", base0E: "#a16a94", base0F: "#cdab53" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "apathy", author: "jannik siebert (https://github.com/janniks)", base00: "#031A16", base01: "#0B342D", base02: "#184E45", base03: "#2B685E", base04: "#5F9C92", base05: "#81B5AC", base06: "#A7CEC8", base07: "#D2E7E4", base08: "#3E9688", base09: "#3E7996", base0A: "#3E4C96", base0B: "#883E96", base0C: "#963E4C", base0D: "#96883E", base0E: "#4C963E", base0F: "#3E965B" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "ashes", author: "jannik siebert (https://github.com/janniks)", base00: "#1C2023", base01: "#393F45", base02: "#565E65", base03: "#747C84", base04: "#ADB3BA", base05: "#C7CCD1", base06: "#DFE2E5", base07: "#F3F4F5", base08: "#C7AE95", base09: "#C7C795", base0A: "#AEC795", base0B: "#95C7AE", base0C: "#95AEC7", base0D: "#AE95C7", base0E: "#C795AE", base0F: "#C79595" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "atelier dune", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/dune)", base00: "#20201d", base01: "#292824", base02: "#6e6b5e", base03: "#7d7a68", base04: "#999580", base05: "#a6a28c", base06: "#e8e4cf", base07: "#fefbec", base08: "#d73737", base09: "#b65611", base0A: "#cfb017", base0B: "#60ac39", base0C: "#1fad83", base0D: "#6684e1", base0E: "#b854d4", base0F: "#d43552" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "atelier forest", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/forest)", base00: "#1b1918", base01: "#2c2421", base02: "#68615e", base03: "#766e6b", base04: "#9c9491", base05: "#a8a19f", base06: "#e6e2e0", base07: "#f1efee", base08: "#f22c40", base09: "#df5320", base0A: "#d5911a", base0B: "#5ab738", base0C: "#00ad9c", base0D: "#407ee7", base0E: "#6666ea", base0F: "#c33ff3" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "atelier heath", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/heath)", base00: "#1b181b", base01: "#292329", base02: "#695d69", base03: "#776977", base04: "#9e8f9e", base05: "#ab9bab", base06: "#d8cad8", base07: "#f7f3f7", base08: "#ca402b", base09: "#a65926", base0A: "#bb8a35", base0B: "#379a37", base0C: "#159393", base0D: "#516aec", base0E: "#7b59c0", base0F: "#cc33cc" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "atelier lakeside", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/lakeside/)", base00: "#161b1d", base01: "#1f292e", base02: "#516d7b", base03: "#5a7b8c", base04: "#7195a8", base05: "#7ea2b4", base06: "#c1e4f6", base07: "#ebf8ff", base08: "#d22d72", base09: "#935c25", base0A: "#8a8a0f", base0B: "#568c3b", base0C: "#2d8f6f", base0D: "#257fad", base0E: "#5d5db1", base0F: "#b72dd2" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "atelier seaside", author: "bram de haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/seaside/)", base00: "#131513", base01: "#242924", base02: "#5e6e5e", base03: "#687d68", base04: "#809980", base05: "#8ca68c", base06: "#cfe8cf", base07: "#f0fff0", base08: "#e6193c", base09: "#87711d", base0A: "#c3c322", base0B: "#29a329", base0C: "#1999b3", base0D: "#3d62f5", base0E: "#ad2bee", base0F: "#e619c3" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "bespin", author: "jan t. sott", base00: "#28211c", base01: "#36312e", base02: "#5e5d5c", base03: "#666666", base04: "#797977", base05: "#8a8986", base06: "#9d9b97", base07: "#baae9e", base08: "#cf6a4c", base09: "#cf7d34", base0A: "#f9ee98", base0B: "#54be0d", base0C: "#afc4db", base0D: "#5ea6ea", base0E: "#9b859d", base0F: "#937121" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "brewer", author: "timothée poisot (http://github.com/tpoisot)", base00: "#0c0d0e", base01: "#2e2f30", base02: "#515253", base03: "#737475", base04: "#959697", base05: "#b7b8b9", base06: "#dadbdc", base07: "#fcfdfe", base08: "#e31a1c", base09: "#e6550d", base0A: "#dca060", base0B: "#31a354", base0C: "#80b1d3", base0D: "#3182bd", base0E: "#756bb1", base0F: "#b15928" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "bright", author: "chris kempson (http://chriskempson.com)", base00: "#000000", base01: "#303030", base02: "#505050", base03: "#b0b0b0", base04: "#d0d0d0", base05: "#e0e0e0", base06: "#f5f5f5", base07: "#ffffff", base08: "#fb0120", base09: "#fc6d24", base0A: "#fda331", base0B: "#a1c659", base0C: "#76c7b7", base0D: "#6fb3d2", base0E: "#d381c3", base0F: "#be643c" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "chalk", author: "chris kempson (http://chriskempson.com)", base00: "#151515", base01: "#202020", base02: "#303030", base03: "#505050", base04: "#b0b0b0", base05: "#d0d0d0", base06: "#e0e0e0", base07: "#f5f5f5", base08: "#fb9fb1", base09: "#eda987", base0A: "#ddb26f", base0B: "#acc267", base0C: "#12cfc0", base0D: "#6fc2ef", base0E: "#e1a3ee", base0F: "#deaf8f" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "codeschool", author: "brettof86", base00: "#232c31", base01: "#1c3657", base02: "#2a343a", base03: "#3f4944", base04: "#84898c", base05: "#9ea7a6", base06: "#a7cfa3", base07: "#b5d8f6", base08: "#2a5491", base09: "#43820d", base0A: "#a03b1e", base0B: "#237986", base0C: "#b02f30", base0D: "#484d79", base0E: "#c59820", base0F: "#c98344" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "colors", author: "mrmrs (http://clrs.cc)", base00: "#111111", base01: "#333333", base02: "#555555", base03: "#777777", base04: "#999999", base05: "#bbbbbb", base06: "#dddddd", base07: "#ffffff", base08: "#ff4136", base09: "#ff851b", base0A: "#ffdc00", base0B: "#2ecc40", base0C: "#7fdbff", base0D: "#0074d9", base0E: "#b10dc9", base0F: "#85144b" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "default", author: "chris kempson (http://chriskempson.com)", base00: "#181818", base01: "#282828", base02: "#383838", base03: "#585858", base04: "#b8b8b8", base05: "#d8d8d8", base06: "#e8e8e8", base07: "#f8f8f8", base08: "#ab4642", base09: "#dc9656", base0A: "#f7ca88", base0B: "#a1b56c", base0C: "#86c1b9", base0D: "#7cafc2", base0E: "#ba8baf", base0F: "#a16946" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "eighties", author: "chris kempson (http://chriskempson.com)", base00: "#2d2d2d", base01: "#393939", base02: "#515151", base03: "#747369", base04: "#a09f93", base05: "#d3d0c8", base06: "#e8e6df", base07: "#f2f0ec", base08: "#f2777a", base09: "#f99157", base0A: "#ffcc66", base0B: "#99cc99", base0C: "#66cccc", base0D: "#6699cc", base0E: "#cc99cc", base0F: "#d27b53" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "embers", author: "jannik siebert (https://github.com/janniks)", base00: "#16130F", base01: "#2C2620", base02: "#433B32", base03: "#5A5047", base04: "#8A8075", base05: "#A39A90", base06: "#BEB6AE", base07: "#DBD6D1", base08: "#826D57", base09: "#828257", base0A: "#6D8257", base0B: "#57826D", base0C: "#576D82", base0D: "#6D5782", base0E: "#82576D", base0F: "#825757" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "flat", author: "chris kempson (http://chriskempson.com)", base00: "#2C3E50", base01: "#34495E", base02: "#7F8C8D", base03: "#95A5A6", base04: "#BDC3C7", base05: "#e0e0e0", base06: "#f5f5f5", base07: "#ECF0F1", base08: "#E74C3C", base09: "#E67E22", base0A: "#F1C40F", base0B: "#2ECC71", base0C: "#1ABC9C", base0D: "#3498DB", base0E: "#9B59B6", base0F: "#be643c" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "google", author: "seth wright (http://sethawright.com)", base00: "#1d1f21", base01: "#282a2e", base02: "#373b41", base03: "#969896", base04: "#b4b7b4", base05: "#c5c8c6", base06: "#e0e0e0", base07: "#ffffff", base08: "#CC342B", base09: "#F96A38", base0A: "#FBA922", base0B: "#198844", base0C: "#3971ED", base0D: "#3971ED", base0E: "#A36AC7", base0F: "#3971ED" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "grayscale", author: "alexandre gavioli (https://github.com/alexx2/)", base00: "#101010", base01: "#252525", base02: "#464646", base03: "#525252", base04: "#ababab", base05: "#b9b9b9", base06: "#e3e3e3", base07: "#f7f7f7", base08: "#7c7c7c", base09: "#999999", base0A: "#a0a0a0", base0B: "#8e8e8e", base0C: "#868686", base0D: "#686868", base0E: "#747474", base0F: "#5e5e5e" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "green screen", author: "chris kempson (http://chriskempson.com)", base00: "#001100", base01: "#003300", base02: "#005500", base03: "#007700", base04: "#009900", base05: "#00bb00", base06: "#00dd00", base07: "#00ff00", base08: "#007700", base09: "#009900", base0A: "#007700", base0B: "#00bb00", base0C: "#005500", base0D: "#009900", base0E: "#00bb00", base0F: "#005500" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "harmonic16", author: "jannik siebert (https://github.com/janniks)", base00: "#0b1c2c", base01: "#223b54", base02: "#405c79", base03: "#627e99", base04: "#aabcce", base05: "#cbd6e2", base06: "#e5ebf1", base07: "#f7f9fb", base08: "#bf8b56", base09: "#bfbf56", base0A: "#8bbf56", base0B: "#56bf8b", base0C: "#568bbf", base0D: "#8b56bf", base0E: "#bf568b", base0F: "#bf5656" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "hopscotch", author: "jan t. sott", base00: "#322931", base01: "#433b42", base02: "#5c545b", base03: "#797379", base04: "#989498", base05: "#b9b5b8", base06: "#d5d3d5", base07: "#ffffff", base08: "#dd464c", base09: "#fd8b19", base0A: "#fdcc59", base0B: "#8fc13e", base0C: "#149b93", base0D: "#1290bf", base0E: "#c85e7c", base0F: "#b33508" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "isotope", author: "jan t. sott", base00: "#000000", base01: "#404040", base02: "#606060", base03: "#808080", base04: "#c0c0c0", base05: "#d0d0d0", base06: "#e0e0e0", base07: "#ffffff", base08: "#ff0000", base09: "#ff9900", base0A: "#ff0099", base0B: "#33ff00", base0C: "#00ffff", base0D: "#0066ff", base0E: "#cc00ff", base0F: "#3300ff" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "marrakesh", author: "alexandre gavioli (http://github.com/alexx2/)", base00: "#201602", base01: "#302e00", base02: "#5f5b17", base03: "#6c6823", base04: "#86813b", base05: "#948e48", base06: "#ccc37a", base07: "#faf0a5", base08: "#c35359", base09: "#b36144", base0A: "#a88339", base0B: "#18974e", base0C: "#75a738", base0D: "#477ca1", base0E: "#8868b3", base0F: "#b3588e" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "mocha", author: "chris kempson (http://chriskempson.com)", base00: "#3B3228", base01: "#534636", base02: "#645240", base03: "#7e705a", base04: "#b8afad", base05: "#d0c8c6", base06: "#e9e1dd", base07: "#f5eeeb", base08: "#cb6077", base09: "#d28b71", base0A: "#f4bc87", base0B: "#beb55b", base0C: "#7bbda4", base0D: "#8ab3b5", base0E: "#a89bb9", base0F: "#bb9584" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "monokai", author: "wimer hazenberg (http://www.monokai.nl)", base00: "#272822", base01: "#383830", base02: "#49483e", base03: "#75715e", base04: "#a59f85", base05: "#f8f8f2", base06: "#f5f4f1", base07: "#f9f8f5", base08: "#f92672", base09: "#fd971f", base0A: "#f4bf75", base0B: "#a6e22e", base0C: "#a1efe4", base0D: "#66d9ef", base0E: "#ae81ff", base0F: "#cc6633" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "ocean", author: "chris kempson (http://chriskempson.com)", base00: "#2b303b", base01: "#343d46", base02: "#4f5b66", base03: "#65737e", base04: "#a7adba", base05: "#c0c5ce", base06: "#dfe1e8", base07: "#eff1f5", base08: "#bf616a", base09: "#d08770", base0A: "#ebcb8b", base0B: "#a3be8c", base0C: "#96b5b4", base0D: "#8fa1b3", base0E: "#b48ead", base0F: "#ab7967" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "paraiso", author: "jan t. sott", base00: "#2f1e2e", base01: "#41323f", base02: "#4f424c", base03: "#776e71", base04: "#8d8687", base05: "#a39e9b", base06: "#b9b6b0", base07: "#e7e9db", base08: "#ef6155", base09: "#f99b15", base0A: "#fec418", base0B: "#48b685", base0C: "#5bc4bf", base0D: "#06b6ef", base0E: "#815ba4", base0F: "#e96ba8" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "pop", author: "chris kempson (http://chriskempson.com)", base00: "#000000", base01: "#202020", base02: "#303030", base03: "#505050", base04: "#b0b0b0", base05: "#d0d0d0", base06: "#e0e0e0", base07: "#ffffff", base08: "#eb008a", base09: "#f29333", base0A: "#f8ca12", base0B: "#37b349", base0C: "#00aabb", base0D: "#0e5a94", base0E: "#b31e8d", base0F: "#7a2d00" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "railscasts", author: "ryan bates (http://railscasts.com)", base00: "#2b2b2b", base01: "#272935", base02: "#3a4055", base03: "#5a647e", base04: "#d4cfc9", base05: "#e6e1dc", base06: "#f4f1ed", base07: "#f9f7f3", base08: "#da4939", base09: "#cc7833", base0A: "#ffc66d", base0B: "#a5c261", base0C: "#519f50", base0D: "#6d9cbe", base0E: "#b6b3eb", base0F: "#bc9458" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "shapeshifter", author: "tyler benziger (http://tybenz.com)", base00: "#000000", base01: "#040404", base02: "#102015", base03: "#343434", base04: "#555555", base05: "#ababab", base06: "#e0e0e0", base07: "#f9f9f9", base08: "#e92f2f", base09: "#e09448", base0A: "#dddd13", base0B: "#0ed839", base0C: "#23edda", base0D: "#3b48e3", base0E: "#f996e2", base0F: "#69542d" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "solarized", author: "ethan schoonover (http://ethanschoonover.com/solarized)", base00: "#002b36", base01: "#073642", base02: "#586e75", base03: "#657b83", base04: "#839496", base05: "#93a1a1", base06: "#eee8d5", base07: "#fdf6e3", base08: "#dc322f", base09: "#cb4b16", base0A: "#b58900", base0B: "#859900", base0C: "#2aa198", base0D: "#268bd2", base0E: "#6c71c4", base0F: "#d33682" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "summerfruit", author: "christopher corley (http://cscorley.github.io/)", base00: "#151515", base01: "#202020", base02: "#303030", base03: "#505050", base04: "#B0B0B0", base05: "#D0D0D0", base06: "#E0E0E0", base07: "#FFFFFF", base08: "#FF0086", base09: "#FD8900", base0A: "#ABA800", base0B: "#00C918", base0C: "#1faaaa", base0D: "#3777E6", base0E: "#AD00A1", base0F: "#cc6633" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "tomorrow", author: "chris kempson (http://chriskempson.com)", base00: "#1d1f21", base01: "#282a2e", base02: "#373b41", base03: "#969896", base04: "#b4b7b4", base05: "#c5c8c6", base06: "#e0e0e0", base07: "#ffffff", base08: "#cc6666", base09: "#de935f", base0A: "#f0c674", base0B: "#b5bd68", base0C: "#8abeb7", base0D: "#81a2be", base0E: "#b294bb", base0F: "#a3685a" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "london tube", author: "jan t. sott", base00: "#231f20", base01: "#1c3f95", base02: "#5a5758", base03: "#737171", base04: "#959ca1", base05: "#d9d8d8", base06: "#e7e7e8", base07: "#ffffff", base08: "#ee2e24", base09: "#f386a1", base0A: "#ffd204", base0B: "#00853e", base0C: "#85cebc", base0D: "#009ddc", base0E: "#98005d", base0F: "#b06110" }, e2.exports = t.default;
    }, function(e2, t, n) {
      t.__esModule = true, t.default = { scheme: "twilight", author: "david hart (http://hart-dev.com)", base00: "#1e1e1e", base01: "#323537", base02: "#464b50", base03: "#5f5a60", base04: "#838184", base05: "#a7a7a7", base06: "#c3c3c3", base07: "#ffffff", base08: "#cf6a4c", base09: "#cda869", base0A: "#f9ee98", base0B: "#8f9d6a", base0C: "#afc4db", base0D: "#7587a6", base0E: "#9b859d", base0F: "#9b703f" }, e2.exports = t.default;
    }, function(e2, t, n) {
      var a = n(33);
      function r(e3) {
        var t2 = Math.round(a(e3, 0, 255)).toString(16);
        return 1 == t2.length ? "0" + t2 : t2;
      }
      e2.exports = function(e3) {
        var t2 = 4 === e3.length ? r(255 * e3[3]) : "";
        return "#" + r(e3[0]) + r(e3[1]) + r(e3[2]) + t2;
      };
    }, function(e2, t, n) {
      var a = n(134), r = n(135), o = n(136), i = n(137);
      var s = { "#": r, hsl: function(e3) {
        var t2 = a(e3), n2 = i(t2);
        return 4 === t2.length && n2.push(t2[3]), n2;
      }, rgb: o };
      function c(e3) {
        for (var t2 in s)
          if (0 === e3.indexOf(t2))
            return s[t2](e3);
      }
      c.rgb = o, c.hsl = a, c.hex = r, e2.exports = c;
    }, function(e2, t, n) {
      var a = n(44), r = n(33);
      function o(e3, t2) {
        switch (e3 = parseFloat(e3), t2) {
          case 0:
            return r(e3, 0, 360);
          case 1:
          case 2:
            return r(e3, 0, 100);
          case 3:
            return r(e3, 0, 1);
        }
      }
      e2.exports = function(e3) {
        return a(e3).map(o);
      };
    }, function(e2, t) {
      e2.exports = function(e3) {
        4 !== e3.length && 5 !== e3.length || (e3 = function(e4) {
          for (var t3 = "#", n2 = 1; n2 < e4.length; n2++) {
            var a = e4.charAt(n2);
            t3 += a + a;
          }
          return t3;
        }(e3));
        var t2 = [parseInt(e3.substring(1, 3), 16), parseInt(e3.substring(3, 5), 16), parseInt(e3.substring(5, 7), 16)];
        if (9 === e3.length) {
          var n = parseFloat((parseInt(e3.substring(7, 9), 16) / 255).toFixed(2));
          t2.push(n);
        }
        return t2;
      };
    }, function(e2, t, n) {
      var a = n(44), r = n(33);
      function o(e3, t2) {
        return t2 < 3 ? -1 != e3.indexOf("%") ? Math.round(255 * r(parseInt(e3, 10), 0, 100) / 100) : r(parseInt(e3, 10), 0, 255) : r(parseFloat(e3), 0, 1);
      }
      e2.exports = function(e3) {
        return a(e3).map(o);
      };
    }, function(e2, t) {
      e2.exports = function(e3) {
        var t2, n, a, r, o, i = e3[0] / 360, s = e3[1] / 100, c = e3[2] / 100;
        if (0 == s)
          return [o = 255 * c, o, o];
        t2 = 2 * c - (n = c < 0.5 ? c * (1 + s) : c + s - c * s), r = [0, 0, 0];
        for (var l = 0; l < 3; l++)
          (a = i + 1 / 3 * -(l - 1)) < 0 && a++, a > 1 && a--, o = 6 * a < 1 ? t2 + 6 * (n - t2) * a : 2 * a < 1 ? n : 3 * a < 2 ? t2 + (n - t2) * (2 / 3 - a) * 6 : t2, r[l] = 255 * o;
        return r;
      };
    }, function(e2, t, n) {
      (function(t2) {
        var n2 = "object" == typeof t2 && t2 && t2.Object === Object && t2, a = "object" == typeof self && self && self.Object === Object && self, r = n2 || a || Function("return this")();
        function o(e3, t3, n3) {
          switch (n3.length) {
            case 0:
              return e3.call(t3);
            case 1:
              return e3.call(t3, n3[0]);
            case 2:
              return e3.call(t3, n3[0], n3[1]);
            case 3:
              return e3.call(t3, n3[0], n3[1], n3[2]);
          }
          return e3.apply(t3, n3);
        }
        function i(e3, t3) {
          for (var n3 = -1, a2 = t3.length, r2 = e3.length; ++n3 < a2; )
            e3[r2 + n3] = t3[n3];
          return e3;
        }
        var s = Object.prototype, c = s.hasOwnProperty, l = s.toString, u = r.Symbol, f = s.propertyIsEnumerable, p = u ? u.isConcatSpreadable : void 0, d = Math.max;
        function b(e3) {
          return h(e3) || function(e4) {
            return function(e5) {
              return function(e6) {
                return !!e6 && "object" == typeof e6;
              }(e5) && function(e6) {
                return null != e6 && function(e7) {
                  return "number" == typeof e7 && e7 > -1 && e7 % 1 == 0 && e7 <= 9007199254740991;
                }(e6.length) && !function(e7) {
                  var t3 = function(e8) {
                    var t4 = typeof e8;
                    return !!e8 && ("object" == t4 || "function" == t4);
                  }(e7) ? l.call(e7) : "";
                  return "[object Function]" == t3 || "[object GeneratorFunction]" == t3;
                }(e6);
              }(e5);
            }(e4) && c.call(e4, "callee") && (!f.call(e4, "callee") || "[object Arguments]" == l.call(e4));
          }(e3) || !!(p && e3 && e3[p]);
        }
        var h = Array.isArray;
        var v, m, y, g = (m = function(e3) {
          var t3 = (e3 = function e4(t4, n4, a2, r2, o2) {
            var s2 = -1, c2 = t4.length;
            for (a2 || (a2 = b), o2 || (o2 = []); ++s2 < c2; ) {
              var l2 = t4[s2];
              n4 > 0 && a2(l2) ? n4 > 1 ? e4(l2, n4 - 1, a2, r2, o2) : i(o2, l2) : r2 || (o2[o2.length] = l2);
            }
            return o2;
          }(e3, 1)).length, n3 = t3;
          for (v; n3--; )
            if ("function" != typeof e3[n3])
              throw new TypeError("Expected a function");
          return function() {
            for (var n4 = 0, a2 = t3 ? e3[n4].apply(this, arguments) : arguments[0]; ++n4 < t3; )
              a2 = e3[n4].call(this, a2);
            return a2;
          };
        }, y = d(void 0 === y ? m.length - 1 : y, 0), function() {
          for (var e3 = arguments, t3 = -1, n3 = d(e3.length - y, 0), a2 = Array(n3); ++t3 < n3; )
            a2[t3] = e3[y + t3];
          t3 = -1;
          for (var r2 = Array(y + 1); ++t3 < y; )
            r2[t3] = e3[t3];
          return r2[y] = a2, o(m, this, r2);
        });
        e2.exports = g;
      }).call(this, n(43));
    }, function(e2, t, n) {
      Object.defineProperty(t, "__esModule", { value: true }), t.yuv2rgb = function(e3) {
        var t2, n2, a, r = e3[0], o = e3[1], i = e3[2];
        return t2 = 1 * r + 0 * o + 1.13983 * i, n2 = 1 * r + -0.39465 * o + -0.5806 * i, a = 1 * r + 2.02311 * o + 0 * i, t2 = Math.min(Math.max(0, t2), 1), n2 = Math.min(Math.max(0, n2), 1), a = Math.min(Math.max(0, a), 1), [255 * t2, 255 * n2, 255 * a];
      }, t.rgb2yuv = function(e3) {
        var t2 = e3[0] / 255, n2 = e3[1] / 255, a = e3[2] / 255;
        return [0.299 * t2 + 0.587 * n2 + 0.114 * a, -0.14713 * t2 + -0.28886 * n2 + 0.436 * a, 0.615 * t2 + -0.51499 * n2 + -0.10001 * a];
      };
    }, function(e2, t, n) {
      function a(e3, t2, n2) {
        return t2 in e3 ? Object.defineProperty(e3, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t2] = n2, e3;
      }
      var r = n(141), o = function() {
        function e3() {
          a(this, "_callbacks", void 0), a(this, "_isDispatching", void 0), a(this, "_isHandled", void 0), a(this, "_isPending", void 0), a(this, "_lastID", void 0), a(this, "_pendingPayload", void 0), this._callbacks = {}, this._isDispatching = false, this._isHandled = {}, this._isPending = {}, this._lastID = 1;
        }
        var t2 = e3.prototype;
        return t2.register = function(e4) {
          var t3 = "ID_" + this._lastID++;
          return this._callbacks[t3] = e4, t3;
        }, t2.unregister = function(e4) {
          this._callbacks[e4] || r(false), delete this._callbacks[e4];
        }, t2.waitFor = function(e4) {
          this._isDispatching || r(false);
          for (var t3 = 0; t3 < e4.length; t3++) {
            var n2 = e4[t3];
            this._isPending[n2] ? this._isHandled[n2] || r(false) : (this._callbacks[n2] || r(false), this._invokeCallback(n2));
          }
        }, t2.dispatch = function(e4) {
          this._isDispatching && r(false), this._startDispatching(e4);
          try {
            for (var t3 in this._callbacks)
              this._isPending[t3] || this._invokeCallback(t3);
          } finally {
            this._stopDispatching();
          }
        }, t2.isDispatching = function() {
          return this._isDispatching;
        }, t2._invokeCallback = function(e4) {
          this._isPending[e4] = true, this._callbacks[e4](this._pendingPayload), this._isHandled[e4] = true;
        }, t2._startDispatching = function(e4) {
          for (var t3 in this._callbacks)
            this._isPending[t3] = false, this._isHandled[t3] = false;
          this._pendingPayload = e4, this._isDispatching = true;
        }, t2._stopDispatching = function() {
          delete this._pendingPayload, this._isDispatching = false;
        }, e3;
      }();
      e2.exports = o;
    }, function(e2, t, n) {
      e2.exports = function(e3, t2) {
        for (var n2 = arguments.length, r = new Array(n2 > 2 ? n2 - 2 : 0), o = 2; o < n2; o++)
          r[o - 2] = arguments[o];
        if (!e3) {
          var i;
          if (void 0 === t2)
            i = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
          else {
            var s = 0;
            (i = new Error(t2.replace(/%s/g, function() {
              return String(r[s++]);
            }))).name = "Invariant Violation";
          }
          throw i.framesToPop = 1, i;
        }
      };
    }, function(e2, t, n) {
      function a(e3, t2, n2) {
        return t2 in e3 ? Object.defineProperty(e3, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t2] = n2, e3;
      }
      function r(e3, t2) {
        var n2 = Object.keys(e3);
        if (Object.getOwnPropertySymbols) {
          var a2 = Object.getOwnPropertySymbols(e3);
          t2 && (a2 = a2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e3, t3).enumerable;
          })), n2.push.apply(n2, a2);
        }
        return n2;
      }
      function o(e3) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? r(Object(n2), true).forEach(function(t3) {
            a(e3, t3, n2[t3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n2)) : r(Object(n2)).forEach(function(t3) {
            Object.defineProperty(e3, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
        }
        return e3;
      }
      function i(e3, t2) {
        if (!(e3 instanceof t2))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e3, t2) {
        for (var n2 = 0; n2 < t2.length; n2++) {
          var a2 = t2[n2];
          a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(e3, a2.key, a2);
        }
      }
      function c(e3, t2, n2) {
        return t2 && s(e3.prototype, t2), n2 && s(e3, n2), e3;
      }
      function l(e3, t2) {
        return (l = Object.setPrototypeOf || function(e4, t3) {
          return e4.__proto__ = t3, e4;
        })(e3, t2);
      }
      function u(e3, t2) {
        if ("function" != typeof t2 && null !== t2)
          throw new TypeError("Super expression must either be null or a function");
        e3.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e3, writable: true, configurable: true } }), t2 && l(e3, t2);
      }
      function f(e3) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
          return e4.__proto__ || Object.getPrototypeOf(e4);
        })(e3);
      }
      function p(e3) {
        return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
          return typeof e4;
        } : function(e4) {
          return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
        })(e3);
      }
      function d(e3) {
        if (void 0 === e3)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e3;
      }
      function b(e3, t2) {
        return !t2 || "object" !== p(t2) && "function" != typeof t2 ? d(e3) : t2;
      }
      function h(e3) {
        var t2 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if ("function" == typeof Proxy)
            return true;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), true;
          } catch (e4) {
            return false;
          }
        }();
        return function() {
          var n2, a2 = f(e3);
          if (t2) {
            var r2 = f(this).constructor;
            n2 = Reflect.construct(a2, arguments, r2);
          } else
            n2 = a2.apply(this, arguments);
          return b(this, n2);
        };
      }
      n.r(t);
      var v = n(0), m = n.n(v);
      function y() {
        var e3 = this.constructor.getDerivedStateFromProps(this.props, this.state);
        null != e3 && this.setState(e3);
      }
      function g(e3) {
        this.setState((function(t2) {
          var n2 = this.constructor.getDerivedStateFromProps(e3, t2);
          return null != n2 ? n2 : null;
        }).bind(this));
      }
      function E(e3, t2) {
        try {
          var n2 = this.props, a2 = this.state;
          this.props = e3, this.state = t2, this.__reactInternalSnapshotFlag = true, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n2, a2);
        } finally {
          this.props = n2, this.state = a2;
        }
      }
      function j(e3) {
        var t2 = e3.prototype;
        if (!t2 || !t2.isReactComponent)
          throw new Error("Can only polyfill class components");
        if ("function" != typeof e3.getDerivedStateFromProps && "function" != typeof t2.getSnapshotBeforeUpdate)
          return e3;
        var n2 = null, a2 = null, r2 = null;
        if ("function" == typeof t2.componentWillMount ? n2 = "componentWillMount" : "function" == typeof t2.UNSAFE_componentWillMount && (n2 = "UNSAFE_componentWillMount"), "function" == typeof t2.componentWillReceiveProps ? a2 = "componentWillReceiveProps" : "function" == typeof t2.UNSAFE_componentWillReceiveProps && (a2 = "UNSAFE_componentWillReceiveProps"), "function" == typeof t2.componentWillUpdate ? r2 = "componentWillUpdate" : "function" == typeof t2.UNSAFE_componentWillUpdate && (r2 = "UNSAFE_componentWillUpdate"), null !== n2 || null !== a2 || null !== r2) {
          var o2 = e3.displayName || e3.name, i2 = "function" == typeof e3.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + o2 + " uses " + i2 + " but also contains the following legacy lifecycles:" + (null !== n2 ? "\n  " + n2 : "") + (null !== a2 ? "\n  " + a2 : "") + (null !== r2 ? "\n  " + r2 : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
        }
        if ("function" == typeof e3.getDerivedStateFromProps && (t2.componentWillMount = y, t2.componentWillReceiveProps = g), "function" == typeof t2.getSnapshotBeforeUpdate) {
          if ("function" != typeof t2.componentDidUpdate)
            throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
          t2.componentWillUpdate = E;
          var s2 = t2.componentDidUpdate;
          t2.componentDidUpdate = function(e4, t3, n3) {
            var a3 = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n3;
            s2.call(this, e4, t3, a3);
          };
        }
        return e3;
      }
      function x(e3, t2) {
        if (null == e3)
          return {};
        var n2, a2, r2 = function(e4, t3) {
          if (null == e4)
            return {};
          var n3, a3, r3 = {}, o3 = Object.keys(e4);
          for (a3 = 0; a3 < o3.length; a3++)
            n3 = o3[a3], t3.indexOf(n3) >= 0 || (r3[n3] = e4[n3]);
          return r3;
        }(e3, t2);
        if (Object.getOwnPropertySymbols) {
          var o2 = Object.getOwnPropertySymbols(e3);
          for (a2 = 0; a2 < o2.length; a2++)
            n2 = o2[a2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, n2) && (r2[n2] = e3[n2]);
        }
        return r2;
      }
      function _(e3) {
        var t2 = function(e4) {
          return {}.toString.call(e4).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        }(e3);
        return "number" === t2 && (t2 = isNaN(e3) ? "nan" : (0 | e3) != e3 ? "float" : "integer"), t2;
      }
      y.__suppressDeprecationWarning = true, g.__suppressDeprecationWarning = true, E.__suppressDeprecationWarning = true;
      var k = { scheme: "rjv-default", author: "mac gainor", base00: "rgba(0, 0, 0, 0)", base01: "rgb(245, 245, 245)", base02: "rgb(235, 235, 235)", base03: "#93a1a1", base04: "rgba(0, 0, 0, 0.3)", base05: "#586e75", base06: "#073642", base07: "#002b36", base08: "#d33682", base09: "#cb4b16", base0A: "#dc322f", base0B: "#859900", base0C: "#6c71c4", base0D: "#586e75", base0E: "#2aa198", base0F: "#268bd2" }, O = { scheme: "rjv-grey", author: "mac gainor", base00: "rgba(1, 1, 1, 0)", base01: "rgba(1, 1, 1, 0.1)", base02: "rgba(0, 0, 0, 0.2)", base03: "rgba(1, 1, 1, 0.3)", base04: "rgba(0, 0, 0, 0.4)", base05: "rgba(1, 1, 1, 0.5)", base06: "rgba(1, 1, 1, 0.6)", base07: "rgba(1, 1, 1, 0.7)", base08: "rgba(1, 1, 1, 0.8)", base09: "rgba(1, 1, 1, 0.8)", base0A: "rgba(1, 1, 1, 0.8)", base0B: "rgba(1, 1, 1, 0.8)", base0C: "rgba(1, 1, 1, 0.8)", base0D: "rgba(1, 1, 1, 0.8)", base0E: "rgba(1, 1, 1, 0.8)", base0F: "rgba(1, 1, 1, 0.8)" }, C = { white: "#fff", black: "#000", transparent: "rgba(1, 1, 1, 0)", globalFontFamily: "monospace", globalCursor: "default", indentBlockWidth: "5px", braceFontWeight: "bold", braceCursor: "pointer", ellipsisFontSize: "18px", ellipsisLineHeight: "10px", ellipsisCursor: "pointer", keyMargin: "0px 5px", keyLetterSpacing: "0.5px", keyFontStyle: "none", keyBorderRadius: "3px", keyColonWeight: "bold", keyVerticalAlign: "top", keyOpacity: "0.85", keyOpacityHover: "1", keyValPaddingTop: "3px", keyValPaddingBottom: "3px", keyValPaddingRight: "5px", keyValBorderLeft: "1px solid", keyValBorderHover: "2px solid", keyValPaddingHover: "3px 5px 3px 4px", pushedContentMarginLeft: "6px", variableValuePaddingRight: "6px", nullFontSize: "11px", nullFontWeight: "bold", nullPadding: "1px 2px", nullBorderRadius: "3px", nanFontSize: "11px", nanFontWeight: "bold", nanPadding: "1px 2px", nanBorderRadius: "3px", undefinedFontSize: "11px", undefinedFontWeight: "bold", undefinedPadding: "1px 2px", undefinedBorderRadius: "3px", dataTypeFontSize: "11px", dataTypeMarginRight: "4px", datatypeOpacity: "0.8", objectSizeBorderRadius: "3px", objectSizeFontStyle: "italic", objectSizeMargin: "0px 6px 0px 0px", clipboardCursor: "pointer", clipboardCheckMarginLeft: "-12px", metaDataPadding: "0px 0px 0px 10px", arrayGroupMetaPadding: "0px 0px 0px 4px", iconContainerWidth: "17px", tooltipPadding: "4px", editInputMinWidth: "130px", editInputBorderRadius: "2px", editInputPadding: "5px", editInputMarginRight: "4px", editInputFontFamily: "monospace", iconCursor: "pointer", iconFontSize: "15px", iconPaddingRight: "1px", dateValueMarginLeft: "2px", iconMarginRight: "3px", detectedRowPaddingTop: "3px", addKeyCoverBackground: "rgba(255, 255, 255, 0.3)", addKeyCoverPosition: "absolute", addKeyCoverPositionPx: "0px", addKeyModalWidth: "200px", addKeyModalMargin: "auto", addKeyModalPadding: "10px", addKeyModalRadius: "3px" }, S = n(45), w = function(e3) {
        var t2 = function(e4) {
          return { backgroundColor: e4.base00, ellipsisColor: e4.base09, braceColor: e4.base07, expandedIcon: e4.base0D, collapsedIcon: e4.base0E, keyColor: e4.base07, arrayKeyColor: e4.base0C, objectSize: e4.base04, copyToClipboard: e4.base0F, copyToClipboardCheck: e4.base0D, objectBorder: e4.base02, dataTypes: { boolean: e4.base0E, date: e4.base0D, float: e4.base0B, function: e4.base0D, integer: e4.base0F, string: e4.base09, nan: e4.base08, null: e4.base0A, undefined: e4.base05, regexp: e4.base0A, background: e4.base02 }, editVariable: { editIcon: e4.base0E, cancelIcon: e4.base09, removeIcon: e4.base09, addIcon: e4.base0E, checkIcon: e4.base0E, background: e4.base01, color: e4.base0A, border: e4.base07 }, addKeyModal: { background: e4.base05, border: e4.base04, color: e4.base0A, labelColor: e4.base01 }, validationFailure: { background: e4.base09, iconColor: e4.base01, fontColor: e4.base01 } };
        }(e3);
        return { "app-container": { fontFamily: C.globalFontFamily, cursor: C.globalCursor, backgroundColor: t2.backgroundColor, position: "relative" }, ellipsis: { display: "inline-block", color: t2.ellipsisColor, fontSize: C.ellipsisFontSize, lineHeight: C.ellipsisLineHeight, cursor: C.ellipsisCursor }, "brace-row": { display: "inline-block", cursor: "pointer" }, brace: { display: "inline-block", cursor: C.braceCursor, fontWeight: C.braceFontWeight, color: t2.braceColor }, "expanded-icon": { color: t2.expandedIcon }, "collapsed-icon": { color: t2.collapsedIcon }, colon: { display: "inline-block", margin: C.keyMargin, color: t2.keyColor, verticalAlign: "top" }, objectKeyVal: function(e4, n2) {
          return { style: o({ paddingTop: C.keyValPaddingTop, paddingRight: C.keyValPaddingRight, paddingBottom: C.keyValPaddingBottom, borderLeft: C.keyValBorderLeft + " " + t2.objectBorder, ":hover": { paddingLeft: n2.paddingLeft - 1 + "px", borderLeft: C.keyValBorderHover + " " + t2.objectBorder } }, n2) };
        }, "object-key-val-no-border": { padding: C.keyValPadding }, "pushed-content": { marginLeft: C.pushedContentMarginLeft }, variableValue: function(e4, t3) {
          return { style: o({ display: "inline-block", paddingRight: C.variableValuePaddingRight, position: "relative" }, t3) };
        }, "object-name": { display: "inline-block", color: t2.keyColor, letterSpacing: C.keyLetterSpacing, fontStyle: C.keyFontStyle, verticalAlign: C.keyVerticalAlign, opacity: C.keyOpacity, ":hover": { opacity: C.keyOpacityHover } }, "array-key": { display: "inline-block", color: t2.arrayKeyColor, letterSpacing: C.keyLetterSpacing, fontStyle: C.keyFontStyle, verticalAlign: C.keyVerticalAlign, opacity: C.keyOpacity, ":hover": { opacity: C.keyOpacityHover } }, "object-size": { color: t2.objectSize, borderRadius: C.objectSizeBorderRadius, fontStyle: C.objectSizeFontStyle, margin: C.objectSizeMargin, cursor: "default" }, "data-type-label": { fontSize: C.dataTypeFontSize, marginRight: C.dataTypeMarginRight, opacity: C.datatypeOpacity }, boolean: { display: "inline-block", color: t2.dataTypes.boolean }, date: { display: "inline-block", color: t2.dataTypes.date }, "date-value": { marginLeft: C.dateValueMarginLeft }, float: { display: "inline-block", color: t2.dataTypes.float }, function: { display: "inline-block", color: t2.dataTypes.function, cursor: "pointer", whiteSpace: "pre-line" }, "function-value": { fontStyle: "italic" }, integer: { display: "inline-block", color: t2.dataTypes.integer }, string: { display: "inline-block", color: t2.dataTypes.string }, nan: { display: "inline-block", color: t2.dataTypes.nan, fontSize: C.nanFontSize, fontWeight: C.nanFontWeight, backgroundColor: t2.dataTypes.background, padding: C.nanPadding, borderRadius: C.nanBorderRadius }, null: { display: "inline-block", color: t2.dataTypes.null, fontSize: C.nullFontSize, fontWeight: C.nullFontWeight, backgroundColor: t2.dataTypes.background, padding: C.nullPadding, borderRadius: C.nullBorderRadius }, undefined: { display: "inline-block", color: t2.dataTypes.undefined, fontSize: C.undefinedFontSize, padding: C.undefinedPadding, borderRadius: C.undefinedBorderRadius, backgroundColor: t2.dataTypes.background }, regexp: { display: "inline-block", color: t2.dataTypes.regexp }, "copy-to-clipboard": { cursor: C.clipboardCursor }, "copy-icon": { color: t2.copyToClipboard, fontSize: C.iconFontSize, marginRight: C.iconMarginRight, verticalAlign: "top" }, "copy-icon-copied": { color: t2.copyToClipboardCheck, marginLeft: C.clipboardCheckMarginLeft }, "array-group-meta-data": { display: "inline-block", padding: C.arrayGroupMetaPadding }, "object-meta-data": { display: "inline-block", padding: C.metaDataPadding }, "icon-container": { display: "inline-block", width: C.iconContainerWidth }, tooltip: { padding: C.tooltipPadding }, removeVarIcon: { verticalAlign: "top", display: "inline-block", color: t2.editVariable.removeIcon, cursor: C.iconCursor, fontSize: C.iconFontSize, marginRight: C.iconMarginRight }, addVarIcon: { verticalAlign: "top", display: "inline-block", color: t2.editVariable.addIcon, cursor: C.iconCursor, fontSize: C.iconFontSize, marginRight: C.iconMarginRight }, editVarIcon: { verticalAlign: "top", display: "inline-block", color: t2.editVariable.editIcon, cursor: C.iconCursor, fontSize: C.iconFontSize, marginRight: C.iconMarginRight }, "edit-icon-container": { display: "inline-block", verticalAlign: "top" }, "check-icon": { display: "inline-block", cursor: C.iconCursor, color: t2.editVariable.checkIcon, fontSize: C.iconFontSize, paddingRight: C.iconPaddingRight }, "cancel-icon": { display: "inline-block", cursor: C.iconCursor, color: t2.editVariable.cancelIcon, fontSize: C.iconFontSize, paddingRight: C.iconPaddingRight }, "edit-input": { display: "inline-block", minWidth: C.editInputMinWidth, borderRadius: C.editInputBorderRadius, backgroundColor: t2.editVariable.background, color: t2.editVariable.color, padding: C.editInputPadding, marginRight: C.editInputMarginRight, fontFamily: C.editInputFontFamily }, "detected-row": { paddingTop: C.detectedRowPaddingTop }, "key-modal-request": { position: C.addKeyCoverPosition, top: C.addKeyCoverPositionPx, left: C.addKeyCoverPositionPx, right: C.addKeyCoverPositionPx, bottom: C.addKeyCoverPositionPx, backgroundColor: C.addKeyCoverBackground }, "key-modal": { width: C.addKeyModalWidth, backgroundColor: t2.addKeyModal.background, marginLeft: C.addKeyModalMargin, marginRight: C.addKeyModalMargin, padding: C.addKeyModalPadding, borderRadius: C.addKeyModalRadius, marginTop: "15px", position: "relative" }, "key-modal-label": { color: t2.addKeyModal.labelColor, marginLeft: "2px", marginBottom: "5px", fontSize: "11px" }, "key-modal-input-container": { overflow: "hidden" }, "key-modal-input": { width: "100%", padding: "3px 6px", fontFamily: "monospace", color: t2.addKeyModal.color, border: "none", boxSizing: "border-box", borderRadius: "2px" }, "key-modal-cancel": { backgroundColor: t2.editVariable.removeIcon, position: "absolute", top: "0px", right: "0px", borderRadius: "0px 3px 0px 3px", cursor: "pointer" }, "key-modal-cancel-icon": { color: t2.addKeyModal.labelColor, fontSize: C.iconFontSize, transform: "rotate(45deg)" }, "key-modal-submit": { color: t2.editVariable.addIcon, fontSize: C.iconFontSize, position: "absolute", right: "2px", top: "3px", cursor: "pointer" }, "function-ellipsis": { display: "inline-block", color: t2.ellipsisColor, fontSize: C.ellipsisFontSize, lineHeight: C.ellipsisLineHeight, cursor: C.ellipsisCursor }, "validation-failure": { float: "right", padding: "3px 6px", borderRadius: "2px", cursor: "pointer", color: t2.validationFailure.fontColor, backgroundColor: t2.validationFailure.background }, "validation-failure-label": { marginRight: "6px" }, "validation-failure-clear": { position: "relative", verticalAlign: "top", cursor: "pointer", color: t2.validationFailure.iconColor, fontSize: C.iconFontSize, transform: "rotate(45deg)" } };
      };
      function A(e3, t2, n2) {
        return e3 || console.error("theme has not been set"), function(e4) {
          var t3 = k;
          return false !== e4 && "none" !== e4 || (t3 = O), Object(S.createStyling)(w, { defaultBase16: t3 })(e4);
        }(e3)(t2, n2);
      }
      var M = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = (e4.rjvId, e4.type_name), n3 = e4.displayDataTypes, a2 = e4.theme;
          return n3 ? m.a.createElement("span", Object.assign({ className: "data-type-label" }, A(a2, "data-type-label")), t3) : null;
        } }]), n2;
      }(m.a.PureComponent), P = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props;
          return m.a.createElement("div", A(e4.theme, "boolean"), m.a.createElement(M, Object.assign({ type_name: "bool" }, e4)), e4.value ? "true" : "false");
        } }]), n2;
      }(m.a.PureComponent), F = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props;
          return m.a.createElement("div", A(e4.theme, "date"), m.a.createElement(M, Object.assign({ type_name: "date" }, e4)), m.a.createElement("span", Object.assign({ className: "date-value" }, A(e4.theme, "date-value")), e4.value.toLocaleTimeString("en-us", { weekday: "short", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })));
        } }]), n2;
      }(m.a.PureComponent), D = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props;
          return m.a.createElement("div", A(e4.theme, "float"), m.a.createElement(M, Object.assign({ type_name: "float" }, e4)), this.props.value);
        } }]), n2;
      }(m.a.PureComponent);
      function I(e3, t2) {
        (null == t2 || t2 > e3.length) && (t2 = e3.length);
        for (var n2 = 0, a2 = new Array(t2); n2 < t2; n2++)
          a2[n2] = e3[n2];
        return a2;
      }
      function R(e3, t2) {
        if (e3) {
          if ("string" == typeof e3)
            return I(e3, t2);
          var n2 = Object.prototype.toString.call(e3).slice(8, -1);
          return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? I(e3, t2) : void 0;
        }
      }
      function L(e3, t2) {
        var n2;
        if ("undefined" == typeof Symbol || null == e3[Symbol.iterator]) {
          if (Array.isArray(e3) || (n2 = R(e3)) || t2 && e3 && "number" == typeof e3.length) {
            n2 && (e3 = n2);
            var a2 = 0, r2 = function() {
            };
            return { s: r2, n: function() {
              return a2 >= e3.length ? { done: true } : { done: false, value: e3[a2++] };
            }, e: function(e4) {
              throw e4;
            }, f: r2 };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o2, i2 = true, s2 = false;
        return { s: function() {
          n2 = e3[Symbol.iterator]();
        }, n: function() {
          var e4 = n2.next();
          return i2 = e4.done, e4;
        }, e: function(e4) {
          s2 = true, o2 = e4;
        }, f: function() {
          try {
            i2 || null == n2.return || n2.return();
          } finally {
            if (s2)
              throw o2;
          }
        } };
      }
      function B(e3) {
        return function(e4) {
          if (Array.isArray(e4))
            return I(e4);
        }(e3) || function(e4) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e4))
            return Array.from(e4);
        }(e3) || R(e3) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      var N = n(46), z = new (n(47)).Dispatcher(), T = new (function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          var e4;
          i(this, n2);
          for (var a2 = arguments.length, r2 = new Array(a2), s2 = 0; s2 < a2; s2++)
            r2[s2] = arguments[s2];
          return (e4 = t2.call.apply(t2, [this].concat(r2))).objects = {}, e4.set = function(t3, n3, a3, r3) {
            void 0 === e4.objects[t3] && (e4.objects[t3] = {}), void 0 === e4.objects[t3][n3] && (e4.objects[t3][n3] = {}), e4.objects[t3][n3][a3] = r3;
          }, e4.get = function(t3, n3, a3, r3) {
            return void 0 === e4.objects[t3] || void 0 === e4.objects[t3][n3] || null == e4.objects[t3][n3][a3] ? r3 : e4.objects[t3][n3][a3];
          }, e4.handleAction = function(t3) {
            var n3 = t3.rjvId, a3 = t3.data;
            switch (t3.name) {
              case "RESET":
                e4.emit("reset-" + n3);
                break;
              case "VARIABLE_UPDATED":
                t3.data.updated_src = e4.updateSrc(n3, a3), e4.set(n3, "action", "variable-update", o(o({}, a3), {}, { type: "variable-edited" })), e4.emit("variable-update-" + n3);
                break;
              case "VARIABLE_REMOVED":
                t3.data.updated_src = e4.updateSrc(n3, a3), e4.set(n3, "action", "variable-update", o(o({}, a3), {}, { type: "variable-removed" })), e4.emit("variable-update-" + n3);
                break;
              case "VARIABLE_ADDED":
                t3.data.updated_src = e4.updateSrc(n3, a3), e4.set(n3, "action", "variable-update", o(o({}, a3), {}, { type: "variable-added" })), e4.emit("variable-update-" + n3);
                break;
              case "ADD_VARIABLE_KEY_REQUEST":
                e4.set(n3, "action", "new-key-request", a3), e4.emit("add-key-request-" + n3);
            }
          }, e4.updateSrc = function(t3, n3) {
            var a3 = n3.name, r3 = n3.namespace, o2 = n3.new_value, i2 = (n3.existing_value, n3.variable_removed);
            r3.shift();
            var s3, c2 = e4.get(t3, "global", "src"), l2 = e4.deepCopy(c2, B(r3)), u2 = l2, f2 = L(r3);
            try {
              for (f2.s(); !(s3 = f2.n()).done; ) {
                u2 = u2[s3.value];
              }
            } catch (e5) {
              f2.e(e5);
            } finally {
              f2.f();
            }
            return i2 ? "array" == _(u2) ? u2.splice(a3, 1) : delete u2[a3] : null !== a3 ? u2[a3] = o2 : l2 = o2, e4.set(t3, "global", "src", l2), l2;
          }, e4.deepCopy = function(t3, n3) {
            var a3, r3 = _(t3), i2 = n3.shift();
            return "array" == r3 ? a3 = B(t3) : "object" == r3 && (a3 = o({}, t3)), void 0 !== i2 && (a3[i2] = e4.deepCopy(t3[i2], n3)), a3;
          }, e4;
        }
        return n2;
      }(N.EventEmitter))();
      z.register(T.handleAction.bind(T));
      var q = T, V = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2(e4) {
          var a2;
          return i(this, n2), (a2 = t2.call(this, e4)).toggleCollapsed = function() {
            a2.setState({ collapsed: !a2.state.collapsed }, function() {
              q.set(a2.props.rjvId, a2.props.namespace, "collapsed", a2.state.collapsed);
            });
          }, a2.getFunctionDisplay = function(e5) {
            var t3 = d(a2).props;
            return e5 ? m.a.createElement("span", null, a2.props.value.toString().slice(9, -1).replace(/\{[\s\S]+/, ""), m.a.createElement("span", { className: "function-collapsed", style: { fontWeight: "bold" } }, m.a.createElement("span", null, "{"), m.a.createElement("span", A(t3.theme, "ellipsis"), "..."), m.a.createElement("span", null, "}"))) : a2.props.value.toString().slice(9, -1);
          }, a2.state = { collapsed: q.get(e4.rjvId, e4.namespace, "collapsed", true) }, a2;
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = this.state.collapsed;
          return m.a.createElement("div", A(e4.theme, "function"), m.a.createElement(M, Object.assign({ type_name: "function" }, e4)), m.a.createElement("span", Object.assign({}, A(e4.theme, "function-value"), { className: "rjv-function-container", onClick: this.toggleCollapsed }), this.getFunctionDisplay(t3)));
        } }]), n2;
      }(m.a.PureComponent), K = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          return m.a.createElement("div", A(this.props.theme, "nan"), "NaN");
        } }]), n2;
      }(m.a.PureComponent), W = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          return m.a.createElement("div", A(this.props.theme, "null"), "NULL");
        } }]), n2;
      }(m.a.PureComponent), H = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props;
          return m.a.createElement("div", A(e4.theme, "integer"), m.a.createElement(M, Object.assign({ type_name: "int" }, e4)), this.props.value);
        } }]), n2;
      }(m.a.PureComponent), U = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props;
          return m.a.createElement("div", A(e4.theme, "regexp"), m.a.createElement(M, Object.assign({ type_name: "regexp" }, e4)), this.props.value.toString());
        } }]), n2;
      }(m.a.PureComponent), G = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2(e4) {
          var a2;
          return i(this, n2), (a2 = t2.call(this, e4)).toggleCollapsed = function() {
            a2.setState({ collapsed: !a2.state.collapsed }, function() {
              q.set(a2.props.rjvId, a2.props.namespace, "collapsed", a2.state.collapsed);
            });
          }, a2.state = { collapsed: q.get(e4.rjvId, e4.namespace, "collapsed", true) }, a2;
        }
        return c(n2, [{ key: "render", value: function() {
          this.state.collapsed;
          var e4 = this.props, t3 = e4.collapseStringsAfterLength, n3 = e4.theme, a2 = e4.value, r2 = { style: { cursor: "default" } };
          return "integer" === _(t3) && a2.length > t3 && (r2.style.cursor = "pointer", this.state.collapsed && (a2 = m.a.createElement("span", null, a2.substring(0, t3), m.a.createElement("span", A(n3, "ellipsis"), " ...")))), m.a.createElement("div", A(n3, "string"), m.a.createElement(M, Object.assign({ type_name: "string" }, e4)), m.a.createElement("span", Object.assign({ className: "string-value" }, r2, { onClick: this.toggleCollapsed }), '"', a2, '"'));
        } }]), n2;
      }(m.a.PureComponent), J = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          return m.a.createElement("div", A(this.props.theme, "undefined"), "undefined");
        } }]), n2;
      }(m.a.PureComponent);
      function Y() {
        return (Y = Object.assign || function(e3) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var a2 in n2)
              Object.prototype.hasOwnProperty.call(n2, a2) && (e3[a2] = n2[a2]);
          }
          return e3;
        }).apply(this, arguments);
      }
      var $ = v.useLayoutEffect, Q = function(e3) {
        var t2 = Object(v.useRef)(e3);
        return $(function() {
          t2.current = e3;
        }), t2;
      }, Z = function(e3, t2) {
        "function" != typeof e3 ? e3.current = t2 : e3(t2);
      }, X = function(e3, t2) {
        var n2 = Object(v.useRef)();
        return Object(v.useCallback)(function(a2) {
          e3.current = a2, n2.current && Z(n2.current, null), n2.current = t2, t2 && Z(t2, a2);
        }, [t2]);
      }, ee = { "min-height": "0", "max-height": "none", height: "0", visibility: "hidden", overflow: "hidden", position: "absolute", "z-index": "-1000", top: "0", right: "0" }, te = function(e3) {
        Object.keys(ee).forEach(function(t2) {
          e3.style.setProperty(t2, ee[t2], "important");
        });
      }, ne = null;
      var ae = function() {
      }, re = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width"], oe = !!document.documentElement.currentStyle, ie = function(e3, t2) {
        var n2 = e3.cacheMeasurements, a2 = e3.maxRows, r2 = e3.minRows, o2 = e3.onChange, i2 = void 0 === o2 ? ae : o2, s2 = e3.onHeightChange, c2 = void 0 === s2 ? ae : s2, l2 = function(e4, t3) {
          if (null == e4)
            return {};
          var n3, a3, r3 = {}, o3 = Object.keys(e4);
          for (a3 = 0; a3 < o3.length; a3++)
            n3 = o3[a3], t3.indexOf(n3) >= 0 || (r3[n3] = e4[n3]);
          return r3;
        }(e3, ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"]);
        var u2, f2 = void 0 !== l2.value, p2 = Object(v.useRef)(null), d2 = X(p2, t2), b2 = Object(v.useRef)(0), h2 = Object(v.useRef)(), m2 = function() {
          var e4 = p2.current, t3 = n2 && h2.current ? h2.current : function(e5) {
            var t4 = window.getComputedStyle(e5);
            if (null === t4)
              return null;
            var n3, a3 = (n3 = t4, re.reduce(function(e6, t5) {
              return e6[t5] = n3[t5], e6;
            }, {})), r3 = a3.boxSizing;
            return "" === r3 ? null : (oe && "border-box" === r3 && (a3.width = parseFloat(a3.width) + parseFloat(a3.borderRightWidth) + parseFloat(a3.borderLeftWidth) + parseFloat(a3.paddingRight) + parseFloat(a3.paddingLeft) + "px"), { sizingStyle: a3, paddingSize: parseFloat(a3.paddingBottom) + parseFloat(a3.paddingTop), borderSize: parseFloat(a3.borderBottomWidth) + parseFloat(a3.borderTopWidth) });
          }(e4);
          if (t3) {
            h2.current = t3;
            var o3 = function(e5, t4, n3, a3) {
              void 0 === n3 && (n3 = 1), void 0 === a3 && (a3 = 1 / 0), ne || ((ne = document.createElement("textarea")).setAttribute("tab-index", "-1"), ne.setAttribute("aria-hidden", "true"), te(ne)), null === ne.parentNode && document.body.appendChild(ne);
              var r3 = e5.paddingSize, o4 = e5.borderSize, i4 = e5.sizingStyle, s4 = i4.boxSizing;
              Object.keys(i4).forEach(function(e6) {
                var t5 = e6;
                ne.style[t5] = i4[t5];
              }), te(ne), ne.value = t4;
              var c3 = function(e6, t5) {
                var n4 = e6.scrollHeight;
                return "border-box" === t5.sizingStyle.boxSizing ? n4 + t5.borderSize : n4 - t5.paddingSize;
              }(ne, e5);
              ne.value = "x";
              var l3 = ne.scrollHeight - r3, u3 = l3 * n3;
              "border-box" === s4 && (u3 = u3 + r3 + o4), c3 = Math.max(u3, c3);
              var f3 = l3 * a3;
              return "border-box" === s4 && (f3 = f3 + r3 + o4), [c3 = Math.min(f3, c3), l3];
            }(t3, e4.value || e4.placeholder || "x", r2, a2), i3 = o3[0], s3 = o3[1];
            b2.current !== i3 && (b2.current = i3, e4.style.setProperty("height", i3 + "px", "important"), c2(i3, { rowHeight: s3 }));
          }
        };
        return Object(v.useLayoutEffect)(m2), u2 = Q(m2), Object(v.useLayoutEffect)(function() {
          var e4 = function(e5) {
            u2.current(e5);
          };
          return window.addEventListener("resize", e4), function() {
            window.removeEventListener("resize", e4);
          };
        }, []), Object(v.createElement)("textarea", Y({}, l2, { onChange: function(e4) {
          f2 || m2(), i2(e4);
        }, ref: d2 }));
      }, se = Object(v.forwardRef)(ie);
      function ce(e3) {
        e3 = e3.trim();
        try {
          if ("[" === (e3 = JSON.stringify(JSON.parse(e3)))[0])
            return le("array", JSON.parse(e3));
          if ("{" === e3[0])
            return le("object", JSON.parse(e3));
          if (e3.match(/\-?\d+\.\d+/) && e3.match(/\-?\d+\.\d+/)[0] === e3)
            return le("float", parseFloat(e3));
          if (e3.match(/\-?\d+e-\d+/) && e3.match(/\-?\d+e-\d+/)[0] === e3)
            return le("float", Number(e3));
          if (e3.match(/\-?\d+/) && e3.match(/\-?\d+/)[0] === e3)
            return le("integer", parseInt(e3));
          if (e3.match(/\-?\d+e\+\d+/) && e3.match(/\-?\d+e\+\d+/)[0] === e3)
            return le("integer", Number(e3));
        } catch (e4) {
        }
        switch (e3 = e3.toLowerCase()) {
          case "undefined":
            return le("undefined", void 0);
          case "nan":
            return le("nan", NaN);
          case "null":
            return le("null", null);
          case "true":
            return le("boolean", true);
          case "false":
            return le("boolean", false);
          default:
            if (e3 = Date.parse(e3))
              return le("date", new Date(e3));
        }
        return le(false, null);
      }
      function le(e3, t2) {
        return { type: e3, value: t2 };
      }
      var ue = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.style, n3 = x(e4, ["style"]);
          return m.a.createElement("span", n3, m.a.createElement("svg", Object.assign({}, xe(t3), { viewBox: "0 0 24 24", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m.a.createElement("path", { d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7" })));
        } }]), n2;
      }(m.a.PureComponent), fe = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.style, n3 = x(e4, ["style"]);
          return m.a.createElement("span", n3, m.a.createElement("svg", Object.assign({}, xe(t3), { viewBox: "0 0 24 24", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m.a.createElement("path", { d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" })));
        } }]), n2;
      }(m.a.PureComponent), pe = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.style, n3 = x(e4, ["style"]), a2 = xe(t3).style;
          return m.a.createElement("span", n3, m.a.createElement("svg", { fill: a2.color, width: a2.height, height: a2.width, style: a2, viewBox: "0 0 1792 1792" }, m.a.createElement("path", { d: "M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z" })));
        } }]), n2;
      }(m.a.PureComponent), de = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.style, n3 = x(e4, ["style"]), a2 = xe(t3).style;
          return m.a.createElement("span", n3, m.a.createElement("svg", { fill: a2.color, width: a2.height, height: a2.width, style: a2, viewBox: "0 0 1792 1792" }, m.a.createElement("path", { d: "M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z" })));
        } }]), n2;
      }(m.a.PureComponent), be = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.style, n3 = x(e4, ["style"]);
          return m.a.createElement("span", n3, m.a.createElement("svg", { style: o(o({}, xe(t3).style), {}, { paddingLeft: "2px", verticalAlign: "top" }), viewBox: "0 0 15 15", fill: "currentColor" }, m.a.createElement("path", { d: "M0 14l6-6-6-6z" })));
        } }]), n2;
      }(m.a.PureComponent), he = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.style, n3 = x(e4, ["style"]);
          return m.a.createElement("span", n3, m.a.createElement("svg", { style: o(o({}, xe(t3).style), {}, { paddingLeft: "2px", verticalAlign: "top" }), viewBox: "0 0 15 15", fill: "currentColor" }, m.a.createElement("path", { d: "M0 5l6 6 6-6z" })));
        } }]), n2;
      }(m.a.PureComponent), ve = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.style, n3 = x(e4, ["style"]);
          return m.a.createElement("span", n3, m.a.createElement("svg", Object.assign({}, xe(t3), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m.a.createElement("g", null, m.a.createElement("path", { d: "m30 35h-25v-22.5h25v7.5h2.5v-12.5c0-1.4-1.1-2.5-2.5-2.5h-7.5c0-2.8-2.2-5-5-5s-5 2.2-5 5h-7.5c-1.4 0-2.5 1.1-2.5 2.5v27.5c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-5h-2.5v5z m-20-27.5h2.5s2.5-1.1 2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5 1.3 2.5 2.5 2.5h2.5s2.5 1.1 2.5 2.5h-20c0-1.5 1.1-2.5 2.5-2.5z m-2.5 20h5v-2.5h-5v2.5z m17.5-5v-5l-10 7.5 10 7.5v-5h12.5v-5h-12.5z m-17.5 10h7.5v-2.5h-7.5v2.5z m12.5-17.5h-12.5v2.5h12.5v-2.5z m-7.5 5h-5v2.5h5v-2.5z" }))));
        } }]), n2;
      }(m.a.PureComponent), me = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.style, n3 = x(e4, ["style"]);
          return m.a.createElement("span", n3, m.a.createElement("svg", Object.assign({}, xe(t3), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m.a.createElement("g", null, m.a.createElement("path", { d: "m28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))));
        } }]), n2;
      }(m.a.PureComponent), ye = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.style, n3 = x(e4, ["style"]);
          return m.a.createElement("span", n3, m.a.createElement("svg", Object.assign({}, xe(t3), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m.a.createElement("g", null, m.a.createElement("path", { d: "m30.1 21.4v-2.8q0-0.6-0.4-1t-1-0.5h-5.7v-5.7q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v5.7h-5.7q-0.6 0-1 0.5t-0.5 1v2.8q0 0.6 0.5 1t1 0.5h5.7v5.7q0 0.5 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-5.7h5.7q0.6 0 1-0.5t0.4-1z m7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))));
        } }]), n2;
      }(m.a.PureComponent), ge = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.style, n3 = x(e4, ["style"]);
          return m.a.createElement("span", n3, m.a.createElement("svg", Object.assign({}, xe(t3), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m.a.createElement("g", null, m.a.createElement("path", { d: "m31.6 21.6h-10v10h-3.2v-10h-10v-3.2h10v-10h3.2v10h10v3.2z" }))));
        } }]), n2;
      }(m.a.PureComponent), Ee = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.style, n3 = x(e4, ["style"]);
          return m.a.createElement("span", n3, m.a.createElement("svg", Object.assign({}, xe(t3), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m.a.createElement("g", null, m.a.createElement("path", { d: "m19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2z m9.8-16q-0.3-0.4-0.7 0l-7.8 7.8q-0.4 0.4 0 0.7t0.7 0l7.8-7.8q0.4-0.4 0-0.7z m1.8 13.2v4.3q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.3 0.3-0.7 0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-2.9q0-0.2 0.2-0.4l1.4-1.5q0.3-0.3 0.8-0.1t0.4 0.6z m-2.1-16.5l6.4 6.5-15 15h-6.4v-6.5z m9.9 3l-2.1 2-6.4-6.4 2.1-2q0.6-0.7 1.5-0.7t1.5 0.7l3.4 3.4q0.6 0.6 0.6 1.5t-0.6 1.5z" }))));
        } }]), n2;
      }(m.a.PureComponent), je = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.style, n3 = x(e4, ["style"]);
          return m.a.createElement("span", n3, m.a.createElement("svg", Object.assign({}, xe(t3), { viewBox: "0 0 40 40", fill: "currentColor", preserveAspectRatio: "xMidYMid meet" }), m.a.createElement("g", null, m.a.createElement("path", { d: "m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" }))));
        } }]), n2;
      }(m.a.PureComponent);
      function xe(e3) {
        return e3 || (e3 = {}), { style: o(o({ verticalAlign: "middle" }, e3), {}, { color: e3.color ? e3.color : "#000000", height: "1em", width: "1em" }) };
      }
      var _e = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2(e4) {
          var a2;
          return i(this, n2), (a2 = t2.call(this, e4)).copiedTimer = null, a2.handleCopy = function() {
            var e5 = document.createElement("textarea"), t3 = a2.props, n3 = t3.clickCallback, r2 = t3.src, o2 = t3.namespace;
            e5.innerHTML = JSON.stringify(a2.clipboardValue(r2), null, "  "), document.body.appendChild(e5), e5.select(), document.execCommand("copy"), document.body.removeChild(e5), a2.copiedTimer = setTimeout(function() {
              a2.setState({ copied: false });
            }, 5500), a2.setState({ copied: true }, function() {
              "function" == typeof n3 && n3({ src: r2, namespace: o2, name: o2[o2.length - 1] });
            });
          }, a2.getClippyIcon = function() {
            var e5 = a2.props.theme;
            return a2.state.copied ? m.a.createElement("span", null, m.a.createElement(ve, Object.assign({ className: "copy-icon" }, A(e5, "copy-icon"))), m.a.createElement("span", A(e5, "copy-icon-copied"), "✔")) : m.a.createElement(ve, Object.assign({ className: "copy-icon" }, A(e5, "copy-icon")));
          }, a2.clipboardValue = function(e5) {
            switch (_(e5)) {
              case "function":
              case "regexp":
                return e5.toString();
              default:
                return e5;
            }
          }, a2.state = { copied: false }, a2;
        }
        return c(n2, [{ key: "componentWillUnmount", value: function() {
          this.copiedTimer && (clearTimeout(this.copiedTimer), this.copiedTimer = null);
        } }, { key: "render", value: function() {
          var e4 = this.props, t3 = (e4.src, e4.theme), n3 = e4.hidden, a2 = e4.rowHovered, r2 = A(t3, "copy-to-clipboard").style, i2 = "inline";
          return n3 && (i2 = "none"), m.a.createElement("span", { className: "copy-to-clipboard-container", title: "Copy to clipboard", style: { verticalAlign: "top", display: a2 ? "inline-block" : "none" } }, m.a.createElement("span", { style: o(o({}, r2), {}, { display: i2 }), onClick: this.handleCopy }, this.getClippyIcon()));
        } }]), n2;
      }(m.a.PureComponent), ke = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2(e4) {
          var a2;
          return i(this, n2), (a2 = t2.call(this, e4)).getEditIcon = function() {
            var e5 = a2.props, t3 = e5.variable, n3 = e5.theme;
            return m.a.createElement("div", { className: "click-to-edit", style: { verticalAlign: "top", display: a2.state.hovered ? "inline-block" : "none" } }, m.a.createElement(Ee, Object.assign({ className: "click-to-edit-icon" }, A(n3, "editVarIcon"), { onClick: function() {
              a2.prepopInput(t3);
            } })));
          }, a2.prepopInput = function(e5) {
            if (false !== a2.props.onEdit) {
              var t3 = function(e6) {
                var t4;
                switch (_(e6)) {
                  case "undefined":
                    t4 = "undefined";
                    break;
                  case "nan":
                    t4 = "NaN";
                    break;
                  case "string":
                    t4 = e6;
                    break;
                  case "date":
                  case "function":
                  case "regexp":
                    t4 = e6.toString();
                    break;
                  default:
                    try {
                      t4 = JSON.stringify(e6, null, "  ");
                    } catch (e7) {
                      t4 = "";
                    }
                }
                return t4;
              }(e5.value), n3 = ce(t3);
              a2.setState({ editMode: true, editValue: t3, parsedInput: { type: n3.type, value: n3.value } });
            }
          }, a2.getRemoveIcon = function() {
            var e5 = a2.props, t3 = e5.variable, n3 = e5.namespace, r2 = e5.theme, o2 = e5.rjvId;
            return m.a.createElement("div", { className: "click-to-remove", style: { verticalAlign: "top", display: a2.state.hovered ? "inline-block" : "none" } }, m.a.createElement(me, Object.assign({ className: "click-to-remove-icon" }, A(r2, "removeVarIcon"), { onClick: function() {
              z.dispatch({ name: "VARIABLE_REMOVED", rjvId: o2, data: { name: t3.name, namespace: n3, existing_value: t3.value, variable_removed: true } });
            } })));
          }, a2.getValue = function(e5, t3) {
            var n3 = !t3 && e5.type, r2 = d(a2).props;
            switch (n3) {
              case false:
                return a2.getEditInput();
              case "string":
                return m.a.createElement(G, Object.assign({ value: e5.value }, r2));
              case "integer":
                return m.a.createElement(H, Object.assign({ value: e5.value }, r2));
              case "float":
                return m.a.createElement(D, Object.assign({ value: e5.value }, r2));
              case "boolean":
                return m.a.createElement(P, Object.assign({ value: e5.value }, r2));
              case "function":
                return m.a.createElement(V, Object.assign({ value: e5.value }, r2));
              case "null":
                return m.a.createElement(W, r2);
              case "nan":
                return m.a.createElement(K, r2);
              case "undefined":
                return m.a.createElement(J, r2);
              case "date":
                return m.a.createElement(F, Object.assign({ value: e5.value }, r2));
              case "regexp":
                return m.a.createElement(U, Object.assign({ value: e5.value }, r2));
              default:
                return m.a.createElement("div", { className: "object-value" }, JSON.stringify(e5.value));
            }
          }, a2.getEditInput = function() {
            var e5 = a2.props.theme, t3 = a2.state.editValue;
            return m.a.createElement("div", null, m.a.createElement(se, Object.assign({ type: "text", inputRef: function(e6) {
              return e6 && e6.focus();
            }, value: t3, className: "variable-editor", onChange: function(e6) {
              var t4 = e6.target.value, n3 = ce(t4);
              a2.setState({ editValue: t4, parsedInput: { type: n3.type, value: n3.value } });
            }, onKeyDown: function(e6) {
              switch (e6.key) {
                case "Escape":
                  a2.setState({ editMode: false, editValue: "" });
                  break;
                case "Enter":
                  (e6.ctrlKey || e6.metaKey) && a2.submitEdit(true);
              }
              e6.stopPropagation();
            }, placeholder: "update this value", minRows: 2 }, A(e5, "edit-input"))), m.a.createElement("div", A(e5, "edit-icon-container"), m.a.createElement(me, Object.assign({ className: "edit-cancel" }, A(e5, "cancel-icon"), { onClick: function() {
              a2.setState({ editMode: false, editValue: "" });
            } })), m.a.createElement(je, Object.assign({ className: "edit-check string-value" }, A(e5, "check-icon"), { onClick: function() {
              a2.submitEdit();
            } })), m.a.createElement("div", null, a2.showDetected())));
          }, a2.submitEdit = function(e5) {
            var t3 = a2.props, n3 = t3.variable, r2 = t3.namespace, o2 = t3.rjvId, i2 = a2.state, s2 = i2.editValue, c2 = i2.parsedInput, l2 = s2;
            e5 && c2.type && (l2 = c2.value), a2.setState({ editMode: false }), z.dispatch({ name: "VARIABLE_UPDATED", rjvId: o2, data: { name: n3.name, namespace: r2, existing_value: n3.value, new_value: l2, variable_removed: false } });
          }, a2.showDetected = function() {
            var e5 = a2.props, t3 = e5.theme, n3 = (e5.variable, e5.namespace, e5.rjvId, a2.state.parsedInput), r2 = (n3.type, n3.value, a2.getDetectedInput());
            if (r2)
              return m.a.createElement("div", null, m.a.createElement("div", A(t3, "detected-row"), r2, m.a.createElement(je, { className: "edit-check detected", style: o({ verticalAlign: "top", paddingLeft: "3px" }, A(t3, "check-icon").style), onClick: function() {
                a2.submitEdit(true);
              } })));
          }, a2.getDetectedInput = function() {
            var e5 = a2.state.parsedInput, t3 = e5.type, n3 = e5.value, r2 = d(a2).props, i2 = r2.theme;
            if (false !== t3)
              switch (t3.toLowerCase()) {
                case "object":
                  return m.a.createElement("span", null, m.a.createElement("span", { style: o(o({}, A(i2, "brace").style), {}, { cursor: "default" }) }, "{"), m.a.createElement("span", { style: o(o({}, A(i2, "ellipsis").style), {}, { cursor: "default" }) }, "..."), m.a.createElement("span", { style: o(o({}, A(i2, "brace").style), {}, { cursor: "default" }) }, "}"));
                case "array":
                  return m.a.createElement("span", null, m.a.createElement("span", { style: o(o({}, A(i2, "brace").style), {}, { cursor: "default" }) }, "["), m.a.createElement("span", { style: o(o({}, A(i2, "ellipsis").style), {}, { cursor: "default" }) }, "..."), m.a.createElement("span", { style: o(o({}, A(i2, "brace").style), {}, { cursor: "default" }) }, "]"));
                case "string":
                  return m.a.createElement(G, Object.assign({ value: n3 }, r2));
                case "integer":
                  return m.a.createElement(H, Object.assign({ value: n3 }, r2));
                case "float":
                  return m.a.createElement(D, Object.assign({ value: n3 }, r2));
                case "boolean":
                  return m.a.createElement(P, Object.assign({ value: n3 }, r2));
                case "function":
                  return m.a.createElement(V, Object.assign({ value: n3 }, r2));
                case "null":
                  return m.a.createElement(W, r2);
                case "nan":
                  return m.a.createElement(K, r2);
                case "undefined":
                  return m.a.createElement(J, r2);
                case "date":
                  return m.a.createElement(F, Object.assign({ value: new Date(n3) }, r2));
              }
          }, a2.state = { editMode: false, editValue: "", hovered: false, renameKey: false, parsedInput: { type: false, value: null } }, a2;
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this, t3 = this.props, n3 = t3.variable, a2 = t3.singleIndent, r2 = t3.type, i2 = t3.theme, s2 = t3.namespace, c2 = t3.indentWidth, l2 = t3.enableClipboard, u2 = t3.onEdit, f2 = t3.onDelete, p2 = t3.onSelect, d2 = t3.displayArrayKey, b2 = t3.quotesOnKeys, h2 = this.state.editMode;
          return m.a.createElement("div", Object.assign({}, A(i2, "objectKeyVal", { paddingLeft: c2 * a2 }), { onMouseEnter: function() {
            return e4.setState(o(o({}, e4.state), {}, { hovered: true }));
          }, onMouseLeave: function() {
            return e4.setState(o(o({}, e4.state), {}, { hovered: false }));
          }, className: "variable-row", key: n3.name }), "array" == r2 ? d2 ? m.a.createElement("span", Object.assign({}, A(i2, "array-key"), { key: n3.name + "_" + s2 }), n3.name, m.a.createElement("div", A(i2, "colon"), ":")) : null : m.a.createElement("span", null, m.a.createElement("span", Object.assign({}, A(i2, "object-name"), { className: "object-key", key: n3.name + "_" + s2 }), !!b2 && m.a.createElement("span", { style: { verticalAlign: "top" } }, '"'), m.a.createElement("span", { style: { display: "inline-block" } }, n3.name), !!b2 && m.a.createElement("span", { style: { verticalAlign: "top" } }, '"')), m.a.createElement("span", A(i2, "colon"), ":")), m.a.createElement("div", Object.assign({ className: "variable-value", onClick: false === p2 && false === u2 ? null : function(t4) {
            var a3 = B(s2);
            (t4.ctrlKey || t4.metaKey) && false !== u2 ? e4.prepopInput(n3) : false !== p2 && (a3.shift(), p2(o(o({}, n3), {}, { namespace: a3 })));
          } }, A(i2, "variableValue", { cursor: false === p2 ? "default" : "pointer" })), this.getValue(n3, h2)), l2 ? m.a.createElement(_e, { rowHovered: this.state.hovered, hidden: h2, src: n3.value, clickCallback: l2, theme: i2, namespace: [].concat(B(s2), [n3.name]) }) : null, false !== u2 && 0 == h2 ? this.getEditIcon() : null, false !== f2 && 0 == h2 ? this.getRemoveIcon() : null);
        } }]), n2;
      }(m.a.PureComponent), Oe = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          var e4;
          i(this, n2);
          for (var a2 = arguments.length, r2 = new Array(a2), s2 = 0; s2 < a2; s2++)
            r2[s2] = arguments[s2];
          return (e4 = t2.call.apply(t2, [this].concat(r2))).getObjectSize = function() {
            var t3 = e4.props, n3 = t3.size, a3 = t3.theme;
            if (t3.displayObjectSize)
              return m.a.createElement("span", Object.assign({ className: "object-size" }, A(a3, "object-size")), n3, " item", 1 === n3 ? "" : "s");
          }, e4.getAddAttribute = function(t3) {
            var n3 = e4.props, a3 = n3.theme, r3 = n3.namespace, i2 = n3.name, s3 = n3.src, c2 = n3.rjvId, l2 = n3.depth;
            return m.a.createElement("span", { className: "click-to-add", style: { verticalAlign: "top", display: t3 ? "inline-block" : "none" } }, m.a.createElement(ye, Object.assign({ className: "click-to-add-icon" }, A(a3, "addVarIcon"), { onClick: function() {
              var e5 = { name: l2 > 0 ? i2 : null, namespace: r3.splice(0, r3.length - 1), existing_value: s3, variable_removed: false, key_name: null };
              "object" === _(s3) ? z.dispatch({ name: "ADD_VARIABLE_KEY_REQUEST", rjvId: c2, data: e5 }) : z.dispatch({ name: "VARIABLE_ADDED", rjvId: c2, data: o(o({}, e5), {}, { new_value: [].concat(B(s3), [null]) }) });
            } })));
          }, e4.getRemoveObject = function(t3) {
            var n3 = e4.props, a3 = n3.theme, r3 = (n3.hover, n3.namespace), o2 = n3.name, i2 = n3.src, s3 = n3.rjvId;
            if (1 !== r3.length)
              return m.a.createElement("span", { className: "click-to-remove", style: { display: t3 ? "inline-block" : "none" } }, m.a.createElement(me, Object.assign({ className: "click-to-remove-icon" }, A(a3, "removeVarIcon"), { onClick: function() {
                z.dispatch({ name: "VARIABLE_REMOVED", rjvId: s3, data: { name: o2, namespace: r3.splice(0, r3.length - 1), existing_value: i2, variable_removed: true } });
              } })));
          }, e4.render = function() {
            var t3 = e4.props, n3 = t3.theme, a3 = t3.onDelete, r3 = t3.onAdd, o2 = t3.enableClipboard, i2 = t3.src, s3 = t3.namespace, c2 = t3.rowHovered;
            return m.a.createElement("div", Object.assign({}, A(n3, "object-meta-data"), { className: "object-meta-data", onClick: function(e5) {
              e5.stopPropagation();
            } }), e4.getObjectSize(), o2 ? m.a.createElement(_e, { rowHovered: c2, clickCallback: o2, src: i2, theme: n3, namespace: s3 }) : null, false !== r3 ? e4.getAddAttribute(c2) : null, false !== a3 ? e4.getRemoveObject(c2) : null);
          }, e4;
        }
        return n2;
      }(m.a.PureComponent);
      function Ce(e3) {
        var t2 = e3.parent_type, n2 = e3.namespace, a2 = e3.quotesOnKeys, r2 = e3.theme, o2 = e3.jsvRoot, i2 = e3.name, s2 = e3.displayArrayKey, c2 = e3.name ? e3.name : "";
        return !o2 || false !== i2 && null !== i2 ? "array" == t2 ? s2 ? m.a.createElement("span", Object.assign({}, A(r2, "array-key"), { key: n2 }), m.a.createElement("span", { className: "array-key" }, c2), m.a.createElement("span", A(r2, "colon"), ":")) : m.a.createElement("span", null) : m.a.createElement("span", Object.assign({}, A(r2, "object-name"), { key: n2 }), m.a.createElement("span", { className: "object-key" }, a2 && m.a.createElement("span", { style: { verticalAlign: "top" } }, '"'), m.a.createElement("span", null, c2), a2 && m.a.createElement("span", { style: { verticalAlign: "top" } }, '"')), m.a.createElement("span", A(r2, "colon"), ":")) : m.a.createElement("span", null);
      }
      function Se(e3) {
        var t2 = e3.theme;
        switch (e3.iconStyle) {
          case "triangle":
            return m.a.createElement(he, Object.assign({}, A(t2, "expanded-icon"), { className: "expanded-icon" }));
          case "square":
            return m.a.createElement(pe, Object.assign({}, A(t2, "expanded-icon"), { className: "expanded-icon" }));
          default:
            return m.a.createElement(ue, Object.assign({}, A(t2, "expanded-icon"), { className: "expanded-icon" }));
        }
      }
      function we(e3) {
        var t2 = e3.theme;
        switch (e3.iconStyle) {
          case "triangle":
            return m.a.createElement(be, Object.assign({}, A(t2, "collapsed-icon"), { className: "collapsed-icon" }));
          case "square":
            return m.a.createElement(de, Object.assign({}, A(t2, "collapsed-icon"), { className: "collapsed-icon" }));
          default:
            return m.a.createElement(fe, Object.assign({}, A(t2, "collapsed-icon"), { className: "collapsed-icon" }));
        }
      }
      var Ae = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2(e4) {
          var a2;
          return i(this, n2), (a2 = t2.call(this, e4)).toggleCollapsed = function(e5) {
            var t3 = [];
            for (var n3 in a2.state.expanded)
              t3.push(a2.state.expanded[n3]);
            t3[e5] = !t3[e5], a2.setState({ expanded: t3 });
          }, a2.state = { expanded: [] }, a2;
        }
        return c(n2, [{ key: "getExpandedIcon", value: function(e4) {
          var t3 = this.props, n3 = t3.theme, a2 = t3.iconStyle;
          return this.state.expanded[e4] ? m.a.createElement(Se, { theme: n3, iconStyle: a2 }) : m.a.createElement(we, { theme: n3, iconStyle: a2 });
        } }, { key: "render", value: function() {
          var e4 = this, t3 = this.props, n3 = t3.src, a2 = t3.groupArraysAfterLength, r2 = (t3.depth, t3.name), o2 = t3.theme, i2 = t3.jsvRoot, s2 = t3.namespace, c2 = (t3.parent_type, x(t3, ["src", "groupArraysAfterLength", "depth", "name", "theme", "jsvRoot", "namespace", "parent_type"])), l2 = 0, u2 = 5 * this.props.indentWidth;
          i2 || (l2 = 5 * this.props.indentWidth);
          var f2 = a2, p2 = Math.ceil(n3.length / f2);
          return m.a.createElement("div", Object.assign({ className: "object-key-val" }, A(o2, i2 ? "jsv-root" : "objectKeyVal", { paddingLeft: l2 })), m.a.createElement(Ce, this.props), m.a.createElement("span", null, m.a.createElement(Oe, Object.assign({ size: n3.length }, this.props))), B(Array(p2)).map(function(t4, a3) {
            return m.a.createElement("div", Object.assign({ key: a3, className: "object-key-val array-group" }, A(o2, "objectKeyVal", { marginLeft: 6, paddingLeft: u2 })), m.a.createElement("span", A(o2, "brace-row"), m.a.createElement("div", Object.assign({ className: "icon-container" }, A(o2, "icon-container"), { onClick: function(t5) {
              e4.toggleCollapsed(a3);
            } }), e4.getExpandedIcon(a3)), e4.state.expanded[a3] ? m.a.createElement(Fe, Object.assign({ key: r2 + a3, depth: 0, name: false, collapsed: false, groupArraysAfterLength: f2, index_offset: a3 * f2, src: n3.slice(a3 * f2, a3 * f2 + f2), namespace: s2, type: "array", parent_type: "array_group", theme: o2 }, c2)) : m.a.createElement("span", Object.assign({}, A(o2, "brace"), { onClick: function(t5) {
              e4.toggleCollapsed(a3);
            }, className: "array-group-brace" }), "[", m.a.createElement("div", Object.assign({}, A(o2, "array-group-meta-data"), { className: "array-group-meta-data" }), m.a.createElement("span", Object.assign({ className: "object-size" }, A(o2, "object-size")), a3 * f2, " - ", a3 * f2 + f2 > n3.length ? n3.length : a3 * f2 + f2)), "]")));
          }));
        } }]), n2;
      }(m.a.PureComponent), Me = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2(e4) {
          var a2;
          i(this, n2), (a2 = t2.call(this, e4)).toggleCollapsed = function() {
            a2.setState({ expanded: !a2.state.expanded }, function() {
              q.set(a2.props.rjvId, a2.props.namespace, "expanded", a2.state.expanded);
            });
          }, a2.getObjectContent = function(e5, t3, n3) {
            return m.a.createElement("div", { className: "pushed-content object-container" }, m.a.createElement("div", Object.assign({ className: "object-content" }, A(a2.props.theme, "pushed-content")), a2.renderObjectContents(t3, n3)));
          }, a2.getEllipsis = function() {
            return 0 === a2.state.size ? null : m.a.createElement("div", Object.assign({}, A(a2.props.theme, "ellipsis"), { className: "node-ellipsis", onClick: a2.toggleCollapsed }), "...");
          }, a2.getObjectMetaData = function(e5) {
            var t3 = a2.props, n3 = (t3.rjvId, t3.theme, a2.state), r3 = n3.size, o2 = n3.hovered;
            return m.a.createElement(Oe, Object.assign({ rowHovered: o2, size: r3 }, a2.props));
          }, a2.renderObjectContents = function(e5, t3) {
            var n3, r3 = a2.props, o2 = r3.depth, i2 = r3.parent_type, s2 = r3.index_offset, c2 = r3.groupArraysAfterLength, l2 = r3.namespace, u2 = a2.state.object_type, f2 = [], p2 = Object.keys(e5 || {});
            return a2.props.sortKeys && "array" !== u2 && (p2 = p2.sort()), p2.forEach(function(r4) {
              if (n3 = new Pe(r4, e5[r4]), "array_group" === i2 && s2 && (n3.name = parseInt(n3.name) + s2), e5.hasOwnProperty(r4))
                if ("object" === n3.type)
                  f2.push(m.a.createElement(Fe, Object.assign({ key: n3.name, depth: o2 + 1, name: n3.name, src: n3.value, namespace: l2.concat(n3.name), parent_type: u2 }, t3)));
                else if ("array" === n3.type) {
                  var p3 = Fe;
                  c2 && n3.value.length > c2 && (p3 = Ae), f2.push(m.a.createElement(p3, Object.assign({ key: n3.name, depth: o2 + 1, name: n3.name, src: n3.value, namespace: l2.concat(n3.name), type: "array", parent_type: u2 }, t3)));
                } else
                  f2.push(m.a.createElement(ke, Object.assign({ key: n3.name + "_" + l2, variable: n3, singleIndent: 5, namespace: l2, type: a2.props.type }, t3)));
            }), f2;
          };
          var r2 = n2.getState(e4);
          return a2.state = o(o({}, r2), {}, { prevProps: {} }), a2;
        }
        return c(n2, [{ key: "getBraceStart", value: function(e4, t3) {
          var n3 = this, a2 = this.props, r2 = a2.src, o2 = a2.theme, i2 = a2.iconStyle;
          if ("array_group" === a2.parent_type)
            return m.a.createElement("span", null, m.a.createElement("span", A(o2, "brace"), "array" === e4 ? "[" : "{"), t3 ? this.getObjectMetaData(r2) : null);
          var s2 = t3 ? Se : we;
          return m.a.createElement("span", null, m.a.createElement("span", Object.assign({ onClick: function(e5) {
            n3.toggleCollapsed();
          } }, A(o2, "brace-row")), m.a.createElement("div", Object.assign({ className: "icon-container" }, A(o2, "icon-container")), m.a.createElement(s2, { theme: o2, iconStyle: i2 })), m.a.createElement(Ce, this.props), m.a.createElement("span", A(o2, "brace"), "array" === e4 ? "[" : "{")), t3 ? this.getObjectMetaData(r2) : null);
        } }, { key: "render", value: function() {
          var e4 = this, t3 = this.props, n3 = t3.depth, a2 = t3.src, r2 = (t3.namespace, t3.name, t3.type, t3.parent_type), i2 = t3.theme, s2 = t3.jsvRoot, c2 = t3.iconStyle, l2 = x(t3, ["depth", "src", "namespace", "name", "type", "parent_type", "theme", "jsvRoot", "iconStyle"]), u2 = this.state, f2 = u2.object_type, p2 = u2.expanded, d2 = {};
          return s2 || "array_group" === r2 ? "array_group" === r2 && (d2.borderLeft = 0, d2.display = "inline") : d2.paddingLeft = 5 * this.props.indentWidth, m.a.createElement("div", Object.assign({ className: "object-key-val", onMouseEnter: function() {
            return e4.setState(o(o({}, e4.state), {}, { hovered: true }));
          }, onMouseLeave: function() {
            return e4.setState(o(o({}, e4.state), {}, { hovered: false }));
          } }, A(i2, s2 ? "jsv-root" : "objectKeyVal", d2)), this.getBraceStart(f2, p2), p2 ? this.getObjectContent(n3, a2, o({ theme: i2, iconStyle: c2 }, l2)) : this.getEllipsis(), m.a.createElement("span", { className: "brace-row" }, m.a.createElement("span", { style: o(o({}, A(i2, "brace").style), {}, { paddingLeft: p2 ? "3px" : "0px" }) }, "array" === f2 ? "]" : "}"), p2 ? null : this.getObjectMetaData(a2)));
        } }], [{ key: "getDerivedStateFromProps", value: function(e4, t3) {
          var a2 = t3.prevProps;
          return e4.src !== a2.src || e4.collapsed !== a2.collapsed || e4.name !== a2.name || e4.namespace !== a2.namespace || e4.rjvId !== a2.rjvId ? o(o({}, n2.getState(e4)), {}, { prevProps: e4 }) : null;
        } }]), n2;
      }(m.a.PureComponent);
      Me.getState = function(e3) {
        var t2 = Object.keys(e3.src).length, n2 = (false === e3.collapsed || true !== e3.collapsed && e3.collapsed > e3.depth) && (!e3.shouldCollapse || false === e3.shouldCollapse({ name: e3.name, src: e3.src, type: _(e3.src), namespace: e3.namespace })) && 0 !== t2;
        return { expanded: q.get(e3.rjvId, e3.namespace, "expanded", n2), object_type: "array" === e3.type ? "array" : "object", parent_type: "array" === e3.type ? "array" : "object", size: t2, hovered: false };
      };
      var Pe = function e3(t2, n2) {
        i(this, e3), this.name = t2, this.value = n2, this.type = _(n2);
      };
      j(Me);
      var Fe = Me, De = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          var e4;
          i(this, n2);
          for (var a2 = arguments.length, r2 = new Array(a2), o2 = 0; o2 < a2; o2++)
            r2[o2] = arguments[o2];
          return (e4 = t2.call.apply(t2, [this].concat(r2))).render = function() {
            var t3 = d(e4).props, n3 = [t3.name], a3 = Fe;
            return Array.isArray(t3.src) && t3.groupArraysAfterLength && t3.src.length > t3.groupArraysAfterLength && (a3 = Ae), m.a.createElement("div", { className: "pretty-json-container object-container" }, m.a.createElement("div", { className: "object-content" }, m.a.createElement(a3, Object.assign({ namespace: n3, depth: 0, jsvRoot: true }, t3))));
          }, e4;
        }
        return n2;
      }(m.a.PureComponent), Ie = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2(e4) {
          var a2;
          return i(this, n2), (a2 = t2.call(this, e4)).closeModal = function() {
            z.dispatch({ rjvId: a2.props.rjvId, name: "RESET" });
          }, a2.submit = function() {
            a2.props.submit(a2.state.input);
          }, a2.state = { input: e4.input ? e4.input : "" }, a2;
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this, t3 = this.props, n3 = t3.theme, a2 = t3.rjvId, r2 = t3.isValid, o2 = this.state.input, i2 = r2(o2);
          return m.a.createElement("div", Object.assign({ className: "key-modal-request" }, A(n3, "key-modal-request"), { onClick: this.closeModal }), m.a.createElement("div", Object.assign({}, A(n3, "key-modal"), { onClick: function(e5) {
            e5.stopPropagation();
          } }), m.a.createElement("div", A(n3, "key-modal-label"), "Key Name:"), m.a.createElement("div", { style: { position: "relative" } }, m.a.createElement("input", Object.assign({}, A(n3, "key-modal-input"), { className: "key-modal-input", ref: function(e5) {
            return e5 && e5.focus();
          }, spellCheck: false, value: o2, placeholder: "...", onChange: function(t4) {
            e4.setState({ input: t4.target.value });
          }, onKeyPress: function(t4) {
            i2 && "Enter" === t4.key ? e4.submit() : "Escape" === t4.key && e4.closeModal();
          } })), i2 ? m.a.createElement(je, Object.assign({}, A(n3, "key-modal-submit"), { className: "key-modal-submit", onClick: function(t4) {
            return e4.submit();
          } })) : null), m.a.createElement("span", A(n3, "key-modal-cancel"), m.a.createElement(ge, Object.assign({}, A(n3, "key-modal-cancel-icon"), { className: "key-modal-cancel", onClick: function() {
            z.dispatch({ rjvId: a2, name: "RESET" });
          } })))));
        } }]), n2;
      }(m.a.PureComponent), Re = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          var e4;
          i(this, n2);
          for (var a2 = arguments.length, r2 = new Array(a2), s2 = 0; s2 < a2; s2++)
            r2[s2] = arguments[s2];
          return (e4 = t2.call.apply(t2, [this].concat(r2))).isValid = function(t3) {
            var n3 = e4.props.rjvId, a3 = q.get(n3, "action", "new-key-request");
            return "" != t3 && -1 === Object.keys(a3.existing_value).indexOf(t3);
          }, e4.submit = function(t3) {
            var n3 = e4.props.rjvId, a3 = q.get(n3, "action", "new-key-request");
            a3.new_value = o({}, a3.existing_value), a3.new_value[t3] = e4.props.defaultValue, z.dispatch({ name: "VARIABLE_ADDED", rjvId: n3, data: a3 });
          }, e4;
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.active, n3 = e4.theme, a2 = e4.rjvId;
          return t3 ? m.a.createElement(Ie, { rjvId: a2, theme: n3, isValid: this.isValid, submit: this.submit }) : null;
        } }]), n2;
      }(m.a.PureComponent), Le = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2() {
          return i(this, n2), t2.apply(this, arguments);
        }
        return c(n2, [{ key: "render", value: function() {
          var e4 = this.props, t3 = e4.message, n3 = e4.active, a2 = e4.theme, r2 = e4.rjvId;
          return n3 ? m.a.createElement("div", Object.assign({ className: "validation-failure" }, A(a2, "validation-failure"), { onClick: function() {
            z.dispatch({ rjvId: r2, name: "RESET" });
          } }), m.a.createElement("span", A(a2, "validation-failure-label"), t3), m.a.createElement(ge, A(a2, "validation-failure-clear"))) : null;
        } }]), n2;
      }(m.a.PureComponent), Be = function(e3) {
        u(n2, e3);
        var t2 = h(n2);
        function n2(e4) {
          var a2;
          return i(this, n2), (a2 = t2.call(this, e4)).rjvId = Date.now().toString(), a2.getListeners = function() {
            return { reset: a2.resetState, "variable-update": a2.updateSrc, "add-key-request": a2.addKeyRequest };
          }, a2.updateSrc = function() {
            var e5, t3 = q.get(a2.rjvId, "action", "variable-update"), n3 = t3.name, r2 = t3.namespace, o2 = t3.new_value, i2 = t3.existing_value, s2 = (t3.variable_removed, t3.updated_src), c2 = t3.type, l2 = a2.props, u2 = l2.onEdit, f2 = l2.onDelete, p2 = l2.onAdd, d2 = { existing_src: a2.state.src, new_value: o2, updated_src: s2, name: n3, namespace: r2, existing_value: i2 };
            switch (c2) {
              case "variable-added":
                e5 = p2(d2);
                break;
              case "variable-edited":
                e5 = u2(d2);
                break;
              case "variable-removed":
                e5 = f2(d2);
            }
            false !== e5 ? (q.set(a2.rjvId, "global", "src", s2), a2.setState({ src: s2 })) : a2.setState({ validationFailure: true });
          }, a2.addKeyRequest = function() {
            a2.setState({ addKeyRequest: true });
          }, a2.resetState = function() {
            a2.setState({ validationFailure: false, addKeyRequest: false });
          }, a2.state = { addKeyRequest: false, editKeyRequest: false, validationFailure: false, src: n2.defaultProps.src, name: n2.defaultProps.name, theme: n2.defaultProps.theme, validationMessage: n2.defaultProps.validationMessage, prevSrc: n2.defaultProps.src, prevName: n2.defaultProps.name, prevTheme: n2.defaultProps.theme }, a2;
        }
        return c(n2, [{ key: "componentDidMount", value: function() {
          q.set(this.rjvId, "global", "src", this.state.src);
          var e4 = this.getListeners();
          for (var t3 in e4)
            q.on(t3 + "-" + this.rjvId, e4[t3]);
          this.setState({ addKeyRequest: false, editKeyRequest: false });
        } }, { key: "componentDidUpdate", value: function(e4, t3) {
          false !== t3.addKeyRequest && this.setState({ addKeyRequest: false }), false !== t3.editKeyRequest && this.setState({ editKeyRequest: false }), e4.src !== this.state.src && q.set(this.rjvId, "global", "src", this.state.src);
        } }, { key: "componentWillUnmount", value: function() {
          var e4 = this.getListeners();
          for (var t3 in e4)
            q.removeListener(t3 + "-" + this.rjvId, e4[t3]);
        } }, { key: "render", value: function() {
          var e4 = this.state, t3 = e4.validationFailure, n3 = e4.validationMessage, a2 = e4.addKeyRequest, r2 = e4.theme, i2 = e4.src, s2 = e4.name, c2 = this.props, l2 = c2.style, u2 = c2.defaultValue;
          return m.a.createElement("div", { className: "react-json-view", style: o(o({}, A(r2, "app-container").style), l2) }, m.a.createElement(Le, { message: n3, active: t3, theme: r2, rjvId: this.rjvId }), m.a.createElement(De, Object.assign({}, this.props, { src: i2, name: s2, theme: r2, type: _(i2), rjvId: this.rjvId })), m.a.createElement(Re, { active: a2, theme: r2, rjvId: this.rjvId, defaultValue: u2 }));
        } }], [{ key: "getDerivedStateFromProps", value: function(e4, t3) {
          if (e4.src !== t3.prevSrc || e4.name !== t3.prevName || e4.theme !== t3.prevTheme) {
            var a2 = { src: e4.src, name: e4.name, theme: e4.theme, validationMessage: e4.validationMessage, prevSrc: e4.src, prevName: e4.name, prevTheme: e4.theme };
            return n2.validateState(a2);
          }
          return null;
        } }]), n2;
      }(m.a.PureComponent);
      Be.defaultProps = { src: {}, name: "root", theme: "rjv-default", collapsed: false, collapseStringsAfterLength: false, shouldCollapse: false, sortKeys: false, quotesOnKeys: true, groupArraysAfterLength: 100, indentWidth: 4, enableClipboard: true, displayObjectSize: true, displayDataTypes: true, onEdit: false, onDelete: false, onAdd: false, onSelect: false, iconStyle: "triangle", style: {}, validationMessage: "Validation Error", defaultValue: null, displayArrayKey: true }, Be.validateState = function(e3) {
        var t2 = {};
        return "object" !== _(e3.theme) || function(e4) {
          var t3 = ["base00", "base01", "base02", "base03", "base04", "base05", "base06", "base07", "base08", "base09", "base0A", "base0B", "base0C", "base0D", "base0E", "base0F"];
          if ("object" === _(e4)) {
            for (var n2 = 0; n2 < t3.length; n2++)
              if (!(t3[n2] in e4))
                return false;
            return true;
          }
          return false;
        }(e3.theme) || (console.error("react-json-view error:", "theme prop must be a theme name or valid base-16 theme object.", 'defaulting to "rjv-default" theme'), t2.theme = "rjv-default"), "object" !== _(e3.src) && "array" !== _(e3.src) && (console.error("react-json-view error:", "src property must be a valid json object"), t2.name = "ERROR", t2.src = { message: "src property must be a valid json object" }), o(o({}, e3), t2);
      }, j(Be);
      t.default = Be;
    }]);
  });
})(main);
var mainExports = main.exports;
const ReactJson = /* @__PURE__ */ getDefaultExportFromCjs(mainExports);
var castPath = _castPath, toKey = _toKey;
function baseGet$1(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var _baseGet = baseGet$1;
var baseGet = _baseGet;
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get;
const get$1 = /* @__PURE__ */ getDefaultExportFromCjs(get_1);
var baseGetTag$4 = _baseGetTag$1, isArray = isArray_1, isObjectLike$4 = isObjectLike_1$1;
var stringTag = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray(value) && isObjectLike$4(value) && baseGetTag$4(value) == stringTag;
}
var isString_1 = isString;
const isString$1 = /* @__PURE__ */ getDefaultExportFromCjs(isString_1);
var baseGetTag$3 = _baseGetTag$1, isObjectLike$3 = isObjectLike_1$1;
var numberTag = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike$3(value) && baseGetTag$3(value) == numberTag;
}
var isNumber_1 = isNumber;
const isNumber$1 = /* @__PURE__ */ getDefaultExportFromCjs(isNumber_1);
var baseGetTag$2 = _baseGetTag$1, isObjectLike$2 = isObjectLike_1$1;
var boolTag = "[object Boolean]";
function isBoolean(value) {
  return value === true || value === false || isObjectLike$2(value) && baseGetTag$2(value) == boolTag;
}
var isBoolean_1 = isBoolean;
const isBoolean$1 = /* @__PURE__ */ getDefaultExportFromCjs(isBoolean_1);
var ReloadOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, "name": "reload", "theme": "outlined" };
const ReloadOutlinedSvg = ReloadOutlined$2;
var calcThumbStyle = function calcThumbStyle2(targetElement) {
  return targetElement ? {
    left: targetElement.offsetLeft,
    right: targetElement.parentElement.clientWidth - targetElement.clientWidth - targetElement.offsetLeft,
    width: targetElement.clientWidth
  } : null;
};
var toPX = function toPX2(value) {
  return value !== void 0 ? "".concat(value, "px") : void 0;
};
function MotionThumb(props) {
  var prefixCls = props.prefixCls, containerRef = props.containerRef, value = props.value, getValueIndex = props.getValueIndex, motionName = props.motionName, onMotionStart = props.onMotionStart, onMotionEnd = props.onMotionEnd, direction = props.direction;
  var thumbRef = reactExports.useRef(null);
  var _React$useState = reactExports.useState(value), _React$useState2 = _slicedToArray(_React$useState, 2), prevValue = _React$useState2[0], setPrevValue = _React$useState2[1];
  var findValueElement = function findValueElement2(val) {
    var _containerRef$current;
    var index = getValueIndex(val);
    var ele = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelectorAll(".".concat(prefixCls, "-item"))[index];
    return (ele === null || ele === void 0 ? void 0 : ele.offsetParent) && ele;
  };
  var _React$useState3 = reactExports.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), prevStyle = _React$useState4[0], setPrevStyle = _React$useState4[1];
  var _React$useState5 = reactExports.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), nextStyle = _React$useState6[0], setNextStyle = _React$useState6[1];
  useLayoutEffect(function() {
    if (prevValue !== value) {
      var prev = findValueElement(prevValue);
      var next = findValueElement(value);
      var calcPrevStyle = calcThumbStyle(prev);
      var calcNextStyle = calcThumbStyle(next);
      setPrevValue(value);
      setPrevStyle(calcPrevStyle);
      setNextStyle(calcNextStyle);
      if (prev && next) {
        onMotionStart();
      } else {
        onMotionEnd();
      }
    }
  }, [value]);
  var thumbStart = reactExports.useMemo(function() {
    return direction === "rtl" ? toPX(-(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.right)) : toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.left);
  }, [direction, prevStyle]);
  var thumbActive = reactExports.useMemo(function() {
    return direction === "rtl" ? toPX(-(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.right)) : toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.left);
  }, [direction, nextStyle]);
  var onAppearStart = function onAppearStart2() {
    return {
      transform: "translateX(var(--thumb-start-left))",
      width: "var(--thumb-start-width)"
    };
  };
  var onAppearActive = function onAppearActive2() {
    return {
      transform: "translateX(var(--thumb-active-left))",
      width: "var(--thumb-active-width)"
    };
  };
  var onVisibleChanged = function onVisibleChanged2() {
    setPrevStyle(null);
    setNextStyle(null);
    onMotionEnd();
  };
  if (!prevStyle || !nextStyle) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(CSSMotion, {
    visible: true,
    motionName,
    motionAppear: true,
    onAppearStart,
    onAppearActive,
    onVisibleChanged
  }, function(_ref, ref) {
    var motionClassName = _ref.className, motionStyle = _ref.style;
    var mergedStyle = _objectSpread2(_objectSpread2({}, motionStyle), {}, {
      "--thumb-start-left": thumbStart,
      "--thumb-start-width": toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.width),
      "--thumb-active-left": thumbActive,
      "--thumb-active-width": toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.width)
    });
    var motionProps = {
      ref: composeRef(thumbRef, ref),
      style: mergedStyle,
      className: classNames("".concat(prefixCls, "-thumb"), motionClassName)
    };
    return /* @__PURE__ */ reactExports.createElement("div", motionProps);
  });
}
var _excluded = ["prefixCls", "direction", "options", "disabled", "defaultValue", "value", "onChange", "className", "motionName"];
function getValidTitle(option) {
  if (typeof option.title !== "undefined") {
    return option.title;
  }
  if (_typeof(option.label) !== "object") {
    var _option$label;
    return (_option$label = option.label) === null || _option$label === void 0 ? void 0 : _option$label.toString();
  }
}
function normalizeOptions(options) {
  return options.map(function(option) {
    if (_typeof(option) === "object" && option !== null) {
      var validTitle = getValidTitle(option);
      return _objectSpread2(_objectSpread2({}, option), {}, {
        title: validTitle
      });
    }
    return {
      label: option === null || option === void 0 ? void 0 : option.toString(),
      title: option === null || option === void 0 ? void 0 : option.toString(),
      value: option
    };
  });
}
var InternalSegmentedOption = function InternalSegmentedOption2(_ref) {
  var prefixCls = _ref.prefixCls, className = _ref.className, disabled = _ref.disabled, checked = _ref.checked, label = _ref.label, title = _ref.title, value = _ref.value, onChange = _ref.onChange;
  var handleChange = function handleChange2(event) {
    if (disabled) {
      return;
    }
    onChange(event, value);
  };
  return /* @__PURE__ */ reactExports.createElement("label", {
    className: classNames(className, _defineProperty$1({}, "".concat(prefixCls, "-item-disabled"), disabled))
  }, /* @__PURE__ */ reactExports.createElement("input", {
    className: "".concat(prefixCls, "-item-input"),
    type: "radio",
    disabled,
    checked,
    onChange: handleChange
  }), /* @__PURE__ */ reactExports.createElement("div", {
    className: "".concat(prefixCls, "-item-label"),
    title
  }, label));
};
var Segmented$2 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var _segmentedOptions$, _classNames2;
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-segmented" : _props$prefixCls, direction = props.direction, options = props.options, disabled = props.disabled, defaultValue = props.defaultValue, value = props.value, onChange = props.onChange, _props$className = props.className, className = _props$className === void 0 ? "" : _props$className, _props$motionName = props.motionName, motionName = _props$motionName === void 0 ? "thumb-motion" : _props$motionName, restProps = _objectWithoutProperties(props, _excluded);
  var containerRef = reactExports.useRef(null);
  var mergedRef = reactExports.useMemo(function() {
    return composeRef(containerRef, ref);
  }, [containerRef, ref]);
  var segmentedOptions = reactExports.useMemo(function() {
    return normalizeOptions(options);
  }, [options]);
  var _useMergedState = useMergedState((_segmentedOptions$ = segmentedOptions[0]) === null || _segmentedOptions$ === void 0 ? void 0 : _segmentedOptions$.value, {
    value,
    defaultValue
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), rawValue = _useMergedState2[0], setRawValue = _useMergedState2[1];
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), thumbShow = _React$useState2[0], setThumbShow = _React$useState2[1];
  var handleChange = function handleChange2(event, val) {
    if (disabled) {
      return;
    }
    setRawValue(val);
    onChange === null || onChange === void 0 ? void 0 : onChange(val);
  };
  var divProps = omit(restProps, ["children"]);
  return /* @__PURE__ */ reactExports.createElement("div", _extends({}, divProps, {
    className: classNames(prefixCls, (_classNames2 = {}, _defineProperty$1(_classNames2, "".concat(prefixCls, "-rtl"), direction === "rtl"), _defineProperty$1(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _classNames2), className),
    ref: mergedRef
  }), /* @__PURE__ */ reactExports.createElement("div", {
    className: "".concat(prefixCls, "-group")
  }, /* @__PURE__ */ reactExports.createElement(MotionThumb, {
    prefixCls,
    value: rawValue,
    containerRef,
    motionName: "".concat(prefixCls, "-").concat(motionName),
    direction,
    getValueIndex: function getValueIndex(val) {
      return segmentedOptions.findIndex(function(n) {
        return n.value === val;
      });
    },
    onMotionStart: function onMotionStart() {
      setThumbShow(true);
    },
    onMotionEnd: function onMotionEnd() {
      setThumbShow(false);
    }
  }), segmentedOptions.map(function(segmentedOption) {
    return /* @__PURE__ */ reactExports.createElement(InternalSegmentedOption, _extends({}, segmentedOption, {
      key: segmentedOption.value,
      prefixCls,
      className: classNames(segmentedOption.className, "".concat(prefixCls, "-item"), _defineProperty$1({}, "".concat(prefixCls, "-item-selected"), segmentedOption.value === rawValue && !thumbShow)),
      checked: segmentedOption.value === rawValue,
      onChange: handleChange,
      disabled: !!disabled || !!segmentedOption.disabled
    }));
  })));
});
Segmented$2.displayName = "Segmented";
Segmented$2.defaultProps = {
  options: []
};
function getItemDisabledStyle(cls, token) {
  return {
    [`${cls}, ${cls}:hover, ${cls}:focus`]: {
      color: token.colorTextDisabled,
      cursor: "not-allowed"
    }
  };
}
function getItemSelectedStyle(token) {
  return {
    backgroundColor: token.itemSelectedBg,
    boxShadow: token.boxShadowTertiary
  };
}
const segmentedTextEllipsisCss = Object.assign({
  overflow: "hidden"
}, textEllipsis);
const genSegmentedStyle = (token) => {
  const {
    componentCls
  } = token;
  const labelHeight = token.calc(token.controlHeight).sub(token.calc(token.segmentedPadding).mul(2)).equal();
  const labelHeightLG = token.calc(token.controlHeightLG).sub(token.calc(token.segmentedPadding).mul(2)).equal();
  const labelHeightSM = token.calc(token.controlHeightSM).sub(token.calc(token.segmentedPadding).mul(2)).equal();
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token)), {
      display: "inline-block",
      padding: token.segmentedPadding,
      color: token.itemColor,
      backgroundColor: token.segmentedBgColor,
      borderRadius: token.borderRadius,
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      [`${componentCls}-group`]: {
        position: "relative",
        display: "flex",
        alignItems: "stretch",
        justifyItems: "flex-start",
        width: "100%"
      },
      // RTL styles
      [`&${componentCls}-rtl`]: {
        direction: "rtl"
      },
      // block styles
      [`&${componentCls}-block`]: {
        display: "flex"
      },
      [`&${componentCls}-block ${componentCls}-item`]: {
        flex: 1,
        minWidth: 0
      },
      // item styles
      [`${componentCls}-item`]: {
        position: "relative",
        textAlign: "center",
        cursor: "pointer",
        transition: `color ${token.motionDurationMid} ${token.motionEaseInOut}`,
        borderRadius: token.borderRadiusSM,
        // Fix Safari render bug
        // https://github.com/ant-design/ant-design/issues/45250
        transform: "translateZ(0)",
        "&-selected": Object.assign(Object.assign({}, getItemSelectedStyle(token)), {
          color: token.itemSelectedColor
        }),
        "&::after": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          insetInlineStart: 0,
          borderRadius: "inherit",
          transition: `background-color ${token.motionDurationMid}`,
          // This is mandatory to make it not clickable or hoverable
          // Ref: https://github.com/ant-design/ant-design/issues/40888
          pointerEvents: "none"
        },
        [`&:hover:not(${componentCls}-item-selected):not(${componentCls}-item-disabled)`]: {
          color: token.itemHoverColor,
          "&::after": {
            backgroundColor: token.itemHoverBg
          }
        },
        [`&:active:not(${componentCls}-item-selected):not(${componentCls}-item-disabled)`]: {
          color: token.itemHoverColor,
          "&::after": {
            backgroundColor: token.itemActiveBg
          }
        },
        "&-label": Object.assign({
          minHeight: labelHeight,
          lineHeight: unit(labelHeight),
          padding: `0 ${unit(token.segmentedPaddingHorizontal)}`
        }, segmentedTextEllipsisCss),
        // syntactic sugar to add `icon` for Segmented Item
        "&-icon + *": {
          marginInlineStart: token.calc(token.marginSM).div(2).equal()
        },
        "&-input": {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: 0,
          height: 0,
          opacity: 0,
          pointerEvents: "none"
        }
      },
      // thumb styles
      [`${componentCls}-thumb`]: Object.assign(Object.assign({}, getItemSelectedStyle(token)), {
        position: "absolute",
        insetBlockStart: 0,
        insetInlineStart: 0,
        width: 0,
        height: "100%",
        padding: `${unit(token.paddingXXS)} 0`,
        borderRadius: token.borderRadiusSM,
        [`& ~ ${componentCls}-item:not(${componentCls}-item-selected):not(${componentCls}-item-disabled)::after`]: {
          backgroundColor: "transparent"
        }
      }),
      // size styles
      [`&${componentCls}-lg`]: {
        borderRadius: token.borderRadiusLG,
        [`${componentCls}-item-label`]: {
          minHeight: labelHeightLG,
          lineHeight: unit(labelHeightLG),
          padding: `0 ${unit(token.segmentedPaddingHorizontal)}`,
          fontSize: token.fontSizeLG
        },
        [`${componentCls}-item, ${componentCls}-thumb`]: {
          borderRadius: token.borderRadius
        }
      },
      [`&${componentCls}-sm`]: {
        borderRadius: token.borderRadiusSM,
        [`${componentCls}-item-label`]: {
          minHeight: labelHeightSM,
          lineHeight: unit(labelHeightSM),
          padding: `0 ${unit(token.segmentedPaddingHorizontalSM)}`
        },
        [`${componentCls}-item, ${componentCls}-thumb`]: {
          borderRadius: token.borderRadiusXS
        }
      }
    }), getItemDisabledStyle(`&-disabled ${componentCls}-item`, token)), getItemDisabledStyle(`${componentCls}-item-disabled`, token)), {
      // transition effect when `appear-active`
      [`${componentCls}-thumb-motion-appear-active`]: {
        transition: `transform ${token.motionDurationSlow} ${token.motionEaseInOut}, width ${token.motionDurationSlow} ${token.motionEaseInOut}`,
        willChange: "transform, width"
      }
    })
  };
};
const prepareComponentToken = (token) => {
  const {
    colorTextLabel,
    colorText,
    colorFillSecondary,
    colorBgElevated,
    colorFill
  } = token;
  return {
    itemColor: colorTextLabel,
    itemHoverColor: colorText,
    itemHoverBg: colorFillSecondary,
    itemSelectedBg: colorBgElevated,
    itemActiveBg: colorFill,
    itemSelectedColor: colorText
  };
};
const useStyle = genStyleHooks("Segmented", (token) => {
  const {
    lineWidth,
    lineWidthBold,
    colorBgLayout,
    calc
  } = token;
  const segmentedToken = merge(token, {
    segmentedPadding: lineWidthBold,
    segmentedBgColor: colorBgLayout,
    segmentedPaddingHorizontal: calc(token.controlPaddingHorizontal).sub(lineWidth).equal(),
    segmentedPaddingHorizontalSM: calc(token.controlPaddingHorizontalSM).sub(lineWidth).equal()
  });
  return [genSegmentedStyle(segmentedToken)];
}, prepareComponentToken);
var __rest$3 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function isSegmentedLabeledOptionWithIcon(option) {
  return typeof option === "object" && !!(option === null || option === void 0 ? void 0 : option.icon);
}
const Segmented = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    block,
    options = [],
    size: customSize = "middle",
    style
  } = props, restProps = __rest$3(props, ["prefixCls", "className", "rootClassName", "block", "options", "size", "style"]);
  const {
    getPrefixCls,
    direction,
    segmented
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("segmented", customizePrefixCls);
  const [wrapCSSVar, hashId] = useStyle(prefixCls);
  const mergedSize = useSize(customSize);
  const extendedOptions = reactExports.useMemo(() => options.map((option) => {
    if (isSegmentedLabeledOptionWithIcon(option)) {
      const {
        icon,
        label
      } = option, restOption = __rest$3(option, ["icon", "label"]);
      return Object.assign(Object.assign({}, restOption), {
        label: /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("span", {
          className: `${prefixCls}-item-icon`
        }, icon), label && /* @__PURE__ */ reactExports.createElement("span", null, label))
      });
    }
    return option;
  }), [options, prefixCls]);
  const cls = classNames(className, rootClassName, segmented === null || segmented === void 0 ? void 0 : segmented.className, {
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-sm`]: mergedSize === "small",
    [`${prefixCls}-lg`]: mergedSize === "large"
  }, hashId);
  const mergedStyle = Object.assign(Object.assign({}, segmented === null || segmented === void 0 ? void 0 : segmented.style), style);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(Segmented$2, Object.assign({}, restProps, {
    className: cls,
    style: mergedStyle,
    options: extendedOptions,
    ref,
    prefixCls,
    direction
  })));
});
const Segmented$1 = Segmented;
var dist = {};
var DataSheetGrid = {};
var useColumnWidths = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.useColumnWidths = exports.getColumnWidths = void 0;
  const react_12 = reactExports;
  const getColumnWidths = (containerWidth, columns) => {
    const items = columns.map(({ basis, minWidth, maxWidth }) => ({
      basis,
      minWidth,
      maxWidth,
      size: basis,
      violation: 0,
      frozen: false,
      factor: 0
    }));
    let availableWidth = items.reduce((acc, cur) => acc - cur.size, containerWidth);
    if (availableWidth > 0) {
      columns.forEach(({ grow }, i) => {
        items[i].factor = grow;
      });
    } else if (availableWidth < 0) {
      columns.forEach(({ shrink }, i) => {
        items[i].factor = shrink;
      });
    }
    for (const item of items) {
      if (item.factor === 0) {
        item.frozen = true;
      }
    }
    while (items.some(({ frozen }) => !frozen)) {
      const sumFactors = items.reduce((acc, cur) => acc + (cur.frozen ? 0 : cur.factor), 0);
      let totalViolation = 0;
      for (const item of items) {
        if (!item.frozen) {
          item.size += availableWidth * item.factor / sumFactors;
          if (item.size < item.minWidth) {
            item.violation = item.minWidth - item.size;
          } else if (item.maxWidth !== void 0 && item.size > item.maxWidth) {
            item.violation = item.maxWidth - item.size;
          } else {
            item.violation = 0;
          }
          item.size += item.violation;
          totalViolation += item.violation;
        }
      }
      if (totalViolation > 0) {
        for (const item of items) {
          if (item.violation > 0) {
            item.frozen = true;
          }
        }
      } else if (totalViolation < 0) {
        for (const item of items) {
          if (item.violation < 0) {
            item.frozen = true;
          }
        }
      } else {
        break;
      }
      availableWidth = items.reduce((acc, cur) => acc - cur.size, containerWidth);
    }
    return items.map(({ size }) => size);
  };
  exports.getColumnWidths = getColumnWidths;
  const useColumnWidths2 = (columns, width) => {
    const columnsHash = columns.map(({ basis, minWidth, maxWidth, grow, shrink }) => [basis, minWidth, maxWidth, grow, shrink].join(",")).join("|");
    return (0, react_12.useMemo)(() => {
      if (width === void 0) {
        return {
          fullWidth: false,
          columnWidths: void 0,
          columnRights: void 0,
          totalWidth: void 0
        };
      }
      const columnWidths = (0, exports.getColumnWidths)(width, columns);
      let totalWidth = 0;
      const columnRights = columnWidths.map((w, i) => {
        totalWidth += w;
        return i === columnWidths.length - 1 ? Infinity : totalWidth;
      });
      return {
        fullWidth: Math.abs(width - totalWidth) < 0.1,
        columnWidths,
        columnRights,
        totalWidth
      };
    }, [width, columnsHash]);
  };
  exports.useColumnWidths = useColumnWidths2;
})(useColumnWidths);
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest$2(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$3;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$2 = freeGlobal || freeSelf || Function("return this")();
var _root = root$2;
var root$1 = _root;
var now$1 = function() {
  return root$1.Date.now();
};
var now_1 = now$1;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var _baseTrim = baseTrim$1;
var root = _root;
var Symbol$2 = root.Symbol;
var _Symbol = Symbol$2;
var Symbol$1 = _Symbol;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$3 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : void 0;
function baseGetTag$1(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$1;
function isObjectLike$1(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$1;
var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$1(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var isSymbol_1 = isSymbol$1;
var baseTrim = _baseTrim, isObject$2 = isObject_1, isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$2(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var isObject$1 = isObject_1, now = now_1, toNumber = toNumber_1;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_1 = debounce$1;
var debounce$2 = debounce_1, isObject = isObject_1;
var FUNC_ERROR_TEXT = "Expected a function";
function throttle$1(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce$2(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var throttle_1 = throttle$1;
var patchResizeHandler = function(resizeCallback, refreshMode, refreshRate, refreshOptions) {
  switch (refreshMode) {
    case "debounce":
      return debounce_1(resizeCallback, refreshRate, refreshOptions);
    case "throttle":
      return throttle_1(resizeCallback, refreshRate, refreshOptions);
    default:
      return resizeCallback;
  }
};
var isFunction = function(fn) {
  return typeof fn === "function";
};
var isSSR = function() {
  return typeof window === "undefined";
};
var isDOMElement = function(element) {
  return element instanceof Element || element instanceof HTMLDocument;
};
var createNotifier = function(onResize, setSize, handleWidth, handleHeight) {
  return function(_a) {
    var width = _a.width, height = _a.height;
    setSize(function(prev) {
      if (prev.width === width && prev.height === height) {
        return prev;
      }
      if (prev.width === width && !handleHeight || prev.height === height && !handleWidth) {
        return prev;
      }
      if (onResize && isFunction(onResize)) {
        onResize(width, height);
      }
      return { width, height };
    });
  };
};
var ResizeDetector = (
  /** @class */
  function(_super) {
    __extends(ResizeDetector2, _super);
    function ResizeDetector2(props) {
      var _this = _super.call(this, props) || this;
      _this.cancelHandler = function() {
        if (_this.resizeHandler && _this.resizeHandler.cancel) {
          _this.resizeHandler.cancel();
          _this.resizeHandler = null;
        }
      };
      _this.attachObserver = function() {
        var _a2 = _this.props, targetRef = _a2.targetRef, observerOptions = _a2.observerOptions;
        if (isSSR()) {
          return;
        }
        if (targetRef && targetRef.current) {
          _this.targetRef.current = targetRef.current;
        }
        var element = _this.getElement();
        if (!element) {
          return;
        }
        if (_this.observableElement && _this.observableElement === element) {
          return;
        }
        _this.observableElement = element;
        _this.resizeObserver.observe(element, observerOptions);
      };
      _this.getElement = function() {
        var _a2 = _this.props, querySelector = _a2.querySelector, targetDomEl = _a2.targetDomEl;
        if (isSSR())
          return null;
        if (querySelector)
          return document.querySelector(querySelector);
        if (targetDomEl && isDOMElement(targetDomEl))
          return targetDomEl;
        if (_this.targetRef && isDOMElement(_this.targetRef.current))
          return _this.targetRef.current;
        var currentElement = reactDomExports.findDOMNode(_this);
        if (!currentElement)
          return null;
        var renderType = _this.getRenderType();
        switch (renderType) {
          case "renderProp":
            return currentElement;
          case "childFunction":
            return currentElement;
          case "child":
            return currentElement;
          case "childArray":
            return currentElement;
          default:
            return currentElement.parentElement;
        }
      };
      _this.createResizeHandler = function(entries) {
        var _a2 = _this.props, _b = _a2.handleWidth, handleWidth = _b === void 0 ? true : _b, _c = _a2.handleHeight, handleHeight = _c === void 0 ? true : _c, onResize = _a2.onResize;
        if (!handleWidth && !handleHeight)
          return;
        var notifyResize = createNotifier(onResize, _this.setState.bind(_this), handleWidth, handleHeight);
        entries.forEach(function(entry) {
          var _a3 = entry && entry.contentRect || {}, width = _a3.width, height = _a3.height;
          var shouldSetSize = !_this.skipOnMount && !isSSR();
          if (shouldSetSize) {
            notifyResize({ width, height });
          }
          _this.skipOnMount = false;
        });
      };
      _this.getRenderType = function() {
        var _a2 = _this.props, render = _a2.render, children = _a2.children;
        if (isFunction(render)) {
          return "renderProp";
        }
        if (isFunction(children)) {
          return "childFunction";
        }
        if (reactExports.isValidElement(children)) {
          return "child";
        }
        if (Array.isArray(children)) {
          return "childArray";
        }
        return "parent";
      };
      var skipOnMount = props.skipOnMount, refreshMode = props.refreshMode, _a = props.refreshRate, refreshRate = _a === void 0 ? 1e3 : _a, refreshOptions = props.refreshOptions;
      _this.state = {
        width: void 0,
        height: void 0
      };
      _this.skipOnMount = skipOnMount;
      _this.targetRef = reactExports.createRef();
      _this.observableElement = null;
      if (isSSR()) {
        return _this;
      }
      _this.resizeHandler = patchResizeHandler(_this.createResizeHandler, refreshMode, refreshRate, refreshOptions);
      _this.resizeObserver = new window.ResizeObserver(_this.resizeHandler);
      return _this;
    }
    ResizeDetector2.prototype.componentDidMount = function() {
      this.attachObserver();
    };
    ResizeDetector2.prototype.componentDidUpdate = function() {
      this.attachObserver();
    };
    ResizeDetector2.prototype.componentWillUnmount = function() {
      if (isSSR()) {
        return;
      }
      this.observableElement = null;
      this.resizeObserver.disconnect();
      this.cancelHandler();
    };
    ResizeDetector2.prototype.render = function() {
      var _a = this.props, render = _a.render, children = _a.children, _b = _a.nodeType, WrapperTag = _b === void 0 ? "div" : _b;
      var _c = this.state, width = _c.width, height = _c.height;
      var childProps = { width, height, targetRef: this.targetRef };
      var renderType = this.getRenderType();
      var typedChildren;
      switch (renderType) {
        case "renderProp":
          return render && render(childProps);
        case "childFunction":
          typedChildren = children;
          return typedChildren(childProps);
        case "child":
          typedChildren = children;
          if (typedChildren.type && typeof typedChildren.type === "string") {
            childProps.targetRef;
            var nativeProps = __rest$2(childProps, ["targetRef"]);
            return reactExports.cloneElement(typedChildren, nativeProps);
          }
          return reactExports.cloneElement(typedChildren, childProps);
        case "childArray":
          typedChildren = children;
          return typedChildren.map(function(el) {
            return !!el && reactExports.cloneElement(el, childProps);
          });
        default:
          return reactExports.createElement(WrapperTag, null);
      }
    };
    return ResizeDetector2;
  }(reactExports.PureComponent)
);
function withResizeDetector(ComponentInner, options) {
  if (options === void 0) {
    options = {};
  }
  var ResizeDetectorHOC = (
    /** @class */
    function(_super) {
      __extends(ResizeDetectorHOC2, _super);
      function ResizeDetectorHOC2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = reactExports.createRef();
        return _this;
      }
      ResizeDetectorHOC2.prototype.render = function() {
        var _a = this.props, forwardedRef = _a.forwardedRef, rest = __rest$2(_a, ["forwardedRef"]);
        var targetRef = forwardedRef !== null && forwardedRef !== void 0 ? forwardedRef : this.ref;
        return reactExports.createElement(
          ResizeDetector,
          __assign({}, options, { targetRef }),
          reactExports.createElement(ComponentInner, __assign({ targetRef }, rest))
        );
      };
      return ResizeDetectorHOC2;
    }(reactExports.Component)
  );
  function forwardRefWrapper(props, ref) {
    return reactExports.createElement(ResizeDetectorHOC, __assign({}, props, { forwardedRef: ref }));
  }
  var name = ComponentInner.displayName || ComponentInner.name;
  forwardRefWrapper.displayName = "withResizeDetector(".concat(name, ")");
  return reactExports.forwardRef(forwardRefWrapper);
}
var useEnhancedEffect = isSSR() ? reactExports.useEffect : reactExports.useLayoutEffect;
function useResizeDetector(props) {
  if (props === void 0) {
    props = {};
  }
  var _a = props.skipOnMount, skipOnMount = _a === void 0 ? false : _a, refreshMode = props.refreshMode, _b = props.refreshRate, refreshRate = _b === void 0 ? 1e3 : _b, refreshOptions = props.refreshOptions, _c = props.handleWidth, handleWidth = _c === void 0 ? true : _c, _d = props.handleHeight, handleHeight = _d === void 0 ? true : _d, targetRef = props.targetRef, observerOptions = props.observerOptions, onResize = props.onResize;
  var skipResize = reactExports.useRef(skipOnMount);
  var localRef = reactExports.useRef(null);
  var ref = targetRef !== null && targetRef !== void 0 ? targetRef : localRef;
  var resizeHandler = reactExports.useRef();
  var _e = reactExports.useState({
    width: void 0,
    height: void 0
  }), size = _e[0], setSize = _e[1];
  useEnhancedEffect(function() {
    if (isSSR()) {
      return;
    }
    var notifyResize = createNotifier(onResize, setSize, handleWidth, handleHeight);
    var resizeCallback = function(entries) {
      if (!handleWidth && !handleHeight)
        return;
      entries.forEach(function(entry) {
        var _a2 = entry && entry.contentRect || {}, width = _a2.width, height = _a2.height;
        var shouldSetSize = !skipResize.current && !isSSR();
        if (shouldSetSize) {
          notifyResize({ width, height });
        }
        skipResize.current = false;
      });
    };
    resizeHandler.current = patchResizeHandler(resizeCallback, refreshMode, refreshRate, refreshOptions);
    var resizeObserver = new window.ResizeObserver(resizeHandler.current);
    if (ref.current) {
      resizeObserver.observe(ref.current, observerOptions);
    }
    return function() {
      resizeObserver.disconnect();
      var patchedResizeHandler = resizeHandler.current;
      if (patchedResizeHandler && patchedResizeHandler.cancel) {
        patchedResizeHandler.cancel();
      }
    };
  }, [refreshMode, refreshRate, refreshOptions, handleWidth, handleHeight, onResize, observerOptions, ref.current]);
  return __assign({ ref }, size);
}
const index_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ResizeDetector,
  useResizeDetector,
  withResizeDetector
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(index_esm);
var useColumns = {};
(function(exports) {
  var __createBinding2 = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault2 = commonjsGlobal$1 && commonjsGlobal$1.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar2 = commonjsGlobal$1 && commonjsGlobal$1.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding2(result, mod, k);
    }
    __setModuleDefault2(result, mod);
    return result;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.useColumns = exports.parseFlexValue = void 0;
  const react_12 = __importStar2(reactExports);
  const defaultComponent = () => react_12.default.createElement(react_12.default.Fragment, null);
  const defaultIsCellEmpty = () => false;
  const identityRow = ({ rowData }) => rowData;
  const defaultCopyValue = () => null;
  const defaultGutterComponent = ({ rowIndex }) => react_12.default.createElement(react_12.default.Fragment, null, rowIndex + 1);
  const cellAlwaysEmpty = () => true;
  const defaultPrePasteValues = (values) => values;
  const parseFlexValue = (value) => {
    if (typeof value === "number") {
      return {
        basis: 0,
        grow: value,
        shrink: 1
      };
    }
    if (value.match(/^ *\d+(\.\d*)? *$/)) {
      return {
        basis: 0,
        grow: parseFloat(value.trim()),
        shrink: 1
      };
    }
    if (value.match(/^ *\d+(\.\d*)? *px *$/)) {
      return {
        basis: parseFloat(value.trim()),
        grow: 1,
        shrink: 1
      };
    }
    if (value.match(/^ *\d+(\.\d*)? \d+(\.\d*)? *$/)) {
      const [grow, shrink] = value.trim().split(" ");
      return {
        basis: 0,
        grow: parseFloat(grow),
        shrink: parseFloat(shrink)
      };
    }
    if (value.match(/^ *\d+(\.\d*)? \d+(\.\d*)? *px *$/)) {
      const [grow, basis] = value.trim().split(" ");
      return {
        basis: parseFloat(basis),
        grow: parseFloat(grow),
        shrink: 1
      };
    }
    if (value.match(/^ *\d+(\.\d*)? \d+(\.\d*)? \d+(\.\d*)? *px *$/)) {
      const [grow, shrink, basis] = value.trim().split(" ");
      return {
        basis: parseFloat(basis),
        grow: parseFloat(grow),
        shrink: parseFloat(shrink)
      };
    }
    return {
      basis: 0,
      grow: 1,
      shrink: 1
    };
  };
  exports.parseFlexValue = parseFlexValue;
  const useColumns2 = (columns, gutterColumn, stickyRightColumn) => {
    return (0, react_12.useMemo)(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      const partialColumns = [
        gutterColumn === false ? {
          basis: 0,
          grow: 0,
          shrink: 0,
          minWidth: 0,
          // eslint-disable-next-line react/display-name
          component: () => react_12.default.createElement(react_12.default.Fragment, null),
          headerClassName: "dsg-hidden-cell",
          cellClassName: "dsg-hidden-cell",
          isCellEmpty: cellAlwaysEmpty
        } : Object.assign(Object.assign({}, gutterColumn), { basis: (_a = gutterColumn === null || gutterColumn === void 0 ? void 0 : gutterColumn.basis) !== null && _a !== void 0 ? _a : 40, grow: (_b = gutterColumn === null || gutterColumn === void 0 ? void 0 : gutterColumn.grow) !== null && _b !== void 0 ? _b : 0, shrink: (_c = gutterColumn === null || gutterColumn === void 0 ? void 0 : gutterColumn.shrink) !== null && _c !== void 0 ? _c : 0, minWidth: (_d = gutterColumn === null || gutterColumn === void 0 ? void 0 : gutterColumn.minWidth) !== null && _d !== void 0 ? _d : 0, title: (_e = gutterColumn === null || gutterColumn === void 0 ? void 0 : gutterColumn.title) !== null && _e !== void 0 ? _e : react_12.default.createElement("div", { className: "dsg-corner-indicator" }), component: (_f = gutterColumn === null || gutterColumn === void 0 ? void 0 : gutterColumn.component) !== null && _f !== void 0 ? _f : defaultGutterComponent, isCellEmpty: cellAlwaysEmpty }),
        ...columns
      ];
      if (stickyRightColumn) {
        partialColumns.push(Object.assign(Object.assign({}, stickyRightColumn), { basis: (_g = stickyRightColumn === null || stickyRightColumn === void 0 ? void 0 : stickyRightColumn.basis) !== null && _g !== void 0 ? _g : 40, grow: (_h = stickyRightColumn === null || stickyRightColumn === void 0 ? void 0 : stickyRightColumn.grow) !== null && _h !== void 0 ? _h : 0, shrink: (_j = stickyRightColumn === null || stickyRightColumn === void 0 ? void 0 : stickyRightColumn.shrink) !== null && _j !== void 0 ? _j : 0, minWidth: (_k = stickyRightColumn.minWidth) !== null && _k !== void 0 ? _k : 0, isCellEmpty: cellAlwaysEmpty }));
      }
      return partialColumns.map((column) => {
        var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _j2, _k2, _l, _m, _o, _p, _q, _r;
        const legacyWidth = column.width !== void 0 ? (0, exports.parseFlexValue)(column.width) : {
          basis: void 0,
          grow: void 0,
          shrink: void 0
        };
        return Object.assign(Object.assign({}, column), { basis: (_b2 = (_a2 = column.basis) !== null && _a2 !== void 0 ? _a2 : legacyWidth.basis) !== null && _b2 !== void 0 ? _b2 : 0, grow: (_d2 = (_c2 = column.grow) !== null && _c2 !== void 0 ? _c2 : legacyWidth.grow) !== null && _d2 !== void 0 ? _d2 : 1, shrink: (_f2 = (_e2 = column.shrink) !== null && _e2 !== void 0 ? _e2 : legacyWidth.shrink) !== null && _f2 !== void 0 ? _f2 : 1, minWidth: (_g2 = column.minWidth) !== null && _g2 !== void 0 ? _g2 : 100, component: (_h2 = column.component) !== null && _h2 !== void 0 ? _h2 : defaultComponent, disableKeys: (_j2 = column.disableKeys) !== null && _j2 !== void 0 ? _j2 : false, disabled: (_k2 = column.disabled) !== null && _k2 !== void 0 ? _k2 : false, keepFocus: (_l = column.keepFocus) !== null && _l !== void 0 ? _l : false, deleteValue: (_m = column.deleteValue) !== null && _m !== void 0 ? _m : identityRow, copyValue: (_o = column.copyValue) !== null && _o !== void 0 ? _o : defaultCopyValue, pasteValue: (_p = column.pasteValue) !== null && _p !== void 0 ? _p : identityRow, prePasteValues: (_q = column.prePasteValues) !== null && _q !== void 0 ? _q : defaultPrePasteValues, isCellEmpty: (_r = column.isCellEmpty) !== null && _r !== void 0 ? _r : defaultIsCellEmpty });
      });
    }, [gutterColumn, stickyRightColumn, columns]);
  };
  exports.useColumns = useColumns2;
})(useColumns);
var useEdges$1 = {};
var cjs = {};
Object.defineProperty(cjs, "__esModule", { value: true });
function throttle(delay2, noTrailing, callback, debounceMode) {
  var timeoutID;
  var cancelled = false;
  var lastExec = 0;
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }
  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  }
  if (typeof noTrailing !== "boolean") {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = void 0;
  }
  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }
    var self2 = this;
    var elapsed = Date.now() - lastExec;
    if (cancelled) {
      return;
    }
    function exec() {
      lastExec = Date.now();
      callback.apply(self2, arguments_);
    }
    function clear() {
      timeoutID = void 0;
    }
    if (debounceMode && !timeoutID) {
      exec();
    }
    clearExistingTimeout();
    if (debounceMode === void 0 && elapsed > delay2) {
      exec();
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === void 0 ? delay2 - elapsed : delay2);
    }
  }
  wrapper.cancel = cancel;
  return wrapper;
}
function debounce(delay2, atBegin, callback) {
  return callback === void 0 ? throttle(delay2, atBegin, false) : throttle(delay2, callback, atBegin !== false);
}
cjs.debounce = debounce;
cjs.throttle = throttle;
var useDeepEqualState$1 = {};
var fastDeepEqual = function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys2;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys2 = Object.keys(a);
    length = keys2.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys2[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys2[i];
      if (!equal(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
var __importDefault$6 = commonjsGlobal$1 && commonjsGlobal$1.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(useDeepEqualState$1, "__esModule", { value: true });
useDeepEqualState$1.useDeepEqualState = void 0;
const react_1$f = reactExports;
const fast_deep_equal_1 = __importDefault$6(fastDeepEqual);
const useDeepEqualState = (defaultValue) => {
  const [value, setValue] = (0, react_1$f.useState)(defaultValue);
  const customSetValue = (0, react_1$f.useCallback)((newValue) => {
    setValue((prevValue) => {
      const nextValue = typeof newValue === "function" ? newValue(prevValue) : newValue;
      return (0, fast_deep_equal_1.default)(nextValue, prevValue) ? prevValue : nextValue;
    });
  }, [setValue]);
  return [value, customSetValue];
};
useDeepEqualState$1.useDeepEqualState = useDeepEqualState;
Object.defineProperty(useEdges$1, "__esModule", { value: true });
useEdges$1.useEdges = void 0;
const react_1$e = reactExports;
const throttle_debounce_1$2 = cjs;
const useDeepEqualState_1 = useDeepEqualState$1;
const useEdges = (ref, width, height) => {
  const [edges, setEdges] = (0, useDeepEqualState_1.useDeepEqualState)({
    top: true,
    right: true,
    bottom: true,
    left: true
  });
  (0, react_1$e.useEffect)(() => {
    const onScroll = (0, throttle_debounce_1$2.throttle)(100, () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      setEdges({
        top: ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollTop) === 0,
        right: ((_c = (_b = ref.current) === null || _b === void 0 ? void 0 : _b.scrollLeft) !== null && _c !== void 0 ? _c : 0) >= ((_e = (_d = ref.current) === null || _d === void 0 ? void 0 : _d.scrollWidth) !== null && _e !== void 0 ? _e : 0) - (width !== null && width !== void 0 ? width : 0) - 1,
        bottom: ((_g = (_f = ref.current) === null || _f === void 0 ? void 0 : _f.scrollTop) !== null && _g !== void 0 ? _g : 0) >= ((_j = (_h = ref.current) === null || _h === void 0 ? void 0 : _h.scrollHeight) !== null && _j !== void 0 ? _j : 0) - (height !== null && height !== void 0 ? height : 0) - 1,
        left: ((_k = ref.current) === null || _k === void 0 ? void 0 : _k.scrollLeft) === 0
      });
    });
    const current = ref.current;
    current === null || current === void 0 ? void 0 : current.addEventListener("scroll", onScroll);
    setTimeout(onScroll, 100);
    return () => {
      current === null || current === void 0 ? void 0 : current.removeEventListener("scroll", onScroll);
      onScroll.cancel();
    };
  }, [height, width, ref, setEdges]);
  return edges;
};
useEdges$1.useEdges = useEdges;
var useDocumentEventListener$1 = {};
Object.defineProperty(useDocumentEventListener$1, "__esModule", { value: true });
useDocumentEventListener$1.useDocumentEventListener = void 0;
const react_1$d = reactExports;
const useDocumentEventListener = (type, listener) => {
  (0, react_1$d.useEffect)(() => {
    document.addEventListener(type, listener);
    return () => {
      document.removeEventListener(type, listener);
    };
  }, [listener, type]);
};
useDocumentEventListener$1.useDocumentEventListener = useDocumentEventListener;
var useGetBoundingClientRect$1 = {};
Object.defineProperty(useGetBoundingClientRect$1, "__esModule", { value: true });
useGetBoundingClientRect$1.useGetBoundingClientRect = void 0;
const react_1$c = reactExports;
const throttle_debounce_1$1 = cjs;
const useGetBoundingClientRect = (ref, delay2 = 200) => {
  const boundingRect = (0, react_1$c.useRef)(null);
  const throttledCompute = (0, react_1$c.useMemo)(() => (0, throttle_debounce_1$1.throttle)(delay2, true, () => {
    setTimeout(() => {
      var _a;
      return boundingRect.current = ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || null;
    }, 0);
  }), [ref, delay2]);
  return (0, react_1$c.useCallback)((force = false) => {
    var _a;
    if (force) {
      boundingRect.current = ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || null;
    } else {
      throttledCompute();
    }
    return boundingRect.current;
  }, [ref, throttledCompute]);
};
useGetBoundingClientRect$1.useGetBoundingClientRect = useGetBoundingClientRect;
var AddRows = {};
(function(exports) {
  var __createBinding2 = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault2 = commonjsGlobal$1 && commonjsGlobal$1.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar2 = commonjsGlobal$1 && commonjsGlobal$1.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding2(result, mod, k);
    }
    __setModuleDefault2(result, mod);
    return result;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.AddRows = exports.createAddRowsComponent = void 0;
  const react_12 = __importStar2(reactExports);
  const createAddRowsComponent = (translationKeys = {}) => (
    // eslint-disable-next-line react/display-name
    ({ addRows }) => {
      var _a, _b;
      const [value, setValue] = (0, react_12.useState)(1);
      const [rawValue, setRawValue] = (0, react_12.useState)(String(value));
      return react_12.default.createElement(
        "div",
        { className: "dsg-add-row" },
        react_12.default.createElement("button", { type: "button", className: "dsg-add-row-btn", onClick: () => addRows(value) }, (_a = translationKeys.button) !== null && _a !== void 0 ? _a : "Add"),
        " ",
        react_12.default.createElement("input", { className: "dsg-add-row-input", value: rawValue, onBlur: () => setRawValue(String(value)), type: "number", min: 1, onChange: (e) => {
          setRawValue(e.target.value);
          setValue(Math.max(1, Math.round(parseInt(e.target.value) || 0)));
        }, onKeyDown: (event) => {
          if (event.key === "Enter") {
            addRows(value);
          }
        } }),
        " ",
        (_b = translationKeys.unit) !== null && _b !== void 0 ? _b : "rows"
      );
    }
  );
  exports.createAddRowsComponent = createAddRowsComponent;
  exports.AddRows = (0, exports.createAddRowsComponent)();
  exports.AddRows.displayName = "AddRows";
})(AddRows);
var useDebounceState$1 = {};
Object.defineProperty(useDebounceState$1, "__esModule", { value: true });
useDebounceState$1.useDebounceState = void 0;
const react_1$b = reactExports;
const throttle_debounce_1 = cjs;
const useDebounceState = (defaultValue, delay2) => {
  const [debouncedValue, setDebouncedValue] = (0, react_1$b.useState)(defaultValue);
  const cancelRef = (0, react_1$b.useRef)();
  (0, react_1$b.useEffect)(() => () => {
    var _a;
    return (_a = cancelRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
  }, []);
  const setValue = (0, react_1$b.useMemo)(() => cancelRef.current = (0, throttle_debounce_1.debounce)(delay2, (newValue) => {
    setDebouncedValue(newValue);
  }), [delay2]);
  return [debouncedValue, setValue];
};
useDebounceState$1.useDebounceState = useDebounceState;
var ContextMenu = {};
(function(exports) {
  var __createBinding2 = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault2 = commonjsGlobal$1 && commonjsGlobal$1.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar2 = commonjsGlobal$1 && commonjsGlobal$1.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding2(result, mod, k);
    }
    __setModuleDefault2(result, mod);
    return result;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ContextMenu = exports.createContextMenuComponent = exports.defaultRenderItem = void 0;
  const React = __importStar2(reactExports);
  const react_12 = reactExports;
  const useDocumentEventListener_1 = useDocumentEventListener$1;
  const defaultRenderItem = (item) => {
    if (item.type === "CUT") {
      return React.createElement(React.Fragment, null, "Cut");
    }
    if (item.type === "COPY") {
      return React.createElement(React.Fragment, null, "Copy");
    }
    if (item.type === "PASTE") {
      return React.createElement(React.Fragment, null, "Paste");
    }
    if (item.type === "DELETE_ROW") {
      return React.createElement(React.Fragment, null, "Delete row");
    }
    if (item.type === "DELETE_ROWS") {
      return React.createElement(
        React.Fragment,
        null,
        "Delete rows ",
        React.createElement("b", null, item.fromRow),
        " to ",
        React.createElement("b", null, item.toRow)
      );
    }
    if (item.type === "INSERT_ROW_BELLOW") {
      return React.createElement(React.Fragment, null, "Insert row below");
    }
    if (item.type === "DUPLICATE_ROW") {
      return React.createElement(React.Fragment, null, "Duplicate row");
    }
    if (item.type === "DUPLICATE_ROWS") {
      return React.createElement(
        React.Fragment,
        null,
        "Duplicate rows ",
        React.createElement("b", null, item.fromRow),
        " to ",
        React.createElement("b", null, item.toRow)
      );
    }
    return item.type;
  };
  exports.defaultRenderItem = defaultRenderItem;
  const createContextMenuComponent = (renderItem = exports.defaultRenderItem) => (
    // eslint-disable-next-line react/display-name
    ({ clientX, clientY, items, close }) => {
      const containerRef = (0, react_12.useRef)(null);
      const onClickOutside = (0, react_12.useCallback)((event) => {
        var _a;
        const clickInside = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target);
        if (!clickInside) {
          close();
        }
      }, [close]);
      (0, useDocumentEventListener_1.useDocumentEventListener)("mousedown", onClickOutside);
      return React.createElement("div", { className: "dsg-context-menu", style: { left: clientX + "px", top: clientY + "px" }, ref: containerRef }, items.map((item) => React.createElement("div", { key: item.type, onClick: item.action, className: "dsg-context-menu-item" }, renderItem(item))));
    }
  );
  exports.createContextMenuComponent = createContextMenuComponent;
  exports.ContextMenu = (0, exports.createContextMenuComponent)(exports.defaultRenderItem);
  exports.ContextMenu.displayName = "ContextMenu";
})(ContextMenu);
var copyPasting = {};
var domParser = {};
Object.defineProperty(domParser, "__esModule", { value: true });
domParser.parseDom = void 0;
const parser = typeof DOMParser !== "undefined" ? new DOMParser() : { parseFromString: () => null };
const parseDom = (html) => {
  return parser.parseFromString(html, "text/html");
};
domParser.parseDom = parseDom;
Object.defineProperty(copyPasting, "__esModule", { value: true });
copyPasting.encodeHtml = copyPasting.parseTextPlainData = copyPasting.parseTextHtmlData = void 0;
const domParser_1 = domParser;
const parseTextHtmlData = (data) => {
  var _a, _b;
  const doc = (0, domParser_1.parseDom)(data.replace(/<br\/?>/g, "\n"));
  const table = doc.getElementsByTagName("table")[0];
  if (table) {
    const rows = [];
    for (let i = 0; i < table.rows.length; i++) {
      const row = [];
      rows.push(row);
      for (let j = 0; j < table.rows[i].cells.length; j++) {
        row.push((_a = table.rows[i].cells[j].textContent) !== null && _a !== void 0 ? _a : "");
      }
    }
    return rows;
  }
  const span = doc.getElementsByTagName("span")[0];
  if (span) {
    return [[(_b = span.textContent) !== null && _b !== void 0 ? _b : ""]];
  }
  return [[""]];
};
copyPasting.parseTextHtmlData = parseTextHtmlData;
const parseTextPlainData = (data) => {
  const cleanData = data.replace(/\r|\n$/g, "");
  const output = [[]];
  let cursor = 0;
  let startCell = 0;
  let quoted = false;
  let lastRowIndex = 0;
  const saveCell = () => {
    let str = cleanData.slice(startCell, cursor);
    if (quoted && str[str.length - 1] === '"' && str.includes("\n")) {
      str = str.slice(1, str.length - 1).replace(/""/g, '"');
    }
    if (quoted && str[str.length - 1] !== '"') {
      str.split("\n").forEach((cell, i, { length }) => {
        output[lastRowIndex].push(cell);
        if (i < length - 1) {
          output.push([]);
          lastRowIndex++;
        }
      });
    } else {
      output[lastRowIndex].push(str);
    }
  };
  while (cursor < cleanData.length) {
    if (quoted && cleanData[cursor] === '"' && ![void 0, "	", '"'].includes(cleanData[cursor + 1])) {
      quoted = false;
    }
    if (quoted && cleanData[cursor] === '"' && cleanData[cursor + 1] === '"') {
      cursor++;
    }
    if (cursor === startCell && cleanData[cursor] === '"') {
      quoted = true;
    }
    if (cleanData[cursor] === "	") {
      saveCell();
      startCell = cursor + 1;
      quoted = false;
    }
    if (cleanData[cursor] === "\n" && !quoted) {
      saveCell();
      output.push([]);
      startCell = cursor + 1;
      lastRowIndex++;
    }
    cursor++;
  }
  saveCell();
  return output;
};
copyPasting.parseTextPlainData = parseTextPlainData;
const encodeHtml = (str) => {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
};
copyPasting.encodeHtml = encodeHtml;
var typeCheck = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.getSelectionWithId = exports.getSelection = exports.getCellWithId = exports.getCell = void 0;
  const getCell = (value, colMax, rowMax, columns) => {
    if (value === null || !colMax || !rowMax) {
      return null;
    }
    if (typeof value !== "object") {
      throw new Error("Value must be an object or null");
    }
    const colIndex = columns.findIndex((column) => column.id === value.col);
    const cell = {
      col: Math.max(0, Math.min(colMax - 1, colIndex === -1 ? Number(value.col) : colIndex - 1)),
      row: Math.max(0, Math.min(rowMax - 1, Number(value.row)))
    };
    if (isNaN(cell.col) || isNaN(cell.row)) {
      throw new Error("col or cell are not valid positive numbers");
    }
    return cell;
  };
  exports.getCell = getCell;
  const getCellWithId = (cell, columns) => {
    var _a;
    return cell ? {
      col: cell.col,
      row: cell.row,
      colId: (_a = columns[cell.col + 1]) === null || _a === void 0 ? void 0 : _a.id
    } : null;
  };
  exports.getCellWithId = getCellWithId;
  const getSelection = (value, colMax, rowMax, columns) => {
    if (value === null || !colMax || !rowMax) {
      return null;
    }
    if (typeof value !== "object") {
      throw new Error("Value must be an object or null");
    }
    const selection = {
      min: (0, exports.getCell)(value.min, colMax, rowMax, columns),
      max: (0, exports.getCell)(value.max, colMax, rowMax, columns)
    };
    if (!selection.min || !selection.max) {
      throw new Error("min and max must be defined");
    }
    return selection;
  };
  exports.getSelection = getSelection;
  const getSelectionWithId = (selection, columns) => selection ? {
    min: (0, exports.getCellWithId)(selection.min, columns),
    max: (0, exports.getCellWithId)(selection.max, columns)
  } : null;
  exports.getSelectionWithId = getSelectionWithId;
})(typeCheck);
var tab = {};
Object.defineProperty(tab, "__esModule", { value: true });
tab.getAllTabbableElements = void 0;
const getAllTabbableElements = () => Array.from(document.querySelectorAll("*")).filter((element) => {
  return element instanceof HTMLElement && typeof element.tabIndex === "number" && element.tabIndex >= 0 && !element.disabled && (!(element instanceof HTMLAnchorElement) || !!element.href || element.getAttribute("tabIndex") !== null) && getComputedStyle(element).visibility !== "collapse";
});
tab.getAllTabbableElements = getAllTabbableElements;
var Grid$1 = {};
var lib$1 = {};
var _rollupPluginBabelHelpers$2 = {};
/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function _extends2() {
    _extends2 = Object.assign ? Object.assign.bind() : function(target) {
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
    return _extends2.apply(this, arguments);
  }
  exports["extends"] = _extends2;
})(_rollupPluginBabelHelpers$2);
var lib = {};
var _rollupPluginBabelHelpers$1 = {};
/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function _extends2() {
    _extends2 = Object.assign ? Object.assign.bind() : function(target) {
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
    return _extends2.apply(this, arguments);
  }
  exports["extends"] = _extends2;
})(_rollupPluginBabelHelpers$1);
var utils$1 = {};
/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(utils$1, "__esModule", { value: true });
function memo(getDeps, fn, opts) {
  var _opts$initialDeps;
  var deps = (_opts$initialDeps = opts.initialDeps) != null ? _opts$initialDeps : [];
  var result;
  return function() {
    var depTime;
    if (opts.key && opts.debug != null && opts.debug())
      depTime = Date.now();
    var newDeps = getDeps();
    var depsChanged = newDeps.length !== deps.length || newDeps.some(function(dep, index) {
      return deps[index] !== dep;
    });
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    var resultTime;
    if (opts.key && opts.debug != null && opts.debug())
      resultTime = Date.now();
    result = fn.apply(void 0, newDeps);
    if (opts.key && opts.debug != null && opts.debug()) {
      var depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      var resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      var resultFpsPercentage = resultEndTime / 16;
      var pad = function pad2(str, num) {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info("%c⏱ " + pad(resultEndTime, 5) + " /" + pad(depEndTime, 5) + " ms", "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(" + Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120)) + "deg 100% 31%);", opts == null ? void 0 : opts.key);
    }
    opts == null || opts.onChange == null || opts.onChange(result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error("Unexpected undefined" + (msg ? ": " + msg : ""));
  } else {
    return value;
  }
}
var approxEqual = function approxEqual2(a, b) {
  return Math.abs(a - b) < 1;
};
utils$1.approxEqual = approxEqual;
utils$1.memo = memo;
utils$1.notUndefined = notUndefined;
/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(lib, "__esModule", { value: true });
var _rollupPluginBabelHelpers = _rollupPluginBabelHelpers$1;
var utils = utils$1;
var defaultKeyExtractor = function defaultKeyExtractor2(index) {
  return index;
};
var defaultRangeExtractor = function defaultRangeExtractor2(range) {
  var start = Math.max(range.startIndex - range.overscan, 0);
  var end = Math.min(range.endIndex + range.overscan, range.count - 1);
  var arr = [];
  for (var _i = start; _i <= end; _i++) {
    arr.push(_i);
  }
  return arr;
};
var observeElementRect = function observeElementRect2(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler2(rect) {
    var width = rect.width, height = rect.height;
    cb({
      width: Math.round(width),
      height: Math.round(height)
    });
  };
  handler(element.getBoundingClientRect());
  var observer = new ResizeObserver(function(entries) {
    var entry = entries[0];
    if (entry != null && entry.borderBoxSize) {
      var box = entry.borderBoxSize[0];
      if (box) {
        handler({
          width: box.inlineSize,
          height: box.blockSize
        });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, {
    box: "border-box"
  });
  return function() {
    observer.unobserve(element);
  };
};
var observeWindowRect = function observeWindowRect2(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler2() {
    cb({
      width: element.innerWidth,
      height: element.innerHeight
    });
  };
  handler();
  element.addEventListener("resize", handler, {
    passive: true
  });
  return function() {
    element.removeEventListener("resize", handler);
  };
};
var observeElementOffset = function observeElementOffset2(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler2() {
    cb(element[instance.options.horizontal ? "scrollLeft" : "scrollTop"]);
  };
  handler();
  element.addEventListener("scroll", handler, {
    passive: true
  });
  return function() {
    element.removeEventListener("scroll", handler);
  };
};
var observeWindowOffset = function observeWindowOffset2(instance, cb) {
  var element = instance.scrollElement;
  if (!element) {
    return;
  }
  var handler = function handler2() {
    cb(element[instance.options.horizontal ? "scrollX" : "scrollY"]);
  };
  handler();
  element.addEventListener("scroll", handler, {
    passive: true
  });
  return function() {
    element.removeEventListener("scroll", handler);
  };
};
var measureElement = function measureElement2(element, entry, instance) {
  if (entry != null && entry.borderBoxSize) {
    var box = entry.borderBoxSize[0];
    if (box) {
      var size = Math.round(box[instance.options.horizontal ? "inlineSize" : "blockSize"]);
      return size;
    }
  }
  return Math.round(element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]);
};
var windowScroll = function windowScroll2(offset, _ref, instance) {
  var _instance$scrollEleme, _instance$scrollEleme2;
  var _ref$adjustments = _ref.adjustments, adjustments = _ref$adjustments === void 0 ? 0 : _ref$adjustments, behavior = _ref.behavior;
  var toOffset = offset + adjustments;
  (_instance$scrollEleme = instance.scrollElement) == null || _instance$scrollEleme.scrollTo == null || _instance$scrollEleme.scrollTo((_instance$scrollEleme2 = {}, _instance$scrollEleme2[instance.options.horizontal ? "left" : "top"] = toOffset, _instance$scrollEleme2.behavior = behavior, _instance$scrollEleme2));
};
var elementScroll = function elementScroll2(offset, _ref2, instance) {
  var _instance$scrollEleme3, _instance$scrollEleme4;
  var _ref2$adjustments = _ref2.adjustments, adjustments = _ref2$adjustments === void 0 ? 0 : _ref2$adjustments, behavior = _ref2.behavior;
  var toOffset = offset + adjustments;
  (_instance$scrollEleme3 = instance.scrollElement) == null || _instance$scrollEleme3.scrollTo == null || _instance$scrollEleme3.scrollTo((_instance$scrollEleme4 = {}, _instance$scrollEleme4[instance.options.horizontal ? "left" : "top"] = toOffset, _instance$scrollEleme4.behavior = behavior, _instance$scrollEleme4));
};
var Virtualizer = function Virtualizer2(_opts) {
  var _this = this;
  this.unsubs = [];
  this.scrollElement = null;
  this.isScrolling = false;
  this.isScrollingTimeoutId = null;
  this.scrollToIndexTimeoutId = null;
  this.measurementsCache = [];
  this.itemSizeCache = /* @__PURE__ */ new Map();
  this.pendingMeasuredCacheIndexes = [];
  this.scrollDirection = null;
  this.scrollAdjustments = 0;
  this.measureElementCache = /* @__PURE__ */ new Map();
  this.observer = function() {
    var _ro = null;
    var get2 = function get22() {
      if (_ro) {
        return _ro;
      } else if (typeof ResizeObserver !== "undefined") {
        return _ro = new ResizeObserver(function(entries) {
          entries.forEach(function(entry) {
            _this._measureElement(entry.target, entry);
          });
        });
      } else {
        return null;
      }
    };
    return {
      disconnect: function disconnect() {
        var _get;
        return (_get = get2()) == null ? void 0 : _get.disconnect();
      },
      observe: function observe(target) {
        var _get2;
        return (_get2 = get2()) == null ? void 0 : _get2.observe(target, {
          box: "border-box"
        });
      },
      unobserve: function unobserve(target) {
        var _get3;
        return (_get3 = get2()) == null ? void 0 : _get3.unobserve(target);
      }
    };
  }();
  this.range = null;
  this.setOptions = function(opts) {
    Object.entries(opts).forEach(function(_ref3) {
      var key = _ref3[0], value = _ref3[1];
      if (typeof value === "undefined")
        delete opts[key];
    });
    _this.options = _rollupPluginBabelHelpers["extends"]({
      debug: false,
      initialOffset: 0,
      overscan: 1,
      paddingStart: 0,
      paddingEnd: 0,
      scrollPaddingStart: 0,
      scrollPaddingEnd: 0,
      horizontal: false,
      getItemKey: defaultKeyExtractor,
      rangeExtractor: defaultRangeExtractor,
      onChange: function onChange() {
      },
      measureElement,
      initialRect: {
        width: 0,
        height: 0
      },
      scrollMargin: 0,
      scrollingDelay: 150,
      indexAttribute: "data-index",
      initialMeasurementsCache: [],
      lanes: 1
    }, opts);
  };
  this.notify = function(sync) {
    _this.options.onChange == null || _this.options.onChange(_this, sync);
  };
  this.maybeNotify = utils.memo(function() {
    _this.calculateRange();
    return [_this.isScrolling, _this.range ? _this.range.startIndex : null, _this.range ? _this.range.endIndex : null];
  }, function(isScrolling) {
    _this.notify(isScrolling);
  }, {
    key: false,
    debug: function debug() {
      return _this.options.debug;
    },
    initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
  });
  this.cleanup = function() {
    _this.unsubs.filter(Boolean).forEach(function(d) {
      return d();
    });
    _this.unsubs = [];
    _this.scrollElement = null;
  };
  this._didMount = function() {
    _this.measureElementCache.forEach(_this.observer.observe);
    return function() {
      _this.observer.disconnect();
      _this.cleanup();
    };
  };
  this._willUpdate = function() {
    var scrollElement = _this.options.getScrollElement();
    if (_this.scrollElement !== scrollElement) {
      _this.cleanup();
      _this.scrollElement = scrollElement;
      _this._scrollToOffset(_this.scrollOffset, {
        adjustments: void 0,
        behavior: void 0
      });
      _this.unsubs.push(_this.options.observeElementRect(_this, function(rect) {
        _this.scrollRect = rect;
        _this.maybeNotify();
      }));
      _this.unsubs.push(_this.options.observeElementOffset(_this, function(offset) {
        _this.scrollAdjustments = 0;
        if (_this.scrollOffset === offset) {
          return;
        }
        if (_this.isScrollingTimeoutId !== null) {
          clearTimeout(_this.isScrollingTimeoutId);
          _this.isScrollingTimeoutId = null;
        }
        _this.isScrolling = true;
        _this.scrollDirection = _this.scrollOffset < offset ? "forward" : "backward";
        _this.scrollOffset = offset;
        _this.maybeNotify();
        _this.isScrollingTimeoutId = setTimeout(function() {
          _this.isScrollingTimeoutId = null;
          _this.isScrolling = false;
          _this.scrollDirection = null;
          _this.maybeNotify();
        }, _this.options.scrollingDelay);
      }));
    }
  };
  this.getSize = function() {
    return _this.scrollRect[_this.options.horizontal ? "width" : "height"];
  };
  this.memoOptions = utils.memo(function() {
    return [_this.options.count, _this.options.paddingStart, _this.options.scrollMargin, _this.options.getItemKey];
  }, function(count, paddingStart, scrollMargin, getItemKey) {
    _this.pendingMeasuredCacheIndexes = [];
    return {
      count,
      paddingStart,
      scrollMargin,
      getItemKey
    };
  }, {
    key: false
  });
  this.getFurthestMeasurement = function(measurements, index) {
    var furthestMeasurementsFound = /* @__PURE__ */ new Map();
    var furthestMeasurements = /* @__PURE__ */ new Map();
    for (var m = index - 1; m >= 0; m--) {
      var measurement = measurements[m];
      if (furthestMeasurementsFound.has(measurement.lane)) {
        continue;
      }
      var previousFurthestMeasurement = furthestMeasurements.get(measurement.lane);
      if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
        furthestMeasurements.set(measurement.lane, measurement);
      } else if (measurement.end < previousFurthestMeasurement.end) {
        furthestMeasurementsFound.set(measurement.lane, true);
      }
      if (furthestMeasurementsFound.size === _this.options.lanes) {
        break;
      }
    }
    return furthestMeasurements.size === _this.options.lanes ? Array.from(furthestMeasurements.values()).sort(function(a, b) {
      return a.end - b.end;
    })[0] : void 0;
  };
  this.getMeasurements = utils.memo(function() {
    return [_this.memoOptions(), _this.itemSizeCache];
  }, function(_ref4, itemSizeCache) {
    var count = _ref4.count, paddingStart = _ref4.paddingStart, scrollMargin = _ref4.scrollMargin, getItemKey = _ref4.getItemKey;
    var min = _this.pendingMeasuredCacheIndexes.length > 0 ? Math.min.apply(Math, _this.pendingMeasuredCacheIndexes) : 0;
    _this.pendingMeasuredCacheIndexes = [];
    var measurements = _this.measurementsCache.slice(0, min);
    for (var _i2 = min; _i2 < count; _i2++) {
      var key = getItemKey(_i2);
      var furthestMeasurement = _this.options.lanes === 1 ? measurements[_i2 - 1] : _this.getFurthestMeasurement(measurements, _i2);
      var start = furthestMeasurement ? furthestMeasurement.end : paddingStart + scrollMargin;
      var measuredSize = itemSizeCache.get(key);
      var size = typeof measuredSize === "number" ? measuredSize : _this.options.estimateSize(_i2);
      var end = start + size;
      var lane = furthestMeasurement ? furthestMeasurement.lane : _i2 % _this.options.lanes;
      measurements[_i2] = {
        index: _i2,
        start,
        size,
        end,
        key,
        lane
      };
    }
    _this.measurementsCache = measurements;
    return measurements;
  }, {
    key: false,
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.calculateRange = utils.memo(function() {
    return [_this.getMeasurements(), _this.getSize(), _this.scrollOffset];
  }, function(measurements, outerSize, scrollOffset) {
    return _this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
      measurements,
      outerSize,
      scrollOffset
    }) : null;
  }, {
    key: false,
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.getIndexes = utils.memo(function() {
    return [_this.options.rangeExtractor, _this.calculateRange(), _this.options.overscan, _this.options.count];
  }, function(rangeExtractor, range, overscan, count) {
    return range === null ? [] : rangeExtractor(_rollupPluginBabelHelpers["extends"]({}, range, {
      overscan,
      count
    }));
  }, {
    key: false,
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.indexFromElement = function(node) {
    var attributeName = _this.options.indexAttribute;
    var indexStr = node.getAttribute(attributeName);
    if (!indexStr) {
      console.warn("Missing attribute name '" + attributeName + "={index}' on measured element.");
      return -1;
    }
    return parseInt(indexStr, 10);
  };
  this._measureElement = function(node, entry) {
    var item = _this.measurementsCache[_this.indexFromElement(node)];
    if (!item || !node.isConnected) {
      _this.measureElementCache.forEach(function(cached, key) {
        if (cached === node) {
          _this.observer.unobserve(node);
          _this.measureElementCache["delete"](key);
        }
      });
      return;
    }
    var prevNode = _this.measureElementCache.get(item.key);
    if (prevNode !== node) {
      if (prevNode) {
        _this.observer.unobserve(prevNode);
      }
      _this.observer.observe(node);
      _this.measureElementCache.set(item.key, node);
    }
    var measuredItemSize = _this.options.measureElement(node, entry, _this);
    _this.resizeItem(item, measuredItemSize);
  };
  this.resizeItem = function(item, size) {
    var _this$itemSizeCache$g;
    var itemSize = (_this$itemSizeCache$g = _this.itemSizeCache.get(item.key)) != null ? _this$itemSizeCache$g : item.size;
    var delta = size - itemSize;
    if (delta !== 0) {
      if (item.start < _this.scrollOffset) {
        _this._scrollToOffset(_this.scrollOffset, {
          adjustments: _this.scrollAdjustments += delta,
          behavior: void 0
        });
      }
      _this.pendingMeasuredCacheIndexes.push(item.index);
      _this.itemSizeCache = new Map(_this.itemSizeCache.set(item.key, size));
      _this.notify(false);
    }
  };
  this.measureElement = function(node) {
    if (!node) {
      return;
    }
    _this._measureElement(node, void 0);
  };
  this.getVirtualItems = utils.memo(function() {
    return [_this.getIndexes(), _this.getMeasurements()];
  }, function(indexes, measurements) {
    var virtualItems = [];
    for (var k = 0, len = indexes.length; k < len; k++) {
      var _i3 = indexes[k];
      var measurement = measurements[_i3];
      virtualItems.push(measurement);
    }
    return virtualItems;
  }, {
    key: false,
    debug: function debug() {
      return _this.options.debug;
    }
  });
  this.getVirtualItemForOffset = function(offset) {
    var measurements = _this.getMeasurements();
    return utils.notUndefined(measurements[findNearestBinarySearch(0, measurements.length - 1, function(index) {
      return utils.notUndefined(measurements[index]).start;
    }, offset)]);
  };
  this.getOffsetForAlignment = function(toOffset, align) {
    var size = _this.getSize();
    if (align === "auto") {
      if (toOffset <= _this.scrollOffset) {
        align = "start";
      } else if (toOffset >= _this.scrollOffset + size) {
        align = "end";
      } else {
        align = "start";
      }
    }
    if (align === "start") {
      toOffset = toOffset;
    } else if (align === "end") {
      toOffset = toOffset - size;
    } else if (align === "center") {
      toOffset = toOffset - size / 2;
    }
    var scrollSizeProp = _this.options.horizontal ? "scrollWidth" : "scrollHeight";
    var scrollSize = _this.scrollElement ? "document" in _this.scrollElement ? _this.scrollElement.document.documentElement[scrollSizeProp] : _this.scrollElement[scrollSizeProp] : 0;
    var maxOffset = scrollSize - _this.getSize();
    return Math.max(Math.min(maxOffset, toOffset), 0);
  };
  this.getOffsetForIndex = function(index, align) {
    if (align === void 0) {
      align = "auto";
    }
    index = Math.max(0, Math.min(index, _this.options.count - 1));
    var measurement = utils.notUndefined(_this.getMeasurements()[index]);
    if (align === "auto") {
      if (measurement.end >= _this.scrollOffset + _this.getSize() - _this.options.scrollPaddingEnd) {
        align = "end";
      } else if (measurement.start <= _this.scrollOffset + _this.options.scrollPaddingStart) {
        align = "start";
      } else {
        return [_this.scrollOffset, align];
      }
    }
    var toOffset = align === "end" ? measurement.end + _this.options.scrollPaddingEnd : measurement.start - _this.options.scrollPaddingStart;
    return [_this.getOffsetForAlignment(toOffset, align), align];
  };
  this.isDynamicMode = function() {
    return _this.measureElementCache.size > 0;
  };
  this.cancelScrollToIndex = function() {
    if (_this.scrollToIndexTimeoutId !== null) {
      clearTimeout(_this.scrollToIndexTimeoutId);
      _this.scrollToIndexTimeoutId = null;
    }
  };
  this.scrollToOffset = function(toOffset, _temp) {
    var _ref5 = _temp === void 0 ? {} : _temp, _ref5$align = _ref5.align, align = _ref5$align === void 0 ? "start" : _ref5$align, behavior = _ref5.behavior;
    _this.cancelScrollToIndex();
    if (behavior === "smooth" && _this.isDynamicMode()) {
      console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
    }
    _this._scrollToOffset(_this.getOffsetForAlignment(toOffset, align), {
      adjustments: void 0,
      behavior
    });
  };
  this.scrollToIndex = function(index, _temp2) {
    var _ref6 = _temp2 === void 0 ? {} : _temp2, _ref6$align = _ref6.align, initialAlign = _ref6$align === void 0 ? "auto" : _ref6$align, behavior = _ref6.behavior;
    index = Math.max(0, Math.min(index, _this.options.count - 1));
    _this.cancelScrollToIndex();
    if (behavior === "smooth" && _this.isDynamicMode()) {
      console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
    }
    var _this$getOffsetForInd = _this.getOffsetForIndex(index, initialAlign), toOffset = _this$getOffsetForInd[0], align = _this$getOffsetForInd[1];
    _this._scrollToOffset(toOffset, {
      adjustments: void 0,
      behavior
    });
    if (behavior !== "smooth" && _this.isDynamicMode()) {
      _this.scrollToIndexTimeoutId = setTimeout(function() {
        _this.scrollToIndexTimeoutId = null;
        var elementInDOM = _this.measureElementCache.has(_this.options.getItemKey(index));
        if (elementInDOM) {
          var _this$getOffsetForInd2 = _this.getOffsetForIndex(index, align), _toOffset = _this$getOffsetForInd2[0];
          if (!utils.approxEqual(_toOffset, _this.scrollOffset)) {
            _this.scrollToIndex(index, {
              align,
              behavior
            });
          }
        } else {
          _this.scrollToIndex(index, {
            align,
            behavior
          });
        }
      });
    }
  };
  this.scrollBy = function(delta, _temp3) {
    var _ref7 = _temp3 === void 0 ? {} : _temp3, behavior = _ref7.behavior;
    _this.cancelScrollToIndex();
    if (behavior === "smooth" && _this.isDynamicMode()) {
      console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
    }
    _this._scrollToOffset(_this.scrollOffset + delta, {
      adjustments: void 0,
      behavior
    });
  };
  this.getTotalSize = function() {
    var _this$getMeasurements;
    return (((_this$getMeasurements = _this.getMeasurements()[_this.options.count - 1]) == null ? void 0 : _this$getMeasurements.end) || _this.options.paddingStart) - _this.options.scrollMargin + _this.options.paddingEnd;
  };
  this._scrollToOffset = function(offset, _ref8) {
    var adjustments = _ref8.adjustments, behavior = _ref8.behavior;
    _this.options.scrollToFn(offset, {
      behavior,
      adjustments
    }, _this);
  };
  this.measure = function() {
    _this.itemSizeCache = /* @__PURE__ */ new Map();
    _this.notify(false);
  };
  this.setOptions(_opts);
  this.scrollRect = this.options.initialRect;
  this.scrollOffset = this.options.initialOffset;
  this.measurementsCache = this.options.initialMeasurementsCache;
  this.measurementsCache.forEach(function(item) {
    _this.itemSizeCache.set(item.key, item.size);
  });
  this.maybeNotify();
};
var findNearestBinarySearch = function findNearestBinarySearch2(low, high, getCurrentValue, value) {
  while (low <= high) {
    var middle = (low + high) / 2 | 0;
    var currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange(_ref9) {
  var measurements = _ref9.measurements, outerSize = _ref9.outerSize, scrollOffset = _ref9.scrollOffset;
  var count = measurements.length - 1;
  var getOffset = function getOffset2(index) {
    return measurements[index].start;
  };
  var startIndex = findNearestBinarySearch(0, count, getOffset, scrollOffset);
  var endIndex = startIndex;
  while (endIndex < count && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return {
    startIndex,
    endIndex
  };
}
lib.approxEqual = utils.approxEqual;
lib.memo = utils.memo;
lib.notUndefined = utils.notUndefined;
lib.Virtualizer = Virtualizer;
lib.defaultKeyExtractor = defaultKeyExtractor;
lib.defaultRangeExtractor = defaultRangeExtractor;
lib.elementScroll = elementScroll;
lib.measureElement = measureElement;
lib.observeElementOffset = observeElementOffset;
lib.observeElementRect = observeElementRect;
lib.observeWindowOffset = observeWindowOffset;
lib.observeWindowRect = observeWindowRect;
lib.windowScroll = windowScroll;
/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var _rollupPluginBabelHelpers2 = _rollupPluginBabelHelpers$2;
  var React = reactExports;
  var reactDom = reactDomExports;
  var virtualCore = lib;
  function _interopNamespace(e) {
    if (e && e.__esModule)
      return e;
    var n = /* @__PURE__ */ Object.create(null);
    if (e) {
      Object.keys(e).forEach(function(k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function() {
              return e[k];
            }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }
  var React__namespace = /* @__PURE__ */ _interopNamespace(React);
  var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React__namespace.useLayoutEffect : React__namespace.useEffect;
  function useVirtualizerBase(options) {
    var rerender = React__namespace.useReducer(function() {
      return {};
    }, {})[1];
    var resolvedOptions = _rollupPluginBabelHelpers2["extends"]({}, options, {
      onChange: function onChange(instance2, sync) {
        if (sync) {
          reactDom.flushSync(rerender);
        } else {
          rerender();
        }
        options.onChange == null || options.onChange(instance2, sync);
      }
    });
    var _React$useState = React__namespace.useState(function() {
      return new virtualCore.Virtualizer(resolvedOptions);
    }), instance = _React$useState[0];
    instance.setOptions(resolvedOptions);
    React__namespace.useEffect(function() {
      return instance._didMount();
    }, []);
    useIsomorphicLayoutEffect(function() {
      return instance._willUpdate();
    });
    return instance;
  }
  function useVirtualizer(options) {
    return useVirtualizerBase(_rollupPluginBabelHelpers2["extends"]({
      observeElementRect: virtualCore.observeElementRect,
      observeElementOffset: virtualCore.observeElementOffset,
      scrollToFn: virtualCore.elementScroll
    }, options));
  }
  function useWindowVirtualizer(options) {
    return useVirtualizerBase(_rollupPluginBabelHelpers2["extends"]({
      getScrollElement: function getScrollElement() {
        return typeof document !== "undefined" ? window : null;
      },
      observeElementRect: virtualCore.observeWindowRect,
      observeElementOffset: virtualCore.observeWindowOffset,
      scrollToFn: virtualCore.windowScroll,
      initialOffset: typeof document !== "undefined" ? window.scrollY : void 0
    }, options));
  }
  exports.useVirtualizer = useVirtualizer;
  exports.useWindowVirtualizer = useWindowVirtualizer;
  Object.keys(virtualCore).forEach(function(k) {
    if (k !== "default" && !exports.hasOwnProperty(k))
      Object.defineProperty(exports, k, {
        enumerable: true,
        get: function() {
          return virtualCore[k];
        }
      });
  });
})(lib$1);
var Cell$1 = {};
var __importDefault$5 = commonjsGlobal$1 && commonjsGlobal$1.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(Cell$1, "__esModule", { value: true });
Cell$1.Cell = void 0;
const react_1$a = __importDefault$5(reactExports);
const classnames_1$4 = __importDefault$5(classnamesExports);
const Cell = ({ children, gutter, stickyRight, active, disabled, className, width, left }) => {
  return react_1$a.default.createElement("div", { className: (0, classnames_1$4.default)("dsg-cell", gutter && "dsg-cell-gutter", disabled && "dsg-cell-disabled", gutter && active && "dsg-cell-gutter-active", stickyRight && "dsg-cell-sticky-right", className), style: {
    width,
    left: stickyRight ? void 0 : left
  } }, children);
};
Cell$1.Cell = Cell;
var useMemoizedIndexCallback$1 = {};
Object.defineProperty(useMemoizedIndexCallback$1, "__esModule", { value: true });
useMemoizedIndexCallback$1.useMemoizedIndexCallback = void 0;
const react_1$9 = reactExports;
const useMemoizedIndexCallback = (callbackFn, argsLength) => {
  return (0, react_1$9.useMemo)(() => {
    const cache = /* @__PURE__ */ new Map();
    return (index) => {
      if (!cache.has(index)) {
        cache.set(index, (...args) => {
          callbackFn(index, ...args.slice(0, argsLength));
        });
      }
      return cache.get(index);
    };
  }, [argsLength, callbackFn]);
};
useMemoizedIndexCallback$1.useMemoizedIndexCallback = useMemoizedIndexCallback;
var __createBinding$5 = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$5 = commonjsGlobal$1 && commonjsGlobal$1.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$5 = commonjsGlobal$1 && commonjsGlobal$1.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding$5(result, mod, k);
  }
  __setModuleDefault$5(result, mod);
  return result;
};
var __importDefault$4 = commonjsGlobal$1 && commonjsGlobal$1.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(Grid$1, "__esModule", { value: true });
Grid$1.Grid = void 0;
const react_virtual_1 = lib$1;
const react_1$8 = __importStar$5(reactExports);
const classnames_1$3 = __importDefault$4(classnamesExports);
const Cell_1 = Cell$1;
const useMemoizedIndexCallback_1 = useMemoizedIndexCallback$1;
const Grid = ({ data, columns, outerRef, innerRef, columnWidths, hasStickyRightColumn, displayHeight, headerRowHeight, rowHeight, rowKey, fullWidth, selection, activeCell, rowClassName, cellClassName, children, editing, getContextMenuItems, setRowData, deleteRows, duplicateRows, insertRowAfter, stopEditing, onScroll }) => {
  var _a, _b, _c, _d;
  const rowVirtualizer = (0, react_virtual_1.useVirtualizer)({
    count: data.length,
    getScrollElement: () => outerRef.current,
    paddingStart: headerRowHeight,
    estimateSize: (index) => rowHeight(index).height,
    getItemKey: (index) => {
      if (rowKey && index > 0) {
        const row = data[index - 1];
        if (typeof rowKey === "function") {
          return rowKey({ rowData: row, rowIndex: index });
        } else if (typeof rowKey === "string" && row instanceof Object && rowKey in row) {
          const key = row[rowKey];
          if (typeof key === "string" || typeof key === "number") {
            return key;
          }
        }
      }
      return index;
    },
    overscan: 5
  });
  const colVirtualizer = (0, react_virtual_1.useVirtualizer)({
    count: columns.length,
    getScrollElement: () => outerRef.current,
    estimateSize: (index) => {
      var _a2;
      return (_a2 = columnWidths === null || columnWidths === void 0 ? void 0 : columnWidths[index]) !== null && _a2 !== void 0 ? _a2 : 100;
    },
    horizontal: true,
    getItemKey: (index) => {
      var _a2;
      return (_a2 = columns[index].id) !== null && _a2 !== void 0 ? _a2 : index;
    },
    overscan: 1,
    rangeExtractor: (range) => {
      const result = (0, react_virtual_1.defaultRangeExtractor)(range);
      if (result[0] !== 0) {
        result.unshift(0);
      }
      if (hasStickyRightColumn && result[result.length - 1] !== columns.length - 1) {
        result.push(columns.length - 1);
      }
      return result;
    }
  });
  (0, react_1$8.useEffect)(() => {
    colVirtualizer.measure();
  }, [colVirtualizer, columnWidths]);
  const setGivenRowData = (0, useMemoizedIndexCallback_1.useMemoizedIndexCallback)(setRowData, 1);
  const deleteGivenRow = (0, useMemoizedIndexCallback_1.useMemoizedIndexCallback)(deleteRows, 0);
  const duplicateGivenRow = (0, useMemoizedIndexCallback_1.useMemoizedIndexCallback)(duplicateRows, 0);
  const insertAfterGivenRow = (0, useMemoizedIndexCallback_1.useMemoizedIndexCallback)(insertRowAfter, 0);
  const selectionColMin = (_a = selection === null || selection === void 0 ? void 0 : selection.min.col) !== null && _a !== void 0 ? _a : activeCell === null || activeCell === void 0 ? void 0 : activeCell.col;
  const selectionColMax = (_b = selection === null || selection === void 0 ? void 0 : selection.max.col) !== null && _b !== void 0 ? _b : activeCell === null || activeCell === void 0 ? void 0 : activeCell.col;
  const selectionMinRow = (_c = selection === null || selection === void 0 ? void 0 : selection.min.row) !== null && _c !== void 0 ? _c : activeCell === null || activeCell === void 0 ? void 0 : activeCell.row;
  const selectionMaxRow = (_d = selection === null || selection === void 0 ? void 0 : selection.max.row) !== null && _d !== void 0 ? _d : activeCell === null || activeCell === void 0 ? void 0 : activeCell.row;
  return react_1$8.default.createElement(
    "div",
    { ref: outerRef, className: "dsg-container", onScroll, style: { height: displayHeight } },
    react_1$8.default.createElement(
      "div",
      { ref: innerRef, style: {
        width: fullWidth ? "100%" : colVirtualizer.getTotalSize(),
        height: rowVirtualizer.getTotalSize()
      } },
      headerRowHeight > 0 && react_1$8.default.createElement("div", { className: (0, classnames_1$3.default)("dsg-row", "dsg-row-header"), style: {
        width: fullWidth ? "100%" : colVirtualizer.getTotalSize(),
        height: headerRowHeight
      } }, colVirtualizer.getVirtualItems().map((col) => react_1$8.default.createElement(
        Cell_1.Cell,
        { key: col.key, gutter: col.index === 0, stickyRight: hasStickyRightColumn && col.index === columns.length - 1, width: col.size, left: col.start, className: (0, classnames_1$3.default)("dsg-cell-header", selectionColMin !== void 0 && selectionColMax !== void 0 && selectionColMin <= col.index - 1 && selectionColMax >= col.index - 1 && "dsg-cell-header-active", columns[col.index].headerClassName) },
        react_1$8.default.createElement("div", { className: "dsg-cell-header-container" }, columns[col.index].title)
      ))),
      rowVirtualizer.getVirtualItems().map((row) => {
        const rowActive = Boolean(row.index >= (selectionMinRow !== null && selectionMinRow !== void 0 ? selectionMinRow : Infinity) && row.index <= (selectionMaxRow !== null && selectionMaxRow !== void 0 ? selectionMaxRow : -Infinity));
        return react_1$8.default.createElement("div", { key: row.key, className: (0, classnames_1$3.default)("dsg-row", typeof rowClassName === "string" ? rowClassName : null, typeof rowClassName === "function" ? rowClassName({
          rowData: data[row.index],
          rowIndex: row.index
        }) : null), style: {
          height: row.size,
          top: row.start,
          width: fullWidth ? "100%" : colVirtualizer.getTotalSize()
        } }, colVirtualizer.getVirtualItems().map((col) => {
          const colCellClassName = columns[col.index].cellClassName;
          const disabled = columns[col.index].disabled;
          const Component = columns[col.index].component;
          const cellDisabled = disabled === true || typeof disabled === "function" && disabled({
            rowData: data[row.index],
            rowIndex: row.index
          });
          const cellIsActive = (activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) === row.index && activeCell.col === col.index - 1;
          return react_1$8.default.createElement(
            Cell_1.Cell,
            { key: col.key, gutter: col.index === 0, stickyRight: hasStickyRightColumn && col.index === columns.length - 1, active: col.index === 0 && rowActive, disabled: cellDisabled, className: (0, classnames_1$3.default)(typeof colCellClassName === "function" ? colCellClassName({
              rowData: data[row.index],
              rowIndex: row.index,
              columnId: columns[col.index].id
            }) : colCellClassName, typeof cellClassName === "function" ? cellClassName({
              rowData: data[row.index],
              rowIndex: row.index,
              columnId: columns[col.index].id
            }) : cellClassName), width: col.size, left: col.start },
            react_1$8.default.createElement(Component, { rowData: data[row.index], getContextMenuItems, disabled: cellDisabled, active: cellIsActive, columnIndex: col.index - 1, rowIndex: row.index, focus: cellIsActive && editing, deleteRow: deleteGivenRow(row.index), duplicateRow: duplicateGivenRow(row.index), stopEditing, insertRowBelow: insertAfterGivenRow(row.index), setRowData: setGivenRowData(row.index), columnData: columns[col.index].columnData })
          );
        }));
      }),
      children
    )
  );
};
Grid$1.Grid = Grid;
var SelectionRect = {};
(function(exports) {
  var __createBinding2 = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault2 = commonjsGlobal$1 && commonjsGlobal$1.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar2 = commonjsGlobal$1 && commonjsGlobal$1.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding2(result, mod, k);
    }
    __setModuleDefault2(result, mod);
    return result;
  };
  var __importDefault2 = commonjsGlobal$1 && commonjsGlobal$1.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.SelectionRect = void 0;
  const react_12 = __importStar2(reactExports);
  const classnames_12 = __importDefault2(classnamesExports);
  const buildSquare = (top, right, bottom, left) => {
    return [
      [left, top],
      [right, top],
      [right, bottom],
      [left, bottom],
      [left, top]
    ];
  };
  const buildClipPath = (top, right, bottom, left) => {
    const values = [
      ...buildSquare(0, "100%", "100%", 0),
      ...buildSquare(top, right, bottom, left)
    ];
    return `polygon(evenodd, ${values.map((pair) => pair.map((value) => typeof value === "number" && value !== 0 ? value + "px" : value).join(" ")).join(",")})`;
  };
  exports.SelectionRect = react_12.default.memo(({ columnWidths, columnRights, headerRowHeight, selection, rowHeight, activeCell, hasStickyRightColumn, dataLength, viewWidth, viewHeight, contentWidth, edges, isCellDisabled, editing, expandSelection }) => {
    var _a, _b, _c, _d;
    const activeCellIsDisabled = activeCell ? isCellDisabled(activeCell) : false;
    const selectionIsDisabled = (0, react_12.useMemo)(() => {
      if (!selection) {
        return activeCellIsDisabled;
      }
      for (let col = selection.min.col; col <= selection.max.col; ++col) {
        for (let row = selection.min.row; row <= selection.max.row; ++row) {
          if (!isCellDisabled({ col, row })) {
            return false;
          }
        }
      }
      return true;
    }, [activeCellIsDisabled, isCellDisabled, selection]);
    if (!columnWidths || !columnRights) {
      return null;
    }
    const extraPixelV = (rowI) => {
      return rowI < dataLength - 1 ? 1 : 0;
    };
    const extraPixelH = (colI) => {
      return colI < columnWidths.length - (hasStickyRightColumn ? 3 : 2) ? 1 : 0;
    };
    const activeCellRect = activeCell && {
      width: columnWidths[activeCell.col + 1] + extraPixelH(activeCell.col),
      height: rowHeight(activeCell.row).height + extraPixelV(activeCell.row),
      left: columnRights[activeCell.col],
      top: rowHeight(activeCell.row).top + headerRowHeight
    };
    const selectionRect = selection && {
      width: columnWidths.slice(selection.min.col + 1, selection.max.col + 2).reduce((a, b) => a + b) + extraPixelH(selection.max.col),
      height: rowHeight(selection.max.row).top + rowHeight(selection.max.row).height - rowHeight(selection.min.row).top + extraPixelV(selection.max.row),
      left: columnRights[selection.min.col],
      top: rowHeight(selection.min.row).top + headerRowHeight
    };
    const minSelection = (selection === null || selection === void 0 ? void 0 : selection.min) || activeCell;
    const maxSelection = (selection === null || selection === void 0 ? void 0 : selection.max) || activeCell;
    const expandRowsIndicator = maxSelection && expandSelection !== null && {
      left: columnRights[maxSelection.col] + columnWidths[maxSelection.col + 1],
      top: rowHeight(maxSelection.row).top + rowHeight(maxSelection.row).height + headerRowHeight,
      transform: `translate(-${maxSelection.col < columnWidths.length - (hasStickyRightColumn ? 3 : 2) ? 50 : 100}%, -${maxSelection.row < dataLength - 1 ? 50 : 100}%)`
    };
    const expandRowsRect = minSelection && maxSelection && expandSelection !== null && {
      width: columnWidths.slice(minSelection.col + 1, maxSelection.col + 2).reduce((a, b) => a + b) + extraPixelH(maxSelection.col),
      height: rowHeight(maxSelection.row + expandSelection).top + rowHeight(maxSelection.row + expandSelection).height - rowHeight(maxSelection.row + 1).top + extraPixelV(maxSelection.row + expandSelection) - 1,
      left: columnRights[minSelection.col],
      top: rowHeight(maxSelection.row).top + rowHeight(maxSelection.row).height + headerRowHeight + 1
    };
    return react_12.default.createElement(
      react_12.default.Fragment,
      null,
      react_12.default.createElement(
        "div",
        { className: "dsg-scrollable-view-container", style: {
          height: rowHeight(dataLength - 1).top + rowHeight(dataLength - 1).height + headerRowHeight,
          width: contentWidth ? contentWidth : "100%"
        } },
        react_12.default.createElement("div", { className: (0, classnames_12.default)({
          "dsg-scrollable-view": true,
          "dsg-scrollable-view-t": !edges.top,
          "dsg-scrollable-view-r": !edges.right,
          "dsg-scrollable-view-b": !edges.bottom,
          "dsg-scrollable-view-l": !edges.left
        }), style: {
          top: headerRowHeight,
          left: columnWidths[0],
          height: viewHeight ? viewHeight - headerRowHeight : 0,
          width: contentWidth && viewWidth ? viewWidth - columnWidths[0] - (hasStickyRightColumn ? columnWidths[columnWidths.length - 1] : 0) : `calc(100% - ${columnWidths[0] + (hasStickyRightColumn ? columnWidths[columnWidths.length - 1] : 0)}px)`
        } })
      ),
      (selectionRect || activeCellRect) && react_12.default.createElement(
        "div",
        { className: "dsg-selection-col-marker-container", style: {
          left: (_a = selectionRect === null || selectionRect === void 0 ? void 0 : selectionRect.left) !== null && _a !== void 0 ? _a : activeCellRect === null || activeCellRect === void 0 ? void 0 : activeCellRect.left,
          width: (_b = selectionRect === null || selectionRect === void 0 ? void 0 : selectionRect.width) !== null && _b !== void 0 ? _b : activeCellRect === null || activeCellRect === void 0 ? void 0 : activeCellRect.width,
          height: rowHeight(dataLength - 1).top + rowHeight(dataLength - 1).height + headerRowHeight
        } },
        react_12.default.createElement("div", { className: (0, classnames_12.default)("dsg-selection-col-marker", selectionIsDisabled && "dsg-selection-col-marker-disabled"), style: { top: headerRowHeight } })
      ),
      (selectionRect || activeCellRect) && react_12.default.createElement(
        "div",
        { className: "dsg-selection-row-marker-container", style: {
          top: (_c = selectionRect === null || selectionRect === void 0 ? void 0 : selectionRect.top) !== null && _c !== void 0 ? _c : activeCellRect === null || activeCellRect === void 0 ? void 0 : activeCellRect.top,
          height: (_d = selectionRect === null || selectionRect === void 0 ? void 0 : selectionRect.height) !== null && _d !== void 0 ? _d : activeCellRect === null || activeCellRect === void 0 ? void 0 : activeCellRect.height,
          width: contentWidth ? contentWidth : "100%"
        } },
        react_12.default.createElement("div", { className: (0, classnames_12.default)("dsg-selection-row-marker", selectionIsDisabled && "dsg-selection-row-marker-disabled"), style: { left: columnWidths[0] } })
      ),
      activeCellRect && activeCell && react_12.default.createElement("div", { className: (0, classnames_12.default)("dsg-active-cell", {
        "dsg-active-cell-focus": editing,
        "dsg-active-cell-disabled": activeCellIsDisabled
      }), style: activeCellRect }),
      selectionRect && activeCellRect && react_12.default.createElement("div", { className: (0, classnames_12.default)("dsg-selection-rect", selectionIsDisabled && "dsg-selection-rect-disabled"), style: Object.assign(Object.assign({}, selectionRect), { clipPath: buildClipPath(activeCellRect.top - selectionRect.top, activeCellRect.left - selectionRect.left, activeCellRect.top + activeCellRect.height - selectionRect.top, activeCellRect.left + activeCellRect.width - selectionRect.left) }) }),
      expandRowsRect && react_12.default.createElement("div", { className: (0, classnames_12.default)("dsg-expand-rows-rect"), style: expandRowsRect }),
      expandRowsIndicator && react_12.default.createElement("div", { className: (0, classnames_12.default)("dsg-expand-rows-indicator", selectionIsDisabled && "dsg-expand-rows-indicator-disabled"), style: expandRowsIndicator })
    );
  });
  exports.SelectionRect.displayName = "SelectionRect";
})(SelectionRect);
var useRowHeights$1 = {};
Object.defineProperty(useRowHeights$1, "__esModule", { value: true });
useRowHeights$1.useRowHeights = void 0;
const react_1$7 = reactExports;
const useRowHeights = ({ value, rowHeight }) => {
  const calculatedHeights = (0, react_1$7.useRef)([]);
  const [, rerender] = (0, react_1$7.useState)(0);
  return (0, react_1$7.useMemo)(() => {
    const getRowIndex = (top) => {
      if (typeof rowHeight === "number") {
        return Math.min(value.length - 1, Math.max(-1, Math.floor(top / rowHeight)));
      }
      let l = 0;
      let r = calculatedHeights.current.length - 1;
      while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (calculatedHeights.current[m].top < top) {
          l = m + 1;
        } else if (calculatedHeights.current[m].top > top) {
          r = m - 1;
        } else {
          return m;
        }
      }
      if (r === calculatedHeights.current.length - 1 && value.length > calculatedHeights.current.length && (!calculatedHeights.current.length || top >= calculatedHeights.current[r].top + calculatedHeights.current[r].height)) {
        let lastBottom = r === -1 ? 0 : calculatedHeights.current[r].top + calculatedHeights.current[r].height;
        do {
          r++;
          const height = rowHeight({ rowIndex: r, rowData: value[r] });
          calculatedHeights.current.push({
            height,
            top: lastBottom
          });
          lastBottom += height;
        } while (lastBottom <= top && r < calculatedHeights.current.length - 1);
      }
      return r;
    };
    return {
      resetAfter: (index) => {
        calculatedHeights.current = calculatedHeights.current.slice(0, index);
        rerender((x) => x + 1);
      },
      getRowSize: (index) => {
        if (typeof rowHeight === "number") {
          return { height: rowHeight, top: rowHeight * index };
        }
        if (index >= value.length) {
          return { height: 0, top: 0 };
        }
        if (index < calculatedHeights.current.length) {
          return calculatedHeights.current[index];
        }
        let lastBottom = calculatedHeights.current[calculatedHeights.current.length - 1].top + calculatedHeights.current[calculatedHeights.current.length - 1].height;
        for (let i = calculatedHeights.current.length; i <= index; i++) {
          const height = rowHeight({ rowIndex: i, rowData: value[i] });
          calculatedHeights.current.push({ height, top: lastBottom });
          lastBottom += height;
        }
        return calculatedHeights.current[index];
      },
      getRowIndex,
      totalSize: (maxHeight) => {
        if (typeof rowHeight === "number") {
          return value.length * rowHeight;
        }
        const index = getRowIndex(maxHeight);
        return calculatedHeights.current[index].top + calculatedHeights.current[index].height;
      }
    };
  }, [rowHeight, value]);
};
useRowHeights$1.useRowHeights = useRowHeights;
(function(exports) {
  var __createBinding2 = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault2 = commonjsGlobal$1 && commonjsGlobal$1.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar2 = commonjsGlobal$1 && commonjsGlobal$1.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding2(result, mod, k);
    }
    __setModuleDefault2(result, mod);
    return result;
  };
  var __awaiter = commonjsGlobal$1 && commonjsGlobal$1.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __importDefault2 = commonjsGlobal$1 && commonjsGlobal$1.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DataSheetGrid = void 0;
  const react_12 = __importStar2(reactExports);
  const useColumnWidths_1 = useColumnWidths;
  const react_resize_detector_1 = require$$2;
  const useColumns_1 = useColumns;
  const useEdges_1 = useEdges$1;
  const useDeepEqualState_12 = useDeepEqualState$1;
  const useDocumentEventListener_1 = useDocumentEventListener$1;
  const useGetBoundingClientRect_1 = useGetBoundingClientRect$1;
  const AddRows_1 = AddRows;
  const useDebounceState_1 = useDebounceState$1;
  const fast_deep_equal_12 = __importDefault2(fastDeepEqual);
  const ContextMenu_1 = ContextMenu;
  const copyPasting_1 = copyPasting;
  const typeCheck_1 = typeCheck;
  const tab_1 = tab;
  const Grid_1 = Grid$1;
  const SelectionRect_1 = SelectionRect;
  const useRowHeights_1 = useRowHeights$1;
  const DEFAULT_DATA = [];
  const DEFAULT_COLUMNS = [];
  const DEFAULT_CREATE_ROW = () => ({});
  const DEFAULT_EMPTY_CALLBACK = () => null;
  const DEFAULT_DUPLICATE_ROW = ({ rowData }) => Object.assign({}, rowData);
  exports.DataSheetGrid = react_12.default.memo(react_12.default.forwardRef(({ value: data = DEFAULT_DATA, className, style, height: maxHeight = 400, onChange = DEFAULT_EMPTY_CALLBACK, columns: rawColumns = DEFAULT_COLUMNS, rowHeight = 40, headerRowHeight = typeof rowHeight === "number" ? rowHeight : 40, gutterColumn, stickyRightColumn, rowKey, addRowsComponent: AddRowsComponent = AddRows_1.AddRows, createRow = DEFAULT_CREATE_ROW, autoAddRow = false, lockRows = false, disableExpandSelection = false, duplicateRow = DEFAULT_DUPLICATE_ROW, contextMenuComponent: ContextMenuComponent = ContextMenu_1.ContextMenu, disableContextMenu: disableContextMenuRaw = false, onFocus = DEFAULT_EMPTY_CALLBACK, onBlur = DEFAULT_EMPTY_CALLBACK, onActiveCellChange = DEFAULT_EMPTY_CALLBACK, onSelectionChange = DEFAULT_EMPTY_CALLBACK, rowClassName, cellClassName, onScroll }, ref) => {
    var _a, _b, _c, _d, _e, _f;
    const lastEditingCellRef = (0, react_12.useRef)(null);
    const disableContextMenu = disableContextMenuRaw || lockRows;
    const columns = (0, useColumns_1.useColumns)(rawColumns, gutterColumn, stickyRightColumn);
    const hasStickyRightColumn = Boolean(stickyRightColumn);
    const innerRef = (0, react_12.useRef)(null);
    const outerRef = (0, react_12.useRef)(null);
    const beforeTabIndexRef = (0, react_12.useRef)(null);
    const afterTabIndexRef = (0, react_12.useRef)(null);
    const [heightDiff, setHeightDiff] = (0, useDebounceState_1.useDebounceState)(1, 100);
    const { getRowSize, totalSize, getRowIndex } = (0, useRowHeights_1.useRowHeights)({
      value: data,
      rowHeight
    });
    const displayHeight = Math.min(maxHeight, headerRowHeight + totalSize(maxHeight) + heightDiff);
    const { width, height } = (0, react_resize_detector_1.useResizeDetector)({
      targetRef: outerRef,
      refreshMode: "throttle",
      refreshRate: 100
    });
    setHeightDiff(height ? displayHeight - Math.ceil(height) : 0);
    const edges = (0, useEdges_1.useEdges)(outerRef, width, height);
    const { fullWidth, totalWidth: contentWidth, columnWidths, columnRights } = (0, useColumnWidths_1.useColumnWidths)(columns, width);
    const [contextMenu, setContextMenu] = (0, react_12.useState)(null);
    const [contextMenuItems, setContextMenuItems] = (0, react_12.useState)([]);
    const [editing, setEditing] = (0, react_12.useState)(false);
    const [expandSelectionRowsCount, setExpandSelectionRowsCount] = (0, react_12.useState)(0);
    const [expandingSelectionFromRowIndex, setExpandingSelectionFromRowIndex] = (0, react_12.useState)(null);
    const [activeCell, setActiveCell] = (0, useDeepEqualState_12.useDeepEqualState)(null);
    const [selectionCell, setSelectionCell] = (0, useDeepEqualState_12.useDeepEqualState)(null);
    const selection = (0, react_12.useMemo)(() => activeCell && selectionCell && {
      min: {
        col: Math.min(activeCell.col, selectionCell.col),
        row: Math.min(activeCell.row, selectionCell.row)
      },
      max: {
        col: Math.max(activeCell.col, selectionCell.col),
        row: Math.max(activeCell.row, selectionCell.row)
      }
    }, [activeCell, selectionCell]);
    const [selectionMode, setSelectionMode] = (0, useDeepEqualState_12.useDeepEqualState)({
      // True when the position of the cursor should impact the columns of the selection
      columns: false,
      // True when the position of the cursor should impact the rows of the selection
      rows: false,
      // True when the user is dragging the mouse around to select
      active: false
    });
    const expandSelection = disableExpandSelection || editing || selectionMode.active || (activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) === (data === null || data === void 0 ? void 0 : data.length) - 1 || (selection === null || selection === void 0 ? void 0 : selection.max.row) === (data === null || data === void 0 ? void 0 : data.length) - 1 || activeCell && columns.slice(((_a = selection === null || selection === void 0 ? void 0 : selection.min.col) !== null && _a !== void 0 ? _a : activeCell.col) + 1, ((_b = selection === null || selection === void 0 ? void 0 : selection.max.col) !== null && _b !== void 0 ? _b : activeCell.col) + 2).every((column) => column.disabled === true) ? null : expandSelectionRowsCount;
    const getInnerBoundingClientRect = (0, useGetBoundingClientRect_1.useGetBoundingClientRect)(innerRef);
    const getOuterBoundingClientRect = (0, useGetBoundingClientRect_1.useGetBoundingClientRect)(outerRef);
    (0, react_12.useEffect)(() => {
      var _a2;
      if (activeCell !== null) {
        document.activeElement.blur();
        (_a2 = window.getSelection()) === null || _a2 === void 0 ? void 0 : _a2.removeAllRanges();
      }
    }, [activeCell !== null]);
    const getCursorIndex = (0, react_12.useCallback)((event, force = false, includeSticky = false) => {
      const innerBoundingClientRect = getInnerBoundingClientRect(force);
      const outerBoundingClientRect = includeSticky && getOuterBoundingClientRect(force);
      if (innerBoundingClientRect && columnRights && columnWidths) {
        let x = event.clientX - innerBoundingClientRect.left;
        let y = event.clientY - innerBoundingClientRect.top;
        if (outerBoundingClientRect) {
          if (event.clientY - outerBoundingClientRect.top <= headerRowHeight) {
            y = 0;
          }
          if (event.clientX - outerBoundingClientRect.left <= columnWidths[0]) {
            x = 0;
          }
          if (hasStickyRightColumn && outerBoundingClientRect.right - event.clientX <= columnWidths[columnWidths.length - 1]) {
            x = columnRights[columnRights.length - 2] + 1;
          }
        }
        return {
          col: columnRights.findIndex((right) => x < right) - 1,
          row: getRowIndex(y - headerRowHeight)
        };
      }
      return null;
    }, [
      columnRights,
      columnWidths,
      data.length,
      getInnerBoundingClientRect,
      getOuterBoundingClientRect,
      headerRowHeight,
      hasStickyRightColumn,
      getRowIndex
    ]);
    const dataRef = (0, react_12.useRef)(data);
    dataRef.current = data;
    const isCellDisabled = (0, react_12.useCallback)((cell) => {
      const disabled = columns[cell.col + 1].disabled;
      return Boolean(typeof disabled === "function" ? disabled({
        rowData: dataRef.current[cell.row],
        rowIndex: cell.row
      }) : disabled);
    }, [columns]);
    const insertRowAfter = (0, react_12.useCallback)((row, count = 1) => {
      if (lockRows) {
        return;
      }
      setSelectionCell(null);
      setEditing(false);
      onChange([
        ...dataRef.current.slice(0, row + 1),
        ...new Array(count).fill(0).map(createRow),
        ...dataRef.current.slice(row + 1)
      ], [
        {
          type: "CREATE",
          fromRowIndex: row + 1,
          toRowIndex: row + 1 + count
        }
      ]);
      setActiveCell((a) => ({
        col: (a === null || a === void 0 ? void 0 : a.col) || 0,
        row: row + count,
        doNotScrollX: true
      }));
    }, [createRow, lockRows, onChange, setActiveCell, setSelectionCell]);
    const duplicateRows = (0, react_12.useCallback)((rowMin, rowMax = rowMin) => {
      if (lockRows) {
        return;
      }
      onChange([
        ...dataRef.current.slice(0, rowMax + 1),
        ...dataRef.current.slice(rowMin, rowMax + 1).map((rowData, i) => duplicateRow({ rowData, rowIndex: i + rowMin })),
        ...dataRef.current.slice(rowMax + 1)
      ], [
        {
          type: "CREATE",
          fromRowIndex: rowMax + 1,
          toRowIndex: rowMax + 2 + rowMax - rowMin
        }
      ]);
      setActiveCell({ col: 0, row: rowMax + 1, doNotScrollX: true });
      setSelectionCell({
        col: columns.length - (hasStickyRightColumn ? 3 : 2),
        row: 2 * rowMax - rowMin + 1,
        doNotScrollX: true
      });
      setEditing(false);
    }, [
      columns.length,
      duplicateRow,
      lockRows,
      onChange,
      setActiveCell,
      setSelectionCell,
      hasStickyRightColumn
    ]);
    const scrollTo = (0, react_12.useCallback)((cell) => {
      if (!height || !width) {
        return;
      }
      if (!cell.doNotScrollY) {
        const topMax = getRowSize(cell.row).top;
        const topMin = getRowSize(cell.row).top + getRowSize(cell.row).height + headerRowHeight - height + 1;
        const scrollTop = outerRef.current.scrollTop;
        if (scrollTop > topMax) {
          outerRef.current.scrollTop = topMax;
        } else if (scrollTop < topMin) {
          outerRef.current.scrollTop = topMin;
        }
      }
      if (columnRights && columnWidths && outerRef.current && !cell.doNotScrollX) {
        const leftMax = columnRights[cell.col] - columnRights[0];
        const leftMin = columnRights[cell.col] + columnWidths[cell.col + 1] + (hasStickyRightColumn ? columnWidths[columnWidths.length - 1] : 0) - width + 1;
        const scrollLeft = outerRef.current.scrollLeft;
        if (scrollLeft > leftMax) {
          outerRef.current.scrollLeft = leftMax;
        } else if (scrollLeft < leftMin) {
          outerRef.current.scrollLeft = leftMin;
        }
      }
    }, [
      height,
      width,
      headerRowHeight,
      columnRights,
      columnWidths,
      getRowSize,
      hasStickyRightColumn
    ]);
    (0, react_12.useEffect)(() => {
      if (selectionCell) {
        scrollTo(selectionCell);
      }
    }, [selectionCell, scrollTo]);
    (0, react_12.useEffect)(() => {
      if (activeCell) {
        scrollTo(activeCell);
      }
    }, [activeCell, scrollTo]);
    const setRowData = (0, react_12.useCallback)((rowIndex, item) => {
      var _a2, _b2;
      onChange([
        ...(_a2 = dataRef.current) === null || _a2 === void 0 ? void 0 : _a2.slice(0, rowIndex),
        item,
        ...(_b2 = dataRef.current) === null || _b2 === void 0 ? void 0 : _b2.slice(rowIndex + 1)
      ], [
        {
          type: "UPDATE",
          fromRowIndex: rowIndex,
          toRowIndex: rowIndex + 1
        }
      ]);
    }, [onChange]);
    const deleteRows = (0, react_12.useCallback)((rowMin, rowMax = rowMin) => {
      if (lockRows) {
        return;
      }
      setEditing(false);
      setActiveCell((a) => {
        const row = Math.min(dataRef.current.length - 2 - rowMax + rowMin, rowMin);
        if (row < 0) {
          return null;
        }
        return a && { col: a.col, row };
      });
      setSelectionCell(null);
      onChange([
        ...dataRef.current.slice(0, rowMin),
        ...dataRef.current.slice(rowMax + 1)
      ], [
        {
          type: "DELETE",
          fromRowIndex: rowMin,
          toRowIndex: rowMax + 1
        }
      ]);
    }, [lockRows, onChange, setActiveCell, setSelectionCell]);
    const deleteSelection = (0, react_12.useCallback)((smartDelete = true) => {
      if (!activeCell) {
        return;
      }
      const min = (selection === null || selection === void 0 ? void 0 : selection.min) || activeCell;
      const max = (selection === null || selection === void 0 ? void 0 : selection.max) || activeCell;
      if (data.slice(min.row, max.row + 1).every((rowData, i) => columns.every((column) => column.isCellEmpty({ rowData, rowIndex: i + min.row })))) {
        if (smartDelete) {
          deleteRows(min.row, max.row);
        }
        return;
      }
      const newData = [...data];
      for (let row = min.row; row <= max.row; ++row) {
        for (let col = min.col; col <= max.col; ++col) {
          if (!isCellDisabled({ col, row })) {
            const { deleteValue = ({ rowData }) => rowData } = columns[col + 1];
            newData[row] = deleteValue({
              rowData: newData[row],
              rowIndex: row
            });
          }
        }
      }
      if (smartDelete && (0, fast_deep_equal_12.default)(newData, data)) {
        setActiveCell({ col: 0, row: min.row, doNotScrollX: true });
        setSelectionCell({
          col: columns.length - (hasStickyRightColumn ? 3 : 2),
          row: max.row,
          doNotScrollX: true
        });
        return;
      }
      onChange(newData, [
        {
          type: "UPDATE",
          fromRowIndex: min.row,
          toRowIndex: max.row + 1
        }
      ]);
    }, [
      activeCell,
      columns,
      data,
      deleteRows,
      isCellDisabled,
      onChange,
      selection === null || selection === void 0 ? void 0 : selection.max,
      selection === null || selection === void 0 ? void 0 : selection.min,
      setActiveCell,
      setSelectionCell,
      hasStickyRightColumn
    ]);
    const stopEditing = (0, react_12.useCallback)(({ nextRow = true } = {}) => {
      if ((activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) === dataRef.current.length - 1) {
        if (nextRow && autoAddRow) {
          insertRowAfter(activeCell.row);
        } else {
          setEditing(false);
        }
      } else {
        setEditing(false);
        if (nextRow) {
          setActiveCell((a) => a && { col: a.col, row: a.row + 1 });
        }
      }
    }, [activeCell === null || activeCell === void 0 ? void 0 : activeCell.row, autoAddRow, insertRowAfter, setActiveCell]);
    const onCopy = (0, react_12.useCallback)((event) => __awaiter(void 0, void 0, void 0, function* () {
      var _g, _h;
      if (!editing && activeCell) {
        const copyData = [];
        const min = (selection === null || selection === void 0 ? void 0 : selection.min) || activeCell;
        const max = (selection === null || selection === void 0 ? void 0 : selection.max) || activeCell;
        for (let row = min.row; row <= max.row; ++row) {
          copyData.push([]);
          for (let col = min.col; col <= max.col; ++col) {
            const { copyValue = () => null } = columns[col + 1];
            copyData[row - min.row].push(copyValue({ rowData: data[row], rowIndex: row }));
          }
        }
        const textPlain = copyData.map((row) => row.join("	")).join("\n");
        const textHtml = `<table>${copyData.map((row) => `<tr>${row.map((cell) => `<td>${(0, copyPasting_1.encodeHtml)(String(cell !== null && cell !== void 0 ? cell : "")).replace(/\n/g, "<br/>")}</td>`).join("")}</tr>`).join("")}</table>`;
        if (event !== void 0) {
          (_g = event.clipboardData) === null || _g === void 0 ? void 0 : _g.setData("text/plain", textPlain);
          (_h = event.clipboardData) === null || _h === void 0 ? void 0 : _h.setData("text/html", textHtml);
          event.preventDefault();
          return;
        }
        let success = false;
        if (navigator.clipboard.write !== void 0) {
          const textBlob = new Blob([textPlain], {
            type: "text/plain"
          });
          const htmlBlob = new Blob([textHtml], { type: "text/html" });
          const clipboardData = [
            new ClipboardItem({
              "text/plain": textBlob,
              "text/html": htmlBlob
            })
          ];
          yield navigator.clipboard.write(clipboardData).then(() => {
            success = true;
          });
        } else if (navigator.clipboard.writeText !== void 0) {
          yield navigator.clipboard.writeText(textPlain).then(() => {
            success = true;
          });
        } else if (document.execCommand !== void 0) {
          const result = document.execCommand("copy");
          if (result) {
            success = true;
          }
        }
        if (!success) {
          alert("This action is unavailable in your browser, but you can still use Ctrl+C for copy or Ctrl+X for cut");
        }
      }
    }), [activeCell, columns, data, editing, selection]);
    (0, useDocumentEventListener_1.useDocumentEventListener)("copy", onCopy);
    const onCut = (0, react_12.useCallback)((event) => {
      if (!editing && activeCell) {
        onCopy(event);
        deleteSelection(false);
      }
    }, [activeCell, deleteSelection, editing, onCopy]);
    (0, useDocumentEventListener_1.useDocumentEventListener)("cut", onCut);
    const applyPasteDataToDatasheet = (0, react_12.useCallback)((pasteData) => __awaiter(void 0, void 0, void 0, function* () {
      var _j, _k;
      if (!editing && activeCell) {
        const min = (selection === null || selection === void 0 ? void 0 : selection.min) || activeCell;
        const max = (selection === null || selection === void 0 ? void 0 : selection.max) || activeCell;
        const results = yield Promise.all(pasteData[0].map((_, columnIndex) => {
          var _a2, _b2;
          const prePasteValues = (_a2 = columns[min.col + columnIndex + 1]) === null || _a2 === void 0 ? void 0 : _a2.prePasteValues;
          const values = pasteData.map((row) => row[columnIndex]);
          return (_b2 = prePasteValues === null || prePasteValues === void 0 ? void 0 : prePasteValues(values)) !== null && _b2 !== void 0 ? _b2 : values;
        }));
        pasteData = pasteData.map((_, rowIndex) => results.map((column) => column[rowIndex]));
        if (pasteData.length === 1) {
          const newData = [...data];
          for (let columnIndex = 0; columnIndex < pasteData[0].length; columnIndex++) {
            const pasteValue = (_j = columns[min.col + columnIndex + 1]) === null || _j === void 0 ? void 0 : _j.pasteValue;
            if (pasteValue) {
              for (let rowIndex = min.row; rowIndex <= max.row; rowIndex++) {
                if (!isCellDisabled({
                  col: columnIndex + min.col,
                  row: rowIndex
                })) {
                  newData[rowIndex] = yield pasteValue({
                    rowData: newData[rowIndex],
                    value: pasteData[0][columnIndex],
                    rowIndex
                  });
                }
              }
            }
          }
          onChange(newData, [
            {
              type: "UPDATE",
              fromRowIndex: min.row,
              toRowIndex: max.row + 1
            }
          ]);
          setActiveCell({ col: min.col, row: min.row });
          setSelectionCell({
            col: Math.min(min.col + pasteData[0].length - 1, columns.length - (hasStickyRightColumn ? 3 : 2)),
            row: max.row
          });
        } else {
          let newData = [...data];
          const missingRows = min.row + pasteData.length - data.length;
          if (missingRows > 0) {
            if (!lockRows) {
              newData = [
                ...newData,
                ...new Array(missingRows).fill(0).map(() => createRow())
              ];
            } else {
              pasteData.splice(pasteData.length - missingRows, missingRows);
            }
          }
          for (let columnIndex = 0; columnIndex < pasteData[0].length && min.col + columnIndex < columns.length - (hasStickyRightColumn ? 2 : 1); columnIndex++) {
            const pasteValue = (_k = columns[min.col + columnIndex + 1]) === null || _k === void 0 ? void 0 : _k.pasteValue;
            if (pasteValue) {
              for (let rowIndex = 0; rowIndex < pasteData.length; rowIndex++) {
                if (!isCellDisabled({
                  col: min.col + columnIndex,
                  row: min.row + rowIndex
                })) {
                  newData[min.row + rowIndex] = yield pasteValue({
                    rowData: newData[min.row + rowIndex],
                    value: pasteData[rowIndex][columnIndex],
                    rowIndex: min.row + rowIndex
                  });
                }
              }
            }
          }
          const operations = [
            {
              type: "UPDATE",
              fromRowIndex: min.row,
              toRowIndex: min.row + pasteData.length - (!lockRows && missingRows > 0 ? missingRows : 0)
            }
          ];
          if (missingRows > 0 && !lockRows) {
            operations.push({
              type: "CREATE",
              fromRowIndex: min.row + pasteData.length - missingRows,
              toRowIndex: min.row + pasteData.length
            });
          }
          onChange(newData, operations);
          setActiveCell({ col: min.col, row: min.row });
          setSelectionCell({
            col: Math.min(min.col + pasteData[0].length - 1, columns.length - (hasStickyRightColumn ? 3 : 2)),
            row: min.row + pasteData.length - 1
          });
        }
      }
    }), [
      activeCell,
      columns,
      createRow,
      data,
      editing,
      hasStickyRightColumn,
      isCellDisabled,
      lockRows,
      onChange,
      selection === null || selection === void 0 ? void 0 : selection.max,
      selection === null || selection === void 0 ? void 0 : selection.min,
      setActiveCell,
      setSelectionCell
    ]);
    const onPaste = (0, react_12.useCallback)((event) => {
      var _a2, _b2, _c2, _d2, _e2, _f2;
      if (activeCell && !editing) {
        let pasteData = [[""]];
        if ((_a2 = event.clipboardData) === null || _a2 === void 0 ? void 0 : _a2.types.includes("text/html")) {
          pasteData = (0, copyPasting_1.parseTextHtmlData)((_b2 = event.clipboardData) === null || _b2 === void 0 ? void 0 : _b2.getData("text/html"));
        } else if ((_c2 = event.clipboardData) === null || _c2 === void 0 ? void 0 : _c2.types.includes("text/plain")) {
          pasteData = (0, copyPasting_1.parseTextPlainData)((_d2 = event.clipboardData) === null || _d2 === void 0 ? void 0 : _d2.getData("text/plain"));
        } else if ((_e2 = event.clipboardData) === null || _e2 === void 0 ? void 0 : _e2.types.includes("text")) {
          pasteData = (0, copyPasting_1.parseTextPlainData)((_f2 = event.clipboardData) === null || _f2 === void 0 ? void 0 : _f2.getData("text"));
        }
        applyPasteDataToDatasheet(pasteData);
        event.preventDefault();
      }
    }, [activeCell, applyPasteDataToDatasheet, editing]);
    (0, useDocumentEventListener_1.useDocumentEventListener)("paste", onPaste);
    const onMouseDown = (0, react_12.useCallback)((event) => {
      var _a2, _b2, _c2;
      if (contextMenu && contextMenuItems.length) {
        return;
      }
      const rightClick = event.button === 2 || event.button === 0 && event.ctrlKey;
      const clickInside = ((_a2 = innerRef.current) === null || _a2 === void 0 ? void 0 : _a2.contains(event.target)) || false;
      const cursorIndex = clickInside ? getCursorIndex(event, true, true) : null;
      if (!clickInside && editing && activeCell && columns[activeCell.col + 1].keepFocus) {
        return;
      }
      if (event.target instanceof HTMLElement && event.target.className.includes("dsg-expand-rows-indicator")) {
        setExpandingSelectionFromRowIndex(Math.max((_b2 = activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== null && _b2 !== void 0 ? _b2 : 0, (_c2 = selection === null || selection === void 0 ? void 0 : selection.max.row) !== null && _c2 !== void 0 ? _c2 : 0));
        return;
      }
      const clickOnActiveCell = cursorIndex && activeCell && activeCell.col === cursorIndex.col && activeCell.row === cursorIndex.row && !isCellDisabled(activeCell);
      if (clickOnActiveCell && editing) {
        return;
      }
      const clickOnStickyRightColumn = (cursorIndex === null || cursorIndex === void 0 ? void 0 : cursorIndex.col) === columns.length - 2 && hasStickyRightColumn;
      const rightClickInSelection = rightClick && selection && cursorIndex && cursorIndex.row >= selection.min.row && cursorIndex.row <= selection.max.row && cursorIndex.col >= selection.min.col && cursorIndex.col <= selection.max.col;
      const rightClickOnSelectedHeaders = rightClick && selection && cursorIndex && cursorIndex.row === -1 && cursorIndex.col >= selection.min.col && cursorIndex.col <= selection.max.col;
      const rightClickOnSelectedGutter = rightClick && selection && cursorIndex && cursorIndex.row >= selection.min.row && cursorIndex.row <= selection.max.row && cursorIndex.col === -1;
      const clickOnSelectedStickyRightColumn = clickOnStickyRightColumn && selection && cursorIndex && cursorIndex.row >= selection.min.row && cursorIndex.row <= selection.max.row;
      if (rightClick && !disableContextMenu) {
        setContextMenu({
          x: event.clientX,
          y: event.clientY,
          cursorIndex
        });
      }
      if ((!(event.shiftKey && activeCell) || rightClick) && data.length > 0) {
        setActiveCell(cursorIndex && {
          col: (rightClickInSelection || rightClickOnSelectedHeaders) && activeCell ? activeCell.col : Math.max(0, clickOnStickyRightColumn ? 0 : cursorIndex.col),
          row: (rightClickInSelection || rightClickOnSelectedGutter || clickOnSelectedStickyRightColumn) && activeCell ? activeCell.row : Math.max(0, cursorIndex.row),
          doNotScrollX: Boolean(rightClickInSelection && activeCell || clickOnStickyRightColumn || cursorIndex.col === -1),
          doNotScrollY: Boolean(rightClickInSelection && activeCell || cursorIndex.row === -1)
        });
      }
      if (clickOnActiveCell && !rightClick) {
        lastEditingCellRef.current = activeCell;
      }
      setEditing(Boolean(clickOnActiveCell && !rightClick));
      setSelectionMode(cursorIndex && !rightClick ? {
        columns: cursorIndex.col !== -1 && !clickOnStickyRightColumn || Boolean(event.shiftKey && activeCell),
        rows: cursorIndex.row !== -1 || Boolean(event.shiftKey && activeCell),
        active: true
      } : {
        columns: false,
        rows: false,
        active: false
      });
      if (event.shiftKey && activeCell && !rightClick) {
        setSelectionCell(cursorIndex && {
          col: Math.max(0, cursorIndex.col - (clickOnStickyRightColumn ? 1 : 0)),
          row: Math.max(0, cursorIndex.row)
        });
      } else if (!rightClickInSelection) {
        if (cursorIndex && ((cursorIndex === null || cursorIndex === void 0 ? void 0 : cursorIndex.col) === -1 || (cursorIndex === null || cursorIndex === void 0 ? void 0 : cursorIndex.row) === -1 || clickOnStickyRightColumn)) {
          let col = cursorIndex.col;
          let row = cursorIndex.row;
          let doNotScrollX = false;
          let doNotScrollY = false;
          if (cursorIndex.col === -1 || clickOnStickyRightColumn) {
            col = columns.length - (hasStickyRightColumn ? 3 : 2);
            doNotScrollX = true;
          }
          if (cursorIndex.row === -1) {
            row = data.length - 1;
            doNotScrollY = true;
          }
          if (rightClickOnSelectedHeaders && selectionCell) {
            col = selectionCell.col;
            doNotScrollY = true;
          }
          if ((rightClickOnSelectedGutter || clickOnSelectedStickyRightColumn) && selectionCell) {
            row = selectionCell.row;
            doNotScrollX = true;
          }
          setSelectionCell({ col, row, doNotScrollX, doNotScrollY });
        } else {
          setSelectionCell(null);
        }
        if (clickInside) {
          event.preventDefault();
        }
      }
    }, [
      contextMenu,
      contextMenuItems.length,
      getCursorIndex,
      editing,
      activeCell,
      columns,
      isCellDisabled,
      selection,
      hasStickyRightColumn,
      disableContextMenu,
      setSelectionMode,
      setActiveCell,
      setSelectionCell,
      selectionCell,
      data.length
    ]);
    (0, useDocumentEventListener_1.useDocumentEventListener)("mousedown", onMouseDown);
    const onMouseUp = (0, react_12.useCallback)(() => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _j;
      if (expandingSelectionFromRowIndex !== null) {
        if (expandSelectionRowsCount > 0 && activeCell) {
          let copyData = [];
          const min = (selection === null || selection === void 0 ? void 0 : selection.min) || activeCell;
          const max = (selection === null || selection === void 0 ? void 0 : selection.max) || activeCell;
          for (let row = min.row; row <= max.row; ++row) {
            copyData.push([]);
            for (let col = min.col; col <= max.col; ++col) {
              const { copyValue = () => null } = columns[col + 1];
              copyData[row - min.row].push(String((_a2 = copyValue({ rowData: data[row], rowIndex: row })) !== null && _a2 !== void 0 ? _a2 : ""));
            }
          }
          Promise.all(copyData[0].map((_, columnIndex) => {
            var _a3, _b3;
            const prePasteValues = (_a3 = columns[min.col + columnIndex + 1]) === null || _a3 === void 0 ? void 0 : _a3.prePasteValues;
            const values = copyData.map((row) => row[columnIndex]);
            return (_b3 = prePasteValues === null || prePasteValues === void 0 ? void 0 : prePasteValues(values)) !== null && _b3 !== void 0 ? _b3 : values;
          })).then((results) => {
            var _a3;
            copyData = copyData.map((_, rowIndex) => results.map((column) => column[rowIndex]));
            const newData = [...data];
            for (let columnIndex = 0; columnIndex < copyData[0].length; columnIndex++) {
              const pasteValue = (_a3 = columns[min.col + columnIndex + 1]) === null || _a3 === void 0 ? void 0 : _a3.pasteValue;
              if (pasteValue) {
                for (let rowIndex = max.row + 1; rowIndex <= max.row + expandSelectionRowsCount; rowIndex++) {
                  if (!isCellDisabled({
                    col: columnIndex + min.col,
                    row: rowIndex
                  })) {
                    newData[rowIndex] = pasteValue({
                      rowData: newData[rowIndex],
                      value: copyData[(rowIndex - max.row - 1) % copyData.length][columnIndex],
                      rowIndex
                    });
                  }
                }
              }
            }
            onChange(newData, [
              {
                type: "UPDATE",
                fromRowIndex: max.row + 1,
                toRowIndex: max.row + 1 + expandSelectionRowsCount
              }
            ]);
          });
          setExpandSelectionRowsCount(0);
          setActiveCell({
            col: Math.min((_b2 = activeCell === null || activeCell === void 0 ? void 0 : activeCell.col) !== null && _b2 !== void 0 ? _b2 : Infinity, (_c2 = selection === null || selection === void 0 ? void 0 : selection.min.col) !== null && _c2 !== void 0 ? _c2 : Infinity),
            row: Math.min((_d2 = activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== null && _d2 !== void 0 ? _d2 : Infinity, (_e2 = selection === null || selection === void 0 ? void 0 : selection.min.row) !== null && _e2 !== void 0 ? _e2 : Infinity),
            doNotScrollX: true,
            doNotScrollY: true
          });
          setSelectionCell({
            col: Math.max((_f2 = activeCell === null || activeCell === void 0 ? void 0 : activeCell.col) !== null && _f2 !== void 0 ? _f2 : 0, (_g = selection === null || selection === void 0 ? void 0 : selection.max.col) !== null && _g !== void 0 ? _g : 0),
            row: Math.max((_h = activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== null && _h !== void 0 ? _h : 0, (_j = selection === null || selection === void 0 ? void 0 : selection.max.row) !== null && _j !== void 0 ? _j : 0) + expandSelectionRowsCount
          });
        }
        setExpandingSelectionFromRowIndex(null);
      }
      setSelectionMode({
        columns: false,
        rows: false,
        active: false
      });
    }, [
      expandingSelectionFromRowIndex,
      setSelectionMode,
      expandSelectionRowsCount,
      activeCell,
      selection === null || selection === void 0 ? void 0 : selection.min,
      selection === null || selection === void 0 ? void 0 : selection.max,
      data,
      onChange,
      setActiveCell,
      setSelectionCell,
      columns,
      isCellDisabled
    ]);
    (0, useDocumentEventListener_1.useDocumentEventListener)("mouseup", onMouseUp);
    const onMouseMove = (0, react_12.useCallback)((event) => {
      if (expandingSelectionFromRowIndex !== null) {
        const cursorIndex = getCursorIndex(event);
        if (cursorIndex) {
          setExpandSelectionRowsCount(Math.max(0, cursorIndex.row - expandingSelectionFromRowIndex));
          scrollTo({
            col: cursorIndex.col,
            row: Math.max(cursorIndex.row, expandingSelectionFromRowIndex)
          });
        }
      }
      if (selectionMode.active) {
        const cursorIndex = getCursorIndex(event);
        const lastColumnIndex = columns.length - (hasStickyRightColumn ? 3 : 2);
        setSelectionCell(cursorIndex && {
          col: selectionMode.columns ? Math.max(0, Math.min(lastColumnIndex, cursorIndex.col)) : lastColumnIndex,
          row: selectionMode.rows ? Math.max(0, cursorIndex.row) : data.length - 1,
          doNotScrollX: !selectionMode.columns,
          doNotScrollY: !selectionMode.rows
        });
        setEditing(false);
      }
    }, [
      scrollTo,
      selectionMode.active,
      selectionMode.columns,
      selectionMode.rows,
      getCursorIndex,
      columns.length,
      hasStickyRightColumn,
      setSelectionCell,
      data.length,
      expandingSelectionFromRowIndex
    ]);
    (0, useDocumentEventListener_1.useDocumentEventListener)("mousemove", onMouseMove);
    const onKeyDown = (0, react_12.useCallback)((event) => {
      if (!activeCell) {
        return;
      }
      if (event.isComposing) {
        return;
      }
      if (event.key === "Tab" && !event.shiftKey && activeCell.col === columns.length - (hasStickyRightColumn ? 3 : 2) && !columns[activeCell.col + 1].disableKeys) {
        if (activeCell.row === data.length - 1) {
          if (afterTabIndexRef.current) {
            event.preventDefault();
            setActiveCell(null);
            setSelectionCell(null);
            setEditing(false);
            const allElements = (0, tab_1.getAllTabbableElements)();
            const index = allElements.indexOf(afterTabIndexRef.current);
            allElements[(index + 1) % allElements.length].focus();
            return;
          }
        } else {
          setActiveCell((cell) => {
            var _a2;
            return { col: 0, row: ((_a2 = cell === null || cell === void 0 ? void 0 : cell.row) !== null && _a2 !== void 0 ? _a2 : 0) + 1 };
          });
          setSelectionCell(null);
          setEditing(false);
          event.preventDefault();
          return;
        }
      }
      if (event.key === "Tab" && event.shiftKey && activeCell.col === 0 && !columns[activeCell.col + 1].disableKeys) {
        if (activeCell.row === 0) {
          if (beforeTabIndexRef.current) {
            event.preventDefault();
            setActiveCell(null);
            setSelectionCell(null);
            setEditing(false);
            const allElements = (0, tab_1.getAllTabbableElements)();
            const index = allElements.indexOf(beforeTabIndexRef.current);
            allElements[(index - 1 + allElements.length) % allElements.length].focus();
            return;
          }
        } else {
          setActiveCell((cell) => {
            var _a2;
            return {
              col: columns.length - (hasStickyRightColumn ? 3 : 2),
              row: ((_a2 = cell === null || cell === void 0 ? void 0 : cell.row) !== null && _a2 !== void 0 ? _a2 : 1) - 1
            };
          });
          setSelectionCell(null);
          setEditing(false);
          event.preventDefault();
          return;
        }
      }
      if (event.key.startsWith("Arrow") || event.key === "Tab") {
        if (editing && columns[activeCell.col + 1].disableKeys) {
          return;
        }
        if (editing && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
          return;
        }
        const add = ([x, y], cell) => cell && {
          col: Math.max(0, Math.min(columns.length - (hasStickyRightColumn ? 3 : 2), cell.col + x)),
          row: Math.max(0, Math.min(data.length - 1, cell.row + y))
        };
        if (event.key === "Tab" && event.shiftKey) {
          setActiveCell((cell) => add([-1, 0], cell));
          setSelectionCell(null);
        } else {
          const direction = {
            ArrowDown: [0, 1],
            ArrowUp: [0, -1],
            ArrowLeft: [-1, 0],
            ArrowRight: [1, 0],
            Tab: [1, 0]
          }[event.key];
          if (event.ctrlKey || event.metaKey) {
            direction[0] *= columns.length;
            direction[1] *= data.length;
          }
          if (event.shiftKey) {
            setSelectionCell((cell) => add(direction, cell || activeCell));
          } else {
            setActiveCell((cell) => add(direction, cell));
            setSelectionCell(null);
          }
        }
        setEditing(false);
        event.preventDefault();
      } else if (event.key === "Escape") {
        if (!editing && !selectionCell) {
          setActiveCell(null);
        }
        setSelectionCell(null);
        setEditing(false);
      } else if ((event.key === "Enter" || event.key === "F2") && !event.ctrlKey && !event.metaKey && !event.altKey && !event.shiftKey) {
        setSelectionCell(null);
        if (editing) {
          if (!columns[activeCell.col + 1].disableKeys) {
            stopEditing();
            event.preventDefault();
          }
        } else if (!isCellDisabled(activeCell)) {
          lastEditingCellRef.current = activeCell;
          setEditing(true);
          scrollTo(activeCell);
          event.preventDefault();
        }
      } else if (event.key === "Enter" && !event.ctrlKey && !event.metaKey && !event.altKey && event.shiftKey) {
        insertRowAfter((selection === null || selection === void 0 ? void 0 : selection.max.row) || activeCell.row);
      } else if (event.key === "d" && (event.ctrlKey || event.metaKey) && !event.altKey && !event.shiftKey) {
        duplicateRows((selection === null || selection === void 0 ? void 0 : selection.min.row) || activeCell.row, selection === null || selection === void 0 ? void 0 : selection.max.row);
        event.preventDefault();
      } else if ((event.key.match(/^[ -~]$/) || event.code.match(/Key[A-Z]$/)) && !event.ctrlKey && !event.metaKey && !event.altKey) {
        if (!editing && !isCellDisabled(activeCell)) {
          lastEditingCellRef.current = activeCell;
          setSelectionCell(null);
          setEditing(true);
          scrollTo(activeCell);
        }
      } else if (["Backspace", "Delete"].includes(event.key)) {
        if (!editing) {
          deleteSelection();
          event.preventDefault();
        }
      } else if (event.key === "a" && (event.ctrlKey || event.metaKey)) {
        if (!editing) {
          setActiveCell({
            col: 0,
            row: 0,
            doNotScrollY: true,
            doNotScrollX: true
          });
          setSelectionCell({
            col: columns.length - (hasStickyRightColumn ? 3 : 2),
            row: data.length - 1,
            doNotScrollY: true,
            doNotScrollX: true
          });
          event.preventDefault();
        }
      }
    }, [
      activeCell,
      columns,
      data.length,
      deleteSelection,
      duplicateRows,
      editing,
      insertRowAfter,
      isCellDisabled,
      scrollTo,
      selection === null || selection === void 0 ? void 0 : selection.max.row,
      selection === null || selection === void 0 ? void 0 : selection.min.row,
      selectionCell,
      setActiveCell,
      setSelectionCell,
      stopEditing,
      hasStickyRightColumn
    ]);
    (0, useDocumentEventListener_1.useDocumentEventListener)("keydown", onKeyDown);
    const onContextMenu = (0, react_12.useCallback)((event) => {
      var _a2;
      const clickInside = ((_a2 = innerRef.current) === null || _a2 === void 0 ? void 0 : _a2.contains(event.target)) || false;
      const cursorIndex = clickInside ? getCursorIndex(event, true, true) : null;
      const clickOnActiveCell = cursorIndex && activeCell && activeCell.col === cursorIndex.col && activeCell.row === cursorIndex.row && editing;
      if (clickInside && !clickOnActiveCell) {
        event.preventDefault();
      }
    }, [getCursorIndex, activeCell, editing]);
    (0, useDocumentEventListener_1.useDocumentEventListener)("contextmenu", onContextMenu);
    (0, react_12.useEffect)(() => {
      const items = [];
      if ((activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== void 0) {
        items.push({
          type: "COPY",
          action: () => {
            onCopy();
            setContextMenu(null);
          }
        }, {
          type: "CUT",
          action: () => {
            onCut();
            setContextMenu(null);
          }
        }, {
          type: "PASTE",
          action: () => __awaiter(void 0, void 0, void 0, function* () {
            if (navigator.clipboard.read !== void 0) {
              const items2 = yield navigator.clipboard.read();
              items2.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
                let pasteData = [[""]];
                if (item.types.includes("text/plain")) {
                  const plainTextData = yield item.getType("text/plain");
                  pasteData = (0, copyPasting_1.parseTextPlainData)(yield plainTextData.text());
                } else if (item.types.includes("text/html")) {
                  const htmlTextData = yield item.getType("text/html");
                  pasteData = (0, copyPasting_1.parseTextHtmlData)(yield htmlTextData.text());
                } else if (item.types.includes("text")) {
                  const htmlTextData = yield item.getType("text");
                  pasteData = (0, copyPasting_1.parseTextHtmlData)(yield htmlTextData.text());
                }
                applyPasteDataToDatasheet(pasteData);
              }));
            } else if (navigator.clipboard.readText !== void 0) {
              const text = yield navigator.clipboard.readText();
              applyPasteDataToDatasheet((0, copyPasting_1.parseTextPlainData)(text));
            } else {
              alert("This action is unavailable in your browser, but you can still use Ctrl+V for paste");
            }
            setContextMenu(null);
          })
        });
      }
      if ((selection === null || selection === void 0 ? void 0 : selection.max.row) !== void 0) {
        items.push({
          type: "INSERT_ROW_BELLOW",
          action: () => {
            setContextMenu(null);
            insertRowAfter(selection.max.row);
          }
        });
      } else if ((activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== void 0) {
        items.push({
          type: "INSERT_ROW_BELLOW",
          action: () => {
            setContextMenu(null);
            insertRowAfter(activeCell.row);
          }
        });
      }
      if ((selection === null || selection === void 0 ? void 0 : selection.min.row) !== void 0 && selection.min.row !== selection.max.row) {
        items.push({
          type: "DUPLICATE_ROWS",
          fromRow: selection.min.row + 1,
          toRow: selection.max.row + 1,
          action: () => {
            setContextMenu(null);
            duplicateRows(selection.min.row, selection.max.row);
          }
        });
      } else if ((activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== void 0) {
        items.push({
          type: "DUPLICATE_ROW",
          action: () => {
            setContextMenu(null);
            duplicateRows(activeCell.row);
          }
        });
      }
      if ((selection === null || selection === void 0 ? void 0 : selection.min.row) !== void 0 && selection.min.row !== selection.max.row) {
        items.push({
          type: "DELETE_ROWS",
          fromRow: selection.min.row + 1,
          toRow: selection.max.row + 1,
          action: () => {
            setContextMenu(null);
            deleteRows(selection.min.row, selection.max.row);
          }
        });
      } else if ((activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== void 0) {
        items.push({
          type: "DELETE_ROW",
          action: () => {
            setContextMenu(null);
            deleteRows(activeCell.row);
          }
        });
      }
      setContextMenuItems(items);
      if (!items.length) {
        setContextMenu(null);
      }
    }, [
      selection,
      activeCell,
      deleteRows,
      duplicateRows,
      insertRowAfter,
      onCut,
      onCopy,
      applyPasteDataToDatasheet
    ]);
    const contextMenuItemsRef = (0, react_12.useRef)(contextMenuItems);
    contextMenuItemsRef.current = contextMenuItems;
    const getContextMenuItems = (0, react_12.useCallback)(() => contextMenuItemsRef.current, []);
    (0, react_12.useImperativeHandle)(ref, () => ({
      activeCell: (0, typeCheck_1.getCellWithId)(activeCell, columns),
      selection: (0, typeCheck_1.getSelectionWithId)(selection !== null && selection !== void 0 ? selection : activeCell ? { min: activeCell, max: activeCell } : null, columns),
      setSelection: (value) => {
        const selection2 = (0, typeCheck_1.getSelection)(value, columns.length - (hasStickyRightColumn ? 2 : 1), data.length, columns);
        setActiveCell((selection2 === null || selection2 === void 0 ? void 0 : selection2.min) || null);
        setEditing(false);
        setSelectionMode({ columns: false, active: false, rows: false });
        setSelectionCell((selection2 === null || selection2 === void 0 ? void 0 : selection2.max) || null);
      },
      setActiveCell: (value) => {
        const cell = (0, typeCheck_1.getCell)(value, columns.length - (hasStickyRightColumn ? 2 : 1), data.length, columns);
        setActiveCell(cell);
        setEditing(false);
        setSelectionMode({ columns: false, active: false, rows: false });
        setSelectionCell(null);
      }
    }));
    const callbacksRef = (0, react_12.useRef)({
      onFocus,
      onBlur,
      onActiveCellChange,
      onSelectionChange
    });
    callbacksRef.current.onFocus = onFocus;
    callbacksRef.current.onBlur = onBlur;
    callbacksRef.current.onActiveCellChange = onActiveCellChange;
    callbacksRef.current.onSelectionChange = onSelectionChange;
    (0, react_12.useEffect)(() => {
      if (lastEditingCellRef.current) {
        if (editing) {
          callbacksRef.current.onFocus({
            cell: (0, typeCheck_1.getCellWithId)(lastEditingCellRef.current, columns)
          });
        } else {
          callbacksRef.current.onBlur({
            cell: (0, typeCheck_1.getCellWithId)(lastEditingCellRef.current, columns)
          });
        }
      }
    }, [editing, columns]);
    (0, react_12.useEffect)(() => {
      callbacksRef.current.onActiveCellChange({
        cell: (0, typeCheck_1.getCellWithId)(activeCell, columns)
      });
    }, [activeCell === null || activeCell === void 0 ? void 0 : activeCell.col, activeCell === null || activeCell === void 0 ? void 0 : activeCell.row, columns]);
    (0, react_12.useEffect)(() => {
      callbacksRef.current.onSelectionChange({
        selection: (0, typeCheck_1.getSelectionWithId)(selection !== null && selection !== void 0 ? selection : activeCell ? { min: activeCell, max: activeCell } : null, columns)
      });
    }, [
      // eslint-disable-next-line react-hooks/exhaustive-deps
      (_c = selection === null || selection === void 0 ? void 0 : selection.min.col) !== null && _c !== void 0 ? _c : activeCell === null || activeCell === void 0 ? void 0 : activeCell.col,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      (_d = selection === null || selection === void 0 ? void 0 : selection.min.row) !== null && _d !== void 0 ? _d : activeCell === null || activeCell === void 0 ? void 0 : activeCell.row,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      (_e = selection === null || selection === void 0 ? void 0 : selection.max.col) !== null && _e !== void 0 ? _e : activeCell === null || activeCell === void 0 ? void 0 : activeCell.col,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      (_f = selection === null || selection === void 0 ? void 0 : selection.max.row) !== null && _f !== void 0 ? _f : activeCell === null || activeCell === void 0 ? void 0 : activeCell.row,
      activeCell === null || activeCell === void 0 ? void 0 : activeCell.col,
      activeCell === null || activeCell === void 0 ? void 0 : activeCell.row,
      columns
    ]);
    return react_12.default.createElement(
      "div",
      { className, style },
      react_12.default.createElement("div", { ref: beforeTabIndexRef, tabIndex: rawColumns.length && data.length ? 0 : void 0, onFocus: (e) => {
        e.target.blur();
        setActiveCell({ col: 0, row: 0 });
      } }),
      react_12.default.createElement(
        Grid_1.Grid,
        { columns, outerRef, columnWidths, hasStickyRightColumn, displayHeight, data, fullWidth, headerRowHeight, activeCell, innerRef, rowHeight: getRowSize, rowKey, selection, rowClassName, editing, getContextMenuItems, setRowData, deleteRows, insertRowAfter, duplicateRows, stopEditing, cellClassName, onScroll },
        react_12.default.createElement(SelectionRect_1.SelectionRect, { columnRights, columnWidths, activeCell, selection, headerRowHeight, rowHeight: getRowSize, hasStickyRightColumn, dataLength: data.length, viewHeight: height, viewWidth: width, contentWidth: fullWidth ? void 0 : contentWidth, edges, editing, isCellDisabled, expandSelection })
      ),
      react_12.default.createElement("div", { ref: afterTabIndexRef, tabIndex: rawColumns.length && data.length ? 0 : void 0, onFocus: (e) => {
        e.target.blur();
        setActiveCell({
          col: columns.length - (hasStickyRightColumn ? 3 : 2),
          row: data.length - 1
        });
      } }),
      !lockRows && AddRowsComponent && react_12.default.createElement(AddRowsComponent, { addRows: (count) => insertRowAfter(data.length - 1, count) }),
      contextMenu && contextMenuItems.length > 0 && react_12.default.createElement(ContextMenuComponent, { clientX: contextMenu.x, clientY: contextMenu.y, cursorIndex: contextMenu.cursorIndex, items: contextMenuItems, close: () => setContextMenu(null) })
    );
  }));
  exports.DataSheetGrid.displayName = "DataSheetGrid";
})(DataSheetGrid);
var StaticDataSheetGrid = {};
var __rest$1 = commonjsGlobal$1 && commonjsGlobal$1.__rest || function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var __importDefault$3 = commonjsGlobal$1 && commonjsGlobal$1.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(StaticDataSheetGrid, "__esModule", { value: true });
StaticDataSheetGrid.StaticDataSheetGrid = void 0;
const react_1$6 = reactExports;
const DataSheetGrid_1 = DataSheetGrid;
const react_2 = __importDefault$3(reactExports);
StaticDataSheetGrid.StaticDataSheetGrid = react_2.default.forwardRef((_a, ref) => {
  var { columns, gutterColumn, stickyRightColumn, addRowsComponent, createRow, duplicateRow, style, rowKey, onFocus, onBlur, onActiveCellChange, onSelectionChange, rowClassName, rowHeight } = _a, rest = __rest$1(_a, ["columns", "gutterColumn", "stickyRightColumn", "addRowsComponent", "createRow", "duplicateRow", "style", "rowKey", "onFocus", "onBlur", "onActiveCellChange", "onSelectionChange", "rowClassName", "rowHeight"]);
  const [staticProps] = (0, react_1$6.useState)({
    columns,
    gutterColumn,
    stickyRightColumn,
    addRowsComponent,
    createRow,
    duplicateRow,
    style,
    rowKey,
    onFocus,
    onBlur,
    onActiveCellChange,
    onSelectionChange,
    rowClassName,
    rowHeight
  });
  return react_2.default.createElement(DataSheetGrid_1.DataSheetGrid, Object.assign({}, staticProps, rest, { rowHeight: typeof rowHeight === "number" ? rowHeight : staticProps.rowHeight, ref }));
});
var textColumn = {};
var useFirstRender$1 = {};
Object.defineProperty(useFirstRender$1, "__esModule", { value: true });
useFirstRender$1.useFirstRender = void 0;
const react_1$5 = reactExports;
const useFirstRender = () => {
  const firstRenderRef = (0, react_1$5.useRef)(true);
  const firstRender = firstRenderRef.current;
  firstRenderRef.current = false;
  return firstRender;
};
useFirstRender$1.useFirstRender = useFirstRender;
var __createBinding$4 = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$4 = commonjsGlobal$1 && commonjsGlobal$1.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$4 = commonjsGlobal$1 && commonjsGlobal$1.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding$4(result, mod, k);
  }
  __setModuleDefault$4(result, mod);
  return result;
};
var __importDefault$2 = commonjsGlobal$1 && commonjsGlobal$1.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(textColumn, "__esModule", { value: true });
textColumn.createTextColumn = textColumn.textColumn = void 0;
const react_1$4 = __importStar$4(reactExports);
const classnames_1$2 = __importDefault$2(classnamesExports);
const useFirstRender_1 = useFirstRender$1;
const TextComponent = react_1$4.default.memo(({ active, focus, rowData, setRowData, columnData: { placeholder, alignRight, formatInputOnFocus, formatBlurredInput, parseUserInput, continuousUpdates } }) => {
  const ref = (0, react_1$4.useRef)(null);
  const firstRender = (0, useFirstRender_1.useFirstRender)();
  const asyncRef = (0, react_1$4.useRef)({
    rowData,
    formatInputOnFocus,
    formatBlurredInput,
    setRowData,
    parseUserInput,
    continuousUpdates,
    firstRender,
    // Timestamp of last focus (when focus becomes true) and last change (input change)
    // used to prevent un-necessary updates when value was not changed
    focusedAt: 0,
    changedAt: 0,
    // This allows us to keep track of whether or not the user blurred the input using the Esc key
    // If the Esc key is used we do not update the row's value (only relevant when continuousUpdates is false)
    escPressed: false
  });
  asyncRef.current = {
    rowData,
    formatInputOnFocus,
    formatBlurredInput,
    setRowData,
    parseUserInput,
    continuousUpdates,
    firstRender,
    // Keep the same values across renders
    focusedAt: asyncRef.current.focusedAt,
    changedAt: asyncRef.current.changedAt,
    escPressed: asyncRef.current.escPressed
  };
  (0, react_1$4.useLayoutEffect)(() => {
    if (focus) {
      if (ref.current) {
        ref.current.value = asyncRef.current.formatInputOnFocus(asyncRef.current.rowData);
        ref.current.focus();
        ref.current.select();
      }
      asyncRef.current.escPressed = false;
      asyncRef.current.focusedAt = Date.now();
    } else {
      if (ref.current) {
        if (!asyncRef.current.escPressed && !asyncRef.current.continuousUpdates && !asyncRef.current.firstRender && // Make sure that focus was gained more than 10 ms ago, used to prevent flickering
        asyncRef.current.changedAt >= asyncRef.current.focusedAt) {
          asyncRef.current.setRowData(asyncRef.current.parseUserInput(ref.current.value));
        }
        ref.current.blur();
      }
    }
  }, [focus]);
  (0, react_1$4.useEffect)(() => {
    if (!focus && ref.current) {
      ref.current.value = asyncRef.current.formatBlurredInput(rowData);
    }
  }, [focus, rowData]);
  return react_1$4.default.createElement("input", {
    // We use an uncontrolled component for better performance
    defaultValue: formatBlurredInput(rowData),
    className: (0, classnames_1$2.default)("dsg-input", alignRight && "dsg-input-align-right"),
    placeholder: active ? placeholder : void 0,
    // Important to prevent any undesired "tabbing"
    tabIndex: -1,
    ref,
    // Make sure that while the cell is not focus, the user cannot interact with the input
    // The cursor will not change to "I", the style of the input will not change,
    // and the user cannot click and edit the input (this part is handled by DataSheetGrid itself)
    style: { pointerEvents: focus ? "auto" : "none" },
    onChange: (e) => {
      asyncRef.current.changedAt = Date.now();
      if (continuousUpdates) {
        setRowData(parseUserInput(e.target.value));
      }
    },
    onKeyDown: (e) => {
      if (e.key === "Escape") {
        asyncRef.current.escPressed = true;
      }
    }
  });
});
TextComponent.displayName = "TextComponent";
textColumn.textColumn = createTextColumn();
function createTextColumn({ placeholder, alignRight = false, continuousUpdates = true, deletedValue = null, parseUserInput = (value) => value.trim() || null, formatBlurredInput = (value) => String(value !== null && value !== void 0 ? value : ""), formatInputOnFocus = (value) => String(value !== null && value !== void 0 ? value : ""), formatForCopy = (value) => String(value !== null && value !== void 0 ? value : ""), parsePastedValue = (value) => value.replace(/[\n\r]+/g, " ").trim() || null } = {}) {
  return {
    component: TextComponent,
    columnData: {
      placeholder,
      alignRight,
      continuousUpdates,
      formatInputOnFocus,
      formatBlurredInput,
      parseUserInput
    },
    deleteValue: () => deletedValue,
    copyValue: ({ rowData }) => formatForCopy(rowData),
    pasteValue: ({ value }) => parsePastedValue(value),
    isCellEmpty: ({ rowData }) => rowData === null || rowData === void 0
  };
}
textColumn.createTextColumn = createTextColumn;
var checkboxColumn = {};
var __createBinding$3 = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$3 = commonjsGlobal$1 && commonjsGlobal$1.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$3 = commonjsGlobal$1 && commonjsGlobal$1.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding$3(result, mod, k);
  }
  __setModuleDefault$3(result, mod);
  return result;
};
Object.defineProperty(checkboxColumn, "__esModule", { value: true });
checkboxColumn.checkboxColumn = void 0;
const react_1$3 = __importStar$3(reactExports);
const FALSY = [
  "",
  "false",
  "no",
  "off",
  "disabled",
  "0",
  "n",
  "f",
  "unchecked",
  "undefined",
  "null",
  "wrong",
  "negative"
];
const CheckboxComponent = react_1$3.default.memo(({ focus, rowData, setRowData, active, stopEditing, disabled }) => {
  const ref = (0, react_1$3.useRef)(null);
  (0, react_1$3.useLayoutEffect)(() => {
    if (focus) {
      setRowData(!rowData);
      stopEditing({ nextRow: false });
    }
  }, [focus, stopEditing]);
  return react_1$3.default.createElement("input", {
    className: "dsg-checkbox",
    // Important to prevent any undesired "tabbing"
    tabIndex: -1,
    type: "checkbox",
    ref,
    disabled,
    checked: Boolean(rowData),
    // When cell is not active, we allow the user to toggle the checkbox by clicking on it
    // When cell becomes active, we disable this feature and rely on focus instead (see `useLayoutEffect` above)
    onMouseDown: () => !active && setRowData(!rowData),
    onChange: () => null
  });
});
CheckboxComponent.displayName = "CheckboxComponent";
checkboxColumn.checkboxColumn = {
  component: CheckboxComponent,
  deleteValue: () => false,
  // We can customize what value is copied: when the checkbox is checked we copy YES, otherwise we copy NO
  copyValue: ({ rowData }) => rowData ? "YES" : "NO",
  // Since we copy custom values, we have to make sure pasting gives us the expected result
  // Here NO is included in the FALSY array, so it will be converted to false, YES is not, so it will be converted to true
  pasteValue: ({ value }) => !FALSY.includes(value.toLowerCase()),
  isCellEmpty: ({ rowData }) => !rowData
};
var floatColumn = {};
Object.defineProperty(floatColumn, "__esModule", { value: true });
floatColumn.floatColumn = void 0;
const textColumn_1$2 = textColumn;
floatColumn.floatColumn = (0, textColumn_1$2.createTextColumn)({
  alignRight: true,
  formatBlurredInput: (value) => typeof value === "number" ? new Intl.NumberFormat().format(value) : "",
  parseUserInput: (value) => {
    const number = parseFloat(value);
    return !isNaN(number) ? number : null;
  },
  parsePastedValue: (value) => {
    const number = parseFloat(value);
    return !isNaN(number) ? number : null;
  }
});
var intColumn = {};
Object.defineProperty(intColumn, "__esModule", { value: true });
intColumn.intColumn = void 0;
const textColumn_1$1 = textColumn;
intColumn.intColumn = (0, textColumn_1$1.createTextColumn)({
  alignRight: true,
  formatBlurredInput: (value) => typeof value === "number" ? new Intl.NumberFormat().format(value) : "",
  parseUserInput: (value) => {
    const number = parseFloat(value);
    return !isNaN(number) ? Math.round(number) : null;
  },
  parsePastedValue: (value) => {
    const number = parseFloat(value);
    return !isNaN(number) ? Math.round(number) : null;
  }
});
var percentColumn = {};
Object.defineProperty(percentColumn, "__esModule", { value: true });
percentColumn.percentColumn = void 0;
const textColumn_1 = textColumn;
const TEN_TO_THE_12 = 1e12;
const TEN_TO_THE_10 = 1e10;
percentColumn.percentColumn = (0, textColumn_1.createTextColumn)({
  alignRight: true,
  formatBlurredInput: (value) => typeof value === "number" ? new Intl.NumberFormat(void 0, { style: "percent" }).format(value) : "",
  // We turn percentages (numbers between 0 and 1) into string (between 0 and 100)
  // We could have just multiply percentages by 100, but floating point arithmetic won't work as expected: 0.29 * 100 === 28.999999999999996
  // So we have to round those numbers to 10 decimals before turning them into strings
  formatInputOnFocus: (value) => typeof value === "number" && !isNaN(value) ? String(Math.round(value * TEN_TO_THE_12) / TEN_TO_THE_10) : "",
  parseUserInput: (value) => {
    const number = parseFloat(value);
    return !isNaN(number) ? number / 100 : null;
  },
  parsePastedValue: (value) => {
    const number = parseFloat(value);
    return !isNaN(number) ? number : null;
  }
});
var dateColumn = {};
var __createBinding$2 = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$2 = commonjsGlobal$1 && commonjsGlobal$1.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$2 = commonjsGlobal$1 && commonjsGlobal$1.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding$2(result, mod, k);
  }
  __setModuleDefault$2(result, mod);
  return result;
};
var __importDefault$1 = commonjsGlobal$1 && commonjsGlobal$1.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(dateColumn, "__esModule", { value: true });
dateColumn.dateColumn = void 0;
const react_1$2 = __importStar$2(reactExports);
const classnames_1$1 = __importDefault$1(classnamesExports);
const DateComponent = react_1$2.default.memo(({ focus, active, rowData, setRowData }) => {
  var _a;
  const ref = (0, react_1$2.useRef)(null);
  (0, react_1$2.useLayoutEffect)(() => {
    var _a2, _b;
    if (focus) {
      (_a2 = ref.current) === null || _a2 === void 0 ? void 0 : _a2.select();
    } else {
      (_b = ref.current) === null || _b === void 0 ? void 0 : _b.blur();
    }
  }, [focus]);
  return react_1$2.default.createElement("input", {
    className: (0, classnames_1$1.default)("dsg-input", !active && "dsg-hide-date-picker"),
    type: "date",
    // Important to prevent any undesired "tabbing"
    tabIndex: -1,
    max: "9999-12-31",
    ref,
    // The `pointerEvents` trick is the same than in `textColumn`
    // Only show the calendar symbol on non-empty cells, or when cell is active, otherwise set opacity to 0
    style: {
      pointerEvents: focus ? "auto" : "none",
      opacity: rowData || active ? void 0 : 0
    },
    // Because rowData is a Date object and we need a string, we use toISOString...
    value: (_a = rowData === null || rowData === void 0 ? void 0 : rowData.toISOString().substr(0, 10)) !== null && _a !== void 0 ? _a : "",
    // ...and the input returns a string that should be converted into a Date object
    onChange: (e) => {
      const date = new Date(e.target.value);
      setRowData(isNaN(date.getTime()) ? null : date);
    }
  });
});
DateComponent.displayName = "DateComponent";
dateColumn.dateColumn = {
  component: DateComponent,
  deleteValue: () => null,
  // We convert the date to a string for copying using toISOString
  copyValue: ({ rowData }) => rowData ? rowData.toISOString().substr(0, 10) : null,
  // Because the Date constructor works using iso format, we can use it to parse ISO string back to a Date object
  pasteValue: ({ value }) => {
    const date = new Date(value.replace(/\.\s?|\//g, "-"));
    return isNaN(date.getTime()) ? null : date;
  },
  minWidth: 170,
  isCellEmpty: ({ rowData }) => !rowData
};
var isoDateColumn = {};
var __createBinding$1 = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$1 = commonjsGlobal$1 && commonjsGlobal$1.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$1 = commonjsGlobal$1 && commonjsGlobal$1.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding$1(result, mod, k);
  }
  __setModuleDefault$1(result, mod);
  return result;
};
var __importDefault = commonjsGlobal$1 && commonjsGlobal$1.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(isoDateColumn, "__esModule", { value: true });
isoDateColumn.isoDateColumn = void 0;
const react_1$1 = __importStar$1(reactExports);
const classnames_1 = __importDefault(classnamesExports);
const IsoDateComponent = react_1$1.default.memo(({ focus, active, rowData, setRowData }) => {
  const ref = (0, react_1$1.useRef)(null);
  (0, react_1$1.useLayoutEffect)(() => {
    var _a, _b;
    if (focus) {
      (_a = ref.current) === null || _a === void 0 ? void 0 : _a.select();
    } else {
      (_b = ref.current) === null || _b === void 0 ? void 0 : _b.blur();
    }
  }, [focus]);
  return react_1$1.default.createElement("input", {
    className: (0, classnames_1.default)("dsg-input", !active && "dsg-hide-date-picker"),
    type: "date",
    // Important to prevent any undesired "tabbing"
    tabIndex: -1,
    max: "9999-12-31",
    ref,
    // The `pointerEvents` trick is the same than in `textColumn`
    // Only show the calendar symbol on non-empty cells, or when cell is active, otherwise set opacity to 0
    style: {
      pointerEvents: focus ? "auto" : "none",
      opacity: rowData || active ? void 0 : 0
    },
    // Because rowData is a Date object and we need a string, we use toISOString...
    value: rowData !== null && rowData !== void 0 ? rowData : "",
    // ...and the input returns a string that should be converted into a Date object
    onChange: (e) => {
      const date = new Date(e.target.value);
      setRowData(isNaN(date.getTime()) ? null : date.toISOString().substr(0, 10));
    }
  });
});
IsoDateComponent.displayName = "IsoDateComponent";
isoDateColumn.isoDateColumn = {
  component: IsoDateComponent,
  deleteValue: () => null,
  // Because the Date constructor works using iso format, we can use it to parse ISO string back to a Date object
  pasteValue: ({ value }) => {
    const date = new Date(value.replace(/\.\s?|\//g, "-"));
    return isNaN(date.getTime()) ? null : date.toISOString().substr(0, 10);
  },
  minWidth: 170,
  isCellEmpty: ({ rowData }) => !rowData
};
var keyColumn$1 = {};
var __createBinding = commonjsGlobal$1 && commonjsGlobal$1.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = commonjsGlobal$1 && commonjsGlobal$1.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar = commonjsGlobal$1 && commonjsGlobal$1.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
var __rest = commonjsGlobal$1 && commonjsGlobal$1.__rest || function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
Object.defineProperty(keyColumn$1, "__esModule", { value: true });
keyColumn$1.keyColumn = void 0;
const react_1 = __importStar(reactExports);
const KeyComponent = (_a) => {
  var { columnData: { key, original }, rowData, setRowData } = _a, rest = __rest(_a, ["columnData", "rowData", "setRowData"]);
  const rowDataRef = (0, react_1.useRef)(rowData);
  rowDataRef.current = rowData;
  const setKeyData = (0, react_1.useCallback)((value) => {
    setRowData(Object.assign(Object.assign({}, rowDataRef.current), { [key]: value }));
  }, [key, setRowData]);
  if (!original.component) {
    return react_1.default.createElement(react_1.default.Fragment, null);
  }
  const Component = original.component;
  return react_1.default.createElement(Component, Object.assign({
    columnData: original.columnData,
    setRowData: setKeyData,
    // We only pass the value of the desired key, this is why each cell does not have to re-render everytime
    // another cell in the same row changes!
    rowData: rowData[key]
  }, rest));
};
const keyColumn = (key, column) => Object.assign(Object.assign({ id: key }, column), {
  // We pass the key and the original column as columnData to be able to retrieve them in the cell component
  columnData: { key, original: column },
  component: KeyComponent,
  // Here we simply wrap all functions to only pass the value of the desired key to the column, and not the entire row
  copyValue: ({ rowData, rowIndex }) => {
    var _a, _b;
    return (_b = (_a = column.copyValue) === null || _a === void 0 ? void 0 : _a.call(column, { rowData: rowData[key], rowIndex })) !== null && _b !== void 0 ? _b : null;
  },
  deleteValue: ({ rowData, rowIndex }) => {
    var _a, _b;
    return Object.assign(Object.assign({}, rowData), { [key]: (_b = (_a = column.deleteValue) === null || _a === void 0 ? void 0 : _a.call(column, { rowData: rowData[key], rowIndex })) !== null && _b !== void 0 ? _b : null });
  },
  pasteValue: ({ rowData, value, rowIndex }) => {
    var _a, _b;
    return Object.assign(Object.assign({}, rowData), { [key]: (_b = (_a = column.pasteValue) === null || _a === void 0 ? void 0 : _a.call(column, { rowData: rowData[key], value, rowIndex })) !== null && _b !== void 0 ? _b : null });
  },
  disabled: typeof column.disabled === "function" ? ({ rowData, rowIndex }) => {
    var _a;
    return typeof column.disabled === "function" ? column.disabled({ rowData: rowData[key], rowIndex }) : (_a = column.disabled) !== null && _a !== void 0 ? _a : false;
  } : column.disabled,
  cellClassName: typeof column.cellClassName === "function" ? ({ rowData, rowIndex, columnId }) => {
    var _a;
    return typeof column.cellClassName === "function" ? column.cellClassName({ rowData: rowData[key], rowIndex, columnId }) : (_a = column.cellClassName) !== null && _a !== void 0 ? _a : void 0;
  } : column.cellClassName,
  isCellEmpty: ({ rowData, rowIndex }) => {
    var _a, _b;
    return (_b = (_a = column.isCellEmpty) === null || _a === void 0 ? void 0 : _a.call(column, { rowData: rowData[key], rowIndex })) !== null && _b !== void 0 ? _b : false;
  }
});
keyColumn$1.keyColumn = keyColumn;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.renderContextMenuItem = exports.createContextMenuComponent = exports.createAddRowsComponent = exports.keyColumn = exports.isoDateColumn = exports.dateColumn = exports.percentColumn = exports.intColumn = exports.floatColumn = exports.checkboxColumn = exports.createTextColumn = exports.textColumn = exports.DataSheetGrid = exports.DynamicDataSheetGrid = void 0;
  const DataSheetGrid_12 = DataSheetGrid;
  const StaticDataSheetGrid_1 = StaticDataSheetGrid;
  exports.DynamicDataSheetGrid = DataSheetGrid_12.DataSheetGrid;
  exports.DataSheetGrid = StaticDataSheetGrid_1.StaticDataSheetGrid;
  var textColumn_12 = textColumn;
  Object.defineProperty(exports, "textColumn", { enumerable: true, get: function() {
    return textColumn_12.textColumn;
  } });
  Object.defineProperty(exports, "createTextColumn", { enumerable: true, get: function() {
    return textColumn_12.createTextColumn;
  } });
  var checkboxColumn_1 = checkboxColumn;
  Object.defineProperty(exports, "checkboxColumn", { enumerable: true, get: function() {
    return checkboxColumn_1.checkboxColumn;
  } });
  var floatColumn_1 = floatColumn;
  Object.defineProperty(exports, "floatColumn", { enumerable: true, get: function() {
    return floatColumn_1.floatColumn;
  } });
  var intColumn_1 = intColumn;
  Object.defineProperty(exports, "intColumn", { enumerable: true, get: function() {
    return intColumn_1.intColumn;
  } });
  var percentColumn_1 = percentColumn;
  Object.defineProperty(exports, "percentColumn", { enumerable: true, get: function() {
    return percentColumn_1.percentColumn;
  } });
  var dateColumn_1 = dateColumn;
  Object.defineProperty(exports, "dateColumn", { enumerable: true, get: function() {
    return dateColumn_1.dateColumn;
  } });
  var isoDateColumn_1 = isoDateColumn;
  Object.defineProperty(exports, "isoDateColumn", { enumerable: true, get: function() {
    return isoDateColumn_1.isoDateColumn;
  } });
  var keyColumn_1 = keyColumn$1;
  Object.defineProperty(exports, "keyColumn", { enumerable: true, get: function() {
    return keyColumn_1.keyColumn;
  } });
  var AddRows_1 = AddRows;
  Object.defineProperty(exports, "createAddRowsComponent", { enumerable: true, get: function() {
    return AddRows_1.createAddRowsComponent;
  } });
  var ContextMenu_1 = ContextMenu;
  Object.defineProperty(exports, "createContextMenuComponent", { enumerable: true, get: function() {
    return ContextMenu_1.createContextMenuComponent;
  } });
  Object.defineProperty(exports, "renderContextMenuItem", { enumerable: true, get: function() {
    return ContextMenu_1.defaultRenderItem;
  } });
})(dist);
const Result = (props) => {
  const { apiData, source, error } = props;
  const [displayType, setDisplayType] = reactExports.useState("json");
  const [sheetData, setSheetData] = reactExports.useState([]);
  const [columns, setColumns] = reactExports.useState([]);
  const [sheetDataKey, setSheetDataKey] = reactExports.useState((apiData == null ? void 0 : apiData.sheetDisplayDataKey) || defaultResultTableDataKey);
  const extractSheetData = (source2) => {
    try {
      const target = sheetDataKey ? get$1(source2, sheetDataKey) : source2;
      if (isArray$6(target)) {
        const dataKeys = Object.keys(target == null ? void 0 : target[0]) || [];
        const columns2 = dataKeys.map((key) => {
          return {
            ...dist.keyColumn(key, dist.textColumn),
            title: key,
            minWidth: 200
          };
        });
        setColumns(columns2);
        delay$1(() => setSheetData(target || []), 150);
      } else if (isString$1(target) || isNumber$1(target) || isBoolean$1(target)) {
        setColumns({
          ...dist.keyColumn("content", dist.textColumn),
          title: "content",
          minWidth: 200
        });
        delay$1(() => setSheetData([{ content: target }]), 150);
      } else if (target) {
        const dataKeys = Object.keys(target) || [];
        const columns2 = dataKeys.map((key) => {
          return {
            ...dist.keyColumn(key, dist.textColumn),
            title: key,
            minWidth: 200
          };
        });
        setColumns(columns2);
        delay$1(() => setSheetData([target]), 150);
      } else
        setColumns([]);
    } catch (e) {
    }
  };
  reactExports.useEffect(() => {
    extractSheetData(source);
  }, [source]);
  reactExports.useEffect(() => {
    setSheetDataKey((apiData == null ? void 0 : apiData.sheetDisplayDataKey) || defaultResultTableDataKey);
  }, [apiData]);
  reactExports.useEffect(() => {
    if (displayType === "table")
      extractSheetData(source);
  }, [sheetDataKey]);
  if (error)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "query-result-error", children: error });
  return !source ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "empty-result" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "result-wrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "result-toolbar", children: [
      displayType === "table" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sheet-data-key-wrapper", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "label", children: defaultInstance.get("displaySheetDataKey").d("数据撷取字段") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            value: sheetDataKey,
            placeholder: "Ex. temperature.data",
            onChange: (e) => {
              var _a;
              return setSheetDataKey((_a = e == null ? void 0 : e.target) == null ? void 0 : _a.value);
            }
          },
          displayType
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Segmented$1, { size: "small", value: displayType, onChange: (v) => setDisplayType(v), options: [{ label: "JSON", value: "json" }, { label: "Table", value: "table" }] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "result-content", children: displayType === "json" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ReactJson, { src: source }) : (columns == null ? void 0 : columns.length) > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      dist.DataSheetGrid,
      {
        disableExpandSelection: true,
        lockRows: true,
        value: sheetData,
        columns,
        headerRowHeight: 24,
        rowHeight: 24
      },
      JSON.stringify(columns || [])
    ) : void 0 })
  ] });
};
var ControlOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM340 683v77c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-77c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198V264c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v221c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8s0 .1.1.1a36.18 36.18 0 015.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8 0 0 0 .1-.1.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7zM620 539v221c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V539c-10.1 3.3-20.8 5-32 5s-21.9-1.8-32-5zm64-198v-77c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v77c10.1-3.3 20.8-5 32-5s21.9 1.8 32 5zm-64 198c10.1 3.3 20.8 5 32 5s21.9-1.8 32-5c41.8-13.5 72-52.7 72-99s-30.2-85.5-72-99c-10.1-3.3-20.8-5-32-5s-21.9 1.8-32 5c-41.8 13.5-72 52.7-72 99s30.2 85.5 72 99zm.1-115.7c.3-.6.7-1.2 1-1.8v-.1l1.2-1.8c.1-.2.2-.3.3-.5.3-.5.7-.9 1-1.4.1-.1.2-.3.3-.4.5-.6.9-1.1 1.4-1.6l.3-.3 1.2-1.2.4-.4c.5-.5 1-.9 1.6-1.4.6-.5 1.1-.9 1.7-1.3.2-.1.3-.2.5-.3.5-.3.9-.7 1.4-1 .1-.1.3-.2.4-.3.6-.4 1.2-.7 1.9-1.1.1-.1.3-.1.4-.2.5-.3 1-.5 1.6-.8l.6-.3c.7-.3 1.3-.6 2-.8.7-.3 1.4-.5 2.1-.7.2-.1.4-.1.6-.2.6-.2 1.1-.3 1.7-.4.2 0 .3-.1.5-.1.7-.2 1.5-.3 2.2-.4.2 0 .3 0 .5-.1.6-.1 1.2-.1 1.8-.2h.6c.8 0 1.5-.1 2.3-.1s1.5 0 2.3.1h.6c.6 0 1.2.1 1.8.2.2 0 .3 0 .5.1.7.1 1.5.2 2.2.4.2 0 .3.1.5.1.6.1 1.2.3 1.7.4.2.1.4.1.6.2.7.2 1.4.4 2.1.7.7.2 1.3.5 2 .8l.6.3c.5.2 1.1.5 1.6.8.1.1.3.1.4.2.6.3 1.3.7 1.9 1.1.1.1.3.2.4.3.5.3 1 .6 1.4 1 .2.1.3.2.5.3.6.4 1.2.9 1.7 1.3s1.1.9 1.6 1.4l.4.4 1.2 1.2.3.3c.5.5 1 1.1 1.4 1.6.1.1.2.3.3.4.4.4.7.9 1 1.4.1.2.2.3.3.5l1.2 1.8v.1a36.18 36.18 0 015.1 18.5c0 6-1.5 11.7-4.1 16.7-.3.6-.7 1.2-1 1.8v.1l-1.2 1.8c-.1.2-.2.3-.3.5-.3.5-.7.9-1 1.4-.1.1-.2.3-.3.4-.5.6-.9 1.1-1.4 1.6l-.3.3-1.2 1.2-.4.4c-.5.5-1 .9-1.6 1.4-.6.5-1.1.9-1.7 1.3-.2.1-.3.2-.5.3-.5.3-.9.7-1.4 1-.1.1-.3.2-.4.3-.6.4-1.2.7-1.9 1.1-.1.1-.3.1-.4.2-.5.3-1 .5-1.6.8l-.6.3c-.7.3-1.3.6-2 .8-.7.3-1.4.5-2.1.7-.2.1-.4.1-.6.2-.6.2-1.1.3-1.7.4-.2 0-.3.1-.5.1-.7.2-1.5.3-2.2.4-.2 0-.3 0-.5.1-.6.1-1.2.1-1.8.2h-.6c-.8 0-1.5.1-2.3.1s-1.5 0-2.3-.1h-.6c-.6 0-1.2-.1-1.8-.2-.2 0-.3 0-.5-.1-.7-.1-1.5-.2-2.2-.4-.2 0-.3-.1-.5-.1-.6-.1-1.2-.3-1.7-.4-.2-.1-.4-.1-.6-.2-.7-.2-1.4-.4-2.1-.7-.7-.2-1.3-.5-2-.8l-.6-.3c-.5-.2-1.1-.5-1.6-.8-.1-.1-.3-.1-.4-.2-.6-.3-1.3-.7-1.9-1.1-.1-.1-.3-.2-.4-.3-.5-.3-1-.6-1.4-1-.2-.1-.3-.2-.5-.3-.6-.4-1.2-.9-1.7-1.3s-1.1-.9-1.6-1.4l-.4-.4-1.2-1.2-.3-.3c-.5-.5-1-1.1-1.4-1.6-.1-.1-.2-.3-.3-.4-.4-.4-.7-.9-1-1.4-.1-.2-.2-.3-.3-.5l-1.2-1.8v-.1c-.4-.6-.7-1.2-1-1.8-2.6-5-4.1-10.7-4.1-16.7s1.5-11.7 4.1-16.7z" } }] }, "name": "control", "theme": "outlined" };
const ControlOutlinedSvg = ControlOutlined$2;
var ControlOutlined = function ControlOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref,
    icon: ControlOutlinedSvg
  }));
};
ControlOutlined.displayName = "ControlOutlined";
const ControlOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(ControlOutlined);
var ReloadOutlined = function ReloadOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref,
    icon: ReloadOutlinedSvg
  }));
};
ReloadOutlined.displayName = "ReloadOutlined";
const ReloadOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(ReloadOutlined);
const Popup = () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const apiInfo = useStorage(apiInfoStorage);
  const selectionInfo = useStorage(selectionInfoStorage);
  const defaultSelectApiId = (_b = (_a = apiInfo == null ? void 0 : apiInfo.apiList) == null ? void 0 : _a[0]) == null ? void 0 : _b.apiId;
  useForceUpdate();
  const getSelectApiId = () => {
    return (selectionInfo == null ? void 0 : selectionInfo.apiId) || defaultSelectApiId;
  };
  const updateParamValueBySelection = (apiInfo2, selectionInfo2) => {
    var _a2, _b2, _c2, _d2;
    const apiParams2 = ((_c2 = (_b2 = (_a2 = apiInfo2 == null ? void 0 : apiInfo2.apiList) == null ? void 0 : _a2.find) == null ? void 0 : _b2.call(_a2, (a) => (a == null ? void 0 : a.apiId) === getSelectApiId())) == null ? void 0 : _c2.apiParams) || [];
    if (selectionInfo2 == null ? void 0 : selectionInfo2.parameterName) {
      const foundParam = (_d2 = apiParams2 == null ? void 0 : apiParams2.find) == null ? void 0 : _d2.call(apiParams2, (p) => (p == null ? void 0 : p.name) === (selectionInfo2 == null ? void 0 : selectionInfo2.parameterName));
      if (foundParam && foundParam.value !== (selectionInfo2 == null ? void 0 : selectionInfo2.selection)) {
        foundParam.value = selectionInfo2 == null ? void 0 : selectionInfo2.selection;
      }
    }
    return apiInfo2;
  };
  const clonedApiInfo = (apiInfo2, selectionInfo2) => {
    const cached = cloneDeep$1(apiInfo2);
    updateParamValueBySelection(cached, selectionInfo2);
    return cached;
  };
  const [loading, setLoading] = reactExports.useState(false);
  const [cachedApiInfo, setCachedApiInfo] = reactExports.useState(clonedApiInfo(apiInfo, selectionInfo));
  const [result, setResult] = reactExports.useState(void 0);
  const [queryError, setQueryError] = reactExports.useState(void 0);
  const [reloading, setReloading] = reactExports.useState(false);
  const apiParams = ((_e = (_d = (_c = cachedApiInfo == null ? void 0 : cachedApiInfo.apiList) == null ? void 0 : _c.find) == null ? void 0 : _d.call(_c, (a) => (a == null ? void 0 : a.apiId) === getSelectApiId())) == null ? void 0 : _e.apiParams) || [];
  const openOptionsPage = () => {
    var _a2, _b2;
    (_b2 = (_a2 = chrome == null ? void 0 : chrome.runtime) == null ? void 0 : _a2.openOptionsPage) == null ? void 0 : _b2.call(_a2);
  };
  const clearSelectionAndReloadPage = async () => {
    var _a2, _b2;
    await ((_b2 = (_a2 = selectionInfoStorage) == null ? void 0 : _a2.clear) == null ? void 0 : _b2.call(_a2));
    setQueryError(void 0);
    setResult(void 0);
    delay$1(() => {
      setCachedApiInfo(clonedApiInfo(apiInfo, {}));
      setReloading(true);
    }, 500);
  };
  reactExports.useEffect(() => {
    document.title = defaultInstance.get("appName").d("数据服务API");
    chrome.runtime.onMessage.addListener(async function(request) {
      if ((request == null ? void 0 : request.action) === events.PASSING_SELECTION && (request == null ? void 0 : request.selectionInfo)) {
        console.debug("received passing selection event");
        return true;
      }
    });
  }, []);
  reactExports.useEffect(() => {
    if (reloading)
      setReloading(false);
  }, [reloading]);
  reactExports.useEffect(() => {
    setCachedApiInfo(clonedApiInfo(apiInfo, selectionInfo));
  }, [apiInfo]);
  reactExports.useEffect(() => {
    setCachedApiInfo(clonedApiInfo(cachedApiInfo, selectionInfo));
  }, [selectionInfo]);
  const getSelectedApi = (apiList) => {
    var _a2;
    return (_a2 = apiList == null ? void 0 : apiList.find) == null ? void 0 : _a2.call(apiList, (a) => (a == null ? void 0 : a.apiId) === getSelectApiId());
  };
  const onQuery = async () => {
    var _a2, _b2, _c2, _d2, _e2;
    setLoading(true);
    setResult(void 0);
    setQueryError(void 0);
    try {
      const { commonParameters, apiList } = cachedApiInfo;
      const api = getSelectedApi(apiList);
      if (api) {
        const apiParams2 = (api == null ? void 0 : api.apiParams) || [];
        const mergedParams = [...commonParameters, ...apiParams2];
        const requestHeaderContentType = api == null ? void 0 : api.requestHeaderContentType;
        let query;
        if ((api == null ? void 0 : api.apiMethod) === "POST") {
          let _params;
          if ((_a2 = requestHeaderContentType == null ? void 0 : requestHeaderContentType.includes) == null ? void 0 : _a2.call(requestHeaderContentType, "/json")) {
            _params = {};
            (_b2 = mergedParams == null ? void 0 : mergedParams.forEach) == null ? void 0 : _b2.call(mergedParams, (p) => {
              var _a3, _b3, _c3, _d3, _e3;
              if ((_b3 = (_a3 = p == null ? void 0 : p.name) == null ? void 0 : _a3.includes) == null ? void 0 : _b3.call(_a3, ".")) {
                const keys2 = (_d3 = (_c3 = p == null ? void 0 : p.name) == null ? void 0 : _c3.split) == null ? void 0 : _d3.call(_c3, ".");
                const firstKey = (_e3 = keys2 == null ? void 0 : keys2.shift) == null ? void 0 : _e3.call(keys2);
                const restKeys = keys2;
                const temp = {};
                set$1(temp, restKeys, p == null ? void 0 : p.value);
                _params[firstKey] = temp;
              } else {
                _params[p == null ? void 0 : p.name] = p == null ? void 0 : p.value;
              }
            });
          } else {
            _params = (_c2 = mergedParams == null ? void 0 : mergedParams.map) == null ? void 0 : _c2.call(mergedParams, (p) => ({ [p == null ? void 0 : p.name]: p == null ? void 0 : p.value }));
          }
          const options = { method: api == null ? void 0 : api.apiMethod, body: JSON.stringify(_params) };
          if (requestHeaderContentType)
            options.headers = { "Content-Type": requestHeaderContentType };
          query = await fetch((api == null ? void 0 : api.apiPath) || "", options);
        } else {
          const url = new URL((api == null ? void 0 : api.apiPath) || "");
          const params = {};
          (_d2 = mergedParams == null ? void 0 : mergedParams.forEach) == null ? void 0 : _d2.call(mergedParams, (p) => params[p == null ? void 0 : p.name] = p == null ? void 0 : p.value);
          url.search = new URLSearchParams(params).toString();
          const options = { method: api == null ? void 0 : api.apiMethod };
          if (requestHeaderContentType)
            options.headers = { "Content-Type": requestHeaderContentType };
          query = await fetch(url, options);
        }
        const result2 = await ((_e2 = query == null ? void 0 : query.json) == null ? void 0 : _e2.call(query));
        if (result2)
          setResult(result2);
      }
    } catch (e) {
      console.error(e);
      setQueryError(e == null ? void 0 : e.message);
    }
    setLoading(false);
  };
  if (reloading)
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app popup reloading", children: [
      " ",
      defaultInstance.get("reloading").d("重新载入"),
      " ... "
    ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app popup", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "app-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, className: "app-logo", alt: "logo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "header-text", children: PRODUCT_NAME }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReloadOutlined$1, { className: "reload-icon", onClick: () => clearSelectionAndReloadPage() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ControlOutlined$1, { className: "option-icon", onClick: openOptionsPage })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "api-name-title", children: defaultInstance.get("apiName").d("API名称") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "api-selector-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          defaultValue: getSelectApiId(),
          onChange: (v) => {
            var _a2, _b2;
            return (_b2 = (_a2 = selectionInfoStorage) == null ? void 0 : _a2.set) == null ? void 0 : _b2.call(_a2, { ...selectionInfo, apiId: v });
          },
          options: ((_g = (_f = apiInfo == null ? void 0 : apiInfo.apiList) == null ? void 0 : _f.map) == null ? void 0 : _g.call(_f, (a) => ({ value: a == null ? void 0 : a.apiId, label: a == null ? void 0 : a.apiName }))) || []
        },
        getSelectApiId()
      ) }),
      (apiParams == null ? void 0 : apiParams.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "api-parameters-title", children: defaultInstance.get("apiParameters").d("参数值") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "api-parameters", children: (_h = apiParams == null ? void 0 : apiParams.map) == null ? void 0 : _h.call(apiParams, (param, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "param-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item-name", children: param == null ? void 0 : param.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "item-value", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              defaultValue: param == null ? void 0 : param.value,
              onChange: (e) => {
                var _a2;
                return param.value = (_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.value;
              }
            }
          ) })
        ] }, `${JSON.stringify(selectionInfo || {})}_${getSelectApiId()}_${param == null ? void 0 : param.name}_${param == null ? void 0 : param.value}`)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "query-btn", type: "primary", size: "small", loading, onClick: onQuery, children: defaultInstance.get("query").d("请求") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "query-result-title", children: defaultInstance.get("queryResult").d("结果") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "query-result", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Result, { apiData: getSelectedApi(apiInfo == null ? void 0 : apiInfo.apiList), source: result, error: queryError }) })
    ] })
  ] });
};
const Popup$1 = withErrorBoundary(withSuspense(Popup, /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  " ",
  defaultInstance.get("loading").d("载入中"),
  " ... "
] })), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  " ",
  defaultInstance.get("errorOccur").d("发生错误"),
  " "
] }));
export {
  Popup$1 as P
};
