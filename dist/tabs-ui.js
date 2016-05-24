'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _knockout = require('knockout');

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabsViewModel = function TabsViewModel(settings, componentInfo) {
    this.element = (0, _jquery2.default)(componentInfo.element);

    this.element.attr('role', 'tabpanel');
    this.element.on('click', 'tab-switcher a', onTabSwitcherClick);
};

TabsViewModel.prototype.dispose = function () {
    this.element.off('click', 'tab-switcher a', onTabSwitcherClick);
};

function onTabSwitcherClick(event) {
    (0, _jquery2.default)(event.delegateTarget).find('ul.nav.nav-tabs > li').each(function () {
        var $li = (0, _jquery2.default)(this);

        if ($li.children('a[href="' + event.target.hash + '"]').length) {
            $li.addClass('active');
        } else if ($li.hasClass('active')) {
            $li.removeClass('active');
        }
    });
}

exports.default = TabsViewModel;