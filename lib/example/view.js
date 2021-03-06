"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _richTextarea = _interopRequireDefault(require("./richTextarea"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var View = function(properties) {
    /*#__PURE__*/ return React.createElement("div", {
        className: "view"
    }, /*#__PURE__*/ React.createElement(_richTextarea.default, {
        onChange: changeHandler,
        onScroll: scrollHandler,
        onFocus: focusHandler,
        onBlur: blurHandler,
        active: true
    }));
};
var _default = View;
exports.default = _default;
function changeHandler(event, element) {
    var contentChanged = element.hasContentChanged(), selectionChanged = element.hasSelectionChanged();
    console.log(contentChanged, selectionChanged);
}
function scrollHandler(event, element) {
    var scrollTop = element.getScrollTop(), scrollLeft = element.getScrollLeft();
    console.log(scrollTop, scrollLeft);
}
function focusHandler(event, element) {
    console.log("focus");
}
function blurHandler(event, element) {
    console.log("blur");
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSaWNoVGV4dGFyZWEgZnJvbSBcIi4vcmljaFRleHRhcmVhXCI7XG5cbmNvbnN0IFZpZXcgPSAocHJvcGVydGllcykgPT5cblxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdcIj5cbiAgICA8UmljaFRleHRhcmVhIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgb25TY3JvbGw9e3Njcm9sbEhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICBvbkZvY3VzPXtmb2N1c0hhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2JsdXJIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgYWN0aXZlXG4gICAgLz5cbiAgPC9kaXY+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVmlldztcblxuZnVuY3Rpb24gY2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICBjb25zdCBjb250ZW50Q2hhbmdlZCA9IGVsZW1lbnQuaGFzQ29udGVudENoYW5nZWQoKSxcbiAgICAgICAgc2VsZWN0aW9uQ2hhbmdlZCA9IGVsZW1lbnQuaGFzU2VsZWN0aW9uQ2hhbmdlZCgpO1xuXG4gIGNvbnNvbGUubG9nKGNvbnRlbnRDaGFuZ2VkLCBzZWxlY3Rpb25DaGFuZ2VkKVxufVxuXG5mdW5jdGlvbiBzY3JvbGxIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IGVsZW1lbnQuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgIHNjcm9sbExlZnQgPSBlbGVtZW50LmdldFNjcm9sbExlZnQoKTtcblxuICBjb25zb2xlLmxvZyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpXG59XG5cbmZ1bmN0aW9uIGZvY3VzSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICBjb25zb2xlLmxvZyhcImZvY3VzXCIpXG59XG5cbmZ1bmN0aW9uIGJsdXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gIGNvbnNvbGUubG9nKFwiYmx1clwiKVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWEsR0FBZ0IsQ0FBaEIsYUFBZ0I7Ozs7OztBQUV6QyxHQUFLLENBQUMsSUFBSSxZQUFJLFVBQVU7OENBRXJCLEdBQUc7UUFBQyxTQUFTLEdBQUMsSUFBTTt5Q0FKRSxhQUFnQjtRQUt2QixRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUUsYUFBYTtRQUN2QixPQUFPLEVBQUUsWUFBWTtRQUNyQixNQUFNLEVBQUUsV0FBVztRQUNuQixNQUFNLEVBQU4sSUFBTTs7O2VBTVQsSUFBSTs7U0FFVixhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3RDLEdBQUssQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixJQUMxQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CO0lBRXBELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGdCQUFnQjtBQUM5QyxDQUFDO1NBRVEsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUN0QyxHQUFLLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQ2hDLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYTtJQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVO0FBQ25DLENBQUM7U0FFUSxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsS0FBTztBQUNyQixDQUFDO1NBRVEsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUNwQyxPQUFPLENBQUMsR0FBRyxFQUFDLElBQU07QUFDcEIsQ0FBQyJ9