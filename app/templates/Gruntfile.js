module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.initConfig({
        jasmine: {
            taskName: {
                src: [
                   '*.js',
                   '!tests/spec/*spec.js',
                   'Gruntfile.js'
                ],
                options: {
                    specs: 'tests/spec/*.js',
                    template: 'tests/esri_amd.html',
                    keepRunner: true,
                    outfile: 'tests/_SpecRunner.html',
                    vendor: []
                }
            }
        }
    });

    grunt.registerTask("test", "jasmine");
};
