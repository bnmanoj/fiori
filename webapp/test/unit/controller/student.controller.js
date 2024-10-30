/*global QUnit*/

sap.ui.define([
	"comsaps/zstudent/controller/student.controller"
], function (Controller) {
	"use strict";

	QUnit.module("student Controller");

	QUnit.test("I should test the student controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
