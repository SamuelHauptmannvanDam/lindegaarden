export function checkScreenAspect() {
    window.onresize = window.onload = function() {
        let w = window.innerWidth;
        let h = window.innerHeight;
        let aspectFactor = w / h;

        if (aspectFactor > 1.2) {
            document.getElementById("iframID").height = document.getElementById('mapID').getBoundingClientRect().width;

        } else { // UI changes for phones / screens taller than wide.
            document.getElementById("iframID").height = document.getElementById('mapID').getBoundingClientRect().width;
        }
    }
}

export function checkScreenAspectForFeedback() {
    window.onresize = window.onload = function() {
        let w = window.innerWidth;
        let h = window.innerHeight;
        let aspectFactor = w / h;

        if (aspectFactor > 1.2) {
            // document.getElementById("CenteringBoxID").style.width = "40%";

        } else { // UI changes for phones / screens taller than wide.
            // document.getElementById("CenteringBoxID").style.width = "100%";
        }
    }
}

export function adjustScreenWidth() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
}