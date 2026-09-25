<<<<<<< HEAD
(function () {

    function initializeOpeningVideo() {

        console.log("🪔 Initializing Diya opening...");
=======
// // // const video = document.querySelector(".opening-video");
// // // const button = document.querySelector(".tap-button");
// // // const welcomeText = document.querySelector(".welcome-text");

// // // // Play video when button is clicked
// // // button.addEventListener("click", () => {
// // //     video.play();
// // //     button.style.display = "none";
// // // });

// // // // When the video finishes
// // // video.addEventListener("ended", () => {
// // //     video.style.display = "none";
// // //     welcomeText.style.display = "block";
// // // });

// // (function () {

// //     function initializeWelcome() {

// //         const welcome = document.getElementById("welcome");

// //         if (!welcome) {
// //             return;
// //         }

// //         if (welcome.dataset.initialized === "true") {
// //             return;
// //         }

// //         welcome.dataset.initialized = "true";


// //         /* =====================================================
// //            ELEMENTS
// //            ===================================================== */

// //         const diyaHolder =
// //             document.getElementById("diyaHolder");

// //         const enterButton =
// //             document.getElementById("diyaEnter");

// //         const grandScene =
// //             document.getElementById("grandWeddingScene");

// //         const diyaParticles =
// //             document.getElementById("diyaParticles");

// //         const grandParticles =
// //             document.getElementById("grandSceneParticles");


// //         if (!diyaHolder) {
// //             console.error("Diya element not found.");
// //             return;
// //         }


// //         /* =====================================================
// //            DIYA PARTICLES
// //            ===================================================== */

// //         function createDiyaParticles() {

// //             if (!diyaParticles) {
// //                 return;
// //             }

// //             diyaParticles.innerHTML = "";

// //             const count =
// //                 window.innerWidth <= 768 ? 25 : 50;

// //             for (let i = 0; i < count; i++) {

// //                 const particle =
// //                     document.createElement("span");

// //                 particle.className =
// //                     "diya-particle";

// //                 particle.style.left =
// //                     Math.random() * 100 + "%";

// //                 particle.style.top =
// //                     40 + Math.random() * 45 + "%";

// //                 particle.style.width =
// //                     2 + Math.random() * 3 + "px";

// //                 particle.style.height =
// //                     2 + Math.random() * 3 + "px";

// //                 particle.style.setProperty(
// //                     "--particle-x",
// //                     (Math.random() * 180 - 90) + "px"
// //                 );

// //                 particle.style.setProperty(
// //                     "--particle-duration",
// //                     (3 + Math.random() * 4) + "s"
// //                 );

// //                 particle.style.setProperty(
// //                     "--particle-delay",
// //                     Math.random() * 4 + "s"
// //                 );

// //                 diyaParticles.appendChild(particle);
// //             }
// //         }


// //         /* =====================================================
// //            GRAND SCENE PARTICLES
// //            ===================================================== */

// //         function createGrandParticles() {

// //             if (!grandParticles) {
// //                 return;
// //             }

// //             grandParticles.innerHTML = "";

// //             const count =
// //                 window.innerWidth <= 768 ? 18 : 35;

// //             for (let i = 0; i < count; i++) {

// //                 const particle =
// //                     document.createElement("span");

// //                 particle.className =
// //                     "grand-scene-particle";

// //                 particle.style.left =
// //                     Math.random() * 100 + "%";

// //                 particle.style.top =
// //                     55 + Math.random() * 40 + "%";

// //                 particle.style.setProperty(
// //                     "--grand-x",
// //                     (Math.random() * 160 - 80) + "px"
// //                 );

// //                 particle.style.setProperty(
// //                     "--grand-duration",
// //                     (3 + Math.random() * 4) + "s"
// //                 );

// //                 particle.style.setProperty(
// //                     "--grand-delay",
// //                     Math.random() * 3 + "s"
// //                 );

// //                 grandParticles.appendChild(particle);
// //             }
// //         }


// //         /* =====================================================
// //            INITIALIZE
// //            ===================================================== */

// //         createDiyaParticles();


// //         /* =====================================================
// //            LIGHT DIYA
// //            ===================================================== */

// //         let diyaLit = false;

// //         function lightDiya() {

// //             if (diyaLit) {
// //                 return;
// //             }

// //             diyaLit = true;

// //             welcome.classList.add("is-lit");
// //             welcome.classList.add("is-bursting");

// //             createDiyaParticles();

// //             setTimeout(function () {

// //                 welcome.classList.add("is-revealed");

// //             }, 900);

// //             setTimeout(function () {

// //                 welcome.classList.remove("is-bursting");

// //             }, 1400);
// //         }


// //         /* =====================================================
// //            DIYA CLICK
// //            ===================================================== */

// //         diyaHolder.addEventListener(
// //             "click",
// //             function (event) {

// //                 event.preventDefault();
// //                 event.stopPropagation();

// //                 lightDiya();
// //             }
// //         );


// //         /* =====================================================
// //            TOUCH
// //            ===================================================== */

// //         diyaHolder.addEventListener(
// //             "touchend",
// //             function (event) {

// //                 event.preventDefault();
// //                 event.stopPropagation();

// //                 lightDiya();
// //             },
// //             {
// //                 passive: false
// //             }
// //         );


// //         /* =====================================================
// //            KEYBOARD
// //            ===================================================== */

// //         diyaHolder.addEventListener(
// //             "keydown",
// //             function (event) {

// //                 if (
// //                     event.key === "Enter" ||
// //                     event.key === " "
// //                 ) {

// //                     event.preventDefault();

// //                     lightDiya();
// //                 }
// //             }
// //         );


// //         /* =====================================================
// //            ENTER OUR STORY
// //            ===================================================== */

// //         if (enterButton) {
// //             enterButton.addEventListener("click", function (e) {
// //                 e.preventDefault();

// //                 const grandScene = document.getElementById("grandWeddingScene");

// //                 if (!grandScene) {
// //                     console.error("grandWeddingScene not found");
// //                     return;
// //                 }

// //                 grandScene.removeAttribute("aria-hidden");

// //                 grandScene.scrollIntoView({
// //                     behavior: "smooth",
// //                     block: "start"
// //                 });

// //                 createGrandParticles();
// //             });
// //         }

// //     }


// //     /* =========================================================
// //        GLOBAL FUNCTION
// //        ========================================================= */

// //     window.initializeWelcome =
// //         initializeWelcome;


// //     /* =========================================================
// //        DYNAMIC PAGE SUPPORT
// //        ========================================================= */

// //     function checkWelcome() {

// //         if (
// //             document.getElementById("welcome") &&
// //             typeof window.initializeWelcome === "function"
// //         ) {
// //             window.initializeWelcome();
// //         }
// //     }


// //     if (document.readyState === "loading") {

// //         document.addEventListener(
// //             "DOMContentLoaded",
// //             checkWelcome
// //         );

// //     } else {

// //         checkWelcome();
// //     }


// //     /* =========================================================
// //        OBSERVE DYNAMIC HTML
// //        ========================================================= */

// //     const observer =
// //         new MutationObserver(function () {

// //             checkWelcome();

// //         });

// //     observer.observe(
// //         document.body,
// //         {
// //             childList: true,
// //             subtree: true
// //         }
// //     );

// // })();

// // const video = document.querySelector(".opening-video");
// // const button = document.querySelector(".tap-button");
// // const welcomeText = document.querySelector(".welcome-text");

// // // Play video when button is clicked
// // button.addEventListener("click", () => {
// //     video.play();
// //     button.style.display = "none";
// // });

// // // When the video finishes
// // video.addEventListener("ended", () => {
// //     video.style.display = "none";
// //     welcomeText.style.display = "block";
// // });

// (function () {

//     function initializeWelcome() {

//         const welcome = document.getElementById("welcome");

//         if (!welcome) {
//             return;
//         }

//         if (welcome.dataset.initialized === "true") {
//             return;
//         }

//         welcome.dataset.initialized = "true";


//         /* =====================================================
//            ELEMENTS
//            ===================================================== */

//         const diyaHolder =
//             document.getElementById("diyaHolder");

//         const enterButton =
//             document.getElementById("diyaEnter");

//         const grandScene =
//             document.getElementById("grandWeddingScene");

//         const diyaParticles =
//             document.getElementById("diyaParticles");

//         const grandParticles =
//             document.getElementById("grandSceneParticles");


//         if (!diyaHolder) {
//             console.error("Diya element not found.");
//             return;
//         }


//         /* =====================================================
//            DIYA PARTICLES
//            ===================================================== */

//         function createDiyaParticles() {

//             if (!diyaParticles) {
//                 return;
//             }

//             diyaParticles.innerHTML = "";

//             const count =
//                 window.innerWidth <= 768 ? 25 : 50;

//             for (let i = 0; i < count; i++) {

//                 const particle =
//                     document.createElement("span");

//                 particle.className =
//                     "diya-particle";

//                 particle.style.left =
//                     Math.random() * 100 + "%";

//                 particle.style.top =
//                     40 + Math.random() * 45 + "%";

//                 particle.style.width =
//                     2 + Math.random() * 3 + "px";

//                 particle.style.height =
//                     2 + Math.random() * 3 + "px";

//                 particle.style.setProperty(
//                     "--particle-x",
//                     (Math.random() * 180 - 90) + "px"
//                 );

//                 particle.style.setProperty(
//                     "--particle-duration",
//                     (3 + Math.random() * 4) + "s"
//                 );

//                 particle.style.setProperty(
//                     "--particle-delay",
//                     Math.random() * 4 + "s"
//                 );

//                 diyaParticles.appendChild(particle);
//             }
//         }


//         /* =====================================================
//            GRAND SCENE PARTICLES
//            ===================================================== */

//         function createGrandParticles() {

//             if (!grandParticles) {
//                 return;
//             }

//             grandParticles.innerHTML = "";

//             const count =
//                 window.innerWidth <= 768 ? 18 : 35;

//             for (let i = 0; i < count; i++) {

//                 const particle =
//                     document.createElement("span");

//                 particle.className =
//                     "grand-scene-particle";

//                 particle.style.left =
//                     Math.random() * 100 + "%";

//                 particle.style.top =
//                     55 + Math.random() * 40 + "%";

//                 particle.style.setProperty(
//                     "--grand-x",
//                     (Math.random() * 160 - 80) + "px"
//                 );

//                 particle.style.setProperty(
//                     "--grand-duration",
//                     (3 + Math.random() * 4) + "s"
//                 );

//                 particle.style.setProperty(
//                     "--grand-delay",
//                     Math.random() * 3 + "s"
//                 );

//                 grandParticles.appendChild(particle);
//             }
//         }


//         /* =====================================================
//            INITIALIZE
//            ===================================================== */

//         createDiyaParticles();


//         /* =====================================================
//            LIGHT DIYA
//            ===================================================== */

//         let diyaLit = false;

//         function lightDiya() {

//             if (diyaLit) {
//                 return;
//             }

//             diyaLit = true;

//             welcome.classList.add("is-lit");
//             welcome.classList.add("is-bursting");

//             createDiyaParticles();

//             setTimeout(function () {

//                 welcome.classList.add("is-revealed");

//             }, 900);

//             setTimeout(function () {

//                 welcome.classList.remove("is-bursting");

//             }, 1400);
//         }


//         /* =====================================================
//            DIYA CLICK
//            ===================================================== */

//         diyaHolder.addEventListener(
//             "click",
//             function (event) {

//                 event.preventDefault();
//                 event.stopPropagation();

//                 lightDiya();
//             }
//         );


//         /* =====================================================
//            TOUCH
//            ===================================================== */

//         diyaHolder.addEventListener(
//             "touchend",
//             function (event) {

//                 event.preventDefault();
//                 event.stopPropagation();

//                 lightDiya();
//             },
//             {
//                 passive: false
//             }
//         );


//         /* =====================================================
//            KEYBOARD
//            ===================================================== */

//         diyaHolder.addEventListener(
//             "keydown",
//             function (event) {

//                 if (
//                     event.key === "Enter" ||
//                     event.key === " "
//                 ) {

//                     event.preventDefault();

//                     lightDiya();
//                 }
//             }
//         );


//         /* =====================================================
//            ENTER OUR STORY
//            ===================================================== */

//         if (enterButton) {
//             enterButton.addEventListener("click", function (e) {
//                 e.preventDefault();

//                 const grandScene = document.getElementById("grandWeddingScene");

//                 if (!grandScene) {
//                     console.error("grandWeddingScene not found");
//                     return;
//                 }

//                 grandScene.removeAttribute("aria-hidden");

//                 grandScene.scrollIntoView({
//                     behavior: "smooth",
//                     block: "start"
//                 });

//                 createGrandParticles();

//                 // Load the rest of the wedding website (Save The Date,
//                 // Meet The Couple, etc.) so it's already appended below
//                 // the grand scene by the time the user scrolls into it.
//                 if (typeof window.loadHome === "function") {
//                     window.loadHome();
//                 }
//             });
//         }

//     }


//     /* =========================================================
//        GLOBAL FUNCTION
//        ========================================================= */

//     window.initializeWelcome =
//         initializeWelcome;


//     /* =========================================================
//        DYNAMIC PAGE SUPPORT
//        ========================================================= */

//     function checkWelcome() {

//         if (
//             document.getElementById("welcome") &&
//             typeof window.initializeWelcome === "function"
//         ) {
//             window.initializeWelcome();
//         }
//     }


//     if (document.readyState === "loading") {

//         document.addEventListener(
//             "DOMContentLoaded",
//             checkWelcome
//         );

//     } else {

//         checkWelcome();
//     }


//     /* =========================================================
//        OBSERVE DYNAMIC HTML
//        ========================================================= */

//     const observer =
//         new MutationObserver(function () {

//             checkWelcome();

//         });

//     observer.observe(
//         document.body,
//         {
//             childList: true,
//             subtree: true
//         }
//     );

// })();

// const video = document.querySelector(".opening-video");
// const button = document.querySelector(".tap-button");
// const welcomeText = document.querySelector(".welcome-text");

// // Play video when button is clicked
// button.addEventListener("click", () => {
//     video.play();
//     button.style.display = "none";
// });

// // When the video finishes
// video.addEventListener("ended", () => {
//     video.style.display = "none";
//     welcomeText.style.display = "block";
// });

(function () {

    function initializeWelcome() {

        const welcome = document.getElementById("welcome");

        if (!welcome) {
            return;
        }

        if (welcome.dataset.initialized === "true") {
            return;
        }

        welcome.dataset.initialized = "true";
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33


        /* =====================================================
           ELEMENTS
<<<<<<< HEAD
        ===================================================== */

        const diyaOpening =
            document.getElementById("welcome");
=======
           ===================================================== */
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33

        const diyaHolder =
            document.getElementById("diyaHolder");

        const enterButton =
            document.getElementById("diyaEnter");

<<<<<<< HEAD
        const diyaParticles =
            document.getElementById("diyaParticles");


        /* =====================================================
           CHECK
        ===================================================== */

        if (!diyaOpening) {
            console.error("❌ #welcome not found");
            return;
        }

        if (!diyaHolder) {
            console.error("❌ #diyaHolder not found");
            return;
        }

        console.log("✅ Diya elements found");


        /* =====================================================
           PREVENT DOUBLE INITIALIZATION
        ===================================================== */

        if (diyaOpening.dataset.initialized === "true") {
            return;
        }

        diyaOpening.dataset.initialized = "true";


        /* =====================================================
           CREATE PARTICLES
        ===================================================== */
=======
        const grandScene =
            document.getElementById("grandWeddingScene");

        const diyaParticles =
            document.getElementById("diyaParticles");

        const grandParticles =
            document.getElementById("grandSceneParticles");


        if (!diyaHolder) {
            console.error("Diya element not found.");
            return;
        }


        /* =====================================================
           DIYA PARTICLES
           ===================================================== */
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33

        function createDiyaParticles() {

            if (!diyaParticles) {
                return;
            }

            diyaParticles.innerHTML = "";

            const count =
                window.innerWidth <= 768 ? 25 : 50;

<<<<<<< HEAD

=======
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33
            for (let i = 0; i < count; i++) {

                const particle =
                    document.createElement("span");

                particle.className =
                    "diya-particle";

<<<<<<< HEAD

                particle.style.left =
                    Math.random() * 100 + "%";


                particle.style.top =
                    40 + Math.random() * 45 + "%";


                particle.style.width =
                    2 + Math.random() * 3 + "px";


                particle.style.height =
                    2 + Math.random() * 3 + "px";


=======
                particle.style.left =
                    Math.random() * 100 + "%";

                particle.style.top =
                    40 + Math.random() * 45 + "%";

                particle.style.width =
                    2 + Math.random() * 3 + "px";

                particle.style.height =
                    2 + Math.random() * 3 + "px";

>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33
                particle.style.setProperty(
                    "--particle-x",
                    (Math.random() * 180 - 90) + "px"
                );

<<<<<<< HEAD

=======
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33
                particle.style.setProperty(
                    "--particle-duration",
                    (3 + Math.random() * 4) + "s"
                );

<<<<<<< HEAD

=======
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33
                particle.style.setProperty(
                    "--particle-delay",
                    Math.random() * 4 + "s"
                );

<<<<<<< HEAD

=======
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33
                diyaParticles.appendChild(particle);
            }
        }


<<<<<<< HEAD
=======
        /* =====================================================
           GRAND SCENE PARTICLES
           ===================================================== */

        function createGrandParticles() {

            if (!grandParticles) {
                return;
            }

            grandParticles.innerHTML = "";

            const count =
                window.innerWidth <= 768 ? 18 : 35;

            for (let i = 0; i < count; i++) {

                const particle =
                    document.createElement("span");

                particle.className =
                    "grand-scene-particle";

                particle.style.left =
                    Math.random() * 100 + "%";

                particle.style.top =
                    55 + Math.random() * 40 + "%";

                particle.style.setProperty(
                    "--grand-x",
                    (Math.random() * 160 - 80) + "px"
                );

                particle.style.setProperty(
                    "--grand-duration",
                    (3 + Math.random() * 4) + "s"
                );

                particle.style.setProperty(
                    "--grand-delay",
                    Math.random() * 3 + "s"
                );

                grandParticles.appendChild(particle);
            }
        }


        /* =====================================================
           INITIALIZE
           ===================================================== */

>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33
        createDiyaParticles();


        /* =====================================================
           LIGHT DIYA
<<<<<<< HEAD
        ===================================================== */

        let diyaLit = false;


        function lightDiya() {

            console.log("🪔 TAP THE DIYA");


=======
           ===================================================== */

        let diyaLit = false;

        function lightDiya() {

>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33
            if (diyaLit) {
                return;
            }

<<<<<<< HEAD

            diyaLit = true;


            diyaOpening.classList.add("is-lit");

            diyaOpening.classList.add("is-bursting");


            createDiyaParticles();


            setTimeout(function () {

                diyaOpening.classList.add(
                    "is-revealed"
                );

            }, 900);


            setTimeout(function () {

                diyaOpening.classList.remove(
                    "is-bursting"
                );

            }, 1400);

=======
            diyaLit = true;

            welcome.classList.add("is-lit");
            welcome.classList.add("is-bursting");

            createDiyaParticles();

            setTimeout(function () {

                welcome.classList.add("is-revealed");

            }, 900);

            setTimeout(function () {

                welcome.classList.remove("is-bursting");

            }, 1400);
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33
        }


        /* =====================================================
           DIYA CLICK
<<<<<<< HEAD
        ===================================================== */
=======
           ===================================================== */
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33

        diyaHolder.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                lightDiya();
<<<<<<< HEAD

=======
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33
            }
        );


        /* =====================================================
           TOUCH
<<<<<<< HEAD
        ===================================================== */
=======
           ===================================================== */
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33

        diyaHolder.addEventListener(
            "touchend",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                lightDiya();
<<<<<<< HEAD

=======
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33
            },
            {
                passive: false
            }
        );


        /* =====================================================
           KEYBOARD
<<<<<<< HEAD
        ===================================================== */
=======
           ===================================================== */
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33

        diyaHolder.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    lightDiya();
<<<<<<< HEAD

                }

=======
                }
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33
            }
        );


        /* =====================================================
           ENTER OUR STORY
<<<<<<< HEAD
        ===================================================== */

        if (enterButton) {

            enterButton.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();


                    console.log(
                        "➡️ ENTER OUR STORY clicked"
                    );


                    diyaOpening.classList.add(
                        "leaving"
                    );


                    setTimeout(function () {

                        if (
                            typeof window.loadWelcome ===
                            "function"
                        ) {

                            window.loadWelcome();

                        } else {

                            console.error(
                                "❌ loadWelcome() is not available"
                            );

                        }

                    }, 700);

                }
            );

=======
           ===================================================== */

        if (enterButton) {
            enterButton.addEventListener("click", function (e) {
                e.preventDefault();

                // Swap the opening out for the main site immediately,
                // no scrolling required.
                if (typeof window.loadHome === "function") {
                    window.loadHome();
                }
            });
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33
        }

    }


    /* =========================================================
       GLOBAL FUNCTION
<<<<<<< HEAD

       IMPORTANT:
       Do NOT automatically initialize here.
       script.js will call this after opening.html
       has been inserted into #app.
    ========================================================= */

    window.initializeOpeningVideo =
        initializeOpeningVideo;

=======
       ========================================================= */

    window.initializeWelcome =
        initializeWelcome;


    /* =========================================================
       DYNAMIC PAGE SUPPORT
       ========================================================= */

    function checkWelcome() {

        if (
            document.getElementById("welcome") &&
            typeof window.initializeWelcome === "function"
        ) {
            window.initializeWelcome();
        }
    }


    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            checkWelcome
        );

    } else {

        checkWelcome();
    }


    /* =========================================================
       OBSERVE DYNAMIC HTML
       ========================================================= */

    const observer =
        new MutationObserver(function () {

            checkWelcome();

        });

    observer.observe(
        document.body,
        {
            childList: true,
            subtree: true
        }
    );
>>>>>>> 5a234254310e09b0f4868954bdfd80f1c352bf33

})();