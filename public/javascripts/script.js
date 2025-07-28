
    
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("GKJ_themeToggle");
    const icon = document.getElementById("GKJ_themeIcon");
    const contact = document.getElementById("contact");
    const project = document.getElementById("projects");
     const skills = document.getElementById("skills");
    const education = document.getElementById("education");
    const about = document.getElementById("about");
     const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
      body.classList.add("light-mode");
      body.classList.remove("bg-zinc-900", "text-white");
      body.classList.add("bg-white", "text-black");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");

    }

    // Toggle button logic
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("light-mode");

      const isLight = body.classList.contains("light-mode");

      if (isLight) {
        body.classList.remove("bg-zinc-900", "text-white");
        body.classList.add("bg-white", "text-black");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        contact.classList.remove("bg-zinc-900");
      contact.classList.add("bg-white-900");
      projects.classList.add("bg-white-900");
      projects.classList.remove("bg-zinc-900");
      skills.classList.remove("bg-zinc-900");
      skills.classList.add("bg-white-900");
      education.classList.add("bg-white-900");
      education.classList.remove("bg-zinc-900");
      about.classList.remove("bg-zinc-900");
      about.classList.add("bg-white-900");
      name.classList.remove("bg-zinc-900","text-white");
      name.classList.add("bg-white-900","text-zinc");
      email.classList.add("bg-white-900","text-zinc");
      email.classList.remove("bg-zinc-900","text-white");
      message.classList.remove("bg-zinc-900","text-white");
      message.classList.add("bg-white-900","text-zinc");
        localStorage.setItem("theme", "light");
        

      } else {
        body.classList.add("bg-zinc-900", "text-white");
        body.classList.remove("bg-white", "text-black");
        icon.classList.add("fa-moon");
        icon.classList.remove("fa-sun");
        contact.classList.add("bg-zinc-900");
        contact.classList.remove("bg-white-900");
        projects.classList.remove("bg-white-900");
      projects.classList.add("bg-zinc-900");
      skills.classList.remove("bg-white-900");
      skills.classList.add("bg-zinc-900");
      education.classList.add("bg-zinc-900");
      education.classList.remove("bg-white-900");
      about.classList.remove("bg-white-900");
      about.classList.add("bg-zinc-900");
      name.classList.remove("bg-white-900","text-zinc");
      name.classList.add("bg-zinc-900","text-white");
      email.classList.add("bg-zinc-900","text-white");
      email.classList.remove("bg-white-900","text-zinc");
      message.classList.remove("bg-white-900","text-zinc");
      message.classList.add("bg-zinc-900","text-white");
      
        

        // localStorage.setItem("theme", "dark");
      }
    });
  });
  window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("bg-yellow-400", "shadow-lg");
  } else {
    nav.classList.remove("bg-yellow-400", "shadow-lg");
  }
});






