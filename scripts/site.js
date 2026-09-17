// Content is rendered by Jekyll; JavaScript only handles email copying.
document.querySelectorAll(".email-copy").forEach(button => {
      button.addEventListener("click", async () => {
        const status = button.closest(".email-contact, header").querySelector(".email-copy-status");
        clearTimeout(button.copyStatusTimer);
        try {
          await navigator.clipboard.writeText(button.dataset.email);
          status.textContent = "Email copied!";
          button.copyStatusTimer = setTimeout(() => { status.textContent = ""; }, 2500);
        } catch {
          status.textContent = `Could not copy. Email: ${button.dataset.email}`;
        }
      });
    });
