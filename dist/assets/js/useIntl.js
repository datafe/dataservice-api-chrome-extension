import { R as React, r as reactExports, d as ReactDOM, e as React$1, f as ReactDOM$1, b as reactDomExports } from "./client.js";
import { g as getDefaultExportFromCjs, c as commonjsGlobal } from "./_commonjsHelpers.js";
var TYPE;
(function(TYPE2) {
  TYPE2[TYPE2["literal"] = 0] = "literal";
  TYPE2[TYPE2["argument"] = 1] = "argument";
  TYPE2[TYPE2["number"] = 2] = "number";
  TYPE2[TYPE2["date"] = 3] = "date";
  TYPE2[TYPE2["time"] = 4] = "time";
  TYPE2[TYPE2["select"] = 5] = "select";
  TYPE2[TYPE2["plural"] = 6] = "plural";
  TYPE2[TYPE2["pound"] = 7] = "pound";
})(TYPE || (TYPE = {}));
function isLiteralElement(el) {
  return el.type === TYPE.literal;
}
function isArgumentElement(el) {
  return el.type === TYPE.argument;
}
function isNumberElement(el) {
  return el.type === TYPE.number;
}
function isDateElement(el) {
  return el.type === TYPE.date;
}
function isTimeElement(el) {
  return el.type === TYPE.time;
}
function isSelectElement(el) {
  return el.type === TYPE.select;
}
function isPluralElement(el) {
  return el.type === TYPE.plural;
}
function isPoundElement(el) {
  return el.type === TYPE.pound;
}
function isNumberSkeleton(el) {
  return !!(el && typeof el === "object" && el.type === 0);
}
function isDateTimeSkeleton(el) {
  return !!(el && typeof el === "object" && el.type === 1);
}
var __extends$1 = function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (b3.hasOwnProperty(p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign$2 = function() {
  __assign$2 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign$2.apply(this, arguments);
};
var SyntaxError = (
  /** @class */
  function(_super) {
    __extends$1(SyntaxError2, _super);
    function SyntaxError2(message, expected, found, location2) {
      var _this = _super.call(this) || this;
      _this.message = message;
      _this.expected = expected;
      _this.found = found;
      _this.location = location2;
      _this.name = "SyntaxError";
      if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(_this, SyntaxError2);
      }
      return _this;
    }
    SyntaxError2.buildMessage = function(expected, found) {
      function hex2(ch) {
        return ch.charCodeAt(0).toString(16).toUpperCase();
      }
      function literalEscape(s) {
        return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
          return "\\x0" + hex2(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
          return "\\x" + hex2(ch);
        });
      }
      function classEscape(s) {
        return s.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
          return "\\x0" + hex2(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
          return "\\x" + hex2(ch);
        });
      }
      function describeExpectation(expectation) {
        switch (expectation.type) {
          case "literal":
            return '"' + literalEscape(expectation.text) + '"';
          case "class":
            var escapedParts = expectation.parts.map(function(part) {
              return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
            });
            return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
          case "any":
            return "any character";
          case "end":
            return "end of input";
          case "other":
            return expectation.description;
        }
      }
      function describeExpected(expected1) {
        var descriptions = expected1.map(describeExpectation);
        var i;
        var j;
        descriptions.sort();
        if (descriptions.length > 0) {
          for (i = 1, j = 1; i < descriptions.length; i++) {
            if (descriptions[i - 1] !== descriptions[i]) {
              descriptions[j] = descriptions[i];
              j++;
            }
          }
          descriptions.length = j;
        }
        switch (descriptions.length) {
          case 1:
            return descriptions[0];
          case 2:
            return descriptions[0] + " or " + descriptions[1];
          default:
            return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
        }
      }
      function describeFound(found1) {
        return found1 ? '"' + literalEscape(found1) + '"' : "end of input";
      }
      return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
    };
    return SyntaxError2;
  }(Error)
);
function peg$parse(input, options2) {
  options2 = options2 !== void 0 ? options2 : {};
  var peg$FAILED = {};
  var peg$startRuleFunctions = { start: peg$parsestart };
  var peg$startRuleFunction = peg$parsestart;
  var peg$c0 = function(parts) {
    return parts.join("");
  };
  var peg$c1 = function(messageText) {
    return __assign$2({ type: TYPE.literal, value: messageText }, insertLocation());
  };
  var peg$c2 = "#";
  var peg$c3 = peg$literalExpectation("#", false);
  var peg$c4 = function() {
    return __assign$2({ type: TYPE.pound }, insertLocation());
  };
  var peg$c5 = peg$otherExpectation("argumentElement");
  var peg$c6 = "{";
  var peg$c7 = peg$literalExpectation("{", false);
  var peg$c8 = "}";
  var peg$c9 = peg$literalExpectation("}", false);
  var peg$c10 = function(value) {
    return __assign$2({ type: TYPE.argument, value }, insertLocation());
  };
  var peg$c11 = peg$otherExpectation("numberSkeletonId");
  var peg$c12 = /^['\/{}]/;
  var peg$c13 = peg$classExpectation(["'", "/", "{", "}"], false, false);
  var peg$c14 = peg$anyExpectation();
  var peg$c15 = peg$otherExpectation("numberSkeletonTokenOption");
  var peg$c16 = "/";
  var peg$c17 = peg$literalExpectation("/", false);
  var peg$c18 = function(option2) {
    return option2;
  };
  var peg$c19 = peg$otherExpectation("numberSkeletonToken");
  var peg$c20 = function(stem, options3) {
    return { stem, options: options3 };
  };
  var peg$c21 = function(tokens) {
    return __assign$2({ type: 0, tokens }, insertLocation());
  };
  var peg$c22 = "::";
  var peg$c23 = peg$literalExpectation("::", false);
  var peg$c24 = function(skeleton) {
    return skeleton;
  };
  var peg$c25 = function() {
    messageCtx.push("numberArgStyle");
    return true;
  };
  var peg$c26 = function(style2) {
    messageCtx.pop();
    return style2.replace(/\s*$/, "");
  };
  var peg$c27 = ",";
  var peg$c28 = peg$literalExpectation(",", false);
  var peg$c29 = "number";
  var peg$c30 = peg$literalExpectation("number", false);
  var peg$c31 = function(value, type4, style2) {
    return __assign$2({ type: type4 === "number" ? TYPE.number : type4 === "date" ? TYPE.date : TYPE.time, style: style2 && style2[2], value }, insertLocation());
  };
  var peg$c32 = "'";
  var peg$c33 = peg$literalExpectation("'", false);
  var peg$c34 = /^[^']/;
  var peg$c35 = peg$classExpectation(["'"], true, false);
  var peg$c36 = /^[^a-zA-Z'{}]/;
  var peg$c37 = peg$classExpectation([["a", "z"], ["A", "Z"], "'", "{", "}"], true, false);
  var peg$c38 = /^[a-zA-Z]/;
  var peg$c39 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false);
  var peg$c40 = function(pattern4) {
    return __assign$2({ type: 1, pattern: pattern4 }, insertLocation());
  };
  var peg$c41 = function() {
    messageCtx.push("dateOrTimeArgStyle");
    return true;
  };
  var peg$c42 = "date";
  var peg$c43 = peg$literalExpectation("date", false);
  var peg$c44 = "time";
  var peg$c45 = peg$literalExpectation("time", false);
  var peg$c46 = "plural";
  var peg$c47 = peg$literalExpectation("plural", false);
  var peg$c48 = "selectordinal";
  var peg$c49 = peg$literalExpectation("selectordinal", false);
  var peg$c50 = "offset:";
  var peg$c51 = peg$literalExpectation("offset:", false);
  var peg$c52 = function(value, pluralType, offset, options3) {
    return __assign$2({ type: TYPE.plural, pluralType: pluralType === "plural" ? "cardinal" : "ordinal", value, offset: offset ? offset[2] : 0, options: options3.reduce(function(all, _a) {
      var id = _a.id, value2 = _a.value, optionLocation = _a.location;
      if (id in all) {
        error('Duplicate option "' + id + '" in plural element: "' + text() + '"', location2());
      }
      all[id] = {
        value: value2,
        location: optionLocation
      };
      return all;
    }, {}) }, insertLocation());
  };
  var peg$c53 = "select";
  var peg$c54 = peg$literalExpectation("select", false);
  var peg$c55 = function(value, options3) {
    return __assign$2({ type: TYPE.select, value, options: options3.reduce(function(all, _a) {
      var id = _a.id, value2 = _a.value, optionLocation = _a.location;
      if (id in all) {
        error('Duplicate option "' + id + '" in select element: "' + text() + '"', location2());
      }
      all[id] = {
        value: value2,
        location: optionLocation
      };
      return all;
    }, {}) }, insertLocation());
  };
  var peg$c56 = "=";
  var peg$c57 = peg$literalExpectation("=", false);
  var peg$c58 = function(id) {
    messageCtx.push("select");
    return true;
  };
  var peg$c59 = function(id, value) {
    messageCtx.pop();
    return __assign$2({
      id,
      value
    }, insertLocation());
  };
  var peg$c60 = function(id) {
    messageCtx.push("plural");
    return true;
  };
  var peg$c61 = function(id, value) {
    messageCtx.pop();
    return __assign$2({
      id,
      value
    }, insertLocation());
  };
  var peg$c62 = peg$otherExpectation("whitespace");
  var peg$c63 = /^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
  var peg$c64 = peg$classExpectation([["	", "\r"], " ", "", " ", " ", [" ", " "], "\u2028", "\u2029", " ", " ", "　"], false, false);
  var peg$c65 = peg$otherExpectation("syntax pattern");
  var peg$c66 = /^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/;
  var peg$c67 = peg$classExpectation([["!", "/"], [":", "@"], ["[", "^"], "`", ["{", "~"], ["¡", "§"], "©", "«", "¬", "®", "°", "±", "¶", "»", "¿", "×", "÷", ["‐", "‧"], ["‰", "‾"], ["⁁", "⁓"], ["⁕", "⁞"], ["←", "⑟"], ["─", "❵"], ["➔", "⯿"], ["⸀", "⹿"], ["、", "〃"], ["〈", "〠"], "〰", "﴾", "﴿", "﹅", "﹆"], false, false);
  var peg$c68 = peg$otherExpectation("optional whitespace");
  var peg$c69 = peg$otherExpectation("number");
  var peg$c70 = "-";
  var peg$c71 = peg$literalExpectation("-", false);
  var peg$c72 = function(negative, num) {
    return num ? negative ? -num : num : 0;
  };
  var peg$c74 = peg$otherExpectation("double apostrophes");
  var peg$c75 = "''";
  var peg$c76 = peg$literalExpectation("''", false);
  var peg$c77 = function() {
    return "'";
  };
  var peg$c78 = function(escapedChar, quotedChars) {
    return escapedChar + quotedChars.replace("''", "'");
  };
  var peg$c79 = function(x) {
    return x !== "{" && !(isInPluralOption() && x === "#") && !(isNestedMessageText() && x === "}");
  };
  var peg$c80 = "\n";
  var peg$c81 = peg$literalExpectation("\n", false);
  var peg$c82 = function(x) {
    return x === "{" || x === "}" || isInPluralOption() && x === "#";
  };
  var peg$c83 = peg$otherExpectation("argNameOrNumber");
  var peg$c84 = peg$otherExpectation("argNumber");
  var peg$c85 = "0";
  var peg$c86 = peg$literalExpectation("0", false);
  var peg$c87 = function() {
    return 0;
  };
  var peg$c88 = /^[1-9]/;
  var peg$c89 = peg$classExpectation([["1", "9"]], false, false);
  var peg$c90 = /^[0-9]/;
  var peg$c91 = peg$classExpectation([["0", "9"]], false, false);
  var peg$c92 = function(digits) {
    return parseInt(digits.join(""), 10);
  };
  var peg$c93 = peg$otherExpectation("argName");
  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$maxFailPos = 0;
  var peg$maxFailExpected = [];
  var peg$silentFails = 0;
  var peg$result;
  if (options2.startRule !== void 0) {
    if (!(options2.startRule in peg$startRuleFunctions)) {
      throw new Error(`Can't start parsing from rule "` + options2.startRule + '".');
    }
    peg$startRuleFunction = peg$startRuleFunctions[options2.startRule];
  }
  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }
  function location2() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }
  function error(message, location1) {
    location1 = location1 !== void 0 ? location1 : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildSimpleError(message, location1);
  }
  function peg$literalExpectation(text1, ignoreCase) {
    return { type: "literal", text: text1, ignoreCase };
  }
  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts, inverted, ignoreCase };
  }
  function peg$anyExpectation() {
    return { type: "any" };
  }
  function peg$endExpectation() {
    return { type: "end" };
  }
  function peg$otherExpectation(description2) {
    return { type: "other", description: description2 };
  }
  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p2;
    if (details) {
      return details;
    } else {
      p2 = pos - 1;
      while (!peg$posDetailsCache[p2]) {
        p2--;
      }
      details = peg$posDetailsCache[p2];
      details = {
        line: details.line,
        column: details.column
      };
      while (p2 < pos) {
        if (input.charCodeAt(p2) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }
        p2++;
      }
      peg$posDetailsCache[pos] = details;
      return details;
    }
  }
  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }
  function peg$fail(expected1) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }
    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }
    peg$maxFailExpected.push(expected1);
  }
  function peg$buildSimpleError(message, location1) {
    return new SyntaxError(message, [], "", location1);
  }
  function peg$buildStructuredError(expected1, found, location1) {
    return new SyntaxError(SyntaxError.buildMessage(expected1, found), expected1, found, location1);
  }
  function peg$parsestart() {
    var s0;
    s0 = peg$parsemessage();
    return s0;
  }
  function peg$parsemessage() {
    var s0, s1;
    s0 = [];
    s1 = peg$parsemessageElement();
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parsemessageElement();
    }
    return s0;
  }
  function peg$parsemessageElement() {
    var s0;
    s0 = peg$parseliteralElement();
    if (s0 === peg$FAILED) {
      s0 = peg$parseargumentElement();
      if (s0 === peg$FAILED) {
        s0 = peg$parsesimpleFormatElement();
        if (s0 === peg$FAILED) {
          s0 = peg$parsepluralElement();
          if (s0 === peg$FAILED) {
            s0 = peg$parseselectElement();
            if (s0 === peg$FAILED) {
              s0 = peg$parsepoundElement();
            }
          }
        }
      }
    }
    return s0;
  }
  function peg$parsemessageText() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsedoubleApostrophes();
    if (s2 === peg$FAILED) {
      s2 = peg$parsequotedString();
      if (s2 === peg$FAILED) {
        s2 = peg$parseunquotedString();
      }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsedoubleApostrophes();
        if (s2 === peg$FAILED) {
          s2 = peg$parsequotedString();
          if (s2 === peg$FAILED) {
            s2 = peg$parseunquotedString();
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c0(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parseliteralElement() {
    var s0, s1;
    s0 = peg$currPos;
    s1 = peg$parsemessageText();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c1(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parsepoundElement() {
    var s0, s1;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 35) {
      s1 = peg$c2;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c3);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c4();
    }
    s0 = s1;
    return s0;
  }
  function peg$parseargumentElement() {
    var s0, s1, s2, s3, s4, s5;
    peg$silentFails++;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c6;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c7);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseargNameOrNumber();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 125) {
              s5 = peg$c8;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c9);
              }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c10(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c5);
      }
    }
    return s0;
  }
  function peg$parsenumberSkeletonId() {
    var s0, s1, s2, s3, s4;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    s4 = peg$parsewhiteSpace();
    if (s4 === peg$FAILED) {
      if (peg$c12.test(input.charAt(peg$currPos))) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c13);
        }
      }
    }
    peg$silentFails--;
    if (s4 === peg$FAILED) {
      s3 = void 0;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c14);
        }
      }
      if (s4 !== peg$FAILED) {
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsewhiteSpace();
        if (s4 === peg$FAILED) {
          if (peg$c12.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c13);
            }
          }
        }
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c14);
            }
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c11);
      }
    }
    return s0;
  }
  function peg$parsenumberSkeletonTokenOption() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 47) {
      s1 = peg$c16;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c17);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsenumberSkeletonId();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c18(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c15);
      }
    }
    return s0;
  }
  function peg$parsenumberSkeletonToken() {
    var s0, s1, s2, s3, s4;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsenumberSkeletonId();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsenumberSkeletonTokenOption();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsenumberSkeletonTokenOption();
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c20(s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c19);
      }
    }
    return s0;
  }
  function peg$parsenumberSkeleton() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsenumberSkeletonToken();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsenumberSkeletonToken();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c21(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parsenumberArgStyle() {
    var s0, s1, s2;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c22) {
      s1 = peg$c22;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c23);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsenumberSkeleton();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c24(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      peg$savedPos = peg$currPos;
      s1 = peg$c25();
      if (s1) {
        s1 = void 0;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsemessageText();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c26(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parsenumberFormatElement() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c6;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c7);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseargNameOrNumber();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c27;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c28);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                if (input.substr(peg$currPos, 6) === peg$c29) {
                  s7 = peg$c29;
                  peg$currPos += 6;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c30);
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s10 = peg$c27;
                      peg$currPos++;
                    } else {
                      s10 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c28);
                      }
                    }
                    if (s10 !== peg$FAILED) {
                      s11 = peg$parse_();
                      if (s11 !== peg$FAILED) {
                        s12 = peg$parsenumberArgStyle();
                        if (s12 !== peg$FAILED) {
                          s10 = [s10, s11, s12];
                          s9 = s10;
                        } else {
                          peg$currPos = s9;
                          s9 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s9;
                        s9 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s9;
                      s9 = peg$FAILED;
                    }
                    if (s9 === peg$FAILED) {
                      s9 = null;
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();
                      if (s10 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 125) {
                          s11 = peg$c8;
                          peg$currPos++;
                        } else {
                          s11 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c9);
                          }
                        }
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c31(s3, s7, s9);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsedateTimeSkeletonLiteral() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 39) {
      s1 = peg$c32;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c33);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsedoubleApostrophes();
      if (s3 === peg$FAILED) {
        if (peg$c34.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c35);
          }
        }
      }
      if (s3 !== peg$FAILED) {
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsedoubleApostrophes();
          if (s3 === peg$FAILED) {
            if (peg$c34.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c35);
              }
            }
          }
        }
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 39) {
          s3 = peg$c32;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c33);
          }
        }
        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = [];
      s1 = peg$parsedoubleApostrophes();
      if (s1 === peg$FAILED) {
        if (peg$c36.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c37);
          }
        }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          s1 = peg$parsedoubleApostrophes();
          if (s1 === peg$FAILED) {
            if (peg$c36.test(input.charAt(peg$currPos))) {
              s1 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c37);
              }
            }
          }
        }
      } else {
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parsedateTimeSkeletonPattern() {
    var s0, s1;
    s0 = [];
    if (peg$c38.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c39);
      }
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        if (peg$c38.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c39);
          }
        }
      }
    } else {
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsedateTimeSkeleton() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = [];
    s3 = peg$parsedateTimeSkeletonLiteral();
    if (s3 === peg$FAILED) {
      s3 = peg$parsedateTimeSkeletonPattern();
    }
    if (s3 !== peg$FAILED) {
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsedateTimeSkeletonLiteral();
        if (s3 === peg$FAILED) {
          s3 = peg$parsedateTimeSkeletonPattern();
        }
      }
    } else {
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c40(s1);
    }
    s0 = s1;
    return s0;
  }
  function peg$parsedateOrTimeArgStyle() {
    var s0, s1, s2;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c22) {
      s1 = peg$c22;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c23);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsedateTimeSkeleton();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c24(s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      peg$savedPos = peg$currPos;
      s1 = peg$c41();
      if (s1) {
        s1 = void 0;
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsemessageText();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c26(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }
    return s0;
  }
  function peg$parsedateOrTimeFormatElement() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c6;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c7);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseargNameOrNumber();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c27;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c28);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                if (input.substr(peg$currPos, 4) === peg$c42) {
                  s7 = peg$c42;
                  peg$currPos += 4;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c43);
                  }
                }
                if (s7 === peg$FAILED) {
                  if (input.substr(peg$currPos, 4) === peg$c44) {
                    s7 = peg$c44;
                    peg$currPos += 4;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c45);
                    }
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s10 = peg$c27;
                      peg$currPos++;
                    } else {
                      s10 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c28);
                      }
                    }
                    if (s10 !== peg$FAILED) {
                      s11 = peg$parse_();
                      if (s11 !== peg$FAILED) {
                        s12 = peg$parsedateOrTimeArgStyle();
                        if (s12 !== peg$FAILED) {
                          s10 = [s10, s11, s12];
                          s9 = s10;
                        } else {
                          peg$currPos = s9;
                          s9 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s9;
                        s9 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s9;
                      s9 = peg$FAILED;
                    }
                    if (s9 === peg$FAILED) {
                      s9 = null;
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();
                      if (s10 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 125) {
                          s11 = peg$c8;
                          peg$currPos++;
                        } else {
                          s11 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c9);
                          }
                        }
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = s0;
                          s1 = peg$c31(s3, s7, s9);
                          s0 = s1;
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsesimpleFormatElement() {
    var s0;
    s0 = peg$parsenumberFormatElement();
    if (s0 === peg$FAILED) {
      s0 = peg$parsedateOrTimeFormatElement();
    }
    return s0;
  }
  function peg$parsepluralElement() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c6;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c7);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseargNameOrNumber();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c27;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c28);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                if (input.substr(peg$currPos, 6) === peg$c46) {
                  s7 = peg$c46;
                  peg$currPos += 6;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c47);
                  }
                }
                if (s7 === peg$FAILED) {
                  if (input.substr(peg$currPos, 13) === peg$c48) {
                    s7 = peg$c48;
                    peg$currPos += 13;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c49);
                    }
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s9 = peg$c27;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c28);
                      }
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();
                      if (s10 !== peg$FAILED) {
                        s11 = peg$currPos;
                        if (input.substr(peg$currPos, 7) === peg$c50) {
                          s12 = peg$c50;
                          peg$currPos += 7;
                        } else {
                          s12 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c51);
                          }
                        }
                        if (s12 !== peg$FAILED) {
                          s13 = peg$parse_();
                          if (s13 !== peg$FAILED) {
                            s14 = peg$parsenumber();
                            if (s14 !== peg$FAILED) {
                              s12 = [s12, s13, s14];
                              s11 = s12;
                            } else {
                              peg$currPos = s11;
                              s11 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s11;
                            s11 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s11;
                          s11 = peg$FAILED;
                        }
                        if (s11 === peg$FAILED) {
                          s11 = null;
                        }
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parse_();
                          if (s12 !== peg$FAILED) {
                            s13 = [];
                            s14 = peg$parsepluralOption();
                            if (s14 !== peg$FAILED) {
                              while (s14 !== peg$FAILED) {
                                s13.push(s14);
                                s14 = peg$parsepluralOption();
                              }
                            } else {
                              s13 = peg$FAILED;
                            }
                            if (s13 !== peg$FAILED) {
                              s14 = peg$parse_();
                              if (s14 !== peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 125) {
                                  s15 = peg$c8;
                                  peg$currPos++;
                                } else {
                                  s15 = peg$FAILED;
                                  if (peg$silentFails === 0) {
                                    peg$fail(peg$c9);
                                  }
                                }
                                if (s15 !== peg$FAILED) {
                                  peg$savedPos = s0;
                                  s1 = peg$c52(s3, s7, s11, s13);
                                  s0 = s1;
                                } else {
                                  peg$currPos = s0;
                                  s0 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseselectElement() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 123) {
      s1 = peg$c6;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c7);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseargNameOrNumber();
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 44) {
              s5 = peg$c27;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c28);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_();
              if (s6 !== peg$FAILED) {
                if (input.substr(peg$currPos, 6) === peg$c53) {
                  s7 = peg$c53;
                  peg$currPos += 6;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c54);
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parse_();
                  if (s8 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 44) {
                      s9 = peg$c27;
                      peg$currPos++;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c28);
                      }
                    }
                    if (s9 !== peg$FAILED) {
                      s10 = peg$parse_();
                      if (s10 !== peg$FAILED) {
                        s11 = [];
                        s12 = peg$parseselectOption();
                        if (s12 !== peg$FAILED) {
                          while (s12 !== peg$FAILED) {
                            s11.push(s12);
                            s12 = peg$parseselectOption();
                          }
                        } else {
                          s11 = peg$FAILED;
                        }
                        if (s11 !== peg$FAILED) {
                          s12 = peg$parse_();
                          if (s12 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 125) {
                              s13 = peg$c8;
                              peg$currPos++;
                            } else {
                              s13 = peg$FAILED;
                              if (peg$silentFails === 0) {
                                peg$fail(peg$c9);
                              }
                            }
                            if (s13 !== peg$FAILED) {
                              peg$savedPos = s0;
                              s1 = peg$c55(s3, s11);
                              s0 = s1;
                            } else {
                              peg$currPos = s0;
                              s0 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s0;
                          s0 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsepluralRuleSelectValue() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 61) {
      s2 = peg$c56;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c57);
      }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parsenumber();
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$parseargName();
    }
    return s0;
  }
  function peg$parseselectOption() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseargName();
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 123) {
            s4 = peg$c6;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c7);
            }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = peg$currPos;
            s5 = peg$c58();
            if (s5) {
              s5 = void 0;
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parsemessage();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s7 = peg$c8;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c9);
                  }
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c59(s2, s6);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsepluralOption() {
    var s0, s1, s2, s3, s4, s5, s6, s7;
    s0 = peg$currPos;
    s1 = peg$parse_();
    if (s1 !== peg$FAILED) {
      s2 = peg$parsepluralRuleSelectValue();
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 123) {
            s4 = peg$c6;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c7);
            }
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = peg$currPos;
            s5 = peg$c60();
            if (s5) {
              s5 = void 0;
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parsemessage();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s7 = peg$c8;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c9);
                  }
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c61(s2, s6);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parsewhiteSpace() {
    var s0;
    peg$silentFails++;
    if (peg$c63.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c64);
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      if (peg$silentFails === 0) {
        peg$fail(peg$c62);
      }
    }
    return s0;
  }
  function peg$parsepatternSyntax() {
    var s0;
    peg$silentFails++;
    if (peg$c66.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c67);
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      if (peg$silentFails === 0) {
        peg$fail(peg$c65);
      }
    }
    return s0;
  }
  function peg$parse_() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewhiteSpace();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsewhiteSpace();
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c68);
      }
    }
    return s0;
  }
  function peg$parsenumber() {
    var s0, s1, s2;
    peg$silentFails++;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 45) {
      s1 = peg$c70;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c71);
      }
    }
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseargNumber();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c72(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c69);
      }
    }
    return s0;
  }
  function peg$parsedoubleApostrophes() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c75) {
      s1 = peg$c75;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c76);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c77();
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c74);
      }
    }
    return s0;
  }
  function peg$parsequotedString() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 39) {
      s1 = peg$c32;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c33);
      }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseescapedChar();
      if (s2 !== peg$FAILED) {
        s3 = peg$currPos;
        s4 = [];
        if (input.substr(peg$currPos, 2) === peg$c75) {
          s5 = peg$c75;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c76);
          }
        }
        if (s5 === peg$FAILED) {
          if (peg$c34.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c35);
            }
          }
        }
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          if (input.substr(peg$currPos, 2) === peg$c75) {
            s5 = peg$c75;
            peg$currPos += 2;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c76);
            }
          }
          if (s5 === peg$FAILED) {
            if (peg$c34.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c35);
              }
            }
          }
        }
        if (s4 !== peg$FAILED) {
          s3 = input.substring(s3, peg$currPos);
        } else {
          s3 = s4;
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s4 = peg$c32;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c33);
            }
          }
          if (s4 === peg$FAILED) {
            s4 = null;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c78(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    return s0;
  }
  function peg$parseunquotedString() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.length > peg$currPos) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c14);
      }
    }
    if (s2 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s3 = peg$c79(s2);
      if (s3) {
        s3 = void 0;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 10) {
        s1 = peg$c80;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c81);
        }
      }
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    return s0;
  }
  function peg$parseescapedChar() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$currPos;
    if (input.length > peg$currPos) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c14);
      }
    }
    if (s2 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s3 = peg$c82(s2);
      if (s3) {
        s3 = void 0;
      } else {
        s3 = peg$FAILED;
      }
      if (s3 !== peg$FAILED) {
        s2 = [s2, s3];
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    return s0;
  }
  function peg$parseargNameOrNumber() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseargNumber();
    if (s1 === peg$FAILED) {
      s1 = peg$parseargName();
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c83);
      }
    }
    return s0;
  }
  function peg$parseargNumber() {
    var s0, s1, s2, s3, s4;
    peg$silentFails++;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 48) {
      s1 = peg$c85;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c86);
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c87();
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$currPos;
      if (peg$c88.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c89);
        }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        if (peg$c90.test(input.charAt(peg$currPos))) {
          s4 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c91);
          }
        }
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          if (peg$c90.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c91);
            }
          }
        }
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c92(s1);
      }
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c84);
      }
    }
    return s0;
  }
  function peg$parseargName() {
    var s0, s1, s2, s3, s4;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    s4 = peg$parsewhiteSpace();
    if (s4 === peg$FAILED) {
      s4 = peg$parsepatternSyntax();
    }
    peg$silentFails--;
    if (s4 === peg$FAILED) {
      s3 = void 0;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      if (input.length > peg$currPos) {
        s4 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s4 = peg$FAILED;
        if (peg$silentFails === 0) {
          peg$fail(peg$c14);
        }
      }
      if (s4 !== peg$FAILED) {
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parsewhiteSpace();
        if (s4 === peg$FAILED) {
          s4 = peg$parsepatternSyntax();
        }
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = void 0;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          if (input.length > peg$currPos) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c14);
            }
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s0 = input.substring(s0, peg$currPos);
    } else {
      s0 = s1;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) {
        peg$fail(peg$c93);
      }
    }
    return s0;
  }
  var messageCtx = ["root"];
  function isNestedMessageText() {
    return messageCtx.length > 1;
  }
  function isInPluralOption() {
    return messageCtx[messageCtx.length - 1] === "plural";
  }
  function insertLocation() {
    return options2 && options2.captureLocation ? {
      location: location2()
    } : {};
  }
  peg$result = peg$startRuleFunction();
  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }
    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
  }
}
var pegParse = peg$parse;
var __spreadArrays$2 = function() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k2 = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k2++)
      r[k2] = a[j];
  return r;
};
var PLURAL_HASHTAG_REGEX = /(^|[^\\])#/g;
function normalizeHashtagInPlural(els) {
  els.forEach(function(el) {
    if (!isPluralElement(el) && !isSelectElement(el)) {
      return;
    }
    Object.keys(el.options).forEach(function(id) {
      var _a;
      var opt = el.options[id];
      var matchingLiteralElIndex = -1;
      var literalEl = void 0;
      for (var i = 0; i < opt.value.length; i++) {
        var el_1 = opt.value[i];
        if (isLiteralElement(el_1) && PLURAL_HASHTAG_REGEX.test(el_1.value)) {
          matchingLiteralElIndex = i;
          literalEl = el_1;
          break;
        }
      }
      if (literalEl) {
        var newValue = literalEl.value.replace(PLURAL_HASHTAG_REGEX, "$1{" + el.value + ", number}");
        var newEls = pegParse(newValue);
        (_a = opt.value).splice.apply(_a, __spreadArrays$2([matchingLiteralElIndex, 1], newEls));
      }
      normalizeHashtagInPlural(opt.value);
    });
  });
}
var __assign$1 = function() {
  __assign$1 = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function parseDateTimeSkeleton(skeleton) {
  var result = {};
  skeleton.replace(DATE_TIME_REGEX, function(match2) {
    var len = match2.length;
    switch (match2[0]) {
      case "G":
        result.era = len === 4 ? "long" : len === 5 ? "narrow" : "short";
        break;
      case "y":
        result.year = len === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        result.month = ["numeric", "2-digit", "short", "long", "narrow"][len - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        result.day = ["numeric", "2-digit"][len - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        result.weekday = len === 4 ? "short" : len === 5 ? "narrow" : "short";
        break;
      case "e":
        if (len < 4) {
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        }
        result.weekday = ["short", "long", "narrow", "short"][len - 4];
        break;
      case "c":
        if (len < 4) {
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        }
        result.weekday = ["short", "long", "narrow", "short"][len - 4];
        break;
      case "a":
        result.hour12 = true;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        result.hourCycle = "h12";
        result.hour = ["numeric", "2-digit"][len - 1];
        break;
      case "H":
        result.hourCycle = "h23";
        result.hour = ["numeric", "2-digit"][len - 1];
        break;
      case "K":
        result.hourCycle = "h11";
        result.hour = ["numeric", "2-digit"][len - 1];
        break;
      case "k":
        result.hourCycle = "h24";
        result.hour = ["numeric", "2-digit"][len - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        result.minute = ["numeric", "2-digit"][len - 1];
        break;
      case "s":
        result.second = ["numeric", "2-digit"][len - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) pattenrs are not supported, use `s` instead");
      case "z":
        result.timeZoneName = len < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) pattenrs are not supported, use `z` instead");
    }
    return "";
  });
  return result;
}
function icuUnitToEcma(unit2) {
  return unit2.replace(/^(.*?)-/, "");
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\+|#+)?)?$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?$/g;
function parseSignificantPrecision(str) {
  var result = {};
  str.replace(SIGNIFICANT_PRECISION_REGEX, function(_, g1, g2) {
    if (typeof g2 !== "string") {
      result.minimumSignificantDigits = g1.length;
      result.maximumSignificantDigits = g1.length;
    } else if (g2 === "+") {
      result.minimumSignificantDigits = g1.length;
    } else if (g1[0] === "#") {
      result.maximumSignificantDigits = g1.length;
    } else {
      result.minimumSignificantDigits = g1.length;
      result.maximumSignificantDigits = g1.length + (typeof g2 === "string" ? g2.length : 0);
    }
    return "";
  });
  return result;
}
function parseSign(str) {
  switch (str) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
      return {
        signDisplay: "never"
      };
  }
}
function parseNotationOptions(opt) {
  var result = {};
  var signOpts = parseSign(opt);
  if (signOpts) {
    return signOpts;
  }
  return result;
}
function convertNumberSkeletonToNumberFormatOptions(tokens) {
  var result = {};
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token2 = tokens_1[_i];
    switch (token2.stem) {
      case "percent":
        result.style = "percent";
        continue;
      case "currency":
        result.style = "currency";
        result.currency = token2.options[0];
        continue;
      case "group-off":
        result.useGrouping = false;
        continue;
      case "precision-integer":
        result.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
        result.style = "unit";
        result.unit = icuUnitToEcma(token2.options[0]);
        continue;
      case "compact-short":
        result.notation = "compact";
        result.compactDisplay = "short";
        continue;
      case "compact-long":
        result.notation = "compact";
        result.compactDisplay = "long";
        continue;
      case "scientific":
        result = __assign$1(__assign$1(__assign$1({}, result), { notation: "scientific" }), token2.options.reduce(function(all, opt) {
          return __assign$1(__assign$1({}, all), parseNotationOptions(opt));
        }, {}));
        continue;
      case "engineering":
        result = __assign$1(__assign$1(__assign$1({}, result), { notation: "engineering" }), token2.options.reduce(function(all, opt) {
          return __assign$1(__assign$1({}, all), parseNotationOptions(opt));
        }, {}));
        continue;
      case "notation-simple":
        result.notation = "standard";
        continue;
      case "unit-width-narrow":
        result.currencyDisplay = "narrowSymbol";
        result.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        result.currencyDisplay = "code";
        result.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        result.currencyDisplay = "name";
        result.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        result.currencyDisplay = "symbol";
        continue;
    }
    if (FRACTION_PRECISION_REGEX.test(token2.stem)) {
      if (token2.options.length > 1) {
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      }
      token2.stem.replace(FRACTION_PRECISION_REGEX, function(match2, g1, g2) {
        if (match2 === ".") {
          result.maximumFractionDigits = 0;
        } else if (g2 === "+") {
          result.minimumFractionDigits = g2.length;
        } else if (g1[0] === "#") {
          result.maximumFractionDigits = g1.length;
        } else {
          result.minimumFractionDigits = g1.length;
          result.maximumFractionDigits = g1.length + (typeof g2 === "string" ? g2.length : 0);
        }
        return "";
      });
      if (token2.options.length) {
        result = __assign$1(__assign$1({}, result), parseSignificantPrecision(token2.options[0]));
      }
      continue;
    }
    if (SIGNIFICANT_PRECISION_REGEX.test(token2.stem)) {
      result = __assign$1(__assign$1({}, result), parseSignificantPrecision(token2.stem));
      continue;
    }
    var signOpts = parseSign(token2.stem);
    if (signOpts) {
      result = __assign$1(__assign$1({}, result), signOpts);
    }
  }
  return result;
}
function parse$2(input, opts) {
  var els = pegParse(input, opts);
  if (!opts || opts.normalizeHashtagInPlural !== false) {
    normalizeHashtagInPlural(els);
  }
  return els;
}
var __spreadArrays$1 = function() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k2 = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k2++)
      r[k2] = a[j];
  return r;
};
function getCacheId(inputs) {
  return JSON.stringify(inputs.map(function(input) {
    return input && typeof input === "object" ? orderedProps(input) : input;
  }));
}
function orderedProps(obj) {
  return Object.keys(obj).sort().map(function(k2) {
    var _a;
    return _a = {}, _a[k2] = obj[k2], _a;
  });
}
var memoizeFormatConstructor = function(FormatConstructor, cache) {
  if (cache === void 0) {
    cache = {};
  }
  return function() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var cacheId = getCacheId(args);
    var format2 = cacheId && cache[cacheId];
    if (!format2) {
      format2 = new ((_a = FormatConstructor).bind.apply(_a, __spreadArrays$1([void 0], args)))();
      if (cacheId) {
        cache[cacheId] = format2;
      }
    }
    return format2;
  };
};
const memoizeIntlConstructor = memoizeFormatConstructor;
var __extends = function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (b3.hasOwnProperty(p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __spreadArrays = function() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k2 = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k2++)
      r[k2] = a[j];
  return r;
};
var FormatError = (
  /** @class */
  function(_super) {
    __extends(FormatError2, _super);
    function FormatError2(msg, variableId) {
      var _this = _super.call(this, msg) || this;
      _this.variableId = variableId;
      return _this;
    }
    return FormatError2;
  }(Error)
);
function mergeLiteral(parts) {
  if (parts.length < 2) {
    return parts;
  }
  return parts.reduce(function(all, part) {
    var lastPart = all[all.length - 1];
    if (!lastPart || lastPart.type !== 0 || part.type !== 0) {
      all.push(part);
    } else {
      lastPart.value += part.value;
    }
    return all;
  }, []);
}
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, originalMessage) {
  if (els.length === 1 && isLiteralElement(els[0])) {
    return [
      {
        type: 0,
        value: els[0].value
      }
    ];
  }
  var result = [];
  for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
    var el = els_1[_i];
    if (isLiteralElement(el)) {
      result.push({
        type: 0,
        value: el.value
      });
      continue;
    }
    if (isPoundElement(el)) {
      if (typeof currentPluralValue === "number") {
        result.push({
          type: 0,
          value: formatters.getNumberFormat(locales).format(currentPluralValue)
        });
      }
      continue;
    }
    var varName = el.value;
    if (!(values && varName in values)) {
      throw new FormatError('The intl string context variable "' + varName + '" was not provided to the string "' + originalMessage + '"');
    }
    var value = values[varName];
    if (isArgumentElement(el)) {
      if (!value || typeof value === "string" || typeof value === "number") {
        value = typeof value === "string" || typeof value === "number" ? String(value) : "";
      }
      result.push({
        type: 1,
        value
      });
      continue;
    }
    if (isDateElement(el)) {
      var style2 = typeof el.style === "string" ? formats.date[el.style] : void 0;
      result.push({
        type: 0,
        value: formatters.getDateTimeFormat(locales, style2).format(value)
      });
      continue;
    }
    if (isTimeElement(el)) {
      var style2 = typeof el.style === "string" ? formats.time[el.style] : isDateTimeSkeleton(el.style) ? parseDateTimeSkeleton(el.style.pattern) : void 0;
      result.push({
        type: 0,
        value: formatters.getDateTimeFormat(locales, style2).format(value)
      });
      continue;
    }
    if (isNumberElement(el)) {
      var style2 = typeof el.style === "string" ? formats.number[el.style] : isNumberSkeleton(el.style) ? convertNumberSkeletonToNumberFormatOptions(el.style.tokens) : void 0;
      result.push({
        type: 0,
        value: formatters.getNumberFormat(locales, style2).format(value)
      });
      continue;
    }
    if (isSelectElement(el)) {
      var opt = el.options[value] || el.options.other;
      if (!opt) {
        throw new RangeError('Invalid values for "' + el.value + '": "' + value + '". Options are "' + Object.keys(el.options).join('", "') + '"');
      }
      result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
      continue;
    }
    if (isPluralElement(el)) {
      var opt = el.options["=" + value];
      if (!opt) {
        if (!Intl.PluralRules) {
          throw new FormatError('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n');
        }
        var rule = formatters.getPluralRules(locales, { type: el.pluralType }).select(value - (el.offset || 0));
        opt = el.options[rule] || el.options.other;
      }
      if (!opt) {
        throw new RangeError('Invalid values for "' + el.value + '": "' + value + '". Options are "' + Object.keys(el.options).join('", "') + '"');
      }
      result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
      continue;
    }
  }
  return mergeLiteral(result);
}
function formatToString(els, locales, formatters, formats, values, originalMessage) {
  var parts = formatToParts(els, locales, formatters, formats, values, void 0, originalMessage);
  if (parts.length === 1) {
    return parts[0].value;
  }
  return parts.reduce(function(all, part) {
    return all += part.value;
  }, "");
}
var domParser;
var TOKEN_DELIMITER = "@@";
var TOKEN_REGEX = /@@(\d+_\d+)@@/g;
var counter = 0;
function generateId() {
  return Date.now() + "_" + ++counter;
}
function restoreRichPlaceholderMessage(text, objectParts) {
  return text.split(TOKEN_REGEX).filter(Boolean).map(function(c2) {
    return objectParts[c2] != null ? objectParts[c2] : c2;
  }).reduce(function(all, c2) {
    if (!all.length) {
      all.push(c2);
    } else if (typeof c2 === "string" && typeof all[all.length - 1] === "string") {
      all[all.length - 1] += c2;
    } else {
      all.push(c2);
    }
    return all;
  }, []);
}
var SIMPLE_XML_REGEX = /(<([0-9a-zA-Z-_]*?)>(.*?)<\/([0-9a-zA-Z-_]*?)>)|(<[0-9a-zA-Z-_]*?\/>)/;
var TEMPLATE_ID = Date.now() + "@@";
var VOID_ELEMENTS = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
function formatHTMLElement(el, objectParts, values) {
  var tagName = el.tagName;
  var outerHTML = el.outerHTML, textContent = el.textContent, childNodes = el.childNodes;
  if (!tagName) {
    return restoreRichPlaceholderMessage(textContent || "", objectParts);
  }
  tagName = tagName.toLowerCase();
  var isVoidElement = ~VOID_ELEMENTS.indexOf(tagName);
  var formatFnOrValue = values[tagName];
  if (formatFnOrValue && isVoidElement) {
    throw new FormatError(tagName + " is a self-closing tag and can not be used, please use another tag name.");
  }
  if (!childNodes.length) {
    return [outerHTML];
  }
  var chunks = Array.prototype.slice.call(childNodes).reduce(function(all, child) {
    return all.concat(formatHTMLElement(child, objectParts, values));
  }, []);
  if (!formatFnOrValue) {
    return __spreadArrays(["<" + tagName + ">"], chunks, ["</" + tagName + ">"]);
  }
  if (typeof formatFnOrValue === "function") {
    return [formatFnOrValue.apply(void 0, chunks)];
  }
  return [formatFnOrValue];
}
function formatHTMLMessage(els, locales, formatters, formats, values, originalMessage) {
  var parts = formatToParts(els, locales, formatters, formats, values, void 0, originalMessage);
  var objectParts = {};
  var formattedMessage = parts.reduce(function(all, part) {
    if (part.type === 0) {
      return all += part.value;
    }
    var id = generateId();
    objectParts[id] = part.value;
    return all += "" + TOKEN_DELIMITER + id + TOKEN_DELIMITER;
  }, "");
  if (!SIMPLE_XML_REGEX.test(formattedMessage)) {
    return restoreRichPlaceholderMessage(formattedMessage, objectParts);
  }
  if (!values) {
    throw new FormatError("Message has placeholders but no values was given");
  }
  if (typeof DOMParser === "undefined") {
    throw new FormatError("Cannot format XML message without DOMParser");
  }
  if (!domParser) {
    domParser = new DOMParser();
  }
  var content = domParser.parseFromString('<formatted-message id="' + TEMPLATE_ID + '">' + formattedMessage + "</formatted-message>", "text/html").getElementById(TEMPLATE_ID);
  if (!content) {
    throw new FormatError("Malformed HTML message " + formattedMessage);
  }
  var tagsToFormat = Object.keys(values).filter(function(varName) {
    return !!content.getElementsByTagName(varName).length;
  });
  if (!tagsToFormat.length) {
    return restoreRichPlaceholderMessage(formattedMessage, objectParts);
  }
  var caseSensitiveTags = tagsToFormat.filter(function(tagName) {
    return tagName !== tagName.toLowerCase();
  });
  if (caseSensitiveTags.length) {
    throw new FormatError("HTML tag must be lowercased but the following tags are not: " + caseSensitiveTags.join(", "));
  }
  return Array.prototype.slice.call(content.childNodes).reduce(function(all, child) {
    return all.concat(formatHTMLElement(child, objectParts, values));
  }, []);
}
var __assign = function() {
  __assign = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function mergeConfig(c1, c2) {
  if (!c2) {
    return c1;
  }
  return __assign(__assign(__assign({}, c1 || {}), c2 || {}), Object.keys(c1).reduce(function(all, k2) {
    all[k2] = __assign(__assign({}, c1[k2]), c2[k2] || {});
    return all;
  }, {}));
}
function mergeConfigs(defaultConfig2, configs) {
  if (!configs) {
    return defaultConfig2;
  }
  return Object.keys(defaultConfig2).reduce(function(all, k2) {
    all[k2] = mergeConfig(defaultConfig2[k2], configs[k2]);
    return all;
  }, __assign({}, defaultConfig2));
}
function createDefaultFormatters(cache) {
  if (cache === void 0) {
    cache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    };
  }
  return {
    getNumberFormat: memoizeIntlConstructor(Intl.NumberFormat, cache.number),
    getDateTimeFormat: memoizeIntlConstructor(Intl.DateTimeFormat, cache.dateTime),
    getPluralRules: memoizeIntlConstructor(Intl.PluralRules, cache.pluralRules)
  };
}
var IntlMessageFormat = (
  /** @class */
  function() {
    function IntlMessageFormat2(message, locales, overrideFormats, opts) {
      var _this = this;
      if (locales === void 0) {
        locales = IntlMessageFormat2.defaultLocale;
      }
      this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      };
      this.format = function(values) {
        return formatToString(_this.ast, _this.locales, _this.formatters, _this.formats, values, _this.message);
      };
      this.formatToParts = function(values) {
        return formatToParts(_this.ast, _this.locales, _this.formatters, _this.formats, values, void 0, _this.message);
      };
      this.formatHTMLMessage = function(values) {
        return formatHTMLMessage(_this.ast, _this.locales, _this.formatters, _this.formats, values, _this.message);
      };
      this.resolvedOptions = function() {
        return {
          locale: Intl.NumberFormat.supportedLocalesOf(_this.locales)[0]
        };
      };
      this.getAst = function() {
        return _this.ast;
      };
      if (typeof message === "string") {
        this.message = message;
        if (!IntlMessageFormat2.__parse) {
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        }
        this.ast = IntlMessageFormat2.__parse(message, {
          normalizeHashtagInPlural: false
        });
      } else {
        this.ast = message;
      }
      if (!Array.isArray(this.ast)) {
        throw new TypeError("A message must be provided as a String or AST.");
      }
      this.formats = mergeConfigs(IntlMessageFormat2.formats, overrideFormats);
      this.locales = locales;
      this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
    }
    IntlMessageFormat2.defaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
    IntlMessageFormat2.__parse = parse$2;
    IntlMessageFormat2.formats = {
      number: {
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    };
    return IntlMessageFormat2;
  }()
);
const IntlMessageFormat$1 = IntlMessageFormat;
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var matchHtmlRegExp = /["'&<>]/;
var escapeHtml_1 = escapeHtml;
function escapeHtml(string3) {
  var str = "" + string3;
  var match2 = matchHtmlRegExp.exec(str);
  if (!match2) {
    return str;
  }
  var escape;
  var html = "";
  var index2 = 0;
  var lastIndex = 0;
  for (index2 = match2.index; index2 < str.length; index2++) {
    switch (str.charCodeAt(index2)) {
      case 34:
        escape = "&quot;";
        break;
      case 38:
        escape = "&amp;";
        break;
      case 39:
        escape = "&#39;";
        break;
      case 60:
        escape = "&lt;";
        break;
      case 62:
        escape = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index2) {
      html += str.substring(lastIndex, index2);
    }
    lastIndex = index2 + 1;
    html += escape;
  }
  return lastIndex !== index2 ? html + str.substring(lastIndex, index2) : html;
}
const escapeHtml$1 = /* @__PURE__ */ getDefaultExportFromCjs(escapeHtml_1);
var cookie = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
cookie.parse = parse$1;
cookie.serialize = serialize$1;
var decode$1 = decodeURIComponent;
var encode$1 = encodeURIComponent;
var pairSplitRegExp = /; */;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options2) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options2 || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode$1;
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf("=");
    if (eq_idx < 0) {
      continue;
    }
    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }
    if (void 0 == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }
  return obj;
}
function serialize$1(name, val, options2) {
  var opt = options2 || {};
  var enc = opt.encode || encode$1;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge))
      throw new Error("maxAge should be a Number");
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e2) {
    return str;
  }
}
var querystring = {};
function hasOwnProperty$1(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var decode = function(qs, sep, eq, options2) {
  sep = sep || "&";
  eq = eq || "=";
  var obj = {};
  if (typeof qs !== "string" || qs.length === 0) {
    return obj;
  }
  var regexp4 = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1e3;
  if (options2 && typeof options2.maxKeys === "number") {
    maxKeys = options2.maxKeys;
  }
  var len = qs.length;
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }
  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp4, "%20"), idx = x.indexOf(eq), kstr, vstr, k2, v2;
    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = "";
    }
    k2 = decodeURIComponent(kstr);
    v2 = decodeURIComponent(vstr);
    if (!hasOwnProperty$1(obj, k2)) {
      obj[k2] = v2;
    } else if (Array.isArray(obj[k2])) {
      obj[k2].push(v2);
    } else {
      obj[k2] = [obj[k2], v2];
    }
  }
  return obj;
};
var stringifyPrimitive = function(v2) {
  switch (typeof v2) {
    case "string":
      return v2;
    case "boolean":
      return v2 ? "true" : "false";
    case "number":
      return isFinite(v2) ? v2 : "";
    default:
      return "";
  }
};
var encode = function(obj, sep, eq, name) {
  sep = sep || "&";
  eq = eq || "=";
  if (obj === null) {
    obj = void 0;
  }
  if (typeof obj === "object") {
    return Object.keys(obj).map(function(k2) {
      var ks = encodeURIComponent(stringifyPrimitive(k2)) + eq;
      if (Array.isArray(obj[k2])) {
        return obj[k2].map(function(v2) {
          return ks + encodeURIComponent(stringifyPrimitive(v2));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k2]));
      }
    }).filter(Boolean).join(sep);
  }
  if (!name)
    return "";
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};
querystring.decode = querystring.parse = decode;
querystring.encode = querystring.stringify = encode;
var invariant = function(condition, format2, a, b2, c2, d2, e2, f2) {
  if (!condition) {
    var error;
    if (format2 === void 0) {
      error = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    } else {
      var args = [a, b2, c2, d2, e2, f2];
      var argIndex = 0;
      error = new Error(
        format2.replace(/%s/g, function() {
          return args[argIndex++];
        })
      );
      error.name = "Invariant Violation";
    }
    error.framesToPop = 1;
    throw error;
  }
};
var browser = invariant;
const invariant$1 = /* @__PURE__ */ getDefaultExportFromCjs(browser);
var lodash_merge = { exports: {} };
lodash_merge.exports;
(function(module, exports) {
  var LARGE_ARRAY_SIZE = 200;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag2 = "[object Null]", objectTag = "[object Object]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", undefinedTag2 = "[object Undefined]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  var freeGlobal2 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf2 = typeof self == "object" && self && self.Object === Object && self;
  var root2 = freeGlobal2 || freeSelf2 || Function("return this")();
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil = function() {
    try {
      var types2 = freeModule && freeModule.require && freeModule.require("util").types;
      if (types2) {
        return types2;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e2) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  function apply(func, thisArg, args) {
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
  function baseTimes(n2, iteratee) {
    var index2 = -1, result = Array(n2);
    while (++index2 < n2) {
      result[index2] = iteratee(index2);
    }
    return result;
  }
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  function getValue2(object4, key) {
    return object4 == null ? void 0 : object4[key];
  }
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto2 = Object.prototype;
  var coreJsData = root2["__core-js_shared__"];
  var funcToString = funcProto.toString;
  var hasOwnProperty2 = objectProto2.hasOwnProperty;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  var nativeObjectToString2 = objectProto2.toString;
  var objectCtorString = funcToString.call(Object);
  var reIsNative = RegExp(
    "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  var Buffer = moduleExports ? root2.Buffer : void 0, Symbol2 = root2.Symbol, Uint8Array = root2.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto2.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag2 = Symbol2 ? Symbol2.toStringTag : void 0;
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e2) {
    }
  }();
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeMax = Math.max, nativeNow = Date.now;
  var Map2 = getNative(root2, "Map"), nativeCreate = getNative(Object, "create");
  var baseCreate = function() {
    function object4() {
    }
    return function(proto) {
      if (!isObject2(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object4.prototype = proto;
      var result = new object4();
      object4.prototype = void 0;
      return result;
    };
  }();
  function Hash(entries) {
    var index2 = -1, length2 = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length2) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty2.call(data, key) ? data[key] : void 0;
  }
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
  }
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  Hash.prototype.clear = hashClear;
  Hash.prototype["delete"] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;
  function ListCache(entries) {
    var index2 = -1, length2 = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length2) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  function listCacheDelete(key) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    if (index2 < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index2 == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index2, 1);
    }
    --this.size;
    return true;
  }
  function listCacheGet(key) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    return index2 < 0 ? void 0 : data[index2][1];
  }
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }
  function listCacheSet(key, value) {
    var data = this.__data__, index2 = assocIndexOf(data, key);
    if (index2 < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index2][1] = value;
    }
    return this;
  }
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype["delete"] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;
  function MapCache(entries) {
    var index2 = -1, length2 = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length2) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map2 || ListCache)(),
      "string": new Hash()
    };
  }
  function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }
  function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype["delete"] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  function stackGet(key) {
    return this.__data__.get(key);
  }
  function stackHas(key) {
    return this.__data__.has(key);
  }
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  Stack.prototype.clear = stackClear;
  Stack.prototype["delete"] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length2 = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex(key, length2)))) {
        result.push(key);
      }
    }
    return result;
  }
  function assignMergeValue(object4, key, value) {
    if (value !== void 0 && !eq(object4[key], value) || value === void 0 && !(key in object4)) {
      baseAssignValue(object4, key, value);
    }
  }
  function assignValue(object4, key, value) {
    var objValue = object4[key];
    if (!(hasOwnProperty2.call(object4, key) && eq(objValue, value)) || value === void 0 && !(key in object4)) {
      baseAssignValue(object4, key, value);
    }
  }
  function assocIndexOf(array4, key) {
    var length2 = array4.length;
    while (length2--) {
      if (eq(array4[length2][0], key)) {
        return length2;
      }
    }
    return -1;
  }
  function baseAssignValue(object4, key, value) {
    if (key == "__proto__" && defineProperty) {
      defineProperty(object4, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object4[key] = value;
    }
  }
  var baseFor = createBaseFor();
  function baseGetTag2(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag2 : nullTag2;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag2(value) : objectToString2(value);
  }
  function baseIsArguments(value) {
    return isObjectLike2(value) && baseGetTag2(value) == argsTag;
  }
  function baseIsNative(value) {
    if (!isObject2(value) || isMasked(value)) {
      return false;
    }
    var pattern4 = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern4.test(toSource(value));
  }
  function baseIsTypedArray(value) {
    return isObjectLike2(value) && isLength(value.length) && !!typedArrayTags[baseGetTag2(value)];
  }
  function baseKeysIn(object4) {
    if (!isObject2(object4)) {
      return nativeKeysIn(object4);
    }
    var isProto = isPrototype(object4), result = [];
    for (var key in object4) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object4, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  function baseMerge(object4, source, srcIndex, customizer, stack) {
    if (object4 === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      stack || (stack = new Stack());
      if (isObject2(srcValue)) {
        baseMergeDeep(object4, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object4, key), srcValue, key + "", object4, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object4, key, newValue);
      }
    }, keysIn);
  }
  function baseMergeDeep(object4, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object4, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue(object4, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object4, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray2(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject2(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue(object4, key, newValue);
  }
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
  }
  var baseSetToString = !defineProperty ? identity : function(func, string3) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string3),
      "writable": true
    });
  };
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length2 = buffer.length, result = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
    buffer.copy(result);
    return result;
  }
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  function copyArray(source, array4) {
    var index2 = -1, length2 = source.length;
    array4 || (array4 = Array(length2));
    while (++index2 < length2) {
      array4[index2] = source[index2];
    }
    return array4;
  }
  function copyObject(source, props, object4, customizer) {
    var isNew = !object4;
    object4 || (object4 = {});
    var index2 = -1, length2 = props.length;
    while (++index2 < length2) {
      var key = props[index2];
      var newValue = customizer ? customizer(object4[key], source[key], key, object4, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object4, key, newValue);
      } else {
        assignValue(object4, key, newValue);
      }
    }
    return object4;
  }
  function createAssigner(assigner) {
    return baseRest(function(object4, sources) {
      var index2 = -1, length2 = sources.length, customizer = length2 > 1 ? sources[length2 - 1] : void 0, guard = length2 > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length2--, customizer) : void 0;
      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length2 < 3 ? void 0 : customizer;
        length2 = 1;
      }
      object4 = Object(object4);
      while (++index2 < length2) {
        var source = sources[index2];
        if (source) {
          assigner(object4, source, index2, customizer);
        }
      }
      return object4;
    });
  }
  function createBaseFor(fromRight) {
    return function(object4, iteratee, keysFunc) {
      var index2 = -1, iterable = Object(object4), props = keysFunc(object4), length2 = props.length;
      while (length2--) {
        var key = props[fromRight ? length2 : ++index2];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object4;
    };
  }
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  function getNative(object4, key) {
    var value = getValue2(object4, key);
    return baseIsNative(value) ? value : void 0;
  }
  function getRawTag2(value) {
    var isOwn = hasOwnProperty2.call(value, symToStringTag2), tag = value[symToStringTag2];
    try {
      value[symToStringTag2] = void 0;
      var unmasked = true;
    } catch (e2) {
    }
    var result = nativeObjectToString2.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag2] = tag;
      } else {
        delete value[symToStringTag2];
      }
    }
    return result;
  }
  function initCloneObject(object4) {
    return typeof object4.constructor == "function" && !isPrototype(object4) ? baseCreate(getPrototype(object4)) : {};
  }
  function isIndex(value, length2) {
    var type4 = typeof value;
    length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
    return !!length2 && (type4 == "number" || type4 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
  }
  function isIterateeCall(value, index2, object4) {
    if (!isObject2(object4)) {
      return false;
    }
    var type4 = typeof index2;
    if (type4 == "number" ? isArrayLike(object4) && isIndex(index2, object4.length) : type4 == "string" && index2 in object4) {
      return eq(object4[index2], value);
    }
    return false;
  }
  function isKeyable(value) {
    var type4 = typeof value;
    return type4 == "string" || type4 == "number" || type4 == "symbol" || type4 == "boolean" ? value !== "__proto__" : value === null;
  }
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto2;
    return value === proto;
  }
  function nativeKeysIn(object4) {
    var result = [];
    if (object4 != null) {
      for (var key in Object(object4)) {
        result.push(key);
      }
    }
    return result;
  }
  function objectToString2(value) {
    return nativeObjectToString2.call(value);
  }
  function overRest(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index2 = -1, length2 = nativeMax(args.length - start, 0), array4 = Array(length2);
      while (++index2 < length2) {
        array4[index2] = args[start + index2];
      }
      index2 = -1;
      var otherArgs = Array(start + 1);
      while (++index2 < start) {
        otherArgs[index2] = args[index2];
      }
      otherArgs[start] = transform(array4);
      return apply(func, this, otherArgs);
    };
  }
  function safeGet(object4, key) {
    if (key === "constructor" && typeof object4[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object4[key];
  }
  var setToString = shortOut(baseSetToString);
  function shortOut(func) {
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
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e2) {
      }
      try {
        return func + "";
      } catch (e2) {
      }
    }
    return "";
  }
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var isArguments = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike2(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArray2 = Array.isArray;
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike2(value) && isArrayLike(value);
  }
  var isBuffer = nativeIsBuffer || stubFalse;
  function isFunction(value) {
    if (!isObject2(value)) {
      return false;
    }
    var tag = baseGetTag2(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject2(value) {
    var type4 = typeof value;
    return value != null && (type4 == "object" || type4 == "function");
  }
  function isObjectLike2(value) {
    return value != null && typeof value == "object";
  }
  function isPlainObject(value) {
    if (!isObjectLike2(value) || baseGetTag2(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }
  function keysIn(object4) {
    return isArrayLike(object4) ? arrayLikeKeys(object4, true) : baseKeysIn(object4);
  }
  var merge2 = createAssigner(function(object4, source, srcIndex) {
    baseMerge(object4, source, srcIndex);
  });
  function constant(value) {
    return function() {
      return value;
    };
  }
  function identity(value) {
    return value;
  }
  function stubFalse() {
    return false;
  }
  module.exports = merge2;
})(lodash_merge, lodash_merge.exports);
var lodash_mergeExports = lodash_merge.exports;
const merge$2 = /* @__PURE__ */ getDefaultExportFromCjs(lodash_mergeExports);
var currency = ["AFN", "EUR", "ALL", "DZD", "USD", "AOA", "XCD", "ARS", "AMD", "AWG", "AUD", "AZN", "BSD", "BHD", "BDT", "BBD", "BYN", "BZD", "XOF", "BMD", "INR", "BTN", "BOB", "BOV", "BAM", "BWP", "NOK", "BRL", "BND", "BGN", "BIF", "CVE", "KHR", "XAF", "CAD", "KYD", "CLP", "CLF", "CNY", "COP", "COU", "KMF", "CDF", "NZD", "CRC", "HRK", "CUP", "CUC", "ANG", "CZK", "DKK", "DJF", "DOP", "EGP", "SVC", "ERN", "ETB", "FKP", "FJD", "XPF", "GMD", "GEL", "GHS", "GIP", "GTQ", "GBP", "GNF", "GYD", "HTG", "HNL", "HKD", "HUF", "ISK", "IDR", "XDR", "IRR", "IQD", "ILS", "JMD", "JPY", "JOD", "KZT", "KES", "KPW", "KRW", "KWD", "KGS", "LAK", "LBP", "LSL", "ZAR", "LRD", "LYD", "CHF", "MOP", "MKD", "MGA", "MWK", "MYR", "MVR", "MRO", "MUR", "XUA", "MXN", "MXV", "MDL", "MNT", "MAD", "MZN", "MMK", "NAD", "NPR", "NIO", "NGN", "OMR", "PKR", "PAB", "PGK", "PYG", "PEN", "PHP", "PLN", "QAR", "RON", "RUB", "RWF", "SHP", "WST", "STD", "SAR", "RSD", "SCR", "SLL", "SGD", "XSU", "SBD", "SOS", "SSP", "LKR", "SDG", "SRD", "SZL", "SEK", "CHE", "CHW", "SYP", "TWD", "TJS", "TZS", "THB", "TOP", "TTD", "TND", "TRY", "TMT", "UGX", "UAH", "AED", "USN", "UYU", "UYI", "UZS", "VUV", "VEF", "VND", "YER", "ZMW", "ZWL", "XBA", "XBB", "XBC", "XBD", "XTS", "XXX", "XAU", "XPD", "XPT", "XAG"];
var numberFormat = {};
for (var i = 0; i < currency.length; i++) {
  numberFormat[currency[i]] = {
    style: "currency",
    currency: currency[i]
  };
}
var defaultFormats = {
  number: numberFormat
};
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
String.prototype.defaultMessage = String.prototype.d = function(msg) {
  return this || msg || "";
};
var ReactIntlUniversal = function() {
  function ReactIntlUniversal2() {
    classCallCheck(this, ReactIntlUniversal2);
    this.options = {
      currentLocale: null,
      // Current locale such as 'en-US'
      locales: {},
      // app locale data like {"en-US":{"key1":"value1"},"zh-CN":{"key1":"值1"}}
      warningHandler: function warn() {
        var _console;
        (_console = console).warn.apply(_console, arguments);
      },
      // ability to accumulate missing messages using third party services
      escapeHtml: true,
      // disable escape html in variable mode
      fallbackLocale: null,
      // Locale to use if a key is not found in the current locale
      debug: false,
      // If debugger mode is on, the message will be wrapped by a span
      dataKey: "data-i18n-key"
      // If debugger mode is on, the message will be wrapped by a span with this data key
    };
  }
  createClass(ReactIntlUniversal2, [{
    key: "_getFormattedMessage",
    value: function _getFormattedMessage(key, variables) {
      if (this.options.intlGetHook) {
        try {
          this.options.intlGetHook(key, this.options.currentLocale);
        } catch (e2) {
          console.log("intl get hook error: ", e2);
        }
      }
      invariant$1(key, "key is required");
      var _options = this.options, locales = _options.locales, currentLocale = _options.currentLocale, formats = _options.formats;
      if (!locales || !locales[currentLocale]) {
        var errorMsg = 'react-intl-universal locales data "' + currentLocale + '" not exists.';
        if (!currentLocale) {
          errorMsg += " More info: https://github.com/alibaba/react-intl-universal/issues/144#issuecomment-1345193138";
        }
        this.options.warningHandler(errorMsg);
        return "";
      }
      var msg = this.getDescendantProp(locales[currentLocale], key);
      if (msg == null) {
        if (this.options.fallbackLocale) {
          msg = this.getDescendantProp(locales[this.options.fallbackLocale], key);
          if (msg == null) {
            this.options.warningHandler('react-intl-universal key "' + key + '" not defined in ' + currentLocale + " or the fallback locale, " + this.options.fallbackLocale);
            return "";
          }
        } else {
          this.options.warningHandler('react-intl-universal key "' + key + '" not defined in ' + currentLocale);
          return "";
        }
      }
      if (variables) {
        variables = Object.assign({}, variables);
        for (var i in variables) {
          var value = variables[i];
          if (this.options.escapeHtml === true && (typeof value === "string" || value instanceof String) && value.indexOf("<") >= 0 && value.indexOf(">") >= 0) {
            value = escapeHtml$1(value);
          }
          variables[i] = value;
        }
      }
      try {
        var finalMsg = void 0;
        if (variables) {
          var msgFormatter = new IntlMessageFormat$1(msg, currentLocale, formats);
          finalMsg = msgFormatter.format(variables);
        } else {
          finalMsg = msg;
        }
        return finalMsg;
      } catch (err) {
        this.options.warningHandler("react-intl-universal format message failed for key='" + key + "'.", err.message);
        return msg;
      }
    }
    /**
     * Get the formatted message by key
     * @param {string} key The string representing key in locale data file
     * @param {Object} [variables] Variables in message
     * @returns {string} message
     */
  }, {
    key: "get",
    value: function get$$1(key, variables) {
      var msg = this._getFormattedMessage(key, variables);
      return this.options.debug ? this._getSpanElementMessage(key, msg) : msg;
    }
    /**
     * Get the formatted html message by key.
     * @param {string} key The string representing key in locale data file
     * @param {Object} [variables] Variables in message
     * @returns {React.ReactElement} html message
    */
  }, {
    key: "getHTML",
    value: function getHTML(key, variables) {
      var msg = this._getFormattedMessage(key, variables);
      if (msg) {
        return this._getSpanElementMessage(key, msg);
      }
      return "";
    }
    /**
     * As same as get(...) API
     * @param {Object} options
     * @param {string} options.id
     * @param {string} options.defaultMessage
     * @param {Object} variables Variables in message
     * @returns {string} message
    */
  }, {
    key: "formatMessage",
    value: function formatMessage(messageDescriptor, variables) {
      var id = messageDescriptor.id, defaultMessage = messageDescriptor.defaultMessage;
      return this.get(id, variables).defaultMessage(defaultMessage);
    }
    /**
     * As same as getHTML(...) API
     * @param {Object} options
     * @param {string} options.id
     * @param {React.Element} options.defaultMessage
     * @param {Object} variables Variables in message
     * @returns {React.Element} message
    */
  }, {
    key: "formatHTMLMessage",
    value: function formatHTMLMessage2(messageDescriptor, variables) {
      var id = messageDescriptor.id, defaultMessage = messageDescriptor.defaultMessage;
      return this.getHTML(id, variables).defaultMessage(defaultMessage);
    }
    /**
     * Helper: determine user's locale via URL, cookie, localStorage, and browser's language.
     * You may not need this API, if you have other rules to determine user's locale.
     * @param {string} options.urlLocaleKey URL's query Key to determine locale. Example: if URL=http://localhost?lang=en-US, then set it 'lang'
     * @param {string} options.cookieLocaleKey Cookie's Key to determine locale. Example: if cookie=lang:en-US, then set it 'lang'
     * @param {string} options.localStorageLocaleKey LocalStorage's Key to determine locale such as 'lang'
     * @returns {string} determined locale such as 'en-US'
     */
  }, {
    key: "determineLocale",
    value: function determineLocale() {
      var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this.getLocaleFromURL(options2) || this.getLocaleFromCookie(options2) || this.getLocaleFromLocalStorage(options2) || this.getLocaleFromBrowser();
    }
    /**
     * Initialize properties and load CLDR locale data according to currentLocale
     * @param {Object} options
     * @param {string} options.currentLocale Current locale such as 'en-US'
     * @param {any} options.locales App locale data like {"en-US":{"key1":"value1"},"zh-CN":{"key1":"值1"}}
     * @param {boolean} [options.debug] debug mode
     * @returns {Promise}
     */
  }, {
    key: "init",
    value: function init() {
      var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      invariant$1(options2.currentLocale, "options.currentLocale is required");
      invariant$1(options2.locales, "options.locales is required");
      Object.assign(this.options, options2);
      this.options.formats = Object.assign({}, this.options.formats, defaultFormats);
      return new Promise(function(resolve, reject) {
        resolve();
      });
    }
    /**
     * Get the inital options
     */
  }, {
    key: "getInitOptions",
    value: function getInitOptions() {
      return this.options;
    }
    /**
     * Load more locales after init
     */
  }, {
    key: "load",
    value: function load(locales) {
      merge$2(this.options.locales, locales);
    }
  }, {
    key: "getLocaleFromCookie",
    value: function getLocaleFromCookie(options2) {
      var cookieLocaleKey = options2.cookieLocaleKey;
      if (cookieLocaleKey) {
        var params = cookie.parse(document.cookie);
        return params && params[cookieLocaleKey];
      }
    }
  }, {
    key: "getLocaleFromLocalStorage",
    value: function getLocaleFromLocalStorage(options2) {
      var localStorageLocaleKey = options2.localStorageLocaleKey;
      if (localStorageLocaleKey && window.localStorage) {
        return localStorage.getItem(localStorageLocaleKey);
      }
    }
  }, {
    key: "getLocaleFromURL",
    value: function getLocaleFromURL(options2) {
      var urlLocaleKey = options2.urlLocaleKey;
      if (urlLocaleKey) {
        var query2 = location.search.split("?");
        if (query2.length >= 2) {
          var params = querystring.parse(query2[1]);
          return params && params[urlLocaleKey];
        }
      }
    }
  }, {
    key: "getDescendantProp",
    value: function getDescendantProp(locale2, key) {
      if (locale2[key]) {
        return locale2[key];
      }
      var msg = key.split(".").reduce(function(a, b2) {
        return a != void 0 ? a[b2] : a;
      }, locale2);
      return msg;
    }
  }, {
    key: "getLocaleFromBrowser",
    value: function getLocaleFromBrowser() {
      return navigator.language || navigator.userLanguage;
    }
  }, {
    key: "_getSpanElementMessage",
    value: function _getSpanElementMessage(key, msg) {
      var options2 = {
        dangerouslySetInnerHTML: {
          __html: msg
        }
      };
      if (this.options.debug) {
        options2[this.options.dataKey] = key;
      }
      var el = React.createElement("span", options2);
      var defaultMessage = function defaultMessage2() {
        return el;
      };
      return Object.assign({ defaultMessage, d: defaultMessage }, el);
    }
  }]);
  return ReactIntlUniversal2;
}();
var defaultInstance = new ReactIntlUniversal();
defaultInstance.ReactIntlUniversal = ReactIntlUniversal;
defaultInstance.get.bind(defaultInstance);
defaultInstance.getHTML.bind(defaultInstance);
defaultInstance.formatMessage.bind(defaultInstance);
defaultInstance.formatHTMLMessage.bind(defaultInstance);
defaultInstance.determineLocale.bind(defaultInstance);
defaultInstance.init.bind(defaultInstance);
defaultInstance.getInitOptions.bind(defaultInstance);
defaultInstance.load.bind(defaultInstance);
defaultInstance.getLocaleFromCookie.bind(defaultInstance);
defaultInstance.getLocaleFromLocalStorage.bind(defaultInstance);
defaultInstance.getLocaleFromURL.bind(defaultInstance);
defaultInstance.getDescendantProp.bind(defaultInstance);
defaultInstance.getLocaleFromBrowser.bind(defaultInstance);
const logo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20t='1702917037840'%20class='icon'%20version='1.1'%20p-id='13202'%20viewBox='152.5%20132.4%20732.5%20732.9'%3e%3cpath%20d='M432.4%20453.5l-17%2046.7h34.4z'%20fill='%23FFFFFF'%20p-id='13203'/%3e%3cpath%20d='M725.3%20259.7H312.2c-16.5%200-30%2013.5-30%2030v413.1c0%2016.5%2013.5%2030%2030%2030h413.1c16.5%200%2030-13.5%2030-30V289.7c0-16.6-13.5-30-30-30z%20m-98.8%20164.5h25.4V550h-25.4V424.2z%20m-116.5%200h40.8c15.5%200%2025.5%200.6%2030.2%201.9%207.2%201.9%2013.2%206%2018.1%2012.3%204.9%206.3%207.3%2014.5%207.3%2024.5%200%207.7-1.4%2014.2-4.2%2019.5s-6.4%209.4-10.7%2012.4c-4.3%203-8.7%205-13.2%206-6.1%201.2-14.8%201.8-26.4%201.8h-16.6V550H510V424.2z%20m-90.7%200h26.9L496.5%20550h-27.6l-11-28.6h-50.3L397.2%20550h-27l49.1-125.8z%20m229.1%20273.3H352.6c-19.4%200-35.1-15.7-35.1-35.1v-295c0-5.5%204.5-10%2010-10s10%204.5%2010%2010v295c0%208.3%206.8%2015.1%2015.1%2015.1h295.8c5.5%200%2010%204.5%2010%2010s-4.4%2010-10%2010z'%20fill='%23FFFFFF'%20p-id='13204'/%3e%3cpath%20d='M569.4%20479.2c3.4-1.3%206-3.4%207.9-6.2%201.9-2.8%202.9-6.1%202.9-9.8%200-4.6-1.3-8.4-4-11.3-2.7-3-6.1-4.8-10.2-5.6-3-0.6-9.1-0.9-18.3-0.9h-12.3v35.7h13.9c10%200.1%2016.7-0.6%2020.1-1.9z'%20fill='%23FFFFFF'%20p-id='13205'/%3e%3cpath%20d='M648.4%20677.5H352.6c-8.3%200-15.1-6.8-15.1-15.1v-295c0-5.5-4.5-10-10-10s-10%204.5-10%2010v295c0%2019.4%2015.7%2035.1%2035.1%2035.1h295.8c5.5%200%2010-4.5%2010-10s-4.4-10-10-10z'%20fill='%2306F3FF'%20p-id='13206'/%3e%3cpath%20d='M865%20386.5c11%200%2020-9%2020-20s-9-20-20-20h-69.7v-56.8c0-38.6-31.4-70-70-70h-27.8v-67.3c0-11-9-20-20-20s-20%209-20%2020v67.3H611v-67.3c0-11-9-20-20-20s-20%209-20%2020v67.3h-46.5v-67.3c0-11-9-20-20-20s-20%209-20%2020v67.3H438v-67.3c0-11-9-20-20-20s-20%209-20%2020v67.3h-85.8c-38.6%200-70%2031.4-70%2070v56.8h-69.7c-11%200-20%209-20%2020s9%2020%2020%2020h69.7V433h-69.7c-11%200-20%209-20%2020s9%2020%2020%2020h69.7v46.5h-69.7c-11%200-20%209-20%2020s9%2020%2020%2020h69.7V606h-69.7c-11%200-20%209-20%2020s9%2020%2020%2020h69.7v56.8c0%2038.6%2031.4%2070%2070%2070H343v72.5c0%2011%209%2020%2020%2020s20-9%2020-20v-72.5h46.5v72.5c0%2011%209%2020%2020%2020s20-9%2020-20v-72.5H516v72.5c0%2011%209%2020%2020%2020s20-9%2020-20v-72.5h46.5v72.5c0%2011%209%2020%2020%2020s20-9%2020-20v-72.5h82.8c38.6%200%2070-31.4%2070-70V646H865c11%200%2020-9%2020-20s-9-20-20-20h-69.7v-46.5H865c11%200%2020-9%2020-20s-9-20-20-20h-69.7V473H865c11%200%2020-9%2020-20s-9-20-20-20h-69.7v-46.5H865zM755.3%20702.7c0%2016.5-13.5%2030-30%2030H312.2c-16.5%200-30-13.5-30-30v-413c0-16.5%2013.5-30%2030-30h413.1c16.5%200%2030%2013.5%2030%2030v413z'%20fill='%23005BFF'%20p-id='13207'/%3e%3cpath%20d='M407.6%20521.4h50.3l11%2028.6h27.6l-50.4-125.8h-26.9l-49%20125.8h27l10.4-28.6z%20m24.8-67.9l17.3%2046.7h-34.3l17-46.7zM535.4%20502.6H552c11.5%200%2020.3-0.6%2026.4-1.8%204.5-1%208.9-3%2013.2-6%204.3-3%207.9-7.1%2010.7-12.4s4.2-11.8%204.2-19.5c0-10-2.4-18.2-7.3-24.5-4.9-6.3-10.9-10.4-18.1-12.3-4.7-1.3-14.8-1.9-30.2-1.9H510V550h25.4v-47.4z%20m0-57.1h12.3c9.2%200%2015.2%200.3%2018.3%200.9%204.1%200.7%207.5%202.6%2010.2%205.6%202.7%203%204%206.8%204%2011.3%200%203.7-1%207-2.9%209.8-1.9%202.8-4.6%204.9-7.9%206.2-3.4%201.3-10.1%202-20.1%202h-13.9v-35.8zM626.5%20424.2h25.4V550h-25.4z'%20fill='%23005BFF'%20p-id='13208'/%3e%3c/svg%3e";
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$1 = freeGlobal || freeSelf || Function("return this")();
var _root = root$1;
var root = _root;
var Symbol$4 = root.Symbol;
var _Symbol = Symbol$4;
var Symbol$3 = _Symbol;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
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
var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
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
var isArray$1 = Array.isArray;
var isArray_1 = isArray$1;
const isArray$2 = /* @__PURE__ */ getDefaultExportFromCjs(isArray_1);
var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$1(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var isSymbol_1 = isSymbol$1;
function arrayMap$1(array4, iteratee) {
  var index2 = -1, length2 = array4 == null ? 0 : array4.length, result = Array(length2);
  while (++index2 < length2) {
    result[index2] = iteratee(array4[index2], index2, array4);
  }
  return result;
}
var _arrayMap = arrayMap$1;
var Symbol$1 = _Symbol, arrayMap = _arrayMap, isArray = isArray_1, isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray(value)) {
    return arrayMap(value, baseToString$1) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$4(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$4;
const storageMap = /* @__PURE__ */ new Map();
function useStorage(storage) {
  const _data = reactExports.useSyncExternalStore(storage.subscribe, storage.getSnapshot);
  if (!storageMap.has(storage)) {
    storageMap.set(storage, wrapPromise(storage.get()));
  }
  if (_data !== null) {
    storageMap.set(storage, { read: () => _data });
  }
  return _data ?? storageMap.get(storage).read();
}
function wrapPromise(promise) {
  let status = "pending";
  let result;
  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e2) => {
      status = "error";
      result = e2;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    }
  };
}
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classnamesExports = classnames.exports;
const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends$1.apply(this, arguments);
}
var reactIs = { exports: {} };
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
u = Symbol.for("react.module.reference");
function v(a) {
  if ("object" === typeof a && null !== a) {
    var r = a.$$typeof;
    switch (r) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case m:
          case n:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case h:
              case l:
              case q:
              case p:
              case g:
                return a;
              default:
                return r;
            }
        }
      case c:
        return r;
    }
  }
}
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = g;
reactIs_production_min.Element = b;
reactIs_production_min.ForwardRef = l;
reactIs_production_min.Fragment = d;
reactIs_production_min.Lazy = q;
reactIs_production_min.Memo = p;
reactIs_production_min.Portal = c;
reactIs_production_min.Profiler = f;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m;
reactIs_production_min.SuspenseList = n;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a) {
  return v(a) === h;
};
reactIs_production_min.isContextProvider = function(a) {
  return v(a) === g;
};
reactIs_production_min.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a) {
  return v(a) === l;
};
reactIs_production_min.isFragment = function(a) {
  return v(a) === d;
};
reactIs_production_min.isLazy = function(a) {
  return v(a) === q;
};
reactIs_production_min.isMemo = function(a) {
  return v(a) === p;
};
reactIs_production_min.isPortal = function(a) {
  return v(a) === c;
};
reactIs_production_min.isProfiler = function(a) {
  return v(a) === f;
};
reactIs_production_min.isStrictMode = function(a) {
  return v(a) === e;
};
reactIs_production_min.isSuspense = function(a) {
  return v(a) === m;
};
reactIs_production_min.isSuspenseList = function(a) {
  return v(a) === n;
};
reactIs_production_min.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
};
reactIs_production_min.typeOf = v;
{
  reactIs.exports = reactIs_production_min;
}
var reactIsExports = reactIs.exports;
function toArray$3(children) {
  var option2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var ret = [];
  React.Children.forEach(children, function(child) {
    if ((child === void 0 || child === null) && !option2.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray$3(child));
    } else if (reactIsExports.isFragment(child) && child.props) {
      ret = ret.concat(toArray$3(child.props.children, option2));
    } else {
      ret.push(child);
    }
  });
  return ret;
}
var warned = {};
var preMessage = function preMessage2(fn) {
};
function warning$3(valid, message) {
}
function note(valid, message) {
}
function resetWarned() {
  warned = {};
}
function call(method4, valid, message) {
  if (!valid && !warned[message]) {
    method4(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning$3, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function toPrimitive(t2, r) {
  if ("object" != _typeof(t2) || !t2)
    return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i = e2.call(t2, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t2);
}
function toPropertyKey(t2) {
  var i = toPrimitive(t2, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(e2, r) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e2, r2).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r = 1; r < arguments.length; r++) {
    var t2 = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t2), true).forEach(function(r2) {
      _defineProperty(e2, r2, t2[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r2) {
      Object.defineProperty(e2, r2, Object.getOwnPropertyDescriptor(t2, r2));
    });
  }
  return e2;
}
function isDOM(node2) {
  return node2 instanceof HTMLElement || node2 instanceof SVGElement;
}
function findDOMNode(node2) {
  if (isDOM(node2)) {
    return node2;
  }
  if (node2 instanceof React.Component) {
    return ReactDOM.findDOMNode(node2);
  }
  return null;
}
function useMemo(getValue2, condition, shouldUpdate) {
  var cacheRef = reactExports.useRef({});
  if (!("value" in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue2();
    cacheRef.current.condition = condition;
  }
  return cacheRef.current.value;
}
function fillRef(ref, node2) {
  if (typeof ref === "function") {
    ref(node2);
  } else if (_typeof(ref) === "object" && ref && "current" in ref) {
    ref.current = node2;
  }
}
function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(function(ref) {
    return ref;
  });
  if (refList.length <= 1) {
    return refList[0];
  }
  return function(node2) {
    refs.forEach(function(ref) {
      fillRef(ref, node2);
    });
  };
}
function useComposeRef() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }
  return useMemo(function() {
    return composeRef.apply(void 0, refs);
  }, refs, function(prev2, next2) {
    return prev2.length !== next2.length || prev2.every(function(ref, i) {
      return ref !== next2[i];
    });
  });
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  var type4 = reactIsExports.isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
  if (typeof type4 === "function" && !((_type$prototype = type4.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render)) {
    return false;
  }
  if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render)) {
    return false;
  }
  return true;
}
function supportNodeRef(node2) {
  if (!/* @__PURE__ */ reactExports.isValidElement(node2)) {
    return false;
  }
  if (reactIsExports.isFragment(node2)) {
    return false;
  }
  return supportRef(node2);
}
var CollectionContext = /* @__PURE__ */ reactExports.createContext(null);
function Collection(_ref) {
  var children = _ref.children, onBatchResize = _ref.onBatchResize;
  var resizeIdRef = reactExports.useRef(0);
  var resizeInfosRef = reactExports.useRef([]);
  var onCollectionResize = reactExports.useContext(CollectionContext);
  var onResize2 = reactExports.useCallback(function(size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size,
      element,
      data
    });
    Promise.resolve().then(function() {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });
    onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /* @__PURE__ */ reactExports.createElement(CollectionContext.Provider, {
    value: onResize2
  }, children);
}
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry, index2) {
      if (entry[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return (
    /** @class */
    function() {
      function class_1() {
        this.__entries__ = [];
      }
      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      class_1.prototype.get = function(key) {
        var index2 = getIndex(this.__entries__, key);
        var entry = this.__entries__[index2];
        return entry && entry[1];
      };
      class_1.prototype.set = function(key, value) {
        var index2 = getIndex(this.__entries__, key);
        if (~index2) {
          this.__entries__[index2][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      class_1.prototype.delete = function(key) {
        var entries = this.__entries__;
        var index2 = getIndex(entries, key);
        if (~index2) {
          entries.splice(index2, 1);
        }
      };
      class_1.prototype.has = function(key) {
        return !!~getIndex(this.__entries__, key);
      };
      class_1.prototype.clear = function() {
        this.__entries__.splice(0);
      };
      class_1.prototype.forEach = function(callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };
      return class_1;
    }()
  );
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = (
  /** @class */
  function() {
    function ResizeObserverController2() {
      this.connected_ = false;
      this.mutationEventsAdded_ = false;
      this.mutationsObserver_ = null;
      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    ResizeObserverController2.prototype.addObserver = function(observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
      }
      if (!this.connected_) {
        this.connect_();
      }
    };
    ResizeObserverController2.prototype.removeObserver = function(observer) {
      var observers2 = this.observers_;
      var index2 = observers2.indexOf(observer);
      if (~index2) {
        observers2.splice(index2, 1);
      }
      if (!observers2.length && this.connected_) {
        this.disconnect_();
      }
    };
    ResizeObserverController2.prototype.refresh = function() {
      var changesDetected = this.updateObservers_();
      if (changesDetected) {
        this.refresh();
      }
    };
    ResizeObserverController2.prototype.updateObservers_ = function() {
      var activeObservers = this.observers_.filter(function(observer) {
        return observer.gatherActive(), observer.hasActive();
      });
      activeObservers.forEach(function(observer) {
        return observer.broadcastActive();
      });
      return activeObservers.length > 0;
    };
    ResizeObserverController2.prototype.connect_ = function() {
      if (!isBrowser || this.connected_) {
        return;
      }
      document.addEventListener("transitionend", this.onTransitionEnd_);
      window.addEventListener("resize", this.refresh);
      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        document.addEventListener("DOMSubtreeModified", this.refresh);
        this.mutationEventsAdded_ = true;
      }
      this.connected_ = true;
    };
    ResizeObserverController2.prototype.disconnect_ = function() {
      if (!isBrowser || !this.connected_) {
        return;
      }
      document.removeEventListener("transitionend", this.onTransitionEnd_);
      window.removeEventListener("resize", this.refresh);
      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }
      if (this.mutationEventsAdded_) {
        document.removeEventListener("DOMSubtreeModified", this.refresh);
      }
      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    };
    ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
      var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
      var isReflowProperty = transitionKeys.some(function(key) {
        return !!~propertyName.indexOf(key);
      });
      if (isReflowProperty) {
        this.refresh();
      }
    };
    ResizeObserverController2.getInstance = function() {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController2();
      }
      return this.instance_;
    };
    ResizeObserverController2.instance_ = null;
    return ResizeObserverController2;
  }()
);
var defineConfigurable = function(target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};
var getWindowOf = function(target) {
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position2) {
    var value = styles["border-" + position2 + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position2 = positions_1[_i];
    var value = styles["padding-" + position2];
    paddings[position2] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  return function(target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
  };
}();
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return { x, y, width, height };
}
var ResizeObservation = (
  /** @class */
  function() {
    function ResizeObservation2(target) {
      this.broadcastWidth = 0;
      this.broadcastHeight = 0;
      this.contentRect_ = createRectInit(0, 0, 0, 0);
      this.target = target;
    }
    ResizeObservation2.prototype.isActive = function() {
      var rect = getContentRect(this.target);
      this.contentRect_ = rect;
      return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    ResizeObservation2.prototype.broadcastRect = function() {
      var rect = this.contentRect_;
      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;
      return rect;
    };
    return ResizeObservation2;
  }()
);
var ResizeObserverEntry = (
  /** @class */
  function() {
    function ResizeObserverEntry2(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit);
      defineConfigurable(this, { target, contentRect });
    }
    return ResizeObserverEntry2;
  }()
);
var ResizeObserverSPI = (
  /** @class */
  function() {
    function ResizeObserverSPI2(callback, controller, callbackCtx) {
      this.activeObservations_ = [];
      this.observations_ = new MapShim();
      if (typeof callback !== "function") {
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      }
      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
    }
    ResizeObserverSPI2.prototype.observe = function(target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (observations.has(target)) {
        return;
      }
      observations.set(target, new ResizeObservation(target));
      this.controller_.addObserver(this);
      this.controller_.refresh();
    };
    ResizeObserverSPI2.prototype.unobserve = function(target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (!observations.has(target)) {
        return;
      }
      observations.delete(target);
      if (!observations.size) {
        this.controller_.removeObserver(this);
      }
    };
    ResizeObserverSPI2.prototype.disconnect = function() {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    ResizeObserverSPI2.prototype.gatherActive = function() {
      var _this = this;
      this.clearActive();
      this.observations_.forEach(function(observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation);
        }
      });
    };
    ResizeObserverSPI2.prototype.broadcastActive = function() {
      if (!this.hasActive()) {
        return;
      }
      var ctx = this.callbackCtx_;
      var entries = this.activeObservations_.map(function(observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });
      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
    };
    ResizeObserverSPI2.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    };
    ResizeObserverSPI2.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI2;
  }()
);
var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
var ResizeObserver$2 = (
  /** @class */
  function() {
    function ResizeObserver2(callback) {
      if (!(this instanceof ResizeObserver2)) {
        throw new TypeError("Cannot call a class as a function.");
      }
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);
      observers.set(this, observer);
    }
    return ResizeObserver2;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(method4) {
  ResizeObserver$2.prototype[method4] = function() {
    var _a;
    return (_a = observers.get(this))[method4].apply(_a, arguments);
  };
});
var index = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver$2;
}();
var elementListeners = /* @__PURE__ */ new Map();
function onResize(entities) {
  entities.forEach(function(entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function(listener) {
      return listener(target);
    });
  });
}
var resizeObserver = new index(onResize);
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, /* @__PURE__ */ new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _setPrototypeOf$1(o, p2) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf$1(o, p2);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf$1(subClass, superClass);
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _possibleConstructorReturn(self2, call2) {
  if (call2 && (_typeof(call2) === "object" || typeof call2 === "function")) {
    return call2;
  } else if (call2 !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
var DomWrapper$1 = /* @__PURE__ */ function(_React$Component) {
  _inherits(DomWrapper2, _React$Component);
  var _super = _createSuper(DomWrapper2);
  function DomWrapper2() {
    _classCallCheck(this, DomWrapper2);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper2, [{
    key: "render",
    value: function render2() {
      return this.props.children;
    }
  }]);
  return DomWrapper2;
}(reactExports.Component);
function SingleObserver(props, ref) {
  var children = props.children, disabled = props.disabled;
  var elementRef = reactExports.useRef(null);
  var wrapperRef = reactExports.useRef(null);
  var onCollectionResize = reactExports.useContext(CollectionContext);
  var isRenderProps = typeof children === "function";
  var mergedChildren = isRenderProps ? children(elementRef) : children;
  var sizeRef = reactExports.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });
  var canRef = !isRenderProps && /* @__PURE__ */ reactExports.isValidElement(mergedChildren) && supportRef(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = useComposeRef(originRef, elementRef);
  var getDom = function getDom2() {
    var _elementRef$current;
    return findDOMNode(elementRef.current) || // Support `nativeElement` format
    (elementRef.current && _typeof(elementRef.current) === "object" ? findDOMNode((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || findDOMNode(wrapperRef.current);
  };
  reactExports.useImperativeHandle(ref, function() {
    return getDom();
  });
  var propsRef = reactExports.useRef(props);
  propsRef.current = props;
  var onInternalResize = reactExports.useCallback(function(target) {
    var _propsRef$current = propsRef.current, onResize2 = _propsRef$current.onResize, data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(), width = _target$getBoundingCl.width, height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth, offsetHeight = target.offsetHeight;
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth,
        offsetHeight
      };
      sizeRef.current = size;
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = _objectSpread2(_objectSpread2({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });
      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);
      if (onResize2) {
        Promise.resolve().then(function() {
          onResize2(sizeInfo, target);
        });
      }
    }
  }, []);
  reactExports.useEffect(function() {
    var currentElement = getDom();
    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }
    return function() {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);
  return /* @__PURE__ */ reactExports.createElement(DomWrapper$1, {
    ref: wrapperRef
  }, canRef ? /* @__PURE__ */ reactExports.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
var RefSingleObserver = /* @__PURE__ */ reactExports.forwardRef(SingleObserver);
var INTERNAL_PREFIX_KEY = "rc-observer-key";
function ResizeObserver$1(props, ref) {
  var children = props.children;
  var childNodes = typeof children === "function" ? [children] : toArray$3(children);
  return childNodes.map(function(child, index2) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index2);
    return /* @__PURE__ */ reactExports.createElement(RefSingleObserver, _extends$1({}, props, {
      key,
      ref: index2 === 0 ? ref : void 0
    }), child);
  });
}
var RefResizeObserver = /* @__PURE__ */ reactExports.forwardRef(ResizeObserver$1);
RefResizeObserver.Collection = Collection;
function omit(obj, fields) {
  var clone = _objectSpread2({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function(key) {
      delete clone[key];
    });
  }
  return clone;
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var raf = function raf2(callback) {
  return +setTimeout(callback, 16);
};
var caf = function caf2(num) {
  return clearTimeout(num);
};
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
  raf = function raf3(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf3(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = /* @__PURE__ */ new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf2(callback) {
  var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      cleanup(id);
      callback();
    } else {
      var realId = raf(function() {
        callRef(leftTimes - 1);
      });
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = function(id) {
  var realId = rafIds.get(id);
  cleanup(id);
  return caf(realId);
};
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(r, l2) {
  var t2 = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t2) {
    var e2, n2, i, u2, a = [], f2 = true, o = false;
    try {
      if (i = (t2 = t2.call(r)).next, 0 === l2) {
        if (Object(t2) !== t2)
          return;
        f2 = false;
      } else
        for (; !(f2 = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l2); f2 = true)
          ;
    } catch (r2) {
      o = true, n2 = r2;
    } finally {
      try {
        if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2))
          return;
      } finally {
        if (o)
          throw n2;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function murmur2(str) {
  var h2 = 0;
  var k2, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= /* k >>> r: */
    k2 >>> 24;
    h2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i) & 255;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = /* Math.imul(h, m): */
  (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function contains(root2, n2) {
  if (!root2) {
    return false;
  }
  if (root2.contains) {
    return root2.contains(n2);
  }
  var node2 = n2;
  while (node2) {
    if (node2 === root2) {
      return true;
    }
    node2 = node2.parentNode;
  }
  return false;
}
var APPEND_ORDER = "data-rc-order";
var APPEND_PRIORITY = "data-rc-priority";
var MARK_KEY = "rc-util-key";
var containerCache = /* @__PURE__ */ new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
  if (mark) {
    return mark.startsWith("data-") ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option2) {
  if (option2.attachTo) {
    return option2.attachTo;
  }
  var head = document.querySelector("head");
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function(node2) {
    return node2.tagName === "STYLE";
  });
}
function injectCSS(css) {
  var option2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option2.csp, prepend = option2.prepend, _option$priority = option2.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === "prependQueue";
  var styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option2);
  var firstChild = container.firstChild;
  if (prepend) {
    if (isPrependQueue) {
      var existStyle = findStyles(container).filter(function(node2) {
        if (!["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER))) {
          return false;
        }
        var nodePriority = Number(node2.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var container = getContainer(option2);
  return findStyles(container).find(function(node2) {
    return node2.getAttribute(getMark(option2)) === key;
  });
}
function removeCSS(key) {
  var option2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var existNode = findExistNode(key, option2);
  if (existNode) {
    var container = getContainer(option2);
    container.removeChild(existNode);
  }
}
function syncRealContainer(container, option2) {
  var cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS("", option2);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key) {
  var option2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var container = getContainer(option2);
  syncRealContainer(container, option2);
  var existNode = findExistNode(key, option2);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option2.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option2.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option2.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option2);
  newNode.setAttribute(getMark(option2), key);
  return newNode;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function isEqual(obj1, obj2) {
  var shallow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var refSet = /* @__PURE__ */ new Set();
  function deepEqual(a, b2) {
    var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    var circular = refSet.has(a);
    warningOnce(!circular, "Warning: There may be circular references");
    if (circular) {
      return false;
    }
    if (a === b2) {
      return true;
    }
    if (shallow && level > 1) {
      return false;
    }
    refSet.add(a);
    var newLevel = level + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(b2) || a.length !== b2.length) {
        return false;
      }
      for (var i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b2[i], newLevel)) {
          return false;
        }
      }
      return true;
    }
    if (a && b2 && _typeof(a) === "object" && _typeof(b2) === "object") {
      var keys2 = Object.keys(a);
      if (keys2.length !== Object.keys(b2).length) {
        return false;
      }
      return keys2.every(function(key) {
        return deepEqual(a[key], b2[key], newLevel);
      });
    }
    return false;
  }
  return deepEqual(obj1, obj2);
}
var SPLIT$1 = "%";
var Entity = /* @__PURE__ */ function() {
  function Entity2(instanceId) {
    _classCallCheck(this, Entity2);
    _defineProperty(this, "instanceId", void 0);
    _defineProperty(this, "cache", /* @__PURE__ */ new Map());
    this.instanceId = instanceId;
  }
  _createClass(Entity2, [{
    key: "get",
    value: function get2(keys2) {
      return this.cache.get(keys2.join(SPLIT$1)) || null;
    }
  }, {
    key: "update",
    value: function update(keys2, valueFn) {
      var path = keys2.join(SPLIT$1);
      var prevValue = this.cache.get(path);
      var nextValue = valueFn(prevValue);
      if (nextValue === null) {
        this.cache.delete(path);
      } else {
        this.cache.set(path, nextValue);
      }
    }
  }]);
  return Entity2;
}();
var ATTR_TOKEN = "data-token-hash";
var ATTR_MARK = "data-css-hash";
var CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
function createCache() {
  var cssinjsInstanceId = Math.random().toString(12).slice(2);
  if (typeof document !== "undefined" && document.head && document.body) {
    var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
    var firstChild = document.head.firstChild;
    Array.from(styles).forEach(function(style2) {
      style2[CSS_IN_JS_INSTANCE] = style2[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
      if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
        document.head.insertBefore(style2, firstChild);
      }
    });
    var styleHash = {};
    Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function(style2) {
      var hash = style2.getAttribute(ATTR_MARK);
      if (styleHash[hash]) {
        if (style2[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          var _style$parentNode;
          (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
        }
      } else {
        styleHash[hash] = true;
      }
    });
  }
  return new Entity(cssinjsInstanceId);
}
var StyleContext = /* @__PURE__ */ reactExports.createContext({
  hashPriority: "low",
  cache: createCache(),
  defaultCache: true
});
const StyleContext$1 = StyleContext;
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (var i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
var ThemeCache = /* @__PURE__ */ function() {
  function ThemeCache2() {
    _classCallCheck(this, ThemeCache2);
    _defineProperty(this, "cache", void 0);
    _defineProperty(this, "keys", void 0);
    _defineProperty(this, "cacheCallTimes", void 0);
    this.cache = /* @__PURE__ */ new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  _createClass(ThemeCache2, [{
    key: "size",
    value: function size() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function internalGet(derivativeOption) {
      var _cache2, _cache3;
      var updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var cache = {
        map: this.cache
      };
      derivativeOption.forEach(function(derivative2) {
        if (!cache) {
          cache = void 0;
        } else {
          var _cache;
          cache = (_cache = cache) === null || _cache === void 0 || (_cache = _cache.map) === null || _cache === void 0 ? void 0 : _cache.get(derivative2);
        }
      });
      if ((_cache2 = cache) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
        cache.value[1] = this.cacheCallTimes++;
      }
      return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
    }
  }, {
    key: "get",
    value: function get2(derivativeOption) {
      var _this$internalGet;
      return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
    }
  }, {
    key: "has",
    value: function has(derivativeOption) {
      return !!this.internalGet(derivativeOption);
    }
  }, {
    key: "set",
    value: function set2(derivativeOption, value) {
      var _this = this;
      if (!this.has(derivativeOption)) {
        if (this.size() + 1 > ThemeCache2.MAX_CACHE_SIZE + ThemeCache2.MAX_CACHE_OFFSET) {
          var _this$keys$reduce = this.keys.reduce(function(result, key) {
            var _result = _slicedToArray(result, 2), callTimes = _result[1];
            if (_this.internalGet(key)[1] < callTimes) {
              return [key, _this.internalGet(key)[1]];
            }
            return result;
          }, [this.keys[0], this.cacheCallTimes]), _this$keys$reduce2 = _slicedToArray(_this$keys$reduce, 1), targetKey = _this$keys$reduce2[0];
          this.delete(targetKey);
        }
        this.keys.push(derivativeOption);
      }
      var cache = this.cache;
      derivativeOption.forEach(function(derivative2, index2) {
        if (index2 === derivativeOption.length - 1) {
          cache.set(derivative2, {
            value: [value, _this.cacheCallTimes++]
          });
        } else {
          var cacheValue = cache.get(derivative2);
          if (!cacheValue) {
            cache.set(derivative2, {
              map: /* @__PURE__ */ new Map()
            });
          } else if (!cacheValue.map) {
            cacheValue.map = /* @__PURE__ */ new Map();
          }
          cache = cache.get(derivative2).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function deleteByPath(currentCache, derivatives) {
      var cache = currentCache.get(derivatives[0]);
      if (derivatives.length === 1) {
        var _cache$value;
        if (!cache.map) {
          currentCache.delete(derivatives[0]);
        } else {
          currentCache.set(derivatives[0], {
            map: cache.map
          });
        }
        return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
      }
      var result = this.deleteByPath(cache.map, derivatives.slice(1));
      if ((!cache.map || cache.map.size === 0) && !cache.value) {
        currentCache.delete(derivatives[0]);
      }
      return result;
    }
  }, {
    key: "delete",
    value: function _delete(derivativeOption) {
      if (this.has(derivativeOption)) {
        this.keys = this.keys.filter(function(item) {
          return !sameDerivativeOption(item, derivativeOption);
        });
        return this.deleteByPath(this.cache, derivativeOption);
      }
      return void 0;
    }
  }]);
  return ThemeCache2;
}();
_defineProperty(ThemeCache, "MAX_CACHE_SIZE", 20);
_defineProperty(ThemeCache, "MAX_CACHE_OFFSET", 5);
var uuid$3 = 0;
var Theme = /* @__PURE__ */ function() {
  function Theme2(derivatives) {
    _classCallCheck(this, Theme2);
    _defineProperty(this, "derivatives", void 0);
    _defineProperty(this, "id", void 0);
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid$3;
    if (derivatives.length === 0) {
      warning$3(derivatives.length > 0);
    }
    uuid$3 += 1;
  }
  _createClass(Theme2, [{
    key: "getDerivativeToken",
    value: function getDerivativeToken(token2) {
      return this.derivatives.reduce(function(result, derivative2) {
        return derivative2(token2, result);
      }, void 0);
    }
  }]);
  return Theme2;
}();
var cacheThemes = new ThemeCache();
function createTheme(derivatives) {
  var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  return cacheThemes.get(derivativeArr);
}
var resultCache = /* @__PURE__ */ new WeakMap();
var RESULT_VALUE = {};
function memoResult(callback, deps) {
  var current = resultCache;
  for (var i = 0; i < deps.length; i += 1) {
    var dep = deps[i];
    if (!current.has(dep)) {
      current.set(dep, /* @__PURE__ */ new WeakMap());
    }
    current = current.get(dep);
  }
  if (!current.has(RESULT_VALUE)) {
    current.set(RESULT_VALUE, callback());
  }
  return current.get(RESULT_VALUE);
}
var flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(token2) {
  var str = flattenTokenCache.get(token2) || "";
  if (!str) {
    Object.keys(token2).forEach(function(key) {
      var value = token2[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && _typeof(value) === "object") {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });
    flattenTokenCache.set(token2, str);
  }
  return str;
}
function token2key(token2, salt) {
  return murmur2("".concat(salt, "_").concat(flattenToken(token2)));
}
var randomSelectorKey = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, "");
var checkContent = "_bAmBoO_";
function supportSelector(styleStr, handleElement, supportCheck) {
  if (canUseDom()) {
    var _getComputedStyle$con, _ele$parentNode;
    updateCSS(styleStr, randomSelectorKey);
    var _ele = document.createElement("div");
    _ele.style.position = "fixed";
    _ele.style.left = "0";
    _ele.style.top = "0";
    handleElement === null || handleElement === void 0 || handleElement(_ele);
    document.body.appendChild(_ele);
    var support = supportCheck ? supportCheck(_ele) : (_getComputedStyle$con = getComputedStyle(_ele).content) === null || _getComputedStyle$con === void 0 ? void 0 : _getComputedStyle$con.includes(checkContent);
    (_ele$parentNode = _ele.parentNode) === null || _ele$parentNode === void 0 || _ele$parentNode.removeChild(_ele);
    removeCSS(randomSelectorKey);
    return support;
  }
  return false;
}
var canLayer = void 0;
function supportLayer() {
  if (canLayer === void 0) {
    canLayer = supportSelector("@layer ".concat(randomSelectorKey, " { .").concat(randomSelectorKey, ' { content: "').concat(checkContent, '"!important; } }'), function(ele) {
      ele.className = randomSelectorKey;
    });
  }
  return canLayer;
}
var isClientSide = canUseDom();
function unit$1(num) {
  if (typeof num === "number") {
    return "".concat(num, "px");
  }
  return num;
}
function toStyleStr(style2, tokenKey, styleId) {
  var _objectSpread2$1;
  var customizeAttrs = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var plain = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  if (plain) {
    return style2;
  }
  var attrs = _objectSpread2(_objectSpread2({}, customizeAttrs), {}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, ATTR_TOKEN, tokenKey), _defineProperty(_objectSpread2$1, ATTR_MARK, styleId), _objectSpread2$1));
  var attrStr = Object.keys(attrs).map(function(attr) {
    var val = attrs[attr];
    return val ? "".concat(attr, '="').concat(val, '"') : null;
  }).filter(function(v2) {
    return v2;
  }).join(" ");
  return "<style ".concat(attrStr, ">").concat(style2, "</style>");
}
var token2CSSVar = function token2CSSVar2(token2) {
  var prefix = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(prefix ? "".concat(prefix, "-") : "").concat(token2).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
};
var serializeCSSVar = function serializeCSSVar2(cssVars, hashId, options2) {
  if (!Object.keys(cssVars).length) {
    return "";
  }
  return ".".concat(hashId).concat(options2 !== null && options2 !== void 0 && options2.scope ? ".".concat(options2.scope) : "", "{").concat(Object.entries(cssVars).map(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
    return "".concat(key, ":").concat(value, ";");
  }).join(""), "}");
};
var transformToken = function transformToken2(token2, themeKey, config) {
  var cssVars = {};
  var result = {};
  Object.entries(token2).forEach(function(_ref3) {
    var _config$preserve, _config$ignore;
    var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], value = _ref4[1];
    if (config !== null && config !== void 0 && (_config$preserve = config.preserve) !== null && _config$preserve !== void 0 && _config$preserve[key]) {
      result[key] = value;
    } else if ((typeof value === "string" || typeof value === "number") && !(config !== null && config !== void 0 && (_config$ignore = config.ignore) !== null && _config$ignore !== void 0 && _config$ignore[key])) {
      var _config$unitless;
      var cssVar = token2CSSVar(key, config === null || config === void 0 ? void 0 : config.prefix);
      cssVars[cssVar] = typeof value === "number" && !(config !== null && config !== void 0 && (_config$unitless = config.unitless) !== null && _config$unitless !== void 0 && _config$unitless[key]) ? "".concat(value, "px") : String(value);
      result[key] = "var(".concat(cssVar, ")");
    }
  });
  return [result, serializeCSSVar(cssVars, themeKey, {
    scope: config === null || config === void 0 ? void 0 : config.scope
  })];
};
var useInternalLayoutEffect = canUseDom() ? reactExports.useLayoutEffect : reactExports.useEffect;
var useLayoutEffect$1 = function useLayoutEffect2(callback, deps) {
  var firstMountRef = reactExports.useRef(true);
  useInternalLayoutEffect(function() {
    return callback(firstMountRef.current);
  }, deps);
  useInternalLayoutEffect(function() {
    firstMountRef.current = false;
    return function() {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutUpdateEffect = function useLayoutUpdateEffect2(callback, deps) {
  useLayoutEffect$1(function(firstMount) {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};
var fullClone$2 = _objectSpread2({}, React$1);
var useInsertionEffect$1 = fullClone$2.useInsertionEffect;
var useInsertionEffectPolyfill = function useInsertionEffectPolyfill2(renderEffect, effect, deps) {
  reactExports.useMemo(renderEffect, deps);
  useLayoutEffect$1(function() {
    return effect(true);
  }, deps);
};
var useCompatibleInsertionEffect = useInsertionEffect$1 ? function(renderEffect, effect, deps) {
  return useInsertionEffect$1(function() {
    renderEffect();
    return effect();
  }, deps);
} : useInsertionEffectPolyfill;
const useCompatibleInsertionEffect$1 = useCompatibleInsertionEffect;
var fullClone$1 = _objectSpread2({}, React$1);
var useInsertionEffect = fullClone$1.useInsertionEffect;
var useCleanupRegister = function useCleanupRegister2(deps) {
  var effectCleanups = [];
  var cleanupFlag = false;
  function register2(fn) {
    if (cleanupFlag) {
      return;
    }
    effectCleanups.push(fn);
  }
  reactExports.useEffect(function() {
    cleanupFlag = false;
    return function() {
      cleanupFlag = true;
      if (effectCleanups.length) {
        effectCleanups.forEach(function(fn) {
          return fn();
        });
      }
    };
  }, deps);
  return register2;
};
var useRun = function useRun2() {
  return function(fn) {
    fn();
  };
};
var useEffectCleanupRegister = typeof useInsertionEffect !== "undefined" ? useCleanupRegister : useRun;
const useEffectCleanupRegister$1 = useEffectCleanupRegister;
function useGlobalCache(prefix, keyPath, cacheFn, onCacheRemove, onCacheEffect) {
  var _React$useContext = reactExports.useContext(StyleContext$1), globalCache = _React$useContext.cache;
  var fullPath = [prefix].concat(_toConsumableArray(keyPath));
  var deps = fullPath.join("_");
  var register2 = useEffectCleanupRegister$1([deps]);
  var buildCache = function buildCache2(updater) {
    globalCache.update(fullPath, function(prevCache) {
      var _ref = prevCache || [void 0, void 0], _ref2 = _slicedToArray(_ref, 2), _ref2$ = _ref2[0], times = _ref2$ === void 0 ? 0 : _ref2$, cache = _ref2[1];
      var tmpCache = cache;
      var mergedCache = tmpCache || cacheFn();
      var data = [times, mergedCache];
      return updater ? updater(data) : data;
    });
  };
  reactExports.useMemo(
    function() {
      buildCache();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [deps]
    /* eslint-enable */
  );
  var cacheEntity = globalCache.get(fullPath);
  var cacheContent = cacheEntity[1];
  useCompatibleInsertionEffect$1(function() {
    onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
  }, function(polyfill) {
    buildCache(function(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2), times = _ref4[0], cache = _ref4[1];
      if (polyfill && times === 0) {
        onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
      }
      return [times + 1, cache];
    });
    return function() {
      globalCache.update(fullPath, function(prevCache) {
        var _ref5 = prevCache || [], _ref6 = _slicedToArray(_ref5, 2), _ref6$ = _ref6[0], times = _ref6$ === void 0 ? 0 : _ref6$, cache = _ref6[1];
        var nextCount = times - 1;
        if (nextCount === 0) {
          register2(function() {
            if (polyfill || !globalCache.get(fullPath)) {
              onCacheRemove === null || onCacheRemove === void 0 || onCacheRemove(cache, false);
            }
          });
          return null;
        }
        return [times - 1, cache];
      });
    };
  }, [deps]);
  return cacheContent;
}
var EMPTY_OVERRIDE = {};
var hashPrefix = "css";
var tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
  if (typeof document !== "undefined") {
    var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, '="').concat(key, '"]'));
    styles.forEach(function(style2) {
      if (style2[CSS_IN_JS_INSTANCE] === instanceId) {
        var _style$parentNode;
        (_style$parentNode = style2.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style2);
      }
    });
  }
}
var TOKEN_THRESHOLD = 0;
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  var tokenKeyList = Array.from(tokenKeys.keys());
  var cleanableKeyList = tokenKeyList.filter(function(key) {
    var count = tokenKeys.get(key) || 0;
    return count <= 0;
  });
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach(function(key) {
      removeStyleTags(key, instanceId);
      tokenKeys.delete(key);
    });
  }
}
var getComputedToken$1 = function getComputedToken2(originToken, overrideToken, theme, format2) {
  var derivativeToken = theme.getDerivativeToken(originToken);
  var mergedDerivativeToken = _objectSpread2(_objectSpread2({}, derivativeToken), overrideToken);
  if (format2) {
    mergedDerivativeToken = format2(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
var TOKEN_PREFIX = "token";
function useCacheToken(theme, tokens) {
  var option2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _useContext = reactExports.useContext(StyleContext$1), instanceId = _useContext.cache.instanceId, container = _useContext.container;
  var _option$salt = option2.salt, salt = _option$salt === void 0 ? "" : _option$salt, _option$override = option2.override, override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override, formatToken2 = option2.formatToken, compute = option2.getComputedToken, cssVar = option2.cssVar;
  var mergedToken = memoResult(function() {
    return Object.assign.apply(Object, [{}].concat(_toConsumableArray(tokens)));
  }, tokens);
  var tokenStr = flattenToken(mergedToken);
  var overrideTokenStr = flattenToken(override);
  var cssVarStr = cssVar ? flattenToken(cssVar) : "";
  var cachedToken = useGlobalCache(TOKEN_PREFIX, [salt, theme.id, tokenStr, overrideTokenStr, cssVarStr], function() {
    var _cssVar$key;
    var mergedDerivativeToken = compute ? compute(mergedToken, override, theme) : getComputedToken$1(mergedToken, override, theme, formatToken2);
    var actualToken = _objectSpread2({}, mergedDerivativeToken);
    var cssVarsStr = "";
    if (!!cssVar) {
      var _transformToken = transformToken(mergedDerivativeToken, cssVar.key, {
        prefix: cssVar.prefix,
        ignore: cssVar.ignore,
        unitless: cssVar.unitless,
        preserve: cssVar.preserve
      });
      var _transformToken2 = _slicedToArray(_transformToken, 2);
      mergedDerivativeToken = _transformToken2[0];
      cssVarsStr = _transformToken2[1];
    }
    var tokenKey = token2key(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    actualToken._tokenKey = token2key(actualToken, salt);
    var themeKey = (_cssVar$key = cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) !== null && _cssVar$key !== void 0 ? _cssVar$key : tokenKey;
    mergedDerivativeToken._themeKey = themeKey;
    recordCleanToken(themeKey);
    var hashId = "".concat(hashPrefix, "-").concat(murmur2(tokenKey));
    mergedDerivativeToken._hashId = hashId;
    return [mergedDerivativeToken, hashId, actualToken, cssVarsStr, (cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) || ""];
  }, function(cache) {
    cleanTokenStyle(cache[0]._themeKey, instanceId);
  }, function(_ref) {
    var _ref2 = _slicedToArray(_ref, 4), token2 = _ref2[0], cssVarsStr = _ref2[3];
    if (cssVar && cssVarsStr) {
      var style2 = updateCSS(cssVarsStr, murmur2("css-variables-".concat(token2._themeKey)), {
        mark: ATTR_MARK,
        prepend: "queue",
        attachTo: container,
        priority: -999
      });
      style2[CSS_IN_JS_INSTANCE] = instanceId;
      style2.setAttribute(ATTR_TOKEN, token2._themeKey);
    }
  });
  return cachedToken;
}
var extract$2 = function extract2(cache, effectStyles, options2) {
  var _cache = _slicedToArray(cache, 5), realToken = _cache[2], styleStr = _cache[3], cssVarKey = _cache[4];
  var _ref3 = options2 || {}, plain = _ref3.plain;
  if (!styleStr) {
    return null;
  }
  var styleId = realToken._tokenKey;
  var order = -999;
  var sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(order)
  };
  var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
  return [order, styleId, styleText];
};
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
function trim(value) {
  return value.trim();
}
function replace(value, pattern4, replacement) {
  return value.replace(pattern4, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index2) {
  return value.charCodeAt(index2) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array4) {
  return array4.push(value), value;
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root2, parent, type4, props, children, length2, siblings) {
  return { value, root: root2, parent, type: type4, props, children, line, column, length: length2, return: "", siblings };
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type4) {
  switch (type4) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type4) {
  return trim(slice(position - 1, delimiter(type4 === 91 ? type4 + 2 : type4 === 40 ? type4 + 1 : type4)));
}
function whitespace$1(type4) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type4) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type4) {
  while (next())
    switch (character) {
      case type4:
        return position;
      case 34:
      case 39:
        if (type4 !== 34 && type4 !== 39)
          delimiter(character);
        break;
      case 40:
        if (type4 === 41)
          delimiter(type4);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type4, index2) {
  while (next())
    if (type4 + character === 47 + 10)
      break;
    else if (type4 + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index2, position - 1) + "*" + from(type4 === 47 ? type4 : next());
}
function identifier(index2) {
  while (!token(peek()))
    next();
  return slice(index2, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root2, parent, rule, rules2, rulesets, pseudo, points, declarations) {
  var index2 = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type4 = "";
  var props = rules2;
  var children = rulesets;
  var reference = rule;
  var characters2 = type4;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace$1(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root2, parent, declarations), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1)
              characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root2, parent, index2, offset, rules2, points, type4, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules2, points, type4, rules2, props = [], length2, children), children), rules2, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index2 = offset = property = 0, variable = ampersand = 1, type4 = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type4 = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root2, parent, index2, offset, rules2, points, type4, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules2 : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k2 = 0; i < index2; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props[k2++] = z;
  return node(value, root2, parent, offset === 0 ? RULESET : type4, props, children, length2, siblings);
}
function comment(value, root2, parent, siblings) {
  return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root2, parent, length2, siblings) {
  return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}
function serialize(children, callback) {
  var output = "";
  for (var i = 0; i < children.length; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify$1(element, index2, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length)
        break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      if (!strlen(element.value = element.props.join(",")))
        return "";
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
var ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
var CSS_FILE_STYLE = "_FILE_STYLE__";
var cachePathMap;
var fromCSSFile = true;
function prepare() {
  if (!cachePathMap) {
    cachePathMap = {};
    if (canUseDom()) {
      var div = document.createElement("div");
      div.className = ATTR_CACHE_MAP;
      div.style.position = "fixed";
      div.style.visibility = "hidden";
      div.style.top = "-9999px";
      document.body.appendChild(div);
      var content = getComputedStyle(div).content || "";
      content = content.replace(/^"/, "").replace(/"$/, "");
      content.split(";").forEach(function(item) {
        var _item$split = item.split(":"), _item$split2 = _slicedToArray(_item$split, 2), path = _item$split2[0], hash = _item$split2[1];
        cachePathMap[path] = hash;
      });
      var inlineMapStyle = document.querySelector("style[".concat(ATTR_CACHE_MAP, "]"));
      if (inlineMapStyle) {
        var _inlineMapStyle$paren;
        fromCSSFile = false;
        (_inlineMapStyle$paren = inlineMapStyle.parentNode) === null || _inlineMapStyle$paren === void 0 || _inlineMapStyle$paren.removeChild(inlineMapStyle);
      }
      document.body.removeChild(div);
    }
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  var hash = cachePathMap[path];
  var styleStr = null;
  if (hash && canUseDom()) {
    if (fromCSSFile) {
      styleStr = CSS_FILE_STYLE;
    } else {
      var _style = document.querySelector("style[".concat(ATTR_MARK, '="').concat(cachePathMap[path], '"]'));
      if (_style) {
        styleStr = _style.innerHTML;
      } else {
        delete cachePathMap[path];
      }
    }
  }
  return [styleStr, hash];
}
var SKIP_CHECK = "_skip_check_";
var MULTI_VALUE = "_multi_value_";
function normalizeStyle(styleStr) {
  var serialized = serialize(compile(styleStr), stringify$1);
  return serialized.replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(value) {
  return _typeof(value) === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  var hashClassName = ".".concat(hashId);
  var hashSelector = hashPriority === "low" ? ":where(".concat(hashClassName, ")") : hashClassName;
  var keys2 = key.split(",").map(function(k2) {
    var _firstPath$match;
    var fullPath = k2.trim().split(/\s+/);
    var firstPath = fullPath[0] || "";
    var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || "";
    firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
    return [firstPath].concat(_toConsumableArray(fullPath.slice(1))).join(" ");
  });
  return keys2.join(",");
}
var parseStyle = function parseStyle2(interpolation) {
  var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: true,
    parentSelectors: []
  }, root2 = _ref.root, injectHash = _ref.injectHash, parentSelectors = _ref.parentSelectors;
  var hashId = config.hashId, layer = config.layer;
  config.path;
  var hashPriority = config.hashPriority, _config$transformers = config.transformers, transformers = _config$transformers === void 0 ? [] : _config$transformers;
  config.linters;
  var styleStr = "";
  var effectStyle = {};
  function parseKeyframes(keyframes) {
    var animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      var _parseStyle = parseStyle2(keyframes.style, config, {
        root: false,
        parentSelectors
      }), _parseStyle2 = _slicedToArray(_parseStyle, 1), _parsedStr = _parseStyle2[0];
      effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
    }
  }
  function flattenList(list) {
    var fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    list.forEach(function(item) {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach(function(originStyle) {
    var style2 = typeof originStyle === "string" && !root2 ? {} : originStyle;
    if (typeof style2 === "string") {
      styleStr += "".concat(style2, "\n");
    } else if (style2._keyframe) {
      parseKeyframes(style2);
    } else {
      var mergedStyle = transformers.reduce(function(prev2, trans) {
        var _trans$visit;
        return (trans === null || trans === void 0 || (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev2)) || prev2;
      }, style2);
      Object.keys(mergedStyle).forEach(function(key) {
        var value = mergedStyle[key];
        if (_typeof(value) === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
          var subInjectHash = false;
          var mergedKey = key.trim();
          var nextRoot = false;
          if ((root2 || injectHash) && hashId) {
            if (mergedKey.startsWith("@")) {
              subInjectHash = true;
            } else {
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root2 && !hashId && (mergedKey === "&" || mergedKey === "")) {
            mergedKey = "";
            nextRoot = true;
          }
          var _parseStyle3 = parseStyle2(value, config, {
            root: nextRoot,
            injectHash: subInjectHash,
            parentSelectors: [].concat(_toConsumableArray(parentSelectors), [mergedKey])
          }), _parseStyle4 = _slicedToArray(_parseStyle3, 2), _parsedStr2 = _parseStyle4[0], childEffectStyle = _parseStyle4[1];
          effectStyle = _objectSpread2(_objectSpread2({}, effectStyle), childEffectStyle);
          styleStr += "".concat(mergedKey).concat(_parsedStr2);
        } else {
          let appendStyle = function(cssKey, cssValue) {
            var styleName = cssKey.replace(/[A-Z]/g, function(match2) {
              return "-".concat(match2.toLowerCase());
            });
            var formatValue = cssValue;
            if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
              formatValue = "".concat(formatValue, "px");
            }
            if (cssKey === "animationName" && cssValue !== null && cssValue !== void 0 && cssValue._keyframe) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += "".concat(styleName, ":").concat(formatValue, ";");
          };
          var _value;
          var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;
          if (_typeof(value) === "object" && value !== null && value !== void 0 && value[MULTI_VALUE] && Array.isArray(actualValue)) {
            actualValue.forEach(function(item) {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root2) {
    styleStr = "{".concat(styleStr, "}");
  } else if (layer && supportLayer()) {
    var layerCells = layer.split(",");
    var layerName = layerCells[layerCells.length - 1].trim();
    styleStr = "@layer ".concat(layerName, " {").concat(styleStr, "}");
    if (layerCells.length > 1) {
      styleStr = "@layer ".concat(layer, "{%%%:%}").concat(styleStr);
    }
  }
  return [styleStr, effectStyle];
};
function uniqueHash(path, styleStr) {
  return murmur2("".concat(path.join("%")).concat(styleStr));
}
function Empty$3() {
  return null;
}
var STYLE_PREFIX = "style";
function useStyleRegister(info, styleFn) {
  var token2 = info.token, path = info.path, hashId = info.hashId, layer = info.layer, nonce = info.nonce, clientOnly = info.clientOnly, _info$order = info.order, order = _info$order === void 0 ? 0 : _info$order;
  var _React$useContext = reactExports.useContext(StyleContext$1), autoClear = _React$useContext.autoClear;
  _React$useContext.mock;
  var defaultCache = _React$useContext.defaultCache, hashPriority = _React$useContext.hashPriority, container = _React$useContext.container, ssrInline = _React$useContext.ssrInline, transformers = _React$useContext.transformers, linters = _React$useContext.linters, cache = _React$useContext.cache;
  var tokenKey = token2._tokenKey;
  var fullPath = [tokenKey].concat(_toConsumableArray(path));
  var isMergedClientSide = isClientSide;
  var _useGlobalCache = useGlobalCache(
    STYLE_PREFIX,
    fullPath,
    // Create cache if needed
    function() {
      var cachePath = fullPath.join("|");
      if (existPath(cachePath)) {
        var _getStyleAndHash = getStyleAndHash(cachePath), _getStyleAndHash2 = _slicedToArray(_getStyleAndHash, 2), inlineCacheStyleStr = _getStyleAndHash2[0], styleHash = _getStyleAndHash2[1];
        if (inlineCacheStyleStr) {
          return [inlineCacheStyleStr, tokenKey, styleHash, {}, clientOnly, order];
        }
      }
      var styleObj = styleFn();
      var _parseStyle5 = parseStyle(styleObj, {
        hashId,
        hashPriority,
        layer,
        path: path.join("-"),
        transformers,
        linters
      }), _parseStyle6 = _slicedToArray(_parseStyle5, 2), parsedStyle = _parseStyle6[0], effectStyle = _parseStyle6[1];
      var styleStr = normalizeStyle(parsedStyle);
      var styleId = uniqueHash(fullPath, styleStr);
      return [styleStr, tokenKey, styleId, effectStyle, clientOnly, order];
    },
    // Remove cache if no need
    function(_ref2, fromHMR) {
      var _ref3 = _slicedToArray(_ref2, 3), styleId = _ref3[2];
      if ((fromHMR || autoClear) && isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK
        });
      }
    },
    // Effect: Inject style here
    function(_ref4) {
      var _ref5 = _slicedToArray(_ref4, 4), styleStr = _ref5[0];
      _ref5[1];
      var styleId = _ref5[2], effectStyle = _ref5[3];
      if (isMergedClientSide && styleStr !== CSS_FILE_STYLE) {
        var mergedCSSConfig = {
          mark: ATTR_MARK,
          prepend: "queue",
          attachTo: container,
          priority: order
        };
        var nonceStr = typeof nonce === "function" ? nonce() : nonce;
        if (nonceStr) {
          mergedCSSConfig.csp = {
            nonce: nonceStr
          };
        }
        var style2 = updateCSS(styleStr, styleId, mergedCSSConfig);
        style2[CSS_IN_JS_INSTANCE] = cache.instanceId;
        style2.setAttribute(ATTR_TOKEN, tokenKey);
        Object.keys(effectStyle).forEach(function(effectKey) {
          updateCSS(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
        });
      }
    }
  ), _useGlobalCache2 = _slicedToArray(_useGlobalCache, 3), cachedStyleStr = _useGlobalCache2[0], cachedTokenKey = _useGlobalCache2[1], cachedStyleId = _useGlobalCache2[2];
  return function(node2) {
    var styleNode;
    if (!ssrInline || isMergedClientSide || !defaultCache) {
      styleNode = /* @__PURE__ */ reactExports.createElement(Empty$3, null);
    } else {
      var _ref6;
      styleNode = /* @__PURE__ */ reactExports.createElement("style", _extends$1({}, (_ref6 = {}, _defineProperty(_ref6, ATTR_TOKEN, cachedTokenKey), _defineProperty(_ref6, ATTR_MARK, cachedStyleId), _ref6), {
        dangerouslySetInnerHTML: {
          __html: cachedStyleStr
        }
      }));
    }
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, styleNode, node2);
  };
}
var extract$1 = function extract22(cache, effectStyles, options2) {
  var _cache = _slicedToArray(cache, 6), styleStr = _cache[0], tokenKey = _cache[1], styleId = _cache[2], effectStyle = _cache[3], clientOnly = _cache[4], order = _cache[5];
  var _ref7 = options2 || {}, plain = _ref7.plain;
  if (clientOnly) {
    return null;
  }
  var keyStyleText = styleStr;
  var sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(order)
  };
  keyStyleText = toStyleStr(styleStr, tokenKey, styleId, sharedAttrs, plain);
  if (effectStyle) {
    Object.keys(effectStyle).forEach(function(effectKey) {
      if (!effectStyles[effectKey]) {
        effectStyles[effectKey] = true;
        var effectStyleStr = normalizeStyle(effectStyle[effectKey]);
        keyStyleText += toStyleStr(effectStyleStr, tokenKey, "_effect-".concat(effectKey), sharedAttrs, plain);
      }
    });
  }
  return [order, styleId, keyStyleText];
};
var CSS_VAR_PREFIX = "cssVar";
var useCSSVarRegister = function useCSSVarRegister2(config, fn) {
  var key = config.key, prefix = config.prefix, unitless2 = config.unitless, ignore2 = config.ignore, token2 = config.token, _config$scope = config.scope, scope = _config$scope === void 0 ? "" : _config$scope;
  var _useContext = reactExports.useContext(StyleContext$1), instanceId = _useContext.cache.instanceId, container = _useContext.container;
  var tokenKey = token2._tokenKey;
  var stylePath = [].concat(_toConsumableArray(config.path), [key, scope, tokenKey]);
  var cache = useGlobalCache(CSS_VAR_PREFIX, stylePath, function() {
    var originToken = fn();
    var _transformToken = transformToken(originToken, key, {
      prefix,
      unitless: unitless2,
      ignore: ignore2,
      scope
    }), _transformToken2 = _slicedToArray(_transformToken, 2), mergedToken = _transformToken2[0], cssVarsStr = _transformToken2[1];
    var styleId = uniqueHash(stylePath, cssVarsStr);
    return [mergedToken, cssVarsStr, styleId, key];
  }, function(_ref) {
    var _ref2 = _slicedToArray(_ref, 3), styleId = _ref2[2];
    if (isClientSide) {
      removeCSS(styleId, {
        mark: ATTR_MARK
      });
    }
  }, function(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 3), cssVarsStr = _ref4[1], styleId = _ref4[2];
    if (!cssVarsStr) {
      return;
    }
    var style2 = updateCSS(cssVarsStr, styleId, {
      mark: ATTR_MARK,
      prepend: "queue",
      attachTo: container,
      priority: -999
    });
    style2[CSS_IN_JS_INSTANCE] = instanceId;
    style2.setAttribute(ATTR_TOKEN, key);
  });
  return cache;
};
var extract = function extract3(cache, effectStyles, options2) {
  var _cache = _slicedToArray(cache, 4), styleStr = _cache[1], styleId = _cache[2], cssVarKey = _cache[3];
  var _ref5 = options2 || {}, plain = _ref5.plain;
  if (!styleStr) {
    return null;
  }
  var order = -999;
  var sharedAttrs = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(order)
  };
  var styleText = toStyleStr(styleStr, cssVarKey, styleId, sharedAttrs, plain);
  return [order, styleId, styleText];
};
var _ExtractStyleFns;
_ExtractStyleFns = {}, _defineProperty(_ExtractStyleFns, STYLE_PREFIX, extract$1), _defineProperty(_ExtractStyleFns, TOKEN_PREFIX, extract$2), _defineProperty(_ExtractStyleFns, CSS_VAR_PREFIX, extract), _ExtractStyleFns;
var Keyframe = /* @__PURE__ */ function() {
  function Keyframe2(name, style2) {
    _classCallCheck(this, Keyframe2);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "style", void 0);
    _defineProperty(this, "_keyframe", true);
    this.name = name;
    this.style = style2;
  }
  _createClass(Keyframe2, [{
    key: "getName",
    value: function getName() {
      var hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
    }
  }]);
  return Keyframe2;
}();
function noSplit(list) {
  list.notSplit = true;
  return list;
}
({
  // Inset
  inset: ["top", "right", "bottom", "left"],
  insetBlock: ["top", "bottom"],
  insetBlockStart: ["top"],
  insetBlockEnd: ["bottom"],
  insetInline: ["left", "right"],
  insetInlineStart: ["left"],
  insetInlineEnd: ["right"],
  // Margin
  marginBlock: ["marginTop", "marginBottom"],
  marginBlockStart: ["marginTop"],
  marginBlockEnd: ["marginBottom"],
  marginInline: ["marginLeft", "marginRight"],
  marginInlineStart: ["marginLeft"],
  marginInlineEnd: ["marginRight"],
  // Padding
  paddingBlock: ["paddingTop", "paddingBottom"],
  paddingBlockStart: ["paddingTop"],
  paddingBlockEnd: ["paddingBottom"],
  paddingInline: ["paddingLeft", "paddingRight"],
  paddingInlineStart: ["paddingLeft"],
  paddingInlineEnd: ["paddingRight"],
  // Border
  borderBlock: noSplit(["borderTop", "borderBottom"]),
  borderBlockStart: noSplit(["borderTop"]),
  borderBlockEnd: noSplit(["borderBottom"]),
  borderInline: noSplit(["borderLeft", "borderRight"]),
  borderInlineStart: noSplit(["borderLeft"]),
  borderInlineEnd: noSplit(["borderRight"]),
  // Border width
  borderBlockWidth: ["borderTopWidth", "borderBottomWidth"],
  borderBlockStartWidth: ["borderTopWidth"],
  borderBlockEndWidth: ["borderBottomWidth"],
  borderInlineWidth: ["borderLeftWidth", "borderRightWidth"],
  borderInlineStartWidth: ["borderLeftWidth"],
  borderInlineEndWidth: ["borderRightWidth"],
  // Border style
  borderBlockStyle: ["borderTopStyle", "borderBottomStyle"],
  borderBlockStartStyle: ["borderTopStyle"],
  borderBlockEndStyle: ["borderBottomStyle"],
  borderInlineStyle: ["borderLeftStyle", "borderRightStyle"],
  borderInlineStartStyle: ["borderLeftStyle"],
  borderInlineEndStyle: ["borderRightStyle"],
  // Border color
  borderBlockColor: ["borderTopColor", "borderBottomColor"],
  borderBlockStartColor: ["borderTopColor"],
  borderBlockEndColor: ["borderBottomColor"],
  borderInlineColor: ["borderLeftColor", "borderRightColor"],
  borderInlineStartColor: ["borderLeftColor"],
  borderInlineEndColor: ["borderRightColor"],
  // Border radius
  borderStartStartRadius: ["borderTopLeftRadius"],
  borderStartEndRadius: ["borderTopRightRadius"],
  borderEndStartRadius: ["borderBottomLeftRadius"],
  borderEndEndRadius: ["borderBottomRightRadius"]
});
var IconContext$1 = /* @__PURE__ */ reactExports.createContext({});
const Context$3 = IconContext$1;
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function get(entity, path) {
  var current = entity;
  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === void 0) {
      return void 0;
    }
    current = current[path[i]];
  }
  return current;
}
function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  var _paths = _toArray(paths), path = _paths[0], restPath = _paths.slice(1);
  var clone;
  if (!entity && typeof path === "number") {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = _toConsumableArray(entity);
  } else {
    clone = _objectSpread2({}, entity);
  }
  if (removeIfUndefined && value === void 0 && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (paths.length && removeIfUndefined && value === void 0 && !get(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
function isObject(obj) {
  return _typeof(obj) === "object" && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function createEmpty(source) {
  return Array.isArray(source) ? [] : {};
}
var keys = typeof Reflect === "undefined" ? Object.keys : Reflect.ownKeys;
function merge$1() {
  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }
  var clone = createEmpty(sources[0]);
  sources.forEach(function(src) {
    function internalMerge(path, parentLoopSet) {
      var loopSet = new Set(parentLoopSet);
      var value = get(src, path);
      var isArr = Array.isArray(value);
      if (isArr || isObject(value)) {
        if (!loopSet.has(value)) {
          loopSet.add(value);
          var originValue = get(clone, path);
          if (isArr) {
            clone = set(clone, path, []);
          } else if (!originValue || _typeof(originValue) !== "object") {
            clone = set(clone, path, createEmpty(value));
          }
          keys(value).forEach(function(key) {
            internalMerge([].concat(_toConsumableArray(path), [key]), loopSet);
          });
        }
      } else {
        clone = set(clone, path, value);
      }
    }
    internalMerge([]);
  });
  return clone;
}
function noop$1() {
}
const WarningContext = /* @__PURE__ */ reactExports.createContext({});
const devUseWarning = () => {
  const noopWarning = () => {
  };
  noopWarning.deprecated = noop$1;
  return noopWarning;
};
const ValidateMessagesContext = /* @__PURE__ */ reactExports.createContext(void 0);
var locale$3 = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
};
var locale$2 = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: true,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const locale$1 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const TimePicker = locale$1;
const locale = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, locale$2),
  timePickerLocale: Object.assign({}, TimePicker)
};
const enUS$1 = locale;
const typeTemplate$1 = "${label} is not a valid ${type}";
const localeValues = {
  locale: "en",
  Pagination: locale$3,
  DatePicker: enUS$1,
  TimePicker,
  Calendar: enUS$1,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate$1,
        method: typeTemplate$1,
        array: typeTemplate$1,
        object: typeTemplate$1,
        number: typeTemplate$1,
        date: typeTemplate$1,
        boolean: typeTemplate$1,
        integer: typeTemplate$1,
        float: typeTemplate$1,
        regexp: typeTemplate$1,
        email: typeTemplate$1,
        url: typeTemplate$1,
        hex: typeTemplate$1
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
};
const defaultLocale = localeValues;
Object.assign({}, defaultLocale.Modal);
let localeList = [];
const generateLocale = () => localeList.reduce((merged, locale2) => Object.assign(Object.assign({}, merged), locale2), defaultLocale.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    const cloneLocale = Object.assign({}, newLocale);
    localeList.push(cloneLocale);
    generateLocale();
    return () => {
      localeList = localeList.filter((locale2) => locale2 !== cloneLocale);
      generateLocale();
    };
  }
  Object.assign({}, defaultLocale.Modal);
}
const LocaleContext = /* @__PURE__ */ reactExports.createContext(void 0);
const LocaleContext$1 = LocaleContext;
const useLocale = (componentName, defaultLocale$1) => {
  const fullLocale = reactExports.useContext(LocaleContext$1);
  const getLocale = reactExports.useMemo(() => {
    var _a;
    const locale2 = defaultLocale$1 || defaultLocale[componentName];
    const localeFromContext = (_a = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, typeof locale2 === "function" ? locale2() : locale2), localeFromContext || {});
  }, [componentName, defaultLocale$1, fullLocale]);
  const getLocaleCode = reactExports.useMemo(() => {
    const localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
    if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) {
      return defaultLocale.locale;
    }
    return localeCode;
  }, [fullLocale]);
  return [getLocale, getLocaleCode];
};
const useLocale$1 = useLocale;
const ANT_MARK = "internalMark";
const LocaleProvider = (props) => {
  const {
    locale: locale2 = {},
    children,
    _ANT_MARK__
  } = props;
  reactExports.useEffect(() => {
    const clearLocale = changeConfirmLocale(locale2 && locale2.Modal);
    return clearLocale;
  }, [locale2]);
  const getMemoizedContextValue = reactExports.useMemo(() => Object.assign(Object.assign({}, locale2), {
    exist: true
  }), [locale2]);
  return /* @__PURE__ */ reactExports.createElement(LocaleContext$1.Provider, {
    value: getMemoizedContextValue
  }, children);
};
const LocaleProvider$1 = LocaleProvider;
function bound01(n2, max) {
  if (isOnePointZero(n2)) {
    n2 = "100%";
  }
  var isPercent = isPercentage(n2);
  n2 = max === 360 ? n2 : Math.min(max, Math.max(0, parseFloat(n2)));
  if (isPercent) {
    n2 = parseInt(String(n2 * max), 10) / 100;
  }
  if (Math.abs(n2 - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n2 = (n2 < 0 ? n2 % max + max : n2 % max) / parseFloat(String(max));
  } else {
    n2 = n2 % max / parseFloat(String(max));
  }
  return n2;
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function isOnePointZero(n2) {
  return typeof n2 === "string" && n2.indexOf(".") !== -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    return "".concat(Number(n2) * 100, "%");
  }
  return n2;
}
function pad2(c2) {
  return c2.length === 1 ? "0" + c2 : String(c2);
}
function rgbToRgb(r, g2, b2) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r, g2, b2) {
  r = bound01(r, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r, g2, b2);
  var min = Math.min(r, g2, b2);
  var h2 = 0;
  var s = 0;
  var l2 = (max + min) / 2;
  if (max === min) {
    s = 0;
    h2 = 0;
  } else {
    var d2 = max - min;
    s = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
    switch (max) {
      case r:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r) / d2 + 2;
        break;
      case b2:
        h2 = (r - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, l: l2 };
}
function hue2rgb(p2, q2, t2) {
  if (t2 < 0) {
    t2 += 1;
  }
  if (t2 > 1) {
    t2 -= 1;
  }
  if (t2 < 1 / 6) {
    return p2 + (q2 - p2) * (6 * t2);
  }
  if (t2 < 1 / 2) {
    return q2;
  }
  if (t2 < 2 / 3) {
    return p2 + (q2 - p2) * (2 / 3 - t2) * 6;
  }
  return p2;
}
function hslToRgb(h2, s, l2) {
  var r;
  var g2;
  var b2;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l2 = bound01(l2, 100);
  if (s === 0) {
    g2 = l2;
    b2 = l2;
    r = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
    var p2 = 2 * l2 - q2;
    r = hue2rgb(p2, q2, h2 + 1 / 3);
    g2 = hue2rgb(p2, q2, h2);
    b2 = hue2rgb(p2, q2, h2 - 1 / 3);
  }
  return { r: r * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHsv(r, g2, b2) {
  r = bound01(r, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max = Math.max(r, g2, b2);
  var min = Math.min(r, g2, b2);
  var h2 = 0;
  var v2 = max;
  var d2 = max - min;
  var s = max === 0 ? 0 : d2 / max;
  if (max === min) {
    h2 = 0;
  } else {
    switch (max) {
      case r:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r) / d2 + 2;
        break;
      case b2:
        h2 = (r - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return { h: h2, s, v: v2 };
}
function hsvToRgb(h2, s, v2) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v2 = bound01(v2, 100);
  var i = Math.floor(h2);
  var f2 = h2 - i;
  var p2 = v2 * (1 - s);
  var q2 = v2 * (1 - f2 * s);
  var t2 = v2 * (1 - (1 - f2) * s);
  var mod = i % 6;
  var r = [v2, q2, p2, p2, t2, v2][mod];
  var g2 = [t2, v2, v2, q2, p2, p2][mod];
  var b2 = [p2, p2, t2, v2, v2, q2][mod];
  return { r: r * 255, g: g2 * 255, b: b2 * 255 };
}
function rgbToHex(r, g2, b2, allow3Char) {
  var hex2 = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16))
  ];
  if (allow3Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0);
  }
  return hex2.join("");
}
function rgbaToHex(r, g2, b2, a, allow4Char) {
  var hex2 = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g2).toString(16)),
    pad2(Math.round(b2).toString(16)),
    pad2(convertDecimalToHex(a))
  ];
  if (allow4Char && hex2[0].startsWith(hex2[0].charAt(1)) && hex2[1].startsWith(hex2[1].charAt(1)) && hex2[2].startsWith(hex2[2].charAt(1)) && hex2[3].startsWith(hex2[3].charAt(1))) {
    return hex2[0].charAt(0) + hex2[1].charAt(0) + hex2[2].charAt(0) + hex2[3].charAt(0);
  }
  return hex2.join("");
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 65280) >> 8,
    b: color & 255
  };
}
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v2 = null;
  var l2 = null;
  var ok2 = false;
  var format2 = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok2 = true;
      format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v2);
      ok2 = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l2);
      ok2 = true;
      format2 = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok: ok2,
    format: color.format || format2,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match2 = matchers.rgb.exec(color);
  if (match2) {
    return { r: match2[1], g: match2[2], b: match2[3] };
  }
  match2 = matchers.rgba.exec(color);
  if (match2) {
    return { r: match2[1], g: match2[2], b: match2[3], a: match2[4] };
  }
  match2 = matchers.hsl.exec(color);
  if (match2) {
    return { h: match2[1], s: match2[2], l: match2[3] };
  }
  match2 = matchers.hsla.exec(color);
  if (match2) {
    return { h: match2[1], s: match2[2], l: match2[3], a: match2[4] };
  }
  match2 = matchers.hsv.exec(color);
  if (match2) {
    return { h: match2[1], s: match2[2], v: match2[3] };
  }
  match2 = matchers.hsva.exec(color);
  if (match2) {
    return { h: match2[1], s: match2[2], v: match2[3], a: match2[4] };
  }
  match2 = matchers.hex8.exec(color);
  if (match2) {
    return {
      r: parseIntFromHex(match2[1]),
      g: parseIntFromHex(match2[2]),
      b: parseIntFromHex(match2[3]),
      a: convertHexToDecimal(match2[4]),
      format: named ? "name" : "hex8"
    };
  }
  match2 = matchers.hex6.exec(color);
  if (match2) {
    return {
      r: parseIntFromHex(match2[1]),
      g: parseIntFromHex(match2[2]),
      b: parseIntFromHex(match2[3]),
      format: named ? "name" : "hex"
    };
  }
  match2 = matchers.hex4.exec(color);
  if (match2) {
    return {
      r: parseIntFromHex(match2[1] + match2[1]),
      g: parseIntFromHex(match2[2] + match2[2]),
      b: parseIntFromHex(match2[3] + match2[3]),
      a: convertHexToDecimal(match2[4] + match2[4]),
      format: named ? "name" : "hex8"
    };
  }
  match2 = matchers.hex3.exec(color);
  if (match2) {
    return {
      r: parseIntFromHex(match2[1] + match2[1]),
      g: parseIntFromHex(match2[2] + match2[2]),
      b: parseIntFromHex(match2[3] + match2[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
var TinyColor = (
  /** @class */
  function() {
    function TinyColor2(color, opts) {
      if (color === void 0) {
        color = "";
      }
      if (opts === void 0) {
        opts = {};
      }
      var _a;
      if (color instanceof TinyColor2) {
        return color;
      }
      if (typeof color === "number") {
        color = numberInputToObject(color);
      }
      this.originalInput = color;
      var rgb = inputToRGB(color);
      this.originalInput = color;
      this.r = rgb.r;
      this.g = rgb.g;
      this.b = rgb.b;
      this.a = rgb.a;
      this.roundA = Math.round(100 * this.a) / 100;
      this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
      this.gradientType = opts.gradientType;
      if (this.r < 1) {
        this.r = Math.round(this.r);
      }
      if (this.g < 1) {
        this.g = Math.round(this.g);
      }
      if (this.b < 1) {
        this.b = Math.round(this.b);
      }
      this.isValid = rgb.ok;
    }
    TinyColor2.prototype.isDark = function() {
      return this.getBrightness() < 128;
    };
    TinyColor2.prototype.isLight = function() {
      return !this.isDark();
    };
    TinyColor2.prototype.getBrightness = function() {
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
    };
    TinyColor2.prototype.getLuminance = function() {
      var rgb = this.toRgb();
      var R;
      var G;
      var B;
      var RsRGB = rgb.r / 255;
      var GsRGB = rgb.g / 255;
      var BsRGB = rgb.b / 255;
      if (RsRGB <= 0.03928) {
        R = RsRGB / 12.92;
      } else {
        R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      }
      if (GsRGB <= 0.03928) {
        G = GsRGB / 12.92;
      } else {
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      }
      if (BsRGB <= 0.03928) {
        B = BsRGB / 12.92;
      } else {
        B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      }
      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    TinyColor2.prototype.getAlpha = function() {
      return this.a;
    };
    TinyColor2.prototype.setAlpha = function(alpha) {
      this.a = boundAlpha(alpha);
      this.roundA = Math.round(100 * this.a) / 100;
      return this;
    };
    TinyColor2.prototype.isMonochrome = function() {
      var s = this.toHsl().s;
      return s === 0;
    };
    TinyColor2.prototype.toHsv = function() {
      var hsv = rgbToHsv(this.r, this.g, this.b);
      return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    TinyColor2.prototype.toHsvString = function() {
      var hsv = rgbToHsv(this.r, this.g, this.b);
      var h2 = Math.round(hsv.h * 360);
      var s = Math.round(hsv.s * 100);
      var v2 = Math.round(hsv.v * 100);
      return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toHsl = function() {
      var hsl = rgbToHsl(this.r, this.g, this.b);
      return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    TinyColor2.prototype.toHslString = function() {
      var hsl = rgbToHsl(this.r, this.g, this.b);
      var h2 = Math.round(hsl.h * 360);
      var s = Math.round(hsl.s * 100);
      var l2 = Math.round(hsl.l * 100);
      return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toHex = function(allow3Char) {
      if (allow3Char === void 0) {
        allow3Char = false;
      }
      return rgbToHex(this.r, this.g, this.b, allow3Char);
    };
    TinyColor2.prototype.toHexString = function(allow3Char) {
      if (allow3Char === void 0) {
        allow3Char = false;
      }
      return "#" + this.toHex(allow3Char);
    };
    TinyColor2.prototype.toHex8 = function(allow4Char) {
      if (allow4Char === void 0) {
        allow4Char = false;
      }
      return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    };
    TinyColor2.prototype.toHex8String = function(allow4Char) {
      if (allow4Char === void 0) {
        allow4Char = false;
      }
      return "#" + this.toHex8(allow4Char);
    };
    TinyColor2.prototype.toHexShortString = function(allowShortChar) {
      if (allowShortChar === void 0) {
        allowShortChar = false;
      }
      return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
    };
    TinyColor2.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    };
    TinyColor2.prototype.toRgbString = function() {
      var r = Math.round(this.r);
      var g2 = Math.round(this.g);
      var b2 = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(r, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toPercentageRgb = function() {
      var fmt = function(x) {
        return "".concat(Math.round(bound01(x, 255) * 100), "%");
      };
      return {
        r: fmt(this.r),
        g: fmt(this.g),
        b: fmt(this.b),
        a: this.a
      };
    };
    TinyColor2.prototype.toPercentageRgbString = function() {
      var rnd = function(x) {
        return Math.round(bound01(x, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toName = function() {
      if (this.a === 0) {
        return "transparent";
      }
      if (this.a < 1) {
        return false;
      }
      var hex2 = "#" + rgbToHex(this.r, this.g, this.b, false);
      for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (hex2 === value) {
          return key;
        }
      }
      return false;
    };
    TinyColor2.prototype.toString = function(format2) {
      var formatSet = Boolean(format2);
      format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
      var formattedString = false;
      var hasAlpha = this.a < 1 && this.a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
      if (needsAlphaFormat) {
        if (format2 === "name" && this.a === 0) {
          return this.toName();
        }
        return this.toRgbString();
      }
      if (format2 === "rgb") {
        formattedString = this.toRgbString();
      }
      if (format2 === "prgb") {
        formattedString = this.toPercentageRgbString();
      }
      if (format2 === "hex" || format2 === "hex6") {
        formattedString = this.toHexString();
      }
      if (format2 === "hex3") {
        formattedString = this.toHexString(true);
      }
      if (format2 === "hex4") {
        formattedString = this.toHex8String(true);
      }
      if (format2 === "hex8") {
        formattedString = this.toHex8String();
      }
      if (format2 === "name") {
        formattedString = this.toName();
      }
      if (format2 === "hsl") {
        formattedString = this.toHslString();
      }
      if (format2 === "hsv") {
        formattedString = this.toHsvString();
      }
      return formattedString || this.toHexString();
    };
    TinyColor2.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor2.prototype.clone = function() {
      return new TinyColor2(this.toString());
    };
    TinyColor2.prototype.lighten = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.brighten = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var rgb = this.toRgb();
      rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
      rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
      rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
      return new TinyColor2(rgb);
    };
    TinyColor2.prototype.darken = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.tint = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      return this.mix("white", amount);
    };
    TinyColor2.prototype.shade = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      return this.mix("black", amount);
    };
    TinyColor2.prototype.desaturate = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.saturate = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.greyscale = function() {
      return this.desaturate(100);
    };
    TinyColor2.prototype.spin = function(amount) {
      var hsl = this.toHsl();
      var hue = (hsl.h + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.mix = function(color, amount) {
      if (amount === void 0) {
        amount = 50;
      }
      var rgb1 = this.toRgb();
      var rgb2 = new TinyColor2(color).toRgb();
      var p2 = amount / 100;
      var rgba = {
        r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
        g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
        b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
        a: (rgb2.a - rgb1.a) * p2 + rgb1.a
      };
      return new TinyColor2(rgba);
    };
    TinyColor2.prototype.analogous = function(results, slices) {
      if (results === void 0) {
        results = 6;
      }
      if (slices === void 0) {
        slices = 30;
      }
      var hsl = this.toHsl();
      var part = 360 / slices;
      var ret = [this];
      for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(new TinyColor2(hsl));
      }
      return ret;
    };
    TinyColor2.prototype.complement = function() {
      var hsl = this.toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.monochromatic = function(results) {
      if (results === void 0) {
        results = 6;
      }
      var hsv = this.toHsv();
      var h2 = hsv.h;
      var s = hsv.s;
      var v2 = hsv.v;
      var res = [];
      var modification = 1 / results;
      while (results--) {
        res.push(new TinyColor2({ h: h2, s, v: v2 }));
        v2 = (v2 + modification) % 1;
      }
      return res;
    };
    TinyColor2.prototype.splitcomplement = function() {
      var hsl = this.toHsl();
      var h2 = hsl.h;
      return [
        this,
        new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
        new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
      ];
    };
    TinyColor2.prototype.onBackground = function(background) {
      var fg = this.toRgb();
      var bg = new TinyColor2(background).toRgb();
      var alpha = fg.a + bg.a * (1 - fg.a);
      return new TinyColor2({
        r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
        g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
        b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
        a: alpha
      });
    };
    TinyColor2.prototype.triad = function() {
      return this.polyad(3);
    };
    TinyColor2.prototype.tetrad = function() {
      return this.polyad(4);
    };
    TinyColor2.prototype.polyad = function(n2) {
      var hsl = this.toHsl();
      var h2 = hsl.h;
      var result = [this];
      var increment = 360 / n2;
      for (var i = 1; i < n2; i++) {
        result.push(new TinyColor2({ h: (h2 + i * increment) % 360, s: hsl.s, l: hsl.l }));
      }
      return result;
    };
    TinyColor2.prototype.equals = function(color) {
      return this.toRgbString() === new TinyColor2(color).toRgbString();
    };
    return TinyColor2;
  }()
);
var hueStep$1 = 2;
var saturationStep$1 = 0.16;
var saturationStep2$1 = 0.05;
var brightnessStep1$1 = 0.05;
var brightnessStep2$1 = 0.15;
var lightColorCount$1 = 5;
var darkColorCount$1 = 4;
var darkColorMap$1 = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv$1(_ref) {
  var r = _ref.r, g2 = _ref.g, b2 = _ref.b;
  var hsv = rgbToHsv(r, g2, b2);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex$1(_ref2) {
  var r = _ref2.r, g2 = _ref2.g, b2 = _ref2.b;
  return "#".concat(rgbToHex(r, g2, b2, false));
}
function mix$1(rgb1, rgb2, amount) {
  var p2 = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
    g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
    b: (rgb2.b - rgb1.b) * p2 + rgb1.b
  };
  return rgb;
}
function getHue$1(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep$1 * i : Math.round(hsv.h) + hueStep$1 * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep$1 * i : Math.round(hsv.h) - hueStep$1 * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation$1(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep$1 * i;
  } else if (i === darkColorCount$1) {
    saturation = hsv.s + saturationStep$1;
  } else {
    saturation = hsv.s + saturationStep2$1 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount$1 && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue$2(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1$1 * i;
  } else {
    value = hsv.v - brightnessStep2$1 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate$3(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i = lightColorCount$1; i > 0; i -= 1) {
    var hsv = toHsv$1(pColor);
    var colorString = toHex$1(inputToRGB({
      h: getHue$1(hsv, i, true),
      s: getSaturation$1(hsv, i, true),
      v: getValue$2(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex$1(pColor));
  for (var _i = 1; _i <= darkColorCount$1; _i += 1) {
    var _hsv = toHsv$1(pColor);
    var _colorString = toHex$1(inputToRGB({
      h: getHue$1(_hsv, _i),
      s: getSaturation$1(_hsv, _i),
      v: getValue$2(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap$1.map(function(_ref3) {
      var index2 = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex$1(mix$1(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index2]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}
var presetPrimaryColors$1 = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var presetPalettes$1 = {};
var presetDarkPalettes$1 = {};
Object.keys(presetPrimaryColors$1).forEach(function(key) {
  presetPalettes$1[key] = generate$3(presetPrimaryColors$1[key]);
  presetPalettes$1[key].primary = presetPalettes$1[key][5];
  presetDarkPalettes$1[key] = generate$3(presetPrimaryColors$1[key], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  presetDarkPalettes$1[key].primary = presetDarkPalettes$1[key][5];
});
var blue = presetPalettes$1.blue;
const genControlHeight = (token2) => {
  const {
    controlHeight
  } = token2;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
const genControlHeight$1 = genControlHeight;
function genSizeMapToken(token2) {
  const {
    sizeUnit,
    sizeStep
  } = token2;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    // 48
    sizeXL: sizeUnit * (sizeStep + 4),
    // 32
    sizeLG: sizeUnit * (sizeStep + 2),
    // 24
    sizeMD: sizeUnit * (sizeStep + 1),
    // 20
    sizeMS: sizeUnit * sizeStep,
    // 16
    size: sizeUnit * sizeStep,
    // 16
    sizeSM: sizeUnit * (sizeStep - 1),
    // 12
    sizeXS: sizeUnit * (sizeStep - 2),
    // 8
    sizeXXS: sizeUnit * (sizeStep - 3)
    // 4
  };
}
const defaultPresetColors = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
};
const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false,
  // Motion
  motion: true
});
const seedToken$1 = seedToken;
function genColorMapToken(seed, _ref) {
  let {
    generateColorPalettes: generateColorPalettes2,
    generateNeutralColorPalettes: generateNeutralColorPalettes2
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes2(colorPrimaryBase);
  const successColors = generateColorPalettes2(colorSuccessBase);
  const warningColors = generateColorPalettes2(colorWarningBase);
  const errorColors = generateColorPalettes2(colorErrorBase);
  const infoColors = generateColorPalettes2(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
  const colorLink = seed.colorLink || seed.colorInfo;
  const linkColors = generateColorPalettes2(colorLink);
  return Object.assign(Object.assign({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorLinkHover: linkColors[4],
    colorLink: linkColors[6],
    colorLinkActive: linkColors[7],
    colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const genRadius = (radiusBase) => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
const genRadius$1 = genRadius;
function genCommonMapToken(token2) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token2;
  return Object.assign({
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1
  }, genRadius$1(borderRadius));
}
const getAlphaColor$1 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};
const generateColorPalettes = (baseColor) => {
  const colors = generate$3(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#fff";
  const colorTextBase = textBaseColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor$1(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
    colorFill: getAlphaColor$1(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
    colorBgBlur: "transparent",
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_, index2) => {
    const i = index2 - 1;
    const baseSize = base * Math.pow(2.71828, i / 5);
    const intSize = index2 > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map((size) => {
    const height = size + 8;
    return {
      size,
      lineHeight: height / size
    };
  });
}
const genFontMapToken = (fontSize) => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  const fontSizeMD = fontSizes[1];
  const fontSizeSM = fontSizes[0];
  const fontSizeLG = fontSizes[2];
  const lineHeight = lineHeights[1];
  const lineHeightSM = lineHeights[0];
  const lineHeightLG = lineHeights[2];
  return {
    fontSizeSM,
    fontSize: fontSizeMD,
    fontSizeLG,
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight,
    lineHeightLG,
    lineHeightSM,
    fontHeight: Math.round(lineHeight * fontSizeMD),
    fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
    fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
const genFontMapToken$1 = genFontMapToken;
function derivative(token2) {
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = generate$3(token2[colorKey]);
    return new Array(10).fill(1).reduce((prev2, _, i) => {
      prev2[`${colorKey}-${i + 1}`] = colors[i];
      prev2[`${colorKey}${i + 1}`] = colors[i];
      return prev2;
    }, {});
  }).reduce((prev2, cur) => {
    prev2 = Object.assign(Object.assign({}, prev2), cur);
    return prev2;
  }, {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token2), colorPalettes), genColorMapToken(token2, {
    generateColorPalettes,
    generateNeutralColorPalettes
  })), genFontMapToken$1(token2.fontSize)), genSizeMapToken(token2)), genControlHeight$1(token2)), genCommonMapToken(token2));
}
const defaultTheme = createTheme(derivative);
const defaultConfig = {
  token: seedToken$1,
  override: {
    override: seedToken$1
  },
  hashed: true
};
const DesignTokenContext = /* @__PURE__ */ React.createContext(defaultConfig);
const defaultIconPrefixCls = "anticon";
const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `ant-${suffixCls}` : "ant";
};
const ConfigContext = /* @__PURE__ */ reactExports.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls
});
const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
function getStyle(globalPrefixCls2, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type4) => {
    const baseColor = new TinyColor(colorVal);
    const colorPalettes = generate$3(baseColor.toRgbString());
    variables[`${type4}-color`] = formatColor(baseColor);
    variables[`${type4}-color-disabled`] = colorPalettes[1];
    variables[`${type4}-color-hover`] = colorPalettes[4];
    variables[`${type4}-color-active`] = colorPalettes[6];
    variables[`${type4}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[`${type4}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type4}-color-deprecated-border`] = colorPalettes[2];
  };
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, "primary");
    const primaryColor = new TinyColor(theme.primaryColor);
    const primaryColors = generate$3(primaryColor.toRgbString());
    primaryColors.forEach((color, index2) => {
      variables[`primary-${index2 + 1}`] = color;
    });
    variables["primary-color-deprecated-l-35"] = formatColor(primaryColor, (c2) => c2.lighten(35));
    variables["primary-color-deprecated-l-20"] = formatColor(primaryColor, (c2) => c2.lighten(20));
    variables["primary-color-deprecated-t-20"] = formatColor(primaryColor, (c2) => c2.tint(20));
    variables["primary-color-deprecated-t-50"] = formatColor(primaryColor, (c2) => c2.tint(50));
    variables["primary-color-deprecated-f-12"] = formatColor(primaryColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.12));
    const primaryActiveColor = new TinyColor(primaryColors[0]);
    variables["primary-color-active-deprecated-f-30"] = formatColor(primaryActiveColor, (c2) => c2.setAlpha(c2.getAlpha() * 0.3));
    variables["primary-color-active-deprecated-d-02"] = formatColor(primaryActiveColor, (c2) => c2.darken(2));
  }
  if (theme.successColor) {
    fillColor(theme.successColor, "success");
  }
  if (theme.warningColor) {
    fillColor(theme.warningColor, "warning");
  }
  if (theme.errorColor) {
    fillColor(theme.errorColor, "error");
  }
  if (theme.infoColor) {
    fillColor(theme.infoColor, "info");
  }
  const cssList = Object.keys(variables).map((key) => `--${globalPrefixCls2}-${key}: ${variables[key]};`);
  return `
  :root {
    ${cssList.join("\n")}
  }
  `.trim();
}
function registerTheme(globalPrefixCls2, theme) {
  const style2 = getStyle(globalPrefixCls2, theme);
  if (canUseDom()) {
    updateCSS(style2, `${dynamicStyleMark}-dynamic-theme`);
  }
}
const DisabledContext = /* @__PURE__ */ reactExports.createContext(false);
const DisabledContextProvider = (_ref) => {
  let {
    children,
    disabled
  } = _ref;
  const originDisabled = reactExports.useContext(DisabledContext);
  return /* @__PURE__ */ reactExports.createElement(DisabledContext.Provider, {
    value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
  }, children);
};
const DisabledContext$1 = DisabledContext;
const SizeContext = /* @__PURE__ */ reactExports.createContext(void 0);
const SizeContextProvider = (_ref) => {
  let {
    children,
    size
  } = _ref;
  const originSize = reactExports.useContext(SizeContext);
  return /* @__PURE__ */ reactExports.createElement(SizeContext.Provider, {
    value: size || originSize
  }, children);
};
const SizeContext$1 = SizeContext;
function useConfig() {
  const componentDisabled = reactExports.useContext(DisabledContext$1);
  const componentSize = reactExports.useContext(SizeContext$1);
  return {
    componentDisabled,
    componentSize
  };
}
const version$1 = "5.12.1";
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g2 = Math.round((fG - bG * (1 - fA)) / fA);
    const b2 = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g2) && isStableColor(b2)) {
      return new TinyColor({
        r,
        g: g2,
        b: b2,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  return new TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
var __rest$b = function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
function formatToken(derivativeToken) {
  const {
    override
  } = derivativeToken, restToken = __rest$b(derivativeToken, ["override"]);
  const overrideTokens = Object.assign({}, override);
  Object.keys(seedToken$1).forEach((token2) => {
    delete overrideTokens[token2];
  });
  const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  if (mergedToken.motion === false) {
    const fastDuration = "0s";
    mergedToken.motionDurationFast = fastDuration;
    mergedToken.motionDurationMid = fastDuration;
    mergedToken.motionDurationSlow = fastDuration;
  }
  const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Line
    lineWidthFocus: mergedToken.lineWidth * 4,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), overrideTokens);
  return aliasToken;
}
var __rest$a = function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
const unitless = {
  lineHeight: true,
  lineHeightSM: true,
  lineHeightLG: true,
  lineHeightHeading1: true,
  lineHeightHeading2: true,
  lineHeightHeading3: true,
  lineHeightHeading4: true,
  lineHeightHeading5: true,
  opacityLoading: true,
  fontWeightStrong: true,
  zIndexPopupBase: true,
  zIndexBase: true
};
const ignore = {
  size: true,
  sizeSM: true,
  sizeLG: true,
  sizeMD: true,
  sizeXS: true,
  sizeXXS: true,
  sizeMS: true,
  sizeXL: true,
  sizeXXL: true,
  sizeUnit: true,
  sizeStep: true,
  motionBase: true,
  motionUnit: true
};
const preserve = {
  screenXS: true,
  screenXSMin: true,
  screenXSMax: true,
  screenSM: true,
  screenSMMin: true,
  screenSMMax: true,
  screenMD: true,
  screenMDMin: true,
  screenMDMax: true,
  screenLG: true,
  screenLGMin: true,
  screenLGMax: true,
  screenXL: true,
  screenXLMin: true,
  screenXLMax: true,
  screenXXL: true,
  screenXXLMin: true
};
const getComputedToken = (originToken, overrideToken, theme) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  const {
    override
  } = overrideToken, components = __rest$a(overrideToken, ["override"]);
  let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
    override
  });
  mergedDerivativeToken = formatToken(mergedDerivativeToken);
  if (components) {
    Object.entries(components).forEach((_ref) => {
      let [key, value] = _ref;
      const {
        theme: componentTheme
      } = value, componentTokens = __rest$a(value, ["theme"]);
      let mergedComponentToken = componentTokens;
      if (componentTheme) {
        mergedComponentToken = getComputedToken(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
          override: componentTokens
        }, componentTheme);
      }
      mergedDerivativeToken[key] = mergedComponentToken;
    });
  }
  return mergedDerivativeToken;
};
function useToken() {
  const {
    token: rootDesignToken,
    hashed,
    theme,
    override,
    cssVar
  } = React.useContext(DesignTokenContext);
  const salt = `${version$1}-${hashed || ""}`;
  const mergedTheme = theme || defaultTheme;
  const [token2, hashId, realToken] = useCacheToken(mergedTheme, [seedToken$1, rootDesignToken], {
    salt,
    override,
    getComputedToken,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken,
    cssVar: cssVar && {
      prefix: cssVar.prefix,
      key: cssVar.key,
      unitless,
      ignore,
      preserve
    }
  });
  return [mergedTheme, realToken, hashed ? hashId : "", token2, cssVar];
}
function useEvent(callback) {
  var fnRef = reactExports.useRef();
  fnRef.current = callback;
  var memoFn = reactExports.useCallback(function() {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}
function useSafeState(defaultValue) {
  var destroyRef = reactExports.useRef(false);
  var _React$useState = reactExports.useState(defaultValue), _React$useState2 = _slicedToArray(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
  reactExports.useEffect(function() {
    destroyRef.current = false;
    return function() {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}
function hasValue$1(value) {
  return value !== void 0;
}
function useMergedState(defaultStateValue, option2) {
  var _ref = option2 || {}, defaultValue = _ref.defaultValue, value = _ref.value, onChange = _ref.onChange, postState = _ref.postState;
  var _useState = useSafeState(function() {
    if (hasValue$1(value)) {
      return value;
    } else if (hasValue$1(defaultValue)) {
      return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    } else {
      return typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
    }
  }), _useState2 = _slicedToArray(_useState, 2), innerValue = _useState2[0], setInnerValue = _useState2[1];
  var mergedValue = value !== void 0 ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;
  var onChangeFn = useEvent(onChange);
  var _useState3 = useSafeState([mergedValue]), _useState4 = _slicedToArray(_useState3, 2), prevValue = _useState4[0], setPrevValue = _useState4[1];
  useLayoutUpdateEffect(function() {
    var prev2 = prevValue[0];
    if (innerValue !== prev2) {
      onChangeFn(innerValue, prev2);
    }
  }, [prevValue]);
  useLayoutUpdateEffect(function() {
    if (!hasValue$1(value)) {
      setInnerValue(value);
    }
  }, [value]);
  var triggerChange = useEvent(function(updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}
const textEllipsis = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
};
const resetComponent = function(token2) {
  let needInheritFontFamily = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: token2.colorText,
    fontSize: token2.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: token2.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: needInheritFontFamily ? "inherit" : token2.fontFamily
  };
};
const resetIcon = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
});
const clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
});
const genLinkStyle = (token2) => ({
  a: {
    color: token2.colorLink,
    textDecoration: token2.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${token2.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: token2.colorLinkHover
    },
    "&:active": {
      color: token2.colorLinkActive
    },
    [`&:active,
  &:hover`]: {
      textDecoration: token2.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: token2.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: token2.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
});
const genCommonStyle = (token2, componentPrefixCls) => {
  const {
    fontFamily,
    fontSize
  } = token2;
  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [rootPrefixSelector]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
};
const genFocusOutline = (token2) => ({
  outline: `${unit$1(token2.lineWidthFocus)} solid ${token2.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
});
const genFocusStyle = (token2) => ({
  "&:focus-visible": Object.assign({}, genFocusOutline(token2))
});
let AbstractCalculator = /* @__PURE__ */ _createClass(function AbstractCalculator2() {
  _classCallCheck(this, AbstractCalculator2);
});
const AbstractCalculator$1 = AbstractCalculator;
let NumCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
  _inherits(NumCalculator2, _AbstractCalculator);
  var _super = _createSuper(NumCalculator2);
  function NumCalculator2(num) {
    var _this;
    _classCallCheck(this, NumCalculator2);
    _this = _super.call(this);
    _this.result = 0;
    if (num instanceof NumCalculator2) {
      _this.result = num.result;
    } else if (typeof num === "number") {
      _this.result = num;
    }
    return _this;
  }
  _createClass(NumCalculator2, [{
    key: "add",
    value: function add2(num) {
      if (num instanceof NumCalculator2) {
        this.result += num.result;
      } else if (typeof num === "number") {
        this.result += num;
      }
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof NumCalculator2) {
        this.result -= num.result;
      } else if (typeof num === "number") {
        this.result -= num;
      }
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (num instanceof NumCalculator2) {
        this.result *= num.result;
      } else if (typeof num === "number") {
        this.result *= num;
      }
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (num instanceof NumCalculator2) {
        this.result /= num.result;
      } else if (typeof num === "number") {
        this.result /= num;
      }
      return this;
    }
  }, {
    key: "equal",
    value: function equal() {
      return this.result;
    }
  }]);
  return NumCalculator2;
}(AbstractCalculator$1);
const CALC_UNIT = "CALC_UNIT";
function unit(value) {
  if (typeof value === "number") {
    return `${value}${CALC_UNIT}`;
  }
  return value;
}
let CSSCalculator = /* @__PURE__ */ function(_AbstractCalculator) {
  _inherits(CSSCalculator2, _AbstractCalculator);
  var _super = _createSuper(CSSCalculator2);
  function CSSCalculator2(num) {
    var _this;
    _classCallCheck(this, CSSCalculator2);
    _this = _super.call(this);
    _this.result = "";
    if (num instanceof CSSCalculator2) {
      _this.result = `(${num.result})`;
    } else if (typeof num === "number") {
      _this.result = unit(num);
    } else if (typeof num === "string") {
      _this.result = num;
    }
    return _this;
  }
  _createClass(CSSCalculator2, [{
    key: "add",
    value: function add2(num) {
      if (num instanceof CSSCalculator2) {
        this.result = `${this.result} + ${num.getResult()}`;
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = `${this.result} + ${unit(num)}`;
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof CSSCalculator2) {
        this.result = `${this.result} - ${num.getResult()}`;
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = `${this.result} - ${unit(num)}`;
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (this.lowPriority) {
        this.result = `(${this.result})`;
      }
      if (num instanceof CSSCalculator2) {
        this.result = `${this.result} * ${num.getResult(true)}`;
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = `${this.result} * ${num}`;
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (this.lowPriority) {
        this.result = `(${this.result})`;
      }
      if (num instanceof CSSCalculator2) {
        this.result = `${this.result} / ${num.getResult(true)}`;
      } else if (typeof num === "number" || typeof num === "string") {
        this.result = `${this.result} / ${num}`;
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "getResult",
    value: function getResult(force) {
      return this.lowPriority || force ? `(${this.result})` : this.result;
    }
  }, {
    key: "equal",
    value: function equal(options2) {
      const {
        unit: cssUnit = true
      } = options2 || {};
      const regexp4 = new RegExp(`${CALC_UNIT}`, "g");
      this.result = this.result.replace(regexp4, cssUnit ? "px" : "");
      if (typeof this.lowPriority !== "undefined") {
        return `calc(${this.result})`;
      }
      return this.result;
    }
  }]);
  return CSSCalculator2;
}(AbstractCalculator$1);
const genCalc = (type4) => {
  const Calculator = type4 === "css" ? CSSCalculator : NumCalculator;
  return (num) => new Calculator(num);
};
const genCalc$1 = genCalc;
function genMaxMin(type4) {
  if (type4 === "js") {
    return {
      max: Math.max,
      min: Math.min
    };
  }
  return {
    max: function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return `max(${args.map((value) => unit$1(value)).join(",")})`;
    },
    min: function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return `min(${args.map((value) => unit$1(value)).join(",")})`;
    }
  };
}
const enableStatistic = typeof CSSINJS_STATISTIC !== "undefined";
let recording = true;
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  if (!enableStatistic) {
    return Object.assign.apply(Object, [{}].concat(objs));
  }
  recording = false;
  const ret = {};
  objs.forEach((obj) => {
    const keys2 = Object.keys(obj);
    keys2.forEach((key) => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
const statistic = {};
function noop() {
}
function statisticToken(token2) {
  let tokenKeys2;
  let proxy = token2;
  let flush = noop;
  if (enableStatistic && typeof Proxy !== "undefined") {
    tokenKeys2 = /* @__PURE__ */ new Set();
    proxy = new Proxy(token2, {
      get(obj, prop) {
        if (recording) {
          tokenKeys2.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      var _a;
      statistic[componentName] = {
        global: Array.from(tokenKeys2),
        component: Object.assign(Object.assign({}, (_a = statistic[componentName]) === null || _a === void 0 ? void 0 : _a.component), componentToken)
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys2,
    flush
  };
}
const useResetIconStyle = (iconPrefixCls, csp) => {
  const [theme, token2] = useToken();
  return useStyleRegister({
    theme,
    token: token2,
    hashId: "",
    path: ["ant-design-icons", iconPrefixCls],
    nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce
  }, () => [{
    [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, resetIcon()), {
      [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
        display: "block"
      }
    })
  }]);
};
const useStyle$5 = useResetIconStyle;
const getDefaultComponentToken = (component, token2, getDefaultToken) => {
  var _a;
  if (typeof getDefaultToken === "function") {
    return getDefaultToken(merge(token2, (_a = token2[component]) !== null && _a !== void 0 ? _a : {}));
  }
  return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
};
const getComponentToken = (component, token2, defaultToken, options2) => {
  const customToken = Object.assign({}, token2[component]);
  if (options2 === null || options2 === void 0 ? void 0 : options2.deprecatedTokens) {
    const {
      deprecatedTokens
    } = options2;
    deprecatedTokens.forEach((_ref) => {
      let [oldTokenKey, newTokenKey] = _ref;
      var _a;
      if ((customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey]) || (customToken === null || customToken === void 0 ? void 0 : customToken[newTokenKey])) {
        (_a = customToken[newTokenKey]) !== null && _a !== void 0 ? _a : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
      }
    });
  }
  let mergedToken = Object.assign(Object.assign({}, defaultToken), customToken);
  if (options2 === null || options2 === void 0 ? void 0 : options2.format) {
    mergedToken = options2.format(mergedToken);
  }
  Object.keys(mergedToken).forEach((key) => {
    if (mergedToken[key] === token2[key]) {
      delete mergedToken[key];
    }
  });
  return mergedToken;
};
const getCompVarPrefix = (component, prefix) => `${[prefix, component.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function genComponentStyleHook(componentName, styleFn, getDefaultToken) {
  let options2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
  const [component] = cells;
  const concatComponent = cells.join("-");
  return (prefixCls) => {
    const [theme, realToken, hashId, token2, cssVar] = useToken();
    const {
      getPrefixCls,
      iconPrefixCls,
      csp
    } = reactExports.useContext(ConfigContext);
    const rootPrefixCls = getPrefixCls();
    const type4 = cssVar ? "css" : "js";
    const calc = genCalc$1(type4);
    const {
      max,
      min
    } = genMaxMin(type4);
    const sharedConfig = {
      theme,
      token: token2,
      hashId,
      nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
      clientOnly: options2.clientOnly,
      // antd is always at top of styles
      order: options2.order || -999
    };
    useStyleRegister(Object.assign(Object.assign({}, sharedConfig), {
      clientOnly: false,
      path: ["Shared", rootPrefixCls]
    }), () => [{
      // Link
      "&": genLinkStyle(token2)
    }]);
    useStyle$5(iconPrefixCls, csp);
    const wrapSSR = useStyleRegister(Object.assign(Object.assign({}, sharedConfig), {
      path: [concatComponent, prefixCls, iconPrefixCls]
    }), () => {
      if (options2.injectStyle === false) {
        return [];
      }
      const {
        token: proxyToken,
        flush
      } = statisticToken(token2);
      const defaultComponentToken = getDefaultComponentToken(component, realToken, getDefaultToken);
      const componentCls = `.${prefixCls}`;
      const componentToken = getComponentToken(component, realToken, defaultComponentToken, {
        deprecatedTokens: options2.deprecatedTokens,
        format: options2.format
      });
      if (cssVar) {
        Object.keys(defaultComponentToken).forEach((key) => {
          defaultComponentToken[key] = `var(${token2CSSVar(key, getCompVarPrefix(component, cssVar.prefix))})`;
        });
      }
      const mergedToken = merge(proxyToken, {
        componentCls,
        prefixCls,
        iconCls: `.${iconPrefixCls}`,
        antCls: `.${rootPrefixCls}`,
        calc,
        max,
        min
      }, cssVar ? defaultComponentToken : componentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId,
        prefixCls,
        rootPrefixCls,
        iconPrefixCls
      });
      flush(component, componentToken);
      return [options2.resetStyle === false ? null : genCommonStyle(mergedToken, prefixCls), styleInterpolation];
    });
    return [wrapSSR, classNames(hashId, cssVar === null || cssVar === void 0 ? void 0 : cssVar.key)];
  };
}
const genSubStyleComponent = (componentName, styleFn, getDefaultToken, options2) => {
  const useStyle2 = genComponentStyleHook(componentName, styleFn, getDefaultToken, Object.assign({
    resetStyle: false,
    // Sub Style should default after root one
    order: -998
  }, options2));
  const StyledComponent = (_ref2) => {
    let {
      prefixCls
    } = _ref2;
    useStyle2(prefixCls);
    return null;
  };
  return StyledComponent;
};
const genCSSVarRegister = (component, getDefaultToken, options2) => {
  function prefixToken(key) {
    return `${component}${key.slice(0, 1).toUpperCase()}${key.slice(1)}`;
  }
  const {
    unitless: originUnitless = {},
    injectStyle = true
  } = options2 !== null && options2 !== void 0 ? options2 : {};
  const compUnitless = {
    [prefixToken("zIndexPopup")]: true
  };
  Object.keys(originUnitless).forEach((key) => {
    compUnitless[prefixToken(key)] = originUnitless[key];
  });
  const CSSVarRegister = (_ref3) => {
    let {
      rootCls,
      cssVar
    } = _ref3;
    const [, realToken] = useToken();
    useCSSVarRegister({
      path: [component],
      prefix: cssVar.prefix,
      key: cssVar === null || cssVar === void 0 ? void 0 : cssVar.key,
      unitless: Object.assign(Object.assign({}, unitless), compUnitless),
      ignore,
      token: realToken,
      scope: rootCls
    }, () => {
      const defaultToken = getDefaultComponentToken(component, realToken, getDefaultToken);
      const componentToken = getComponentToken(component, realToken, defaultToken, {
        format: options2 === null || options2 === void 0 ? void 0 : options2.format,
        deprecatedTokens: options2 === null || options2 === void 0 ? void 0 : options2.deprecatedTokens
      });
      Object.keys(defaultToken).forEach((key) => {
        componentToken[prefixToken(key)] = componentToken[key];
        delete componentToken[key];
      });
      return componentToken;
    });
    return null;
  };
  const useCSSVar = (rootCls) => {
    const [, , , , cssVar] = useToken();
    return (node2) => injectStyle && cssVar ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CSSVarRegister, {
      rootCls,
      cssVar,
      component
    }), node2) : node2;
  };
  return useCSSVar;
};
const genStyleHooks = (component, styleFn, getDefaultToken, options2) => {
  const useStyle2 = genComponentStyleHook(component, styleFn, getDefaultToken, options2);
  const useCSSVar = genCSSVarRegister(component, getDefaultToken, options2);
  return function(prefixCls) {
    let rootCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : prefixCls;
    const [, hashId] = useStyle2(prefixCls);
    const wrapCSSVar = useCSSVar(rootCls);
    return [wrapCSSVar, hashId];
  };
};
const useEmptyId = () => "";
const useThemeKey = typeof reactExports.useId === "undefined" ? useEmptyId : reactExports.useId;
const useThemeKey$1 = useThemeKey;
function useTheme(theme, parentTheme) {
  devUseWarning();
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? defaultConfig : parentTheme;
  const themeKey = useThemeKey$1();
  return useMemo(() => {
    var _a2, _b;
    if (!theme) {
      return parentTheme;
    }
    const mergedComponents = Object.assign({}, parentThemeConfig.components);
    Object.keys(theme.components || {}).forEach((componentName) => {
      mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
    });
    const cssVarKey = `css-var-${themeKey.replace(/:/g, "")}`;
    const mergedCssVar = ((_a2 = themeConfig.cssVar) !== null && _a2 !== void 0 ? _a2 : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: "ant"
    }, typeof parentThemeConfig.cssVar === "object" ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === "object" ? themeConfig.cssVar : {}), {
      key: typeof themeConfig.cssVar === "object" && ((_b = themeConfig.cssVar) === null || _b === void 0 ? void 0 : _b.key) || cssVarKey
    });
    return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
      token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
      components: mergedComponents,
      cssVar: mergedCssVar
    });
  }, [themeConfig, parentThemeConfig], (prev2, next2) => prev2.some((prevTheme, index2) => {
    const nextTheme = next2[index2];
    return !isEqual(prevTheme, nextTheme, true);
  }));
}
var _excluded$m = ["children"];
var Context$2 = /* @__PURE__ */ reactExports.createContext({});
function MotionProvider(_ref) {
  var children = _ref.children, props = _objectWithoutProperties(_ref, _excluded$m);
  return /* @__PURE__ */ reactExports.createElement(Context$2.Provider, {
    value: props
  }, children);
}
var DomWrapper = /* @__PURE__ */ function(_React$Component) {
  _inherits(DomWrapper2, _React$Component);
  var _super = _createSuper(DomWrapper2);
  function DomWrapper2() {
    _classCallCheck(this, DomWrapper2);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper2, [{
    key: "render",
    value: function render2() {
      return this.props.children;
    }
  }]);
  return DomWrapper2;
}(reactExports.Component);
var STATUS_NONE = "none";
var STATUS_APPEAR = "appear";
var STATUS_ENTER = "enter";
var STATUS_LEAVE = "leave";
var STEP_NONE = "none";
var STEP_PREPARE = "prepare";
var STEP_START = "start";
var STEP_ACTIVE = "active";
var STEP_ACTIVATED = "end";
var STEP_PREPARED = "prepared";
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}
function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap("Animation", "AnimationEnd"),
    transitionend: makePrefixMap("Transition", "TransitionEnd")
  };
  if (domSupport) {
    if (!("AnimationEvent" in win)) {
      delete prefixes.animationend.animation;
    }
    if (!("TransitionEvent" in win)) {
      delete prefixes.transitionend.transition;
    }
  }
  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== "undefined" ? window : {});
var style = {};
if (canUseDom()) {
  var _document$createEleme = document.createElement("div");
  style = _document$createEleme.style;
}
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }
  var prefixMap = vendorPrefixes[eventName];
  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;
    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }
  return "";
}
var internalAnimationEndName = getVendorPrefixedEventName("animationend");
var internalTransitionEndName = getVendorPrefixedEventName("transitionend");
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || "animationend";
var transitionEndName = internalTransitionEndName || "transitionend";
function getTransitionName$1(transitionName, transitionType) {
  if (!transitionName)
    return null;
  if (_typeof(transitionName) === "object") {
    var type4 = transitionType.replace(/-\w/g, function(match2) {
      return match2[1].toUpperCase();
    });
    return transitionName[type4];
  }
  return "".concat(transitionName, "-").concat(transitionType);
}
const useDomMotionEvents = function(callback) {
  var cacheElementRef = reactExports.useRef();
  var callbackRef = reactExports.useRef(callback);
  callbackRef.current = callback;
  var onInternalMotionEnd = reactExports.useCallback(function(event) {
    callbackRef.current(event);
  }, []);
  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  }
  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }
    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd);
      cacheElementRef.current = element;
    }
  }
  reactExports.useEffect(function() {
    return function() {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
};
var useIsomorphicLayoutEffect = canUseDom() ? reactExports.useLayoutEffect : reactExports.useEffect;
const useNextFrame = function() {
  var nextFrameRef = reactExports.useRef(null);
  function cancelNextFrame() {
    wrapperRaf.cancel(nextFrameRef.current);
  }
  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = wrapperRaf(function() {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }
  reactExports.useEffect(function() {
    return function() {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
};
var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];
var SkipStep = false;
var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
const useStepQueue = function(status, prepareOnly, callback) {
  var _useState = useSafeState(STEP_NONE), _useState2 = _slicedToArray(_useState, 2), step = _useState2[0], setStep = _useState2[1];
  var _useNextFrame = useNextFrame(), _useNextFrame2 = _slicedToArray(_useNextFrame, 2), nextFrame = _useNextFrame2[0], cancelNextFrame = _useNextFrame2[1];
  function startQueue() {
    setStep(STEP_PREPARE, true);
  }
  var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
  useIsomorphicLayoutEffect(function() {
    if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
      var index2 = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index2 + 1];
      var result = callback(step);
      if (result === SkipStep) {
        setStep(nextStep, true);
      } else if (nextStep) {
        nextFrame(function(info) {
          function doNext() {
            if (info.isCanceled())
              return;
            setStep(nextStep, true);
          }
          if (result === true) {
            doNext();
          } else {
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  reactExports.useEffect(function() {
    return function() {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
};
function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter, motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter, _ref$motionAppear = _ref.motionAppear, motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear, _ref$motionLeave = _ref.motionLeave, motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave, motionDeadline = _ref.motionDeadline, motionLeaveImmediately = _ref.motionLeaveImmediately, onAppearPrepare = _ref.onAppearPrepare, onEnterPrepare = _ref.onEnterPrepare, onLeavePrepare = _ref.onLeavePrepare, onAppearStart = _ref.onAppearStart, onEnterStart = _ref.onEnterStart, onLeaveStart = _ref.onLeaveStart, onAppearActive = _ref.onAppearActive, onEnterActive = _ref.onEnterActive, onLeaveActive = _ref.onLeaveActive, onAppearEnd = _ref.onAppearEnd, onEnterEnd = _ref.onEnterEnd, onLeaveEnd = _ref.onLeaveEnd, onVisibleChanged = _ref.onVisibleChanged;
  var _useState = useSafeState(), _useState2 = _slicedToArray(_useState, 2), asyncVisible = _useState2[0], setAsyncVisible = _useState2[1];
  var _useState3 = useSafeState(STATUS_NONE), _useState4 = _slicedToArray(_useState3, 2), status = _useState4[0], setStatus = _useState4[1];
  var _useState5 = useSafeState(null), _useState6 = _slicedToArray(_useState5, 2), style2 = _useState6[0], setStyle = _useState6[1];
  var mountedRef = reactExports.useRef(false);
  var deadlineRef = reactExports.useRef(null);
  function getDomElement() {
    return getElement();
  }
  var activeRef = reactExports.useRef(false);
  function updateMotionEndStatus() {
    setStatus(STATUS_NONE, true);
    setStyle(null, true);
  }
  function onInternalMotionEnd(event) {
    var element = getDomElement();
    if (event && !event.deadline && event.target !== element) {
      return;
    }
    var currentActive = activeRef.current;
    var canEnd;
    if (status === STATUS_APPEAR && currentActive) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && currentActive) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && currentActive) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    }
    if (status !== STATUS_NONE && currentActive && canEnd !== false) {
      updateMotionEndStatus();
    }
  }
  var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd), _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1), patchMotionEvents = _useDomMotionEvents2[0];
  var getEventHandlers = function getEventHandlers2(targetStatus) {
    var _ref2, _ref3, _ref4;
    switch (targetStatus) {
      case STATUS_APPEAR:
        return _ref2 = {}, _defineProperty(_ref2, STEP_PREPARE, onAppearPrepare), _defineProperty(_ref2, STEP_START, onAppearStart), _defineProperty(_ref2, STEP_ACTIVE, onAppearActive), _ref2;
      case STATUS_ENTER:
        return _ref3 = {}, _defineProperty(_ref3, STEP_PREPARE, onEnterPrepare), _defineProperty(_ref3, STEP_START, onEnterStart), _defineProperty(_ref3, STEP_ACTIVE, onEnterActive), _ref3;
      case STATUS_LEAVE:
        return _ref4 = {}, _defineProperty(_ref4, STEP_PREPARE, onLeavePrepare), _defineProperty(_ref4, STEP_START, onLeaveStart), _defineProperty(_ref4, STEP_ACTIVE, onLeaveActive), _ref4;
      default:
        return {};
    }
  };
  var eventHandlers = reactExports.useMemo(function() {
    return getEventHandlers(status);
  }, [status]);
  var _useStepQueue = useStepQueue(status, !supportMotion, function(newStep) {
    if (newStep === STEP_PREPARE) {
      var onPrepare = eventHandlers[STEP_PREPARE];
      if (!onPrepare) {
        return SkipStep;
      }
      return onPrepare(getDomElement());
    }
    if (step in eventHandlers) {
      var _eventHandlers$step;
      setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
    }
    if (step === STEP_ACTIVE) {
      patchMotionEvents(getDomElement());
      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(function() {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }
    if (step === STEP_PREPARED) {
      updateMotionEndStatus();
    }
    return DoStep;
  }), _useStepQueue2 = _slicedToArray(_useStepQueue, 2), startStep = _useStepQueue2[0], step = _useStepQueue2[1];
  var active = isActive(step);
  activeRef.current = active;
  useIsomorphicLayoutEffect(function() {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;
    var nextStatus;
    if (!isMounted && visible && motionAppear) {
      nextStatus = STATUS_APPEAR;
    }
    if (isMounted && visible && motionEnter) {
      nextStatus = STATUS_ENTER;
    }
    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = STATUS_LEAVE;
    }
    var nextEventHandlers = getEventHandlers(nextStatus);
    if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
      setStatus(nextStatus);
      startStep();
    } else {
      setStatus(STATUS_NONE);
    }
  }, [visible]);
  reactExports.useEffect(function() {
    if (
      // Cancel appear
      status === STATUS_APPEAR && !motionAppear || // Cancel enter
      status === STATUS_ENTER && !motionEnter || // Cancel leave
      status === STATUS_LEAVE && !motionLeave
    ) {
      setStatus(STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  reactExports.useEffect(function() {
    return function() {
      mountedRef.current = false;
      clearTimeout(deadlineRef.current);
    };
  }, []);
  var firstMountChangeRef = reactExports.useRef(false);
  reactExports.useEffect(function() {
    if (asyncVisible) {
      firstMountChangeRef.current = true;
    }
    if (asyncVisible !== void 0 && status === STATUS_NONE) {
      if (firstMountChangeRef.current || asyncVisible) {
        onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
      }
      firstMountChangeRef.current = true;
    }
  }, [asyncVisible, status]);
  var mergedStyle = style2;
  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = _objectSpread2({
      transition: "none"
    }, mergedStyle);
  }
  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}
function genCSSMotion(config) {
  var transitionSupport = config;
  if (_typeof(config) === "object") {
    transitionSupport = config.transitionSupport;
  }
  function isSupportTransition(props, contextMotion) {
    return !!(props.motionName && transitionSupport && contextMotion !== false);
  }
  var CSSMotion2 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
    var _props$visible = props.visible, visible = _props$visible === void 0 ? true : _props$visible, _props$removeOnLeave = props.removeOnLeave, removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave, forceRender = props.forceRender, children = props.children, motionName = props.motionName, leavedClassName = props.leavedClassName, eventProps = props.eventProps;
    var _React$useContext = reactExports.useContext(Context$2), contextMotion = _React$useContext.motion;
    var supportMotion = isSupportTransition(props, contextMotion);
    var nodeRef = reactExports.useRef();
    var wrapperNodeRef = reactExports.useRef();
    function getDomElement() {
      try {
        return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
      } catch (e2) {
        return null;
      }
    }
    var _useStatus = useStatus(supportMotion, visible, getDomElement, props), _useStatus2 = _slicedToArray(_useStatus, 4), status = _useStatus2[0], statusStep = _useStatus2[1], statusStyle = _useStatus2[2], mergedVisible = _useStatus2[3];
    var renderedRef = reactExports.useRef(mergedVisible);
    if (mergedVisible) {
      renderedRef.current = true;
    }
    var setNodeRef = reactExports.useCallback(function(node2) {
      nodeRef.current = node2;
      fillRef(ref, node2);
    }, [ref]);
    var motionChildren;
    var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
      visible
    });
    if (!children) {
      motionChildren = null;
    } else if (status === STATUS_NONE) {
      if (mergedVisible) {
        motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender || !removeOnLeave && !leavedClassName) {
        motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
          style: {
            display: "none"
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;
      var statusSuffix;
      if (statusStep === STEP_PREPARE) {
        statusSuffix = "prepare";
      } else if (isActive(statusStep)) {
        statusSuffix = "active";
      } else if (statusStep === STEP_START) {
        statusSuffix = "start";
      }
      var motionCls = getTransitionName$1(motionName, "".concat(status, "-").concat(statusSuffix));
      motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
        className: classNames(getTransitionName$1(motionName, status), (_classNames = {}, _defineProperty(_classNames, motionCls, motionCls && statusSuffix), _defineProperty(_classNames, motionName, typeof motionName === "string"), _classNames)),
        style: statusStyle
      }), setNodeRef);
    }
    if (/* @__PURE__ */ reactExports.isValidElement(motionChildren) && supportRef(motionChildren)) {
      var _ref = motionChildren, originNodeRef = _ref.ref;
      if (!originNodeRef) {
        motionChildren = /* @__PURE__ */ reactExports.cloneElement(motionChildren, {
          ref: setNodeRef
        });
      }
    }
    return /* @__PURE__ */ reactExports.createElement(DomWrapper, {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion2.displayName = "CSSMotion";
  return CSSMotion2;
}
const CSSMotion = genCSSMotion(supportTransition);
var STATUS_ADD = "add";
var STATUS_KEEP = "keep";
var STATUS_REMOVE = "remove";
var STATUS_REMOVED = "removed";
function wrapKeyToObject(key) {
  var keyObj;
  if (key && _typeof(key) === "object" && "key" in key) {
    keyObj = key;
  } else {
    keyObj = {
      key
    };
  }
  return _objectSpread2(_objectSpread2({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return keys2.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys);
  prevKeyObjects.forEach(function(keyObj) {
    var hit = false;
    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];
      if (currentKeyObj.key === keyObj.key) {
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function(obj) {
            return _objectSpread2(_objectSpread2({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }
        list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    }
    if (!hit) {
      list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  });
  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function(obj) {
      return _objectSpread2(_objectSpread2({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  var keys2 = {};
  list.forEach(function(_ref) {
    var key = _ref.key;
    keys2[key] = (keys2[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys2).filter(function(key) {
    return keys2[key] > 1;
  });
  duplicatedKeys.forEach(function(matchKey) {
    list = list.filter(function(_ref2) {
      var key = _ref2.key, status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    });
    list.forEach(function(node2) {
      if (node2.key === matchKey) {
        node2.status = STATUS_KEEP;
      }
    });
  });
  return list;
}
var _excluded$l = ["component", "children", "onVisibleChanged", "onAllRemoved"], _excluded2$2 = ["status"];
var MOTION_PROP_NAMES = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function genCSSMotionList(transitionSupport) {
  var CSSMotion$1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSMotion;
  var CSSMotionList2 = /* @__PURE__ */ function(_React$Component) {
    _inherits(CSSMotionList3, _React$Component);
    var _super = _createSuper(CSSMotionList3);
    function CSSMotionList3() {
      var _this;
      _classCallCheck(this, CSSMotionList3);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "state", {
        keyEntities: []
      });
      _defineProperty(_assertThisInitialized(_this), "removeKey", function(removeKey) {
        var keyEntities = _this.state.keyEntities;
        var nextKeyEntities = keyEntities.map(function(entity) {
          if (entity.key !== removeKey)
            return entity;
          return _objectSpread2(_objectSpread2({}, entity), {}, {
            status: STATUS_REMOVED
          });
        });
        _this.setState({
          keyEntities: nextKeyEntities
        });
        return nextKeyEntities.filter(function(_ref) {
          var status = _ref.status;
          return status !== STATUS_REMOVED;
        }).length;
      });
      return _this;
    }
    _createClass(CSSMotionList3, [{
      key: "render",
      value: function render2() {
        var _this2 = this;
        var keyEntities = this.state.keyEntities;
        var _this$props = this.props, component = _this$props.component, children = _this$props.children, _onVisibleChanged = _this$props.onVisibleChanged, onAllRemoved = _this$props.onAllRemoved, restProps = _objectWithoutProperties(_this$props, _excluded$l);
        var Component = component || reactExports.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function(prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /* @__PURE__ */ reactExports.createElement(Component, restProps, keyEntities.map(function(_ref2, index2) {
          var status = _ref2.status, eventProps = _objectWithoutProperties(_ref2, _excluded2$2);
          var visible = status === STATUS_ADD || status === STATUS_KEEP;
          return /* @__PURE__ */ reactExports.createElement(CSSMotion$1, _extends$1({}, motionProps, {
            key: eventProps.key,
            visible,
            eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });
              if (!changedVisible) {
                var restKeysCount = _this2.removeKey(eventProps.key);
                if (restKeysCount === 0 && onAllRemoved) {
                  onAllRemoved();
                }
              }
            }
          }), function(props, ref) {
            return children(_objectSpread2(_objectSpread2({}, props), {}, {
              index: index2
            }), ref);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys2 = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = parseKeys(keys2);
        var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function(entity) {
            var prevEntity = keyEntities.find(function(_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            });
            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
              return false;
            }
            return true;
          })
        };
      }
    }]);
    return CSSMotionList3;
  }(reactExports.Component);
  _defineProperty(CSSMotionList2, "defaultProps", {
    component: "div"
  });
  return CSSMotionList2;
}
const CSSMotionList = genCSSMotionList(supportTransition);
function MotionWrapper(props) {
  const {
    children
  } = props;
  const [, token2] = useToken();
  const {
    motion
  } = token2;
  const needWrapMotionProviderRef = reactExports.useRef(false);
  needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
  if (needWrapMotionProviderRef.current) {
    return /* @__PURE__ */ reactExports.createElement(MotionProvider, {
      motion
    }, children);
  }
  return children;
}
const PropWarning = () => null;
var __rest$9 = function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
const PASSED_PROPS = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"];
const defaultPrefixCls = "ant";
let globalPrefixCls;
let globalIconPrefixCls;
let globalTheme;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || defaultIconPrefixCls;
}
function isLegacyTheme(theme) {
  return Object.keys(theme).some((key) => key.endsWith("Color"));
}
const setGlobalConfig = (_ref) => {
  let {
    prefixCls,
    iconPrefixCls,
    theme
  } = _ref;
  if (prefixCls !== void 0) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== void 0) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if (theme) {
    if (isLegacyTheme(theme)) {
      registerTheme(getGlobalPrefixCls(), theme);
    } else {
      globalTheme = theme;
    }
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    return getGlobalPrefixCls();
  },
  getTheme: () => globalTheme
});
const ProviderChildren = (props) => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    form,
    locale: locale2,
    componentSize,
    direction,
    space,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled,
    segmented,
    statistic: statistic2,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    input,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig
  } = props;
  const getPrefixCls = reactExports.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls("");
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
  const csp = customCsp || parentContext.csp;
  useStyle$5(iconPrefixCls, csp);
  const mergedTheme = useTheme(theme, parentContext.theme);
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    locale: locale2 || legacyLocale,
    direction,
    space,
    virtual,
    popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme,
    segmented,
    statistic: statistic2,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    input,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig
  };
  const config = Object.assign({}, parentContext);
  Object.keys(baseConfig).forEach((key) => {
    if (baseConfig[key] !== void 0) {
      config[key] = baseConfig[key];
    }
  });
  PASSED_PROPS.forEach((propName) => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  const memoedConfig = useMemo(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some((key) => prevConfig[key] !== currentConfig[key]);
  });
  const memoIconContextValue = reactExports.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp
  }), [iconPrefixCls, csp]);
  let childNode = /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(PropWarning, {
    dropdownMatchSelectWidth
  }), children);
  const validateMessages = reactExports.useMemo(() => {
    var _a, _b, _c, _d;
    return merge$1(((_a = defaultLocale.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
  }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
  if (Object.keys(validateMessages).length > 0) {
    childNode = /* @__PURE__ */ reactExports.createElement(ValidateMessagesContext.Provider, {
      value: validateMessages
    }, childNode);
  }
  if (locale2) {
    childNode = /* @__PURE__ */ reactExports.createElement(LocaleProvider$1, {
      locale: locale2,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = /* @__PURE__ */ reactExports.createElement(Context$3.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /* @__PURE__ */ reactExports.createElement(SizeContextProvider, {
      size: componentSize
    }, childNode);
  }
  childNode = /* @__PURE__ */ reactExports.createElement(MotionWrapper, null, childNode);
  const memoTheme = reactExports.useMemo(() => {
    const _a = mergedTheme || {}, {
      algorithm,
      token: token2,
      components,
      cssVar
    } = _a, rest = __rest$9(_a, ["algorithm", "token", "components", "cssVar"]);
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : defaultTheme;
    const parsedComponents = {};
    Object.entries(components || {}).forEach((_ref2) => {
      let [componentName, componentToken] = _ref2;
      const parsedToken = Object.assign({}, componentToken);
      if ("algorithm" in parsedToken) {
        if (parsedToken.algorithm === true) {
          parsedToken.theme = themeObj;
        } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === "function") {
          parsedToken.theme = createTheme(parsedToken.algorithm);
        }
        delete parsedToken.algorithm;
      }
      parsedComponents[componentName] = parsedToken;
    });
    const mergedToken = Object.assign(Object.assign({}, seedToken$1), token2);
    return Object.assign(Object.assign({}, rest), {
      theme: themeObj,
      token: mergedToken,
      components: parsedComponents,
      override: Object.assign({
        override: mergedToken
      }, parsedComponents),
      cssVar
    });
  }, [mergedTheme]);
  if (theme) {
    childNode = /* @__PURE__ */ reactExports.createElement(DesignTokenContext.Provider, {
      value: memoTheme
    }, childNode);
  }
  if (memoedConfig.warning) {
    childNode = /* @__PURE__ */ reactExports.createElement(WarningContext.Provider, {
      value: memoedConfig.warning
    }, childNode);
  }
  if (componentDisabled !== void 0) {
    childNode = /* @__PURE__ */ reactExports.createElement(DisabledContextProvider, {
      disabled: componentDisabled
    }, childNode);
  }
  return /* @__PURE__ */ reactExports.createElement(ConfigContext.Provider, {
    value: memoedConfig
  }, childNode);
};
const ConfigProvider = (props) => {
  const context = reactExports.useContext(ConfigContext);
  const antLocale = reactExports.useContext(LocaleContext$1);
  return /* @__PURE__ */ reactExports.createElement(ProviderChildren, Object.assign({
    parentContext: context,
    legacyLocale: antLocale
  }, props));
};
ConfigProvider.ConfigContext = ConfigContext;
ConfigProvider.SizeContext = SizeContext$1;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = useConfig;
Object.defineProperty(ConfigProvider, "SizeContext", {
  get: () => {
    return SizeContext$1;
  }
});
function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}
function camelCase$2(input) {
  return input.replace(/-(.)/g, function(match2, g2) {
    return g2.toUpperCase();
  });
}
function warning$2(valid, message) {
  warningOnce(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition$1(target) {
  return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
}
function normalizeAttrs$1() {
  var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(attrs).reduce(function(acc, key) {
    var val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase$2(key)] = val;
    }
    return acc;
  }, {});
}
function generate$2(node2, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2({
      key
    }, normalizeAttrs$1(node2.attrs)), (node2.children || []).map(function(child, index2) {
      return generate$2(child, "".concat(key, "-").concat(node2.tag, "-").concat(index2));
    }));
  }
  return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2(_objectSpread2({
    key
  }, normalizeAttrs$1(node2.attrs)), rootProps), (node2.children || []).map(function(child, index2) {
    return generate$2(child, "".concat(key, "-").concat(node2.tag, "-").concat(index2));
  }));
}
function getSecondaryColor$1(primaryColor) {
  return generate$3(primaryColor)[0];
}
function normalizeTwoToneColors$1(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles$1 = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles$1 = function useInsertStyles(eleRef) {
  var _useContext = reactExports.useContext(Context$3), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
  var mergedStyleStr = iconStyles$1;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  reactExports.useEffect(function() {
    var ele = eleRef.current;
    var shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, "@ant-design-icons", {
      prepend: true,
      csp,
      attachTo: shadowRoot
    });
  }, []);
};
var _excluded$k = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette$1 = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors$1(_ref) {
  var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
  twoToneColorPalette$1.primaryColor = primaryColor;
  twoToneColorPalette$1.secondaryColor = secondaryColor || getSecondaryColor$1(primaryColor);
  twoToneColorPalette$1.calculated = !!secondaryColor;
}
function getTwoToneColors$1() {
  return _objectSpread2({}, twoToneColorPalette$1);
}
var IconBase$1 = function IconBase(props) {
  var icon = props.icon, className = props.className, onClick = props.onClick, style2 = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded$k);
  var svgRef = reactExports.useRef();
  var colors = twoToneColorPalette$1;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor$1(primaryColor)
    };
  }
  useInsertStyles$1(svgRef);
  warning$2(isIconDefinition$1(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition$1(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === "function") {
    target = _objectSpread2(_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate$2(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
    className,
    onClick,
    style: style2,
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, restProps), {}, {
    ref: svgRef
  }));
};
IconBase$1.displayName = "IconReact";
IconBase$1.getTwoToneColors = getTwoToneColors$1;
IconBase$1.setTwoToneColors = setTwoToneColors$1;
const ReactIcon$1 = IconBase$1;
function setTwoToneColor$1(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors$1(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return ReactIcon$1.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor$1() {
  var colors = ReactIcon$1.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}
var _excluded$j = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
setTwoToneColor$1(blue.primary);
var Icon$1 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var _classNames;
  var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded$j);
  var _React$useContext = reactExports.useContext(Context$3), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
  var classString = classNames(rootClassName, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), _classNames), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors$1(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return /* @__PURE__ */ reactExports.createElement("span", _extends$1({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), /* @__PURE__ */ reactExports.createElement(ReactIcon$1, {
    icon,
    primaryColor,
    secondaryColor,
    style: svgStyle
  }));
});
Icon$1.displayName = "AntdIcon";
Icon$1.getTwoToneColor = getTwoToneColor$1;
Icon$1.setTwoToneColor = setTwoToneColor$1;
const AntdIcon$1 = Icon$1;
var CloseCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };
const CloseCircleFilledSvg = CloseCircleFilled$2;
var CloseCircleFilled = function CloseCircleFilled2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon$1, _extends$1({}, props, {
    ref,
    icon: CloseCircleFilledSvg
  }));
};
const CloseCircleFilled$1 = /* @__PURE__ */ reactExports.forwardRef(CloseCircleFilled);
var CloseOutlined$2 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };
const CloseOutlinedSvg = CloseOutlined$2;
var CloseOutlined = function CloseOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon$1, _extends$1({}, props, {
    ref,
    icon: CloseOutlinedSvg
  }));
};
const CloseOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(CloseOutlined);
var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
var ariaPrefix = "aria-";
var dataPrefix = "data-";
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _objectSpread2({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function(key) {
    if (
      // Aria
      mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
      mergedConfig.data && match(key, dataPrefix) || // Attr
      mergedConfig.attr && propList.includes(key)
    ) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}
const {
  isValidElement
} = React$1;
function isFragment(child) {
  return child && isValidElement(child) && child.type === reactExports.Fragment;
}
function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) {
    return replacement;
  }
  return /* @__PURE__ */ reactExports.cloneElement(element, typeof props === "function" ? props(element.props || {}) : props);
}
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}
const useCSSVarCls = (prefixCls) => {
  const [, , , , cssVar] = useToken();
  return cssVar ? `${prefixCls}-css-var` : "";
};
const useCSSVarCls$1 = useCSSVarCls;
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e2) {
    var keyCode = e2.keyCode;
    if (e2.altKey && !e2.ctrlKey || e2.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
var LoadingOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
const LoadingOutlinedSvg = LoadingOutlined$2;
var LoadingOutlined = function LoadingOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon$1, _extends$1({}, props, {
    ref,
    icon: LoadingOutlinedSvg
  }));
};
const LoadingOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(LoadingOutlined);
const zIndexContext = /* @__PURE__ */ React.createContext(void 0);
const zIndexContext$1 = zIndexContext;
const CONTAINER_OFFSET = 100;
const CONTAINER_OFFSET_MAX_COUNT = 10;
const CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
const containerBaseZIndexOffset = {
  Modal: CONTAINER_OFFSET,
  Drawer: CONTAINER_OFFSET,
  Popover: CONTAINER_OFFSET,
  Popconfirm: CONTAINER_OFFSET,
  Tooltip: CONTAINER_OFFSET,
  Tour: CONTAINER_OFFSET
};
const consumerBaseZIndexOffset = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function isContainerType(type4) {
  return type4 in containerBaseZIndexOffset;
}
function useZIndex(componentType, customZIndex) {
  const [, token2] = useToken();
  const parentZIndex = React.useContext(zIndexContext$1);
  const isContainer = isContainerType(componentType);
  if (customZIndex !== void 0) {
    return [customZIndex, customZIndex];
  }
  let zIndex = parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
  if (isContainer) {
    zIndex += // Use preset token zIndex by default but not stack when has parent container
    (parentZIndex ? 0 : token2.zIndexPopupBase) + // Container offset
    containerBaseZIndexOffset[componentType];
    zIndex = Math.min(zIndex, token2.zIndexPopupBase + CONTAINER_MAX_OFFSET);
  } else {
    zIndex += consumerBaseZIndexOffset[componentType];
  }
  return [parentZIndex === void 0 ? customZIndex : zIndex, zIndex];
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function _regeneratorRuntime2() {
    return e2;
  };
  var t2, e2 = {}, r = Object.prototype, n2 = r.hasOwnProperty, o = Object.defineProperty || function(t3, e3, r2) {
    t3[e3] = r2.value;
  }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c2 = i.asyncIterator || "@@asyncIterator", u2 = i.toStringTag || "@@toStringTag";
  function define(t3, e3, r2) {
    return Object.defineProperty(t3, e3, {
      value: r2,
      enumerable: true,
      configurable: true,
      writable: true
    }), t3[e3];
  }
  try {
    define({}, "");
  } catch (t3) {
    define = function define2(t4, e3, r2) {
      return t4[e3] = r2;
    };
  }
  function wrap(t3, e3, r2, n3) {
    var i2 = e3 && e3.prototype instanceof Generator ? e3 : Generator, a2 = Object.create(i2.prototype), c3 = new Context2(n3 || []);
    return o(a2, "_invoke", {
      value: makeInvokeMethod(t3, r2, c3)
    }), a2;
  }
  function tryCatch(t3, e3, r2) {
    try {
      return {
        type: "normal",
        arg: t3.call(e3, r2)
      };
    } catch (t4) {
      return {
        type: "throw",
        arg: t4
      };
    }
  }
  e2.wrap = wrap;
  var h2 = "suspendedStart", l2 = "suspendedYield", f2 = "executing", s = "completed", y = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  var p2 = {};
  define(p2, a, function() {
    return this;
  });
  var d2 = Object.getPrototypeOf, v2 = d2 && d2(d2(values([])));
  v2 && v2 !== r && n2.call(v2, a) && (p2 = v2);
  var g2 = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p2);
  function defineIteratorMethods(t3) {
    ["next", "throw", "return"].forEach(function(e3) {
      define(t3, e3, function(t4) {
        return this._invoke(e3, t4);
      });
    });
  }
  function AsyncIterator(t3, e3) {
    function invoke(r3, o2, i2, a2) {
      var c3 = tryCatch(t3[r3], t3, o2);
      if ("throw" !== c3.type) {
        var u3 = c3.arg, h3 = u3.value;
        return h3 && "object" == _typeof(h3) && n2.call(h3, "__await") ? e3.resolve(h3.__await).then(function(t4) {
          invoke("next", t4, i2, a2);
        }, function(t4) {
          invoke("throw", t4, i2, a2);
        }) : e3.resolve(h3).then(function(t4) {
          u3.value = t4, i2(u3);
        }, function(t4) {
          return invoke("throw", t4, i2, a2);
        });
      }
      a2(c3.arg);
    }
    var r2;
    o(this, "_invoke", {
      value: function value(t4, n3) {
        function callInvokeWithMethodAndArg() {
          return new e3(function(e4, r3) {
            invoke(t4, n3, e4, r3);
          });
        }
        return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e3, r2, n3) {
    var o2 = h2;
    return function(i2, a2) {
      if (o2 === f2)
        throw new Error("Generator is already running");
      if (o2 === s) {
        if ("throw" === i2)
          throw a2;
        return {
          value: t2,
          done: true
        };
      }
      for (n3.method = i2, n3.arg = a2; ; ) {
        var c3 = n3.delegate;
        if (c3) {
          var u3 = maybeInvokeDelegate(c3, n3);
          if (u3) {
            if (u3 === y)
              continue;
            return u3;
          }
        }
        if ("next" === n3.method)
          n3.sent = n3._sent = n3.arg;
        else if ("throw" === n3.method) {
          if (o2 === h2)
            throw o2 = s, n3.arg;
          n3.dispatchException(n3.arg);
        } else
          "return" === n3.method && n3.abrupt("return", n3.arg);
        o2 = f2;
        var p3 = tryCatch(e3, r2, n3);
        if ("normal" === p3.type) {
          if (o2 = n3.done ? s : l2, p3.arg === y)
            continue;
          return {
            value: p3.arg,
            done: n3.done
          };
        }
        "throw" === p3.type && (o2 = s, n3.method = "throw", n3.arg = p3.arg);
      }
    };
  }
  function maybeInvokeDelegate(e3, r2) {
    var n3 = r2.method, o2 = e3.iterator[n3];
    if (o2 === t2)
      return r2.delegate = null, "throw" === n3 && e3.iterator["return"] && (r2.method = "return", r2.arg = t2, maybeInvokeDelegate(e3, r2), "throw" === r2.method) || "return" !== n3 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y;
    var i2 = tryCatch(o2, e3.iterator, r2.arg);
    if ("throw" === i2.type)
      return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
    var a2 = i2.arg;
    return a2 ? a2.done ? (r2[e3.resultName] = a2.value, r2.next = e3.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t2), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
  }
  function pushTryEntry(t3) {
    var e3 = {
      tryLoc: t3[0]
    };
    1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
  }
  function resetTryEntry(t3) {
    var e3 = t3.completion || {};
    e3.type = "normal", delete e3.arg, t3.completion = e3;
  }
  function Context2(t3) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t3.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(e3) {
    if (e3 || "" === e3) {
      var r2 = e3[a];
      if (r2)
        return r2.call(e3);
      if ("function" == typeof e3.next)
        return e3;
      if (!isNaN(e3.length)) {
        var o2 = -1, i2 = function next2() {
          for (; ++o2 < e3.length; )
            if (n2.call(e3, o2))
              return next2.value = e3[o2], next2.done = false, next2;
          return next2.value = t2, next2.done = true, next2;
        };
        return i2.next = i2;
      }
    }
    throw new TypeError(_typeof(e3) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g2, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u2, "GeneratorFunction"), e2.isGeneratorFunction = function(t3) {
    var e3 = "function" == typeof t3 && t3.constructor;
    return !!e3 && (e3 === GeneratorFunction || "GeneratorFunction" === (e3.displayName || e3.name));
  }, e2.mark = function(t3) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t3, GeneratorFunctionPrototype) : (t3.__proto__ = GeneratorFunctionPrototype, define(t3, u2, "GeneratorFunction")), t3.prototype = Object.create(g2), t3;
  }, e2.awrap = function(t3) {
    return {
      __await: t3
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c2, function() {
    return this;
  }), e2.AsyncIterator = AsyncIterator, e2.async = function(t3, r2, n3, o2, i2) {
    void 0 === i2 && (i2 = Promise);
    var a2 = new AsyncIterator(wrap(t3, r2, n3, o2), i2);
    return e2.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t4) {
      return t4.done ? t4.value : a2.next();
    });
  }, defineIteratorMethods(g2), define(g2, u2, "Generator"), define(g2, a, function() {
    return this;
  }), define(g2, "toString", function() {
    return "[object Generator]";
  }), e2.keys = function(t3) {
    var e3 = Object(t3), r2 = [];
    for (var n3 in e3)
      r2.push(n3);
    return r2.reverse(), function next2() {
      for (; r2.length; ) {
        var t4 = r2.pop();
        if (t4 in e3)
          return next2.value = t4, next2.done = false, next2;
      }
      return next2.done = true, next2;
    };
  }, e2.values = values, Context2.prototype = {
    constructor: Context2,
    reset: function reset(e3) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t2, this.done = false, this.delegate = null, this.method = "next", this.arg = t2, this.tryEntries.forEach(resetTryEntry), !e3)
        for (var r2 in this)
          "t" === r2.charAt(0) && n2.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t2);
    },
    stop: function stop() {
      this.done = true;
      var t3 = this.tryEntries[0].completion;
      if ("throw" === t3.type)
        throw t3.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e3) {
      if (this.done)
        throw e3;
      var r2 = this;
      function handle(n3, o3) {
        return a2.type = "throw", a2.arg = e3, r2.next = n3, o3 && (r2.method = "next", r2.arg = t2), !!o3;
      }
      for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
        var i2 = this.tryEntries[o2], a2 = i2.completion;
        if ("root" === i2.tryLoc)
          return handle("end");
        if (i2.tryLoc <= this.prev) {
          var c3 = n2.call(i2, "catchLoc"), u3 = n2.call(i2, "finallyLoc");
          if (c3 && u3) {
            if (this.prev < i2.catchLoc)
              return handle(i2.catchLoc, true);
            if (this.prev < i2.finallyLoc)
              return handle(i2.finallyLoc);
          } else if (c3) {
            if (this.prev < i2.catchLoc)
              return handle(i2.catchLoc, true);
          } else {
            if (!u3)
              throw new Error("try statement without catch or finally");
            if (this.prev < i2.finallyLoc)
              return handle(i2.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t3, e3) {
      for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
        var o2 = this.tryEntries[r2];
        if (o2.tryLoc <= this.prev && n2.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
          var i2 = o2;
          break;
        }
      }
      i2 && ("break" === t3 || "continue" === t3) && i2.tryLoc <= e3 && e3 <= i2.finallyLoc && (i2 = null);
      var a2 = i2 ? i2.completion : {};
      return a2.type = t3, a2.arg = e3, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
    },
    complete: function complete(t3, e3) {
      if ("throw" === t3.type)
        throw t3.arg;
      return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e3 && (this.next = e3), y;
    },
    finish: function finish(t3) {
      for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
        var r2 = this.tryEntries[e3];
        if (r2.finallyLoc === t3)
          return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
      }
    },
    "catch": function _catch(t3) {
      for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
        var r2 = this.tryEntries[e3];
        if (r2.tryLoc === t3) {
          var n3 = r2.completion;
          if ("throw" === n3.type) {
            var o2 = n3.arg;
            resetTryEntry(r2);
          }
          return o2;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e3, r2, n3) {
      return this.delegate = {
        iterator: values(e3),
        resultName: r2,
        nextLoc: n3
      }, "next" === this.method && (this.arg = t2), y;
    }
  }, e2;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var fullClone = _objectSpread2({}, ReactDOM$1);
var version = fullClone.version, reactRender = fullClone.render, unmountComponentAtNode = fullClone.unmountComponentAtNode;
var createRoot;
try {
  var mainVersion = Number((version || "").split(".")[0]);
  if (mainVersion >= 18) {
    createRoot = fullClone.createRoot;
  }
} catch (e2) {
}
function toggleWarning(skip) {
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && _typeof(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === "object") {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}
var MARK = "__rc_react_root__";
function modernRender(node2, container) {
  toggleWarning(true);
  var root2 = container[MARK] || createRoot(container);
  toggleWarning(false);
  root2.render(node2);
  container[MARK] = root2;
}
function legacyRender(node2, container) {
  reactRender(node2, container);
}
function render(node2, container) {
  if (createRoot) {
    modernRender(node2, container);
    return;
  }
  legacyRender(node2, container);
}
function modernUnmount(_x) {
  return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
  _modernUnmount = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(container) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1)
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Promise.resolve().then(function() {
              var _container$MARK;
              (_container$MARK = container[MARK]) === null || _container$MARK === void 0 || _container$MARK.unmount();
              delete container[MARK];
            }));
          case 1:
          case "end":
            return _context.stop();
        }
    }, _callee);
  }));
  return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
  unmountComponentAtNode(container);
}
function unmount(_x2) {
  return _unmount.apply(this, arguments);
}
function _unmount() {
  _unmount = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(container) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1)
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(createRoot !== void 0)) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return", modernUnmount(container));
          case 2:
            legacyUnmount(container);
          case 3:
          case "end":
            return _context2.stop();
        }
    }, _callee2);
  }));
  return _unmount.apply(this, arguments);
}
const getCollapsedHeight = () => ({
  height: 0,
  opacity: 0
});
const getRealHeight = (node2) => {
  const {
    scrollHeight
  } = node2;
  return {
    height: scrollHeight,
    opacity: 1
  };
};
const getCurrentHeight = (node2) => ({
  height: node2 ? node2.offsetHeight : 0
});
const skipOpacityTransition = (_, event) => (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === "height";
const initCollapseMotion = function() {
  let rootCls = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant";
  return {
    motionName: `${rootCls}-motion-collapse`,
    onAppearStart: getCollapsedHeight,
    onEnterStart: getCollapsedHeight,
    onAppearActive: getRealHeight,
    onEnterActive: getRealHeight,
    onLeaveStart: getCurrentHeight,
    onLeaveActive: getCollapsedHeight,
    onAppearEnd: skipOpacityTransition,
    onEnterEnd: skipOpacityTransition,
    onLeaveEnd: skipOpacityTransition,
    motionDeadline: 500
  };
};
const getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== void 0) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};
const isVisible = function(element) {
  if (!element) {
    return false;
  }
  if (element instanceof Element) {
    if (element.offsetParent) {
      return true;
    }
    if (element.getBBox) {
      var _getBBox = element.getBBox(), width = _getBBox.width, height = _getBBox.height;
      if (width || height) {
        return true;
      }
    }
    if (element.getBoundingClientRect) {
      var _element$getBoundingC = element.getBoundingClientRect(), _width = _element$getBoundingC.width, _height = _element$getBoundingC.height;
      if (_width || _height) {
        return true;
      }
    }
  }
  return false;
};
const genWaveStyle = (token2) => {
  const {
    componentCls,
    colorPrimary
  } = token2;
  return {
    [componentCls]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${token2.motionEaseOutCirc}`, `opacity 2s ${token2.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow 0.3s ${token2.motionEaseInOut}`, `opacity 0.35s ${token2.motionEaseInOut}`].join(",")
        }
      }
    }
  };
};
const useStyle$4 = genComponentStyleHook("Wave", (token2) => [genWaveStyle(token2)]);
function isNotGrey(color) {
  const match2 = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match2 && match2[1] && match2[2] && match2[3]) {
    return !(match2[1] === match2[2] && match2[2] === match2[3]);
  }
  return true;
}
function isValidWaveColor(color) {
  return color && color !== "#fff" && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && color !== "rgba(255, 255, 255, 1)" && isNotGrey(color) && !/rgba\((?:\d*, ){3}0\)/.test(color) && // any transparent rgba color
  color !== "transparent";
}
function getTargetWaveColor(node2) {
  const {
    borderTopColor,
    borderColor,
    backgroundColor
  } = getComputedStyle(node2);
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  if (isValidWaveColor(backgroundColor)) {
    return backgroundColor;
  }
  return null;
}
const TARGET_CLS = "ant-wave-target";
function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = (props) => {
  const {
    className,
    target,
    component
  } = props;
  const divRef = reactExports.useRef(null);
  const [color, setWaveColor] = reactExports.useState(null);
  const [borderRadius, setBorderRadius] = reactExports.useState([]);
  const [left, setLeft] = reactExports.useState(0);
  const [top, setTop] = reactExports.useState(0);
  const [width, setWidth] = reactExports.useState(0);
  const [height, setHeight] = reactExports.useState(0);
  const [enabled, setEnabled] = reactExports.useState(false);
  const waveStyle = {
    left,
    top,
    width,
    height,
    borderRadius: borderRadius.map((radius) => `${radius}px`).join(" ")
  };
  if (color) {
    waveStyle["--wave-color"] = color;
  }
  function syncPos() {
    const nodeStyle = getComputedStyle(target);
    setWaveColor(getTargetWaveColor(target));
    const isStatic = nodeStyle.position === "static";
    const {
      borderLeftWidth,
      borderTopWidth
    } = nodeStyle;
    setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
    setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
    setWidth(target.offsetWidth);
    setHeight(target.offsetHeight);
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = nodeStyle;
    setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map((radius) => validateNum(parseFloat(radius))));
  }
  reactExports.useEffect(() => {
    if (target) {
      const id = wrapperRaf(() => {
        syncPos();
        setEnabled(true);
      });
      let resizeObserver2;
      if (typeof ResizeObserver !== "undefined") {
        resizeObserver2 = new ResizeObserver(syncPos);
        resizeObserver2.observe(target);
      }
      return () => {
        wrapperRaf.cancel(id);
        resizeObserver2 === null || resizeObserver2 === void 0 ? void 0 : resizeObserver2.disconnect();
      };
    }
  }, []);
  if (!enabled) {
    return null;
  }
  const isSmallComponent = (component === "Checkbox" || component === "Radio") && (target === null || target === void 0 ? void 0 : target.classList.contains(TARGET_CLS));
  return /* @__PURE__ */ reactExports.createElement(CSSMotion, {
    visible: true,
    motionAppear: true,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (_, event) => {
      var _a;
      if (event.deadline || event.propertyName === "opacity") {
        const holder = (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
        unmount(holder).then(() => {
          holder === null || holder === void 0 ? void 0 : holder.remove();
        });
      }
      return false;
    }
  }, (_ref) => {
    let {
      className: motionClassName
    } = _ref;
    return /* @__PURE__ */ reactExports.createElement("div", {
      ref: divRef,
      className: classNames(className, {
        "wave-quick": isSmallComponent
      }, motionClassName),
      style: waveStyle
    });
  });
};
const showWaveEffect = (target, info) => {
  var _a;
  const {
    component
  } = info;
  if (component === "Checkbox" && !((_a = target.querySelector("input")) === null || _a === void 0 ? void 0 : _a.checked)) {
    return;
  }
  const holder = document.createElement("div");
  holder.style.position = "absolute";
  holder.style.left = "0px";
  holder.style.top = "0px";
  target === null || target === void 0 ? void 0 : target.insertBefore(holder, target === null || target === void 0 ? void 0 : target.firstChild);
  render(/* @__PURE__ */ reactExports.createElement(WaveEffect, Object.assign({}, info, {
    target
  })), holder);
};
const showWaveEffect$1 = showWaveEffect;
function useWave(nodeRef, className, component) {
  const {
    wave
  } = reactExports.useContext(ConfigContext);
  const [, token2, hashId] = useToken();
  const showWave = useEvent((event) => {
    const node2 = nodeRef.current;
    if ((wave === null || wave === void 0 ? void 0 : wave.disabled) || !node2) {
      return;
    }
    const targetNode = node2.querySelector(`.${TARGET_CLS}`) || node2;
    const {
      showEffect
    } = wave || {};
    (showEffect || showWaveEffect$1)(targetNode, {
      className,
      token: token2,
      component,
      event,
      hashId
    });
  });
  const rafId = reactExports.useRef();
  const showDebounceWave = (event) => {
    wrapperRaf.cancel(rafId.current);
    rafId.current = wrapperRaf(() => {
      showWave(event);
    });
  };
  return showDebounceWave;
}
const Wave = (props) => {
  const {
    children,
    disabled,
    component
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const containerRef = reactExports.useRef(null);
  const prefixCls = getPrefixCls("wave");
  const [, hashId] = useStyle$4(prefixCls);
  const showWave = useWave(containerRef, classNames(prefixCls, hashId), component);
  React.useEffect(() => {
    const node2 = containerRef.current;
    if (!node2 || node2.nodeType !== 1 || disabled) {
      return;
    }
    const onClick = (e2) => {
      if (!isVisible(e2.target) || // No need wave
      !node2.getAttribute || node2.getAttribute("disabled") || node2.disabled || node2.className.includes("disabled") || node2.className.includes("-leave")) {
        return;
      }
      showWave(e2);
    };
    node2.addEventListener("click", onClick, true);
    return () => {
      node2.removeEventListener("click", onClick, true);
    };
  }, [disabled]);
  if (!/* @__PURE__ */ React.isValidElement(children)) {
    return children !== null && children !== void 0 ? children : null;
  }
  const ref = supportRef(children) ? composeRef(children.ref, containerRef) : containerRef;
  return cloneElement(children, {
    ref
  });
};
const Wave$1 = Wave;
const useSize = (customSize) => {
  const size = React.useContext(SizeContext$1);
  const mergedSize = React.useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (typeof customSize === "string") {
      return customSize !== null && customSize !== void 0 ? customSize : size;
    }
    if (customSize instanceof Function) {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
const useSize$1 = useSize;
const genSpaceCompactStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [componentCls]: {
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
};
const genSpaceCompactStyle$1 = genSpaceCompactStyle;
const genSpaceStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${componentCls}-item:empty`]: {
        display: "none"
      }
    }
  };
};
const genSpaceGapStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [componentCls]: {
      "&-gap-row-small": {
        rowGap: token2.spaceGapSmallSize
      },
      "&-gap-row-middle": {
        rowGap: token2.spaceGapMiddleSize
      },
      "&-gap-row-large": {
        rowGap: token2.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: token2.spaceGapSmallSize
      },
      "&-gap-col-middle": {
        columnGap: token2.spaceGapMiddleSize
      },
      "&-gap-col-large": {
        columnGap: token2.spaceGapLargeSize
      }
    }
  };
};
const useStyle$3 = genStyleHooks("Space", (token2) => {
  const spaceToken = merge(token2, {
    spaceGapSmallSize: token2.paddingXS,
    spaceGapMiddleSize: token2.padding,
    spaceGapLargeSize: token2.paddingLG
  });
  return [genSpaceStyle(spaceToken), genSpaceGapStyle(spaceToken), genSpaceCompactStyle$1(spaceToken)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: false
});
var __rest$8 = function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
const SpaceCompactItemContext = /* @__PURE__ */ reactExports.createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = reactExports.useContext(SpaceCompactItemContext);
  const compactItemClassnames = reactExports.useMemo(() => {
    if (!compactItemContext) {
      return "";
    }
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return classNames(`${prefixCls}-compact${separator}item`, {
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls}-compact${separator}item-rtl`]: direction === "rtl"
    });
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames
  };
};
const NoCompactStyle = (_ref) => {
  let {
    children
  } = _ref;
  return /* @__PURE__ */ reactExports.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
const CompactItem = (_a) => {
  var {
    children
  } = _a, otherProps = __rest$8(_a, ["children"]);
  return /* @__PURE__ */ reactExports.createElement(SpaceCompactItemContext.Provider, {
    value: otherProps
  }, children);
};
const Compact = (props) => {
  const {
    getPrefixCls,
    direction: directionConfig
  } = reactExports.useContext(ConfigContext);
  const {
    size,
    direction,
    block,
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children
  } = props, restProps = __rest$8(props, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]);
  const mergedSize = useSize$1((ctx) => size !== null && size !== void 0 ? size : ctx);
  const prefixCls = getPrefixCls("space-compact", customizePrefixCls);
  const [wrapCSSVar, hashId] = useStyle$3(prefixCls);
  const clx = classNames(prefixCls, hashId, {
    [`${prefixCls}-rtl`]: directionConfig === "rtl",
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-vertical`]: direction === "vertical"
  }, className, rootClassName);
  const compactItemContext = reactExports.useContext(SpaceCompactItemContext);
  const childNodes = toArray$3(children);
  const nodes = reactExports.useMemo(() => childNodes.map((child, i) => {
    const key = child && child.key || `${prefixCls}-item-${i}`;
    return /* @__PURE__ */ reactExports.createElement(CompactItem, {
      key,
      compactSize: mergedSize,
      compactDirection: direction,
      isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
      isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
    }, child);
  }), [size, childNodes, compactItemContext]);
  if (childNodes.length === 0) {
    return null;
  }
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("div", Object.assign({
    className: clx
  }, restProps), nodes));
};
var __rest$7 = function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
const GroupSizeContext = /* @__PURE__ */ reactExports.createContext(void 0);
const ButtonGroup = (props) => {
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    size,
    className
  } = props, others = __rest$7(props, ["prefixCls", "size", "className"]);
  const prefixCls = getPrefixCls("btn-group", customizePrefixCls);
  const [, , hashId] = useToken();
  let sizeCls = "";
  switch (size) {
    case "large":
      sizeCls = "lg";
      break;
    case "small":
      sizeCls = "sm";
      break;
  }
  const classes = classNames(prefixCls, {
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, hashId);
  return /* @__PURE__ */ reactExports.createElement(GroupSizeContext.Provider, {
    value: size
  }, /* @__PURE__ */ reactExports.createElement("div", Object.assign({}, others, {
    className: classes
  })));
};
const Group$2 = ButtonGroup;
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function convertLegacyProps(type4) {
  if (type4 === "danger") {
    return {
      danger: true
    };
  }
  return {
    type: type4
  };
}
function isString(str) {
  return typeof str === "string";
}
function isUnBorderedButtonType(type4) {
  return type4 === "text" || type4 === "link";
}
function splitCNCharsBySpace(child, needInserted) {
  if (child === null || child === void 0) {
    return;
  }
  const SPACE = needInserted ? " " : "";
  if (typeof child !== "string" && typeof child !== "number" && isString(child.type) && isTwoCNChar(child.props.children)) {
    return cloneElement(child, {
      children: child.props.children.split("").join(SPACE)
    });
  }
  if (isString(child)) {
    return isTwoCNChar(child) ? /* @__PURE__ */ React.createElement("span", null, child.split("").join(SPACE)) : /* @__PURE__ */ React.createElement("span", null, child);
  }
  if (isFragment(child)) {
    return /* @__PURE__ */ React.createElement("span", null, child);
  }
  return child;
}
function spaceChildren(children, needInserted) {
  let isPrevChildPure = false;
  const childList = [];
  React.Children.forEach(children, (child) => {
    const type4 = typeof child;
    const isCurrentChildPure = type4 === "string" || type4 === "number";
    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex];
      childList[lastIndex] = `${lastChild}${child}`;
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return React.Children.map(childList, (child) => splitCNCharsBySpace(child, needInserted));
}
const IconWrapper = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    className,
    style: style2,
    children,
    prefixCls
  } = props;
  const iconWrapperCls = classNames(`${prefixCls}-icon`, className);
  return /* @__PURE__ */ React.createElement("span", {
    ref,
    className: iconWrapperCls,
    style: style2
  }, children);
});
const IconWrapper$1 = IconWrapper;
const InnerLoadingIcon = /* @__PURE__ */ reactExports.forwardRef((_ref, ref) => {
  let {
    prefixCls,
    className,
    style: style2,
    iconClassName
  } = _ref;
  const mergedIconCls = classNames(`${prefixCls}-loading-icon`, className);
  return /* @__PURE__ */ React.createElement(IconWrapper$1, {
    prefixCls,
    className: mergedIconCls,
    style: style2,
    ref
  }, /* @__PURE__ */ React.createElement(LoadingOutlined$1, {
    className: iconClassName
  }));
});
const getCollapsedWidth = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
});
const getRealWidth = (node2) => ({
  width: node2.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
});
const LoadingIcon = (props) => {
  const {
    prefixCls,
    loading: loading2,
    existIcon,
    className,
    style: style2
  } = props;
  const visible = !!loading2;
  if (existIcon) {
    return /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
      prefixCls,
      className,
      style: style2
    });
  }
  return /* @__PURE__ */ React.createElement(CSSMotion, {
    visible,
    // We do not really use this motionName
    motionName: `${prefixCls}-loading-icon-motion`,
    motionLeave: visible,
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, (_ref2, ref) => {
    let {
      className: motionCls,
      style: motionStyle
    } = _ref2;
    return /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
      prefixCls,
      className,
      style: Object.assign(Object.assign({}, style2), motionStyle),
      ref,
      iconClassName: motionCls
    });
  });
};
const LoadingIcon$1 = LoadingIcon;
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    "&:not(:last-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: borderColor
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle$1 = (token2) => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    groupBorderColor,
    colorErrorHover
  } = token2;
  return {
    [`${componentCls}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${componentCls}`]: {
          "&:not(:last-child)": {
            [`&, & > ${componentCls}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: token2.calc(lineWidth).mul(-1).equal(),
            [`&, & > ${componentCls}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [componentCls]: {
          position: "relative",
          zIndex: 1,
          [`&:hover,
          &:focus,
          &:active`]: {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${componentCls}-icon-only`]: {
          fontSize
        }
      },
      // Border Color
      genButtonBorderStyle(`${componentCls}-primary`, groupBorderColor),
      genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
    ]
  };
};
const genGroupStyle$2 = genGroupStyle$1;
const genSharedButtonStyle = (token2) => {
  const {
    componentCls,
    iconCls,
    fontWeight
  } = token2;
  return {
    [componentCls]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${unit$1(token2.lineWidth)} ${token2.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${token2.motionDurationMid} ${token2.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: token2.lineHeight,
      color: token2.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        display: "inline-block"
      },
      [`${componentCls}-icon`]: {
        lineHeight: 0
      },
      // Leave a space between icon and text.
      [`> ${iconCls} + span, > span + ${iconCls}`]: {
        marginInlineStart: token2.marginXS
      },
      [`&:not(${componentCls}-icon-only) > ${componentCls}-icon`]: {
        [`&${componentCls}-loading-icon, &:not(:last-child)`]: {
          marginInlineEnd: token2.marginXS
        }
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, genFocusStyle(token2)),
      [`&${componentCls}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${componentCls}-two-chinese-chars > *:not(${iconCls})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      // make `btn-icon-only` not too narrow
      [`&-icon-only${componentCls}-compact-item`]: {
        flex: "none"
      }
    }
  };
};
const genHoverActiveButtonStyle = (btnCls, hoverStyle, activeStyle) => ({
  [`&:not(:disabled):not(${btnCls}-disabled)`]: {
    "&:hover": hoverStyle,
    "&:active": activeStyle
  }
});
const genCircleButtonStyle = (token2) => ({
  minWidth: token2.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
});
const genRoundButtonStyle = (token2) => ({
  borderRadius: token2.controlHeight,
  paddingInlineStart: token2.calc(token2.controlHeight).div(2).equal(),
  paddingInlineEnd: token2.calc(token2.controlHeight).div(2).equal()
});
const genDisabledStyle$1 = (token2) => ({
  cursor: "not-allowed",
  borderColor: token2.borderColorDisabled,
  color: token2.colorTextDisabled,
  background: token2.colorBgContainerDisabled,
  boxShadow: "none"
});
const genGhostButtonStyle = (btnCls, background, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: Object.assign(Object.assign({
    color: textColor || void 0,
    background,
    borderColor: borderColor || void 0,
    boxShadow: "none"
  }, genHoverActiveButtonStyle(btnCls, Object.assign({
    background
  }, hoverStyle), Object.assign({
    background
  }, activeStyle))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: textColorDisabled || void 0,
      borderColor: borderColorDisabled || void 0
    }
  })
});
const genSolidDisabledButtonStyle = (token2) => ({
  [`&:disabled, &${token2.componentCls}-disabled`]: Object.assign({}, genDisabledStyle$1(token2))
});
const genSolidButtonStyle = (token2) => Object.assign({}, genSolidDisabledButtonStyle(token2));
const genPureDisabledButtonStyle = (token2) => ({
  [`&:disabled, &${token2.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: token2.colorTextDisabled
  }
});
const genDefaultButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token2)), {
  background: token2.defaultBg,
  borderColor: token2.defaultBorderColor,
  color: token2.defaultColor,
  boxShadow: token2.defaultShadow
}), genHoverActiveButtonStyle(token2.componentCls, {
  color: token2.colorPrimaryHover,
  borderColor: token2.colorPrimaryHover
}, {
  color: token2.colorPrimaryActive,
  borderColor: token2.colorPrimaryActive
})), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.defaultGhostColor, token2.defaultGhostBorderColor, token2.colorTextDisabled, token2.colorBorder)), {
  [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: token2.colorError,
    borderColor: token2.colorError
  }, genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.colorErrorHover,
    borderColor: token2.colorErrorBorderHover
  }, {
    color: token2.colorErrorActive,
    borderColor: token2.colorErrorActive
  })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder)), genSolidDisabledButtonStyle(token2))
});
const genPrimaryButtonStyle = (token2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token2)), {
  color: token2.primaryColor,
  background: token2.colorPrimary,
  boxShadow: token2.primaryShadow
}), genHoverActiveButtonStyle(token2.componentCls, {
  color: token2.colorTextLightSolid,
  background: token2.colorPrimaryHover
}, {
  color: token2.colorTextLightSolid,
  background: token2.colorPrimaryActive
})), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorPrimary, token2.colorPrimary, token2.colorTextDisabled, token2.colorBorder, {
  color: token2.colorPrimaryHover,
  borderColor: token2.colorPrimaryHover
}, {
  color: token2.colorPrimaryActive,
  borderColor: token2.colorPrimaryActive
})), {
  [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    background: token2.colorError,
    boxShadow: token2.dangerShadow,
    color: token2.dangerColor
  }, genHoverActiveButtonStyle(token2.componentCls, {
    background: token2.colorErrorHover
  }, {
    background: token2.colorErrorActive
  })), genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorError, token2.colorError, token2.colorTextDisabled, token2.colorBorder, {
    color: token2.colorErrorHover,
    borderColor: token2.colorErrorHover
  }, {
    color: token2.colorErrorActive,
    borderColor: token2.colorErrorActive
  })), genSolidDisabledButtonStyle(token2))
});
const genDashedButtonStyle = (token2) => Object.assign(Object.assign({}, genDefaultButtonStyle(token2)), {
  borderStyle: "dashed"
});
const genLinkButtonStyle = (token2) => Object.assign(Object.assign(Object.assign({
  color: token2.colorLink
}, genHoverActiveButtonStyle(token2.componentCls, {
  color: token2.colorLinkHover,
  background: token2.linkHoverBg
}, {
  color: token2.colorLinkActive
})), genPureDisabledButtonStyle(token2)), {
  [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: token2.colorError
  }, genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.colorErrorHover
  }, {
    color: token2.colorErrorActive
  })), genPureDisabledButtonStyle(token2))
});
const genTextButtonStyle = (token2) => Object.assign(Object.assign(Object.assign({}, genHoverActiveButtonStyle(token2.componentCls, {
  color: token2.colorText,
  background: token2.textHoverBg
}, {
  color: token2.colorText,
  background: token2.colorBgTextActive
})), genPureDisabledButtonStyle(token2)), {
  [`&${token2.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: token2.colorError
  }, genPureDisabledButtonStyle(token2)), genHoverActiveButtonStyle(token2.componentCls, {
    color: token2.colorErrorHover,
    background: token2.colorErrorBg
  }, {
    color: token2.colorErrorHover,
    background: token2.colorErrorBg
  }))
});
const genTypeButtonStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [`${componentCls}-default`]: genDefaultButtonStyle(token2),
    [`${componentCls}-primary`]: genPrimaryButtonStyle(token2),
    [`${componentCls}-dashed`]: genDashedButtonStyle(token2),
    [`${componentCls}-link`]: genLinkButtonStyle(token2),
    [`${componentCls}-text`]: genTextButtonStyle(token2),
    [`${componentCls}-ghost`]: genGhostButtonStyle(token2.componentCls, token2.ghostBg, token2.colorBgContainer, token2.colorBgContainer, token2.colorTextDisabled, token2.colorBorder)
  };
};
const genSizeButtonStyle = function(token2) {
  let sizePrefixCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls,
    controlHeight,
    fontSize,
    borderRadius,
    buttonPaddingHorizontal,
    iconCls,
    buttonPaddingVertical
  } = token2;
  const iconOnlyCls = `${componentCls}-icon-only`;
  return [
    // Size
    {
      [`${componentCls}${sizePrefixCls}`]: {
        fontSize,
        height: controlHeight,
        padding: `${unit$1(buttonPaddingVertical)} ${unit$1(buttonPaddingHorizontal)}`,
        borderRadius,
        [`&${iconOnlyCls}`]: {
          width: controlHeight,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${componentCls}-round`]: {
            width: "auto"
          },
          [iconCls]: {
            fontSize: token2.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${componentCls}-loading`]: {
          opacity: token2.opacityLoading,
          cursor: "default"
        },
        [`${componentCls}-loading-icon`]: {
          transition: `width ${token2.motionDurationSlow} ${token2.motionEaseInOut}, opacity ${token2.motionDurationSlow} ${token2.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${componentCls}${componentCls}-circle${sizePrefixCls}`]: genCircleButtonStyle(token2)
    },
    {
      [`${componentCls}${componentCls}-round${sizePrefixCls}`]: genRoundButtonStyle(token2)
    }
  ];
};
const genSizeBaseButtonStyle = (token2) => genSizeButtonStyle(merge(token2, {
  fontSize: token2.contentFontSize
}));
const genSizeSmallButtonStyle = (token2) => {
  const smallToken = merge(token2, {
    controlHeight: token2.controlHeightSM,
    fontSize: token2.contentFontSizeSM,
    padding: token2.paddingXS,
    buttonPaddingHorizontal: token2.paddingInlineSM,
    buttonPaddingVertical: token2.paddingBlockSM,
    borderRadius: token2.borderRadiusSM,
    buttonIconOnlyFontSize: token2.onlyIconSizeSM
  });
  return genSizeButtonStyle(smallToken, `${token2.componentCls}-sm`);
};
const genSizeLargeButtonStyle = (token2) => {
  const largeToken = merge(token2, {
    controlHeight: token2.controlHeightLG,
    fontSize: token2.contentFontSizeLG,
    buttonPaddingHorizontal: token2.paddingInlineLG,
    buttonPaddingVertical: token2.paddingBlockLG,
    borderRadius: token2.borderRadiusLG,
    buttonIconOnlyFontSize: token2.onlyIconSizeLG
  });
  return genSizeButtonStyle(largeToken, `${token2.componentCls}-lg`);
};
const genBlockButtonStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: "100%"
      }
    }
  };
};
const prepareToken = (token2) => {
  const {
    paddingInline,
    onlyIconSize,
    paddingBlock
  } = token2;
  const buttonToken = merge(token2, {
    buttonPaddingHorizontal: paddingInline,
    buttonPaddingVertical: paddingBlock,
    buttonIconOnlyFontSize: onlyIconSize
  });
  return buttonToken;
};
const prepareComponentToken$1 = (token2) => {
  const contentFontSize = token2.fontSize;
  const contentFontSizeSM = token2.fontSize;
  const contentFontSizeLG = token2.fontSizeLG;
  return {
    fontWeight: 400,
    defaultShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlTmpOutline}`,
    primaryShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.controlOutline}`,
    dangerShadow: `0 ${token2.controlOutlineWidth}px 0 ${token2.colorErrorOutline}`,
    primaryColor: token2.colorTextLightSolid,
    dangerColor: token2.colorTextLightSolid,
    borderColorDisabled: token2.colorBorder,
    defaultGhostColor: token2.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: token2.colorBgContainer,
    paddingInline: token2.paddingContentHorizontal - token2.lineWidth,
    paddingInlineLG: token2.paddingContentHorizontal - token2.lineWidth,
    paddingInlineSM: 8 - token2.lineWidth,
    paddingBlock: Math.max((token2.controlHeight - contentFontSize * token2.lineHeight) / 2 - token2.lineWidth, 0),
    paddingBlockSM: Math.max((token2.controlHeightSM - contentFontSizeSM * token2.lineHeight) / 2 - token2.lineWidth, 0),
    paddingBlockLG: Math.max((token2.controlHeightLG - contentFontSizeLG * token2.lineHeight) / 2 - token2.lineWidth, 0),
    onlyIconSize: token2.fontSizeLG,
    onlyIconSizeSM: token2.fontSizeLG - 2,
    onlyIconSizeLG: token2.fontSizeLG + 2,
    groupBorderColor: token2.colorPrimaryHover,
    linkHoverBg: "transparent",
    textHoverBg: token2.colorBgTextHover,
    defaultColor: token2.colorText,
    defaultBg: token2.colorBgContainer,
    defaultBorderColor: token2.colorBorder,
    defaultBorderColorDisabled: token2.colorBorder,
    contentFontSize,
    contentFontSizeSM,
    contentFontSizeLG
  };
};
const useStyle$2 = genStyleHooks("Button", (token2) => {
  const buttonToken = prepareToken(token2);
  return [
    // Shared
    genSharedButtonStyle(buttonToken),
    // Size
    genSizeSmallButtonStyle(buttonToken),
    genSizeBaseButtonStyle(buttonToken),
    genSizeLargeButtonStyle(buttonToken),
    // Block
    genBlockButtonStyle(buttonToken),
    // Group (type, ghost, danger, loading)
    genTypeButtonStyle(buttonToken),
    // Button Group
    genGroupStyle$2(buttonToken)
  ];
}, prepareComponentToken$1, {
  unitless: {
    fontWeight: true
  }
});
function compactItemBorder(token2, parentCls, options2) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options2;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n2) => `&:${n2} ${childCombinator}`).join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: token2.calc(token2.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options2) {
  const {
    borderElCls
  } = options2;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token2) {
  let options2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token2;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token2, compactCls, options2)), compactItemBorderRadius(componentCls, compactCls, options2))
  };
}
function compactItemVerticalBorder(token2, parentCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: token2.calc(token2.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token2) {
  const compactCls = `${token2.componentCls}-compact-vertical`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemVerticalBorder(token2, compactCls)), compactItemBorderVerticalRadius(token2.componentCls, compactCls))
  };
}
const genButtonCompactStyle = (token2) => {
  const {
    componentCls,
    calc
  } = token2;
  return {
    [componentCls]: {
      // Special styles for Primary Button
      [`&-compact-item${componentCls}-primary`]: {
        [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: calc(token2.lineWidth).mul(-1).equal(),
            insetInlineStart: calc(token2.lineWidth).mul(-1).equal(),
            display: "inline-block",
            width: token2.lineWidth,
            height: `calc(100% + ${unit$1(token2.lineWidth)} * 2)`,
            backgroundColor: token2.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: calc(token2.lineWidth).mul(-1).equal(),
              insetInlineStart: calc(token2.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: `calc(100% + ${unit$1(token2.lineWidth)} * 2)`,
              height: token2.lineWidth,
              backgroundColor: token2.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
};
const CompactCmp = genSubStyleComponent(["Button", "compact"], (token2) => {
  const buttonToken = prepareToken(token2);
  return [
    // Space Compact
    genCompactItemStyle(buttonToken),
    genCompactItemVerticalStyle(buttonToken),
    genButtonCompactStyle(buttonToken)
  ];
}, prepareComponentToken$1);
var __rest$6 = function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
function getLoadingConfig(loading2) {
  if (typeof loading2 === "object" && loading2) {
    let delay = loading2 === null || loading2 === void 0 ? void 0 : loading2.delay;
    delay = !Number.isNaN(delay) && typeof delay === "number" ? delay : 0;
    return {
      loading: delay <= 0,
      delay
    };
  }
  return {
    loading: !!loading2,
    delay: 0
  };
}
const InternalButton = (props, ref) => {
  var _a, _b;
  const {
    loading: loading2 = false,
    prefixCls: customizePrefixCls,
    type: type4 = "default",
    danger,
    shape = "default",
    size: customizeSize,
    styles,
    disabled: customDisabled,
    className,
    rootClassName,
    children,
    icon,
    ghost = false,
    block = false,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType = "button",
    classNames: customClassNames,
    style: customStyle = {}
  } = props, rest = __rest$6(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]);
  const {
    getPrefixCls,
    autoInsertSpaceInButton,
    direction,
    button
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("btn", customizePrefixCls);
  const [wrapCSSVar, hashId] = useStyle$2(prefixCls);
  const disabled = reactExports.useContext(DisabledContext$1);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const groupSize = reactExports.useContext(GroupSizeContext);
  const loadingOrDelay = reactExports.useMemo(() => getLoadingConfig(loading2), [loading2]);
  const [innerLoading, setLoading] = reactExports.useState(loadingOrDelay.loading);
  const [hasTwoCNChar, setHasTwoCNChar] = reactExports.useState(false);
  const internalRef = /* @__PURE__ */ reactExports.createRef();
  const buttonRef = composeRef(ref, internalRef);
  const needInserted = reactExports.Children.count(children) === 1 && !icon && !isUnBorderedButtonType(type4);
  reactExports.useEffect(() => {
    let delayTimer = null;
    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null;
        setLoading(true);
      }, loadingOrDelay.delay);
    } else {
      setLoading(loadingOrDelay.loading);
    }
    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer);
        delayTimer = null;
      }
    }
    return cleanupTimer;
  }, [loadingOrDelay]);
  reactExports.useEffect(() => {
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }
    const buttonText = buttonRef.current.textContent;
    if (needInserted && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }, [buttonRef]);
  const handleClick = (e2) => {
    const {
      onClick
    } = props;
    if (innerLoading || mergedDisabled) {
      e2.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e2);
  };
  const autoInsertSpace = autoInsertSpaceInButton !== false;
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const sizeClassNameMap = {
    large: "lg",
    small: "sm",
    middle: void 0
  };
  const sizeFullName = useSize$1((ctxSize) => {
    var _a2, _b2;
    return (_b2 = (_a2 = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a2 !== void 0 ? _a2 : groupSize) !== null && _b2 !== void 0 ? _b2 : ctxSize;
  });
  const sizeCls = sizeFullName ? sizeClassNameMap[sizeFullName] || "" : "";
  const iconType = innerLoading ? "loading" : icon;
  const linkButtonRestProps = omit(rest, ["navigate"]);
  const classes = classNames(prefixCls, hashId, {
    [`${prefixCls}-${shape}`]: shape !== "default" && shape,
    [`${prefixCls}-${type4}`]: type4,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
    [`${prefixCls}-background-ghost`]: ghost && !isUnBorderedButtonType(type4),
    [`${prefixCls}-loading`]: innerLoading,
    [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && autoInsertSpace && !innerLoading,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-dangerous`]: !!danger,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, compactItemClassnames, className, rootClassName, button === null || button === void 0 ? void 0 : button.className);
  const fullStyle = Object.assign(Object.assign({}, button === null || button === void 0 ? void 0 : button.style), customStyle);
  const iconClasses = classNames(customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.icon, (_a = button === null || button === void 0 ? void 0 : button.classNames) === null || _a === void 0 ? void 0 : _a.icon);
  const iconStyle = Object.assign(Object.assign({}, (styles === null || styles === void 0 ? void 0 : styles.icon) || {}), ((_b = button === null || button === void 0 ? void 0 : button.styles) === null || _b === void 0 ? void 0 : _b.icon) || {});
  const iconNode = icon && !innerLoading ? /* @__PURE__ */ React.createElement(IconWrapper$1, {
    prefixCls,
    className: iconClasses,
    style: iconStyle
  }, icon) : /* @__PURE__ */ React.createElement(LoadingIcon$1, {
    existIcon: !!icon,
    prefixCls,
    loading: !!innerLoading
  });
  const kids = children || children === 0 ? spaceChildren(children, needInserted && autoInsertSpace) : null;
  if (linkButtonRestProps.href !== void 0) {
    return wrapCSSVar(/* @__PURE__ */ React.createElement("a", Object.assign({}, linkButtonRestProps, {
      className: classNames(classes, {
        [`${prefixCls}-disabled`]: mergedDisabled
      }),
      href: mergedDisabled ? void 0 : linkButtonRestProps.href,
      style: fullStyle,
      onClick: handleClick,
      ref: buttonRef,
      tabIndex: mergedDisabled ? -1 : 0
    }), iconNode, kids));
  }
  let buttonNode = /* @__PURE__ */ React.createElement("button", Object.assign({}, rest, {
    type: htmlType,
    className: classes,
    style: fullStyle,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: buttonRef
  }), iconNode, kids, compactItemClassnames && /* @__PURE__ */ React.createElement(CompactCmp, {
    key: "compact",
    prefixCls
  }));
  if (!isUnBorderedButtonType(type4)) {
    buttonNode = /* @__PURE__ */ React.createElement(Wave$1, {
      component: "Button",
      disabled: !!innerLoading
    }, buttonNode);
  }
  return wrapCSSVar(buttonNode);
};
const Button = /* @__PURE__ */ reactExports.forwardRef(InternalButton);
Button.Group = Group$2;
Button.__ANT_BUTTON = true;
const Button$1 = Button;
var OrderContext = /* @__PURE__ */ reactExports.createContext(null);
var EMPTY_LIST = [];
function useDom(render2, debug) {
  var _React$useState = reactExports.useState(function() {
    if (!canUseDom()) {
      return null;
    }
    var defaultEle = document.createElement("div");
    return defaultEle;
  }), _React$useState2 = _slicedToArray(_React$useState, 1), ele = _React$useState2[0];
  var appendedRef = reactExports.useRef(false);
  var queueCreate = reactExports.useContext(OrderContext);
  var _React$useState3 = reactExports.useState(EMPTY_LIST), _React$useState4 = _slicedToArray(_React$useState3, 2), queue = _React$useState4[0], setQueue = _React$useState4[1];
  var mergedQueueCreate = queueCreate || (appendedRef.current ? void 0 : function(appendFn) {
    setQueue(function(origin) {
      var newQueue = [appendFn].concat(_toConsumableArray(origin));
      return newQueue;
    });
  });
  function append2() {
    if (!ele.parentElement) {
      document.body.appendChild(ele);
    }
    appendedRef.current = true;
  }
  function cleanup2() {
    var _ele$parentElement;
    (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0 ? void 0 : _ele$parentElement.removeChild(ele);
    appendedRef.current = false;
  }
  useLayoutEffect$1(function() {
    if (render2) {
      if (queueCreate) {
        queueCreate(append2);
      } else {
        append2();
      }
    } else {
      cleanup2();
    }
    return cleanup2;
  }, [render2]);
  useLayoutEffect$1(function() {
    if (queue.length) {
      queue.forEach(function(appendFn) {
        return appendFn();
      });
      setQueue(EMPTY_LIST);
    }
  }, [queue]);
  return [ele, mergedQueueCreate];
}
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === "undefined") {
    return 0;
  }
  if (fresh || cached === void 0) {
    var inner = document.createElement("div");
    inner.style.width = "100%";
    inner.style.height = "200px";
    var outer = document.createElement("div");
    var outerStyle = outer.style;
    outerStyle.position = "absolute";
    outerStyle.top = "0";
    outerStyle.left = "0";
    outerStyle.pointerEvents = "none";
    outerStyle.visibility = "hidden";
    outerStyle.width = "200px";
    outerStyle.height = "150px";
    outerStyle.overflow = "hidden";
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = "scroll";
    var widthScroll = inner.offsetWidth;
    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }
    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }
  return cached;
}
function ensureSize(str) {
  var match2 = str.match(/^(.*)px$/);
  var value = Number(match2 === null || match2 === void 0 ? void 0 : match2[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}
function getTargetScrollBarSize(target) {
  if (typeof document === "undefined" || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }
  var _getComputedStyle = getComputedStyle(target, "::-webkit-scrollbar"), width = _getComputedStyle.width, height = _getComputedStyle.height;
  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
var uuid$2 = 0;
function useScrollLocker(lock) {
  var mergedLock = !!lock;
  var _React$useState = reactExports.useState(function() {
    uuid$2 += 1;
    return "".concat(UNIQUE_ID, "_").concat(uuid$2);
  }), _React$useState2 = _slicedToArray(_React$useState, 1), id = _React$useState2[0];
  useLayoutEffect$1(function() {
    if (mergedLock) {
      var scrollbarSize = getTargetScrollBarSize(document.body).width;
      var isOverflow = isBodyOverflowing();
      updateCSS("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : "", "\n}"), id);
    } else {
      removeCSS(id);
    }
    return function() {
      removeCSS(id);
    };
  }, [mergedLock, id]);
}
var inline = false;
function inlineMock(nextInline) {
  if (typeof nextInline === "boolean") {
    inline = nextInline;
  }
  return inline;
}
var getPortalContainer = function getPortalContainer2(getContainer2) {
  if (getContainer2 === false) {
    return false;
  }
  if (!canUseDom() || !getContainer2) {
    return null;
  }
  if (typeof getContainer2 === "string") {
    return document.querySelector(getContainer2);
  }
  if (typeof getContainer2 === "function") {
    return getContainer2();
  }
  return getContainer2;
};
var Portal = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var open = props.open, autoLock = props.autoLock, getContainer2 = props.getContainer;
  props.debug;
  var _props$autoDestroy = props.autoDestroy, autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy, children = props.children;
  var _React$useState = reactExports.useState(open), _React$useState2 = _slicedToArray(_React$useState, 2), shouldRender = _React$useState2[0], setShouldRender = _React$useState2[1];
  var mergedRender = shouldRender || open;
  reactExports.useEffect(function() {
    if (autoDestroy || open) {
      setShouldRender(open);
    }
  }, [open, autoDestroy]);
  var _React$useState3 = reactExports.useState(function() {
    return getPortalContainer(getContainer2);
  }), _React$useState4 = _slicedToArray(_React$useState3, 2), innerContainer = _React$useState4[0], setInnerContainer = _React$useState4[1];
  reactExports.useEffect(function() {
    var customizeContainer = getPortalContainer(getContainer2);
    setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
  });
  var _useDom = useDom(mergedRender && !innerContainer), _useDom2 = _slicedToArray(_useDom, 2), defaultContainer = _useDom2[0], queueCreate = _useDom2[1];
  var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer;
  useScrollLocker(autoLock && open && canUseDom() && (mergedContainer === defaultContainer || mergedContainer === document.body));
  var childRef = null;
  if (children && supportRef(children) && ref) {
    var _ref = children;
    childRef = _ref.ref;
  }
  var mergedRef = useComposeRef(childRef, ref);
  if (!mergedRender || !canUseDom() || innerContainer === void 0) {
    return null;
  }
  var renderInline = mergedContainer === false || inlineMock();
  var reffedChildren = children;
  if (ref) {
    reffedChildren = /* @__PURE__ */ reactExports.cloneElement(children, {
      ref: mergedRef
    });
  }
  return /* @__PURE__ */ reactExports.createElement(OrderContext.Provider, {
    value: queueCreate
  }, renderInline ? reffedChildren : /* @__PURE__ */ reactDomExports.createPortal(reffedChildren, mergedContainer));
});
function getUseId() {
  var fullClone2 = _objectSpread2({}, React$1);
  return fullClone2.useId;
}
var uuid$1 = 0;
var useOriginId = getUseId();
const useId$1 = useOriginId ? (
  // Use React `useId`
  function useId(id) {
    var reactId = useOriginId();
    if (id) {
      return id;
    }
    return reactId;
  }
) : (
  // Use compatible of `useId`
  function useCompatId(id) {
    var _React$useState = reactExports.useState("ssr-id"), _React$useState2 = _slicedToArray(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
    reactExports.useEffect(function() {
      var nextId = uuid$1;
      uuid$1 += 1;
      setInnerId("rc_unique_".concat(nextId));
    }, []);
    if (id) {
      return id;
    }
    return innerId;
  }
);
var HOOK_MARK = "RC_FORM_INTERNAL_HOOKS";
var warningFunc = function warningFunc2() {
  warningOnce(false, "Can not find FormContext. Please make sure you wrap Field under Form.");
};
var Context$1 = /* @__PURE__ */ reactExports.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldValue: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});
var ListContext = /* @__PURE__ */ reactExports.createContext(null);
function toArray$2(value) {
  if (value === void 0 || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function isFormInstance(form) {
  return form && !!form._init;
}
var define_process_env_default = {};
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
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p22) {
    o2.__proto__ = p22;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e2) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
var formatRegExp = /%[sdj%]/g;
var warning$1 = function warning2() {
};
if (typeof process !== "undefined" && define_process_env_default && false) {
  warning$1 = function warning3(type4, errors) {
    if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
      if (errors.every(function(e2) {
        return typeof e2 === "string";
      })) {
        console.warn(type4, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length)
    return null;
  var fields = {};
  errors.forEach(function(error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i = 0;
  var len = args.length;
  if (typeof template === "function") {
    return template.apply(null, args);
  }
  if (typeof template === "string") {
    var str = template.replace(formatRegExp, function(x) {
      if (x === "%%") {
        return "%";
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type4) {
  return type4 === "string" || type4 === "url" || type4 === "hex" || type4 === "email" || type4 === "date" || type4 === "pattern";
}
function isEmptyValue(value, type4) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type4 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type4) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors || []);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index2 = 0;
  var arrLength = arr.length;
  function next2(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index2;
    index2 = index2 + 1;
    if (original < arrLength) {
      func(arr[original], next2);
    } else {
      callback([]);
    }
  }
  next2([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k2) {
    ret.push.apply(ret, objArr[k2] || []);
  });
  return ret;
}
var AsyncValidationError = /* @__PURE__ */ function(_Error) {
  _inheritsLoose(AsyncValidationError2, _Error);
  function AsyncValidationError2(errors, fields) {
    var _this;
    _this = _Error.call(this, "Async Validation Error") || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return AsyncValidationError2;
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function asyncMap(objArr, option2, func, callback, source) {
  if (option2.first) {
    var _pending = new Promise(function(resolve, reject) {
      var next2 = function next22(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next2);
    });
    _pending["catch"](function(e2) {
      return e2;
    });
    return _pending;
  }
  var firstFields = option2.firstFields === true ? Object.keys(objArr) : option2.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve, reject) {
    var next2 = function next22(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next2);
      } else {
        asyncParallelArray(arr, func, next2);
      }
    });
  });
  pending["catch"](function(e2) {
    return e2;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}
function getValue$1(value, path) {
  var v2 = value;
  for (var i = 0; i < path.length; i++) {
    if (v2 == void 0) {
      return v2;
    }
    v2 = v2[path[i]];
  }
  return v2;
}
function complementError(rule, source) {
  return function(oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue$1(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if (typeof value === "object" && typeof target[s] === "object") {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}
var required$1 = function required(rule, value, source, errors, options2, type4) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type4 || rule.type))) {
    errors.push(format(options2.messages.required, rule.fullField));
  }
};
var whitespace = function whitespace2(rule, value, source, errors, options2) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options2.messages.whitespace, rule.fullField));
  }
};
var urlReg;
var getUrlRegex = function() {
  if (urlReg) {
    return urlReg;
  }
  var word = "[a-fA-F\\d:]";
  var b2 = function b22(options2) {
    return options2 && options2.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : "";
  };
  var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
  var v6seg = "[a-fA-F\\d]{1,4}";
  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");
  var ip = function ip2(options2) {
    return options2 && options2.exact ? v46Exact : new RegExp("(?:" + b2(options2) + v4 + b2(options2) + ")|(?:" + b2(options2) + v6 + b2(options2) + ")", "g");
  };
  ip.v4 = function(options2) {
    return options2 && options2.exact ? v4exact : new RegExp("" + b2(options2) + v4 + b2(options2), "g");
  };
  ip.v6 = function(options2) {
    return options2 && options2.exact ? v6exact : new RegExp("" + b2(options2) + v6 + b2(options2), "g");
  };
  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = "(?:\\S+(?::\\S*)?@)?";
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = "(?::\\d{2,5})?";
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", "i");
  return urlReg;
};
var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e2) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object: function object(value) {
    return typeof value === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern$2.hex);
  }
};
var type$1 = function type(rule, value, source, errors, options2) {
  if (rule.required && value === void 0) {
    required$1(rule, value, source, errors, options2);
    return;
  }
  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options2.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options2.messages.types[ruleType], rule.fullField, rule.type));
  }
};
var range = function range2(rule, value, source, errors, options2) {
  var len = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options2.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options2.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options2.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options2.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
var ENUM$1 = "enum";
var enumerable$1 = function enumerable(rule, value, source, errors, options2) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options2.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(", ")));
  }
};
var pattern$1 = function pattern(rule, value, source, errors, options2) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options2.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options2.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
var rules = {
  required: required$1,
  whitespace,
  type: type$1,
  range,
  "enum": enumerable$1,
  pattern: pattern$1
};
var string = function string2(rule, value, callback, source, options2) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2, "string");
    if (!isEmptyValue(value, "string")) {
      rules.type(rule, value, source, errors, options2);
      rules.range(rule, value, source, errors, options2);
      rules.pattern(rule, value, source, errors, options2);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options2);
      }
    }
  }
  callback(errors);
};
var method2 = function method3(rule, value, callback, source, options2) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options2);
    }
  }
  callback(errors);
};
var number2 = function number3(rule, value, callback, source, options2) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options2);
      rules.range(rule, value, source, errors, options2);
    }
  }
  callback(errors);
};
var _boolean = function _boolean2(rule, value, callback, source, options2) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options2);
    }
  }
  callback(errors);
};
var regexp2 = function regexp3(rule, value, callback, source, options2) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options2);
    }
  }
  callback(errors);
};
var integer2 = function integer3(rule, value, callback, source, options2) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options2);
      rules.range(rule, value, source, errors, options2);
    }
  }
  callback(errors);
};
var floatFn = function floatFn2(rule, value, callback, source, options2) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options2);
      rules.range(rule, value, source, errors, options2);
    }
  }
  callback(errors);
};
var array2 = function array3(rule, value, callback, source, options2) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2, "array");
    if (value !== void 0 && value !== null) {
      rules.type(rule, value, source, errors, options2);
      rules.range(rule, value, source, errors, options2);
    }
  }
  callback(errors);
};
var object2 = function object3(rule, value, callback, source, options2) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2);
    if (value !== void 0) {
      rules.type(rule, value, source, errors, options2);
    }
  }
  callback(errors);
};
var ENUM = "enum";
var enumerable2 = function enumerable3(rule, value, callback, source, options2) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2);
    if (value !== void 0) {
      rules[ENUM](rule, value, source, errors, options2);
    }
  }
  callback(errors);
};
var pattern2 = function pattern3(rule, value, callback, source, options2) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2);
    if (!isEmptyValue(value, "string")) {
      rules.pattern(rule, value, source, errors, options2);
    }
  }
  callback(errors);
};
var date2 = function date3(rule, value, callback, source, options2) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2);
    if (!isEmptyValue(value, "date")) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rules.type(rule, dateObject, source, errors, options2);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options2);
      }
    }
  }
  callback(errors);
};
var required2 = function required3(rule, value, callback, source, options2) {
  var errors = [];
  var type4 = Array.isArray(value) ? "array" : typeof value;
  rules.required(rule, value, source, errors, options2, type4);
  callback(errors);
};
var type2 = function type3(rule, value, callback, source, options2) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options2);
    }
  }
  callback(errors);
};
var any = function any2(rule, value, callback, source, options2) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options2);
  }
  callback(errors);
};
var validators = {
  string,
  method: method2,
  number: number2,
  "boolean": _boolean,
  regexp: regexp2,
  integer: integer2,
  "float": floatFn,
  array: array2,
  object: object2,
  "enum": enumerable2,
  pattern: pattern2,
  date: date2,
  url: type2,
  hex: type2,
  email: type2,
  required: required2,
  any
};
function newMessages() {
  return {
    "default": "Validation error on field %s",
    required: "%s is required",
    "enum": "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      "boolean": "%s is not a %s",
      integer: "%s is not an %s",
      "float": "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();
var Schema = /* @__PURE__ */ function() {
  function Schema2(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }
  var _proto = Schema2.prototype;
  _proto.define = function define(rules2) {
    var _this = this;
    if (!rules2) {
      throw new Error("Cannot configure a schema with no rules");
    }
    if (typeof rules2 !== "object" || Array.isArray(rules2)) {
      throw new Error("Rules must be an object");
    }
    this.rules = {};
    Object.keys(rules2).forEach(function(name) {
      var item = rules2[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };
  _proto.messages = function messages2(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  };
  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc2() {
      };
    }
    var source = source_;
    var options2 = o;
    var callback = oc;
    if (typeof options2 === "function") {
      callback = options2;
      options2 = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }
      return Promise.resolve(source);
    }
    function complete(results) {
      var errors = [];
      var fields = {};
      function add2(e2) {
        if (Array.isArray(e2)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e2);
        } else {
          errors.push(e2);
        }
      }
      for (var i = 0; i < results.length; i++) {
        add2(results[i]);
      }
      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }
    if (options2.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options2.messages);
      options2.messages = messages$1;
    } else {
      options2.messages = this.messages();
    }
    var series = {};
    var keys2 = options2.keys || Object.keys(this.rules);
    keys2.forEach(function(z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function(r) {
        var rule = r;
        if (typeof rule.transform === "function") {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === "function") {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this2.getValidationMethod(rule);
        if (!rule.validator) {
          return;
        }
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule,
          value,
          source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options2, function(data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === "object" || rule.type === "array") && (typeof rule.fields === "object" || typeof rule.defaultField === "object");
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }
      function cb(e2) {
        if (e2 === void 0) {
          e2 = [];
        }
        var errorList = Array.isArray(e2) ? e2 : [e2];
        if (!options2.suppressWarning && errorList.length) {
          Schema2.warning("async-validator:", errorList);
        }
        if (errorList.length && rule.message !== void 0) {
          errorList = [].concat(rule.message);
        }
        var filledErrors = errorList.map(complementError(rule, source));
        if (options2.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }
        if (!deep) {
          doIt(filledErrors);
        } else {
          if (rule.required && !data.value) {
            if (rule.message !== void 0) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options2.error) {
              filledErrors = [options2.error(rule, format(options2.messages.required, rule.field))];
            }
            return doIt(filledErrors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            Object.keys(data.value).map(function(key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }
          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function(field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema2(paredFieldsSchema);
          schema.messages(options2.messages);
          if (data.rule.options) {
            data.rule.options.messages = options2.messages;
            data.rule.options.error = options2.error;
          }
          schema.validate(data.value, data.rule.options || options2, function(errs) {
            var finalErrors = [];
            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options2);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options2);
        } catch (error) {
          console.error == null ? void 0 : console.error(error);
          if (!options2.suppressValidatorError) {
            setTimeout(function() {
              throw error;
            }, 0);
          }
          cb(error.message);
        }
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function() {
          return cb();
        }, function(e2) {
          return cb(e2);
        });
      }
    }, function(results) {
      complete(results);
    }, source);
  };
  _proto.getType = function getType(rule) {
    if (rule.type === void 0 && rule.pattern instanceof RegExp) {
      rule.type = "pattern";
    }
    if (typeof rule.validator !== "function" && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format("Unknown rule type %s", rule.type));
    }
    return rule.type || "string";
  };
  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === "function") {
      return rule.validator;
    }
    var keys2 = Object.keys(rule);
    var messageIndex = keys2.indexOf("message");
    if (messageIndex !== -1) {
      keys2.splice(messageIndex, 1);
    }
    if (keys2.length === 1 && keys2[0] === "required") {
      return validators.required;
    }
    return validators[this.getType(rule)] || void 0;
  };
  return Schema2;
}();
Schema.register = function register(type4, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validators[type4] = validator;
};
Schema.warning = warning$1;
Schema.messages = messages;
Schema.validators = validators;
var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
var AsyncValidator = Schema;
function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, function(str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}
var CODE_LOGIC_ERROR = "CODE_LOGIC_ERROR";
function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
function _validateRule() {
  _validateRule = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(name, value, rule, options2, messageVariables) {
    var cloneRule, originValidator, subRuleField, validator, messages2, result, subResults, kv, fillVariableResult;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1)
        switch (_context2.prev = _context2.next) {
          case 0:
            cloneRule = _objectSpread2({}, rule);
            delete cloneRule.ruleIndex;
            AsyncValidator.warning = function() {
              return void 0;
            };
            if (cloneRule.validator) {
              originValidator = cloneRule.validator;
              cloneRule.validator = function() {
                try {
                  return originValidator.apply(void 0, arguments);
                } catch (error) {
                  console.error(error);
                  return Promise.reject(CODE_LOGIC_ERROR);
                }
              };
            }
            subRuleField = null;
            if (cloneRule && cloneRule.type === "array" && cloneRule.defaultField) {
              subRuleField = cloneRule.defaultField;
              delete cloneRule.defaultField;
            }
            validator = new AsyncValidator(_defineProperty({}, name, [cloneRule]));
            messages2 = merge$1(defaultValidateMessages, options2.validateMessages);
            validator.messages(messages2);
            result = [];
            _context2.prev = 10;
            _context2.next = 13;
            return Promise.resolve(validator.validate(_defineProperty({}, name, value), _objectSpread2({}, options2)));
          case 13:
            _context2.next = 18;
            break;
          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](10);
            if (_context2.t0.errors) {
              result = _context2.t0.errors.map(function(_ref4, index2) {
                var message = _ref4.message;
                var mergedMessage = message === CODE_LOGIC_ERROR ? messages2.default : message;
                return /* @__PURE__ */ reactExports.isValidElement(mergedMessage) ? (
                  // Wrap ReactNode with `key`
                  reactExports.cloneElement(mergedMessage, {
                    key: "error_".concat(index2)
                  })
                ) : mergedMessage;
              });
            }
          case 18:
            if (!(!result.length && subRuleField)) {
              _context2.next = 23;
              break;
            }
            _context2.next = 21;
            return Promise.all(value.map(function(subValue, i) {
              return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options2, messageVariables);
            }));
          case 21:
            subResults = _context2.sent;
            return _context2.abrupt("return", subResults.reduce(function(prev2, errors) {
              return [].concat(_toConsumableArray(prev2), _toConsumableArray(errors));
            }, []));
          case 23:
            kv = _objectSpread2(_objectSpread2({}, rule), {}, {
              name,
              enum: (rule.enum || []).join(", ")
            }, messageVariables);
            fillVariableResult = result.map(function(error) {
              if (typeof error === "string") {
                return replaceMessage(error, kv);
              }
              return error;
            });
            return _context2.abrupt("return", fillVariableResult);
          case 26:
          case "end":
            return _context2.stop();
        }
    }, _callee2, null, [[10, 15]]);
  }));
  return _validateRule.apply(this, arguments);
}
function validateRules(namePath, value, rules2, options2, validateFirst, messageVariables) {
  var name = namePath.join(".");
  var filledRules = rules2.map(function(currentRule, ruleIndex) {
    var originValidatorFunc = currentRule.validator;
    var cloneRule = _objectSpread2(_objectSpread2({}, currentRule), {}, {
      ruleIndex
    });
    if (originValidatorFunc) {
      cloneRule.validator = function(rule, val, callback) {
        var hasPromise = false;
        var wrappedCallback = function wrappedCallback2() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          Promise.resolve().then(function() {
            warningOnce(!hasPromise, "Your validator function has already return a promise. `callback` will be ignored.");
            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        };
        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === "function" && typeof promise.catch === "function";
        warningOnce(hasPromise, "`callback` is deprecated. Please return a promise instead.");
        if (hasPromise) {
          promise.then(function() {
            callback();
          }).catch(function(err) {
            callback(err || " ");
          });
        }
      };
    }
    return cloneRule;
  }).sort(function(_ref, _ref2) {
    var w1 = _ref.warningOnly, i1 = _ref.ruleIndex;
    var w2 = _ref2.warningOnly, i2 = _ref2.ruleIndex;
    if (!!w1 === !!w2) {
      return i1 - i2;
    }
    if (w1) {
      return 1;
    }
    return -1;
  });
  var summaryPromise;
  if (validateFirst === true) {
    summaryPromise = new Promise(/* @__PURE__ */ function() {
      var _ref3 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(resolve, reject) {
        var i, rule, errors;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                i = 0;
              case 1:
                if (!(i < filledRules.length)) {
                  _context.next = 12;
                  break;
                }
                rule = filledRules[i];
                _context.next = 5;
                return validateRule(name, value, rule, options2, messageVariables);
              case 5:
                errors = _context.sent;
                if (!errors.length) {
                  _context.next = 9;
                  break;
                }
                reject([{
                  errors,
                  rule
                }]);
                return _context.abrupt("return");
              case 9:
                i += 1;
                _context.next = 1;
                break;
              case 12:
                resolve([]);
              case 13:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
      return function(_x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());
  } else {
    var rulePromises = filledRules.map(function(rule) {
      return validateRule(name, value, rule, options2, messageVariables).then(function(errors) {
        return {
          errors,
          rule
        };
      });
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function(errors) {
      return Promise.reject(errors);
    });
  }
  summaryPromise.catch(function(e2) {
    return e2;
  });
  return summaryPromise;
}
function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}
function _finishOnAllFailed() {
  _finishOnAllFailed = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee3(rulePromises) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1)
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", Promise.all(rulePromises).then(function(errorsList) {
              var _ref5;
              var errors = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(errorsList));
              return errors;
            }));
          case 1:
          case "end":
            return _context3.stop();
        }
    }, _callee3);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}
function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}
function _finishOnFirstFailed() {
  _finishOnFirstFailed = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee4(rulePromises) {
    var count;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1)
        switch (_context4.prev = _context4.next) {
          case 0:
            count = 0;
            return _context4.abrupt("return", new Promise(function(resolve) {
              rulePromises.forEach(function(promise) {
                promise.then(function(ruleError) {
                  if (ruleError.errors.length) {
                    resolve([ruleError]);
                  }
                  count += 1;
                  if (count === rulePromises.length) {
                    resolve([]);
                  }
                });
              });
            }));
          case 2:
          case "end":
            return _context4.stop();
        }
    }, _callee4);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}
function getNamePath(path) {
  return toArray$2(path);
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function(namePath) {
    var value = get(store, namePath);
    newStore = set(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  var partialMatch = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  return namePathList && namePathList.some(function(path) {
    return matchNamePath(namePath, path, partialMatch);
  });
}
function matchNamePath(namePath, subNamePath) {
  var partialMatch = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (!namePath || !subNamePath) {
    return false;
  }
  if (!partialMatch && namePath.length !== subNamePath.length) {
    return false;
  }
  return subNamePath.every(function(nameUnit, i) {
    return namePath[i] === nameUnit;
  });
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }
  if (!source && target || source && !target) {
    return false;
  }
  if (!source || !target || _typeof(source) !== "object" || _typeof(target) !== "object") {
    return false;
  }
  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys2 = new Set([].concat(sourceKeys, targetKeys));
  return _toConsumableArray(keys2).every(function(key) {
    var sourceValue = source[key];
    var targetValue = target[key];
    if (typeof sourceValue === "function" && typeof targetValue === "function") {
      return true;
    }
    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? void 0 : arguments[1];
  if (event && event.target && _typeof(event.target) === "object" && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}
function move(array4, moveIndex, toIndex) {
  var length2 = array4.length;
  if (moveIndex < 0 || moveIndex >= length2 || toIndex < 0 || toIndex >= length2) {
    return array4;
  }
  var item = array4[moveIndex];
  var diff = moveIndex - toIndex;
  if (diff > 0) {
    return [].concat(_toConsumableArray(array4.slice(0, toIndex)), [item], _toConsumableArray(array4.slice(toIndex, moveIndex)), _toConsumableArray(array4.slice(moveIndex + 1, length2)));
  }
  if (diff < 0) {
    return [].concat(_toConsumableArray(array4.slice(0, moveIndex)), _toConsumableArray(array4.slice(moveIndex + 1, toIndex + 1)), [item], _toConsumableArray(array4.slice(toIndex + 1, length2)));
  }
  return array4;
}
var _excluded$i = ["name"];
var EMPTY_ERRORS = [];
function requireUpdate(shouldUpdate, prev2, next2, prevValue, nextValue, info) {
  if (typeof shouldUpdate === "function") {
    return shouldUpdate(prev2, next2, "source" in info ? {
      source: info.source
    } : {});
  }
  return prevValue !== nextValue;
}
var Field = /* @__PURE__ */ function(_React$Component) {
  _inherits(Field2, _React$Component);
  var _super = _createSuper(Field2);
  function Field2(props) {
    var _this;
    _classCallCheck(this, Field2);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "state", {
      resetCount: 0
    });
    _defineProperty(_assertThisInitialized(_this), "cancelRegisterFunc", null);
    _defineProperty(_assertThisInitialized(_this), "mounted", false);
    _defineProperty(_assertThisInitialized(_this), "touched", false);
    _defineProperty(_assertThisInitialized(_this), "dirty", false);
    _defineProperty(_assertThisInitialized(_this), "validatePromise", void 0);
    _defineProperty(_assertThisInitialized(_this), "prevValidating", void 0);
    _defineProperty(_assertThisInitialized(_this), "errors", EMPTY_ERRORS);
    _defineProperty(_assertThisInitialized(_this), "warnings", EMPTY_ERRORS);
    _defineProperty(_assertThisInitialized(_this), "cancelRegister", function() {
      var _this$props = _this.props, preserve2 = _this$props.preserve, isListField = _this$props.isListField, name = _this$props.name;
      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve2, getNamePath(name));
      }
      _this.cancelRegisterFunc = null;
    });
    _defineProperty(_assertThisInitialized(_this), "getNamePath", function() {
      var _this$props2 = _this.props, name = _this$props2.name, fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName, prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== void 0 ? [].concat(_toConsumableArray(prefixName), _toConsumableArray(name)) : [];
    });
    _defineProperty(_assertThisInitialized(_this), "getRules", function() {
      var _this$props3 = _this.props, _this$props3$rules = _this$props3.rules, rules2 = _this$props3$rules === void 0 ? [] : _this$props3$rules, fieldContext = _this$props3.fieldContext;
      return rules2.map(function(rule) {
        if (typeof rule === "function") {
          return rule(fieldContext);
        }
        return rule;
      });
    });
    _defineProperty(_assertThisInitialized(_this), "refresh", function() {
      if (!_this.mounted)
        return;
      _this.setState(function(_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    });
    _defineProperty(_assertThisInitialized(_this), "metaCache", null);
    _defineProperty(_assertThisInitialized(_this), "triggerMetaEvent", function(destroy) {
      var onMetaChange = _this.props.onMetaChange;
      if (onMetaChange) {
        var _meta = _objectSpread2(_objectSpread2({}, _this.getMeta()), {}, {
          destroy
        });
        if (!isEqual(_this.metaCache, _meta)) {
          onMetaChange(_meta);
        }
        _this.metaCache = _meta;
      } else {
        _this.metaCache = null;
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onStoreChange", function(prevStore, namePathList, info) {
      var _this$props4 = _this.props, shouldUpdate = _this$props4.shouldUpdate, _this$props4$dependen = _this$props4.dependencies, dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen, onReset = _this$props4.onReset;
      var store = info.store;
      var namePath = _this.getNamePath();
      var prevValue = _this.getValue(prevStore);
      var curValue = _this.getValue(store);
      var namePathMatch = namePathList && containsNamePath(namePathList, namePath);
      if (info.type === "valueUpdate" && info.source === "external" && prevValue !== curValue) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;
        _this.triggerMetaEvent();
      }
      switch (info.type) {
        case "reset":
          if (!namePathList || namePathMatch) {
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = void 0;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;
            _this.triggerMetaEvent();
            onReset === null || onReset === void 0 || onReset();
            _this.refresh();
            return;
          }
          break;
        case "remove": {
          if (shouldUpdate) {
            _this.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var data = info.data;
          if (namePathMatch) {
            if ("touched" in data) {
              _this.touched = data.touched;
            }
            if ("validating" in data && !("originRCField" in data)) {
              _this.validatePromise = data.validating ? Promise.resolve([]) : null;
            }
            if ("errors" in data) {
              _this.errors = data.errors || EMPTY_ERRORS;
            }
            if ("warnings" in data) {
              _this.warnings = data.warnings || EMPTY_ERRORS;
            }
            _this.dirty = true;
            _this.triggerMetaEvent();
            _this.reRender();
            return;
          } else if ("value" in data && containsNamePath(namePathList, namePath, true)) {
            _this.reRender();
            return;
          }
          if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var dependencyList = dependencies.map(getNamePath);
          if (dependencyList.some(function(dependency) {
            return containsNamePath(info.relatedFields, dependency);
          })) {
            _this.reRender();
            return;
          }
          break;
        }
        default:
          if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();
            return;
          }
          break;
      }
      if (shouldUpdate === true) {
        _this.reRender();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "validateRules", function(options2) {
      var namePath = _this.getNamePath();
      var currentValue = _this.getValue();
      var _ref2 = options2 || {}, triggerName = _ref2.triggerName, _ref2$validateOnly = _ref2.validateOnly, validateOnly = _ref2$validateOnly === void 0 ? false : _ref2$validateOnly;
      var rootPromise = Promise.resolve().then(/* @__PURE__ */ _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
        var _this$props5, _this$props5$validate, validateFirst, messageVariables, validateDebounce, filteredRules, promise;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.mounted) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return", []);
              case 2:
                _this$props5 = _this.props, _this$props5$validate = _this$props5.validateFirst, validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate, messageVariables = _this$props5.messageVariables, validateDebounce = _this$props5.validateDebounce;
                filteredRules = _this.getRules();
                if (triggerName) {
                  filteredRules = filteredRules.filter(function(rule) {
                    return rule;
                  }).filter(function(rule) {
                    var validateTrigger = rule.validateTrigger;
                    if (!validateTrigger) {
                      return true;
                    }
                    var triggerList = toArray$2(validateTrigger);
                    return triggerList.includes(triggerName);
                  });
                }
                if (!(validateDebounce && triggerName)) {
                  _context.next = 10;
                  break;
                }
                _context.next = 8;
                return new Promise(function(resolve) {
                  setTimeout(resolve, validateDebounce);
                });
              case 8:
                if (!(_this.validatePromise !== rootPromise)) {
                  _context.next = 10;
                  break;
                }
                return _context.abrupt("return", []);
              case 10:
                promise = validateRules(namePath, currentValue, filteredRules, options2, validateFirst, messageVariables);
                promise.catch(function(e2) {
                  return e2;
                }).then(function() {
                  var ruleErrors = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : EMPTY_ERRORS;
                  if (_this.validatePromise === rootPromise) {
                    var _ruleErrors$forEach;
                    _this.validatePromise = null;
                    var nextErrors = [];
                    var nextWarnings = [];
                    (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function(_ref4) {
                      var warningOnly = _ref4.rule.warningOnly, _ref4$errors = _ref4.errors, errors = _ref4$errors === void 0 ? EMPTY_ERRORS : _ref4$errors;
                      if (warningOnly) {
                        nextWarnings.push.apply(nextWarnings, _toConsumableArray(errors));
                      } else {
                        nextErrors.push.apply(nextErrors, _toConsumableArray(errors));
                      }
                    });
                    _this.errors = nextErrors;
                    _this.warnings = nextWarnings;
                    _this.triggerMetaEvent();
                    _this.reRender();
                  }
                });
                return _context.abrupt("return", promise);
              case 13:
              case "end":
                return _context.stop();
            }
        }, _callee);
      })));
      if (validateOnly) {
        return rootPromise;
      }
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = EMPTY_ERRORS;
      _this.warnings = EMPTY_ERRORS;
      _this.triggerMetaEvent();
      _this.reRender();
      return rootPromise;
    });
    _defineProperty(_assertThisInitialized(_this), "isFieldValidating", function() {
      return !!_this.validatePromise;
    });
    _defineProperty(_assertThisInitialized(_this), "isFieldTouched", function() {
      return _this.touched;
    });
    _defineProperty(_assertThisInitialized(_this), "isFieldDirty", function() {
      if (_this.dirty || _this.props.initialValue !== void 0) {
        return true;
      }
      var fieldContext = _this.props.fieldContext;
      var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK), getInitialValue = _fieldContext$getInte.getInitialValue;
      if (getInitialValue(_this.getNamePath()) !== void 0) {
        return true;
      }
      return false;
    });
    _defineProperty(_assertThisInitialized(_this), "getErrors", function() {
      return _this.errors;
    });
    _defineProperty(_assertThisInitialized(_this), "getWarnings", function() {
      return _this.warnings;
    });
    _defineProperty(_assertThisInitialized(_this), "isListField", function() {
      return _this.props.isListField;
    });
    _defineProperty(_assertThisInitialized(_this), "isList", function() {
      return _this.props.isList;
    });
    _defineProperty(_assertThisInitialized(_this), "isPreserve", function() {
      return _this.props.preserve;
    });
    _defineProperty(_assertThisInitialized(_this), "getMeta", function() {
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        warnings: _this.warnings,
        name: _this.getNamePath(),
        validated: _this.validatePromise === null
      };
      return meta;
    });
    _defineProperty(_assertThisInitialized(_this), "getOnlyChild", function(children) {
      if (typeof children === "function") {
        var _meta2 = _this.getMeta();
        return _objectSpread2(_objectSpread2({}, _this.getOnlyChild(children(_this.getControlled(), _meta2, _this.props.fieldContext))), {}, {
          isFunction: true
        });
      }
      var childList = toArray$3(children);
      if (childList.length !== 1 || !/* @__PURE__ */ reactExports.isValidElement(childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }
      return {
        child: childList[0],
        isFunction: false
      };
    });
    _defineProperty(_assertThisInitialized(_this), "getValue", function(store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;
      var namePath = _this.getNamePath();
      return get(store || getFieldsValue(true), namePath);
    });
    _defineProperty(_assertThisInitialized(_this), "getControlled", function() {
      var childProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var _this$props6 = _this.props, trigger = _this$props6.trigger, validateTrigger = _this$props6.validateTrigger, getValueFromEvent = _this$props6.getValueFromEvent, normalize2 = _this$props6.normalize, valuePropName = _this$props6.valuePropName, getValueProps = _this$props6.getValueProps, fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger = validateTrigger !== void 0 ? validateTrigger : fieldContext.validateTrigger;
      var namePath = _this.getNamePath();
      var getInternalHooks22 = fieldContext.getInternalHooks, getFieldsValue = fieldContext.getFieldsValue;
      var _getInternalHooks = getInternalHooks22(HOOK_MARK), dispatch = _getInternalHooks.dispatch;
      var value = _this.getValue();
      var mergedGetValueProps = getValueProps || function(val) {
        return _defineProperty({}, valuePropName, val);
      };
      var originTriggerFunc = childProps[trigger];
      var control = _objectSpread2(_objectSpread2({}, childProps), mergedGetValueProps(value));
      control[trigger] = function() {
        _this.touched = true;
        _this.dirty = true;
        _this.triggerMetaEvent();
        var newValue;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
        }
        if (normalize2) {
          newValue = normalize2(newValue, value, getFieldsValue(true));
        }
        dispatch({
          type: "updateValue",
          namePath,
          value: newValue
        });
        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      };
      var validateTriggerList = toArray$2(mergedValidateTrigger || []);
      validateTriggerList.forEach(function(triggerName) {
        var originTrigger = control[triggerName];
        control[triggerName] = function() {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          }
          var rules2 = _this.props.rules;
          if (rules2 && rules2.length) {
            dispatch({
              type: "validateField",
              namePath,
              triggerName
            });
          }
        };
      });
      return control;
    });
    if (props.fieldContext) {
      var getInternalHooks2 = props.fieldContext.getInternalHooks;
      var _getInternalHooks2 = getInternalHooks2(HOOK_MARK), initEntityValue = _getInternalHooks2.initEntityValue;
      initEntityValue(_assertThisInitialized(_this));
    }
    return _this;
  }
  _createClass(Field2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props, shouldUpdate = _this$props7.shouldUpdate, fieldContext = _this$props7.fieldContext;
      this.mounted = true;
      if (fieldContext) {
        var getInternalHooks2 = fieldContext.getInternalHooks;
        var _getInternalHooks3 = getInternalHooks2(HOOK_MARK), registerField = _getInternalHooks3.registerField;
        this.cancelRegisterFunc = registerField(this);
      }
      if (shouldUpdate === true) {
        this.reRender();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRegister();
      this.triggerMetaEvent(true);
      this.mounted = false;
    }
  }, {
    key: "reRender",
    value: function reRender() {
      if (!this.mounted)
        return;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render2() {
      var resetCount = this.state.resetCount;
      var children = this.props.children;
      var _this$getOnlyChild = this.getOnlyChild(children), child = _this$getOnlyChild.child, isFunction = _this$getOnlyChild.isFunction;
      var returnChildNode;
      if (isFunction) {
        returnChildNode = child;
      } else if (/* @__PURE__ */ reactExports.isValidElement(child)) {
        returnChildNode = /* @__PURE__ */ reactExports.cloneElement(child, this.getControlled(child.props));
      } else {
        warningOnce(!child, "`children` of Field is not validate ReactElement.");
        returnChildNode = child;
      }
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, {
        key: resetCount
      }, returnChildNode);
    }
  }]);
  return Field2;
}(reactExports.Component);
_defineProperty(Field, "contextType", Context$1);
_defineProperty(Field, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function WrapperField(_ref6) {
  var name = _ref6.name, restProps = _objectWithoutProperties(_ref6, _excluded$i);
  var fieldContext = reactExports.useContext(Context$1);
  var listContext = reactExports.useContext(ListContext);
  var namePath = name !== void 0 ? getNamePath(name) : void 0;
  var key = "keep";
  if (!restProps.isListField) {
    key = "_".concat((namePath || []).join("_"));
  }
  return /* @__PURE__ */ reactExports.createElement(Field, _extends$1({
    key,
    name: namePath,
    isListField: !!listContext
  }, restProps, {
    fieldContext
  }));
}
function List$1(_ref) {
  var name = _ref.name, initialValue = _ref.initialValue, children = _ref.children, rules2 = _ref.rules, validateTrigger = _ref.validateTrigger, isListField = _ref.isListField;
  var context = reactExports.useContext(Context$1);
  var wrapperListContext = reactExports.useContext(ListContext);
  var keyRef = reactExports.useRef({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current;
  var prefixName = reactExports.useMemo(function() {
    var parentPrefixName = getNamePath(context.prefixName) || [];
    return [].concat(_toConsumableArray(parentPrefixName), _toConsumableArray(getNamePath(name)));
  }, [context.prefixName, name]);
  var fieldContext = reactExports.useMemo(function() {
    return _objectSpread2(_objectSpread2({}, context), {}, {
      prefixName
    });
  }, [context, prefixName]);
  var listContext = reactExports.useMemo(function() {
    return {
      getKey: function getKey2(namePath) {
        var len = prefixName.length;
        var pathName = namePath[len];
        return [keyManager.keys[pathName], namePath.slice(len + 1)];
      }
    };
  }, [prefixName]);
  if (typeof children !== "function") {
    warningOnce(false, "Form.List only accepts function as children.");
    return null;
  }
  var shouldUpdate = function shouldUpdate2(prevValue, nextValue, _ref2) {
    var source = _ref2.source;
    if (source === "internal") {
      return false;
    }
    return prevValue !== nextValue;
  };
  return /* @__PURE__ */ reactExports.createElement(ListContext.Provider, {
    value: listContext
  }, /* @__PURE__ */ reactExports.createElement(Context$1.Provider, {
    value: fieldContext
  }, /* @__PURE__ */ reactExports.createElement(WrapperField, {
    name: [],
    shouldUpdate,
    rules: rules2,
    validateTrigger,
    initialValue,
    isList: true,
    isListField: isListField !== null && isListField !== void 0 ? isListField : !!wrapperListContext
  }, function(_ref3, meta) {
    var _ref3$value = _ref3.value, value = _ref3$value === void 0 ? [] : _ref3$value, onChange = _ref3.onChange;
    var getFieldValue = context.getFieldValue;
    var getNewValue = function getNewValue2() {
      var values = getFieldValue(prefixName || []);
      return values || [];
    };
    var operations = {
      add: function add2(defaultValue, index2) {
        var newValue = getNewValue();
        if (index2 >= 0 && index2 <= newValue.length) {
          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys.slice(0, index2)), [keyManager.id], _toConsumableArray(keyManager.keys.slice(index2)));
          onChange([].concat(_toConsumableArray(newValue.slice(0, index2)), [defaultValue], _toConsumableArray(newValue.slice(index2))));
        } else {
          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys), [keyManager.id]);
          onChange([].concat(_toConsumableArray(newValue), [defaultValue]));
        }
        keyManager.id += 1;
      },
      remove: function remove2(index2) {
        var newValue = getNewValue();
        var indexSet = new Set(Array.isArray(index2) ? index2 : [index2]);
        if (indexSet.size <= 0) {
          return;
        }
        keyManager.keys = keyManager.keys.filter(function(_, keysIndex) {
          return !indexSet.has(keysIndex);
        });
        onChange(newValue.filter(function(_, valueIndex) {
          return !indexSet.has(valueIndex);
        }));
      },
      move: function move$1(from2, to) {
        if (from2 === to) {
          return;
        }
        var newValue = getNewValue();
        if (from2 < 0 || from2 >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }
        keyManager.keys = move(keyManager.keys, from2, to);
        onChange(move(newValue, from2, to));
      }
    };
    var listValue = value || [];
    if (!Array.isArray(listValue)) {
      listValue = [];
    }
    return children(listValue.map(function(__, index2) {
      var key = keyManager.keys[index2];
      if (key === void 0) {
        keyManager.keys[index2] = keyManager.id;
        key = keyManager.keys[index2];
        keyManager.id += 1;
      }
      return {
        name: index2,
        key,
        isListField: true
      };
    }), operations, meta);
  })));
}
function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise(function(resolve, reject) {
    promiseList.forEach(function(promise, index2) {
      promise.catch(function(e2) {
        hasError = true;
        return e2;
      }).then(function(result) {
        count -= 1;
        results[index2] = result;
        if (count > 0) {
          return;
        }
        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}
var SPLIT = "__@field_split__";
function normalize(namePath) {
  return namePath.map(function(cell) {
    return "".concat(_typeof(cell), ":").concat(cell);
  }).join(SPLIT);
}
var NameMap = /* @__PURE__ */ function() {
  function NameMap2() {
    _classCallCheck(this, NameMap2);
    _defineProperty(this, "kvs", /* @__PURE__ */ new Map());
  }
  _createClass(NameMap2, [{
    key: "set",
    value: function set2(key, value) {
      this.kvs.set(normalize(key), value);
    }
  }, {
    key: "get",
    value: function get2(key) {
      return this.kvs.get(normalize(key));
    }
  }, {
    key: "update",
    value: function update(key, updater) {
      var origin = this.get(key);
      var next2 = updater(origin);
      if (!next2) {
        this.delete(key);
      } else {
        this.set(key, next2);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.kvs.delete(normalize(key));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function map(callback) {
      return _toConsumableArray(this.kvs.entries()).map(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
        var cells = key.split(SPLIT);
        return callback({
          key: cells.map(function(cell) {
            var _cell$match = cell.match(/^([^:]*):(.*)$/), _cell$match2 = _slicedToArray(_cell$match, 3), type4 = _cell$match2[1], unit2 = _cell$match2[2];
            return type4 === "number" ? Number(unit2) : unit2;
          }),
          value
        });
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};
      this.map(function(_ref3) {
        var key = _ref3.key, value = _ref3.value;
        json[key.join(".")] = value;
        return null;
      });
      return json;
    }
  }]);
  return NameMap2;
}();
var _excluded$h = ["name"];
var FormStore = /* @__PURE__ */ _createClass(function FormStore2(forceRootUpdate) {
  var _this = this;
  _classCallCheck(this, FormStore2);
  _defineProperty(this, "formHooked", false);
  _defineProperty(this, "forceRootUpdate", void 0);
  _defineProperty(this, "subscribable", true);
  _defineProperty(this, "store", {});
  _defineProperty(this, "fieldEntities", []);
  _defineProperty(this, "initialValues", {});
  _defineProperty(this, "callbacks", {});
  _defineProperty(this, "validateMessages", null);
  _defineProperty(this, "preserve", null);
  _defineProperty(this, "lastValidatePromise", null);
  _defineProperty(this, "getForm", function() {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldWarning: _this.getFieldWarning,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldValue: _this.setFieldValue,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      _init: true,
      getInternalHooks: _this.getInternalHooks
    };
  });
  _defineProperty(this, "getInternalHooks", function(key) {
    if (key === HOOK_MARK) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        destroyForm: _this.destroyForm,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve,
        getInitialValue: _this.getInitialValue,
        registerWatch: _this.registerWatch
      };
    }
    warningOnce(false, "`getInternalHooks` is internal usage. Should not call directly.");
    return null;
  });
  _defineProperty(this, "useSubscribe", function(subscribable) {
    _this.subscribable = subscribable;
  });
  _defineProperty(this, "prevWithoutPreserves", null);
  _defineProperty(this, "setInitialValues", function(initialValues, init) {
    _this.initialValues = initialValues || {};
    if (init) {
      var _this$prevWithoutPres;
      var nextStore = merge$1(initialValues, _this.store);
      (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 || _this$prevWithoutPres.map(function(_ref) {
        var namePath = _ref.key;
        nextStore = set(nextStore, namePath, get(initialValues, namePath));
      });
      _this.prevWithoutPreserves = null;
      _this.updateStore(nextStore);
    }
  });
  _defineProperty(this, "destroyForm", function() {
    var prevWithoutPreserves = new NameMap();
    _this.getFieldEntities(true).forEach(function(entity) {
      if (!_this.isMergedPreserve(entity.isPreserve())) {
        prevWithoutPreserves.set(entity.getNamePath(), true);
      }
    });
    _this.prevWithoutPreserves = prevWithoutPreserves;
  });
  _defineProperty(this, "getInitialValue", function(namePath) {
    var initValue = get(_this.initialValues, namePath);
    return namePath.length ? merge$1(initValue) : initValue;
  });
  _defineProperty(this, "setCallbacks", function(callbacks) {
    _this.callbacks = callbacks;
  });
  _defineProperty(this, "setValidateMessages", function(validateMessages) {
    _this.validateMessages = validateMessages;
  });
  _defineProperty(this, "setPreserve", function(preserve2) {
    _this.preserve = preserve2;
  });
  _defineProperty(this, "watchList", []);
  _defineProperty(this, "registerWatch", function(callback) {
    _this.watchList.push(callback);
    return function() {
      _this.watchList = _this.watchList.filter(function(fn) {
        return fn !== callback;
      });
    };
  });
  _defineProperty(this, "notifyWatch", function() {
    var namePath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (_this.watchList.length) {
      var values = _this.getFieldsValue();
      var allValues = _this.getFieldsValue(true);
      _this.watchList.forEach(function(callback) {
        callback(values, allValues, namePath);
      });
    }
  });
  _defineProperty(this, "timeoutId", null);
  _defineProperty(this, "warningUnhooked", function() {
  });
  _defineProperty(this, "updateStore", function(nextStore) {
    _this.store = nextStore;
  });
  _defineProperty(this, "getFieldEntities", function() {
    var pure = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (!pure) {
      return _this.fieldEntities;
    }
    return _this.fieldEntities.filter(function(field) {
      return field.getNamePath().length;
    });
  });
  _defineProperty(this, "getFieldsMap", function() {
    var pure = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var cache = new NameMap();
    _this.getFieldEntities(pure).forEach(function(field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });
    return cache;
  });
  _defineProperty(this, "getFieldEntitiesForNamePathList", function(nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }
    var cache = _this.getFieldsMap(true);
    return nameList.map(function(name) {
      var namePath = getNamePath(name);
      return cache.get(namePath) || {
        INVALIDATE_NAME_PATH: getNamePath(name)
      };
    });
  });
  _defineProperty(this, "getFieldsValue", function(nameList, filterFunc) {
    _this.warningUnhooked();
    var mergedNameList;
    var mergedFilterFunc;
    var mergedStrict;
    if (nameList === true || Array.isArray(nameList)) {
      mergedNameList = nameList;
      mergedFilterFunc = filterFunc;
    } else if (nameList && _typeof(nameList) === "object") {
      mergedStrict = nameList.strict;
      mergedFilterFunc = nameList.filter;
    }
    if (mergedNameList === true && !mergedFilterFunc) {
      return _this.store;
    }
    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(mergedNameList) ? mergedNameList : null);
    var filteredNameList = [];
    fieldEntities.forEach(function(entity) {
      var _isListField, _ref3;
      var namePath = "INVALIDATE_NAME_PATH" in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();
      if (mergedStrict) {
        var _isList, _ref2;
        if ((_isList = (_ref2 = entity).isList) !== null && _isList !== void 0 && _isList.call(_ref2)) {
          return;
        }
      } else if (!mergedNameList && (_isListField = (_ref3 = entity).isListField) !== null && _isListField !== void 0 && _isListField.call(_ref3)) {
        return;
      }
      if (!mergedFilterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = "getMeta" in entity ? entity.getMeta() : null;
        if (mergedFilterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
  });
  _defineProperty(this, "getFieldValue", function(name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    return get(_this.store, namePath);
  });
  _defineProperty(this, "getFieldsError", function(nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
    return fieldEntities.map(function(entity, index2) {
      if (entity && !("INVALIDATE_NAME_PATH" in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
          warnings: entity.getWarnings()
        };
      }
      return {
        name: getNamePath(nameList[index2]),
        errors: [],
        warnings: []
      };
    });
  });
  _defineProperty(this, "getFieldError", function(name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.errors;
  });
  _defineProperty(this, "getFieldWarning", function(name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.warnings;
  });
  _defineProperty(this, "isFieldsTouched", function() {
    _this.warningUnhooked();
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var arg0 = args[0], arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;
    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }
    var fieldEntities = _this.getFieldEntities(true);
    var isFieldTouched = function isFieldTouched2(field) {
      return field.isFieldTouched();
    };
    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
    }
    var map = new NameMap();
    namePathList.forEach(function(shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function(field) {
      var fieldNamePath = field.getNamePath();
      namePathList.forEach(function(shortNamePath) {
        if (shortNamePath.every(function(nameUnit, i) {
          return fieldNamePath[i] === nameUnit;
        })) {
          map.update(shortNamePath, function(list) {
            return [].concat(_toConsumableArray(list), [field]);
          });
        }
      });
    });
    var isNamePathListTouched = function isNamePathListTouched2(entities) {
      return entities.some(isFieldTouched);
    };
    var namePathListEntities = map.map(function(_ref4) {
      var value = _ref4.value;
      return value;
    });
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  });
  _defineProperty(this, "isFieldTouched", function(name) {
    _this.warningUnhooked();
    return _this.isFieldsTouched([name]);
  });
  _defineProperty(this, "isFieldsValidating", function(nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntities();
    if (!nameList) {
      return fieldEntities.some(function(testField) {
        return testField.isFieldValidating();
      });
    }
    var namePathList = nameList.map(getNamePath);
    return fieldEntities.some(function(testField) {
      var fieldNamePath = testField.getNamePath();
      return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  });
  _defineProperty(this, "isFieldValidating", function(name) {
    _this.warningUnhooked();
    return _this.isFieldsValidating([name]);
  });
  _defineProperty(this, "resetWithFieldInitialValue", function() {
    var info = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var cache = new NameMap();
    var fieldEntities = _this.getFieldEntities(true);
    fieldEntities.forEach(function(field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath();
      if (initialValue !== void 0) {
        var records = cache.get(namePath) || /* @__PURE__ */ new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    });
    var resetWithFields = function resetWithFields2(entities) {
      entities.forEach(function(field) {
        var initialValue = field.props.initialValue;
        if (initialValue !== void 0) {
          var namePath = field.getNamePath();
          var formInitialValue = _this.getInitialValue(namePath);
          if (formInitialValue !== void 0) {
            warningOnce(false, "Form already set 'initialValues' with path '".concat(namePath.join("."), "'. Field can not overwrite it."));
          } else {
            var records = cache.get(namePath);
            if (records && records.size > 1) {
              warningOnce(false, "Multiple Field with path '".concat(namePath.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            } else if (records) {
              var originValue = _this.getFieldValue(namePath);
              var isListField = field.isListField();
              if (!isListField && (!info.skipExist || originValue === void 0)) {
                _this.updateStore(set(_this.store, namePath, _toConsumableArray(records)[0].value));
              }
            }
          }
        }
      });
    };
    var requiredFieldEntities;
    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function(namePath) {
        var records = cache.get(namePath);
        if (records) {
          var _requiredFieldEntitie;
          (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, _toConsumableArray(_toConsumableArray(records).map(function(r) {
            return r.entity;
          })));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }
    resetWithFields(requiredFieldEntities);
  });
  _defineProperty(this, "resetFields", function(nameList) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (!nameList) {
      _this.updateStore(merge$1(_this.initialValues));
      _this.resetWithFieldInitialValue();
      _this.notifyObservers(prevStore, null, {
        type: "reset"
      });
      _this.notifyWatch();
      return;
    }
    var namePathList = nameList.map(getNamePath);
    namePathList.forEach(function(namePath) {
      var initialValue = _this.getInitialValue(namePath);
      _this.updateStore(set(_this.store, namePath, initialValue));
    });
    _this.resetWithFieldInitialValue({
      namePathList
    });
    _this.notifyObservers(prevStore, namePathList, {
      type: "reset"
    });
    _this.notifyWatch(namePathList);
  });
  _defineProperty(this, "setFields", function(fields) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    var namePathList = [];
    fields.forEach(function(fieldData) {
      var name = fieldData.name, data = _objectWithoutProperties(fieldData, _excluded$h);
      var namePath = getNamePath(name);
      namePathList.push(namePath);
      if ("value" in data) {
        _this.updateStore(set(_this.store, namePath, data.value));
      }
      _this.notifyObservers(prevStore, [namePath], {
        type: "setField",
        data: fieldData
      });
    });
    _this.notifyWatch(namePathList);
  });
  _defineProperty(this, "getFields", function() {
    var entities = _this.getFieldEntities(true);
    var fields = entities.map(function(field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();
      var fieldData = _objectSpread2(_objectSpread2({}, meta), {}, {
        name: namePath,
        value: _this.getFieldValue(namePath)
      });
      Object.defineProperty(fieldData, "originRCField", {
        value: true
      });
      return fieldData;
    });
    return fields;
  });
  _defineProperty(this, "initEntityValue", function(entity) {
    var initialValue = entity.props.initialValue;
    if (initialValue !== void 0) {
      var namePath = entity.getNamePath();
      var prevValue = get(_this.store, namePath);
      if (prevValue === void 0) {
        _this.updateStore(set(_this.store, namePath, initialValue));
      }
    }
  });
  _defineProperty(this, "isMergedPreserve", function(fieldPreserve) {
    var mergedPreserve = fieldPreserve !== void 0 ? fieldPreserve : _this.preserve;
    return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
  });
  _defineProperty(this, "registerField", function(entity) {
    _this.fieldEntities.push(entity);
    var namePath = entity.getNamePath();
    _this.notifyWatch([namePath]);
    if (entity.props.initialValue !== void 0) {
      var prevStore = _this.store;
      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });
      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(isListField, preserve2) {
      var subNamePath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      _this.fieldEntities = _this.fieldEntities.filter(function(item) {
        return item !== entity;
      });
      if (!_this.isMergedPreserve(preserve2) && (!isListField || subNamePath.length > 1)) {
        var defaultValue = isListField ? void 0 : _this.getInitialValue(namePath);
        if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function(field) {
          return (
            // Only reset when no namePath exist
            !matchNamePath(field.getNamePath(), namePath)
          );
        })) {
          var _prevStore = _this.store;
          _this.updateStore(set(_prevStore, namePath, defaultValue, true));
          _this.notifyObservers(_prevStore, [namePath], {
            type: "remove"
          });
          _this.triggerDependenciesUpdate(_prevStore, namePath);
        }
      }
      _this.notifyWatch([namePath]);
    };
  });
  _defineProperty(this, "dispatch", function(action) {
    switch (action.type) {
      case "updateValue": {
        var namePath = action.namePath, value = action.value;
        _this.updateValue(namePath, value);
        break;
      }
      case "validateField": {
        var _namePath = action.namePath, triggerName = action.triggerName;
        _this.validateFields([_namePath], {
          triggerName
        });
        break;
      }
    }
  });
  _defineProperty(this, "notifyObservers", function(prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = _objectSpread2(_objectSpread2({}, info), {}, {
        store: _this.getFieldsValue(true)
      });
      _this.getFieldEntities().forEach(function(_ref5) {
        var onStoreChange = _ref5.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  });
  _defineProperty(this, "triggerDependenciesUpdate", function(prevStore, namePath) {
    var childrenFields = _this.getDependencyChildrenFields(namePath);
    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }
    _this.notifyObservers(prevStore, childrenFields, {
      type: "dependenciesUpdate",
      relatedFields: [namePath].concat(_toConsumableArray(childrenFields))
    });
    return childrenFields;
  });
  _defineProperty(this, "updateValue", function(name, value) {
    var namePath = getNamePath(name);
    var prevStore = _this.store;
    _this.updateStore(set(_this.store, namePath, value));
    _this.notifyObservers(prevStore, [namePath], {
      type: "valueUpdate",
      source: "internal"
    });
    _this.notifyWatch([namePath]);
    var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath);
    var onValuesChange = _this.callbacks.onValuesChange;
    if (onValuesChange) {
      var changedValues = cloneByNamePathList(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }
    _this.triggerOnFieldsChange([namePath].concat(_toConsumableArray(childrenFields)));
  });
  _defineProperty(this, "setFieldsValue", function(store) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (store) {
      var nextStore = merge$1(_this.store, store);
      _this.updateStore(nextStore);
    }
    _this.notifyObservers(prevStore, null, {
      type: "valueUpdate",
      source: "external"
    });
    _this.notifyWatch();
  });
  _defineProperty(this, "setFieldValue", function(name, value) {
    _this.setFields([{
      name,
      value
    }]);
  });
  _defineProperty(this, "getDependencyChildrenFields", function(rootNamePath) {
    var children = /* @__PURE__ */ new Set();
    var childrenFields = [];
    var dependencies2fields = new NameMap();
    _this.getFieldEntities().forEach(function(field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function(dependency) {
        var dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, function() {
          var fields = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          fields.add(field);
          return fields;
        });
      });
    });
    var fillChildren = function fillChildren2(namePath) {
      var fields = dependencies2fields.get(namePath) || /* @__PURE__ */ new Set();
      fields.forEach(function(field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();
          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren2(fieldNamePath);
          }
        }
      });
    };
    fillChildren(rootNamePath);
    return childrenFields;
  });
  _defineProperty(this, "triggerOnFieldsChange", function(namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;
    if (onFieldsChange) {
      var fields = _this.getFields();
      if (filedErrors) {
        var cache = new NameMap();
        filedErrors.forEach(function(_ref6) {
          var name = _ref6.name, errors = _ref6.errors;
          cache.set(name, errors);
        });
        fields.forEach(function(field) {
          field.errors = cache.get(field.name) || field.errors;
        });
      }
      var changedFields = fields.filter(function(_ref7) {
        var fieldName = _ref7.name;
        return containsNamePath(namePathList, fieldName);
      });
      if (changedFields.length) {
        onFieldsChange(changedFields, fields);
      }
    }
  });
  _defineProperty(this, "validateFields", function(arg1, arg2) {
    _this.warningUnhooked();
    var nameList;
    var options2;
    if (Array.isArray(arg1) || typeof arg1 === "string" || typeof arg2 === "string") {
      nameList = arg1;
      options2 = arg2;
    } else {
      options2 = arg1;
    }
    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(getNamePath) : [];
    var promiseList = [];
    var TMP_SPLIT = String(Date.now());
    var validateNamePathList = /* @__PURE__ */ new Set();
    var _ref8 = options2 || {}, recursive = _ref8.recursive, dirty = _ref8.dirty;
    _this.getFieldEntities(true).forEach(function(field) {
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }
      if (!field.props.rules || !field.props.rules.length) {
        return;
      }
      if (dirty && !field.isFieldDirty()) {
        return;
      }
      var fieldNamePath = field.getNamePath();
      validateNamePathList.add(fieldNamePath.join(TMP_SPLIT));
      if (!provideNameList || containsNamePath(namePathList, fieldNamePath, recursive)) {
        var promise = field.validateRules(_objectSpread2({
          validateMessages: _objectSpread2(_objectSpread2({}, defaultValidateMessages), _this.validateMessages)
        }, options2));
        promiseList.push(promise.then(function() {
          return {
            name: fieldNamePath,
            errors: [],
            warnings: []
          };
        }).catch(function(ruleErrors) {
          var _ruleErrors$forEach;
          var mergedErrors = [];
          var mergedWarnings = [];
          (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function(_ref9) {
            var warningOnly = _ref9.rule.warningOnly, errors = _ref9.errors;
            if (warningOnly) {
              mergedWarnings.push.apply(mergedWarnings, _toConsumableArray(errors));
            } else {
              mergedErrors.push.apply(mergedErrors, _toConsumableArray(errors));
            }
          });
          if (mergedErrors.length) {
            return Promise.reject({
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }
          return {
            name: fieldNamePath,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    });
    var summaryPromise = allPromiseFinish(promiseList);
    _this.lastValidatePromise = summaryPromise;
    summaryPromise.catch(function(results) {
      return results;
    }).then(function(results) {
      var resultNamePathList = results.map(function(_ref10) {
        var name = _ref10.name;
        return name;
      });
      _this.notifyObservers(_this.store, resultNamePathList, {
        type: "validateFinish"
      });
      _this.triggerOnFieldsChange(resultNamePathList, results);
    });
    var returnPromise = summaryPromise.then(function() {
      if (_this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(_this.getFieldsValue(namePathList));
      }
      return Promise.reject([]);
    }).catch(function(results) {
      var errorList = results.filter(function(result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: _this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: _this.lastValidatePromise !== summaryPromise
      });
    });
    returnPromise.catch(function(e2) {
      return e2;
    });
    var triggerNamePathList = namePathList.filter(function(namePath) {
      return validateNamePathList.has(namePath.join(TMP_SPLIT));
    });
    _this.triggerOnFieldsChange(triggerNamePathList);
    return returnPromise;
  });
  _defineProperty(this, "submit", function() {
    _this.warningUnhooked();
    _this.validateFields().then(function(values) {
      var onFinish = _this.callbacks.onFinish;
      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          console.error(err);
        }
      }
    }).catch(function(e2) {
      var onFinishFailed = _this.callbacks.onFinishFailed;
      if (onFinishFailed) {
        onFinishFailed(e2);
      }
    });
  });
  this.forceRootUpdate = forceRootUpdate;
});
function useForm(form) {
  var formRef = reactExports.useRef();
  var _React$useState = reactExports.useState({}), _React$useState2 = _slicedToArray(_React$useState, 2), forceUpdate = _React$useState2[1];
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      var forceReRender = function forceReRender2() {
        forceUpdate({});
      };
      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
var FormContext = /* @__PURE__ */ reactExports.createContext({
  triggerFormChange: function triggerFormChange() {
  },
  triggerFormFinish: function triggerFormFinish() {
  },
  registerForm: function registerForm() {
  },
  unregisterForm: function unregisterForm() {
  }
});
var FormProvider = function FormProvider2(_ref) {
  var validateMessages = _ref.validateMessages, onFormChange = _ref.onFormChange, onFormFinish = _ref.onFormFinish, children = _ref.children;
  var formContext = reactExports.useContext(FormContext);
  var formsRef = reactExports.useRef({});
  return /* @__PURE__ */ reactExports.createElement(FormContext.Provider, {
    value: _objectSpread2(_objectSpread2({}, formContext), {}, {
      validateMessages: _objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function triggerFormChange2(name, changedFields) {
        if (onFormChange) {
          onFormChange(name, {
            changedFields,
            forms: formsRef.current
          });
        }
        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: function triggerFormFinish2(name, values) {
        if (onFormFinish) {
          onFormFinish(name, {
            values,
            forms: formsRef.current
          });
        }
        formContext.triggerFormFinish(name, values);
      },
      registerForm: function registerForm2(name, form) {
        if (name) {
          formsRef.current = _objectSpread2(_objectSpread2({}, formsRef.current), {}, _defineProperty({}, name, form));
        }
        formContext.registerForm(name, form);
      },
      unregisterForm: function unregisterForm2(name) {
        var newForms = _objectSpread2({}, formsRef.current);
        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    })
  }, children);
};
var _excluded$g = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"];
var Form = function Form2(_ref, ref) {
  var name = _ref.name, initialValues = _ref.initialValues, fields = _ref.fields, form = _ref.form, preserve2 = _ref.preserve, children = _ref.children, _ref$component = _ref.component, Component = _ref$component === void 0 ? "form" : _ref$component, validateMessages = _ref.validateMessages, _ref$validateTrigger = _ref.validateTrigger, validateTrigger = _ref$validateTrigger === void 0 ? "onChange" : _ref$validateTrigger, onValuesChange = _ref.onValuesChange, _onFieldsChange = _ref.onFieldsChange, _onFinish = _ref.onFinish, onFinishFailed = _ref.onFinishFailed, restProps = _objectWithoutProperties(_ref, _excluded$g);
  var formContext = reactExports.useContext(FormContext);
  var _useForm = useForm(form), _useForm2 = _slicedToArray(_useForm, 1), formInstance = _useForm2[0];
  var _getInternalHooks = formInstance.getInternalHooks(HOOK_MARK), useSubscribe = _getInternalHooks.useSubscribe, setInitialValues = _getInternalHooks.setInitialValues, setCallbacks = _getInternalHooks.setCallbacks, setValidateMessages = _getInternalHooks.setValidateMessages, setPreserve = _getInternalHooks.setPreserve, destroyForm = _getInternalHooks.destroyForm;
  reactExports.useImperativeHandle(ref, function() {
    return formInstance;
  });
  reactExports.useEffect(function() {
    formContext.registerForm(name, formInstance);
    return function() {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]);
  setValidateMessages(_objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages));
  setCallbacks({
    onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);
      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }
        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);
      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed
  });
  setPreserve(preserve2);
  var mountRef = reactExports.useRef(null);
  setInitialValues(initialValues, !mountRef.current);
  if (!mountRef.current) {
    mountRef.current = true;
  }
  reactExports.useEffect(
    function() {
      return destroyForm;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var childrenNode;
  var childrenRenderProps = typeof children === "function";
  if (childrenRenderProps) {
    var _values = formInstance.getFieldsValue(true);
    childrenNode = children(_values, formInstance);
  } else {
    childrenNode = children;
  }
  useSubscribe(!childrenRenderProps);
  var prevFieldsRef = reactExports.useRef();
  reactExports.useEffect(function() {
    if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }
    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  var formContextValue = reactExports.useMemo(function() {
    return _objectSpread2(_objectSpread2({}, formInstance), {}, {
      validateTrigger
    });
  }, [formInstance, validateTrigger]);
  var wrapperNode = /* @__PURE__ */ reactExports.createElement(ListContext.Provider, {
    value: null
  }, /* @__PURE__ */ reactExports.createElement(Context$1.Provider, {
    value: formContextValue
  }, childrenNode));
  if (Component === false) {
    return wrapperNode;
  }
  return /* @__PURE__ */ reactExports.createElement(Component, _extends$1({}, restProps, {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: function onReset(event) {
      var _restProps$onReset;
      event.preventDefault();
      formInstance.resetFields();
      (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 || _restProps$onReset.call(restProps, event);
    }
  }), wrapperNode);
};
function stringify(value) {
  try {
    return JSON.stringify(value);
  } catch (err) {
    return Math.random();
  }
}
function useWatch$1() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var dependencies = args[0], _args$ = args[1], _form = _args$ === void 0 ? {} : _args$;
  var options2 = isFormInstance(_form) ? {
    form: _form
  } : _form;
  var form = options2.form;
  var _useState = reactExports.useState(), _useState2 = _slicedToArray(_useState, 2), value = _useState2[0], setValue = _useState2[1];
  var valueStr = reactExports.useMemo(function() {
    return stringify(value);
  }, [value]);
  var valueStrRef = reactExports.useRef(valueStr);
  valueStrRef.current = valueStr;
  var fieldContext = reactExports.useContext(Context$1);
  var formInstance = form || fieldContext;
  var isValidForm = formInstance && formInstance._init;
  var namePath = getNamePath(dependencies);
  var namePathRef = reactExports.useRef(namePath);
  namePathRef.current = namePath;
  reactExports.useEffect(
    function() {
      if (!isValidForm) {
        return;
      }
      var getFieldsValue = formInstance.getFieldsValue, getInternalHooks2 = formInstance.getInternalHooks;
      var _getInternalHooks = getInternalHooks2(HOOK_MARK), registerWatch = _getInternalHooks.registerWatch;
      var getWatchValue = function getWatchValue2(values, allValues) {
        var watchValue = options2.preserve ? allValues : values;
        return typeof dependencies === "function" ? dependencies(watchValue) : get(watchValue, namePathRef.current);
      };
      var cancelRegister = registerWatch(function(values, allValues) {
        var newValue = getWatchValue(values, allValues);
        var nextValueStr = stringify(newValue);
        if (valueStrRef.current !== nextValueStr) {
          valueStrRef.current = nextValueStr;
          setValue(newValue);
        }
      });
      var initialValue = getWatchValue(getFieldsValue(), getFieldsValue(true));
      if (value !== initialValue) {
        setValue(initialValue);
      }
      return cancelRegister;
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isValidForm]
  );
  return value;
}
var InternalForm = /* @__PURE__ */ reactExports.forwardRef(Form);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = WrapperField;
RefForm.List = List$1;
RefForm.useForm = useForm;
RefForm.useWatch = useWatch$1;
const FormItemInputContext = /* @__PURE__ */ reactExports.createContext({});
const NoFormStyle = (_ref) => {
  let {
    children,
    status,
    override
  } = _ref;
  const formItemInputContext = reactExports.useContext(FormItemInputContext);
  const newFormItemInputContext = reactExports.useMemo(() => {
    const newContext = Object.assign({}, formItemInputContext);
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return /* @__PURE__ */ reactExports.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};
const initMotionCommon = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
const initMotionCommonLeave = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
const initMotion = function(motionCls, inKeyframes, outKeyframes, duration) {
  let sameLevel = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
      animationPlayState: "paused"
    }),
    [`${sameLevelPrefix}${motionCls}-leave`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
      animationPlayState: "paused"
    }),
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: "running"
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
};
const moveDownIn = new Keyframe("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveDownOut = new Keyframe("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveLeftIn = new Keyframe("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveLeftOut = new Keyframe("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveRightIn = new Keyframe("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveRightOut = new Keyframe("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveUpIn = new Keyframe("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveUpOut = new Keyframe("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveMotion = {
  "move-up": {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  "move-down": {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  "move-left": {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  "move-right": {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token2, motionName) => {
  const {
    antCls
  } = token2;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token2.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token2.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token2.motionEaseInOutCirc
    }
  }];
};
const slideUpIn = new Keyframe("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideUpOut = new Keyframe("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideDownIn = new Keyframe("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
});
const slideDownOut = new Keyframe("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
});
const slideLeftIn = new Keyframe("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideLeftOut = new Keyframe("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideRightIn = new Keyframe("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
});
const slideRightOut = new Keyframe("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
});
const slideMotion = {
  "slide-up": {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  "slide-down": {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  "slide-left": {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  "slide-right": {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token2, motionName) => {
  const {
    antCls
  } = token2;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token2.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: token2.motionEaseOutQuint,
      [`&-prepare`]: {
        transform: "scale(1)"
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token2.motionEaseInQuint
    }
  }];
};
function withPureRenderTheme(Component) {
  return function PureRenderThemeComponent(props) {
    return /* @__PURE__ */ reactExports.createElement(ConfigProvider, {
      theme: {
        token: {
          motion: false,
          zIndexPopupBase: 0
        }
      }
    }, /* @__PURE__ */ reactExports.createElement(Component, Object.assign({}, props)));
  };
}
function genPurePanel(Component, defaultPrefixCls2, getDropdownCls, postProps) {
  function PurePanel2(props) {
    const {
      prefixCls: customizePrefixCls,
      style: style2
    } = props;
    const holderRef = reactExports.useRef(null);
    const [popupHeight, setPopupHeight] = reactExports.useState(0);
    const [popupWidth, setPopupWidth] = reactExports.useState(0);
    const [open, setOpen] = useMergedState(false, {
      value: props.open
    });
    const {
      getPrefixCls
    } = reactExports.useContext(ConfigContext);
    const prefixCls = getPrefixCls(defaultPrefixCls2 || "select", customizePrefixCls);
    reactExports.useEffect(() => {
      setOpen(true);
      if (typeof ResizeObserver !== "undefined") {
        const resizeObserver2 = new ResizeObserver((entries) => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          var _a;
          const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
          const popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver2.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver2.disconnect();
        };
      }
    }, []);
    let mergedProps = Object.assign(Object.assign({}, props), {
      style: Object.assign(Object.assign({}, style2), {
        margin: 0
      }),
      open,
      visible: open,
      getPopupContainer: () => holderRef.current
    });
    if (postProps) {
      mergedProps = postProps(mergedProps);
    }
    return /* @__PURE__ */ reactExports.createElement("div", {
      ref: holderRef,
      style: {
        paddingBottom: popupHeight,
        position: "relative",
        minWidth: popupWidth
      }
    }, /* @__PURE__ */ reactExports.createElement(Component, Object.assign({}, mergedProps)));
  }
  return withPureRenderTheme(PurePanel2);
}
const isMobile = function() {
  if (typeof navigator === "undefined" || typeof window === "undefined") {
    return false;
  }
  var agent = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
};
var TransBtn = function TransBtn2(_ref) {
  var className = _ref.className, customizeIcon = _ref.customizeIcon, customizeIconProps = _ref.customizeIconProps, _onMouseDown = _ref.onMouseDown, onClick = _ref.onClick, children = _ref.children;
  var icon;
  if (typeof customizeIcon === "function") {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }
  return /* @__PURE__ */ reactExports.createElement("span", {
    className,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      if (_onMouseDown) {
        _onMouseDown(event);
      }
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick,
    "aria-hidden": true
  }, icon !== void 0 ? icon : /* @__PURE__ */ reactExports.createElement("span", {
    className: classNames(className.split(/\s+/).map(function(cls) {
      return "".concat(cls, "-icon");
    }))
  }, children));
};
function useAllowClear(prefixCls, onClearMouseDown, displayValues, allowClear, clearIcon) {
  var disabled = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false;
  var mergedSearchValue = arguments.length > 6 ? arguments[6] : void 0;
  var mode = arguments.length > 7 ? arguments[7] : void 0;
  var mergedClearIcon = React.useMemo(function() {
    if (_typeof(allowClear) === "object") {
      return allowClear.clearIcon;
    }
    if (!!clearIcon)
      return clearIcon;
  }, [allowClear, clearIcon]);
  var mergedAllowClear = React.useMemo(function() {
    if (!disabled && !!allowClear && (displayValues.length || mergedSearchValue) && !(mode === "combobox" && mergedSearchValue === "")) {
      return true;
    }
    return false;
  }, [allowClear, disabled, displayValues.length, mergedSearchValue, mode]);
  return {
    allowClear: mergedAllowClear,
    clearIcon: /* @__PURE__ */ React.createElement(TransBtn, {
      className: "".concat(prefixCls, "-clear"),
      onMouseDown: onClearMouseDown,
      customizeIcon: mergedClearIcon
    }, "×")
  };
}
var BaseSelectContext = /* @__PURE__ */ reactExports.createContext(null);
function useBaseProps() {
  return reactExports.useContext(BaseSelectContext);
}
function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), bool = _React$useState2[0], setBool = _React$useState2[1];
  var delayRef = reactExports.useRef(null);
  var cancelLatest = function cancelLatest2() {
    window.clearTimeout(delayRef.current);
  };
  reactExports.useEffect(function() {
    return cancelLatest;
  }, []);
  var delaySetBool = function delaySetBool2(value, callback) {
    cancelLatest();
    delayRef.current = window.setTimeout(function() {
      setBool(value);
      if (callback) {
        callback();
      }
    }, timeout);
  };
  return [bool, delaySetBool, cancelLatest];
}
function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250;
  var lockRef = reactExports.useRef(null);
  var timeoutRef = reactExports.useRef(null);
  reactExports.useEffect(function() {
    return function() {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);
  function doLock(locked) {
    if (locked || lockRef.current === null) {
      lockRef.current = locked;
    }
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(function() {
      lockRef.current = null;
    }, duration);
  }
  return [function() {
    return lockRef.current;
  }, doLock];
}
function useSelectTriggerControl(elements, open, triggerOpen, customizedTrigger) {
  var propsRef = reactExports.useRef(null);
  propsRef.current = {
    open,
    triggerOpen,
    customizedTrigger
  };
  reactExports.useEffect(function() {
    function onGlobalMouseDown(event) {
      var _propsRef$current;
      if ((_propsRef$current = propsRef.current) !== null && _propsRef$current !== void 0 && _propsRef$current.customizedTrigger) {
        return;
      }
      var target = event.target;
      if (target.shadowRoot && event.composed) {
        target = event.composedPath()[0] || target;
      }
      if (propsRef.current.open && elements().filter(function(element) {
        return element;
      }).every(function(element) {
        return !element.contains(target) && element !== target;
      })) {
        propsRef.current.triggerOpen(false);
      }
    }
    window.addEventListener("mousedown", onGlobalMouseDown);
    return function() {
      return window.removeEventListener("mousedown", onGlobalMouseDown);
    };
  }, []);
}
var _excluded$f = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"];
var UNDEFINED = void 0;
function InternalItem(props, ref) {
  var prefixCls = props.prefixCls, invalidate = props.invalidate, item = props.item, renderItem = props.renderItem, responsive = props.responsive, responsiveDisabled = props.responsiveDisabled, registerSize = props.registerSize, itemKey2 = props.itemKey, className = props.className, style2 = props.style, children = props.children, display = props.display, order = props.order, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, restProps = _objectWithoutProperties(props, _excluded$f);
  var mergedHidden = responsive && !display;
  function internalRegisterSize(width) {
    registerSize(itemKey2, width);
  }
  reactExports.useEffect(function() {
    return function() {
      internalRegisterSize(null);
    };
  }, []);
  var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
  var overflowStyle;
  if (!invalidate) {
    overflowStyle = {
      opacity: mergedHidden ? 0 : 1,
      height: mergedHidden ? 0 : UNDEFINED,
      overflowY: mergedHidden ? "hidden" : UNDEFINED,
      order: responsive ? order : UNDEFINED,
      pointerEvents: mergedHidden ? "none" : UNDEFINED,
      position: mergedHidden ? "absolute" : UNDEFINED
    };
  }
  var overflowProps = {};
  if (mergedHidden) {
    overflowProps["aria-hidden"] = true;
  }
  var itemNode = /* @__PURE__ */ reactExports.createElement(Component, _extends$1({
    className: classNames(!invalidate && prefixCls, className),
    style: _objectSpread2(_objectSpread2({}, overflowStyle), style2)
  }, overflowProps, restProps, {
    ref
  }), childNode);
  if (responsive) {
    itemNode = /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
      onResize: function onResize2(_ref) {
        var offsetWidth = _ref.offsetWidth;
        internalRegisterSize(offsetWidth);
      },
      disabled: responsiveDisabled
    }, itemNode);
  }
  return itemNode;
}
var Item$1 = /* @__PURE__ */ reactExports.forwardRef(InternalItem);
Item$1.displayName = "Item";
function channelUpdate(callback) {
  if (typeof MessageChannel === "undefined") {
    wrapperRaf(callback);
  } else {
    var channel = new MessageChannel();
    channel.port1.onmessage = function() {
      return callback();
    };
    channel.port2.postMessage(void 0);
  }
}
function useBatcher() {
  var updateFuncRef = reactExports.useRef(null);
  var notifyEffectUpdate = function notifyEffectUpdate2(callback) {
    if (!updateFuncRef.current) {
      updateFuncRef.current = [];
      channelUpdate(function() {
        reactDomExports.unstable_batchedUpdates(function() {
          updateFuncRef.current.forEach(function(fn) {
            fn();
          });
          updateFuncRef.current = null;
        });
      });
    }
    updateFuncRef.current.push(callback);
  };
  return notifyEffectUpdate;
}
function useEffectState(notifyEffectUpdate, defaultValue) {
  var _React$useState = reactExports.useState(defaultValue), _React$useState2 = _slicedToArray(_React$useState, 2), stateValue = _React$useState2[0], setStateValue = _React$useState2[1];
  var setEffectVal = useEvent(function(nextValue) {
    notifyEffectUpdate(function() {
      setStateValue(nextValue);
    });
  });
  return [stateValue, setEffectVal];
}
var OverflowContext = /* @__PURE__ */ React.createContext(null);
var _excluded$e = ["component"], _excluded2$1 = ["className"], _excluded3 = ["className"];
var InternalRawItem = function InternalRawItem2(props, ref) {
  var context = reactExports.useContext(OverflowContext);
  if (!context) {
    var _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, _restProps = _objectWithoutProperties(props, _excluded$e);
    return /* @__PURE__ */ reactExports.createElement(Component, _extends$1({}, _restProps, {
      ref
    }));
  }
  var contextClassName = context.className, restContext = _objectWithoutProperties(context, _excluded2$1);
  var className = props.className, restProps = _objectWithoutProperties(props, _excluded3);
  return /* @__PURE__ */ reactExports.createElement(OverflowContext.Provider, {
    value: null
  }, /* @__PURE__ */ reactExports.createElement(Item$1, _extends$1({
    ref,
    className: classNames(contextClassName, className)
  }, restContext, restProps)));
};
var RawItem = /* @__PURE__ */ reactExports.forwardRef(InternalRawItem);
RawItem.displayName = "RawItem";
var _excluded$d = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"];
var RESPONSIVE = "responsive";
var INVALIDATE = "invalidate";
function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}
function Overflow(props, ref) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-overflow" : _props$prefixCls, _props$data = props.data, data = _props$data === void 0 ? [] : _props$data, renderItem = props.renderItem, renderRawItem = props.renderRawItem, itemKey2 = props.itemKey, _props$itemWidth = props.itemWidth, itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth, ssr = props.ssr, style2 = props.style, className = props.className, maxCount = props.maxCount, renderRest = props.renderRest, renderRawRest = props.renderRawRest, suffix = props.suffix, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, itemComponent = props.itemComponent, onVisibleChange = props.onVisibleChange, restProps = _objectWithoutProperties(props, _excluded$d);
  var fullySSR = ssr === "full";
  var notifyEffectUpdate = useBatcher();
  var _useEffectState = useEffectState(notifyEffectUpdate, null), _useEffectState2 = _slicedToArray(_useEffectState, 2), containerWidth = _useEffectState2[0], setContainerWidth = _useEffectState2[1];
  var mergedContainerWidth = containerWidth || 0;
  var _useEffectState3 = useEffectState(notifyEffectUpdate, /* @__PURE__ */ new Map()), _useEffectState4 = _slicedToArray(_useEffectState3, 2), itemWidths = _useEffectState4[0], setItemWidths = _useEffectState4[1];
  var _useEffectState5 = useEffectState(notifyEffectUpdate, 0), _useEffectState6 = _slicedToArray(_useEffectState5, 2), prevRestWidth = _useEffectState6[0], setPrevRestWidth = _useEffectState6[1];
  var _useEffectState7 = useEffectState(notifyEffectUpdate, 0), _useEffectState8 = _slicedToArray(_useEffectState7, 2), restWidth = _useEffectState8[0], setRestWidth = _useEffectState8[1];
  var _useEffectState9 = useEffectState(notifyEffectUpdate, 0), _useEffectState10 = _slicedToArray(_useEffectState9, 2), suffixWidth = _useEffectState10[0], setSuffixWidth = _useEffectState10[1];
  var _useState = reactExports.useState(null), _useState2 = _slicedToArray(_useState, 2), suffixFixedStart = _useState2[0], setSuffixFixedStart = _useState2[1];
  var _useState3 = reactExports.useState(null), _useState4 = _slicedToArray(_useState3, 2), displayCount = _useState4[0], setDisplayCount = _useState4[1];
  var mergedDisplayCount = reactExports.useMemo(function() {
    if (displayCount === null && fullySSR) {
      return Number.MAX_SAFE_INTEGER;
    }
    return displayCount || 0;
  }, [displayCount, containerWidth]);
  var _useState5 = reactExports.useState(false), _useState6 = _slicedToArray(_useState5, 2), restReady = _useState6[0], setRestReady = _useState6[1];
  var itemPrefixCls = "".concat(prefixCls, "-item");
  var mergedRestWidth = Math.max(prevRestWidth, restWidth);
  var isResponsive = maxCount === RESPONSIVE;
  var shouldResponsive = data.length && isResponsive;
  var invalidate = maxCount === INVALIDATE;
  var showRest = shouldResponsive || typeof maxCount === "number" && data.length > maxCount;
  var mergedData = reactExports.useMemo(function() {
    var items = data;
    if (shouldResponsive) {
      if (containerWidth === null && fullySSR) {
        items = data;
      } else {
        items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
      }
    } else if (typeof maxCount === "number") {
      items = data.slice(0, maxCount);
    }
    return items;
  }, [data, itemWidth, containerWidth, maxCount, shouldResponsive]);
  var omittedItems = reactExports.useMemo(function() {
    if (shouldResponsive) {
      return data.slice(mergedDisplayCount + 1);
    }
    return data.slice(mergedData.length);
  }, [data, mergedData, shouldResponsive, mergedDisplayCount]);
  var getKey2 = reactExports.useCallback(function(item, index2) {
    var _ref;
    if (typeof itemKey2 === "function") {
      return itemKey2(item);
    }
    return (_ref = itemKey2 && (item === null || item === void 0 ? void 0 : item[itemKey2])) !== null && _ref !== void 0 ? _ref : index2;
  }, [itemKey2]);
  var mergedRenderItem = reactExports.useCallback(renderItem || function(item) {
    return item;
  }, [renderItem]);
  function updateDisplayCount(count, suffixFixedStartVal, notReady) {
    if (displayCount === count && (suffixFixedStartVal === void 0 || suffixFixedStartVal === suffixFixedStart)) {
      return;
    }
    setDisplayCount(count);
    if (!notReady) {
      setRestReady(count < data.length - 1);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(count);
    }
    if (suffixFixedStartVal !== void 0) {
      setSuffixFixedStart(suffixFixedStartVal);
    }
  }
  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }
  function registerSize(key, width) {
    setItemWidths(function(origin) {
      var clone = new Map(origin);
      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }
      return clone;
    });
  }
  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }
  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  }
  function getItemWidth(index2) {
    return itemWidths.get(getKey2(mergedData[index2], index2));
  }
  useLayoutEffect$1(function() {
    if (mergedContainerWidth && typeof mergedRestWidth === "number" && mergedData) {
      var totalWidth = suffixWidth;
      var len = mergedData.length;
      var lastIndex = len - 1;
      if (!len) {
        updateDisplayCount(0, null);
        return;
      }
      for (var i = 0; i < len; i += 1) {
        var currentItemWidth = getItemWidth(i);
        if (fullySSR) {
          currentItemWidth = currentItemWidth || 0;
        }
        if (currentItemWidth === void 0) {
          updateDisplayCount(i - 1, void 0, true);
          break;
        }
        totalWidth += currentItemWidth;
        if (
          // Only one means `totalWidth` is the final width
          lastIndex === 0 && totalWidth <= mergedContainerWidth || // Last two width will be the final width
          i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth
        ) {
          updateDisplayCount(lastIndex, null);
          break;
        } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
          updateDisplayCount(i - 1, totalWidth - currentItemWidth - suffixWidth + restWidth);
          break;
        }
      }
      if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
        setSuffixFixedStart(null);
      }
    }
  }, [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey2, mergedData]);
  var displayRest = restReady && !!omittedItems.length;
  var suffixStyle = {};
  if (suffixFixedStart !== null && shouldResponsive) {
    suffixStyle = {
      position: "absolute",
      left: suffixFixedStart,
      top: 0
    };
  }
  var itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: shouldResponsive,
    component: itemComponent,
    invalidate
  };
  var internalRenderItemNode = renderRawItem ? function(item, index2) {
    var key = getKey2(item, index2);
    return /* @__PURE__ */ reactExports.createElement(OverflowContext.Provider, {
      key,
      value: _objectSpread2(_objectSpread2({}, itemSharedProps), {}, {
        order: index2,
        item,
        itemKey: key,
        registerSize,
        display: index2 <= mergedDisplayCount
      })
    }, renderRawItem(item, index2));
  } : function(item, index2) {
    var key = getKey2(item, index2);
    return /* @__PURE__ */ reactExports.createElement(Item$1, _extends$1({}, itemSharedProps, {
      order: index2,
      key,
      item,
      renderItem: mergedRenderItem,
      itemKey: key,
      registerSize,
      display: index2 <= mergedDisplayCount
    }));
  };
  var restNode;
  var restContextProps = {
    order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
    className: "".concat(itemPrefixCls, "-rest"),
    registerSize: registerOverflowSize,
    display: displayRest
  };
  if (!renderRawRest) {
    var mergedRenderRest = renderRest || defaultRenderRest;
    restNode = /* @__PURE__ */ reactExports.createElement(Item$1, _extends$1({}, itemSharedProps, restContextProps), typeof mergedRenderRest === "function" ? mergedRenderRest(omittedItems) : mergedRenderRest);
  } else if (renderRawRest) {
    restNode = /* @__PURE__ */ reactExports.createElement(OverflowContext.Provider, {
      value: _objectSpread2(_objectSpread2({}, itemSharedProps), restContextProps)
    }, renderRawRest(omittedItems));
  }
  var overflowNode = /* @__PURE__ */ reactExports.createElement(Component, _extends$1({
    className: classNames(!invalidate && prefixCls, className),
    style: style2,
    ref
  }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /* @__PURE__ */ reactExports.createElement(Item$1, _extends$1({}, itemSharedProps, {
    responsive: isResponsive,
    responsiveDisabled: !shouldResponsive,
    order: mergedDisplayCount,
    className: "".concat(itemPrefixCls, "-suffix"),
    registerSize: registerSuffixSize,
    display: true,
    style: suffixStyle
  }), suffix));
  if (isResponsive) {
    overflowNode = /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
      onResize: onOverflowResize,
      disabled: !shouldResponsive
    }, overflowNode);
  }
  return overflowNode;
}
var ForwardOverflow = /* @__PURE__ */ reactExports.forwardRef(Overflow);
ForwardOverflow.displayName = "Overflow";
ForwardOverflow.Item = RawItem;
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE;
var Input$4 = function Input(_ref, ref) {
  var _inputNode2;
  var prefixCls = _ref.prefixCls, id = _ref.id, inputElement = _ref.inputElement, disabled = _ref.disabled, tabIndex = _ref.tabIndex, autoFocus = _ref.autoFocus, autoComplete = _ref.autoComplete, editable = _ref.editable, activeDescendantId = _ref.activeDescendantId, value = _ref.value, maxLength = _ref.maxLength, _onKeyDown = _ref.onKeyDown, _onMouseDown = _ref.onMouseDown, _onChange = _ref.onChange, onPaste = _ref.onPaste, _onCompositionStart = _ref.onCompositionStart, _onCompositionEnd = _ref.onCompositionEnd, open = _ref.open, attrs = _ref.attrs;
  var inputNode = inputElement || /* @__PURE__ */ reactExports.createElement("input", null);
  var _inputNode = inputNode, originRef = _inputNode.ref, originProps = _inputNode.props;
  var onOriginKeyDown = originProps.onKeyDown, onOriginChange = originProps.onChange, onOriginMouseDown = originProps.onMouseDown, onOriginCompositionStart = originProps.onCompositionStart, onOriginCompositionEnd = originProps.onCompositionEnd, style2 = originProps.style;
  warning$3(!("maxLength" in inputNode.props));
  inputNode = /* @__PURE__ */ reactExports.cloneElement(inputNode, _objectSpread2(_objectSpread2(_objectSpread2({
    type: "search"
  }, originProps), {}, {
    // Override over origin props
    id,
    ref: composeRef(ref, originRef),
    disabled,
    tabIndex,
    autoComplete: autoComplete || "off",
    autoFocus,
    className: classNames("".concat(prefixCls, "-selection-search-input"), (_inputNode2 = inputNode) === null || _inputNode2 === void 0 || (_inputNode2 = _inputNode2.props) === null || _inputNode2 === void 0 ? void 0 : _inputNode2.className),
    role: "combobox",
    "aria-expanded": open || false,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(id, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(id, "_list"),
    "aria-activedescendant": open ? activeDescendantId : void 0
  }, attrs), {}, {
    value: editable ? value : "",
    maxLength,
    readOnly: !editable,
    unselectable: !editable ? "on" : null,
    style: _objectSpread2(_objectSpread2({}, style2), {}, {
      opacity: editable ? null : 0
    }),
    onKeyDown: function onKeyDown(event) {
      _onKeyDown(event);
      if (onOriginKeyDown) {
        onOriginKeyDown(event);
      }
    },
    onMouseDown: function onMouseDown(event) {
      _onMouseDown(event);
      if (onOriginMouseDown) {
        onOriginMouseDown(event);
      }
    },
    onChange: function onChange(event) {
      _onChange(event);
      if (onOriginChange) {
        onOriginChange(event);
      }
    },
    onCompositionStart: function onCompositionStart(event) {
      _onCompositionStart(event);
      if (onOriginCompositionStart) {
        onOriginCompositionStart(event);
      }
    },
    onCompositionEnd: function onCompositionEnd(event) {
      _onCompositionEnd(event);
      if (onOriginCompositionEnd) {
        onOriginCompositionEnd(event);
      }
    },
    onPaste
  }));
  return inputNode;
};
var RefInput = /* @__PURE__ */ reactExports.forwardRef(Input$4);
RefInput.displayName = "Input";
function toArray$1(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== void 0 ? [value] : [];
}
var isClient = typeof window !== "undefined" && window.document && window.document.documentElement;
var isBrowserClient$1 = isClient;
function hasValue(value) {
  return value !== void 0 && value !== null;
}
function isComboNoValue(value) {
  return !value && value !== 0;
}
function isTitleType$1(title) {
  return ["string", "number"].includes(_typeof(title));
}
function getTitle(item) {
  var title = void 0;
  if (item) {
    if (isTitleType$1(item.title)) {
      title = item.title.toString();
    } else if (isTitleType$1(item.label)) {
      title = item.label.toString();
    }
  }
  return title;
}
function useLayoutEffect(effect, deps) {
  if (isBrowserClient$1) {
    reactExports.useLayoutEffect(effect, deps);
  } else {
    reactExports.useEffect(effect, deps);
  }
}
function itemKey(value) {
  var _value$key;
  return (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : value.value;
}
var onPreventMouseDown = function onPreventMouseDown2(event) {
  event.preventDefault();
  event.stopPropagation();
};
var SelectSelector = function SelectSelector2(props) {
  var id = props.id, prefixCls = props.prefixCls, values = props.values, open = props.open, searchValue = props.searchValue, autoClearSearchValue = props.autoClearSearchValue, inputRef = props.inputRef, placeholder = props.placeholder, disabled = props.disabled, mode = props.mode, showSearch = props.showSearch, autoFocus = props.autoFocus, autoComplete = props.autoComplete, activeDescendantId = props.activeDescendantId, tabIndex = props.tabIndex, removeIcon = props.removeIcon, maxTagCount = props.maxTagCount, maxTagTextLength = props.maxTagTextLength, _props$maxTagPlacehol = props.maxTagPlaceholder, maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function(omittedValues) {
    return "+ ".concat(omittedValues.length, " ...");
  } : _props$maxTagPlacehol, tagRender = props.tagRender, onToggleOpen = props.onToggleOpen, onRemove = props.onRemove, onInputChange = props.onInputChange, onInputPaste = props.onInputPaste, onInputKeyDown = props.onInputKeyDown, onInputMouseDown = props.onInputMouseDown, onInputCompositionStart = props.onInputCompositionStart, onInputCompositionEnd = props.onInputCompositionEnd;
  var measureRef = reactExports.useRef(null);
  var _useState = reactExports.useState(0), _useState2 = _slicedToArray(_useState, 2), inputWidth = _useState2[0], setInputWidth = _useState2[1];
  var _useState3 = reactExports.useState(false), _useState4 = _slicedToArray(_useState3, 2), focused = _useState4[0], setFocused = _useState4[1];
  var selectionPrefixCls = "".concat(prefixCls, "-selection");
  var inputValue = open || mode === "multiple" && autoClearSearchValue === false || mode === "tags" ? searchValue : "";
  var inputEditable = mode === "tags" || mode === "multiple" && autoClearSearchValue === false || showSearch && (open || focused);
  useLayoutEffect(function() {
    setInputWidth(measureRef.current.scrollWidth);
  }, [inputValue]);
  function defaultRenderSelector(item, content, itemDisabled, closable, onClose) {
    return /* @__PURE__ */ reactExports.createElement("span", {
      className: classNames("".concat(selectionPrefixCls, "-item"), _defineProperty({}, "".concat(selectionPrefixCls, "-item-disabled"), itemDisabled)),
      title: getTitle(item)
    }, /* @__PURE__ */ reactExports.createElement("span", {
      className: "".concat(selectionPrefixCls, "-item-content")
    }, content), closable && /* @__PURE__ */ reactExports.createElement(TransBtn, {
      className: "".concat(selectionPrefixCls, "-item-remove"),
      onMouseDown: onPreventMouseDown,
      onClick: onClose,
      customizeIcon: removeIcon
    }, "×"));
  }
  function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
    var onMouseDown = function onMouseDown2(e2) {
      onPreventMouseDown(e2);
      onToggleOpen(!open);
    };
    return /* @__PURE__ */ reactExports.createElement("span", {
      onMouseDown
    }, tagRender({
      label: content,
      value,
      disabled: itemDisabled,
      closable,
      onClose
    }));
  }
  function renderItem(valueItem) {
    var itemDisabled = valueItem.disabled, label = valueItem.label, value = valueItem.value;
    var closable = !disabled && !itemDisabled;
    var displayLabel = label;
    if (typeof maxTagTextLength === "number") {
      if (typeof label === "string" || typeof label === "number") {
        var strLabel = String(displayLabel);
        if (strLabel.length > maxTagTextLength) {
          displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
        }
      }
    }
    var onClose = function onClose2(event) {
      if (event)
        event.stopPropagation();
      onRemove(valueItem);
    };
    return typeof tagRender === "function" ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose) : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
  }
  function renderRest(omittedValues) {
    var content = typeof maxTagPlaceholder === "function" ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
    return defaultRenderSelector({
      title: content
    }, content, false);
  }
  var inputNode = /* @__PURE__ */ reactExports.createElement("div", {
    className: "".concat(selectionPrefixCls, "-search"),
    style: {
      width: inputWidth
    },
    onFocus: function onFocus() {
      setFocused(true);
    },
    onBlur: function onBlur() {
      setFocused(false);
    }
  }, /* @__PURE__ */ reactExports.createElement(RefInput, {
    ref: inputRef,
    open,
    prefixCls,
    id,
    inputElement: null,
    disabled,
    autoFocus,
    autoComplete,
    editable: inputEditable,
    activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex,
    attrs: pickAttrs(props, true)
  }), /* @__PURE__ */ reactExports.createElement("span", {
    ref: measureRef,
    className: "".concat(selectionPrefixCls, "-search-mirror"),
    "aria-hidden": true
  }, inputValue, " "));
  var selectionNode = /* @__PURE__ */ reactExports.createElement(ForwardOverflow, {
    prefixCls: "".concat(selectionPrefixCls, "-overflow"),
    data: values,
    renderItem,
    renderRest,
    suffix: inputNode,
    itemKey,
    maxCount: maxTagCount
  });
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, selectionNode, !values.length && !inputValue && /* @__PURE__ */ reactExports.createElement("span", {
    className: "".concat(selectionPrefixCls, "-placeholder")
  }, placeholder));
};
var SingleSelector = function SingleSelector2(props) {
  var inputElement = props.inputElement, prefixCls = props.prefixCls, id = props.id, inputRef = props.inputRef, disabled = props.disabled, autoFocus = props.autoFocus, autoComplete = props.autoComplete, activeDescendantId = props.activeDescendantId, mode = props.mode, open = props.open, values = props.values, placeholder = props.placeholder, tabIndex = props.tabIndex, showSearch = props.showSearch, searchValue = props.searchValue, activeValue = props.activeValue, maxLength = props.maxLength, onInputKeyDown = props.onInputKeyDown, onInputMouseDown = props.onInputMouseDown, onInputChange = props.onInputChange, onInputPaste = props.onInputPaste, onInputCompositionStart = props.onInputCompositionStart, onInputCompositionEnd = props.onInputCompositionEnd, title = props.title;
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), inputChanged = _React$useState2[0], setInputChanged = _React$useState2[1];
  var combobox = mode === "combobox";
  var inputEditable = combobox || showSearch;
  var item = values[0];
  var inputValue = searchValue || "";
  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }
  reactExports.useEffect(function() {
    if (combobox) {
      setInputChanged(false);
    }
  }, [combobox, activeValue]);
  var hasTextInput = mode !== "combobox" && !open && !showSearch ? false : !!inputValue;
  var selectionTitle = title === void 0 ? getTitle(item) : title;
  var renderPlaceholder = function renderPlaceholder2() {
    if (item) {
      return null;
    }
    var hiddenStyle = hasTextInput ? {
      visibility: "hidden"
    } : void 0;
    return /* @__PURE__ */ reactExports.createElement("span", {
      className: "".concat(prefixCls, "-selection-placeholder"),
      style: hiddenStyle
    }, placeholder);
  };
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("span", {
    className: "".concat(prefixCls, "-selection-search")
  }, /* @__PURE__ */ reactExports.createElement(RefInput, {
    ref: inputRef,
    prefixCls,
    id,
    open,
    inputElement,
    disabled,
    autoFocus,
    autoComplete,
    editable: inputEditable,
    activeDescendantId,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: function onChange(e2) {
      setInputChanged(true);
      onInputChange(e2);
    },
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex,
    attrs: pickAttrs(props, true),
    maxLength: combobox ? maxLength : void 0
  })), !combobox && item ? /* @__PURE__ */ reactExports.createElement("span", {
    className: "".concat(prefixCls, "-selection-item"),
    title: selectionTitle,
    style: hasTextInput ? {
      visibility: "hidden"
    } : void 0
  }, item.label) : null, renderPlaceholder());
};
function isValidateOpenKey(currentKeyCode) {
  return ![
    // System function button
    KeyCode.ESC,
    KeyCode.SHIFT,
    KeyCode.BACKSPACE,
    KeyCode.TAB,
    KeyCode.WIN_KEY,
    KeyCode.ALT,
    KeyCode.META,
    KeyCode.WIN_KEY_RIGHT,
    KeyCode.CTRL,
    KeyCode.SEMICOLON,
    KeyCode.EQUALS,
    KeyCode.CAPS_LOCK,
    KeyCode.CONTEXT_MENU,
    // F1-F12
    KeyCode.F1,
    KeyCode.F2,
    KeyCode.F3,
    KeyCode.F4,
    KeyCode.F5,
    KeyCode.F6,
    KeyCode.F7,
    KeyCode.F8,
    KeyCode.F9,
    KeyCode.F10,
    KeyCode.F11,
    KeyCode.F12
  ].includes(currentKeyCode);
}
var Selector = function Selector2(props, ref) {
  var inputRef = reactExports.useRef(null);
  var compositionStatusRef = reactExports.useRef(false);
  var prefixCls = props.prefixCls, open = props.open, mode = props.mode, showSearch = props.showSearch, tokenWithEnter = props.tokenWithEnter, autoClearSearchValue = props.autoClearSearchValue, onSearch = props.onSearch, onSearchSubmit = props.onSearchSubmit, onToggleOpen = props.onToggleOpen, onInputKeyDown = props.onInputKeyDown, domRef = props.domRef;
  reactExports.useImperativeHandle(ref, function() {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  });
  var _useLock = useLock(0), _useLock2 = _slicedToArray(_useLock, 2), getInputMouseDown = _useLock2[0], setInputMouseDown = _useLock2[1];
  var onInternalInputKeyDown = function onInternalInputKeyDown2(event) {
    var which = event.which;
    if (which === KeyCode.UP || which === KeyCode.DOWN) {
      event.preventDefault();
    }
    if (onInputKeyDown) {
      onInputKeyDown(event);
    }
    if (which === KeyCode.ENTER && mode === "tags" && !compositionStatusRef.current && !open) {
      onSearchSubmit === null || onSearchSubmit === void 0 || onSearchSubmit(event.target.value);
    }
    if (isValidateOpenKey(which)) {
      onToggleOpen(true);
    }
  };
  var onInternalInputMouseDown = function onInternalInputMouseDown2() {
    setInputMouseDown(true);
  };
  var pastedTextRef = reactExports.useRef(null);
  var triggerOnSearch = function triggerOnSearch2(value) {
    if (onSearch(value, true, compositionStatusRef.current) !== false) {
      onToggleOpen(true);
    }
  };
  var onInputCompositionStart = function onInputCompositionStart2() {
    compositionStatusRef.current = true;
  };
  var onInputCompositionEnd = function onInputCompositionEnd2(e2) {
    compositionStatusRef.current = false;
    if (mode !== "combobox") {
      triggerOnSearch(e2.target.value);
    }
  };
  var onInputChange = function onInputChange2(event) {
    var value = event.target.value;
    if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
      var replacedText = pastedTextRef.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      value = value.replace(replacedText, pastedTextRef.current);
    }
    pastedTextRef.current = null;
    triggerOnSearch(value);
  };
  var onInputPaste = function onInputPaste2(e2) {
    var clipboardData = e2.clipboardData;
    var value = clipboardData.getData("text");
    pastedTextRef.current = value;
  };
  var onClick = function onClick2(_ref) {
    var target = _ref.target;
    if (target !== inputRef.current) {
      var isIE = document.body.style.msTouchAction !== void 0;
      if (isIE) {
        setTimeout(function() {
          inputRef.current.focus();
        });
      } else {
        inputRef.current.focus();
      }
    }
  };
  var onMouseDown = function onMouseDown2(event) {
    var inputMouseDown = getInputMouseDown();
    if (event.target !== inputRef.current && !inputMouseDown && mode !== "combobox") {
      event.preventDefault();
    }
    if (mode !== "combobox" && (!showSearch || !inputMouseDown) || !open) {
      if (open && autoClearSearchValue !== false) {
        onSearch("", true, false);
      }
      onToggleOpen();
    }
  };
  var sharedProps = {
    inputRef,
    onInputKeyDown: onInternalInputKeyDown,
    onInputMouseDown: onInternalInputMouseDown,
    onInputChange,
    onInputPaste,
    onInputCompositionStart,
    onInputCompositionEnd
  };
  var selectNode = mode === "multiple" || mode === "tags" ? /* @__PURE__ */ reactExports.createElement(SelectSelector, _extends$1({}, props, sharedProps)) : /* @__PURE__ */ reactExports.createElement(SingleSelector, _extends$1({}, props, sharedProps));
  return /* @__PURE__ */ reactExports.createElement("div", {
    ref: domRef,
    className: "".concat(prefixCls, "-selector"),
    onClick,
    onMouseDown
  }, selectNode);
};
var ForwardSelector = /* @__PURE__ */ reactExports.forwardRef(Selector);
ForwardSelector.displayName = "Selector";
function Arrow(props) {
  var prefixCls = props.prefixCls, align = props.align, arrow = props.arrow, arrowPos = props.arrowPos;
  var _ref = arrow || {}, className = _ref.className, content = _ref.content;
  var _arrowPos$x = arrowPos.x, x = _arrowPos$x === void 0 ? 0 : _arrowPos$x, _arrowPos$y = arrowPos.y, y = _arrowPos$y === void 0 ? 0 : _arrowPos$y;
  var arrowRef = reactExports.useRef();
  if (!align || !align.points) {
    return null;
  }
  var alignStyle = {
    position: "absolute"
  };
  if (align.autoArrow !== false) {
    var popupPoints = align.points[0];
    var targetPoints = align.points[1];
    var popupTB = popupPoints[0];
    var popupLR = popupPoints[1];
    var targetTB = targetPoints[0];
    var targetLR = targetPoints[1];
    if (popupTB === targetTB || !["t", "b"].includes(popupTB)) {
      alignStyle.top = y;
    } else if (popupTB === "t") {
      alignStyle.top = 0;
    } else {
      alignStyle.bottom = 0;
    }
    if (popupLR === targetLR || !["l", "r"].includes(popupLR)) {
      alignStyle.left = x;
    } else if (popupLR === "l") {
      alignStyle.left = 0;
    } else {
      alignStyle.right = 0;
    }
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    ref: arrowRef,
    className: classNames("".concat(prefixCls, "-arrow"), className),
    style: alignStyle
  }, content);
}
function Mask(props) {
  var prefixCls = props.prefixCls, open = props.open, zIndex = props.zIndex, mask = props.mask, motion = props.motion;
  if (!mask) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(CSSMotion, _extends$1({}, motion, {
    motionAppear: true,
    visible: open,
    removeOnLeave: true
  }), function(_ref) {
    var className = _ref.className;
    return /* @__PURE__ */ reactExports.createElement("div", {
      style: {
        zIndex
      },
      className: classNames("".concat(prefixCls, "-mask"), className)
    });
  });
}
var PopupContent = /* @__PURE__ */ reactExports.memo(function(_ref) {
  var children = _ref.children;
  return children;
}, function(_, next2) {
  return next2.cache;
});
var Popup = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var popup = props.popup, className = props.className, prefixCls = props.prefixCls, style2 = props.style, target = props.target, _onVisibleChanged = props.onVisibleChanged, open = props.open, keepDom = props.keepDom, fresh = props.fresh, onClick = props.onClick, mask = props.mask, arrow = props.arrow, arrowPos = props.arrowPos, align = props.align, motion = props.motion, maskMotion = props.maskMotion, forceRender = props.forceRender, getPopupContainer = props.getPopupContainer, autoDestroy = props.autoDestroy, Portal2 = props.portal, zIndex = props.zIndex, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, onPointerEnter = props.onPointerEnter, ready = props.ready, offsetX = props.offsetX, offsetY = props.offsetY, offsetR = props.offsetR, offsetB = props.offsetB, onAlign = props.onAlign, onPrepare = props.onPrepare, stretch = props.stretch, targetWidth = props.targetWidth, targetHeight = props.targetHeight;
  var childNode = typeof popup === "function" ? popup() : popup;
  var isNodeVisible = open || keepDom;
  var getPopupContainerNeedParams = (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.length) > 0;
  var _React$useState = reactExports.useState(!getPopupContainer || !getPopupContainerNeedParams), _React$useState2 = _slicedToArray(_React$useState, 2), show = _React$useState2[0], setShow = _React$useState2[1];
  useLayoutEffect$1(function() {
    if (!show && getPopupContainerNeedParams && target) {
      setShow(true);
    }
  }, [show, getPopupContainerNeedParams, target]);
  if (!show) {
    return null;
  }
  var AUTO = "auto";
  var offsetStyle = {
    left: "-1000vw",
    top: "-1000vh",
    right: AUTO,
    bottom: AUTO
  };
  if (ready || !open) {
    var _experimental;
    var points = align.points;
    var dynamicInset = align.dynamicInset || ((_experimental = align._experimental) === null || _experimental === void 0 ? void 0 : _experimental.dynamicInset);
    var alignRight = dynamicInset && points[0][1] === "r";
    var alignBottom = dynamicInset && points[0][0] === "b";
    if (alignRight) {
      offsetStyle.right = offsetR;
      offsetStyle.left = AUTO;
    } else {
      offsetStyle.left = offsetX;
      offsetStyle.right = AUTO;
    }
    if (alignBottom) {
      offsetStyle.bottom = offsetB;
      offsetStyle.top = AUTO;
    } else {
      offsetStyle.top = offsetY;
      offsetStyle.bottom = AUTO;
    }
  }
  var miscStyle = {};
  if (stretch) {
    if (stretch.includes("height") && targetHeight) {
      miscStyle.height = targetHeight;
    } else if (stretch.includes("minHeight") && targetHeight) {
      miscStyle.minHeight = targetHeight;
    }
    if (stretch.includes("width") && targetWidth) {
      miscStyle.width = targetWidth;
    } else if (stretch.includes("minWidth") && targetWidth) {
      miscStyle.minWidth = targetWidth;
    }
  }
  if (!open) {
    miscStyle.pointerEvents = "none";
  }
  return /* @__PURE__ */ reactExports.createElement(Portal2, {
    open: forceRender || isNodeVisible,
    getContainer: getPopupContainer && function() {
      return getPopupContainer(target);
    },
    autoDestroy
  }, /* @__PURE__ */ reactExports.createElement(Mask, {
    prefixCls,
    open,
    zIndex,
    mask,
    motion: maskMotion
  }), /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
    onResize: onAlign,
    disabled: !open
  }, function(resizeObserverRef) {
    return /* @__PURE__ */ reactExports.createElement(CSSMotion, _extends$1({
      motionAppear: true,
      motionEnter: true,
      motionLeave: true,
      removeOnLeave: false,
      forceRender,
      leavedClassName: "".concat(prefixCls, "-hidden")
    }, motion, {
      onAppearPrepare: onPrepare,
      onEnterPrepare: onPrepare,
      visible: open,
      onVisibleChanged: function onVisibleChanged(nextVisible) {
        var _motion$onVisibleChan;
        motion === null || motion === void 0 || (_motion$onVisibleChan = motion.onVisibleChanged) === null || _motion$onVisibleChan === void 0 || _motion$onVisibleChan.call(motion, nextVisible);
        _onVisibleChanged(nextVisible);
      }
    }), function(_ref, motionRef) {
      var motionClassName = _ref.className, motionStyle = _ref.style;
      var cls = classNames(prefixCls, motionClassName, className);
      return /* @__PURE__ */ reactExports.createElement("div", {
        ref: composeRef(resizeObserverRef, ref, motionRef),
        className: cls,
        style: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({
          "--arrow-x": "".concat(arrowPos.x || 0, "px"),
          "--arrow-y": "".concat(arrowPos.y || 0, "px")
        }, offsetStyle), miscStyle), motionStyle), {}, {
          boxSizing: "border-box",
          zIndex
        }, style2),
        onMouseEnter,
        onMouseLeave,
        onPointerEnter,
        onClick
      }, arrow && /* @__PURE__ */ reactExports.createElement(Arrow, {
        prefixCls,
        arrow,
        arrowPos,
        align
      }), /* @__PURE__ */ reactExports.createElement(PopupContent, {
        cache: !open && !fresh
      }, childNode));
    });
  }));
});
var TriggerWrapper = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var children = props.children, getTriggerDOMNode = props.getTriggerDOMNode;
  var canUseRef = supportRef(children);
  var setRef = reactExports.useCallback(function(node2) {
    fillRef(ref, getTriggerDOMNode ? getTriggerDOMNode(node2) : node2);
  }, [getTriggerDOMNode]);
  var mergedRef = useComposeRef(setRef, children.ref);
  return canUseRef ? /* @__PURE__ */ reactExports.cloneElement(children, {
    ref: mergedRef
  }) : children;
});
var TriggerContext = /* @__PURE__ */ reactExports.createContext(null);
function toArray(val) {
  return val ? Array.isArray(val) ? val : [val] : [];
}
function useAction(mobile, action, showAction, hideAction) {
  return reactExports.useMemo(function() {
    var mergedShowAction = toArray(showAction !== null && showAction !== void 0 ? showAction : action);
    var mergedHideAction = toArray(hideAction !== null && hideAction !== void 0 ? hideAction : action);
    var showActionSet = new Set(mergedShowAction);
    var hideActionSet = new Set(mergedHideAction);
    if (mobile) {
      if (showActionSet.has("hover")) {
        showActionSet.delete("hover");
        showActionSet.add("click");
      }
      if (hideActionSet.has("hover")) {
        hideActionSet.delete("hover");
        hideActionSet.add("click");
      }
    }
    return [showActionSet, hideActionSet];
  }, [mobile, action, showAction, hideAction]);
}
function isPointsEq() {
  var a1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var a2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var isAlignPoint = arguments.length > 2 ? arguments[2] : void 0;
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);
  for (var i = 0; i < placements.length; i += 1) {
    var _builtinPlacements$pl;
    var placement = placements[i];
    if (isPointsEq((_builtinPlacements$pl = builtinPlacements[placement]) === null || _builtinPlacements$pl === void 0 ? void 0 : _builtinPlacements$pl.points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }
  return "";
}
function getMotion(prefixCls, motion, animation, transitionName) {
  if (motion) {
    return motion;
  }
  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }
  if (transitionName) {
    return {
      motionName: transitionName
    };
  }
  return null;
}
function getWin(ele) {
  return ele.ownerDocument.defaultView;
}
function collectScroller(ele) {
  var scrollerList = [];
  var current = ele === null || ele === void 0 ? void 0 : ele.parentElement;
  var scrollStyle = ["hidden", "scroll", "clip", "auto"];
  while (current) {
    var _getWin$getComputedSt = getWin(current).getComputedStyle(current), overflowX = _getWin$getComputedSt.overflowX, overflowY = _getWin$getComputedSt.overflowY, overflow = _getWin$getComputedSt.overflow;
    if ([overflowX, overflowY, overflow].some(function(o) {
      return scrollStyle.includes(o);
    })) {
      scrollerList.push(current);
    }
    current = current.parentElement;
  }
  return scrollerList;
}
function toNum(num) {
  var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(num) ? defaultValue : num;
}
function getPxValue(val) {
  return toNum(parseFloat(val), 0);
}
function getVisibleArea(initArea, scrollerList) {
  var visibleArea = _objectSpread2({}, initArea);
  (scrollerList || []).forEach(function(ele) {
    if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) {
      return;
    }
    var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele), overflow = _getWin$getComputedSt2.overflow, overflowClipMargin = _getWin$getComputedSt2.overflowClipMargin, borderTopWidth = _getWin$getComputedSt2.borderTopWidth, borderBottomWidth = _getWin$getComputedSt2.borderBottomWidth, borderLeftWidth = _getWin$getComputedSt2.borderLeftWidth, borderRightWidth = _getWin$getComputedSt2.borderRightWidth;
    var eleRect = ele.getBoundingClientRect();
    var eleOutHeight = ele.offsetHeight, eleInnerHeight = ele.clientHeight, eleOutWidth = ele.offsetWidth, eleInnerWidth = ele.clientWidth;
    var borderTopNum = getPxValue(borderTopWidth);
    var borderBottomNum = getPxValue(borderBottomWidth);
    var borderLeftNum = getPxValue(borderLeftWidth);
    var borderRightNum = getPxValue(borderRightWidth);
    var scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1e3) / 1e3);
    var scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1e3) / 1e3);
    var eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
    var eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;
    var scaledBorderTopWidth = borderTopNum * scaleY;
    var scaledBorderBottomWidth = borderBottomNum * scaleY;
    var scaledBorderLeftWidth = borderLeftNum * scaleX;
    var scaledBorderRightWidth = borderRightNum * scaleX;
    var clipMarginWidth = 0;
    var clipMarginHeight = 0;
    if (overflow === "clip") {
      var clipNum = getPxValue(overflowClipMargin);
      clipMarginWidth = clipNum * scaleX;
      clipMarginHeight = clipNum * scaleY;
    }
    var eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
    var eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
    var eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
    var eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
    visibleArea.left = Math.max(visibleArea.left, eleLeft);
    visibleArea.top = Math.max(visibleArea.top, eleTop);
    visibleArea.right = Math.min(visibleArea.right, eleRight);
    visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
  });
  return visibleArea;
}
function getUnitOffset(size) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var offsetStr = "".concat(offset);
  var cells = offsetStr.match(/^(.*)\%$/);
  if (cells) {
    return size * (parseFloat(cells[1]) / 100);
  }
  return parseFloat(offsetStr);
}
function getNumberOffset(rect, offset) {
  var _ref = offset || [], _ref2 = _slicedToArray(_ref, 2), offsetX = _ref2[0], offsetY = _ref2[1];
  return [getUnitOffset(rect.width, offsetX), getUnitOffset(rect.height, offsetY)];
}
function splitPoints() {
  var points = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [points[0], points[1]];
}
function getAlignPoint(rect, points) {
  var topBottom = points[0];
  var leftRight = points[1];
  var x;
  var y;
  if (topBottom === "t") {
    y = rect.y;
  } else if (topBottom === "b") {
    y = rect.y + rect.height;
  } else {
    y = rect.y + rect.height / 2;
  }
  if (leftRight === "l") {
    x = rect.x;
  } else if (leftRight === "r") {
    x = rect.x + rect.width;
  } else {
    x = rect.x + rect.width / 2;
  }
  return {
    x,
    y
  };
}
function reversePoints(points, index2) {
  var reverseMap = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return points.map(function(point, i) {
    if (i === index2) {
      return reverseMap[point] || "c";
    }
    return point;
  }).join("");
}
function useAlign(open, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign) {
  var _React$useState = reactExports.useState({
    ready: false,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: builtinPlacements[placement] || {}
  }), _React$useState2 = _slicedToArray(_React$useState, 2), offsetInfo = _React$useState2[0], setOffsetInfo = _React$useState2[1];
  var alignCountRef = reactExports.useRef(0);
  var scrollerList = reactExports.useMemo(function() {
    if (!popupEle) {
      return [];
    }
    return collectScroller(popupEle);
  }, [popupEle]);
  var prevFlipRef = reactExports.useRef({});
  var resetFlipCache = function resetFlipCache2() {
    prevFlipRef.current = {};
  };
  if (!open) {
    resetFlipCache();
  }
  var onAlign = useEvent(function() {
    if (popupEle && target && open) {
      let getIntersectionVisibleArea = function(offsetX, offsetY) {
        var area = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : visibleArea;
        var l2 = popupRect.x + offsetX;
        var t2 = popupRect.y + offsetY;
        var r = l2 + popupWidth;
        var b2 = t2 + popupHeight;
        var visibleL = Math.max(l2, area.left);
        var visibleT = Math.max(t2, area.top);
        var visibleR = Math.min(r, area.right);
        var visibleB = Math.min(b2, area.bottom);
        return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
      }, syncNextPopupPosition = function() {
        nextPopupY = popupRect.y + nextOffsetY;
        nextPopupBottom = nextPopupY + popupHeight;
        nextPopupX = popupRect.x + nextOffsetX;
        nextPopupRight = nextPopupX + popupWidth;
      };
      var _popupElement$parentE, _popupElement$parentE2;
      var popupElement = popupEle;
      var doc = popupElement.ownerDocument;
      var win = getWin(popupElement);
      var _win$getComputedStyle = win.getComputedStyle(popupElement), width = _win$getComputedStyle.width, height = _win$getComputedStyle.height, popupPosition = _win$getComputedStyle.position;
      var originLeft = popupElement.style.left;
      var originTop = popupElement.style.top;
      var originRight = popupElement.style.right;
      var originBottom = popupElement.style.bottom;
      var originOverflow = popupElement.style.overflow;
      var placementInfo = _objectSpread2(_objectSpread2({}, builtinPlacements[placement]), popupAlign);
      var placeholderElement = doc.createElement("div");
      (_popupElement$parentE = popupElement.parentElement) === null || _popupElement$parentE === void 0 || _popupElement$parentE.appendChild(placeholderElement);
      placeholderElement.style.left = "".concat(popupElement.offsetLeft, "px");
      placeholderElement.style.top = "".concat(popupElement.offsetTop, "px");
      placeholderElement.style.position = popupPosition;
      placeholderElement.style.height = "".concat(popupElement.offsetHeight, "px");
      placeholderElement.style.width = "".concat(popupElement.offsetWidth, "px");
      popupElement.style.left = "0";
      popupElement.style.top = "0";
      popupElement.style.right = "auto";
      popupElement.style.bottom = "auto";
      popupElement.style.overflow = "hidden";
      var targetRect;
      if (Array.isArray(target)) {
        targetRect = {
          x: target[0],
          y: target[1],
          width: 0,
          height: 0
        };
      } else {
        var rect = target.getBoundingClientRect();
        targetRect = {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        };
      }
      var popupRect = popupElement.getBoundingClientRect();
      var _doc$documentElement = doc.documentElement, clientWidth = _doc$documentElement.clientWidth, clientHeight = _doc$documentElement.clientHeight, scrollWidth = _doc$documentElement.scrollWidth, scrollHeight = _doc$documentElement.scrollHeight, scrollTop = _doc$documentElement.scrollTop, scrollLeft = _doc$documentElement.scrollLeft;
      var popupHeight = popupRect.height;
      var popupWidth = popupRect.width;
      var targetHeight = targetRect.height;
      var targetWidth = targetRect.width;
      var visibleRegion = {
        left: 0,
        top: 0,
        right: clientWidth,
        bottom: clientHeight
      };
      var scrollRegion = {
        left: -scrollLeft,
        top: -scrollTop,
        right: scrollWidth - scrollLeft,
        bottom: scrollHeight - scrollTop
      };
      var htmlRegion = placementInfo.htmlRegion;
      var VISIBLE = "visible";
      var VISIBLE_FIRST = "visibleFirst";
      if (htmlRegion !== "scroll" && htmlRegion !== VISIBLE_FIRST) {
        htmlRegion = VISIBLE;
      }
      var isVisibleFirst = htmlRegion === VISIBLE_FIRST;
      var scrollRegionArea = getVisibleArea(scrollRegion, scrollerList);
      var visibleRegionArea = getVisibleArea(visibleRegion, scrollerList);
      var visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;
      var adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;
      popupElement.style.left = "auto";
      popupElement.style.top = "auto";
      popupElement.style.right = "0";
      popupElement.style.bottom = "0";
      var popupMirrorRect = popupElement.getBoundingClientRect();
      popupElement.style.left = originLeft;
      popupElement.style.top = originTop;
      popupElement.style.right = originRight;
      popupElement.style.bottom = originBottom;
      popupElement.style.overflow = originOverflow;
      (_popupElement$parentE2 = popupElement.parentElement) === null || _popupElement$parentE2 === void 0 || _popupElement$parentE2.removeChild(placeholderElement);
      var _scaleX = toNum(Math.round(popupWidth / parseFloat(width) * 1e3) / 1e3);
      var _scaleY = toNum(Math.round(popupHeight / parseFloat(height) * 1e3) / 1e3);
      if (_scaleX === 0 || _scaleY === 0 || isDOM(target) && !isVisible(target)) {
        return;
      }
      var offset = placementInfo.offset, targetOffset = placementInfo.targetOffset;
      var _getNumberOffset = getNumberOffset(popupRect, offset), _getNumberOffset2 = _slicedToArray(_getNumberOffset, 2), popupOffsetX = _getNumberOffset2[0], popupOffsetY = _getNumberOffset2[1];
      var _getNumberOffset3 = getNumberOffset(targetRect, targetOffset), _getNumberOffset4 = _slicedToArray(_getNumberOffset3, 2), targetOffsetX = _getNumberOffset4[0], targetOffsetY = _getNumberOffset4[1];
      targetRect.x -= targetOffsetX;
      targetRect.y -= targetOffsetY;
      var _ref3 = placementInfo.points || [], _ref4 = _slicedToArray(_ref3, 2), popupPoint = _ref4[0], targetPoint = _ref4[1];
      var targetPoints = splitPoints(targetPoint);
      var popupPoints = splitPoints(popupPoint);
      var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
      var popupAlignPoint = getAlignPoint(popupRect, popupPoints);
      var nextAlignInfo = _objectSpread2({}, placementInfo);
      var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
      var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;
      var originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);
      var originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);
      var targetAlignPointTL = getAlignPoint(targetRect, ["t", "l"]);
      var popupAlignPointTL = getAlignPoint(popupRect, ["t", "l"]);
      var targetAlignPointBR = getAlignPoint(targetRect, ["b", "r"]);
      var popupAlignPointBR = getAlignPoint(popupRect, ["b", "r"]);
      var overflow = placementInfo.overflow || {};
      var adjustX = overflow.adjustX, adjustY = overflow.adjustY, shiftX = overflow.shiftX, shiftY = overflow.shiftY;
      var supportAdjust = function supportAdjust2(val) {
        if (typeof val === "boolean") {
          return val;
        }
        return val >= 0;
      };
      var nextPopupY;
      var nextPopupBottom;
      var nextPopupX;
      var nextPopupRight;
      syncNextPopupPosition();
      var needAdjustY = supportAdjust(adjustY);
      var sameTB = popupPoints[0] === targetPoints[0];
      if (needAdjustY && popupPoints[0] === "t" && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
        var tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          tmpNextOffsetY -= popupHeight - targetHeight;
        } else {
          tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
        }
        var newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
        var newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
        if (
          // Of course use larger one
          newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
          newVisibleRecommendArea >= originIntersectionRecommendArea)
        ) {
          prevFlipRef.current.bt = true;
          nextOffsetY = tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        } else {
          prevFlipRef.current.bt = false;
        }
      }
      if (needAdjustY && popupPoints[0] === "b" && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
        var _tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          _tmpNextOffsetY += popupHeight - targetHeight;
        } else {
          _tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
        }
        var _newVisibleArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY);
        var _newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY, visibleRegionArea);
        if (
          // Of course use larger one
          _newVisibleArea > originIntersectionVisibleArea || _newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
          _newVisibleRecommendArea >= originIntersectionRecommendArea)
        ) {
          prevFlipRef.current.tb = true;
          nextOffsetY = _tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        } else {
          prevFlipRef.current.tb = false;
        }
      }
      var needAdjustX = supportAdjust(adjustX);
      var sameLR = popupPoints[1] === targetPoints[1];
      if (needAdjustX && popupPoints[1] === "l" && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
        var tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          tmpNextOffsetX -= popupWidth - targetWidth;
        } else {
          tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
        }
        var _newVisibleArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
        var _newVisibleRecommendArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
          // Of course use larger one
          _newVisibleArea2 > originIntersectionVisibleArea || _newVisibleArea2 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
          _newVisibleRecommendArea2 >= originIntersectionRecommendArea)
        ) {
          prevFlipRef.current.rl = true;
          nextOffsetX = tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        } else {
          prevFlipRef.current.rl = false;
        }
      }
      if (needAdjustX && popupPoints[1] === "r" && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
        var _tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          _tmpNextOffsetX += popupWidth - targetWidth;
        } else {
          _tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
        }
        var _newVisibleArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY);
        var _newVisibleRecommendArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
          // Of course use larger one
          _newVisibleArea3 > originIntersectionVisibleArea || _newVisibleArea3 === originIntersectionVisibleArea && (!isVisibleFirst || // Choose recommend one
          _newVisibleRecommendArea3 >= originIntersectionRecommendArea)
        ) {
          prevFlipRef.current.lr = true;
          nextOffsetX = _tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        } else {
          prevFlipRef.current.lr = false;
        }
      }
      syncNextPopupPosition();
      var numShiftX = shiftX === true ? 0 : shiftX;
      if (typeof numShiftX === "number") {
        if (nextPopupX < visibleRegionArea.left) {
          nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
          if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
          }
        }
        if (nextPopupRight > visibleRegionArea.right) {
          nextOffsetX -= nextPopupRight - visibleRegionArea.right - popupOffsetX;
          if (targetRect.x > visibleRegionArea.right - numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
          }
        }
      }
      var numShiftY = shiftY === true ? 0 : shiftY;
      if (typeof numShiftY === "number") {
        if (nextPopupY < visibleRegionArea.top) {
          nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;
          if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
          }
        }
        if (nextPopupBottom > visibleRegionArea.bottom) {
          nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
          if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
          }
        }
      }
      var popupLeft = popupRect.x + nextOffsetX;
      var popupRight = popupLeft + popupWidth;
      var popupTop = popupRect.y + nextOffsetY;
      var popupBottom = popupTop + popupHeight;
      var targetLeft = targetRect.x;
      var targetRight = targetLeft + targetWidth;
      var targetTop = targetRect.y;
      var targetBottom = targetTop + targetHeight;
      var maxLeft = Math.max(popupLeft, targetLeft);
      var minRight = Math.min(popupRight, targetRight);
      var xCenter = (maxLeft + minRight) / 2;
      var nextArrowX = xCenter - popupLeft;
      var maxTop = Math.max(popupTop, targetTop);
      var minBottom = Math.min(popupBottom, targetBottom);
      var yCenter = (maxTop + minBottom) / 2;
      var nextArrowY = yCenter - popupTop;
      onPopupAlign === null || onPopupAlign === void 0 || onPopupAlign(popupEle, nextAlignInfo);
      var offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
      var offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
      setOffsetInfo({
        ready: true,
        offsetX: nextOffsetX / _scaleX,
        offsetY: nextOffsetY / _scaleY,
        offsetR: offsetX4Right / _scaleX,
        offsetB: offsetY4Bottom / _scaleY,
        arrowX: nextArrowX / _scaleX,
        arrowY: nextArrowY / _scaleY,
        scaleX: _scaleX,
        scaleY: _scaleY,
        align: nextAlignInfo
      });
    }
  });
  var triggerAlign = function triggerAlign2() {
    alignCountRef.current += 1;
    var id = alignCountRef.current;
    Promise.resolve().then(function() {
      if (alignCountRef.current === id) {
        onAlign();
      }
    });
  };
  var resetReady = function resetReady2() {
    setOffsetInfo(function(ori) {
      return _objectSpread2(_objectSpread2({}, ori), {}, {
        ready: false
      });
    });
  };
  useLayoutEffect$1(resetReady, [placement]);
  useLayoutEffect$1(function() {
    if (!open) {
      resetReady();
    }
  }, [open]);
  return [offsetInfo.ready, offsetInfo.offsetX, offsetInfo.offsetY, offsetInfo.offsetR, offsetInfo.offsetB, offsetInfo.arrowX, offsetInfo.arrowY, offsetInfo.scaleX, offsetInfo.scaleY, offsetInfo.align, triggerAlign];
}
function useWatch(open, target, popup, onAlign, onScroll) {
  useLayoutEffect$1(function() {
    if (open && target && popup) {
      let notifyScroll = function() {
        onAlign();
        onScroll();
      };
      var targetElement = target;
      var popupElement = popup;
      var targetScrollList = collectScroller(targetElement);
      var popupScrollList = collectScroller(popupElement);
      var win = getWin(popupElement);
      var mergedList = new Set([win].concat(_toConsumableArray(targetScrollList), _toConsumableArray(popupScrollList)));
      mergedList.forEach(function(scroller) {
        scroller.addEventListener("scroll", notifyScroll, {
          passive: true
        });
      });
      win.addEventListener("resize", notifyScroll, {
        passive: true
      });
      onAlign();
      return function() {
        mergedList.forEach(function(scroller) {
          scroller.removeEventListener("scroll", notifyScroll);
          win.removeEventListener("resize", notifyScroll);
        });
      };
    }
  }, [open, target, popup]);
}
function useWinClick(open, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
  var openRef = reactExports.useRef(open);
  var lockRef = reactExports.useRef(false);
  if (openRef.current !== open) {
    lockRef.current = true;
    openRef.current = open;
  }
  reactExports.useEffect(function() {
    var id = wrapperRaf(function() {
      lockRef.current = false;
    });
    return function() {
      wrapperRaf.cancel(id);
    };
  }, [open]);
  reactExports.useEffect(function() {
    if (clickToHide && popupEle && (!mask || maskClosable)) {
      var genClickEvents = function genClickEvents2() {
        var clickInside = false;
        var onWindowMouseDown = function onWindowMouseDown2(_ref) {
          var target = _ref.target;
          clickInside = inPopupOrChild(target);
        };
        var onWindowClick = function onWindowClick2(_ref2) {
          var target = _ref2.target;
          if (!lockRef.current && openRef.current && !clickInside && !inPopupOrChild(target)) {
            triggerOpen(false);
          }
        };
        return [onWindowMouseDown, onWindowClick];
      };
      var _genClickEvents = genClickEvents(), _genClickEvents2 = _slicedToArray(_genClickEvents, 2), onWinMouseDown = _genClickEvents2[0], onWinClick = _genClickEvents2[1];
      var _genClickEvents3 = genClickEvents(), _genClickEvents4 = _slicedToArray(_genClickEvents3, 2), onShadowMouseDown = _genClickEvents4[0], onShadowClick = _genClickEvents4[1];
      var win = getWin(popupEle);
      win.addEventListener("mousedown", onWinMouseDown, true);
      win.addEventListener("click", onWinClick, true);
      win.addEventListener("contextmenu", onWinClick, true);
      var targetShadowRoot = getShadowRoot(targetEle);
      if (targetShadowRoot) {
        targetShadowRoot.addEventListener("mousedown", onShadowMouseDown, true);
        targetShadowRoot.addEventListener("click", onShadowClick, true);
        targetShadowRoot.addEventListener("contextmenu", onShadowClick, true);
      }
      return function() {
        win.removeEventListener("mousedown", onWinMouseDown, true);
        win.removeEventListener("click", onWinClick, true);
        win.removeEventListener("contextmenu", onWinClick, true);
        if (targetShadowRoot) {
          targetShadowRoot.removeEventListener("mousedown", onShadowMouseDown, true);
          targetShadowRoot.removeEventListener("click", onShadowClick, true);
          targetShadowRoot.removeEventListener("contextmenu", onShadowClick, true);
        }
      };
    }
  }, [clickToHide, targetEle, popupEle, mask, maskClosable]);
}
var _excluded$c = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function generateTrigger() {
  var PortalComponent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Portal;
  var Trigger2 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
    var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-trigger-popup" : _props$prefixCls, children = props.children, _props$action = props.action, action = _props$action === void 0 ? "hover" : _props$action, showAction = props.showAction, hideAction = props.hideAction, popupVisible = props.popupVisible, defaultPopupVisible = props.defaultPopupVisible, onPopupVisibleChange = props.onPopupVisibleChange, afterPopupVisibleChange = props.afterPopupVisibleChange, mouseEnterDelay = props.mouseEnterDelay, _props$mouseLeaveDela = props.mouseLeaveDelay, mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela, focusDelay = props.focusDelay, blurDelay = props.blurDelay, mask = props.mask, _props$maskClosable = props.maskClosable, maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable, getPopupContainer = props.getPopupContainer, forceRender = props.forceRender, autoDestroy = props.autoDestroy, destroyPopupOnHide = props.destroyPopupOnHide, popup = props.popup, popupClassName = props.popupClassName, popupStyle = props.popupStyle, popupPlacement = props.popupPlacement, _props$builtinPlaceme = props.builtinPlacements, builtinPlacements = _props$builtinPlaceme === void 0 ? {} : _props$builtinPlaceme, popupAlign = props.popupAlign, zIndex = props.zIndex, stretch = props.stretch, getPopupClassNameFromAlign = props.getPopupClassNameFromAlign, fresh = props.fresh, alignPoint = props.alignPoint, onPopupClick = props.onPopupClick, onPopupAlign = props.onPopupAlign, arrow = props.arrow, popupMotion = props.popupMotion, maskMotion = props.maskMotion, popupTransitionName = props.popupTransitionName, popupAnimation = props.popupAnimation, maskTransitionName = props.maskTransitionName, maskAnimation = props.maskAnimation, className = props.className, getTriggerDOMNode = props.getTriggerDOMNode, restProps = _objectWithoutProperties(props, _excluded$c);
    var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;
    var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), mobile = _React$useState2[0], setMobile = _React$useState2[1];
    useLayoutEffect$1(function() {
      setMobile(isMobile());
    }, []);
    var subPopupElements = reactExports.useRef({});
    var parentContext = reactExports.useContext(TriggerContext);
    var context = reactExports.useMemo(function() {
      return {
        registerSubPopup: function registerSubPopup(id2, subPopupEle) {
          subPopupElements.current[id2] = subPopupEle;
          parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id2, subPopupEle);
        }
      };
    }, [parentContext]);
    var id = useId$1();
    var _React$useState3 = reactExports.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), popupEle = _React$useState4[0], setPopupEle = _React$useState4[1];
    var setPopupRef = useEvent(function(node2) {
      if (isDOM(node2) && popupEle !== node2) {
        setPopupEle(node2);
      }
      parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id, node2);
    });
    var _React$useState5 = reactExports.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), targetEle = _React$useState6[0], setTargetEle = _React$useState6[1];
    var externalForwardRef = reactExports.useRef(null);
    var setTargetRef = useEvent(function(node2) {
      if (isDOM(node2) && targetEle !== node2) {
        setTargetEle(node2);
        externalForwardRef.current = node2;
      }
    });
    var child = reactExports.Children.only(children);
    var originChildProps = (child === null || child === void 0 ? void 0 : child.props) || {};
    var cloneProps = {};
    var inPopupOrChild = useEvent(function(ele) {
      var _getShadowRoot, _getShadowRoot2;
      var childDOM = targetEle;
      return (childDOM === null || childDOM === void 0 ? void 0 : childDOM.contains(ele)) || ((_getShadowRoot = getShadowRoot(childDOM)) === null || _getShadowRoot === void 0 ? void 0 : _getShadowRoot.host) === ele || ele === childDOM || (popupEle === null || popupEle === void 0 ? void 0 : popupEle.contains(ele)) || ((_getShadowRoot2 = getShadowRoot(popupEle)) === null || _getShadowRoot2 === void 0 ? void 0 : _getShadowRoot2.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some(function(subPopupEle) {
        return (subPopupEle === null || subPopupEle === void 0 ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle;
      });
    });
    var mergePopupMotion = getMotion(prefixCls, popupMotion, popupAnimation, popupTransitionName);
    var mergeMaskMotion = getMotion(prefixCls, maskMotion, maskAnimation, maskTransitionName);
    var _React$useState7 = reactExports.useState(defaultPopupVisible || false), _React$useState8 = _slicedToArray(_React$useState7, 2), internalOpen = _React$useState8[0], setInternalOpen = _React$useState8[1];
    var mergedOpen = popupVisible !== null && popupVisible !== void 0 ? popupVisible : internalOpen;
    var setMergedOpen = useEvent(function(nextOpen) {
      if (popupVisible === void 0) {
        setInternalOpen(nextOpen);
      }
    });
    useLayoutEffect$1(function() {
      setInternalOpen(popupVisible || false);
    }, [popupVisible]);
    var openRef = reactExports.useRef(mergedOpen);
    openRef.current = mergedOpen;
    var lastTriggerRef = reactExports.useRef([]);
    lastTriggerRef.current = [];
    var internalTriggerOpen = useEvent(function(nextOpen) {
      var _lastTriggerRef$curre;
      setMergedOpen(nextOpen);
      if (((_lastTriggerRef$curre = lastTriggerRef.current[lastTriggerRef.current.length - 1]) !== null && _lastTriggerRef$curre !== void 0 ? _lastTriggerRef$curre : mergedOpen) !== nextOpen) {
        lastTriggerRef.current.push(nextOpen);
        onPopupVisibleChange === null || onPopupVisibleChange === void 0 || onPopupVisibleChange(nextOpen);
      }
    });
    var delayRef = reactExports.useRef();
    var clearDelay = function clearDelay2() {
      clearTimeout(delayRef.current);
    };
    var triggerOpen = function triggerOpen2(nextOpen) {
      var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      clearDelay();
      if (delay === 0) {
        internalTriggerOpen(nextOpen);
      } else {
        delayRef.current = setTimeout(function() {
          internalTriggerOpen(nextOpen);
        }, delay * 1e3);
      }
    };
    reactExports.useEffect(function() {
      return clearDelay;
    }, []);
    var _React$useState9 = reactExports.useState(false), _React$useState10 = _slicedToArray(_React$useState9, 2), inMotion = _React$useState10[0], setInMotion = _React$useState10[1];
    useLayoutEffect$1(function(firstMount) {
      if (!firstMount || mergedOpen) {
        setInMotion(true);
      }
    }, [mergedOpen]);
    var _React$useState11 = reactExports.useState(null), _React$useState12 = _slicedToArray(_React$useState11, 2), motionPrepareResolve = _React$useState12[0], setMotionPrepareResolve = _React$useState12[1];
    var _React$useState13 = reactExports.useState([0, 0]), _React$useState14 = _slicedToArray(_React$useState13, 2), mousePos = _React$useState14[0], setMousePos = _React$useState14[1];
    var setMousePosByEvent = function setMousePosByEvent2(event) {
      setMousePos([event.clientX, event.clientY]);
    };
    var _useAlign = useAlign(mergedOpen, popupEle, alignPoint ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign), _useAlign2 = _slicedToArray(_useAlign, 11), ready = _useAlign2[0], offsetX = _useAlign2[1], offsetY = _useAlign2[2], offsetR = _useAlign2[3], offsetB = _useAlign2[4], arrowX = _useAlign2[5], arrowY = _useAlign2[6], scaleX = _useAlign2[7], scaleY = _useAlign2[8], alignInfo = _useAlign2[9], onAlign = _useAlign2[10];
    var _useAction = useAction(mobile, action, showAction, hideAction), _useAction2 = _slicedToArray(_useAction, 2), showActions = _useAction2[0], hideActions = _useAction2[1];
    var clickToShow = showActions.has("click");
    var clickToHide = hideActions.has("click") || hideActions.has("contextMenu");
    var triggerAlign = useEvent(function() {
      if (!inMotion) {
        onAlign();
      }
    });
    var onScroll = function onScroll2() {
      if (openRef.current && alignPoint && clickToHide) {
        triggerOpen(false);
      }
    };
    useWatch(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
    useLayoutEffect$1(function() {
      triggerAlign();
    }, [mousePos, popupPlacement]);
    useLayoutEffect$1(function() {
      if (mergedOpen && !(builtinPlacements !== null && builtinPlacements !== void 0 && builtinPlacements[popupPlacement])) {
        triggerAlign();
      }
    }, [JSON.stringify(popupAlign)]);
    var alignedClassName = reactExports.useMemo(function() {
      var baseClassName = getAlignPopupClassName(builtinPlacements, prefixCls, alignInfo, alignPoint);
      return classNames(baseClassName, getPopupClassNameFromAlign === null || getPopupClassNameFromAlign === void 0 ? void 0 : getPopupClassNameFromAlign(alignInfo));
    }, [alignInfo, getPopupClassNameFromAlign, builtinPlacements, prefixCls, alignPoint]);
    reactExports.useImperativeHandle(ref, function() {
      return {
        nativeElement: externalForwardRef.current,
        forceAlign: triggerAlign
      };
    });
    var _React$useState15 = reactExports.useState(0), _React$useState16 = _slicedToArray(_React$useState15, 2), targetWidth = _React$useState16[0], setTargetWidth = _React$useState16[1];
    var _React$useState17 = reactExports.useState(0), _React$useState18 = _slicedToArray(_React$useState17, 2), targetHeight = _React$useState18[0], setTargetHeight = _React$useState18[1];
    var syncTargetSize = function syncTargetSize2() {
      if (stretch && targetEle) {
        var rect = targetEle.getBoundingClientRect();
        setTargetWidth(rect.width);
        setTargetHeight(rect.height);
      }
    };
    var onTargetResize = function onTargetResize2() {
      syncTargetSize();
      triggerAlign();
    };
    var onVisibleChanged = function onVisibleChanged2(visible) {
      setInMotion(false);
      onAlign();
      afterPopupVisibleChange === null || afterPopupVisibleChange === void 0 || afterPopupVisibleChange(visible);
    };
    var onPrepare = function onPrepare2() {
      return new Promise(function(resolve) {
        syncTargetSize();
        setMotionPrepareResolve(function() {
          return resolve;
        });
      });
    };
    useLayoutEffect$1(function() {
      if (motionPrepareResolve) {
        onAlign();
        motionPrepareResolve();
        setMotionPrepareResolve(null);
      }
    }, [motionPrepareResolve]);
    function wrapperAction(eventName, nextOpen, delay, preEvent) {
      cloneProps[eventName] = function(event) {
        var _originChildProps$eve;
        preEvent === null || preEvent === void 0 || preEvent(event);
        triggerOpen(nextOpen, delay);
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        (_originChildProps$eve = originChildProps[eventName]) === null || _originChildProps$eve === void 0 || _originChildProps$eve.call.apply(_originChildProps$eve, [originChildProps, event].concat(args));
      };
    }
    if (clickToShow || clickToHide) {
      cloneProps.onClick = function(event) {
        var _originChildProps$onC;
        if (openRef.current && clickToHide) {
          triggerOpen(false);
        } else if (!openRef.current && clickToShow) {
          setMousePosByEvent(event);
          triggerOpen(true);
        }
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        (_originChildProps$onC = originChildProps.onClick) === null || _originChildProps$onC === void 0 || _originChildProps$onC.call.apply(_originChildProps$onC, [originChildProps, event].concat(args));
      };
    }
    useWinClick(mergedOpen, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);
    var hoverToShow = showActions.has("hover");
    var hoverToHide = hideActions.has("hover");
    var onPopupMouseEnter;
    var onPopupMouseLeave;
    if (hoverToShow) {
      wrapperAction("onMouseEnter", true, mouseEnterDelay, function(event) {
        setMousePosByEvent(event);
      });
      wrapperAction("onPointerEnter", true, mouseEnterDelay, function(event) {
        setMousePosByEvent(event);
      });
      onPopupMouseEnter = function onPopupMouseEnter2() {
        if (mergedOpen || inMotion) {
          triggerOpen(true, mouseEnterDelay);
        }
      };
      if (alignPoint) {
        cloneProps.onMouseMove = function(event) {
          var _originChildProps$onM;
          (_originChildProps$onM = originChildProps.onMouseMove) === null || _originChildProps$onM === void 0 || _originChildProps$onM.call(originChildProps, event);
        };
      }
    }
    if (hoverToHide) {
      wrapperAction("onMouseLeave", false, mouseLeaveDelay);
      wrapperAction("onPointerLeave", false, mouseLeaveDelay);
      onPopupMouseLeave = function onPopupMouseLeave2() {
        triggerOpen(false, mouseLeaveDelay);
      };
    }
    if (showActions.has("focus")) {
      wrapperAction("onFocus", true, focusDelay);
    }
    if (hideActions.has("focus")) {
      wrapperAction("onBlur", false, blurDelay);
    }
    if (showActions.has("contextMenu")) {
      cloneProps.onContextMenu = function(event) {
        var _originChildProps$onC2;
        if (openRef.current && hideActions.has("contextMenu")) {
          triggerOpen(false);
        } else {
          setMousePosByEvent(event);
          triggerOpen(true);
        }
        event.preventDefault();
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        (_originChildProps$onC2 = originChildProps.onContextMenu) === null || _originChildProps$onC2 === void 0 || _originChildProps$onC2.call.apply(_originChildProps$onC2, [originChildProps, event].concat(args));
      };
    }
    if (className) {
      cloneProps.className = classNames(originChildProps.className, className);
    }
    var mergedChildrenProps = _objectSpread2(_objectSpread2({}, originChildProps), cloneProps);
    var passedProps = {};
    var passedEventList = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    passedEventList.forEach(function(eventName) {
      if (restProps[eventName]) {
        passedProps[eventName] = function() {
          var _mergedChildrenProps$;
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          (_mergedChildrenProps$ = mergedChildrenProps[eventName]) === null || _mergedChildrenProps$ === void 0 || _mergedChildrenProps$.call.apply(_mergedChildrenProps$, [mergedChildrenProps].concat(args));
          restProps[eventName].apply(restProps, args);
        };
      }
    });
    var triggerNode = /* @__PURE__ */ reactExports.cloneElement(child, _objectSpread2(_objectSpread2({}, mergedChildrenProps), passedProps));
    var arrowPos = {
      x: arrowX,
      y: arrowY
    };
    var innerArrow = arrow ? _objectSpread2({}, arrow !== true ? arrow : {}) : null;
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
      disabled: !mergedOpen,
      ref: setTargetRef,
      onResize: onTargetResize
    }, /* @__PURE__ */ reactExports.createElement(TriggerWrapper, {
      getTriggerDOMNode
    }, triggerNode)), /* @__PURE__ */ reactExports.createElement(TriggerContext.Provider, {
      value: context
    }, /* @__PURE__ */ reactExports.createElement(Popup, {
      portal: PortalComponent,
      ref: setPopupRef,
      prefixCls,
      popup,
      className: classNames(popupClassName, alignedClassName),
      style: popupStyle,
      target: targetEle,
      onMouseEnter: onPopupMouseEnter,
      onMouseLeave: onPopupMouseLeave,
      onPointerEnter: onPopupMouseEnter,
      zIndex,
      open: mergedOpen,
      keepDom: inMotion,
      fresh,
      onClick: onPopupClick,
      mask,
      motion: mergePopupMotion,
      maskMotion: mergeMaskMotion,
      onVisibleChanged,
      onPrepare,
      forceRender,
      autoDestroy: mergedAutoDestroy,
      getPopupContainer,
      align: alignInfo,
      arrow: innerArrow,
      arrowPos,
      ready,
      offsetX,
      offsetY,
      offsetR,
      offsetB,
      onAlign: triggerAlign,
      stretch,
      targetWidth: targetWidth / scaleX,
      targetHeight: targetHeight / scaleY
    })));
  });
  return Trigger2;
}
const Trigger = generateTrigger(Portal);
var _excluded$b = ["prefixCls", "disabled", "visible", "children", "popupElement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"];
var getBuiltInPlacements$1 = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      },
      htmlRegion: "scroll"
    }
  };
};
var SelectTrigger = function SelectTrigger2(props, ref) {
  var prefixCls = props.prefixCls;
  props.disabled;
  var visible = props.visible, children = props.children, popupElement = props.popupElement, animation = props.animation, transitionName = props.transitionName, dropdownStyle = props.dropdownStyle, dropdownClassName = props.dropdownClassName, _props$direction = props.direction, direction = _props$direction === void 0 ? "ltr" : _props$direction, placement = props.placement, builtinPlacements = props.builtinPlacements, dropdownMatchSelectWidth = props.dropdownMatchSelectWidth, dropdownRender = props.dropdownRender, dropdownAlign = props.dropdownAlign, getPopupContainer = props.getPopupContainer, empty = props.empty, getTriggerDOMNode = props.getTriggerDOMNode, onPopupVisibleChange = props.onPopupVisibleChange, onPopupMouseEnter = props.onPopupMouseEnter, restProps = _objectWithoutProperties(props, _excluded$b);
  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var popupNode = popupElement;
  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }
  var mergedBuiltinPlacements = reactExports.useMemo(function() {
    return builtinPlacements || getBuiltInPlacements$1(dropdownMatchSelectWidth);
  }, [builtinPlacements, dropdownMatchSelectWidth]);
  var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName;
  var isNumberPopupWidth = typeof dropdownMatchSelectWidth === "number";
  var stretch = reactExports.useMemo(function() {
    if (isNumberPopupWidth) {
      return null;
    }
    return dropdownMatchSelectWidth === false ? "minWidth" : "width";
  }, [dropdownMatchSelectWidth, isNumberPopupWidth]);
  var popupStyle = dropdownStyle;
  if (isNumberPopupWidth) {
    popupStyle = _objectSpread2(_objectSpread2({}, popupStyle), {}, {
      width: dropdownMatchSelectWidth
    });
  }
  var popupRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, function() {
    return {
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      }
    };
  });
  return /* @__PURE__ */ reactExports.createElement(Trigger, _extends$1({}, restProps, {
    showAction: onPopupVisibleChange ? ["click"] : [],
    hideAction: onPopupVisibleChange ? ["click"] : [],
    popupPlacement: placement || (direction === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: mergedBuiltinPlacements,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: mergedTransitionName,
    popup: /* @__PURE__ */ reactExports.createElement("div", {
      ref: popupRef,
      onMouseEnter: onPopupMouseEnter
    }, popupNode),
    stretch,
    popupAlign: dropdownAlign,
    popupVisible: visible,
    getPopupContainer,
    popupClassName: classNames(dropdownClassName, _defineProperty({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
    popupStyle,
    getTriggerDOMNode,
    onPopupVisibleChange
  }), children);
};
var RefSelectTrigger = /* @__PURE__ */ reactExports.forwardRef(SelectTrigger);
RefSelectTrigger.displayName = "SelectTrigger";
function getKey(data, index2) {
  var key = data.key;
  var value;
  if ("value" in data) {
    value = data.value;
  }
  if (key !== null && key !== void 0) {
    return key;
  }
  if (value !== void 0) {
    return value;
  }
  return "rc-index-key-".concat(index2);
}
function fillFieldNames(fieldNames, childrenAsData) {
  var _ref = fieldNames || {}, label = _ref.label, value = _ref.value, options2 = _ref.options, groupLabel = _ref.groupLabel;
  var mergedLabel = label || (childrenAsData ? "children" : "label");
  return {
    label: mergedLabel,
    value: value || "value",
    options: options2 || "options",
    groupLabel: groupLabel || mergedLabel
  };
}
function flattenOptions(options2) {
  var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fieldNames = _ref2.fieldNames, childrenAsData = _ref2.childrenAsData;
  var flattenList = [];
  var _fillFieldNames = fillFieldNames(fieldNames, false), fieldLabel = _fillFieldNames.label, fieldValue = _fillFieldNames.value, fieldOptions = _fillFieldNames.options, groupLabel = _fillFieldNames.groupLabel;
  function dig(list, isGroupOption) {
    list.forEach(function(data) {
      if (isGroupOption || !(fieldOptions in data)) {
        var value = data[fieldValue];
        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data,
          label: data[fieldLabel],
          value
        });
      } else {
        var grpLabel = data[groupLabel];
        if (grpLabel === void 0 && childrenAsData) {
          grpLabel = data.label;
        }
        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }
  dig(options2, false);
  return flattenList;
}
function injectPropsWithOption(option2) {
  var newOption = _objectSpread2({}, option2);
  if (!("props" in newOption)) {
    Object.defineProperty(newOption, "props", {
      get: function get2() {
        warningOnce(false, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`.");
        return newOption;
      }
    });
  }
  return newOption;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }
  var match2 = false;
  function separate(str, _ref3) {
    var _ref4 = _toArray(_ref3), token2 = _ref4[0], restTokens = _ref4.slice(1);
    if (!token2) {
      return [str];
    }
    var list2 = str.split(token2);
    match2 = match2 || list2.length > 1;
    return list2.reduce(function(prevList, unitStr) {
      return [].concat(_toConsumableArray(prevList), _toConsumableArray(separate(unitStr, restTokens)));
    }, []).filter(function(unit2) {
      return unit2;
    });
  }
  var list = separate(text, tokens);
  return match2 ? list : null;
}
var _excluded$a = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"];
var DEFAULT_OMIT_PROPS = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];
function isMultiple(mode) {
  return mode === "tags" || mode === "multiple";
}
var BaseSelect = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var _customizeRawInputEle, _classNames2;
  var id = props.id, prefixCls = props.prefixCls, className = props.className, showSearch = props.showSearch, tagRender = props.tagRender, direction = props.direction, omitDomProps = props.omitDomProps, displayValues = props.displayValues, onDisplayValuesChange = props.onDisplayValuesChange, emptyOptions = props.emptyOptions, _props$notFoundConten = props.notFoundContent, notFoundContent = _props$notFoundConten === void 0 ? "Not Found" : _props$notFoundConten, onClear = props.onClear, mode = props.mode, disabled = props.disabled, loading2 = props.loading, getInputElement = props.getInputElement, getRawInputElement = props.getRawInputElement, open = props.open, defaultOpen = props.defaultOpen, onDropdownVisibleChange = props.onDropdownVisibleChange, activeValue = props.activeValue, onActiveValueChange = props.onActiveValueChange, activeDescendantId = props.activeDescendantId, searchValue = props.searchValue, autoClearSearchValue = props.autoClearSearchValue, onSearch = props.onSearch, onSearchSplit = props.onSearchSplit, tokenSeparators = props.tokenSeparators, allowClear = props.allowClear, suffixIcon = props.suffixIcon, clearIcon = props.clearIcon, OptionList3 = props.OptionList, animation = props.animation, transitionName = props.transitionName, dropdownStyle = props.dropdownStyle, dropdownClassName = props.dropdownClassName, dropdownMatchSelectWidth = props.dropdownMatchSelectWidth, dropdownRender = props.dropdownRender, dropdownAlign = props.dropdownAlign, placement = props.placement, builtinPlacements = props.builtinPlacements, getPopupContainer = props.getPopupContainer, _props$showAction = props.showAction, showAction = _props$showAction === void 0 ? [] : _props$showAction, onFocus = props.onFocus, onBlur = props.onBlur, onKeyUp = props.onKeyUp, onKeyDown = props.onKeyDown, onMouseDown = props.onMouseDown, restProps = _objectWithoutProperties(props, _excluded$a);
  var multiple = isMultiple(mode);
  var mergedShowSearch = (showSearch !== void 0 ? showSearch : multiple) || mode === "combobox";
  var domProps = _objectSpread2({}, restProps);
  DEFAULT_OMIT_PROPS.forEach(function(propName) {
    delete domProps[propName];
  });
  omitDomProps === null || omitDomProps === void 0 || omitDomProps.forEach(function(propName) {
    delete domProps[propName];
  });
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), mobile = _React$useState2[0], setMobile = _React$useState2[1];
  reactExports.useEffect(function() {
    setMobile(isMobile());
  }, []);
  var containerRef = reactExports.useRef(null);
  var selectorDomRef = reactExports.useRef(null);
  var triggerRef = reactExports.useRef(null);
  var selectorRef = reactExports.useRef(null);
  var listRef = reactExports.useRef(null);
  var blurRef = reactExports.useRef(false);
  var _useDelayReset = useDelayReset(), _useDelayReset2 = _slicedToArray(_useDelayReset, 3), mockFocused = _useDelayReset2[0], setMockFocused = _useDelayReset2[1], cancelSetMockFocused = _useDelayReset2[2];
  reactExports.useImperativeHandle(ref, function() {
    var _selectorRef$current, _selectorRef$current2;
    return {
      focus: (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0 ? void 0 : _selectorRef$current.focus,
      blur: (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0 ? void 0 : _selectorRef$current2.blur,
      scrollTo: function scrollTo(arg) {
        var _listRef$current;
        return (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(arg);
      }
    };
  });
  var mergedSearchValue = reactExports.useMemo(function() {
    var _displayValues$;
    if (mode !== "combobox") {
      return searchValue;
    }
    var val = (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
    return typeof val === "string" || typeof val === "number" ? String(val) : "";
  }, [searchValue, mode, displayValues]);
  var customizeInputElement = mode === "combobox" && typeof getInputElement === "function" && getInputElement() || null;
  var customizeRawInputElement = typeof getRawInputElement === "function" && getRawInputElement();
  var customizeRawInputRef = useComposeRef(selectorDomRef, customizeRawInputElement === null || customizeRawInputElement === void 0 || (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0 ? void 0 : _customizeRawInputEle.ref);
  var _React$useState3 = reactExports.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), rendered = _React$useState4[0], setRendered = _React$useState4[1];
  useLayoutEffect$1(function() {
    setRendered(true);
  }, []);
  var _useMergedState = useMergedState(false, {
    defaultValue: defaultOpen,
    value: open
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), innerOpen = _useMergedState2[0], setInnerOpen = _useMergedState2[1];
  var mergedOpen = rendered ? innerOpen : false;
  var emptyListContent = !notFoundContent && emptyOptions;
  if (disabled || emptyListContent && mergedOpen && mode === "combobox") {
    mergedOpen = false;
  }
  var triggerOpen = emptyListContent ? false : mergedOpen;
  var onToggleOpen = reactExports.useCallback(function(newOpen) {
    var nextOpen = newOpen !== void 0 ? newOpen : !mergedOpen;
    if (!disabled) {
      setInnerOpen(nextOpen);
      if (mergedOpen !== nextOpen) {
        onDropdownVisibleChange === null || onDropdownVisibleChange === void 0 || onDropdownVisibleChange(nextOpen);
      }
    }
  }, [disabled, mergedOpen, setInnerOpen, onDropdownVisibleChange]);
  var tokenWithEnter = reactExports.useMemo(function() {
    return (tokenSeparators || []).some(function(tokenSeparator) {
      return ["\n", "\r\n"].includes(tokenSeparator);
    });
  }, [tokenSeparators]);
  var onInternalSearch = function onInternalSearch2(searchText, fromTyping, isCompositing) {
    var ret = true;
    var newSearchText = searchText;
    onActiveValueChange === null || onActiveValueChange === void 0 || onActiveValueChange(null);
    var patchLabels = isCompositing ? null : getSeparatedContent(searchText, tokenSeparators);
    if (mode !== "combobox" && patchLabels) {
      newSearchText = "";
      onSearchSplit === null || onSearchSplit === void 0 || onSearchSplit(patchLabels);
      onToggleOpen(false);
      ret = false;
    }
    if (onSearch && mergedSearchValue !== newSearchText) {
      onSearch(newSearchText, {
        source: fromTyping ? "typing" : "effect"
      });
    }
    return ret;
  };
  var onInternalSearchSubmit = function onInternalSearchSubmit2(searchText) {
    if (!searchText || !searchText.trim()) {
      return;
    }
    onSearch(searchText, {
      source: "submit"
    });
  };
  reactExports.useEffect(function() {
    if (!mergedOpen && !multiple && mode !== "combobox") {
      onInternalSearch("", false, false);
    }
  }, [mergedOpen]);
  reactExports.useEffect(function() {
    if (innerOpen && disabled) {
      setInnerOpen(false);
    }
    if (disabled && !blurRef.current) {
      setMockFocused(false);
    }
  }, [disabled]);
  var _useLock = useLock(), _useLock2 = _slicedToArray(_useLock, 2), getClearLock = _useLock2[0], setClearLock = _useLock2[1];
  var onInternalKeyDown = function onInternalKeyDown2(event) {
    var clearLock = getClearLock();
    var which = event.which;
    if (which === KeyCode.ENTER) {
      if (mode !== "combobox") {
        event.preventDefault();
      }
      if (!mergedOpen) {
        onToggleOpen(true);
      }
    }
    setClearLock(!!mergedSearchValue);
    if (which === KeyCode.BACKSPACE && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
      var cloneDisplayValues = _toConsumableArray(displayValues);
      var removedDisplayValue = null;
      for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
        var current = cloneDisplayValues[i];
        if (!current.disabled) {
          cloneDisplayValues.splice(i, 1);
          removedDisplayValue = current;
          break;
        }
      }
      if (removedDisplayValue) {
        onDisplayValuesChange(cloneDisplayValues, {
          type: "remove",
          values: [removedDisplayValue]
        });
      }
    }
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current2;
      (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
    }
    onKeyDown === null || onKeyDown === void 0 || onKeyDown.apply(void 0, [event].concat(rest));
  };
  var onInternalKeyUp = function onInternalKeyUp2(event) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current3;
      (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
    }
    onKeyUp === null || onKeyUp === void 0 || onKeyUp.apply(void 0, [event].concat(rest));
  };
  var onSelectorRemove = function onSelectorRemove2(val) {
    var newValues = displayValues.filter(function(i) {
      return i !== val;
    });
    onDisplayValuesChange(newValues, {
      type: "remove",
      values: [val]
    });
  };
  var focusRef = reactExports.useRef(false);
  var onContainerFocus = function onContainerFocus2() {
    setMockFocused(true);
    if (!disabled) {
      if (onFocus && !focusRef.current) {
        onFocus.apply(void 0, arguments);
      }
      if (showAction.includes("focus")) {
        onToggleOpen(true);
      }
    }
    focusRef.current = true;
  };
  var onContainerBlur = function onContainerBlur2() {
    blurRef.current = true;
    setMockFocused(false, function() {
      focusRef.current = false;
      blurRef.current = false;
      onToggleOpen(false);
    });
    if (disabled) {
      return;
    }
    if (mergedSearchValue) {
      if (mode === "tags") {
        onSearch(mergedSearchValue, {
          source: "submit"
        });
      } else if (mode === "multiple") {
        onSearch("", {
          source: "blur"
        });
      }
    }
    if (onBlur) {
      onBlur.apply(void 0, arguments);
    }
  };
  var activeTimeoutIds = [];
  reactExports.useEffect(function() {
    return function() {
      activeTimeoutIds.forEach(function(timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    };
  }, []);
  var onInternalMouseDown = function onInternalMouseDown2(event) {
    var _triggerRef$current;
    var target = event.target;
    var popupElement = (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : _triggerRef$current.getPopupElement();
    if (popupElement && popupElement.contains(target)) {
      var timeoutId = setTimeout(function() {
        var index2 = activeTimeoutIds.indexOf(timeoutId);
        if (index2 !== -1) {
          activeTimeoutIds.splice(index2, 1);
        }
        cancelSetMockFocused();
        if (!mobile && !popupElement.contains(document.activeElement)) {
          var _selectorRef$current3;
          (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0 || _selectorRef$current3.focus();
        }
      });
      activeTimeoutIds.push(timeoutId);
    }
    for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      restArgs[_key3 - 1] = arguments[_key3];
    }
    onMouseDown === null || onMouseDown === void 0 || onMouseDown.apply(void 0, [event].concat(restArgs));
  };
  var _React$useState5 = reactExports.useState({}), _React$useState6 = _slicedToArray(_React$useState5, 2), forceUpdate = _React$useState6[1];
  function onPopupMouseEnter() {
    forceUpdate({});
  }
  var onTriggerVisibleChange;
  if (customizeRawInputElement) {
    onTriggerVisibleChange = function onTriggerVisibleChange2(newOpen) {
      onToggleOpen(newOpen);
    };
  }
  useSelectTriggerControl(function() {
    var _triggerRef$current2;
    return [containerRef.current, (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0 ? void 0 : _triggerRef$current2.getPopupElement()];
  }, triggerOpen, onToggleOpen, !!customizeRawInputElement);
  var baseSelectContext = reactExports.useMemo(function() {
    return _objectSpread2(_objectSpread2({}, props), {}, {
      notFoundContent,
      open: mergedOpen,
      triggerOpen,
      id,
      showSearch: mergedShowSearch,
      multiple,
      toggleOpen: onToggleOpen
    });
  }, [props, notFoundContent, triggerOpen, mergedOpen, id, mergedShowSearch, multiple, onToggleOpen]);
  var showSuffixIcon = !!suffixIcon || loading2;
  var arrowNode;
  if (showSuffixIcon) {
    arrowNode = /* @__PURE__ */ reactExports.createElement(TransBtn, {
      className: classNames("".concat(prefixCls, "-arrow"), _defineProperty({}, "".concat(prefixCls, "-arrow-loading"), loading2)),
      customizeIcon: suffixIcon,
      customizeIconProps: {
        loading: loading2,
        searchValue: mergedSearchValue,
        open: mergedOpen,
        focused: mockFocused,
        showSearch: mergedShowSearch
      }
    });
  }
  var onClearMouseDown = function onClearMouseDown2() {
    var _selectorRef$current4;
    onClear === null || onClear === void 0 || onClear();
    (_selectorRef$current4 = selectorRef.current) === null || _selectorRef$current4 === void 0 || _selectorRef$current4.focus();
    onDisplayValuesChange([], {
      type: "clear",
      values: displayValues
    });
    onInternalSearch("", false, false);
  };
  var _useAllowClear = useAllowClear(prefixCls, onClearMouseDown, displayValues, allowClear, clearIcon, disabled, mergedSearchValue, mode), mergedAllowClear = _useAllowClear.allowClear, clearNode = _useAllowClear.clearIcon;
  var optionList = /* @__PURE__ */ reactExports.createElement(OptionList3, {
    ref: listRef
  });
  var mergedClassName = classNames(prefixCls, className, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), _defineProperty(_classNames2, "".concat(prefixCls, "-multiple"), multiple), _defineProperty(_classNames2, "".concat(prefixCls, "-single"), !multiple), _defineProperty(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), _defineProperty(_classNames2, "".concat(prefixCls, "-show-arrow"), showSuffixIcon), _defineProperty(_classNames2, "".concat(prefixCls, "-disabled"), disabled), _defineProperty(_classNames2, "".concat(prefixCls, "-loading"), loading2), _defineProperty(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), _defineProperty(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), _defineProperty(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2));
  var selectorNode = /* @__PURE__ */ reactExports.createElement(RefSelectTrigger, {
    ref: triggerRef,
    disabled,
    prefixCls,
    visible: triggerOpen,
    popupElement: optionList,
    animation,
    transitionName,
    dropdownStyle,
    dropdownClassName,
    direction,
    dropdownMatchSelectWidth,
    dropdownRender,
    dropdownAlign,
    placement,
    builtinPlacements,
    getPopupContainer,
    empty: emptyOptions,
    getTriggerDOMNode: function getTriggerDOMNode() {
      return selectorDomRef.current;
    },
    onPopupVisibleChange: onTriggerVisibleChange,
    onPopupMouseEnter
  }, customizeRawInputElement ? /* @__PURE__ */ reactExports.cloneElement(customizeRawInputElement, {
    ref: customizeRawInputRef
  }) : /* @__PURE__ */ reactExports.createElement(ForwardSelector, _extends$1({}, props, {
    domRef: selectorDomRef,
    prefixCls,
    inputElement: customizeInputElement,
    ref: selectorRef,
    id,
    showSearch: mergedShowSearch,
    autoClearSearchValue,
    mode,
    activeDescendantId,
    tagRender,
    values: displayValues,
    open: mergedOpen,
    onToggleOpen,
    activeValue,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    onSearchSubmit: onInternalSearchSubmit,
    onRemove: onSelectorRemove,
    tokenWithEnter
  })));
  var renderNode;
  if (customizeRawInputElement) {
    renderNode = selectorNode;
  } else {
    renderNode = /* @__PURE__ */ reactExports.createElement("div", _extends$1({
      className: mergedClassName
    }, domProps, {
      ref: containerRef,
      onMouseDown: onInternalMouseDown,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onFocus: onContainerFocus,
      onBlur: onContainerBlur
    }), mockFocused && !mergedOpen && /* @__PURE__ */ reactExports.createElement("span", {
      style: {
        width: 0,
        height: 0,
        position: "absolute",
        overflow: "hidden",
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(displayValues.map(function(_ref) {
      var label = _ref.label, value = _ref.value;
      return ["number", "string"].includes(_typeof(label)) ? label : value;
    }).join(", "))), selectorNode, arrowNode, mergedAllowClear && clearNode);
  }
  return /* @__PURE__ */ reactExports.createElement(BaseSelectContext.Provider, {
    value: baseSelectContext
  }, renderNode);
});
var OptGroup = function OptGroup2() {
  return null;
};
OptGroup.isSelectOptGroup = true;
var Option = function Option2() {
  return null;
};
Option.isSelectOption = true;
var Filler = /* @__PURE__ */ reactExports.forwardRef(function(_ref, ref) {
  var height = _ref.height, offsetY = _ref.offsetY, offsetX = _ref.offsetX, children = _ref.children, prefixCls = _ref.prefixCls, onInnerResize = _ref.onInnerResize, innerProps = _ref.innerProps, rtl = _ref.rtl, extra = _ref.extra;
  var outerStyle = {};
  var innerStyle = {
    display: "flex",
    flexDirection: "column"
  };
  if (offsetY !== void 0) {
    var _objectSpread2$1;
    outerStyle = {
      height,
      position: "relative",
      overflow: "hidden"
    };
    innerStyle = _objectSpread2(_objectSpread2({}, innerStyle), {}, (_objectSpread2$1 = {
      transform: "translateY(".concat(offsetY, "px)")
    }, _defineProperty(_objectSpread2$1, rtl ? "marginRight" : "marginLeft", -offsetX), _defineProperty(_objectSpread2$1, "position", "absolute"), _defineProperty(_objectSpread2$1, "left", 0), _defineProperty(_objectSpread2$1, "right", 0), _defineProperty(_objectSpread2$1, "top", 0), _objectSpread2$1));
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    style: outerStyle
  }, /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
    onResize: function onResize2(_ref2) {
      var offsetHeight = _ref2.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /* @__PURE__ */ reactExports.createElement("div", _extends$1({
    style: innerStyle,
    className: classNames(_defineProperty({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref
  }, innerProps), children, extra)));
});
Filler.displayName = "Filler";
function getPageXY(e2, horizontal) {
  var obj = "touches" in e2 ? e2.touches[0] : e2;
  return obj[horizontal ? "pageX" : "pageY"];
}
var ScrollBar = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var _classNames;
  var prefixCls = props.prefixCls, rtl = props.rtl, scrollOffset = props.scrollOffset, scrollRange = props.scrollRange, onStartMove = props.onStartMove, onStopMove = props.onStopMove, onScroll = props.onScroll, horizontal = props.horizontal, spinSize = props.spinSize, containerSize = props.containerSize, style2 = props.style, propsThumbStyle = props.thumbStyle;
  var _React$useState = reactExports.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), dragging = _React$useState2[0], setDragging = _React$useState2[1];
  var _React$useState3 = reactExports.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), pageXY = _React$useState4[0], setPageXY = _React$useState4[1];
  var _React$useState5 = reactExports.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), startTop = _React$useState6[0], setStartTop = _React$useState6[1];
  var isLTR = !rtl;
  var scrollbarRef = reactExports.useRef();
  var thumbRef = reactExports.useRef();
  var _React$useState7 = reactExports.useState(false), _React$useState8 = _slicedToArray(_React$useState7, 2), visible = _React$useState8[0], setVisible = _React$useState8[1];
  var visibleTimeoutRef = reactExports.useRef();
  var delayHidden = function delayHidden2() {
    clearTimeout(visibleTimeoutRef.current);
    setVisible(true);
    visibleTimeoutRef.current = setTimeout(function() {
      setVisible(false);
    }, 3e3);
  };
  var enableScrollRange = scrollRange - containerSize || 0;
  var enableOffsetRange = containerSize - spinSize || 0;
  var canScroll = enableScrollRange > 0;
  var top = reactExports.useMemo(function() {
    if (scrollOffset === 0 || enableScrollRange === 0) {
      return 0;
    }
    var ptg = scrollOffset / enableScrollRange;
    return ptg * enableOffsetRange;
  }, [scrollOffset, enableScrollRange, enableOffsetRange]);
  var onContainerMouseDown = function onContainerMouseDown2(e2) {
    e2.stopPropagation();
    e2.preventDefault();
  };
  var stateRef = reactExports.useRef({
    top,
    dragging,
    pageY: pageXY,
    startTop
  });
  stateRef.current = {
    top,
    dragging,
    pageY: pageXY,
    startTop
  };
  var onThumbMouseDown = function onThumbMouseDown2(e2) {
    setDragging(true);
    setPageXY(getPageXY(e2, horizontal));
    setStartTop(stateRef.current.top);
    onStartMove();
    e2.stopPropagation();
    e2.preventDefault();
  };
  reactExports.useEffect(function() {
    var onScrollbarTouchStart = function onScrollbarTouchStart2(e2) {
      e2.preventDefault();
    };
    var scrollbarEle = scrollbarRef.current;
    var thumbEle = thumbRef.current;
    scrollbarEle.addEventListener("touchstart", onScrollbarTouchStart);
    thumbEle.addEventListener("touchstart", onThumbMouseDown);
    return function() {
      scrollbarEle.removeEventListener("touchstart", onScrollbarTouchStart);
      thumbEle.removeEventListener("touchstart", onThumbMouseDown);
    };
  }, []);
  var enableScrollRangeRef = reactExports.useRef();
  enableScrollRangeRef.current = enableScrollRange;
  var enableOffsetRangeRef = reactExports.useRef();
  enableOffsetRangeRef.current = enableOffsetRange;
  reactExports.useEffect(function() {
    if (dragging) {
      var moveRafId;
      var onMouseMove = function onMouseMove2(e2) {
        var _stateRef$current = stateRef.current, stateDragging = _stateRef$current.dragging, statePageY = _stateRef$current.pageY, stateStartTop = _stateRef$current.startTop;
        wrapperRaf.cancel(moveRafId);
        if (stateDragging) {
          var offset = getPageXY(e2, horizontal) - statePageY;
          var newTop = stateStartTop;
          if (!isLTR && horizontal) {
            newTop -= offset;
          } else {
            newTop += offset;
          }
          var tmpEnableScrollRange = enableScrollRangeRef.current;
          var tmpEnableOffsetRange = enableOffsetRangeRef.current;
          var ptg = tmpEnableOffsetRange ? newTop / tmpEnableOffsetRange : 0;
          var newScrollTop = Math.ceil(ptg * tmpEnableScrollRange);
          newScrollTop = Math.max(newScrollTop, 0);
          newScrollTop = Math.min(newScrollTop, tmpEnableScrollRange);
          moveRafId = wrapperRaf(function() {
            onScroll(newScrollTop, horizontal);
          });
        }
      };
      var onMouseUp = function onMouseUp2() {
        setDragging(false);
        onStopMove();
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchend", onMouseUp);
      return function() {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("touchmove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("touchend", onMouseUp);
        wrapperRaf.cancel(moveRafId);
      };
    }
  }, [dragging]);
  reactExports.useEffect(function() {
    delayHidden();
  }, [scrollOffset]);
  reactExports.useImperativeHandle(ref, function() {
    return {
      delayHidden
    };
  });
  var scrollbarPrefixCls = "".concat(prefixCls, "-scrollbar");
  var containerStyle = {
    position: "absolute",
    visibility: visible && canScroll ? null : "hidden"
  };
  var thumbStyle = {
    position: "absolute",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: 99,
    cursor: "pointer",
    userSelect: "none"
  };
  if (horizontal) {
    containerStyle.height = 8;
    containerStyle.left = 0;
    containerStyle.right = 0;
    containerStyle.bottom = 0;
    thumbStyle.height = "100%";
    thumbStyle.width = spinSize;
    if (isLTR) {
      thumbStyle.left = top;
    } else {
      thumbStyle.right = top;
    }
  } else {
    containerStyle.width = 8;
    containerStyle.top = 0;
    containerStyle.bottom = 0;
    if (isLTR) {
      containerStyle.right = 0;
    } else {
      containerStyle.left = 0;
    }
    thumbStyle.width = "100%";
    thumbStyle.height = spinSize;
    thumbStyle.top = top;
  }
  return /* @__PURE__ */ reactExports.createElement("div", {
    ref: scrollbarRef,
    className: classNames(scrollbarPrefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(scrollbarPrefixCls, "-horizontal"), horizontal), _defineProperty(_classNames, "".concat(scrollbarPrefixCls, "-vertical"), !horizontal), _defineProperty(_classNames, "".concat(scrollbarPrefixCls, "-visible"), visible), _classNames)),
    style: _objectSpread2(_objectSpread2({}, containerStyle), style2),
    onMouseDown: onContainerMouseDown,
    onMouseMove: delayHidden
  }, /* @__PURE__ */ reactExports.createElement("div", {
    ref: thumbRef,
    className: classNames("".concat(scrollbarPrefixCls, "-thumb"), _defineProperty({}, "".concat(scrollbarPrefixCls, "-thumb-moving"), dragging)),
    style: _objectSpread2(_objectSpread2({}, thumbStyle), propsThumbStyle),
    onMouseDown: onThumbMouseDown
  }));
});
function Item(_ref) {
  var children = _ref.children, setRef = _ref.setRef;
  var refFunc = reactExports.useCallback(function(node2) {
    setRef(node2);
  }, []);
  return /* @__PURE__ */ reactExports.cloneElement(children, {
    ref: refFunc
  });
}
function useChildren(list, startIndex, endIndex, scrollWidth, setNodeRef, renderFunc, _ref) {
  var getKey2 = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function(item, index2) {
    var eleIndex = startIndex + index2;
    var node2 = renderFunc(item, eleIndex, {
      style: {
        width: scrollWidth
      }
    });
    var key = getKey2(item);
    return /* @__PURE__ */ reactExports.createElement(Item, {
      key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node2);
  });
}
var CacheMap = /* @__PURE__ */ function() {
  function CacheMap2() {
    _classCallCheck(this, CacheMap2);
    this.maps = void 0;
    this.id = 0;
    this.maps = /* @__PURE__ */ Object.create(null);
  }
  _createClass(CacheMap2, [{
    key: "set",
    value: function set2(key, value) {
      this.maps[key] = value;
      this.id += 1;
    }
  }, {
    key: "get",
    value: function get2(key) {
      return this.maps[key];
    }
  }]);
  return CacheMap2;
}();
function useHeights(getKey2, onItemAdd, onItemRemove) {
  var _React$useState = reactExports.useState(0), _React$useState2 = _slicedToArray(_React$useState, 2), updatedMark = _React$useState2[0], setUpdatedMark = _React$useState2[1];
  var instanceRef = reactExports.useRef(/* @__PURE__ */ new Map());
  var heightsRef = reactExports.useRef(new CacheMap());
  var collectRafRef = reactExports.useRef();
  function cancelRaf() {
    wrapperRaf.cancel(collectRafRef.current);
  }
  function collectHeight() {
    var sync = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    cancelRaf();
    var doCollect = function doCollect2() {
      instanceRef.current.forEach(function(element, key) {
        if (element && element.offsetParent) {
          var htmlElement = findDOMNode(element);
          var offsetHeight = htmlElement.offsetHeight;
          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      });
      setUpdatedMark(function(c2) {
        return c2 + 1;
      });
    };
    if (sync) {
      doCollect();
    } else {
      collectRafRef.current = wrapperRaf(doCollect);
    }
  }
  function setInstanceRef(item, instance) {
    var key = getKey2(item);
    var origin = instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }
    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  reactExports.useEffect(function() {
    return cancelRaf;
  }, []);
  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}
var MAX_TIMES = 10;
function useScrollTo(containerRef, data, heights, itemHeight, getKey2, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = reactExports.useRef();
  var _React$useState = reactExports.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), syncState = _React$useState2[0], setSyncState = _React$useState2[1];
  useLayoutEffect$1(function() {
    if (syncState && syncState.times < MAX_TIMES) {
      if (!containerRef.current) {
        setSyncState(function(ori) {
          return _objectSpread2({}, ori);
        });
        return;
      }
      collectHeight();
      var targetAlign = syncState.targetAlign, originAlign = syncState.originAlign, index2 = syncState.index, offset = syncState.offset;
      var height = containerRef.current.clientHeight;
      var needCollectHeight = false;
      var newTargetAlign = targetAlign;
      var targetTop = null;
      if (height) {
        var mergedAlign = targetAlign || originAlign;
        var stackTop = 0;
        var itemTop = 0;
        var itemBottom = 0;
        var maxLen = Math.min(data.length - 1, index2);
        for (var i = 0; i <= maxLen; i += 1) {
          var key = getKey2(data[i]);
          itemTop = stackTop;
          var cacheHeight = heights.get(key);
          itemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
          stackTop = itemBottom;
        }
        var leftHeight = mergedAlign === "top" ? offset : height - offset;
        for (var _i = maxLen; _i >= 0; _i -= 1) {
          var _key = getKey2(data[_i]);
          var _cacheHeight = heights.get(_key);
          if (_cacheHeight === void 0) {
            needCollectHeight = true;
            break;
          }
          leftHeight -= _cacheHeight;
          if (leftHeight <= 0) {
            break;
          }
        }
        switch (mergedAlign) {
          case "top":
            targetTop = itemTop - offset;
            break;
          case "bottom":
            targetTop = itemBottom - height + offset;
            break;
          default: {
            var scrollTop = containerRef.current.scrollTop;
            var scrollBottom = scrollTop + height;
            if (itemTop < scrollTop) {
              newTargetAlign = "top";
            } else if (itemBottom > scrollBottom) {
              newTargetAlign = "bottom";
            }
          }
        }
        if (targetTop !== null) {
          syncScrollTop(targetTop);
        }
        if (targetTop !== syncState.lastTop) {
          needCollectHeight = true;
        }
      }
      if (needCollectHeight) {
        setSyncState(_objectSpread2(_objectSpread2({}, syncState), {}, {
          times: syncState.times + 1,
          targetAlign: newTargetAlign,
          lastTop: targetTop
        }));
      }
    }
  }, [syncState, containerRef.current]);
  return function(arg) {
    if (arg === null || arg === void 0) {
      triggerFlash();
      return;
    }
    wrapperRaf.cancel(scrollRef.current);
    if (typeof arg === "number") {
      syncScrollTop(arg);
    } else if (arg && _typeof(arg) === "object") {
      var index2;
      var align = arg.align;
      if ("index" in arg) {
        index2 = arg.index;
      } else {
        index2 = data.findIndex(function(item) {
          return getKey2(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset, offset = _arg$offset === void 0 ? 0 : _arg$offset;
      setSyncState({
        times: 0,
        index: index2,
        offset,
        originAlign: align
      });
    }
  };
}
function findListDiffIndex(originList, targetList, getKey2) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;
  if (originLen === 0 && targetLen === 0) {
    return null;
  }
  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }
  var notExistKey = {
    __EMPTY_ITEM__: true
  };
  function getItemKey(item) {
    if (item !== void 0) {
      return getKey2(item);
    }
    return notExistKey;
  }
  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;
  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);
    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }
  return diffIndex === null ? null : {
    index: diffIndex,
    multiple
  };
}
function useDiffItem(data, getKey2, onDiff) {
  var _React$useState = reactExports.useState(data), _React$useState2 = _slicedToArray(_React$useState, 2), prevData = _React$useState2[0], setPrevData = _React$useState2[1];
  var _React$useState3 = reactExports.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), diffItem = _React$useState4[0], setDiffItem = _React$useState4[1];
  reactExports.useEffect(function() {
    var diff = findListDiffIndex(prevData || [], data || [], getKey2);
    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== void 0) {
      onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }
    setPrevData(data);
  }, [data]);
  return [diffItem];
}
var isFF = (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const useOriginScroll = function(isScrollAtTop, isScrollAtBottom) {
  var lockRef = reactExports.useRef(false);
  var lockTimeoutRef = reactExports.useRef(null);
  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function() {
      lockRef.current = false;
    }, 50);
  }
  var scrollPingRef = reactExports.useRef({
    top: isScrollAtTop,
    bottom: isScrollAtBottom
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  return function(deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var originScroll = (
      // Pass origin wheel when on the top
      deltaY < 0 && scrollPingRef.current.top || // Pass origin wheel when on the bottom
      deltaY > 0 && scrollPingRef.current.bottom
    );
    if (smoothOffset && originScroll) {
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }
    return !lockRef.current && originScroll;
  };
};
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, horizontalScroll, onWheelDelta) {
  var offsetRef = reactExports.useRef(0);
  var nextFrameRef = reactExports.useRef(null);
  var wheelValueRef = reactExports.useRef(null);
  var isMouseScrollRef = reactExports.useRef(false);
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  function onWheelY(event, deltaY) {
    wrapperRaf.cancel(nextFrameRef.current);
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;
    if (originScroll(deltaY))
      return;
    if (!isFF) {
      event.preventDefault();
    }
    nextFrameRef.current = wrapperRaf(function() {
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  }
  function onWheelX(event, deltaX) {
    onWheelDelta(deltaX, true);
    if (!isFF) {
      event.preventDefault();
    }
  }
  var wheelDirectionRef = reactExports.useRef(null);
  var wheelDirectionCleanRef = reactExports.useRef(null);
  function onWheel(event) {
    if (!inVirtual)
      return;
    wrapperRaf.cancel(wheelDirectionCleanRef.current);
    wheelDirectionCleanRef.current = wrapperRaf(function() {
      wheelDirectionRef.current = null;
    }, 2);
    var deltaX = event.deltaX, deltaY = event.deltaY, shiftKey = event.shiftKey;
    var mergedDeltaX = deltaX;
    var mergedDeltaY = deltaY;
    if (wheelDirectionRef.current === "sx" || !wheelDirectionRef.current && (shiftKey || false) && deltaY && !deltaX) {
      mergedDeltaX = deltaY;
      mergedDeltaY = 0;
      wheelDirectionRef.current = "sx";
    }
    var absX = Math.abs(mergedDeltaX);
    var absY = Math.abs(mergedDeltaY);
    if (wheelDirectionRef.current === null) {
      wheelDirectionRef.current = horizontalScroll && absX > absY ? "x" : "y";
    }
    if (wheelDirectionRef.current === "y") {
      onWheelY(event, mergedDeltaY);
    } else {
      onWheelX(event, mergedDeltaX);
    }
  }
  function onFireFoxScroll(event) {
    if (!inVirtual)
      return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}
var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = reactExports.useRef(false);
  var touchYRef = reactExports.useRef(0);
  var elementRef = reactExports.useRef(null);
  var intervalRef = reactExports.useRef(null);
  var cleanUpEvents;
  var onTouchMove = function onTouchMove2(e2) {
    if (touchedRef.current) {
      var currentY = Math.ceil(e2.touches[0].pageY);
      var offsetY = touchYRef.current - currentY;
      touchYRef.current = currentY;
      if (callback(offsetY)) {
        e2.preventDefault();
      }
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function() {
        offsetY *= SMOOTH_PTG;
        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd2() {
    touchedRef.current = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart2(e2) {
    cleanUpEvents();
    if (e2.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchYRef.current = Math.ceil(e2.touches[0].pageY);
      elementRef.current = e2.target;
      elementRef.current.addEventListener("touchmove", onTouchMove);
      elementRef.current.addEventListener("touchend", onTouchEnd);
    }
  };
  cleanUpEvents = function cleanUpEvents2() {
    if (elementRef.current) {
      elementRef.current.removeEventListener("touchmove", onTouchMove);
      elementRef.current.removeEventListener("touchend", onTouchEnd);
    }
  };
  useLayoutEffect$1(function() {
    if (inVirtual) {
      listRef.current.addEventListener("touchstart", onTouchStart);
    }
    return function() {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.removeEventListener("touchstart", onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}
var MIN_SIZE = 20;
function getSpinSize() {
  var containerSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var scrollRange = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var baseSize = containerSize / scrollRange * 100;
  if (isNaN(baseSize)) {
    baseSize = 0;
  }
  baseSize = Math.max(baseSize, MIN_SIZE);
  baseSize = Math.min(baseSize, containerSize / 2);
  return Math.floor(baseSize);
}
function useGetSize(mergedData, getKey2, heights, itemHeight) {
  var _React$useMemo = reactExports.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [mergedData, heights.id, itemHeight]), _React$useMemo2 = _slicedToArray(_React$useMemo, 2), key2Index = _React$useMemo2[0], bottomList = _React$useMemo2[1];
  var getSize = function getSize2(startKey) {
    var endKey = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : startKey;
    var startIndex = key2Index.get(startKey);
    var endIndex = key2Index.get(endKey);
    if (startIndex === void 0 || endIndex === void 0) {
      var dataLen = mergedData.length;
      for (var i = bottomList.length; i < dataLen; i += 1) {
        var _heights$get;
        var item = mergedData[i];
        var key = getKey2(item);
        key2Index.set(key, i);
        var cacheHeight = (_heights$get = heights.get(key)) !== null && _heights$get !== void 0 ? _heights$get : itemHeight;
        bottomList[i] = (bottomList[i - 1] || 0) + cacheHeight;
        if (key === startKey) {
          startIndex = i;
        }
        if (key === endKey) {
          endIndex = i;
        }
        if (startIndex !== void 0 && endIndex !== void 0) {
          break;
        }
      }
    }
    return {
      top: bottomList[startIndex - 1] || 0,
      bottom: bottomList[endIndex]
    };
  };
  return getSize;
}
var _excluded$9 = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles"];
var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-virtual-list" : _props$prefixCls, className = props.className, height = props.height, itemHeight = props.itemHeight, _props$fullHeight = props.fullHeight, fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight, style2 = props.style, data = props.data, children = props.children, itemKey2 = props.itemKey, virtual = props.virtual, direction = props.direction, scrollWidth = props.scrollWidth, _props$component = props.component, Component = _props$component === void 0 ? "div" : _props$component, onScroll = props.onScroll, onVirtualScroll = props.onVirtualScroll, onVisibleChange = props.onVisibleChange, innerProps = props.innerProps, extraRender = props.extraRender, styles = props.styles, restProps = _objectWithoutProperties(props, _excluded$9);
  var useVirtual = !!(virtual !== false && height && itemHeight);
  var inVirtual = useVirtual && data && (itemHeight * data.length > height || !!scrollWidth);
  var isRTL = direction === "rtl";
  var mergedClassName = classNames(prefixCls, _defineProperty({}, "".concat(prefixCls, "-rtl"), isRTL), className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = reactExports.useRef();
  var fillerInnerRef = reactExports.useRef();
  var _useState = reactExports.useState(0), _useState2 = _slicedToArray(_useState, 2), offsetTop = _useState2[0], setOffsetTop = _useState2[1];
  var _useState3 = reactExports.useState(0), _useState4 = _slicedToArray(_useState3, 2), offsetLeft = _useState4[0], setOffsetLeft = _useState4[1];
  var _useState5 = reactExports.useState(false), _useState6 = _slicedToArray(_useState5, 2), scrollMoving = _useState6[0], setScrollMoving = _useState6[1];
  var onScrollbarStartMove = function onScrollbarStartMove2() {
    setScrollMoving(true);
  };
  var onScrollbarStopMove = function onScrollbarStopMove2() {
    setScrollMoving(false);
  };
  var getKey2 = reactExports.useCallback(function(item) {
    if (typeof itemKey2 === "function") {
      return itemKey2(item);
    }
    return item === null || item === void 0 ? void 0 : item[itemKey2];
  }, [itemKey2]);
  var sharedConfig = {
    getKey: getKey2
  };
  function syncScrollTop(newTop) {
    setOffsetTop(function(origin) {
      var value;
      if (typeof newTop === "function") {
        value = newTop(origin);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }
  var rangeRef = reactExports.useRef({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = reactExports.useRef();
  var _useDiffItem = useDiffItem(mergedData, getKey2), _useDiffItem2 = _slicedToArray(_useDiffItem, 1), diffItem = _useDiffItem2[0];
  diffItemRef.current = diffItem;
  var _useHeights = useHeights(getKey2, null, null), _useHeights2 = _slicedToArray(_useHeights, 4), setInstanceRef = _useHeights2[0], collectHeight = _useHeights2[1], heights = _useHeights2[2], heightUpdatedMark = _useHeights2[3];
  var _React$useMemo = reactExports.useMemo(function() {
    if (!useVirtual) {
      return {
        scrollHeight: void 0,
        start: 0,
        end: mergedData.length - 1,
        offset: void 0
      };
    }
    if (!inVirtual) {
      var _fillerInnerRef$curre;
      return {
        scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
        start: 0,
        end: mergedData.length - 1,
        offset: void 0
      };
    }
    var itemTop = 0;
    var startIndex;
    var startOffset;
    var endIndex;
    var dataLen = mergedData.length;
    for (var i = 0; i < dataLen; i += 1) {
      var item = mergedData[i];
      var key = getKey2(item);
      var cacheHeight = heights.get(key);
      var currentItemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
      if (currentItemBottom >= offsetTop && startIndex === void 0) {
        startIndex = i;
        startOffset = itemTop;
      }
      if (currentItemBottom > offsetTop + height && endIndex === void 0) {
        endIndex = i;
      }
      itemTop = currentItemBottom;
    }
    if (startIndex === void 0) {
      startIndex = 0;
      startOffset = 0;
      endIndex = Math.ceil(height / itemHeight);
    }
    if (endIndex === void 0) {
      endIndex = mergedData.length - 1;
    }
    endIndex = Math.min(endIndex + 1, mergedData.length - 1);
    return {
      scrollHeight: itemTop,
      start: startIndex,
      end: endIndex,
      offset: startOffset
    };
  }, [inVirtual, useVirtual, offsetTop, mergedData, heightUpdatedMark, height]), scrollHeight = _React$useMemo.scrollHeight, start = _React$useMemo.start, end = _React$useMemo.end, fillerOffset = _React$useMemo.offset;
  rangeRef.current.start = start;
  rangeRef.current.end = end;
  var _React$useState = reactExports.useState({
    width: 0,
    height
  }), _React$useState2 = _slicedToArray(_React$useState, 2), size = _React$useState2[0], setSize = _React$useState2[1];
  var onHolderResize = function onHolderResize2(sizeInfo) {
    setSize({
      width: sizeInfo.width || sizeInfo.offsetWidth,
      height: sizeInfo.height || sizeInfo.offsetHeight
    });
  };
  var verticalScrollBarRef = reactExports.useRef();
  var horizontalScrollBarRef = reactExports.useRef();
  var horizontalScrollBarSpinSize = reactExports.useMemo(function() {
    return getSpinSize(size.width, scrollWidth);
  }, [size.width, scrollWidth]);
  var verticalScrollBarSpinSize = reactExports.useMemo(function() {
    return getSpinSize(size.height, scrollHeight);
  }, [size.height, scrollHeight]);
  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = reactExports.useRef(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;
  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }
  var isScrollAtTop = offsetTop <= 0;
  var isScrollAtBottom = offsetTop >= maxScrollHeight;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  var getVirtualScrollInfo = function getVirtualScrollInfo2() {
    return {
      x: isRTL ? -offsetLeft : offsetLeft,
      y: offsetTop
    };
  };
  var lastVirtualScrollInfoRef = reactExports.useRef(getVirtualScrollInfo());
  var triggerScroll = useEvent(function() {
    if (onVirtualScroll) {
      var nextInfo = getVirtualScrollInfo();
      if (lastVirtualScrollInfoRef.current.x !== nextInfo.x || lastVirtualScrollInfoRef.current.y !== nextInfo.y) {
        onVirtualScroll(nextInfo);
        lastVirtualScrollInfoRef.current = nextInfo;
      }
    }
  });
  function onScrollBar(newScrollOffset, horizontal) {
    var newOffset = newScrollOffset;
    if (horizontal) {
      reactDomExports.flushSync(function() {
        setOffsetLeft(newOffset);
      });
      triggerScroll();
    } else {
      syncScrollTop(newOffset);
    }
  }
  function onFallbackScroll(e2) {
    var newScrollTop = e2.currentTarget.scrollTop;
    if (newScrollTop !== offsetTop) {
      syncScrollTop(newScrollTop);
    }
    onScroll === null || onScroll === void 0 ? void 0 : onScroll(e2);
    triggerScroll();
  }
  var keepInHorizontalRange = function keepInHorizontalRange2(nextOffsetLeft) {
    var tmpOffsetLeft = nextOffsetLeft;
    var max = scrollWidth - size.width;
    tmpOffsetLeft = Math.max(tmpOffsetLeft, 0);
    tmpOffsetLeft = Math.min(tmpOffsetLeft, max);
    return tmpOffsetLeft;
  };
  var onWheelDelta = useEvent(function(offsetXY, fromHorizontal) {
    if (fromHorizontal) {
      reactDomExports.flushSync(function() {
        setOffsetLeft(function(left) {
          var nextOffsetLeft = left + (isRTL ? -offsetXY : offsetXY);
          return keepInHorizontalRange(nextOffsetLeft);
        });
      });
      triggerScroll();
    } else {
      syncScrollTop(function(top) {
        var newTop = top + offsetXY;
        return newTop;
      });
    }
  });
  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, !!scrollWidth, onWheelDelta), _useFrameWheel2 = _slicedToArray(_useFrameWheel, 2), onRawWheel = _useFrameWheel2[0], onFireFoxScroll = _useFrameWheel2[1];
  useMobileTouchMove(useVirtual, componentRef, function(deltaY, smoothOffset) {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }
    onRawWheel({
      preventDefault: function preventDefault() {
      },
      deltaY
    });
    return true;
  });
  useLayoutEffect$1(function() {
    function onMozMousePixelScroll(e2) {
      if (useVirtual) {
        e2.preventDefault();
      }
    }
    var componentEle = componentRef.current;
    componentEle.addEventListener("wheel", onRawWheel);
    componentEle.addEventListener("DOMMouseScroll", onFireFoxScroll);
    componentEle.addEventListener("MozMousePixelScroll", onMozMousePixelScroll);
    return function() {
      componentEle.removeEventListener("wheel", onRawWheel);
      componentEle.removeEventListener("DOMMouseScroll", onFireFoxScroll);
      componentEle.removeEventListener("MozMousePixelScroll", onMozMousePixelScroll);
    };
  }, [useVirtual]);
  useLayoutEffect$1(function() {
    if (scrollWidth) {
      setOffsetLeft(function(left) {
        return keepInHorizontalRange(left);
      });
    }
  }, [size.width, scrollWidth]);
  var delayHideScrollBar = function delayHideScrollBar2() {
    var _verticalScrollBarRef, _horizontalScrollBarR;
    (_verticalScrollBarRef = verticalScrollBarRef.current) === null || _verticalScrollBarRef === void 0 ? void 0 : _verticalScrollBarRef.delayHidden();
    (_horizontalScrollBarR = horizontalScrollBarRef.current) === null || _horizontalScrollBarR === void 0 ? void 0 : _horizontalScrollBarR.delayHidden();
  };
  var _scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey2, function() {
    return collectHeight(true);
  }, syncScrollTop, delayHideScrollBar);
  reactExports.useImperativeHandle(ref, function() {
    return {
      getScrollInfo: getVirtualScrollInfo,
      scrollTo: function scrollTo(config) {
        function isPosScroll(arg) {
          return arg && _typeof(arg) === "object" && ("left" in arg || "top" in arg);
        }
        if (isPosScroll(config)) {
          if (config.left !== void 0) {
            setOffsetLeft(keepInHorizontalRange(config.left));
          }
          _scrollTo(config.top);
        } else {
          _scrollTo(config);
        }
      }
    };
  });
  useLayoutEffect$1(function() {
    if (onVisibleChange) {
      var renderList = mergedData.slice(start, end + 1);
      onVisibleChange(renderList, mergedData);
    }
  }, [start, end, mergedData]);
  var getSize = useGetSize(mergedData, getKey2, heights, itemHeight);
  var extraContent = extraRender === null || extraRender === void 0 ? void 0 : extraRender({
    start,
    end,
    virtual: inVirtual,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    rtl: isRTL,
    getSize
  });
  var listChildren = useChildren(mergedData, start, end, scrollWidth, setInstanceRef, children, sharedConfig);
  var componentStyle = null;
  if (height) {
    componentStyle = _objectSpread2(_defineProperty({}, fullHeight ? "height" : "maxHeight", height), ScrollStyle);
    if (useVirtual) {
      componentStyle.overflowY = "hidden";
      if (scrollWidth) {
        componentStyle.overflowX = "hidden";
      }
      if (scrollMoving) {
        componentStyle.pointerEvents = "none";
      }
    }
  }
  var containerProps = {};
  if (isRTL) {
    containerProps.dir = "rtl";
  }
  return /* @__PURE__ */ reactExports.createElement("div", _extends$1({
    style: _objectSpread2(_objectSpread2({}, style2), {}, {
      position: "relative"
    }),
    className: mergedClassName
  }, containerProps, restProps), /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
    onResize: onHolderResize
  }, /* @__PURE__ */ reactExports.createElement(Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll,
    onMouseEnter: delayHideScrollBar
  }, /* @__PURE__ */ reactExports.createElement(Filler, {
    prefixCls,
    height: scrollHeight,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    scrollWidth,
    onInnerResize: collectHeight,
    ref: fillerInnerRef,
    innerProps,
    rtl: isRTL,
    extra: extraContent
  }, listChildren))), inVirtual && scrollHeight > height && /* @__PURE__ */ reactExports.createElement(ScrollBar, {
    ref: verticalScrollBarRef,
    prefixCls,
    scrollOffset: offsetTop,
    scrollRange: scrollHeight,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: verticalScrollBarSpinSize,
    containerSize: size.height,
    style: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBar,
    thumbStyle: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBarThumb
  }), inVirtual && scrollWidth && /* @__PURE__ */ reactExports.createElement(ScrollBar, {
    ref: horizontalScrollBarRef,
    prefixCls,
    scrollOffset: offsetLeft,
    scrollRange: scrollWidth,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: horizontalScrollBarSpinSize,
    containerSize: size.width,
    horizontal: true,
    style: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBar,
    thumbStyle: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBarThumb
  }));
}
var List = /* @__PURE__ */ reactExports.forwardRef(RawList);
List.displayName = "List";
var SelectContext = /* @__PURE__ */ reactExports.createContext(null);
function isPlatformMac() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var _excluded$8 = ["disabled", "title", "children", "style", "className"];
function isTitleType(content) {
  return typeof content === "string" || typeof content === "number";
}
var OptionList = function OptionList2(_, ref) {
  var _useBaseProps = useBaseProps(), prefixCls = _useBaseProps.prefixCls, id = _useBaseProps.id, open = _useBaseProps.open, multiple = _useBaseProps.multiple, mode = _useBaseProps.mode, searchValue = _useBaseProps.searchValue, toggleOpen = _useBaseProps.toggleOpen, notFoundContent = _useBaseProps.notFoundContent, onPopupScroll = _useBaseProps.onPopupScroll;
  var _React$useContext = reactExports.useContext(SelectContext), flattenOptions2 = _React$useContext.flattenOptions, onActiveValue = _React$useContext.onActiveValue, defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption, onSelect = _React$useContext.onSelect, menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon, rawValues = _React$useContext.rawValues, fieldNames = _React$useContext.fieldNames, virtual = _React$useContext.virtual, direction = _React$useContext.direction, listHeight = _React$useContext.listHeight, listItemHeight = _React$useContext.listItemHeight, optionRender = _React$useContext.optionRender;
  var itemPrefixCls = "".concat(prefixCls, "-item");
  var memoFlattenOptions = useMemo(function() {
    return flattenOptions2;
  }, [open, flattenOptions2], function(prev2, next2) {
    return next2[0] && prev2[1] !== next2[1];
  });
  var listRef = reactExports.useRef(null);
  var onListMouseDown = function onListMouseDown2(event) {
    event.preventDefault();
  };
  var scrollIntoView = function scrollIntoView2(args) {
    if (listRef.current) {
      listRef.current.scrollTo(typeof args === "number" ? {
        index: args
      } : args);
    }
  };
  var getEnabledActiveIndex = function getEnabledActiveIndex2(index2) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    var len = memoFlattenOptions.length;
    for (var i = 0; i < len; i += 1) {
      var current = (index2 + i * offset + len) % len;
      var _memoFlattenOptions$c = memoFlattenOptions[current], group = _memoFlattenOptions$c.group, data = _memoFlattenOptions$c.data;
      if (!group && !data.disabled) {
        return current;
      }
    }
    return -1;
  };
  var _React$useState = reactExports.useState(function() {
    return getEnabledActiveIndex(0);
  }), _React$useState2 = _slicedToArray(_React$useState, 2), activeIndex = _React$useState2[0], setActiveIndex = _React$useState2[1];
  var setActive = function setActive2(index2) {
    var fromKeyboard = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    setActiveIndex(index2);
    var info = {
      source: fromKeyboard ? "keyboard" : "mouse"
    };
    var flattenItem = memoFlattenOptions[index2];
    if (!flattenItem) {
      onActiveValue(null, -1, info);
      return;
    }
    onActiveValue(flattenItem.value, index2, info);
  };
  reactExports.useEffect(function() {
    setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
  }, [memoFlattenOptions.length, searchValue]);
  var isSelected = reactExports.useCallback(function(value) {
    return rawValues.has(value) && mode !== "combobox";
  }, [mode, _toConsumableArray(rawValues).toString(), rawValues.size]);
  reactExports.useEffect(function() {
    var timeoutId = setTimeout(function() {
      if (!multiple && open && rawValues.size === 1) {
        var value = Array.from(rawValues)[0];
        var index2 = memoFlattenOptions.findIndex(function(_ref) {
          var data = _ref.data;
          return data.value === value;
        });
        if (index2 !== -1) {
          setActive(index2);
          scrollIntoView(index2);
        }
      }
    });
    if (open) {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 || _listRef$current.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(timeoutId);
    };
  }, [open, searchValue]);
  var onSelectValue = function onSelectValue2(value) {
    if (value !== void 0) {
      onSelect(value, {
        selected: !rawValues.has(value)
      });
    }
    if (!multiple) {
      toggleOpen(false);
    }
  };
  reactExports.useImperativeHandle(ref, function() {
    return {
      onKeyDown: function onKeyDown(event) {
        var which = event.which, ctrlKey = event.ctrlKey;
        switch (which) {
          case KeyCode.N:
          case KeyCode.P:
          case KeyCode.UP:
          case KeyCode.DOWN: {
            var offset = 0;
            if (which === KeyCode.UP) {
              offset = -1;
            } else if (which === KeyCode.DOWN) {
              offset = 1;
            } else if (isPlatformMac() && ctrlKey) {
              if (which === KeyCode.N) {
                offset = 1;
              } else if (which === KeyCode.P) {
                offset = -1;
              }
            }
            if (offset !== 0) {
              var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
              scrollIntoView(nextActiveIndex);
              setActive(nextActiveIndex, true);
            }
            break;
          }
          case KeyCode.ENTER: {
            var item = memoFlattenOptions[activeIndex];
            if (item && !item.data.disabled) {
              onSelectValue(item.value);
            } else {
              onSelectValue(void 0);
            }
            if (open) {
              event.preventDefault();
            }
            break;
          }
          case KeyCode.ESC: {
            toggleOpen(false);
            if (open) {
              event.stopPropagation();
            }
          }
        }
      },
      onKeyUp: function onKeyUp() {
      },
      scrollTo: function scrollTo(index2) {
        scrollIntoView(index2);
      }
    };
  });
  if (memoFlattenOptions.length === 0) {
    return /* @__PURE__ */ reactExports.createElement("div", {
      role: "listbox",
      id: "".concat(id, "_list"),
      className: "".concat(itemPrefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }
  var omitFieldNameList = Object.keys(fieldNames).map(function(key) {
    return fieldNames[key];
  });
  var getLabel = function getLabel2(item) {
    return item.label;
  };
  function getItemAriaProps(item, index2) {
    var group = item.group;
    return {
      role: group ? "presentation" : "option",
      id: "".concat(id, "_list_").concat(index2)
    };
  }
  var renderItem = function renderItem2(index2) {
    var item = memoFlattenOptions[index2];
    if (!item)
      return null;
    var itemData = item.data || {};
    var value = itemData.value;
    var group = item.group;
    var attrs = pickAttrs(itemData, true);
    var mergedLabel = getLabel(item);
    return item ? /* @__PURE__ */ reactExports.createElement("div", _extends$1({
      "aria-label": typeof mergedLabel === "string" && !group ? mergedLabel : null
    }, attrs, {
      key: index2
    }, getItemAriaProps(item, index2), {
      "aria-selected": isSelected(value)
    }), value) : null;
  };
  var a11yProps = {
    role: "listbox",
    id: "".concat(id, "_list")
  };
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, virtual && /* @__PURE__ */ reactExports.createElement("div", _extends$1({}, a11yProps, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), /* @__PURE__ */ reactExports.createElement(List, {
    itemKey: "key",
    ref: listRef,
    data: memoFlattenOptions,
    height: listHeight,
    itemHeight: listItemHeight,
    fullHeight: false,
    onMouseDown: onListMouseDown,
    onScroll: onPopupScroll,
    virtual,
    direction,
    innerProps: virtual ? null : a11yProps
  }, function(item, itemIndex) {
    var _classNames;
    var group = item.group, groupOption = item.groupOption, data = item.data, label = item.label, value = item.value;
    var key = data.key;
    if (group) {
      var _data$title;
      var groupTitle = (_data$title = data.title) !== null && _data$title !== void 0 ? _data$title : isTitleType(label) ? label.toString() : void 0;
      return /* @__PURE__ */ reactExports.createElement("div", {
        className: classNames(itemPrefixCls, "".concat(itemPrefixCls, "-group")),
        title: groupTitle
      }, label !== void 0 ? label : key);
    }
    var disabled = data.disabled, title = data.title;
    data.children;
    var style2 = data.style, className = data.className, otherProps = _objectWithoutProperties(data, _excluded$8);
    var passedProps = omit(otherProps, omitFieldNameList);
    var selected = isSelected(value);
    var optionPrefixCls = "".concat(itemPrefixCls, "-option");
    var optionClassName = classNames(itemPrefixCls, optionPrefixCls, className, (_classNames = {}, _defineProperty(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), _defineProperty(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), _defineProperty(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), _defineProperty(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
    var mergedLabel = getLabel(item);
    var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === "function" || selected;
    var content = typeof mergedLabel === "number" ? mergedLabel : mergedLabel || value;
    var optionTitle = isTitleType(content) ? content.toString() : void 0;
    if (title !== void 0) {
      optionTitle = title;
    }
    return /* @__PURE__ */ reactExports.createElement("div", _extends$1({}, pickAttrs(passedProps), !virtual ? getItemAriaProps(item, itemIndex) : {}, {
      "aria-selected": selected,
      className: optionClassName,
      title: optionTitle,
      onMouseMove: function onMouseMove() {
        if (activeIndex === itemIndex || disabled) {
          return;
        }
        setActive(itemIndex);
      },
      onClick: function onClick() {
        if (!disabled) {
          onSelectValue(value);
        }
      },
      style: style2
    }), /* @__PURE__ */ reactExports.createElement("div", {
      className: "".concat(optionPrefixCls, "-content")
    }, typeof optionRender === "function" ? optionRender(item, {
      index: itemIndex
    }) : content), /* @__PURE__ */ reactExports.isValidElement(menuItemSelectedIcon) || selected, iconVisible && /* @__PURE__ */ reactExports.createElement(TransBtn, {
      className: "".concat(itemPrefixCls, "-option-state"),
      customizeIcon: menuItemSelectedIcon,
      customizeIconProps: {
        value,
        disabled,
        isSelected: selected
      }
    }, selected ? "✓" : null));
  }));
};
var RefOptionList = /* @__PURE__ */ reactExports.forwardRef(OptionList);
RefOptionList.displayName = "OptionList";
const useCache = function(labeledValues, valueOptions) {
  var cacheRef = reactExports.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  });
  var filledLabeledValues = reactExports.useMemo(function() {
    var _cacheRef$current = cacheRef.current, prevValueCache = _cacheRef$current.values, prevOptionCache = _cacheRef$current.options;
    var patchedValues = labeledValues.map(function(item) {
      if (item.label === void 0) {
        var _prevValueCache$get;
        return _objectSpread2(_objectSpread2({}, item), {}, {
          label: (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0 ? void 0 : _prevValueCache$get.label
        });
      }
      return item;
    });
    var valueCache = /* @__PURE__ */ new Map();
    var optionCache = /* @__PURE__ */ new Map();
    patchedValues.forEach(function(item) {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.current.values = valueCache;
    cacheRef.current.options = optionCache;
    return patchedValues;
  }, [labeledValues, valueOptions]);
  var getOption = reactExports.useCallback(function(val) {
    return valueOptions.get(val) || cacheRef.current.options.get(val);
  }, [valueOptions]);
  return [filledLabeledValues, getOption];
};
function includes(test, search) {
  return toArray$1(test).join("").toUpperCase().includes(search);
}
const useFilterOptions = function(options2, fieldNames, searchValue, filterOption, optionFilterProp) {
  return reactExports.useMemo(function() {
    if (!searchValue || filterOption === false) {
      return options2;
    }
    var fieldOptions = fieldNames.options, fieldLabel = fieldNames.label, fieldValue = fieldNames.value;
    var filteredOptions = [];
    var customizeFilter = typeof filterOption === "function";
    var upperSearch = searchValue.toUpperCase();
    var filterFunc = customizeFilter ? filterOption : function(_, option2) {
      if (optionFilterProp) {
        return includes(option2[optionFilterProp], upperSearch);
      }
      if (option2[fieldOptions]) {
        return includes(option2[fieldLabel !== "children" ? fieldLabel : "label"], upperSearch);
      }
      return includes(option2[fieldValue], upperSearch);
    };
    var wrapOption = customizeFilter ? function(opt) {
      return injectPropsWithOption(opt);
    } : function(opt) {
      return opt;
    };
    options2.forEach(function(item) {
      if (item[fieldOptions]) {
        var matchGroup = filterFunc(searchValue, wrapOption(item));
        if (matchGroup) {
          filteredOptions.push(item);
        } else {
          var subOptions = item[fieldOptions].filter(function(subItem) {
            return filterFunc(searchValue, wrapOption(subItem));
          });
          if (subOptions.length) {
            filteredOptions.push(_objectSpread2(_objectSpread2({}, item), {}, _defineProperty({}, fieldOptions, subOptions)));
          }
        }
        return;
      }
      if (filterFunc(searchValue, wrapOption(item))) {
        filteredOptions.push(item);
      }
    });
    return filteredOptions;
  }, [options2, filterOption, optionFilterProp, searchValue, fieldNames]);
};
var uuid = 0;
var isBrowserClient = canUseDom();
function getUUID() {
  var retId;
  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = "TEST_OR_SSR";
  }
  return retId;
}
function useId2(id) {
  var _React$useState = reactExports.useState(), _React$useState2 = _slicedToArray(_React$useState, 2), innerId = _React$useState2[0], setInnerId = _React$useState2[1];
  reactExports.useEffect(function() {
    setInnerId("rc_select_".concat(getUUID()));
  }, []);
  return id || innerId;
}
var _excluded$7 = ["children", "value"], _excluded2 = ["children"];
function convertNodeToOption(node2) {
  var _ref = node2, key = _ref.key, _ref$props = _ref.props, children = _ref$props.children, value = _ref$props.value, restProps = _objectWithoutProperties(_ref$props, _excluded$7);
  return _objectSpread2({
    key,
    value: value !== void 0 ? value : key,
    children
  }, restProps);
}
function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  return toArray$3(nodes).map(function(node2, index2) {
    if (!/* @__PURE__ */ reactExports.isValidElement(node2) || !node2.type) {
      return null;
    }
    var _ref2 = node2, isSelectOptGroup = _ref2.type.isSelectOptGroup, key = _ref2.key, _ref2$props = _ref2.props, children = _ref2$props.children, restProps = _objectWithoutProperties(_ref2$props, _excluded2);
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node2);
    }
    return _objectSpread2(_objectSpread2({
      key: "__RC_SELECT_GRP__".concat(key === null ? index2 : key, "__"),
      label: key
    }, restProps), {}, {
      options: convertChildrenToData(children)
    });
  }).filter(function(data) {
    return data;
  });
}
function useOptions(options2, children, fieldNames, optionFilterProp, optionLabelProp) {
  return reactExports.useMemo(function() {
    var mergedOptions = options2;
    var childrenAsData = !options2;
    if (childrenAsData) {
      mergedOptions = convertChildrenToData(children);
    }
    var valueOptions = /* @__PURE__ */ new Map();
    var labelOptions = /* @__PURE__ */ new Map();
    var setLabelOptions = function setLabelOptions2(labelOptionsMap, option2, key) {
      if (key && typeof key === "string") {
        labelOptionsMap.set(option2[key], option2);
      }
    };
    function dig(optionList) {
      var isChildren = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      for (var i = 0; i < optionList.length; i += 1) {
        var option2 = optionList[i];
        if (!option2[fieldNames.options] || isChildren) {
          valueOptions.set(option2[fieldNames.value], option2);
          setLabelOptions(labelOptions, option2, fieldNames.label);
          setLabelOptions(labelOptions, option2, optionFilterProp);
          setLabelOptions(labelOptions, option2, optionLabelProp);
        } else {
          dig(option2[fieldNames.options], true);
        }
      }
    }
    dig(mergedOptions);
    return {
      options: mergedOptions,
      valueOptions,
      labelOptions
    };
  }, [options2, children, fieldNames, optionFilterProp, optionLabelProp]);
}
function useRefFunc(callback) {
  var funcRef = reactExports.useRef();
  funcRef.current = callback;
  var cacheFn = reactExports.useCallback(function() {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}
var _excluded$6 = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "optionRender", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"];
var OMIT_DOM_PROPS = ["inputValue"];
function isRawValue(value) {
  return !value || _typeof(value) !== "object";
}
var Select$2 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var id = props.id, mode = props.mode, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-select" : _props$prefixCls, backfill = props.backfill, fieldNames = props.fieldNames, inputValue = props.inputValue, searchValue = props.searchValue, onSearch = props.onSearch, _props$autoClearSearc = props.autoClearSearchValue, autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc, onSelect = props.onSelect, onDeselect = props.onDeselect, _props$dropdownMatchS = props.dropdownMatchSelectWidth, dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS, filterOption = props.filterOption, filterSort = props.filterSort, optionFilterProp = props.optionFilterProp, optionLabelProp = props.optionLabelProp, options2 = props.options, optionRender = props.optionRender, children = props.children, defaultActiveFirstOption = props.defaultActiveFirstOption, menuItemSelectedIcon = props.menuItemSelectedIcon, virtual = props.virtual, direction = props.direction, _props$listHeight = props.listHeight, listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight, _props$listItemHeight = props.listItemHeight, listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight, value = props.value, defaultValue = props.defaultValue, labelInValue = props.labelInValue, onChange = props.onChange, restProps = _objectWithoutProperties(props, _excluded$6);
  var mergedId = useId2(id);
  var multiple = isMultiple(mode);
  var childrenAsData = !!(!options2 && children);
  var mergedFilterOption = reactExports.useMemo(function() {
    if (filterOption === void 0 && mode === "combobox") {
      return false;
    }
    return filterOption;
  }, [filterOption, mode]);
  var mergedFieldNames = reactExports.useMemo(
    function() {
      return fillFieldNames(fieldNames, childrenAsData);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(fieldNames),
      childrenAsData
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  );
  var _useMergedState = useMergedState("", {
    value: searchValue !== void 0 ? searchValue : inputValue,
    postState: function postState(search) {
      return search || "";
    }
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedSearchValue = _useMergedState2[0], setSearchValue = _useMergedState2[1];
  var parsedOptions = useOptions(options2, children, mergedFieldNames, optionFilterProp, optionLabelProp);
  var valueOptions = parsedOptions.valueOptions, labelOptions = parsedOptions.labelOptions, mergedOptions = parsedOptions.options;
  var convert2LabelValues = reactExports.useCallback(function(draftValues) {
    var valueList = toArray$1(draftValues);
    return valueList.map(function(val) {
      var rawValue;
      var rawLabel;
      var rawKey;
      var rawDisabled;
      var rawTitle;
      if (isRawValue(val)) {
        rawValue = val;
      } else {
        var _val$value;
        rawKey = val.key;
        rawLabel = val.label;
        rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
      }
      var option2 = valueOptions.get(rawValue);
      if (option2) {
        var _option$key;
        if (rawLabel === void 0)
          rawLabel = option2 === null || option2 === void 0 ? void 0 : option2[optionLabelProp || mergedFieldNames.label];
        if (rawKey === void 0)
          rawKey = (_option$key = option2 === null || option2 === void 0 ? void 0 : option2.key) !== null && _option$key !== void 0 ? _option$key : rawValue;
        rawDisabled = option2 === null || option2 === void 0 ? void 0 : option2.disabled;
        rawTitle = option2 === null || option2 === void 0 ? void 0 : option2.title;
      }
      return {
        label: rawLabel,
        value: rawValue,
        key: rawKey,
        disabled: rawDisabled,
        title: rawTitle
      };
    });
  }, [mergedFieldNames, optionLabelProp, valueOptions]);
  var _useMergedState3 = useMergedState(defaultValue, {
    value
  }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), internalValue = _useMergedState4[0], setInternalValue = _useMergedState4[1];
  var rawLabeledValues = reactExports.useMemo(function() {
    var _values$;
    var values = convert2LabelValues(internalValue);
    if (mode === "combobox" && isComboNoValue((_values$ = values[0]) === null || _values$ === void 0 ? void 0 : _values$.value)) {
      return [];
    }
    return values;
  }, [internalValue, convert2LabelValues, mode]);
  var _useCache = useCache(rawLabeledValues, valueOptions), _useCache2 = _slicedToArray(_useCache, 2), mergedValues = _useCache2[0], getMixedOption = _useCache2[1];
  var displayValues = reactExports.useMemo(function() {
    if (!mode && mergedValues.length === 1) {
      var firstValue = mergedValues[0];
      if (firstValue.value === null && (firstValue.label === null || firstValue.label === void 0)) {
        return [];
      }
    }
    return mergedValues.map(function(item) {
      var _item$label;
      return _objectSpread2(_objectSpread2({}, item), {}, {
        label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
      });
    });
  }, [mode, mergedValues]);
  var rawValues = reactExports.useMemo(function() {
    return new Set(mergedValues.map(function(val) {
      return val.value;
    }));
  }, [mergedValues]);
  reactExports.useEffect(function() {
    if (mode === "combobox") {
      var _mergedValues$;
      var strValue = (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
      setSearchValue(hasValue(strValue) ? String(strValue) : "");
    }
  }, [mergedValues]);
  var createTagOption = useRefFunc(function(val, label) {
    var _ref;
    var mergedLabel = label !== null && label !== void 0 ? label : val;
    return _ref = {}, _defineProperty(_ref, mergedFieldNames.value, val), _defineProperty(_ref, mergedFieldNames.label, mergedLabel), _ref;
  });
  var filledTagOptions = reactExports.useMemo(function() {
    if (mode !== "tags") {
      return mergedOptions;
    }
    var cloneOptions = _toConsumableArray(mergedOptions);
    var existOptions = function existOptions2(val) {
      return valueOptions.has(val);
    };
    _toConsumableArray(mergedValues).sort(function(a, b2) {
      return a.value < b2.value ? -1 : 1;
    }).forEach(function(item) {
      var val = item.value;
      if (!existOptions(val)) {
        cloneOptions.push(createTagOption(val, item.label));
      }
    });
    return cloneOptions;
  }, [createTagOption, mergedOptions, valueOptions, mergedValues, mode]);
  var filteredOptions = useFilterOptions(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, optionFilterProp);
  var filledSearchOptions = reactExports.useMemo(function() {
    if (mode !== "tags" || !mergedSearchValue || filteredOptions.some(function(item) {
      return item[optionFilterProp || "value"] === mergedSearchValue;
    })) {
      return filteredOptions;
    }
    if (filteredOptions.some(function(item) {
      return item[mergedFieldNames.value] === mergedSearchValue;
    })) {
      return filteredOptions;
    }
    return [createTagOption(mergedSearchValue)].concat(_toConsumableArray(filteredOptions));
  }, [createTagOption, optionFilterProp, mode, filteredOptions, mergedSearchValue, mergedFieldNames]);
  var orderedFilteredOptions = reactExports.useMemo(function() {
    if (!filterSort) {
      return filledSearchOptions;
    }
    return _toConsumableArray(filledSearchOptions).sort(function(a, b2) {
      return filterSort(a, b2);
    });
  }, [filledSearchOptions, filterSort]);
  var displayOptions = reactExports.useMemo(function() {
    return flattenOptions(orderedFilteredOptions, {
      fieldNames: mergedFieldNames,
      childrenAsData
    });
  }, [orderedFilteredOptions, mergedFieldNames, childrenAsData]);
  var triggerChange = function triggerChange2(values) {
    var labeledValues = convert2LabelValues(values);
    setInternalValue(labeledValues);
    if (onChange && // Trigger event only when value changed
    (labeledValues.length !== mergedValues.length || labeledValues.some(function(newVal, index2) {
      var _mergedValues$index;
      return ((_mergedValues$index = mergedValues[index2]) === null || _mergedValues$index === void 0 ? void 0 : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
    }))) {
      var returnValues = labelInValue ? labeledValues : labeledValues.map(function(v2) {
        return v2.value;
      });
      var returnOptions = labeledValues.map(function(v2) {
        return injectPropsWithOption(getMixedOption(v2.value));
      });
      onChange(
        // Value
        multiple ? returnValues : returnValues[0],
        // Option
        multiple ? returnOptions : returnOptions[0]
      );
    }
  };
  var _React$useState = reactExports.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), activeValue = _React$useState2[0], setActiveValue = _React$useState2[1];
  var _React$useState3 = reactExports.useState(0), _React$useState4 = _slicedToArray(_React$useState3, 2), accessibilityIndex = _React$useState4[0], setAccessibilityIndex = _React$useState4[1];
  var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== void 0 ? defaultActiveFirstOption : mode !== "combobox";
  var onActiveValue = reactExports.useCallback(function(active, index2) {
    var _ref2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref2$source = _ref2.source, source = _ref2$source === void 0 ? "keyboard" : _ref2$source;
    setAccessibilityIndex(index2);
    if (backfill && mode === "combobox" && active !== null && source === "keyboard") {
      setActiveValue(String(active));
    }
  }, [backfill, mode]);
  var triggerSelect = function triggerSelect2(val, selected, type4) {
    var getSelectEnt = function getSelectEnt2() {
      var _option$key2;
      var option2 = getMixedOption(val);
      return [labelInValue ? {
        label: option2 === null || option2 === void 0 ? void 0 : option2[mergedFieldNames.label],
        value: val,
        key: (_option$key2 = option2 === null || option2 === void 0 ? void 0 : option2.key) !== null && _option$key2 !== void 0 ? _option$key2 : val
      } : val, injectPropsWithOption(option2)];
    };
    if (selected && onSelect) {
      var _getSelectEnt = getSelectEnt(), _getSelectEnt2 = _slicedToArray(_getSelectEnt, 2), wrappedValue = _getSelectEnt2[0], _option = _getSelectEnt2[1];
      onSelect(wrappedValue, _option);
    } else if (!selected && onDeselect && type4 !== "clear") {
      var _getSelectEnt3 = getSelectEnt(), _getSelectEnt4 = _slicedToArray(_getSelectEnt3, 2), _wrappedValue = _getSelectEnt4[0], _option2 = _getSelectEnt4[1];
      onDeselect(_wrappedValue, _option2);
    }
  };
  var onInternalSelect = useRefFunc(function(val, info) {
    var cloneValues;
    var mergedSelect = multiple ? info.selected : true;
    if (mergedSelect) {
      cloneValues = multiple ? [].concat(_toConsumableArray(mergedValues), [val]) : [val];
    } else {
      cloneValues = mergedValues.filter(function(v2) {
        return v2.value !== val;
      });
    }
    triggerChange(cloneValues);
    triggerSelect(val, mergedSelect);
    if (mode === "combobox") {
      setActiveValue("");
    } else if (!isMultiple || autoClearSearchValue) {
      setSearchValue("");
      setActiveValue("");
    }
  });
  var onDisplayValuesChange = function onDisplayValuesChange2(nextValues, info) {
    triggerChange(nextValues);
    var type4 = info.type, values = info.values;
    if (type4 === "remove" || type4 === "clear") {
      values.forEach(function(item) {
        triggerSelect(item.value, false, type4);
      });
    }
  };
  var onInternalSearch = function onInternalSearch2(searchText, info) {
    setSearchValue(searchText);
    setActiveValue(null);
    if (info.source === "submit") {
      var formatted = (searchText || "").trim();
      if (formatted) {
        var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues), [formatted])));
        triggerChange(newRawValues);
        triggerSelect(formatted, true);
        setSearchValue("");
      }
      return;
    }
    if (info.source !== "blur") {
      if (mode === "combobox") {
        triggerChange(searchText);
      }
      onSearch === null || onSearch === void 0 || onSearch(searchText);
    }
  };
  var onInternalSearchSplit = function onInternalSearchSplit2(words2) {
    var patchValues = words2;
    if (mode !== "tags") {
      patchValues = words2.map(function(word) {
        var opt = labelOptions.get(word);
        return opt === null || opt === void 0 ? void 0 : opt.value;
      }).filter(function(val) {
        return val !== void 0;
      });
    }
    var newRawValues = Array.from(new Set([].concat(_toConsumableArray(rawValues), _toConsumableArray(patchValues))));
    triggerChange(newRawValues);
    newRawValues.forEach(function(newRawValue) {
      triggerSelect(newRawValue, true);
    });
  };
  var selectContext = reactExports.useMemo(function() {
    var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
    return _objectSpread2(_objectSpread2({}, parsedOptions), {}, {
      flattenOptions: displayOptions,
      onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon,
      rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      direction,
      listHeight,
      listItemHeight,
      childrenAsData,
      optionRender
    });
  }, [parsedOptions, displayOptions, onActiveValue, mergedDefaultActiveFirstOption, onInternalSelect, menuItemSelectedIcon, rawValues, mergedFieldNames, virtual, dropdownMatchSelectWidth, listHeight, listItemHeight, childrenAsData, optionRender]);
  return /* @__PURE__ */ reactExports.createElement(SelectContext.Provider, {
    value: selectContext
  }, /* @__PURE__ */ reactExports.createElement(BaseSelect, _extends$1({}, restProps, {
    // >>> MISC
    id: mergedId,
    prefixCls,
    ref,
    omitDomProps: OMIT_DOM_PROPS,
    mode,
    displayValues,
    onDisplayValuesChange,
    direction,
    searchValue: mergedSearchValue,
    onSearch: onInternalSearch,
    autoClearSearchValue,
    onSearchSplit: onInternalSearchSplit,
    dropdownMatchSelectWidth,
    OptionList: RefOptionList,
    emptyOptions: !displayOptions.length,
    activeValue,
    activeDescendantId: "".concat(mergedId, "_list_").concat(accessibilityIndex)
  })));
});
var TypedSelect = Select$2;
TypedSelect.Option = Option;
TypedSelect.OptGroup = OptGroup;
function getStatusClassNames(prefixCls, status, hasFeedback) {
  return classNames({
    [`${prefixCls}-status-success`]: status === "success",
    [`${prefixCls}-status-warning`]: status === "warning",
    [`${prefixCls}-status-error`]: status === "error",
    [`${prefixCls}-status-validating`]: status === "validating",
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
}
const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;
const Empty$2 = () => {
  const [, token2] = useToken();
  const bgColor = new TinyColor(token2.colorBgBase);
  const themeStyle = bgColor.toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /* @__PURE__ */ reactExports.createElement("svg", {
    style: themeStyle,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ reactExports.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ reactExports.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ reactExports.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /* @__PURE__ */ reactExports.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /* @__PURE__ */ reactExports.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
const DefaultEmptyImg = Empty$2;
const Simple = () => {
  const [, token2] = useToken();
  const {
    colorFill,
    colorFillTertiary,
    colorFillQuaternary,
    colorBgContainer
  } = token2;
  const {
    borderColor,
    shadowColor,
    contentColor
  } = reactExports.useMemo(() => ({
    borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexShortString(),
    shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexShortString(),
    contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexShortString()
  }), [colorFill, colorFillTertiary, colorFillQuaternary, colorBgContainer]);
  return /* @__PURE__ */ reactExports.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ reactExports.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ reactExports.createElement("ellipse", {
    fill: shadowColor,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ reactExports.createElement("g", {
    fillRule: "nonzero",
    stroke: borderColor
  }, /* @__PURE__ */ reactExports.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ reactExports.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: contentColor
  }))));
};
const SimpleEmptyImg = Simple;
const genSharedEmptyStyle = (token2) => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token2;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-image`]: {
        height: token2.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token2.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          maxWidth: "100%",
          height: "100%",
          margin: "auto"
        }
      },
      [`${componentCls}-description`]: {
        color: token2.colorText
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-footer`]: {
        marginTop: margin
      },
      "&-normal": {
        marginBlock: marginXL,
        color: token2.colorTextDisabled,
        [`${componentCls}-description`]: {
          color: token2.colorTextDisabled
        },
        [`${componentCls}-image`]: {
          height: token2.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: marginXS,
        color: token2.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token2.emptyImgHeightSM
        }
      }
    }
  };
};
const useStyle$1 = genStyleHooks("Empty", (token2) => {
  const {
    componentCls,
    controlHeightLG,
    calc
  } = token2;
  const emptyToken = merge(token2, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: calc(controlHeightLG).mul(2.5).equal(),
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: calc(controlHeightLG).mul(0.875).equal()
  });
  return [genSharedEmptyStyle(emptyToken)];
});
var __rest$5 = function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
const defaultEmptyImg = /* @__PURE__ */ reactExports.createElement(DefaultEmptyImg, null);
const simpleEmptyImg = /* @__PURE__ */ reactExports.createElement(SimpleEmptyImg, null);
const Empty = (_a) => {
  var {
    className,
    rootClassName,
    prefixCls: customizePrefixCls,
    image = defaultEmptyImg,
    description: description2,
    children,
    imageStyle,
    style: style2
  } = _a, restProps = __rest$5(_a, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style"]);
  const {
    getPrefixCls,
    direction,
    empty
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("empty", customizePrefixCls);
  const [wrapCSSVar, hashId] = useStyle$1(prefixCls);
  const [locale2] = useLocale$1("Empty");
  const des = typeof description2 !== "undefined" ? description2 : locale2 === null || locale2 === void 0 ? void 0 : locale2.description;
  const alt = typeof des === "string" ? des : "empty";
  let imageNode = null;
  if (typeof image === "string") {
    imageNode = /* @__PURE__ */ reactExports.createElement("img", {
      alt,
      src: image
    });
  } else {
    imageNode = image;
  }
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("div", Object.assign({
    className: classNames(hashId, prefixCls, empty === null || empty === void 0 ? void 0 : empty.className, {
      [`${prefixCls}-normal`]: image === simpleEmptyImg,
      [`${prefixCls}-rtl`]: direction === "rtl"
    }, className, rootClassName),
    style: Object.assign(Object.assign({}, empty === null || empty === void 0 ? void 0 : empty.style), style2)
  }, restProps), /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-image`,
    style: imageStyle
  }, imageNode), des && /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-description`
  }, des), children && /* @__PURE__ */ reactExports.createElement("div", {
    className: `${prefixCls}-footer`
  }, children)));
};
Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
const Empty$1 = Empty;
const DefaultRenderEmpty = (props) => {
  const {
    componentName
  } = props;
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const prefix = getPrefixCls("empty");
  switch (componentName) {
    case "Table":
    case "List":
      return /* @__PURE__ */ React.createElement(Empty$1, {
        image: Empty$1.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ React.createElement(Empty$1, {
        image: Empty$1.PRESENTED_IMAGE_SIMPLE,
        className: `${prefix}-small`
      });
    default:
      return /* @__PURE__ */ React.createElement(Empty$1, null);
  }
};
const DefaultRenderEmpty$1 = DefaultRenderEmpty;
const genItemStyle = (token2) => {
  const {
    optionHeight,
    optionFontSize,
    optionLineHeight,
    optionPadding
  } = token2;
  return {
    position: "relative",
    display: "block",
    minHeight: optionHeight,
    padding: optionPadding,
    color: token2.colorText,
    fontWeight: "normal",
    fontSize: optionFontSize,
    lineHeight: optionLineHeight,
    boxSizing: "border-box"
  };
};
const genSingleStyle$1 = (token2) => {
  const {
    antCls,
    componentCls
  } = token2;
  const selectItemCls = `${componentCls}-item`;
  const slideUpEnterActive = `&${antCls}-slide-up-enter${antCls}-slide-up-enter-active`;
  const slideUpAppearActive = `&${antCls}-slide-up-appear${antCls}-slide-up-appear-active`;
  const slideUpLeaveActive = `&${antCls}-slide-up-leave${antCls}-slide-up-leave-active`;
  const dropdownPlacementCls = `${componentCls}-dropdown-placement-`;
  return [
    {
      [`${componentCls}-dropdown`]: Object.assign(Object.assign({}, resetComponent(token2)), {
        position: "absolute",
        top: -9999,
        zIndex: token2.zIndexPopup,
        boxSizing: "border-box",
        padding: token2.paddingXXS,
        overflow: "hidden",
        fontSize: token2.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: token2.colorBgElevated,
        borderRadius: token2.borderRadiusLG,
        outline: "none",
        boxShadow: token2.boxShadowSecondary,
        [`
          ${slideUpEnterActive}${dropdownPlacementCls}bottomLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}bottomLeft
        `]: {
          animationName: slideUpIn
        },
        [`
          ${slideUpEnterActive}${dropdownPlacementCls}topLeft,
          ${slideUpAppearActive}${dropdownPlacementCls}topLeft,
          ${slideUpEnterActive}${dropdownPlacementCls}topRight,
          ${slideUpAppearActive}${dropdownPlacementCls}topRight
        `]: {
          animationName: slideDownIn
        },
        [`${slideUpLeaveActive}${dropdownPlacementCls}bottomLeft`]: {
          animationName: slideUpOut
        },
        [`
          ${slideUpLeaveActive}${dropdownPlacementCls}topLeft,
          ${slideUpLeaveActive}${dropdownPlacementCls}topRight
        `]: {
          animationName: slideDownOut
        },
        "&-hidden": {
          display: "none"
        },
        [`${selectItemCls}`]: Object.assign(Object.assign({}, genItemStyle(token2)), {
          cursor: "pointer",
          transition: `background ${token2.motionDurationSlow} ease`,
          borderRadius: token2.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: token2.colorTextDescription,
            fontSize: token2.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": Object.assign({
              flex: "auto"
            }, textEllipsis),
            "&-state": {
              flex: "none",
              display: "flex",
              alignItems: "center"
            },
            [`&-active:not(${selectItemCls}-option-disabled)`]: {
              backgroundColor: token2.optionActiveBg
            },
            [`&-selected:not(${selectItemCls}-option-disabled)`]: {
              color: token2.optionSelectedColor,
              fontWeight: token2.optionSelectedFontWeight,
              backgroundColor: token2.optionSelectedBg,
              [`${selectItemCls}-option-state`]: {
                color: token2.colorPrimary
              }
            },
            "&-disabled": {
              [`&${selectItemCls}-option-selected`]: {
                backgroundColor: token2.colorBgContainerDisabled
              },
              color: token2.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: token2.calc(token2.controlPaddingHorizontal).mul(2).equal()
            }
          }
        }),
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    initSlideMotion(token2, "slide-up"),
    initSlideMotion(token2, "slide-down"),
    initMoveMotion(token2, "move-up"),
    initMoveMotion(token2, "move-down")
  ];
};
const genDropdownStyle = genSingleStyle$1;
const FIXED_ITEM_MARGIN = 2;
const getSelectItemStyle = (token2) => {
  const {
    multipleSelectItemHeight,
    selectHeight,
    lineWidth
  } = token2;
  const selectItemDist = token2.calc(selectHeight).sub(multipleSelectItemHeight).div(2).sub(lineWidth).equal();
  return selectItemDist;
};
function genSizeStyle$1(token2, suffix) {
  const {
    componentCls,
    iconCls
  } = token2;
  const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
  const selectItemHeight = token2.multipleSelectItemHeight;
  const selectItemDist = getSelectItemStyle(token2);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : "";
  return {
    [`${componentCls}-multiple${suffixCls}`]: {
      fontSize: token2.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [selectOverflowPrefixCls]: {
        position: "relative",
        display: "flex",
        flex: "auto",
        flexWrap: "wrap",
        maxWidth: "100%",
        "&-item": {
          flex: "none",
          alignSelf: "center",
          maxWidth: "100%",
          display: "inline-flex"
        }
      },
      // ========================= Selector =========================
      [`${componentCls}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        height: "100%",
        // Multiple is little different that horizontal is follow the vertical
        padding: `${unit$1(token2.calc(selectItemDist).sub(FIXED_ITEM_MARGIN).equal())} ${unit$1(token2.calc(FIXED_ITEM_MARGIN).mul(2).equal())}`,
        borderRadius: token2.borderRadius,
        [`${componentCls}-show-search&`]: {
          cursor: "text"
        },
        [`${componentCls}-disabled&`]: {
          background: token2.multipleSelectorBgDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${unit$1(FIXED_ITEM_MARGIN)} 0`,
          lineHeight: unit$1(selectItemHeight),
          visibility: "hidden",
          content: '"\\a0"'
        }
      },
      [`
        &${componentCls}-show-arrow ${componentCls}-selector,
        &${componentCls}-allow-clear ${componentCls}-selector
      `]: {
        paddingInlineEnd: token2.calc(token2.fontSizeIcon).add(token2.controlPaddingHorizontal).equal()
      },
      // ======================== Selections ========================
      [`${componentCls}-selection-item`]: {
        display: "flex",
        alignSelf: "center",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: selectItemHeight,
        marginTop: FIXED_ITEM_MARGIN,
        marginBottom: FIXED_ITEM_MARGIN,
        lineHeight: unit$1(token2.calc(selectItemHeight).sub(token2.calc(token2.lineWidth).mul(2)).equal()),
        background: token2.multipleItemBg,
        border: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.multipleItemBorderColor}`,
        borderRadius: token2.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${token2.motionDurationSlow}, line-height ${token2.motionDurationSlow}, height ${token2.motionDurationSlow}`,
        marginInlineEnd: token2.calc(FIXED_ITEM_MARGIN).mul(2).equal(),
        paddingInlineStart: token2.paddingXS,
        paddingInlineEnd: token2.calc(token2.paddingXS).div(2).equal(),
        [`${componentCls}-disabled&`]: {
          color: token2.multipleItemColorDisabled,
          borderColor: token2.multipleItemBorderColorDisabled,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: token2.calc(token2.paddingXS).div(2).equal(),
          overflow: "hidden",
          whiteSpace: "pre",
          // fix whitespace wrapping. custom tags display all whitespace within.
          textOverflow: "ellipsis"
        },
        "&-remove": Object.assign(Object.assign({}, resetIcon()), {
          display: "inline-flex",
          alignItems: "center",
          color: token2.colorIcon,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${iconCls}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: token2.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [`${selectOverflowPrefixCls}-item + ${selectOverflowPrefixCls}-item`]: {
        [`${componentCls}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      // https://github.com/ant-design/ant-design/issues/44754
      [`${selectOverflowPrefixCls}-item-suffix`]: {
        height: "100%"
      },
      [`${componentCls}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: token2.calc(token2.inputPaddingHorizontalBase).sub(selectItemDist).equal(),
        [`
          &-input,
          &-mirror
        `]: {
          height: selectItemHeight,
          fontFamily: token2.fontFamily,
          lineHeight: unit$1(selectItemHeight),
          transition: `all ${token2.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          // fix whitespace wrapping caused width calculation bug
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: token2.inputPaddingHorizontalBase,
        insetInlineEnd: token2.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${token2.motionDurationSlow}`
      }
    }
  };
}
const genMultipleStyle = (token2) => {
  const {
    componentCls
  } = token2;
  const smallToken = merge(token2, {
    selectHeight: token2.controlHeightSM,
    multipleSelectItemHeight: token2.controlHeightXS,
    borderRadius: token2.borderRadiusSM,
    borderRadiusSM: token2.borderRadiusXS
  });
  const largeToken = merge(token2, {
    fontSize: token2.fontSizeLG,
    selectHeight: token2.controlHeightLG,
    multipleSelectItemHeight: token2.multipleItemHeightLG,
    borderRadius: token2.borderRadiusLG,
    borderRadiusSM: token2.borderRadius
  });
  return [
    genSizeStyle$1(token2),
    // ======================== Small ========================
    genSizeStyle$1(smallToken, "sm"),
    // Padding
    {
      [`${componentCls}-multiple${componentCls}-sm`]: {
        [`${componentCls}-selection-placeholder`]: {
          insetInline: token2.calc(token2.controlPaddingHorizontalSM).sub(token2.lineWidth).equal()
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${componentCls}-selection-search`]: {
          marginInlineStart: 2
          // Magic Number
        }
      }
    },
    // ======================== Large ========================
    genSizeStyle$1(largeToken, "lg")
  ];
};
const genMultipleStyle$1 = genMultipleStyle;
function genSizeStyle(token2, suffix) {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    borderRadius
  } = token2;
  const selectHeightWithoutBorder = token2.calc(token2.controlHeight).sub(token2.calc(token2.lineWidth).mul(2)).equal();
  const suffixCls = suffix ? `${componentCls}-${suffix}` : "";
  return {
    [`${componentCls}-single${suffixCls}`]: {
      fontSize: token2.fontSize,
      height: token2.controlHeight,
      // ========================= Selector =========================
      [`${componentCls}-selector`]: Object.assign(Object.assign({}, resetComponent(token2, true)), {
        display: "flex",
        borderRadius,
        [`${componentCls}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: inputPaddingHorizontalBase,
          insetInlineEnd: inputPaddingHorizontalBase,
          bottom: 0,
          "&-input": {
            width: "100%",
            WebkitAppearance: "textfield"
          }
        },
        [`
          ${componentCls}-selection-item,
          ${componentCls}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: unit$1(selectHeightWithoutBorder),
          transition: `all ${token2.motionDurationSlow}, visibility 0s`,
          alignSelf: "center"
        },
        [`${componentCls}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${componentCls}-selection-item:empty:after`,
          /* For undefined value baseline align */
          `${componentCls}-selection-placeholder:empty:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${componentCls}-show-arrow ${componentCls}-selection-item,
        &${componentCls}-show-arrow ${componentCls}-selection-placeholder
      `]: {
        paddingInlineEnd: token2.showArrowPaddingInlineEnd
      },
      // Opacity selection if open
      [`&${componentCls}-open ${componentCls}-selection-item`]: {
        color: token2.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${componentCls}-customize-input)`]: {
        [`${componentCls}-selector`]: {
          width: "100%",
          height: "100%",
          padding: `0 ${unit$1(inputPaddingHorizontalBase)}`,
          [`${componentCls}-selection-search-input`]: {
            height: selectHeightWithoutBorder
          },
          "&:after": {
            lineHeight: unit$1(selectHeightWithoutBorder)
          }
        }
      },
      [`&${componentCls}-customize-input`]: {
        [`${componentCls}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${componentCls}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${componentCls}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${unit$1(inputPaddingHorizontalBase)}`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function genSingleStyle(token2) {
  const {
    componentCls
  } = token2;
  const inputPaddingHorizontalSM = token2.calc(token2.controlPaddingHorizontalSM).sub(token2.lineWidth).equal();
  return [
    genSizeStyle(token2),
    // ======================== Small ========================
    // Shared
    genSizeStyle(merge(token2, {
      controlHeight: token2.controlHeightSM,
      borderRadius: token2.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${componentCls}-single${componentCls}-sm`]: {
        [`&:not(${componentCls}-customize-input)`]: {
          [`${componentCls}-selection-search`]: {
            insetInlineStart: inputPaddingHorizontalSM,
            insetInlineEnd: inputPaddingHorizontalSM
          },
          [`${componentCls}-selector`]: {
            padding: `0 ${unit$1(inputPaddingHorizontalSM)}`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${componentCls}-show-arrow ${componentCls}-selection-search`]: {
            insetInlineEnd: token2.calc(inputPaddingHorizontalSM).add(token2.calc(token2.fontSize).mul(1.5)).equal()
          },
          [`
            &${componentCls}-show-arrow ${componentCls}-selection-item,
            &${componentCls}-show-arrow ${componentCls}-selection-placeholder
          `]: {
            paddingInlineEnd: token2.calc(token2.fontSize).mul(1.5).equal()
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    genSizeStyle(merge(token2, {
      controlHeight: token2.singleItemHeightLG,
      fontSize: token2.fontSizeLG,
      borderRadius: token2.borderRadiusLG
    }), "lg")
  ];
}
const genSelectorStyle = (token2) => {
  const {
    componentCls,
    selectorBg
  } = token2;
  return {
    position: "relative",
    backgroundColor: selectorBg,
    border: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorBorder}`,
    transition: `all ${token2.motionDurationMid} ${token2.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${componentCls}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit",
        height: "100%"
      }
    },
    [`${componentCls}-disabled&`]: {
      color: token2.colorTextDisabled,
      background: token2.colorBgContainerDisabled,
      cursor: "not-allowed",
      [`${componentCls}-multiple&`]: {
        background: token2.multipleSelectorBgDisabled
      },
      input: {
        cursor: "not-allowed"
      }
    }
  };
};
const genStatusStyle$1 = function(rootSelectCls, token2) {
  let overwriteDefaultBorder = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  const {
    componentCls,
    borderHoverColor,
    antCls,
    borderActiveColor,
    outlineColor,
    controlOutlineWidth
  } = token2;
  const overwriteStyle = overwriteDefaultBorder ? {
    [`${componentCls}-selector`]: {
      borderColor: borderActiveColor
    }
  } : {};
  return {
    [rootSelectCls]: {
      [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: Object.assign(Object.assign({}, overwriteStyle), {
        [`&:hover ${componentCls}-selector`]: {
          borderColor: borderHoverColor
        },
        [`${componentCls}-focused& ${componentCls}-selector`]: {
          borderColor: borderActiveColor,
          boxShadow: `0 0 0 ${unit$1(controlOutlineWidth)} ${outlineColor}`,
          outline: 0
        }
      })
    }
  };
};
const getSearchInputWithoutBorderStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [`${componentCls}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      fontFamily: "inherit",
      "&::-webkit-search-cancel-button": {
        display: "none",
        "-webkit-appearance": "none"
      }
    }
  };
};
const genBaseStyle = (token2) => {
  const {
    antCls,
    componentCls,
    inputPaddingHorizontalBase,
    iconCls
  } = token2;
  return {
    [componentCls]: Object.assign(Object.assign({}, resetComponent(token2)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: Object.assign(Object.assign({}, genSelectorStyle(token2)), getSearchInputWithoutBorderStyle(token2)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${componentCls}-selection-item`]: Object.assign(Object.assign({
        flex: 1,
        fontWeight: "normal",
        position: "relative",
        userSelect: "none"
      }, textEllipsis), {
        // https://github.com/ant-design/ant-design/issues/40421
        [`> ${antCls}-typography`]: {
          display: "inline"
        }
      }),
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: Object.assign(Object.assign({}, textEllipsis), {
        flex: 1,
        color: token2.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${componentCls}-arrow`]: Object.assign(Object.assign({}, resetIcon()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: inputPaddingHorizontalBase,
        height: token2.fontSizeIcon,
        marginTop: token2.calc(token2.fontSizeIcon).mul(-1).div(2).equal(),
        color: token2.colorTextQuaternary,
        fontSize: token2.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        [iconCls]: {
          verticalAlign: "top",
          transition: `transform ${token2.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${componentCls}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${componentCls}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Clear ==========================
      [`${componentCls}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: "inline-block",
        width: token2.fontSizeIcon,
        height: token2.fontSizeIcon,
        marginTop: token2.calc(token2.fontSizeIcon).mul(-1).div(2).equal(),
        color: token2.colorTextQuaternary,
        fontSize: token2.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        background: token2.clearBg,
        cursor: "pointer",
        opacity: 0,
        transition: `color ${token2.motionDurationMid} ease, opacity ${token2.motionDurationSlow} ease`,
        textRendering: "auto",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: token2.colorTextTertiary
        }
      },
      "&:hover": {
        [`${componentCls}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${componentCls}-has-feedback`]: {
      [`${componentCls}-clear`]: {
        insetInlineEnd: token2.calc(inputPaddingHorizontalBase).add(token2.fontSize).add(token2.paddingXS).equal()
      }
    }
  };
};
const genSelectStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return [
    {
      [componentCls]: {
        // ==================== BorderLess ====================
        [`&-borderless ${componentCls}-selector`]: {
          backgroundColor: `transparent !important`,
          borderColor: `transparent !important`,
          boxShadow: `none !important`
        },
        // ==================== In Form ====================
        [`&${componentCls}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    genBaseStyle(token2),
    // Single
    genSingleStyle(token2),
    // Multiple
    genMultipleStyle$1(token2),
    // Dropdown
    genDropdownStyle(token2),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${componentCls}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==                     Status                      ==
    // =====================================================
    genStatusStyle$1(componentCls, merge(token2, {
      borderHoverColor: token2.colorPrimaryHover,
      borderActiveColor: token2.colorPrimary,
      outlineColor: token2.controlOutline
    })),
    genStatusStyle$1(`${componentCls}-status-error`, merge(token2, {
      borderHoverColor: token2.colorErrorHover,
      borderActiveColor: token2.colorError,
      outlineColor: token2.colorErrorOutline
    }), true),
    genStatusStyle$1(`${componentCls}-status-warning`, merge(token2, {
      borderHoverColor: token2.colorWarningHover,
      borderActiveColor: token2.colorWarning,
      outlineColor: token2.colorWarningOutline
    }), true),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(token2, {
      borderElCls: `${componentCls}-selector`,
      focusElCls: `${componentCls}-focused`
    })
  ];
};
const prepareComponentToken = (token2) => {
  const {
    fontSize,
    lineHeight,
    controlHeight,
    controlPaddingHorizontal,
    zIndexPopupBase,
    colorText,
    fontWeightStrong,
    controlItemBgActive,
    controlItemBgHover,
    colorBgContainer,
    colorFillSecondary,
    controlHeightLG,
    controlHeightSM,
    colorBgContainerDisabled,
    colorTextDisabled
  } = token2;
  return {
    zIndexPopup: zIndexPopupBase + 50,
    optionSelectedColor: colorText,
    optionSelectedFontWeight: fontWeightStrong,
    optionSelectedBg: controlItemBgActive,
    optionActiveBg: controlItemBgHover,
    optionPadding: `${(controlHeight - fontSize * lineHeight) / 2}px ${controlPaddingHorizontal}px`,
    optionFontSize: fontSize,
    optionLineHeight: lineHeight,
    optionHeight: controlHeight,
    selectorBg: colorBgContainer,
    clearBg: colorBgContainer,
    singleItemHeightLG: controlHeightLG,
    multipleItemBg: colorFillSecondary,
    multipleItemBorderColor: "transparent",
    multipleItemHeight: controlHeightSM,
    multipleItemHeightLG: controlHeight,
    multipleSelectorBgDisabled: colorBgContainerDisabled,
    multipleItemColorDisabled: colorTextDisabled,
    multipleItemBorderColorDisabled: "transparent",
    showArrowPaddingInlineEnd: Math.ceil(token2.fontSize * 1.25)
  };
};
const useSelectStyle = genStyleHooks("Select", (token2, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const selectToken = merge(token2, {
    rootPrefixCls,
    inputPaddingHorizontalBase: token2.calc(token2.paddingSM).sub(1).equal(),
    multipleSelectItemHeight: token2.multipleItemHeight,
    selectHeight: token2.controlHeight
  });
  return [genSelectStyle(selectToken)];
}, prepareComponentToken, {
  unitless: {
    optionLineHeight: true,
    optionSelectedFontWeight: true
  }
});
const getBuiltInPlacements2 = (popupOverflow) => {
  const htmlRegion = popupOverflow === "scroll" ? "scroll" : "visible";
  const sharedConfig = {
    overflow: {
      adjustX: true,
      adjustY: true,
      shiftY: true
    },
    htmlRegion,
    dynamicInset: true
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, sharedConfig), {
      points: ["tl", "bl"],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, sharedConfig), {
      points: ["tr", "br"],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, sharedConfig), {
      points: ["bl", "tl"],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, sharedConfig), {
      points: ["br", "tr"],
      offset: [0, -4]
    })
  };
};
function useBuiltinPlacements(buildInPlacements, popupOverflow) {
  return buildInPlacements || getBuiltInPlacements2(popupOverflow);
}
var CheckOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
const CheckOutlinedSvg = CheckOutlined$2;
var CheckOutlined = function CheckOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon$1, _extends$1({}, props, {
    ref,
    icon: CheckOutlinedSvg
  }));
};
const CheckOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(CheckOutlined);
var DownOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
const DownOutlinedSvg = DownOutlined$2;
var DownOutlined = function DownOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon$1, _extends$1({}, props, {
    ref,
    icon: DownOutlinedSvg
  }));
};
const DownOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(DownOutlined);
var SearchOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
const SearchOutlinedSvg = SearchOutlined$2;
var SearchOutlined = function SearchOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon$1, _extends$1({}, props, {
    ref,
    icon: SearchOutlinedSvg
  }));
};
const SearchOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(SearchOutlined);
function useIcons(_ref) {
  let {
    suffixIcon,
    clearIcon,
    menuItemSelectedIcon,
    removeIcon,
    loading: loading2,
    multiple,
    hasFeedback,
    prefixCls,
    showSuffixIcon,
    feedbackIcon,
    showArrow,
    componentName
  } = _ref;
  const mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : /* @__PURE__ */ reactExports.createElement(CloseCircleFilled$1, null);
  const getSuffixIconNode = (arrowIcon) => {
    if (suffixIcon === null && !hasFeedback && !showArrow) {
      return null;
    }
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, showSuffixIcon !== false && arrowIcon, hasFeedback && feedbackIcon);
  };
  let mergedSuffixIcon = null;
  if (suffixIcon !== void 0) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading2) {
    mergedSuffixIcon = getSuffixIconNode(/* @__PURE__ */ reactExports.createElement(LoadingOutlined$1, {
      spin: true
    }));
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = (_ref2) => {
      let {
        open,
        showSearch
      } = _ref2;
      if (open && showSearch) {
        return getSuffixIconNode(/* @__PURE__ */ reactExports.createElement(SearchOutlined$1, {
          className: iconCls
        }));
      }
      return getSuffixIconNode(/* @__PURE__ */ reactExports.createElement(DownOutlined$1, {
        className: iconCls
      }));
    };
  }
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== void 0) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /* @__PURE__ */ reactExports.createElement(CheckOutlined$1, null);
  } else {
    mergedItemIcon = null;
  }
  let mergedRemoveIcon = null;
  if (removeIcon !== void 0) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /* @__PURE__ */ reactExports.createElement(CloseOutlined$1, null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}
function useShowArrow(suffixIcon, showArrow) {
  return showArrow !== void 0 ? showArrow : suffixIcon !== null;
}
var __rest$4 = function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
const SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE";
const InternalSelect = (_a, ref) => {
  var _b, _c;
  var {
    prefixCls: customizePrefixCls,
    bordered = true,
    className,
    rootClassName,
    getPopupContainer,
    popupClassName,
    dropdownClassName,
    listHeight = 256,
    placement,
    listItemHeight = 24,
    size: customizeSize,
    disabled: customDisabled,
    notFoundContent,
    status: customStatus,
    builtinPlacements,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    direction: propDirection,
    style: style2,
    allowClear
  } = _a, props = __rest$4(_a, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear"]);
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    renderEmpty,
    direction: contextDirection,
    virtual,
    popupMatchSelectWidth: contextPopupMatchSelectWidth,
    popupOverflow,
    select
  } = reactExports.useContext(ConfigContext);
  const prefixCls = getPrefixCls("select", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const direction = propDirection !== null && propDirection !== void 0 ? propDirection : contextDirection;
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const rootCls = useCSSVarCls$1(prefixCls);
  const [wrapCSSVar, hashId] = useSelectStyle(prefixCls, rootCls);
  const mode = reactExports.useMemo(() => {
    const {
      mode: m2
    } = props;
    if (m2 === "combobox") {
      return void 0;
    }
    if (m2 === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return "combobox";
    }
    return m2;
  }, [props.mode]);
  const isMultiple2 = mode === "multiple" || mode === "tags";
  const showSuffixIcon = useShowArrow(props.suffixIcon, props.showArrow);
  const mergedPopupMatchSelectWidth = (_b = popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth) !== null && _b !== void 0 ? _b : contextPopupMatchSelectWidth;
  const {
    status: contextStatus,
    hasFeedback,
    isFormItemInput,
    feedbackIcon
  } = reactExports.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  let mergedNotFound;
  if (notFoundContent !== void 0) {
    mergedNotFound = notFoundContent;
  } else if (mode === "combobox") {
    mergedNotFound = null;
  } else {
    mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty("Select")) || /* @__PURE__ */ reactExports.createElement(DefaultRenderEmpty$1, {
      componentName: "Select"
    });
  }
  const {
    suffixIcon,
    itemIcon,
    removeIcon,
    clearIcon
  } = useIcons(Object.assign(Object.assign({}, props), {
    multiple: isMultiple2,
    hasFeedback,
    feedbackIcon,
    showSuffixIcon,
    prefixCls,
    showArrow: props.showArrow,
    componentName: "Select"
  }));
  const mergedAllowClear = allowClear === true ? {
    clearIcon
  } : allowClear;
  const selectProps = omit(props, ["suffixIcon", "itemIcon"]);
  const mergedPopupClassName = classNames(popupClassName || dropdownClassName, {
    [`${prefixCls}-dropdown-${direction}`]: direction === "rtl"
  }, rootClassName, rootCls, hashId);
  const mergedSize = useSize$1((ctx) => {
    var _a2;
    return (_a2 = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a2 !== void 0 ? _a2 : ctx;
  });
  const disabled = reactExports.useContext(DisabledContext$1);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const mergedClassName = classNames({
    [`${prefixCls}-lg`]: mergedSize === "large",
    [`${prefixCls}-sm`]: mergedSize === "small",
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-borderless`]: !bordered,
    [`${prefixCls}-in-form-item`]: isFormItemInput
  }, getStatusClassNames(prefixCls, mergedStatus, hasFeedback), compactItemClassnames, select === null || select === void 0 ? void 0 : select.className, className, rootClassName, rootCls, hashId);
  const memoPlacement = reactExports.useMemo(() => {
    if (placement !== void 0) {
      return placement;
    }
    return direction === "rtl" ? "bottomRight" : "bottomLeft";
  }, [placement, direction]);
  const mergedBuiltinPlacements = useBuiltinPlacements(builtinPlacements, popupOverflow);
  const [zIndex] = useZIndex("SelectLike", (_c = props.dropdownStyle) === null || _c === void 0 ? void 0 : _c.zIndex);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(TypedSelect, Object.assign({
    ref,
    virtual,
    showSearch: select === null || select === void 0 ? void 0 : select.showSearch
  }, selectProps, {
    style: Object.assign(Object.assign({}, select === null || select === void 0 ? void 0 : select.style), style2),
    dropdownMatchSelectWidth: mergedPopupMatchSelectWidth,
    builtinPlacements: mergedBuiltinPlacements,
    transitionName: getTransitionName(rootPrefixCls, "slide-up", props.transitionName),
    listHeight,
    listItemHeight,
    mode,
    prefixCls,
    placement: memoPlacement,
    direction,
    suffixIcon,
    menuItemSelectedIcon: itemIcon,
    removeIcon,
    allowClear: mergedAllowClear,
    notFoundContent: mergedNotFound,
    className: mergedClassName,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    dropdownClassName: mergedPopupClassName,
    disabled: mergedDisabled,
    dropdownStyle: Object.assign(Object.assign({}, props === null || props === void 0 ? void 0 : props.dropdownStyle), {
      zIndex
    })
  })));
};
const Select = /* @__PURE__ */ reactExports.forwardRef(InternalSelect);
const PurePanel = genPurePanel(Select);
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = Option;
Select.OptGroup = OptGroup;
Select._InternalPanelDoNotUseOrYouWillBeFired = PurePanel;
const Select$1 = Select;
const genPlaceholderStyle = (color) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
});
const genHoverStyle = (token2) => ({
  borderColor: token2.hoverBorderColor,
  backgroundColor: token2.hoverBg
});
const genActiveStyle = (token2) => ({
  borderColor: token2.activeBorderColor,
  boxShadow: token2.activeShadow,
  outline: 0,
  backgroundColor: token2.activeBg
});
const genDisabledStyle = (token2) => ({
  color: token2.colorTextDisabled,
  backgroundColor: token2.colorBgContainerDisabled,
  borderColor: token2.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover:not([disabled])": Object.assign({}, genHoverStyle(merge(token2, {
    hoverBorderColor: token2.colorBorder,
    hoverBg: token2.colorBgContainerDisabled
  })))
});
const genInputLargeStyle = (token2) => {
  const {
    paddingBlockLG,
    fontSizeLG,
    lineHeightLG,
    borderRadiusLG,
    paddingInlineLG
  } = token2;
  return {
    padding: `${unit$1(paddingBlockLG)} ${unit$1(paddingInlineLG)}`,
    fontSize: fontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  };
};
const genInputSmallStyle = (token2) => ({
  padding: `${unit$1(token2.paddingBlockSM)} ${unit$1(token2.paddingInlineSM)}`,
  borderRadius: token2.borderRadiusSM
});
const genStatusStyle = (token2, parentCls) => {
  const {
    componentCls,
    colorError,
    colorWarning,
    errorActiveShadow,
    warningActiveShadow,
    colorErrorBorderHover,
    colorWarningBorderHover
  } = token2;
  return {
    [`&-status-error:not(${parentCls}-disabled):not(${parentCls}-borderless)${parentCls}`]: {
      borderColor: colorError,
      "&:hover": {
        borderColor: colorErrorBorderHover
      },
      "&:focus, &:focus-within": Object.assign({}, genActiveStyle(merge(token2, {
        activeBorderColor: colorError,
        activeShadow: errorActiveShadow
      }))),
      [`${componentCls}-prefix, ${componentCls}-suffix`]: {
        color: colorError
      }
    },
    [`&-status-warning:not(${parentCls}-disabled):not(${parentCls}-borderless)${parentCls}`]: {
      borderColor: colorWarning,
      "&:hover": {
        borderColor: colorWarningBorderHover
      },
      "&:focus, &:focus-within": Object.assign({}, genActiveStyle(merge(token2, {
        activeBorderColor: colorWarning,
        activeShadow: warningActiveShadow
      }))),
      [`${componentCls}-prefix, ${componentCls}-suffix`]: {
        color: colorWarning
      }
    }
  };
};
const genBasicInputStyle = (token2) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${unit$1(token2.paddingBlock)} ${unit$1(token2.paddingInline)}`,
  color: token2.colorText,
  fontSize: token2.fontSize,
  lineHeight: token2.lineHeight,
  backgroundColor: token2.colorBgContainer,
  backgroundImage: "none",
  borderWidth: token2.lineWidth,
  borderStyle: token2.lineType,
  borderColor: token2.colorBorder,
  borderRadius: token2.borderRadius,
  transition: `all ${token2.motionDurationMid}`
}, genPlaceholderStyle(token2.colorTextPlaceholder)), {
  "&:hover": Object.assign({}, genHoverStyle(token2)),
  "&:focus, &:focus-within": Object.assign({}, genActiveStyle(token2)),
  "&-disabled, &[disabled]": Object.assign({}, genDisabledStyle(token2)),
  "&-borderless": {
    "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none"
    }
  },
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    // prevent textarea resize from coming out of its container
    height: "auto",
    minHeight: token2.controlHeight,
    lineHeight: token2.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${token2.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": Object.assign({}, genInputLargeStyle(token2)),
  "&-sm": Object.assign({}, genInputSmallStyle(token2)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
});
const genInputGroupStyle = (token2) => {
  const {
    componentCls,
    antCls
  } = token2;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    [`&[class*='col-']`]: {
      paddingInlineEnd: token2.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${componentCls}, &-lg > ${componentCls}-group-addon`]: Object.assign({}, genInputLargeStyle(token2)),
    [`&-sm ${componentCls}, &-sm > ${componentCls}-group-addon`]: Object.assign({}, genInputSmallStyle(token2)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${antCls}-select-single ${antCls}-select-selector`]: {
      height: token2.controlHeightLG
    },
    [`&-sm ${antCls}-select-single ${antCls}-select-selector`]: {
      height: token2.controlHeightSM
    },
    [`> ${componentCls}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${componentCls}-group`]: {
      [`&-addon, &-wrap`]: {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${unit$1(token2.paddingInline)}`,
        color: token2.colorText,
        fontWeight: "normal",
        fontSize: token2.fontSize,
        textAlign: "center",
        backgroundColor: token2.addonBg,
        border: `${unit$1(token2.lineWidth)} ${token2.lineType} ${token2.colorBorder}`,
        borderRadius: token2.borderRadius,
        transition: `all ${token2.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${antCls}-select`]: {
          margin: `${unit$1(token2.calc(token2.paddingBlock).add(1).mul(-1).equal())} ${unit$1(token2.calc(token2.paddingInline).mul(-1).equal())}`,
          [`&${antCls}-select-single:not(${antCls}-select-customize-input):not(${antCls}-pagination-size-changer)`]: {
            [`${antCls}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${unit$1(token2.lineWidth)} ${token2.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${antCls}-select-selector`]: {
              color: token2.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${antCls}-cascader-picker`]: {
          margin: `-9px ${unit$1(token2.calc(token2.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${antCls}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    },
    [`${componentCls}`]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${componentCls}:first-child, ${componentCls}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select ${antCls}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}-affix-wrapper`]: {
      [`&:not(:first-child) ${componentCls}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${componentCls}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}:last-child, ${componentCls}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select ${antCls}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${componentCls}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${componentCls}-search &`]: {
          borderStartStartRadius: token2.borderRadius,
          borderEndStartRadius: token2.borderRadius
        }
      },
      [`&:not(:first-child), ${componentCls}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${componentCls}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, clearFix()), {
      [`${componentCls}-group-addon, ${componentCls}-group-wrap, > ${componentCls}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: token2.lineWidth,
          "&:hover": {
            zIndex: 1
          },
          "&:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-block",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${componentCls}-affix-wrapper,
        & > ${componentCls}-number-affix-wrapper,
        & > ${antCls}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: token2.calc(token2.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: token2.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${componentCls}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${antCls}-select > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete ${componentCls},
      & > ${antCls}-cascader-picker ${componentCls},
      & > ${componentCls}-group-wrapper ${componentCls}`]: {
        borderInlineEndWidth: token2.lineWidth,
        borderRadius: 0,
        "&:hover": {
          zIndex: 1
        },
        "&:focus": {
          zIndex: 1
        }
      },
      [`& > ${antCls}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${antCls}-select > ${antCls}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${antCls}-select:first-child > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete:first-child ${componentCls},
      & > ${antCls}-cascader-picker:first-child ${componentCls}`]: {
        borderStartStartRadius: token2.borderRadius,
        borderEndStartRadius: token2.borderRadius
      },
      [`& > *:last-child,
      & > ${antCls}-select:last-child > ${antCls}-select-selector,
      & > ${antCls}-cascader-picker:last-child ${componentCls},
      & > ${antCls}-cascader-picker-focused:last-child ${componentCls}`]: {
        borderInlineEndWidth: token2.lineWidth,
        borderStartEndRadius: token2.borderRadius,
        borderEndEndRadius: token2.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${antCls}-select-auto-complete ${componentCls}`]: {
        verticalAlign: "top"
      },
      [`${componentCls}-group-wrapper + ${componentCls}-group-wrapper`]: {
        marginInlineStart: token2.calc(token2.lineWidth).mul(-1).equal(),
        [`${componentCls}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${componentCls}-group-wrapper:not(:last-child)`]: {
        [`&${componentCls}-search > ${componentCls}-group`]: {
          [`& > ${componentCls}-group-addon > ${componentCls}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${componentCls}`]: {
            borderStartStartRadius: token2.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: token2.borderRadius
          }
        }
      }
    })
  };
};
const genInputStyle = (token2) => {
  const {
    componentCls,
    controlHeightSM,
    lineWidth,
    calc
  } = token2;
  const FIXED_CHROME_COLOR_HEIGHT = 16;
  const colorSmallPadding = calc(controlHeightSM).sub(calc(lineWidth).mul(2)).sub(FIXED_CHROME_COLOR_HEIGHT).div(2).equal();
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, resetComponent(token2)), genBasicInputStyle(token2)), genStatusStyle(token2, componentCls)), {
      '&[type="color"]': {
        height: token2.controlHeight,
        [`&${componentCls}-lg`]: {
          height: token2.controlHeightLG
        },
        [`&${componentCls}-sm`]: {
          height: controlHeightSM,
          paddingTop: colorSmallPadding,
          paddingBottom: colorSmallPadding
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        "-webkit-appearance": "none"
      }
    })
  };
};
const genAllowClearStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    // ========================= Input =========================
    [`${componentCls}-clear-icon`]: {
      margin: 0,
      color: token2.colorTextQuaternary,
      fontSize: token2.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${token2.motionDurationSlow}`,
      "&:hover": {
        color: token2.colorTextTertiary
      },
      "&:active": {
        color: token2.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${unit$1(token2.inputAffixPadding)}`
      }
    }
  };
};
const genAffixStyle = (token2) => {
  const {
    componentCls,
    inputAffixPadding,
    colorTextDescription,
    motionDurationSlow,
    colorIcon,
    colorIconHover,
    iconCls
  } = token2;
  return {
    [`${componentCls}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genBasicInputStyle(token2)), {
      display: "inline-flex",
      [`&:not(${componentCls}-affix-wrapper-disabled):hover`]: {
        zIndex: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      "&-disabled": {
        [`${componentCls}[disabled]`]: {
          background: "transparent"
        }
      },
      [`> input${componentCls}`]: {
        padding: 0,
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${componentCls}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: token2.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: colorTextDescription
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: token2.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: inputAffixPadding
        },
        "&-suffix": {
          marginInlineStart: inputAffixPadding
        }
      }
    }), genAllowClearStyle(token2)), {
      // password
      [`${iconCls}${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: "pointer",
        transition: `all ${motionDurationSlow}`,
        "&:hover": {
          color: colorIconHover
        }
      }
    }), genStatusStyle(token2, `${componentCls}-affix-wrapper`))
  };
};
const genGroupStyle = (token2) => {
  const {
    componentCls,
    colorError,
    colorWarning,
    borderRadiusLG,
    borderRadiusSM
  } = token2;
  return {
    [`${componentCls}-group`]: Object.assign(Object.assign(Object.assign({}, resetComponent(token2)), genInputGroupStyle(token2)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": {
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design/issues/6403
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusLG,
            fontSize: token2.fontSizeLG
          }
        },
        "&-sm": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusSM
          }
        },
        // Status
        "&-status-error": {
          [`${componentCls}-group-addon`]: {
            color: colorError,
            borderColor: colorError
          }
        },
        "&-status-warning": {
          [`${componentCls}-group-addon`]: {
            color: colorWarning,
            borderColor: colorWarning
          }
        },
        "&-disabled": {
          [`${componentCls}-group-addon`]: Object.assign({}, genDisabledStyle(token2))
        },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${componentCls}-compact-first-item):not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-first-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-first-item)${componentCls}-compact-last-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      }
    })
  };
};
const genSearchInputStyle = (token2) => {
  const {
    componentCls,
    antCls
  } = token2;
  const searchPrefixCls = `${componentCls}-search`;
  return {
    [searchPrefixCls]: {
      [`${componentCls}`]: {
        "&:hover, &:focus": {
          borderColor: token2.colorPrimaryHover,
          [`+ ${componentCls}-group-addon ${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
            borderInlineStartColor: token2.colorPrimaryHover
          }
        }
      },
      [`${componentCls}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${componentCls}-lg`]: {
        lineHeight: token2.calc(token2.lineHeightLG).sub(2e-4).equal({
          unit: false
        })
      },
      [`> ${componentCls}-group`]: {
        [`> ${componentCls}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${searchPrefixCls}-button`]: {
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: token2.borderRadius,
            borderEndEndRadius: token2.borderRadius,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
            color: token2.colorTextDescription,
            "&:hover": {
              color: token2.colorPrimaryHover
            },
            "&:active": {
              color: token2.colorPrimaryActive
            },
            [`&${antCls}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${searchPrefixCls}-button`]: {
        height: token2.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${searchPrefixCls}-button`]: {
        height: token2.controlHeightLG
      },
      [`&-small ${searchPrefixCls}-button`]: {
        height: token2.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${componentCls}-compact-item`]: {
        [`&:not(${componentCls}-compact-last-item)`]: {
          [`${componentCls}-group-addon`]: {
            [`${componentCls}-search-button`]: {
              marginInlineEnd: token2.calc(token2.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${componentCls}-compact-first-item)`]: {
          [`${componentCls},${componentCls}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${componentCls}-group-addon ${componentCls}-search-button,
        > ${componentCls},
        ${componentCls}-affix-wrapper`]: {
          "&:hover,&:focus,&:active": {
            zIndex: 2
          }
        },
        [`> ${componentCls}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
};
const genTextAreaStyle = (token2) => {
  const {
    componentCls,
    paddingLG
  } = token2;
  const textareaPrefixCls = `${componentCls}-textarea`;
  return {
    [textareaPrefixCls]: {
      position: "relative",
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${componentCls}`]: {
          height: "100%"
        },
        [`${componentCls}-data-count`]: {
          position: "absolute",
          bottom: token2.calc(token2.fontSize).mul(token2.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: token2.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      "&-allow-clear": {
        [`> ${componentCls}`]: {
          paddingInlineEnd: paddingLG
        }
      },
      [`&-affix-wrapper${textareaPrefixCls}-has-feedback`]: {
        [`${componentCls}`]: {
          paddingInlineEnd: paddingLG
        }
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${componentCls}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${componentCls}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${componentCls}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: token2.paddingXS,
            insetBlockStart: token2.paddingXS
          },
          // Feedback Icon
          [`${textareaPrefixCls}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: token2.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      }
    }
  };
};
const genRangeStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    [`${componentCls}-out-of-range`]: {
      [`&, & input, & textarea, ${componentCls}-show-count-suffix, ${componentCls}-data-count`]: {
        color: token2.colorError
      }
    }
  };
};
function initInputToken(token2) {
  return merge(token2, {
    inputAffixPadding: token2.paddingXXS
  });
}
const initComponentToken = (token2) => {
  const {
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    controlHeightSM,
    controlHeightLG,
    fontSizeLG,
    lineHeightLG,
    paddingSM,
    controlPaddingHorizontalSM,
    controlPaddingHorizontal,
    colorFillAlter,
    colorPrimaryHover,
    colorPrimary,
    controlOutlineWidth,
    controlOutline,
    colorErrorOutline,
    colorWarningOutline
  } = token2;
  return {
    paddingBlock: Math.max(Math.round((controlHeight - fontSize * lineHeight) / 2 * 10) / 10 - lineWidth, 0),
    paddingBlockSM: Math.max(Math.round((controlHeightSM - fontSize * lineHeight) / 2 * 10) / 10 - lineWidth, 0),
    paddingBlockLG: Math.ceil((controlHeightLG - fontSizeLG * lineHeightLG) / 2 * 10) / 10 - lineWidth,
    paddingInline: paddingSM - lineWidth,
    paddingInlineSM: controlPaddingHorizontalSM - lineWidth,
    paddingInlineLG: controlPaddingHorizontal - lineWidth,
    addonBg: colorFillAlter,
    activeBorderColor: colorPrimary,
    hoverBorderColor: colorPrimaryHover,
    activeShadow: `0 0 0 ${controlOutlineWidth}px ${controlOutline}`,
    errorActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorErrorOutline}`,
    warningActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorWarningOutline}`,
    hoverBg: "",
    activeBg: ""
  };
};
const useStyle = genStyleHooks("Input", (token2) => {
  const inputToken = merge(token2, initInputToken(token2));
  return [
    genInputStyle(inputToken),
    genTextAreaStyle(inputToken),
    genAffixStyle(inputToken),
    genGroupStyle(inputToken),
    genSearchInputStyle(inputToken),
    genRangeStyle(inputToken),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(inputToken)
  ];
}, initComponentToken);
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
function hasPrefixSuffix$1(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
function resolveOnChange(target, e2, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  var event = e2;
  if (e2.type === "click") {
    var currentTarget = target.cloneNode(true);
    event = Object.create(e2, {
      target: {
        value: currentTarget
      },
      currentTarget: {
        value: currentTarget
      }
    });
    currentTarget.value = "";
    onChange(event);
    return;
  }
  if (targetValue !== void 0) {
    event = Object.create(e2, {
      target: {
        value: target
      },
      currentTarget: {
        value: target
      }
    });
    if (target.type !== "file") {
      target.value = targetValue;
    }
    onChange(event);
    return;
  }
  onChange(event);
}
function triggerFocus$1(element, option2) {
  if (!element)
    return;
  element.focus(option2);
  var _ref = option2 || {}, cursor = _ref.cursor;
  if (cursor) {
    var len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
var BaseInput = function BaseInput2(props) {
  var _inputElement$props, _inputElement$props2;
  var inputElement = props.inputElement, prefixCls = props.prefixCls, prefix = props.prefix, suffix = props.suffix, addonBefore = props.addonBefore, addonAfter = props.addonAfter, className = props.className, style2 = props.style, disabled = props.disabled, readOnly = props.readOnly, focused = props.focused, triggerFocus2 = props.triggerFocus, allowClear = props.allowClear, value = props.value, handleReset = props.handleReset, hidden = props.hidden, classes = props.classes, classNames$1 = props.classNames, dataAttrs = props.dataAttrs, styles = props.styles, components = props.components;
  var AffixWrapperComponent = (components === null || components === void 0 ? void 0 : components.affixWrapper) || "span";
  var GroupWrapperComponent = (components === null || components === void 0 ? void 0 : components.groupWrapper) || "span";
  var WrapperComponent = (components === null || components === void 0 ? void 0 : components.wrapper) || "span";
  var GroupAddonComponent = (components === null || components === void 0 ? void 0 : components.groupAddon) || "span";
  var containerRef = reactExports.useRef(null);
  var onInputClick = function onInputClick2(e2) {
    var _containerRef$current;
    if ((_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(e2.target)) {
      triggerFocus2 === null || triggerFocus2 === void 0 || triggerFocus2();
    }
  };
  var getClearIcon = function getClearIcon2() {
    var _clsx;
    if (!allowClear) {
      return null;
    }
    var needClear = !disabled && !readOnly && value;
    var clearIconCls = "".concat(prefixCls, "-clear-icon");
    var iconNode = _typeof(allowClear) === "object" && allowClear !== null && allowClear !== void 0 && allowClear.clearIcon ? allowClear.clearIcon : "✖";
    return /* @__PURE__ */ React.createElement("span", {
      onClick: handleReset,
      onMouseDown: function onMouseDown(e2) {
        return e2.preventDefault();
      },
      className: classNames(clearIconCls, (_clsx = {}, _defineProperty(_clsx, "".concat(clearIconCls, "-hidden"), !needClear), _defineProperty(_clsx, "".concat(clearIconCls, "-has-suffix"), !!suffix), _clsx)),
      role: "button",
      tabIndex: -1
    }, iconNode);
  };
  var element = /* @__PURE__ */ reactExports.cloneElement(inputElement, {
    value,
    hidden,
    className: classNames((_inputElement$props = inputElement.props) === null || _inputElement$props === void 0 ? void 0 : _inputElement$props.className, !hasPrefixSuffix$1(props) && !hasAddon(props) && className) || null,
    style: _objectSpread2(_objectSpread2({}, (_inputElement$props2 = inputElement.props) === null || _inputElement$props2 === void 0 ? void 0 : _inputElement$props2.style), !hasPrefixSuffix$1(props) && !hasAddon(props) ? style2 : {})
  });
  if (hasPrefixSuffix$1(props)) {
    var _clsx2;
    var affixWrapperPrefixCls = "".concat(prefixCls, "-affix-wrapper");
    var affixWrapperCls = classNames(affixWrapperPrefixCls, (_clsx2 = {}, _defineProperty(_clsx2, "".concat(affixWrapperPrefixCls, "-disabled"), disabled), _defineProperty(_clsx2, "".concat(affixWrapperPrefixCls, "-focused"), focused), _defineProperty(_clsx2, "".concat(affixWrapperPrefixCls, "-readonly"), readOnly), _defineProperty(_clsx2, "".concat(affixWrapperPrefixCls, "-input-with-clear-btn"), suffix && allowClear && value), _clsx2), !hasAddon(props) && className, classes === null || classes === void 0 ? void 0 : classes.affixWrapper, classNames$1 === null || classNames$1 === void 0 ? void 0 : classNames$1.affixWrapper);
    var suffixNode = (suffix || allowClear) && /* @__PURE__ */ React.createElement("span", {
      className: classNames("".concat(prefixCls, "-suffix"), classNames$1 === null || classNames$1 === void 0 ? void 0 : classNames$1.suffix),
      style: styles === null || styles === void 0 ? void 0 : styles.suffix
    }, getClearIcon(), suffix);
    element = /* @__PURE__ */ React.createElement(AffixWrapperComponent, _extends$1({
      className: affixWrapperCls,
      style: _objectSpread2(_objectSpread2({}, !hasAddon(props) ? style2 : void 0), styles === null || styles === void 0 ? void 0 : styles.affixWrapper),
      hidden: !hasAddon(props) && hidden,
      onClick: onInputClick
    }, dataAttrs === null || dataAttrs === void 0 ? void 0 : dataAttrs.affixWrapper, {
      ref: containerRef
    }), prefix && /* @__PURE__ */ React.createElement("span", {
      className: classNames("".concat(prefixCls, "-prefix"), classNames$1 === null || classNames$1 === void 0 ? void 0 : classNames$1.prefix),
      style: styles === null || styles === void 0 ? void 0 : styles.prefix
    }, prefix), /* @__PURE__ */ reactExports.cloneElement(inputElement, {
      value,
      hidden: null
    }), suffixNode);
  }
  if (hasAddon(props)) {
    var wrapperCls = "".concat(prefixCls, "-group");
    var addonCls = "".concat(wrapperCls, "-addon");
    var mergedWrapperClassName = classNames("".concat(prefixCls, "-wrapper"), wrapperCls, classes === null || classes === void 0 ? void 0 : classes.wrapper);
    var mergedGroupClassName = classNames("".concat(prefixCls, "-group-wrapper"), className, classes === null || classes === void 0 ? void 0 : classes.group);
    return /* @__PURE__ */ React.createElement(GroupWrapperComponent, {
      className: mergedGroupClassName,
      style: style2,
      hidden
    }, /* @__PURE__ */ React.createElement(WrapperComponent, {
      className: mergedWrapperClassName
    }, addonBefore && /* @__PURE__ */ React.createElement(GroupAddonComponent, {
      className: addonCls
    }, addonBefore), /* @__PURE__ */ reactExports.cloneElement(element, {
      hidden: null
    }), addonAfter && /* @__PURE__ */ React.createElement(GroupAddonComponent, {
      className: addonCls
    }, addonAfter)));
  }
  return element;
};
var _excluded$5 = ["show"];
function useCount(count, showCount) {
  return reactExports.useMemo(function() {
    var mergedConfig = {};
    if (showCount) {
      mergedConfig.show = _typeof(showCount) === "object" && showCount.formatter ? showCount.formatter : !!showCount;
    }
    mergedConfig = _objectSpread2(_objectSpread2({}, mergedConfig), count);
    var _ref = mergedConfig, show = _ref.show, rest = _objectWithoutProperties(_ref, _excluded$5);
    return _objectSpread2(_objectSpread2({}, rest), {}, {
      show: !!show,
      showFormatter: typeof show === "function" ? show : void 0,
      strategy: rest.strategy || function(value) {
        return value.length;
      }
    });
  }, [count, showCount]);
}
var _excluded$4 = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"];
var Input$3 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var autoComplete = props.autoComplete, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onPressEnter = props.onPressEnter, onKeyDown = props.onKeyDown, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-input" : _props$prefixCls, disabled = props.disabled, htmlSize = props.htmlSize, className = props.className, maxLength = props.maxLength, suffix = props.suffix, showCount = props.showCount, count = props.count, _props$type = props.type, type4 = _props$type === void 0 ? "text" : _props$type, classes = props.classes, classNames$1 = props.classNames, styles = props.styles, _onCompositionStart = props.onCompositionStart, onCompositionEnd = props.onCompositionEnd, rest = _objectWithoutProperties(props, _excluded$4);
  var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), focused = _useState2[0], setFocused = _useState2[1];
  var compositionRef = React.useRef(false);
  var inputRef = reactExports.useRef(null);
  var focus = function focus2(option2) {
    if (inputRef.current) {
      triggerFocus$1(inputRef.current, option2);
    }
  };
  var _useMergedState = useMergedState(props.defaultValue, {
    value: props.value
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), value = _useMergedState2[0], setValue = _useMergedState2[1];
  var formatValue = value === void 0 || value === null ? "" : String(value);
  var _React$useState = React.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), selection = _React$useState2[0], setSelection = _React$useState2[1];
  var countConfig = useCount(count, showCount);
  var mergedMax = countConfig.max || maxLength;
  var valueLength = countConfig.strategy(formatValue);
  var isOutOfRange = !!mergedMax && valueLength > mergedMax;
  reactExports.useImperativeHandle(ref, function() {
    return {
      focus,
      blur: function blur() {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.blur();
      },
      setSelectionRange: function setSelectionRange(start, end, direction) {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 || _inputRef$current2.setSelectionRange(start, end, direction);
      },
      select: function select() {
        var _inputRef$current3;
        (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 || _inputRef$current3.select();
      },
      input: inputRef.current
    };
  });
  reactExports.useEffect(function() {
    setFocused(function(prev2) {
      return prev2 && disabled ? false : prev2;
    });
  }, [disabled]);
  var triggerChange = function triggerChange2(e2, currentValue) {
    var cutValue = currentValue;
    if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
      cutValue = countConfig.exceedFormatter(currentValue, {
        max: countConfig.max
      });
      if (currentValue !== cutValue) {
        var _inputRef$current4, _inputRef$current5;
        setSelection([((_inputRef$current4 = inputRef.current) === null || _inputRef$current4 === void 0 ? void 0 : _inputRef$current4.selectionStart) || 0, ((_inputRef$current5 = inputRef.current) === null || _inputRef$current5 === void 0 ? void 0 : _inputRef$current5.selectionEnd) || 0]);
      }
    }
    setValue(cutValue);
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e2, onChange, cutValue);
    }
  };
  React.useEffect(function() {
    if (selection) {
      var _inputRef$current6;
      (_inputRef$current6 = inputRef.current) === null || _inputRef$current6 === void 0 || _inputRef$current6.setSelectionRange.apply(_inputRef$current6, _toConsumableArray(selection));
    }
  }, [selection]);
  var onInternalChange = function onInternalChange2(e2) {
    triggerChange(e2, e2.target.value);
  };
  var onInternalCompositionEnd = function onInternalCompositionEnd2(e2) {
    compositionRef.current = false;
    triggerChange(e2, e2.currentTarget.value);
    onCompositionEnd === null || onCompositionEnd === void 0 || onCompositionEnd(e2);
  };
  var handleKeyDown = function handleKeyDown2(e2) {
    if (onPressEnter && e2.key === "Enter") {
      onPressEnter(e2);
    }
    onKeyDown === null || onKeyDown === void 0 || onKeyDown(e2);
  };
  var handleFocus = function handleFocus2(e2) {
    setFocused(true);
    onFocus === null || onFocus === void 0 || onFocus(e2);
  };
  var handleBlur = function handleBlur2(e2) {
    setFocused(false);
    onBlur === null || onBlur === void 0 || onBlur(e2);
  };
  var handleReset = function handleReset2(e2) {
    setValue("");
    focus();
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e2, onChange);
    }
  };
  var outOfRangeCls = isOutOfRange && "".concat(prefixCls, "-out-of-range");
  var getInputElement = function getInputElement2() {
    var otherProps = omit(props, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames"
    ]);
    return /* @__PURE__ */ React.createElement("input", _extends$1({
      autoComplete
    }, otherProps, {
      onChange: onInternalChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      className: classNames(prefixCls, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled), classNames$1 === null || classNames$1 === void 0 ? void 0 : classNames$1.input),
      style: styles === null || styles === void 0 ? void 0 : styles.input,
      ref: inputRef,
      size: htmlSize,
      type: type4,
      onCompositionStart: function onCompositionStart(e2) {
        compositionRef.current = true;
        _onCompositionStart === null || _onCompositionStart === void 0 || _onCompositionStart(e2);
      },
      onCompositionEnd: onInternalCompositionEnd
    }));
  };
  var getSuffix = function getSuffix2() {
    var hasMaxLength = Number(mergedMax) > 0;
    if (suffix || countConfig.show) {
      var dataCount = countConfig.showFormatter ? countConfig.showFormatter({
        value: formatValue,
        count: valueLength,
        maxLength: mergedMax
      }) : "".concat(valueLength).concat(hasMaxLength ? " / ".concat(mergedMax) : "");
      return /* @__PURE__ */ React.createElement(React.Fragment, null, countConfig.show && /* @__PURE__ */ React.createElement("span", {
        className: classNames("".concat(prefixCls, "-show-count-suffix"), _defineProperty({}, "".concat(prefixCls, "-show-count-has-suffix"), !!suffix), classNames$1 === null || classNames$1 === void 0 ? void 0 : classNames$1.count),
        style: _objectSpread2({}, styles === null || styles === void 0 ? void 0 : styles.count)
      }, dataCount), suffix);
    }
    return null;
  };
  return /* @__PURE__ */ React.createElement(BaseInput, _extends$1({}, rest, {
    prefixCls,
    className: classNames(className, outOfRangeCls),
    inputElement: getInputElement(),
    handleReset,
    value: formatValue,
    focused,
    triggerFocus: focus,
    suffix: getSuffix(),
    disabled,
    classes,
    classNames: classNames$1,
    styles
  }));
});
const Group = (props) => {
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const {
    prefixCls: customizePrefixCls,
    className
  } = props;
  const prefixCls = getPrefixCls("input-group", customizePrefixCls);
  const inputPrefixCls = getPrefixCls("input");
  const [wrapCSSVar, hashId] = useStyle(inputPrefixCls);
  const cls = classNames(prefixCls, {
    [`${prefixCls}-lg`]: props.size === "large",
    [`${prefixCls}-sm`]: props.size === "small",
    [`${prefixCls}-compact`]: props.compact,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, hashId, className);
  const formItemContext = reactExports.useContext(FormItemInputContext);
  const groupFormItemContext = reactExports.useMemo(() => Object.assign(Object.assign({}, formItemContext), {
    isFormItemInput: false
  }), [formItemContext]);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement("span", {
    className: cls,
    style: props.style,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onFocus: props.onFocus,
    onBlur: props.onBlur
  }, /* @__PURE__ */ reactExports.createElement(FormItemInputContext.Provider, {
    value: groupFormItemContext
  }, props.children)));
};
const Group$1 = Group;
function useRemovePasswordTimeout(inputRef, triggerOnMount) {
  const removePasswordTimeoutRef = reactExports.useRef([]);
  const removePasswordTimeout = () => {
    removePasswordTimeoutRef.current.push(setTimeout(() => {
      var _a, _b, _c, _d;
      if (((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) && ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.input.getAttribute("type")) === "password" && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.input.hasAttribute("value"))) {
        (_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.input.removeAttribute("value");
      }
    }));
  };
  reactExports.useEffect(() => {
    if (triggerOnMount) {
      removePasswordTimeout();
    }
    return () => removePasswordTimeoutRef.current.forEach((timer) => {
      if (timer) {
        clearTimeout(timer);
      }
    });
  }, []);
  return removePasswordTimeout;
}
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
var __rest$3 = function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
function triggerFocus(element, option2) {
  if (!element) {
    return;
  }
  element.focus(option2);
  const {
    cursor
  } = option2 || {};
  if (cursor) {
    const len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
        break;
    }
  }
}
const Input$2 = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  var _a;
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    status: customStatus,
    size: customSize,
    disabled: customDisabled,
    onBlur,
    onFocus,
    suffix,
    allowClear,
    addonAfter,
    addonBefore,
    className,
    style: style2,
    styles,
    rootClassName,
    onChange,
    classNames: classes
  } = props, rest = __rest$3(props, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames"]);
  const {
    getPrefixCls,
    direction,
    input
  } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  const inputRef = reactExports.useRef(null);
  const cssVarCls = useCSSVarCls$1(prefixCls);
  const [wrapCSSVar, hashId] = useStyle(prefixCls, cssVarCls);
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const mergedSize = useSize$1((ctx) => {
    var _a2;
    return (_a2 = customSize !== null && customSize !== void 0 ? customSize : compactSize) !== null && _a2 !== void 0 ? _a2 : ctx;
  });
  const disabled = React.useContext(DisabledContext$1);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = reactExports.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const inputHasPrefixSuffix = hasPrefixSuffix(props) || !!hasFeedback;
  reactExports.useRef(inputHasPrefixSuffix);
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef, true);
  const handleBlur = (e2) => {
    removePasswordTimeout();
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e2);
  };
  const handleFocus = (e2) => {
    removePasswordTimeout();
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e2);
  };
  const handleChange = (e2) => {
    removePasswordTimeout();
    onChange === null || onChange === void 0 ? void 0 : onChange(e2);
  };
  const suffixNode = (hasFeedback || suffix) && /* @__PURE__ */ React.createElement(React.Fragment, null, suffix, hasFeedback && feedbackIcon);
  let mergedAllowClear;
  if (typeof allowClear === "object" && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: /* @__PURE__ */ React.createElement(CloseCircleFilled$1, null)
    };
  }
  return wrapCSSVar(/* @__PURE__ */ React.createElement(Input$3, Object.assign({
    ref: composeRef(ref, inputRef),
    prefixCls,
    autoComplete: input === null || input === void 0 ? void 0 : input.autoComplete
  }, rest, {
    disabled: mergedDisabled,
    onBlur: handleBlur,
    onFocus: handleFocus,
    style: Object.assign(Object.assign({}, input === null || input === void 0 ? void 0 : input.style), style2),
    styles: Object.assign(Object.assign({}, input === null || input === void 0 ? void 0 : input.styles), styles),
    suffix: suffixNode,
    allowClear: mergedAllowClear,
    className: classNames(className, rootClassName, cssVarCls, hashId, compactItemClassnames, input === null || input === void 0 ? void 0 : input.className),
    onChange: handleChange,
    addonAfter: addonAfter && /* @__PURE__ */ React.createElement(NoCompactStyle, null, /* @__PURE__ */ React.createElement(NoFormStyle, {
      override: true,
      status: true
    }, addonAfter)),
    addonBefore: addonBefore && /* @__PURE__ */ React.createElement(NoCompactStyle, null, /* @__PURE__ */ React.createElement(NoFormStyle, {
      override: true,
      status: true
    }, addonBefore)),
    classNames: Object.assign(Object.assign(Object.assign({}, classes), input === null || input === void 0 ? void 0 : input.classNames), {
      input: classNames({
        [`${prefixCls}-sm`]: mergedSize === "small",
        [`${prefixCls}-lg`]: mergedSize === "large",
        [`${prefixCls}-rtl`]: direction === "rtl",
        [`${prefixCls}-borderless`]: !bordered
      }, !inputHasPrefixSuffix && getStatusClassNames(prefixCls, mergedStatus), classes === null || classes === void 0 ? void 0 : classes.input, (_a = input === null || input === void 0 ? void 0 : input.classNames) === null || _a === void 0 ? void 0 : _a.input, hashId)
    }),
    classes: {
      affixWrapper: classNames({
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered
      }, getStatusClassNames(`${prefixCls}-affix-wrapper`, mergedStatus, hasFeedback), hashId),
      wrapper: classNames({
        [`${prefixCls}-group-rtl`]: direction === "rtl"
      }, hashId),
      group: classNames({
        [`${prefixCls}-group-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-group-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-group-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-group-wrapper-disabled`]: mergedDisabled
      }, getStatusClassNames(`${prefixCls}-group-wrapper`, mergedStatus, hasFeedback), hashId)
    }
  })));
});
const InternalInput = Input$2;
var EyeInvisibleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { "tag": "path", "attrs": { "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, "name": "eye-invisible", "theme": "outlined" };
const EyeInvisibleOutlinedSvg = EyeInvisibleOutlined$2;
var EyeInvisibleOutlined = function EyeInvisibleOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon$1, _extends$1({}, props, {
    ref,
    icon: EyeInvisibleOutlinedSvg
  }));
};
const EyeInvisibleOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(EyeInvisibleOutlined);
var EyeOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "eye", "theme": "outlined" };
const EyeOutlinedSvg = EyeOutlined$2;
var EyeOutlined = function EyeOutlined2(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(AntdIcon$1, _extends$1({}, props, {
    ref,
    icon: EyeOutlinedSvg
  }));
};
const EyeOutlined$1 = /* @__PURE__ */ reactExports.forwardRef(EyeOutlined);
var __rest$2 = function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
const defaultIconRender = (visible) => visible ? /* @__PURE__ */ reactExports.createElement(EyeOutlined$1, null) : /* @__PURE__ */ reactExports.createElement(EyeInvisibleOutlined$1, null);
const ActionMap = {
  click: "onClick",
  hover: "onMouseOver"
};
const Password = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    visibilityToggle = true
  } = props;
  const visibilityControlled = typeof visibilityToggle === "object" && visibilityToggle.visible !== void 0;
  const [visible, setVisible] = reactExports.useState(() => visibilityControlled ? visibilityToggle.visible : false);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (visibilityControlled) {
      setVisible(visibilityToggle.visible);
    }
  }, [visibilityControlled, visibilityToggle]);
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef);
  const onVisibleChange = () => {
    const {
      disabled
    } = props;
    if (disabled) {
      return;
    }
    if (visible) {
      removePasswordTimeout();
    }
    setVisible((prevState) => {
      var _a;
      const newState = !prevState;
      if (typeof visibilityToggle === "object") {
        (_a = visibilityToggle.onVisibleChange) === null || _a === void 0 ? void 0 : _a.call(visibilityToggle, newState);
      }
      return newState;
    });
  };
  const getIcon = (prefixCls2) => {
    const {
      action = "click",
      iconRender = defaultIconRender
    } = props;
    const iconTrigger = ActionMap[action] || "";
    const icon = iconRender(visible);
    const iconProps = {
      [iconTrigger]: onVisibleChange,
      className: `${prefixCls2}-icon`,
      key: "passwordIcon",
      onMouseDown: (e2) => {
        e2.preventDefault();
      },
      onMouseUp: (e2) => {
        e2.preventDefault();
      }
    };
    return /* @__PURE__ */ reactExports.cloneElement(/* @__PURE__ */ reactExports.isValidElement(icon) ? icon : /* @__PURE__ */ reactExports.createElement("span", null, icon), iconProps);
  };
  const {
    className,
    prefixCls: customizePrefixCls,
    inputPrefixCls: customizeInputPrefixCls,
    size
  } = props, restProps = __rest$2(props, ["className", "prefixCls", "inputPrefixCls", "size"]);
  const {
    getPrefixCls
  } = reactExports.useContext(ConfigContext);
  const inputPrefixCls = getPrefixCls("input", customizeInputPrefixCls);
  const prefixCls = getPrefixCls("input-password", customizePrefixCls);
  const suffixIcon = visibilityToggle && getIcon(prefixCls);
  const inputClassName = classNames(prefixCls, className, {
    [`${prefixCls}-${size}`]: !!size
  });
  const omittedProps = Object.assign(Object.assign({}, omit(restProps, ["suffix", "iconRender", "visibilityToggle"])), {
    type: visible ? "text" : "password",
    className: inputClassName,
    prefixCls: inputPrefixCls,
    suffix: suffixIcon
  });
  if (size) {
    omittedProps.size = size;
  }
  return /* @__PURE__ */ reactExports.createElement(InternalInput, Object.assign({
    ref: composeRef(ref, inputRef)
  }, omittedProps));
});
const Password$1 = Password;
var __rest$1 = function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
const Search = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    inputPrefixCls: customizeInputPrefixCls,
    className,
    size: customizeSize,
    suffix,
    enterButton = false,
    addonAfter,
    loading: loading2,
    disabled,
    onSearch: customOnSearch,
    onChange: customOnChange,
    onCompositionStart,
    onCompositionEnd
  } = props, restProps = __rest$1(props, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]);
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const composedRef = reactExports.useRef(false);
  const prefixCls = getPrefixCls("input-search", customizePrefixCls);
  const inputPrefixCls = getPrefixCls("input", customizeInputPrefixCls);
  const {
    compactSize
  } = useCompactItemContext(prefixCls, direction);
  const size = useSize$1((ctx) => {
    var _a;
    return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
  });
  const inputRef = reactExports.useRef(null);
  const onChange = (e2) => {
    if (e2 && e2.target && e2.type === "click" && customOnSearch) {
      customOnSearch(e2.target.value, e2, {
        source: "clear"
      });
    }
    if (customOnChange) {
      customOnChange(e2);
    }
  };
  const onMouseDown = (e2) => {
    var _a;
    if (document.activeElement === ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input)) {
      e2.preventDefault();
    }
  };
  const onSearch = (e2) => {
    var _a, _b;
    if (customOnSearch) {
      customOnSearch((_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.value, e2, {
        source: "input"
      });
    }
  };
  const onPressEnter = (e2) => {
    if (composedRef.current || loading2) {
      return;
    }
    onSearch(e2);
  };
  const searchIcon = typeof enterButton === "boolean" ? /* @__PURE__ */ reactExports.createElement(SearchOutlined$1, null) : null;
  const btnClassName = `${prefixCls}-button`;
  let button;
  const enterButtonAsElement = enterButton || {};
  const isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;
  if (isAntdButton || enterButtonAsElement.type === "button") {
    button = cloneElement(enterButtonAsElement, Object.assign({
      onMouseDown,
      onClick: (e2) => {
        var _a, _b;
        (_b = (_a = enterButtonAsElement === null || enterButtonAsElement === void 0 ? void 0 : enterButtonAsElement.props) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e2);
        onSearch(e2);
      },
      key: "enterButton"
    }, isAntdButton ? {
      className: btnClassName,
      size
    } : {}));
  } else {
    button = /* @__PURE__ */ reactExports.createElement(Button$1, {
      className: btnClassName,
      type: enterButton ? "primary" : void 0,
      size,
      disabled,
      key: "enterButton",
      onMouseDown,
      onClick: onSearch,
      loading: loading2,
      icon: searchIcon
    }, enterButton);
  }
  if (addonAfter) {
    button = [button, cloneElement(addonAfter, {
      key: "addonAfter"
    })];
  }
  const cls = classNames(prefixCls, {
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-${size}`]: !!size,
    [`${prefixCls}-with-button`]: !!enterButton
  }, className);
  const handleOnCompositionStart = (e2) => {
    composedRef.current = true;
    onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e2);
  };
  const handleOnCompositionEnd = (e2) => {
    composedRef.current = false;
    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e2);
  };
  return /* @__PURE__ */ reactExports.createElement(InternalInput, Object.assign({
    ref: composeRef(inputRef, ref),
    onPressEnter
  }, restProps, {
    size,
    onCompositionStart: handleOnCompositionStart,
    onCompositionEnd: handleOnCompositionEnd,
    prefixCls: inputPrefixCls,
    addonAfter: button,
    suffix,
    onChange,
    className: cls,
    disabled
  }));
});
const Search$1 = Search;
var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n";
var SIZING_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node2) {
  var useCache2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var nodeRef = node2.getAttribute("id") || node2.getAttribute("data-reactid") || node2.getAttribute("name");
  if (useCache2 && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  var style2 = window.getComputedStyle(node2);
  var boxSizing = style2.getPropertyValue("box-sizing") || style2.getPropertyValue("-moz-box-sizing") || style2.getPropertyValue("-webkit-box-sizing");
  var paddingSize = parseFloat(style2.getPropertyValue("padding-bottom")) + parseFloat(style2.getPropertyValue("padding-top"));
  var borderSize = parseFloat(style2.getPropertyValue("border-bottom-width")) + parseFloat(style2.getPropertyValue("border-top-width"));
  var sizingStyle = SIZING_STYLE.map(function(name) {
    return "".concat(name, ":").concat(style2.getPropertyValue(name));
  }).join(";");
  var nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
  if (useCache2 && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
  var useCache2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tab-index", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    document.body.appendChild(hiddenTextarea);
  }
  if (uiTextNode.getAttribute("wrap")) {
    hiddenTextarea.setAttribute("wrap", uiTextNode.getAttribute("wrap"));
  } else {
    hiddenTextarea.removeAttribute("wrap");
  }
  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache2), paddingSize = _calculateNodeStyling.paddingSize, borderSize = _calculateNodeStyling.borderSize, boxSizing = _calculateNodeStyling.boxSizing, sizingStyle = _calculateNodeStyling.sizingStyle;
  hiddenTextarea.setAttribute("style", "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || "";
  var minHeight = void 0;
  var maxHeight = void 0;
  var overflowY;
  var height = hiddenTextarea.scrollHeight;
  if (boxSizing === "border-box") {
    height += borderSize;
  } else if (boxSizing === "content-box") {
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    hiddenTextarea.value = " ";
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === "border-box") {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === "border-box") {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? "" : "hidden";
      height = Math.min(maxHeight, height);
    }
  }
  var style2 = {
    height,
    overflowY,
    resize: "none"
  };
  if (minHeight) {
    style2.minHeight = minHeight;
  }
  if (maxHeight) {
    style2.maxHeight = maxHeight;
  }
  return style2;
}
var _excluded$3 = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"];
var RESIZE_START = 0;
var RESIZE_MEASURING = 1;
var RESIZE_STABLE = 2;
var ResizableTextArea = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var _ref = props, prefixCls = _ref.prefixCls;
  _ref.onPressEnter;
  var defaultValue = _ref.defaultValue, value = _ref.value, autoSize = _ref.autoSize, onResize2 = _ref.onResize, className = _ref.className, style2 = _ref.style, disabled = _ref.disabled, onChange = _ref.onChange;
  _ref.onInternalAutoSize;
  var restProps = _objectWithoutProperties(_ref, _excluded$3);
  var _useMergedState = useMergedState(defaultValue, {
    value,
    postState: function postState(val) {
      return val !== null && val !== void 0 ? val : "";
    }
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), mergedValue = _useMergedState2[0], setMergedValue = _useMergedState2[1];
  var onInternalChange = function onInternalChange2(event) {
    setMergedValue(event.target.value);
    onChange === null || onChange === void 0 || onChange(event);
  };
  var textareaRef = reactExports.useRef();
  reactExports.useImperativeHandle(ref, function() {
    return {
      textArea: textareaRef.current
    };
  });
  var _React$useMemo = reactExports.useMemo(function() {
    if (autoSize && _typeof(autoSize) === "object") {
      return [autoSize.minRows, autoSize.maxRows];
    }
    return [];
  }, [autoSize]), _React$useMemo2 = _slicedToArray(_React$useMemo, 2), minRows = _React$useMemo2[0], maxRows = _React$useMemo2[1];
  var needAutoSize = !!autoSize;
  var fixFirefoxAutoScroll = function fixFirefoxAutoScroll2() {
    try {
      if (document.activeElement === textareaRef.current) {
        var _textareaRef$current = textareaRef.current, selectionStart = _textareaRef$current.selectionStart, selectionEnd = _textareaRef$current.selectionEnd, scrollTop = _textareaRef$current.scrollTop;
        textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
        textareaRef.current.scrollTop = scrollTop;
      }
    } catch (e2) {
    }
  };
  var _React$useState = reactExports.useState(RESIZE_STABLE), _React$useState2 = _slicedToArray(_React$useState, 2), resizeState = _React$useState2[0], setResizeState = _React$useState2[1];
  var _React$useState3 = reactExports.useState(), _React$useState4 = _slicedToArray(_React$useState3, 2), autoSizeStyle = _React$useState4[0], setAutoSizeStyle = _React$useState4[1];
  var startResize = function startResize2() {
    setResizeState(RESIZE_START);
  };
  useLayoutEffect$1(function() {
    if (needAutoSize) {
      startResize();
    }
  }, [value, minRows, maxRows, needAutoSize]);
  useLayoutEffect$1(function() {
    if (resizeState === RESIZE_START) {
      setResizeState(RESIZE_MEASURING);
    } else if (resizeState === RESIZE_MEASURING) {
      var textareaStyles = calculateAutoSizeStyle(textareaRef.current, false, minRows, maxRows);
      setResizeState(RESIZE_STABLE);
      setAutoSizeStyle(textareaStyles);
    } else {
      fixFirefoxAutoScroll();
    }
  }, [resizeState]);
  var resizeRafRef = reactExports.useRef();
  var cleanRaf = function cleanRaf2() {
    wrapperRaf.cancel(resizeRafRef.current);
  };
  var onInternalResize = function onInternalResize2(size) {
    if (resizeState === RESIZE_STABLE) {
      onResize2 === null || onResize2 === void 0 || onResize2(size);
      if (autoSize) {
        cleanRaf();
        resizeRafRef.current = wrapperRaf(function() {
          startResize();
        });
      }
    }
  };
  reactExports.useEffect(function() {
    return cleanRaf;
  }, []);
  var mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
  var mergedStyle = _objectSpread2(_objectSpread2({}, style2), mergedAutoSizeStyle);
  if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
    mergedStyle.overflowY = "hidden";
    mergedStyle.overflowX = "hidden";
  }
  return /* @__PURE__ */ reactExports.createElement(RefResizeObserver, {
    onResize: onInternalResize,
    disabled: !(autoSize || onResize2)
  }, /* @__PURE__ */ reactExports.createElement("textarea", _extends$1({}, restProps, {
    ref: textareaRef,
    style: mergedStyle,
    className: classNames(prefixCls, className, _defineProperty({}, "".concat(prefixCls, "-disabled"), disabled)),
    disabled,
    value: mergedValue,
    onChange: onInternalChange
  })));
});
var _excluded$2 = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "classes", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize"];
var TextArea$2 = /* @__PURE__ */ React.forwardRef(function(_ref, ref) {
  var _countConfig$max, _clsx;
  var defaultValue = _ref.defaultValue, customValue = _ref.value, onFocus = _ref.onFocus, onBlur = _ref.onBlur, onChange = _ref.onChange, allowClear = _ref.allowClear, maxLength = _ref.maxLength, onCompositionStart = _ref.onCompositionStart, onCompositionEnd = _ref.onCompositionEnd, suffix = _ref.suffix, _ref$prefixCls = _ref.prefixCls, prefixCls = _ref$prefixCls === void 0 ? "rc-textarea" : _ref$prefixCls, classes = _ref.classes, showCount = _ref.showCount, count = _ref.count, className = _ref.className, style2 = _ref.style, disabled = _ref.disabled, hidden = _ref.hidden, classNames$1 = _ref.classNames, styles = _ref.styles, onResize2 = _ref.onResize, rest = _objectWithoutProperties(_ref, _excluded$2);
  var _useMergedState = useMergedState(defaultValue, {
    value: customValue,
    defaultValue
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), value = _useMergedState2[0], setValue = _useMergedState2[1];
  var formatValue = value === void 0 || value === null ? "" : String(value);
  var _React$useState = React.useState(false), _React$useState2 = _slicedToArray(_React$useState, 2), focused = _React$useState2[0], setFocused = _React$useState2[1];
  var compositionRef = React.useRef(false);
  var _React$useState3 = React.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), textareaResized = _React$useState4[0], setTextareaResized = _React$useState4[1];
  var resizableTextAreaRef = reactExports.useRef(null);
  var getTextArea = function getTextArea2() {
    var _resizableTextAreaRef;
    return (_resizableTextAreaRef = resizableTextAreaRef.current) === null || _resizableTextAreaRef === void 0 ? void 0 : _resizableTextAreaRef.textArea;
  };
  var focus = function focus2() {
    getTextArea().focus();
  };
  reactExports.useImperativeHandle(ref, function() {
    return {
      resizableTextArea: resizableTextAreaRef.current,
      focus,
      blur: function blur() {
        getTextArea().blur();
      }
    };
  });
  reactExports.useEffect(function() {
    setFocused(function(prev2) {
      return !disabled && prev2;
    });
  }, [disabled]);
  var _React$useState5 = React.useState(null), _React$useState6 = _slicedToArray(_React$useState5, 2), selection = _React$useState6[0], setSelection = _React$useState6[1];
  React.useEffect(function() {
    if (selection) {
      var _getTextArea;
      (_getTextArea = getTextArea()).setSelectionRange.apply(_getTextArea, _toConsumableArray(selection));
    }
  }, [selection]);
  var countConfig = useCount(count, showCount);
  var mergedMax = (_countConfig$max = countConfig.max) !== null && _countConfig$max !== void 0 ? _countConfig$max : maxLength;
  var hasMaxLength = Number(mergedMax) > 0;
  var valueLength = countConfig.strategy(formatValue);
  var isOutOfRange = !!mergedMax && valueLength > mergedMax;
  var triggerChange = function triggerChange2(e2, currentValue) {
    var cutValue = currentValue;
    if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
      cutValue = countConfig.exceedFormatter(currentValue, {
        max: countConfig.max
      });
      if (currentValue !== cutValue) {
        setSelection([getTextArea().selectionStart || 0, getTextArea().selectionEnd || 0]);
      }
    }
    setValue(cutValue);
    resolveOnChange(e2.currentTarget, e2, onChange, cutValue);
  };
  var onInternalCompositionStart = function onInternalCompositionStart2(e2) {
    compositionRef.current = true;
    onCompositionStart === null || onCompositionStart === void 0 || onCompositionStart(e2);
  };
  var onInternalCompositionEnd = function onInternalCompositionEnd2(e2) {
    compositionRef.current = false;
    triggerChange(e2, e2.currentTarget.value);
    onCompositionEnd === null || onCompositionEnd === void 0 || onCompositionEnd(e2);
  };
  var onInternalChange = function onInternalChange2(e2) {
    triggerChange(e2, e2.target.value);
  };
  var handleKeyDown = function handleKeyDown2(e2) {
    var onPressEnter = rest.onPressEnter, onKeyDown = rest.onKeyDown;
    if (e2.key === "Enter" && onPressEnter) {
      onPressEnter(e2);
    }
    onKeyDown === null || onKeyDown === void 0 || onKeyDown(e2);
  };
  var handleFocus = function handleFocus2(e2) {
    setFocused(true);
    onFocus === null || onFocus === void 0 || onFocus(e2);
  };
  var handleBlur = function handleBlur2(e2) {
    setFocused(false);
    onBlur === null || onBlur === void 0 || onBlur(e2);
  };
  var handleReset = function handleReset2(e2) {
    setValue("");
    focus();
    resolveOnChange(getTextArea(), e2, onChange);
  };
  var suffixNode = suffix;
  var dataCount;
  if (countConfig.show) {
    if (countConfig.showFormatter) {
      dataCount = countConfig.showFormatter({
        value: formatValue,
        count: valueLength,
        maxLength: mergedMax
      });
    } else {
      dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(mergedMax) : "");
    }
    suffixNode = /* @__PURE__ */ React.createElement(React.Fragment, null, suffixNode, /* @__PURE__ */ React.createElement("span", {
      className: classNames("".concat(prefixCls, "-data-count"), classNames$1 === null || classNames$1 === void 0 ? void 0 : classNames$1.count),
      style: styles === null || styles === void 0 ? void 0 : styles.count
    }, dataCount));
  }
  var handleResize = function handleResize2(size) {
    var _getTextArea2;
    onResize2 === null || onResize2 === void 0 || onResize2(size);
    if ((_getTextArea2 = getTextArea()) !== null && _getTextArea2 !== void 0 && _getTextArea2.style.height) {
      setTextareaResized(true);
    }
  };
  var isPureTextArea = !rest.autoSize && !showCount && !allowClear;
  var textarea = /* @__PURE__ */ React.createElement(BaseInput, {
    value: formatValue,
    allowClear,
    handleReset,
    suffix: suffixNode,
    prefixCls,
    classes: {
      affixWrapper: classNames(classes === null || classes === void 0 ? void 0 : classes.affixWrapper, (_clsx = {}, _defineProperty(_clsx, "".concat(prefixCls, "-show-count"), showCount), _defineProperty(_clsx, "".concat(prefixCls, "-textarea-allow-clear"), allowClear), _clsx))
    },
    disabled,
    focused,
    className: classNames(className, isOutOfRange && "".concat(prefixCls, "-out-of-range")),
    style: _objectSpread2(_objectSpread2({}, style2), textareaResized && !isPureTextArea ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof dataCount === "string" ? dataCount : void 0
      }
    },
    hidden,
    inputElement: /* @__PURE__ */ React.createElement(ResizableTextArea, _extends$1({}, rest, {
      maxLength,
      onKeyDown: handleKeyDown,
      onChange: onInternalChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onCompositionStart: onInternalCompositionStart,
      onCompositionEnd: onInternalCompositionEnd,
      className: classNames(classNames$1 === null || classNames$1 === void 0 ? void 0 : classNames$1.textarea),
      style: _objectSpread2(_objectSpread2({}, styles === null || styles === void 0 ? void 0 : styles.textarea), {}, {
        resize: style2 === null || style2 === void 0 ? void 0 : style2.resize
      }),
      disabled,
      prefixCls,
      onResize: handleResize,
      ref: resizableTextAreaRef
    }))
  });
  return textarea;
});
var __rest = function(s, e2) {
  var t2 = {};
  for (var p2 in s)
    if (Object.prototype.hasOwnProperty.call(s, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
      if (e2.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
        t2[p2[i]] = s[p2[i]];
    }
  return t2;
};
const TextArea = /* @__PURE__ */ reactExports.forwardRef((props, ref) => {
  var _a;
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    size: customizeSize,
    disabled: customDisabled,
    status: customStatus,
    allowClear,
    classNames: classes,
    rootClassName,
    className
  } = props, rest = __rest(props, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className"]);
  const {
    getPrefixCls,
    direction
  } = reactExports.useContext(ConfigContext);
  const mergedSize = useSize$1(customizeSize);
  const disabled = reactExports.useContext(DisabledContext$1);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = reactExports.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const innerRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, () => {
    var _a2;
    return {
      resizableTextArea: (_a2 = innerRef.current) === null || _a2 === void 0 ? void 0 : _a2.resizableTextArea,
      focus: (option2) => {
        var _a3, _b;
        triggerFocus((_b = (_a3 = innerRef.current) === null || _a3 === void 0 ? void 0 : _a3.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, option2);
      },
      blur: () => {
        var _a3;
        return (_a3 = innerRef.current) === null || _a3 === void 0 ? void 0 : _a3.blur();
      }
    };
  });
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  let mergedAllowClear;
  if (typeof allowClear === "object" && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: /* @__PURE__ */ reactExports.createElement(CloseCircleFilled$1, null)
    };
  }
  const cssVarCls = useCSSVarCls$1(prefixCls);
  const [wrapCSSVar, hashId] = useStyle(prefixCls, cssVarCls);
  return wrapCSSVar(/* @__PURE__ */ reactExports.createElement(TextArea$2, Object.assign({}, rest, {
    disabled: mergedDisabled,
    allowClear: mergedAllowClear,
    className: classNames(cssVarCls, className, rootClassName),
    classes: {
      affixWrapper: classNames(`${prefixCls}-textarea-affix-wrapper`, {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-textarea-show-count`]: props.showCount || ((_a = props.count) === null || _a === void 0 ? void 0 : _a.show)
      }, getStatusClassNames(`${prefixCls}-affix-wrapper`, mergedStatus), hashId)
    },
    classNames: Object.assign(Object.assign({}, classes), {
      textarea: classNames({
        [`${prefixCls}-borderless`]: !bordered,
        [`${prefixCls}-sm`]: mergedSize === "small",
        [`${prefixCls}-lg`]: mergedSize === "large"
      }, getStatusClassNames(prefixCls, mergedStatus), hashId, classes === null || classes === void 0 ? void 0 : classes.textarea)
    }),
    prefixCls,
    suffix: hasFeedback && /* @__PURE__ */ reactExports.createElement("span", {
      className: `${prefixCls}-textarea-suffix`
    }, feedbackIcon),
    ref: innerRef
  })));
});
const TextArea$1 = TextArea;
const Input2 = InternalInput;
Input2.Group = Group$1;
Input2.Search = Search$1;
Input2.TextArea = TextArea$1;
Input2.Password = Password$1;
const Input$1 = Input2;
var IconContext = /* @__PURE__ */ reactExports.createContext({});
const Context = IconContext;
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(_ref) {
  var r = _ref.r, g2 = _ref.g, b2 = _ref.b;
  var hsv = rgbToHsv(r, g2, b2);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r = _ref2.r, g2 = _ref2.g, b2 = _ref2.b;
  return "#".concat(rgbToHex(r, g2, b2, false));
}
function mix(rgb1, rgb2, amount) {
  var p2 = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
    g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
    b: (rgb2.b - rgb1.b) * p2 + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate$1(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref3) {
      var index2 = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index2]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key) {
  presetPalettes[key] = generate$1(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
  presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
function baseSlice$1(array4, start, end) {
  var index2 = -1, length2 = array4.length;
  if (start < 0) {
    start = -start > length2 ? 0 : length2 + start;
  }
  end = end > length2 ? length2 : end;
  if (end < 0) {
    end += length2;
  }
  length2 = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length2);
  while (++index2 < length2) {
    result[index2] = array4[index2 + start];
  }
  return result;
}
var _baseSlice = baseSlice$1;
var baseSlice = _baseSlice;
function castSlice$1(array4, start, end) {
  var length2 = array4.length;
  end = end === void 0 ? length2 : end;
  return !start && end >= length2 ? array4 : baseSlice(array4, start, end);
}
var _castSlice = castSlice$1;
var rsAstralRange$2 = "\\ud800-\\udfff", rsComboMarksRange$3 = "\\u0300-\\u036f", reComboHalfMarksRange$3 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$3 = "\\u20d0-\\u20ff", rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3, rsVarRange$2 = "\\ufe0e\\ufe0f";
var rsZWJ$2 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$2 + rsAstralRange$2 + rsComboRange$3 + rsVarRange$2 + "]");
function hasUnicode$2(string3) {
  return reHasUnicode.test(string3);
}
var _hasUnicode = hasUnicode$2;
function asciiToArray$1(string3) {
  return string3.split("");
}
var _asciiToArray = asciiToArray$1;
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$2 = "\\u0300-\\u036f", reComboHalfMarksRange$2 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$2 = "\\u20d0-\\u20ff", rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2, rsVarRange$1 = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange$1 + "]", rsCombo$2 = "[" + rsComboRange$2 + "]", rsFitz$1 = "\\ud83c[\\udffb-\\udfff]", rsModifier$1 = "(?:" + rsCombo$2 + "|" + rsFitz$1 + ")", rsNonAstral$1 = "[^" + rsAstralRange$1 + "]", rsRegional$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair$1 = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ$1 = "\\u200d";
var reOptMod$1 = rsModifier$1 + "?", rsOptVar$1 = "[" + rsVarRange$1 + "]?", rsOptJoin$1 = "(?:" + rsZWJ$1 + "(?:" + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsOptVar$1 + reOptMod$1 + ")*", rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1, rsSymbol = "(?:" + [rsNonAstral$1 + rsCombo$2 + "?", rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz$1 + "(?=" + rsFitz$1 + ")|" + rsSymbol + rsSeq$1, "g");
function unicodeToArray$1(string3) {
  return string3.match(reUnicode) || [];
}
var _unicodeToArray = unicodeToArray$1;
var asciiToArray = _asciiToArray, hasUnicode$1 = _hasUnicode, unicodeToArray = _unicodeToArray;
function stringToArray$1(string3) {
  return hasUnicode$1(string3) ? unicodeToArray(string3) : asciiToArray(string3);
}
var _stringToArray = stringToArray$1;
var castSlice = _castSlice, hasUnicode = _hasUnicode, stringToArray = _stringToArray, toString$3 = toString_1;
function createCaseFirst$1(methodName) {
  return function(string3) {
    string3 = toString$3(string3);
    var strSymbols = hasUnicode(string3) ? stringToArray(string3) : void 0;
    var chr = strSymbols ? strSymbols[0] : string3.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string3.slice(1);
    return chr[methodName]() + trailing;
  };
}
var _createCaseFirst = createCaseFirst$1;
var createCaseFirst = _createCaseFirst;
var upperFirst$1 = createCaseFirst("toUpperCase");
var upperFirst_1 = upperFirst$1;
var toString$2 = toString_1, upperFirst = upperFirst_1;
function capitalize$1(string3) {
  return upperFirst(toString$2(string3).toLowerCase());
}
var capitalize_1 = capitalize$1;
function arrayReduce$1(array4, iteratee, accumulator, initAccum) {
  var index2 = -1, length2 = array4 == null ? 0 : array4.length;
  if (initAccum && length2) {
    accumulator = array4[++index2];
  }
  while (++index2 < length2) {
    accumulator = iteratee(accumulator, array4[index2], index2, array4);
  }
  return accumulator;
}
var _arrayReduce = arrayReduce$1;
function basePropertyOf$1(object4) {
  return function(key) {
    return object4 == null ? void 0 : object4[key];
  };
}
var _basePropertyOf = basePropertyOf$1;
var basePropertyOf = _basePropertyOf;
var deburredLetters = {
  // Latin-1 Supplement block.
  "À": "A",
  "Á": "A",
  "Â": "A",
  "Ã": "A",
  "Ä": "A",
  "Å": "A",
  "à": "a",
  "á": "a",
  "â": "a",
  "ã": "a",
  "ä": "a",
  "å": "a",
  "Ç": "C",
  "ç": "c",
  "Ð": "D",
  "ð": "d",
  "È": "E",
  "É": "E",
  "Ê": "E",
  "Ë": "E",
  "è": "e",
  "é": "e",
  "ê": "e",
  "ë": "e",
  "Ì": "I",
  "Í": "I",
  "Î": "I",
  "Ï": "I",
  "ì": "i",
  "í": "i",
  "î": "i",
  "ï": "i",
  "Ñ": "N",
  "ñ": "n",
  "Ò": "O",
  "Ó": "O",
  "Ô": "O",
  "Õ": "O",
  "Ö": "O",
  "Ø": "O",
  "ò": "o",
  "ó": "o",
  "ô": "o",
  "õ": "o",
  "ö": "o",
  "ø": "o",
  "Ù": "U",
  "Ú": "U",
  "Û": "U",
  "Ü": "U",
  "ù": "u",
  "ú": "u",
  "û": "u",
  "ü": "u",
  "Ý": "Y",
  "ý": "y",
  "ÿ": "y",
  "Æ": "Ae",
  "æ": "ae",
  "Þ": "Th",
  "þ": "th",
  "ß": "ss",
  // Latin Extended-A block.
  "Ā": "A",
  "Ă": "A",
  "Ą": "A",
  "ā": "a",
  "ă": "a",
  "ą": "a",
  "Ć": "C",
  "Ĉ": "C",
  "Ċ": "C",
  "Č": "C",
  "ć": "c",
  "ĉ": "c",
  "ċ": "c",
  "č": "c",
  "Ď": "D",
  "Đ": "D",
  "ď": "d",
  "đ": "d",
  "Ē": "E",
  "Ĕ": "E",
  "Ė": "E",
  "Ę": "E",
  "Ě": "E",
  "ē": "e",
  "ĕ": "e",
  "ė": "e",
  "ę": "e",
  "ě": "e",
  "Ĝ": "G",
  "Ğ": "G",
  "Ġ": "G",
  "Ģ": "G",
  "ĝ": "g",
  "ğ": "g",
  "ġ": "g",
  "ģ": "g",
  "Ĥ": "H",
  "Ħ": "H",
  "ĥ": "h",
  "ħ": "h",
  "Ĩ": "I",
  "Ī": "I",
  "Ĭ": "I",
  "Į": "I",
  "İ": "I",
  "ĩ": "i",
  "ī": "i",
  "ĭ": "i",
  "į": "i",
  "ı": "i",
  "Ĵ": "J",
  "ĵ": "j",
  "Ķ": "K",
  "ķ": "k",
  "ĸ": "k",
  "Ĺ": "L",
  "Ļ": "L",
  "Ľ": "L",
  "Ŀ": "L",
  "Ł": "L",
  "ĺ": "l",
  "ļ": "l",
  "ľ": "l",
  "ŀ": "l",
  "ł": "l",
  "Ń": "N",
  "Ņ": "N",
  "Ň": "N",
  "Ŋ": "N",
  "ń": "n",
  "ņ": "n",
  "ň": "n",
  "ŋ": "n",
  "Ō": "O",
  "Ŏ": "O",
  "Ő": "O",
  "ō": "o",
  "ŏ": "o",
  "ő": "o",
  "Ŕ": "R",
  "Ŗ": "R",
  "Ř": "R",
  "ŕ": "r",
  "ŗ": "r",
  "ř": "r",
  "Ś": "S",
  "Ŝ": "S",
  "Ş": "S",
  "Š": "S",
  "ś": "s",
  "ŝ": "s",
  "ş": "s",
  "š": "s",
  "Ţ": "T",
  "Ť": "T",
  "Ŧ": "T",
  "ţ": "t",
  "ť": "t",
  "ŧ": "t",
  "Ũ": "U",
  "Ū": "U",
  "Ŭ": "U",
  "Ů": "U",
  "Ű": "U",
  "Ų": "U",
  "ũ": "u",
  "ū": "u",
  "ŭ": "u",
  "ů": "u",
  "ű": "u",
  "ų": "u",
  "Ŵ": "W",
  "ŵ": "w",
  "Ŷ": "Y",
  "ŷ": "y",
  "Ÿ": "Y",
  "Ź": "Z",
  "Ż": "Z",
  "Ž": "Z",
  "ź": "z",
  "ż": "z",
  "ž": "z",
  "Ĳ": "IJ",
  "ĳ": "ij",
  "Œ": "Oe",
  "œ": "oe",
  "ŉ": "'n",
  "ſ": "s"
};
var deburrLetter$1 = basePropertyOf(deburredLetters);
var _deburrLetter = deburrLetter$1;
var deburrLetter = _deburrLetter, toString$1 = toString_1;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
var rsCombo$1 = "[" + rsComboRange$1 + "]";
var reComboMark = RegExp(rsCombo$1, "g");
function deburr$1(string3) {
  string3 = toString$1(string3);
  return string3 && string3.replace(reLatin, deburrLetter).replace(reComboMark, "");
}
var deburr_1 = deburr$1;
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords$1(string3) {
  return string3.match(reAsciiWord) || [];
}
var _asciiWords = asciiWords$1;
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord$1(string3) {
  return reHasUnicodeWord.test(string3);
}
var _hasUnicodeWord = hasUnicodeWord$1;
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos$1 = "['’]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
  rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
  rsUpper + "+" + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join("|"), "g");
function unicodeWords$1(string3) {
  return string3.match(reUnicodeWord) || [];
}
var _unicodeWords = unicodeWords$1;
var asciiWords = _asciiWords, hasUnicodeWord = _hasUnicodeWord, toString = toString_1, unicodeWords = _unicodeWords;
function words$1(string3, pattern4, guard) {
  string3 = toString(string3);
  pattern4 = guard ? void 0 : pattern4;
  if (pattern4 === void 0) {
    return hasUnicodeWord(string3) ? unicodeWords(string3) : asciiWords(string3);
  }
  return string3.match(pattern4) || [];
}
var words_1 = words$1;
var arrayReduce = _arrayReduce, deburr = deburr_1, words = words_1;
var rsApos = "['’]";
var reApos = RegExp(rsApos, "g");
function createCompounder$1(callback) {
  return function(string3) {
    return arrayReduce(words(deburr(string3).replace(reApos, "")), callback, "");
  };
}
var _createCompounder = createCompounder$1;
var capitalize = capitalize_1, createCompounder = _createCompounder;
var camelCase = createCompounder(function(result, word, index2) {
  word = word.toLowerCase();
  return result + (index2 ? capitalize(word) : word);
});
var camelCase_1 = camelCase;
const camelCase$1 = /* @__PURE__ */ getDefaultExportFromCjs(camelCase_1);
function warning(valid, message) {
  warningOnce(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(attrs).reduce(function(acc, key) {
    var val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase$1(key)] = val;
    }
    return acc;
  }, {});
}
function generate(node2, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2({
      key
    }, normalizeAttrs(node2.attrs)), (node2.children || []).map(function(child, index2) {
      return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index2));
    }));
  }
  return /* @__PURE__ */ React.createElement(node2.tag, _objectSpread2(_objectSpread2({
    key
  }, normalizeAttrs(node2.attrs)), rootProps), (node2.children || []).map(function(child, index2) {
    return generate(child, "".concat(key, "-").concat(node2.tag, "-").concat(index2));
  }));
}
function getSecondaryColor(primaryColor) {
  return generate$1(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles2 = function useInsertStyles3() {
  var styleStr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : iconStyles;
  var _useContext = reactExports.useContext(Context), csp = _useContext.csp;
  reactExports.useEffect(function() {
    updateCSS(styleStr, "@ant-design-icons", {
      prepend: true,
      csp
    });
  }, []);
};
var _excluded$1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}
var IconBase2 = function IconBase3(props) {
  var icon = props.icon, className = props.className, onClick = props.onClick, style2 = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded$1);
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles2();
  warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === "function") {
    target = _objectSpread2(_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate(target.icon, "svg-".concat(target.name), _objectSpread2({
    className,
    onClick,
    style: style2,
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, restProps));
};
IconBase2.displayName = "IconReact";
IconBase2.getTwoToneColors = getTwoToneColors;
IconBase2.setTwoToneColors = setTwoToneColors;
const ReactIcon = IconBase2;
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return ReactIcon.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors = ReactIcon.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}
var _excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
setTwoToneColor("#1890ff");
var Icon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var _classNames;
  var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded);
  var _React$useContext = reactExports.useContext(Context), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
  var classString = classNames(rootClassName, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), _classNames), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return /* @__PURE__ */ reactExports.createElement("span", _objectSpread2(_objectSpread2({
    role: "img",
    "aria-label": icon.name
  }, restProps), {}, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), /* @__PURE__ */ reactExports.createElement(ReactIcon, {
    icon,
    primaryColor,
    secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
const AntdIcon = Icon;
const appName$1 = "数据服务API";
const appDescription$1 = "一款无与伦比的数据服务API扩展，可以在Chrome上拷贝内容进行查询。";
const add$1 = "添加";
const addApi$1 = "添加API";
const addCommonParameter$1 = "添加共同参数";
const addParameter$1 = "添加参数";
const apiId$1 = "API ID";
const apiInfo$1 = "API信息";
const apiMethod$1 = "API方法";
const apiName$1 = "API名称";
const apiParameters$1 = "参数值";
const apiPath$1 = "API路径";
const cancel$1 = "取消";
const commonParameters$1 = "共同参数";
const contentType$1 = "Content Type";
const description$1 = "描述";
const displayConfigs$1 = "显示设定";
const displaySheetDataKey$1 = "数据撷取字段";
const edit$1 = "编辑";
const editParameters$1 = "编辑参数";
const editedSubmit = "已编辑";
const errorOccur$1 = "发生错误";
const loading$1 = "载入中";
const ok$1 = "确定";
const openPopup$1 = "打开插件";
const operation$1 = "操作";
const parameterName$1 = "参数名";
const parameterNameRequired$1 = "参数名必填";
const parameterValue$1 = "参数值";
const plsAddParameters$1 = "请添加参数";
const plsFillInAkInfo$1 = "请输入AK信息以同步API信息";
const plsFillParameter$1 = "请输入参数";
const query$1 = "请求";
const queryResult$1 = "结果";
const reloading$1 = "重新载入";
const remove$1 = "移除";
const removeApi$1 = "移除API";
const removeApiConfirm$1 = "您确定要移除此API: {apiId} ?";
const requestHeader$1 = "Request Header";
const requestParameters$1 = "请求参数";
const save$1 = "保存";
const saveSuccess$1 = "保存成功";
const submit$1 = "送出";
const syncApiFromAlibabaCloud$1 = "从阿里云同步";
const options = "设定";
const zhCN = {
  appName: appName$1,
  appDescription: appDescription$1,
  add: add$1,
  addApi: addApi$1,
  addCommonParameter: addCommonParameter$1,
  addParameter: addParameter$1,
  apiId: apiId$1,
  apiInfo: apiInfo$1,
  apiMethod: apiMethod$1,
  apiName: apiName$1,
  apiParameters: apiParameters$1,
  apiPath: apiPath$1,
  cancel: cancel$1,
  commonParameters: commonParameters$1,
  contentType: contentType$1,
  description: description$1,
  displayConfigs: displayConfigs$1,
  displaySheetDataKey: displaySheetDataKey$1,
  edit: edit$1,
  editParameters: editParameters$1,
  editedSubmit,
  errorOccur: errorOccur$1,
  loading: loading$1,
  ok: ok$1,
  openPopup: openPopup$1,
  operation: operation$1,
  parameterName: parameterName$1,
  parameterNameRequired: parameterNameRequired$1,
  parameterValue: parameterValue$1,
  plsAddParameters: plsAddParameters$1,
  plsFillInAkInfo: plsFillInAkInfo$1,
  plsFillParameter: plsFillParameter$1,
  query: query$1,
  queryResult: queryResult$1,
  reloading: reloading$1,
  remove: remove$1,
  removeApi: removeApi$1,
  removeApiConfirm: removeApiConfirm$1,
  requestHeader: requestHeader$1,
  requestParameters: requestParameters$1,
  save: save$1,
  saveSuccess: saveSuccess$1,
  submit: submit$1,
  syncApiFromAlibabaCloud: syncApiFromAlibabaCloud$1,
  options
};
const appName = "DataService API";
const appDescription = "A extraordinary data service API chrome extension, let you request a query by copying value in Chrome browser.";
const add = "Add";
const addApi = "Add API";
const addCommonParameter = "Add Common Parameter";
const addParameter = "Add Parameter";
const apiId = "API ID";
const apiInfo = "API Info";
const apiMethod = "API Method";
const apiName = "API Name";
const apiParameters = "Parameters";
const apiPath = "API Path";
const cancel = "Cancel";
const commonParameters = "Common Parameters";
const contentType = "Content Type";
const description = "Description";
const displayConfigs = "Display";
const displaySheetDataKey = "Specific Target";
const edit = "Edit";
const editParameters = "Edit Parameter";
const edited_submit = "Edited";
const errorOccur = "Error Occurred";
const loading = "Loading";
const ok = "Ok";
const openPopup = "Open Popup";
const operation = "Operation";
const parameterName = "Parameter Name";
const parameterNameRequired = "Parameter Name is required";
const parameterValue = "Parameter Value";
const plsAddParameters = "Please add parameters";
const plsFillInAkInfo = "Please input AK info for syncing APIs info";
const plsFillParameter = "Please fill in parameter fields";
const query = "Query";
const queryResult = "Result";
const reloading = "Reloading";
const remove = "Remove";
const removeApi = "Remove API";
const removeApiConfirm = "Are you sure to remove this API: {apiId} ?";
const requestHeader = "Request Header";
const requestParameters = "Request Parameters";
const save = "Save";
const saveSuccess = "Save Success";
const submit = "Submit";
const syncApiFromAlibabaCloud = "Sync From Alibaba Cloud";
const option = "Options";
const enUS = {
  appName,
  appDescription,
  add,
  addApi,
  addCommonParameter,
  addParameter,
  apiId,
  apiInfo,
  apiMethod,
  apiName,
  apiParameters,
  apiPath,
  cancel,
  commonParameters,
  contentType,
  description,
  displayConfigs,
  displaySheetDataKey,
  edit,
  editParameters,
  edited_submit,
  errorOccur,
  loading,
  ok,
  openPopup,
  operation,
  parameterName,
  parameterNameRequired,
  parameterValue,
  plsAddParameters,
  plsFillInAkInfo,
  plsFillParameter,
  query,
  queryResult,
  reloading,
  remove,
  removeApi,
  removeApiConfirm,
  requestHeader,
  requestParameters,
  save,
  saveSuccess,
  submit,
  syncApiFromAlibabaCloud,
  option
};
const LOCALE_DATA = {
  "en-US": enUS,
  "zh-CN": zhCN
};
const LOCALES_LIST = [
  {
    label: "English",
    value: "en-US"
  },
  {
    label: "简体中文",
    value: "zh-CN"
  }
];
const useIntl = () => {
  const [initDone, setInitDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    initializeIntl();
  }, []);
  const initializeIntl = () => {
    let currentLocale = defaultInstance.determineLocale({
      urlLocaleKey: "lang",
      // Example: https://fe-tool.com/react-intl-universal?lang=en-US
      cookieLocaleKey: "lang"
      // Example: "lang=en-US" in cookie
    });
    if (!LOCALES_LIST.some((item) => item.value === currentLocale)) {
      currentLocale = "zh-CN";
    }
    setCurrentLocale(currentLocale);
    setInitDone(true);
  };
  const setCurrentLocale = (currentLocale) => {
    try {
      defaultInstance.init({
        // debug: true,
        currentLocale,
        locales: LOCALE_DATA,
        warningHandler: () => {
        }
      });
    } catch (e2) {
    }
  };
  return { initDone };
};
export {
  omit as $,
  AntdIcon$1 as A,
  Button$1 as B,
  CSSMotionList as C,
  unit$1 as D,
  useMergedState as E,
  isValidElement as F,
  isFragment as G,
  useZIndex as H,
  getTransitionName as I,
  cloneElement as J,
  KeyCode as K,
  LoadingOutlined$1 as L,
  zIndexContext$1 as M,
  NoCompactStyle as N,
  composeRef as O,
  supportRef as P,
  useMemo as Q,
  isEqual as R,
  isVisible as S,
  Trigger as T,
  warningOnce as U,
  useComposeRef as V,
  _inherits as W,
  _createSuper as X,
  _classCallCheck as Y,
  _createClass as Z,
  _extends$1 as _,
  _slicedToArray as a,
  _freeGlobal as a$,
  ForwardOverflow as a0,
  toArray$3 as a1,
  CSSMotion as a2,
  supportNodeRef as a3,
  genFocusOutline as a4,
  textEllipsis as a5,
  initSlideMotion as a6,
  clearFix as a7,
  TinyColor as a8,
  resetIcon as a9,
  genBasicInputStyle as aA,
  genSubStyleComponent as aB,
  useLocale$1 as aC,
  locale$3 as aD,
  render as aE,
  ConfigProvider as aF,
  globalConfig as aG,
  defaultLocale as aH,
  get as aI,
  fillRef as aJ,
  getScrollBarSize as aK,
  getTargetScrollBarSize as aL,
  List as aM,
  _assertThisInitialized as aN,
  DownOutlined$1 as aO,
  Input$1 as aP,
  SearchOutlined$1 as aQ,
  Empty$1 as aR,
  DefaultRenderEmpty$1 as aS,
  AntdIcon as aT,
  CloseOutlinedSvg as aU,
  defaultInstance as aV,
  useStorage as aW,
  logo as aX,
  _baseGetTag as aY,
  _root as aZ,
  isObjectLike_1 as a_,
  initCollapseMotion as aa,
  slideUpIn as ab,
  slideDownIn as ac,
  slideUpOut as ad,
  slideDownOut as ae,
  genFocusStyle as af,
  initMoveMotion as ag,
  genPurePanel as ah,
  FormItemInputContext as ai,
  DisabledContext$1 as aj,
  Wave$1 as ak,
  TARGET_CLS as al,
  useSize$1 as am,
  pickAttrs as an,
  useLayoutUpdateEffect as ao,
  RefResizeObserver as ap,
  isMobile as aq,
  Portal as ar,
  NoFormStyle as as,
  Compact as at,
  useStyle$3 as au,
  useCompactItemContext as av,
  Select$1 as aw,
  initComponentToken as ax,
  initInputToken as ay,
  genInputSmallStyle as az,
  _defineProperty as b,
  isArray_1 as b0,
  _Symbol as b1,
  isSymbol_1 as b2,
  toString_1 as b3,
  classnamesExports as b4,
  isArray$2 as b5,
  classNames as c,
  _typeof as d,
  _objectWithoutProperties as e,
  _objectSpread2 as f,
  _toConsumableArray as g,
  genStyleHooks as h,
  Keyframe as i,
  CONTAINER_MAX_OFFSET as j,
  ConfigContext as k,
  useCSSVarCls$1 as l,
  merge as m,
  CloseCircleFilled$1 as n,
  devUseWarning as o,
  CloseOutlined$1 as p,
  useSafeState as q,
  resetComponent as r,
  convertLegacyProps as s,
  canUseDom as t,
  useIntl as u,
  useEvent as v,
  wrapperRaf as w,
  initMotion as x,
  useToken as y,
  useLayoutEffect$1 as z
};
