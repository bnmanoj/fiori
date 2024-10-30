/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsaps/zstudent/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
