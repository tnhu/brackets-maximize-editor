/*jslint vars: true */
/*global $, define, brackets */

define(function (require, exports, module) {
  'use strict';

  var EXTENSION_ID = 'brackets-maximize-editor';
  var CommandManager = brackets.getModule('command/CommandManager');
  var Menus = brackets.getModule('command/Menus');

  var $mainView = $('.main-view');
  var className = 'maximize-editor';

  function handler() {
    $mainView.toggleClass(className);
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

  var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");
  ExtensionUtils.loadStyleSheet(module, 'main.css');

  menu.addMenuDivider();
  menu.addMenuItem(EXTENSION_ID, command);
  menu.addMenuDivider();
});
