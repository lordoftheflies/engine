QUnit.module('app.loadSceneHierarchy', {
    setup: function () {
        this.app = new pc.Application(document.createElement('canvas'));
    },

    teardown: function () {
        this.app.destroy()
    }
});

test('loadSceneHierarchy', function () {
    stop();
    var url = 'base/tests/test-assets/scenes/test-scene.json';
    this.app.loadSceneHierarchy(url, function (err, root) {
        start();
        ok(root);
        equal(root.name, 'Root');
    });
});

test('load two scenes', function () {
    stop();
    var url = 'base/tests/test-assets/scenes/test-scene.json';
    var url2 = 'base/tests/test-assets/scenes/test-scene-2.json';

    var count = 0;

    var app = this.app;
    function check () {
        if (count < 2) return;

        var children = app.root.children;

        equal(children.length, 2);

        children[0]
    }

    this.app.loadSceneHierarchy(url, function (err, root) {
        ok(root);
        equal(root.name, 'Root');
        count++;
        check();
    });

    this.app.loadSceneHierarchy(url2, function (err, root) {
        ok(root);
        equal(root.name, 'Root 2');
        count++;
        check();
    });
});
