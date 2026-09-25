(function () {

    function initializeOpeningVideo() {

        console.log("🪔 Initializing Diya opening...");


        /* =====================================================
           ELEMENTS
        ===================================================== */

        const diyaOpening =
            document.getElementById("welcome");

        const diyaHolder =
            document.getElementById("diyaHolder");

        const enterButton =
            document.getElementById("diyaEnter");

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

        function createDiyaParticles() {

            if (!diyaParticles) {
                return;
            }

            diyaParticles.innerHTML = "";

            const count =
                window.innerWidth <= 768 ? 25 : 50;


            for (let i = 0; i < count; i++) {

                const particle =
                    document.createElement("span");

                particle.className =
                    "diya-particle";


                particle.style.left =
                    Math.random() * 100 + "%";


                particle.style.top =
                    40 + Math.random() * 45 + "%";


                particle.style.width =
                    2 + Math.random() * 3 + "px";


                particle.style.height =
                    2 + Math.random() * 3 + "px";


                particle.style.setProperty(
                    "--particle-x",
                    (Math.random() * 180 - 90) + "px"
                );


                particle.style.setProperty(
                    "--particle-duration",
                    (3 + Math.random() * 4) + "s"
                );


                particle.style.setProperty(
                    "--particle-delay",
                    Math.random() * 4 + "s"
                );


                diyaParticles.appendChild(particle);
            }
        }


        createDiyaParticles();


        /* =====================================================
           LIGHT DIYA
        ===================================================== */

        let diyaLit = false;


        function lightDiya() {

            console.log("🪔 TAP THE DIYA");


            if (diyaLit) {
                return;
            }


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

        }


        /* =====================================================
           DIYA CLICK
        ===================================================== */

        diyaHolder.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                lightDiya();

            }
        );


        /* =====================================================
           TOUCH
        ===================================================== */

        diyaHolder.addEventListener(
            "touchend",
            function (event) {

                event.preventDefault();
                event.stopPropagation();

                lightDiya();

            },
            {
                passive: false
            }
        );


        /* =====================================================
           KEYBOARD
        ===================================================== */

        diyaHolder.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    lightDiya();

                }

            }
        );


        /* =====================================================
           ENTER OUR STORY
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

        }

    }


    /* =========================================================
       GLOBAL FUNCTION

       IMPORTANT:
       Do NOT automatically initialize here.
       script.js will call this after opening.html
       has been inserted into #app.
    ========================================================= */

    window.initializeOpeningVideo =
        initializeOpeningVideo;


})();