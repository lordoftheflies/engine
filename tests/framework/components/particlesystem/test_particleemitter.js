module("pc.ParticleEmitter", {
    setup: function () {
        this.app = new pc.Application(document.createElement('canvas'));
    },

    teardown: function () {
        this.app.destroy();
    }
});



test('initialization with options', function () {
    var options = {
        numParticles: 100,
        rate2: 50
    };

    var pe = new pc.ParticleEmitter(this.app.graphicsDevice, options);

    strictEqual(pe.numParticles, 100);
    strictEqual(pe.rate, 1); // default
    strictEqual(pe.rate2, 50); // from options
});
