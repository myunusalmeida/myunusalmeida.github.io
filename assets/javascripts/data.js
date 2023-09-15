var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(xhttp.responseText);

    // SOURCE CODE
    data.sourcecode.forEach(function (e) {
      document.getElementById("contentSourceCode").innerHTML += `
            <div class="col-md-4">
                <a href="${e.code}" class="card contents source-code border-0 mb-3" target="_blank">
                    <img src="assets/images/contents/${e.image}" alt="${e.title}" loading="lazy" class="card-img-top" />
                    <div class="card-body">
                        <span class="badge bg-dark rounded-pill d-flex align-items-center text-center gap-2 fs-8 fw-semibold">
                            <i class="dot"></i> ${e.type}
                        </span>
                        <h5 class="text-white fw-semibold mt-2">${e.title}</h5>
                        <p class="text-center text-md-start text-light fs-7">
                            ${e.description}
                        </p>
                    </div>
                </a>
            </div>
        `;
    });

    // ECOURSES
    data.ecourses.forEach(function (e) {
      document.getElementById("ecourseslist").innerHTML += `
        <div class="col-md-6">
            <a href="${e.link}" class="card contents border-0 mb-3" target="_blank">
                <img src="assets/images/ecourses/${e.image}" alt="${e.title}" loading="lazy" class="card-img-top" />
                <div class="card-body">
                    <span class="badge bg-dark rounded-pill d-flex align-items-center text-center gap-2 fs-8 fw-semibold">
                        <i class="dot"></i> ${e.type}
                    </span>
                    <h5 class="text-white fw-semibold mt-2">${e.title}</h5>
                </div>
            </a>
        </div>
            `;
    });

    // YOUTUBE
    data.youtube.forEach(function (e) {
      document.getElementById("youtubelist").innerHTML += `
        <div class="col-md-4">
            <a href="${e.link}" class="card contents border-0 mb-3" target="_blank">
                <img src="assets/images/youtube/${e.image}" alt="${e.title}" loading="lazy" class="card-img-top" />
                <div class="card-body">
                    <span class="badge bg-dark rounded-pill d-flex align-items-center text-center gap-2 fs-8 fw-semibold">
                        <i class="dot"></i> ${e.type}
                    </span>
                    <h5 class="text-white fw-semibold mt-2">${e.title}</h5>
                </div>
            </a>
        </div>
            `;
    });

    // SOCIALS MEDIA
    document.getElementById("linkedin").href = data.socials.linkedin;
    document.getElementById("youtube").href = data.socials.youtube;
    document.getElementById("github").href = data.socials.github;
    document.getElementById("instagram").href = data.socials.instagram;
    document.getElementById("whatsapp").href = data.socials.whatsapp;
    document.getElementById("tiktok").href = data.socials.tiktok;

    // JUMLAH DATA
    document.getElementById("countyoutube").innerText = data.youtube.length;
    document.getElementById("countsourcecode").innerText =
      data.sourcecode.length;
    document.getElementById("countecourses").innerText = data.ecourses.length;
    document.getElementById("countecoursestext").innerText =
      data.ecourses.length + " Kelas";
  }
};

xhttp.open("GET", "assets/javascripts/data.json", true);
xhttp.send();
