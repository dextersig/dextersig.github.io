document.addEventListener("DOMContentLoaded", function() {
    const WEBRING_URL = "https://aidang.cc/webring/http://dextersig.ca";
    const BACK_LINK = document.getElementById("back-link");
    const FWD_LINK = document.getElementById("forward-link");
    const WEBRING = document.querySelector(".webring");
    const FOOTER = document.querySelector("footer");

    fetch(WEBRING_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network Response Error");
            }
            return response.json();
        })
        .then(data => {            
            if (data.left && data.right) {
                WEBRING.style.display = "inline-flex";
                FOOTER.style.marginTop = "0";

                BACK_LINK.href = data.left.url;
                FWD_LINK.href = data.right.url;
            }
        })    
        .catch(error => {
            console.error("Fetch Operation Problem: ", error);
        });
});