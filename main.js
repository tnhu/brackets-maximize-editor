/*jslint vars: true */
/*global $, document, define, brackets */

define(function (require, exports, module) {
  'use strict';

  var EXTENSION_ID = 'brackets-maximize-editor';
  var CommandManager = brackets.getModule('command/CommandManager');
  var Menus = brackets.getModule('command/Menus');
  var ExtensionUtils = brackets.getModule('utils/ExtensionUtils');

  var left, right;

  function handler() {
    var $content = $('.content');
    var firstPanel = $('#first-pane');
    var secondPanel = $('#second-pane');
    var active = 'active-pane';

    if ($('#sidebar').is(':hidden')) {
      $('#sidebar,#main-toolbar').show();

      if (secondPanel.length) {
        if (firstPanel.hasClass(active)) {
          firstPanel.width('50%');
          secondPanel.show();
        }
        else {
          secondPanel.width('auto');
          firstPanel.show();
        }
      }
      else {
        firstPanel.width('100%').show();
      }

      $content.css({ left: left, right: right });
    }
    else {
      $('#sidebar,#main-toolbar').hide();

      if (secondPanel.length) {
        if (firstPanel.hasClass(active)) {
          firstPanel.width('100%');
          secondPanel.hide();
        }
        else {
          secondPanel.width('100%');
          firstPanel.hide();
        }
      }
      else {
        firstPanel.width('100%');
      }

      left = $content.css('left');
      right = $content.css('right');
      $content.css({ left: 0, right: 0 });
    }
  }

  CommandManager.register('Maximize Editor', EXTENSION_ID, handler);

  var menu = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
  var command = [{
    key: "Ctrl-Shift-Enter",
    platform: "win"
    }, {
    key: "Cmd-Shift-Enter",
    platform: "mac"
  }];

  menu.addMenuDivider();
  menu.addMenuItem(EXTENSION_ID, command);
  menu.addMenuDivider();
});
