/*global QUnit*/
import Controller from "cmd/sap/cc/ztype/controller/script.controller";

QUnit.module("script Controller");

QUnit.test("I should test the script controller", function (assert: Assert) {
	const oAppController = new Controller("script");
	oAppController.onInit();
	assert.ok(oAppController);
});