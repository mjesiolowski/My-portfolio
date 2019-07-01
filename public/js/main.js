"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var portfolioProject = _toConsumableArray(document.querySelectorAll('.portfolio__project'));

portfolioProject.forEach(function (project) {
  return project.addEventListener('click', function (e) {
    if (window.innerWidth < 850 && e.target.nodeName != 'A') {
      var bcgChildren = _toConsumableArray(e.target.children);

      bcgChildren.forEach(function (child) {
        return child.classList.toggle('visibilityToggler');
      });
      e.target.classList.toggle('backgroundToggler');
    }
  });
});