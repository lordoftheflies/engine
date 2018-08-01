window.test = QUnit.test.bind(QUnit);

// TODO Remove this function when we're no longer skipping any tests
QUnit.skip = function(testName) {
    console.warn("Skipping test '" + testName + "'");
};

// TODO should be able to remove this if we update QUnit
QUnit.dump = QUnit.jsDump;
