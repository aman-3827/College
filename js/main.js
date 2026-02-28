const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

if (menuToggle && mainMenu) {
    menuToggle.addEventListener("click", () => {
        mainMenu.classList.toggle("open");
    });
}

const noticeSearch = document.getElementById("noticeSearch");
const noticeList = document.getElementById("noticeList");
const noResults = document.getElementById("noResults");

if (noticeSearch && noticeList && noResults) {
    const items = Array.from(noticeList.querySelectorAll("li"));
    noticeSearch.addEventListener("input", (event) => {
        const query = event.target.value.toLowerCase().trim();
        let visibleCount = 0;

        items.forEach((item) => {
            const text = `${item.textContent} ${item.dataset.keywords || ""}`.toLowerCase();
            const visible = text.includes(query);
            item.hidden = !visible;
            if (visible) {
                visibleCount += 1;
            }
        });

        noResults.hidden = visibleCount !== 0;
    });
}

function handleSimpleForm(formId, messageId, successText) {
    const form = document.getElementById(formId);
    const message = document.getElementById(messageId);

    if (!form || !message) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            message.textContent = "Please fill all required fields correctly.";
            message.style.color = "#9b1d1d";
            return;
        }

        form.reset();
        message.textContent = successText;
        message.style.color = "#0d6b2f";
    });
}

handleSimpleForm("admissionForm", "formMessage", "Thanks! Our admissions cell will reach out to you shortly.");
handleSimpleForm("contactForm", "contactMessage", "Message submitted successfully. We'll contact you soon.");
