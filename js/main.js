var s,
    app = {

        settings: {
            textFadeSpeed: 2000 // How fast to rotate text on the homepage
        },
        init: function () {
            //Global settings
            s = this.settings;

            //initalize
            this.initalizers();
            this.backgroundVideo();
        },

        initalizers: function () {

            //initalize onepage scroll
            // $(".main").onepage_scroll({
            //     sectionContainer: "section"
            // });

            // Wait until video has loaded before fading it in.
            $(window).load(function () {
                $('#big-video-wrap').show().animate({ opacity: 1 });
            });

            // Text slider on homepage turn on rotation
            $(".demo1 .rotate").textrotator({
                animation: "fade",
                speed: s.textFadeSpeed
            });

        },
        backgroundVideo: function () {

            $('body').vide({
                mp4: 'video/video.mp4',
                //   ogv: 'video/video.ogv',
                poster: 'img/background.jpg'
            }, {
                    volume: 1,
                    playbackRate: 1,
                    muted: true,
                    loop: false,
                    autoplay: true,
                    position: '50% 50%', // Similar to the CSS `background-position` property.
                    posterType: 'jpg', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
                    resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
                    bgColor: 'transparent', // Allow custom background-color for Vide div,
                    className: 'bg-video-container' // Add custom CSS class to Vide div
                });


        }
    };

$(document).ready(function () {
    app.init();
});
