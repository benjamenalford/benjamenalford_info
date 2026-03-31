// benjamenalford.info - Application Shell
// This file will contain client-side functionality as the site evolves

(function () {
  "use strict";

  // Placeholder for future functionality
  console.log("App initialized");

  // Spam protection for email link
  const emailLink = document.querySelector('a[title="Email"]');
  if (emailLink) {
    const email = "me" + "@" + "benjamenalford.com";
    emailLink.setAttribute("href", "mailto:" + email);
  }
})();
