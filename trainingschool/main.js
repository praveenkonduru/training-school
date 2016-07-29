requirejs.config({
    baseUrl: './',
    paths: {
        trainingschool: 'src/js'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['src/__module']);