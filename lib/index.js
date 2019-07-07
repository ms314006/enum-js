"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

const newEnum = descriptions => {
  if (Object.keys(descriptions).length === 0) {
    return {};
  }

  const result = {};
  Object.keys(descriptions).forEach(description => {
    result[result[description] = descriptions[description]] = description;
  });
  return Object.freeze(result);
};

var _default = newEnum;
exports.default = _default;