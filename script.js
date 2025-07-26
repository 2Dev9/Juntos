function showModal(id) {
            document.getElementById(id).style.display = "flex";
}

function hideModal(closeBtn) {
            const container = closeBtn.closest(".container");
            container.style.display = "none";
}
