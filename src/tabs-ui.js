define(['knockout', 'jquery'],
    function(ko, $) {
        'use strict';

        var TabsViewModel = function(settings, componentInfo) {
            this.element = $(componentInfo.element);

            this.element.attr('role', 'tabpanel');
            this.element.on('click', 'tab-switcher a', onTabSwitcherClick);
        };

        TabsViewModel.prototype.dispose = function() {
            this.element.off('click', 'tab-switcher a', onTabSwitcherClick);
        };

        function onTabSwitcherClick(event) {
            $(event.delegateTarget).find('ul.nav.nav-tabs > li').each(function() {
                var $li = $(this);

                if ($li.children('a[href="' + event.target.hash + '"]').length) {
                    $li.addClass('active');
                } else if ($li.hasClass('active')) {
                    $li.removeClass('active');
                }
            });
        }

        return TabsViewModel;
    });
