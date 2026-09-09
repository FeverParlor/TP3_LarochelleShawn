/* Control Panel for next Event in index Hero */

const eventSeries = document.getElementById("event-series");

if (eventSeries) {
  const nextEvent = {
    series: "Breakpoint:",
    name: "Fracture",
    date: "2026-10-12T20:00:00",
    dateDisplay: "October 12th, 2026",
    location: "Montreal, QC",
  };

  document.getElementById("event-series").textContent = nextEvent.series;
  document.getElementById("event-name").textContent = nextEvent.name;
  document.getElementById("event-details").textContent =
    nextEvent.dateDisplay + " | " + nextEvent.location;

  const eventDate = new Date(nextEvent.date).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";

      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");

    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");

    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");

    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  }

  updateCountdown();

  setInterval(updateCountdown, 1000);
}

/* P2 Modals */

const wrestlerModal = document.querySelector("#wrestler-modal");
const wrestlerCards = document.querySelectorAll(".roster-card");
const wrestlerModalClose = document.querySelector(".wrestler-modal__close");
const wrestlerModalBackdrop = document.querySelector(
  ".wrestler-modal__backdrop",
);

const wrestlerModalImage = document.querySelector("#wrestler-modal-image");
const wrestlerModalStatus = document.querySelector("#wrestler-modal-status");
const wrestlerModalTitle = document.querySelector("#wrestler-modal-title");
const wrestlerModalNickname = document.querySelector(
  "#wrestler-modal-nickname",
);
const wrestlerModalHeight = document.querySelector("#wrestler-modal-height");
const wrestlerModalWeight = document.querySelector("#wrestler-modal-weight");
const wrestlerModalHometown = document.querySelector(
  "#wrestler-modal-hometown",
);
const wrestlerModalFinisher = document.querySelector(
  "#wrestler-modal-finisher",
);
const wrestlerModalBio = document.querySelector("#wrestler-modal-bio");

const wrestlers = {
  "shawn-dessler": {
    name: "Shawn Dessler",
    nickname: "Truth-seeker",
    status: "World Champion",
    height: `5'10"`,
    weight: "235 lbs",
    hometown: "Sherbrooke, QC",
    finisher: "Lights Out",
    image: "assets/images/wrestlers/Dessler-Matchup.png",
    bio: "Always watching, always plotting, Shawn Dessler imposes order on Breakpoint Pro Wrestling as the reigning BPW World Champion. His knack at using psychological warfare and his obsession with exposing lies to batter his opponent even before they meet in the ring usually gives him the edge even before the bell rings.",
  },

  "beast-king": {
    name: "Beast King FTM",
    nickname: "The Annihilator",
    status: "Intercontinental Champion",
    height: `6'3"`,
    weight: "282 lbs",
    hometown: "Montreal, QC",
    finisher: "Sit-Out Spinebuster",
    image: "assets/images/wrestlers/Beast_King-Matchup.png",
    bio: "All hail the king. This man is the pinnacle of human strength and violence. After years of being known as Franky the Mobster, he returns to BPW even scarier as The Beast King who conquered beasts and men. A legend of the sport, this man is the attraction anywhere he goes.",
  },

  "nick-melvick": {
    name: "Nick Melvick",
    nickname: "The Comet",
    status: "Tag Team Champion",
    height: `5'8"`,
    weight: "170 lbs",
    hometown: "Granby, QC",
    finisher: "450 Splash",
    image: "assets/images/wrestlers/Nick_Melvick-Matchup.png",
    bio: "The undeniable burning star of BPW, Nick Melvick is one of the most exciting wrestler to watch on the roster. His aerial prowess makes him a constant threat despite his smaller stature.",
  },

  "mickey-thunder": {
    name: "Mickey Thunder",
    nickname: "Perfection's Reflection",
    status: "Tag Team Champion",
    height: `5'11"`,
    weight: "225 lbs",
    hometown: "Rivière-du-loup, QC",
    finisher: "De-facer",
    image: "assets/images/wrestlers/Mickey_Thunder-Matchup.png",
    bio: "His striking ability is only matches by his confidence in himself. Don't let his pretty boy looks deceive you or you will be facing the light well before being featured on his instagram as his newest victim.",
  },

  "axel-wave": {
    name: "Axel Wave",
    nickname: "The Comeback King",
    status: "Singles Division",
    height: `6'0"`,
    weight: "220 lbs",
    hometown: "Chichoutimi, QC",
    finisher: "Tidal Wave",
    image: "assets/images/wrestlers/Axel_Wave-Matchup.png",
    bio: "Cinema. Axel Wave is charisma and creativity in and out of the ring. A fighter that can end his opponents from every angle, Axel Wave is one of the most appreciated wrestler in BPW.",
  },

  "jack-stryker": {
    name: "Jack Stryker",
    nickname: "The Brawler",
    status: "Singles Division",
    height: `6'0"`,
    weight: "245 lbs",
    hometown: "Reunion Island, FR",
    finisher: "Chokeslam to Hell",
    image: "assets/images/wrestlers/Stryker-Matchup.png",
    bio: "A match against Jack Stryker is a match you do not come out the same from. Educated striker (pun intended), powerhouse and all around bruiser, only a select few individuals can stand against him and compete.",
  },

  "karl-jepson": {
    name: "Karl Jepson",
    nickname: "The Beast of Thetford",
    status: "Singles Division",
    height: `6'2"`,
    weight: "285 lbs",
    hometown: "Thetford Mines, QC",
    finisher: "World Breaker Powerbomb",
    image: "assets/images/wrestlers/Karl_Jepson-Matchup.png",
    bio: "The Thetford Bruiser takes no prisoners, doesn't do mercy and leaves only broken bodies in his wake. Karl Jepson is hard-hitting, unrelenting and focused on inflicting as much pain as he wants before finally putting an end to the match.",
  },

  "kc-austin": {
    name: "KC Austin",
    nickname: "Cowboy",
    status: "Singles Division",
    height: `5'11"`,
    weight: "264 lbs",
    hometown: "From the closest saloon",
    finisher: "Wrangler's Drop",
    image: "assets/images/wrestlers/KC_Austin-Matchup.png",
    bio: "This western hero is the last remnants of ancient times of lawlessness. Today, he wrangles his way around every ring he stumbles into. A big fan-favorite, this cowboy rarely draws the dead man's hand.",
  },

  "rayen-gurzil": {
    name: "Rayen Gurzil",
    nickname: "The Prophet",
    status: "Singles Division",
    height: `5'8"`,
    weight: "172 lbs",
    hometown: "Salem, MA, USA",
    finisher: "Sorcerer Bomb",
    image: "assets/images/wrestlers/Rayen_Gurzil-Matchup.png",
    bio: "The mystical Rayen Gurzil is a mysterious character that captivates the BPW universe. Scheming, plotting and forever searching the recipe to be on top of the food chain, no one truly knows how to battle the prophet.",
  },

  "lil-pep": {
    name: "Lil Pep",
    nickname: "The Hardcore Rappah",
    status: "Singles Division",
    height: `5'6"`,
    weight: "150 lbs",
    hometown: "Downtown Drummond, QC",
    finisher: "Pep Talk",
    image: "assets/images/wrestlers/Lil_Pep-Matchup.png",
    bio: "What can be said bout Lil Pep? He's a hardcore rapper from the darkest part for middle class downtown Drummondville. Living a somewhat inconvenient life, Lil Pep tries to live his rapping dream from the basement of his mother and ended up the wrestler with the longest losing streak in BPW history.",
  },

  grixix: {
    name: "Grixix",
    nickname: "The Gaulish Hero",
    status: "Singles Division",
    height: `5'4"`,
    weight: "163 lbs",
    hometown: "The Legends and Fables",
    finisher: "Apogee",
    image: "assets/images/wrestlers/Grixix-Matchup.png",
    bio: "The prophecy foretold of a hero that would climb the biggest mountain to sit on the throne of the world. Grixix is a warrior that might look out of place but also has the biggest of heart and willpower. With the support of his fans, this warrior will. bring you the fight of the century... every night.",
  },

  "jason-gray": {
    name: "Jason Gray",
    nickname: "The Soldier",
    status: "Tag Team Division",
    height: `6'0"`,
    weight: "210 lbs",
    hometown: "Quebec City, QC",
    finisher: "Final Salute",
    image: "assets/images/wrestlers/Jason_Grey-Matchup.png",
    bio: "Many call themselves warriors, few knows exactly what it is to actually be one. Jason Gray is a veteran who traded the war to wage one in the squared circle. Keeping him down is an extraordinary feat not many can claim to have done.",
  },

  "kevin-gray": {
    name: "Kevin Gray",
    nickname: "Tornado",
    status: "Tag Team Division",
    height: `5'8"`,
    weight: "200 lbs",
    hometown: "Quebec City, QC",
    finisher: "Twister Moonsault",
    image: "assets/images/wrestlers/Kevin_Gray-Matchup.png",
    bio: "The tornado is a force to be reckoned with in the ring. In the air, on the ground, Kevin Gray is hard to pinpoint and harder to pin down. When you are laying on the ground and see him setup the twister, you know your match is about to end.",
  },

  "georges-kabrit": {
    name: "Georges Kabrit",
    nickname: "Haitian Titan",
    status: "Tag Team Division",
    height: `6'4"`,
    weight: "268 lbs",
    hometown: "Port-au-Prince, Haiti",
    finisher: "Giant Lariat",
    image: "assets/images/wrestlers/Georges_Kabrit-Matchup.png",
    bio: "At 21 years old, Georges Kabrit is already considered a terrifying physical anomaly. Towering over any competition, the titan is always the biggest favorite in any fight. It is only a matter of time before this titan reaches the mountain top of BPW.",
  },

  "john-riviere": {
    name: "John Riviere",
    nickname: "The Conqueror",
    status: "Tag Team Division",
    height: `6'1"`,
    weight: "185 lbs",
    hometown: "Strasbourg, France",
    finisher: "Coup d'état",
    image: "assets/images/wrestlers/John_Riviere-Matchup.png",
    bio: "After conquering the french scene, John Riviere moved to Quebec to establish a new hunting ground in what he calls 'The land of the lesser french'. Voted BPW's most hated person in 2021, 2022, 2023 and 2024, it is to be believed that this villain is one all love to hate.",
  },
};

if (
  wrestlerModal &&
  wrestlerModalClose &&
  wrestlerModalBackdrop &&
  wrestlerCards.length > 0
) {
  wrestlerCards.forEach((card) => {
    card.addEventListener("click", () => {
      const wrestlerId = card.dataset.wrestler;
      const wrestler = wrestlers[wrestlerId];

      if (!wrestler) {
        return;
      }

      wrestlerModalImage.src = wrestler.image;
      wrestlerModalImage.alt = wrestler.name;

      wrestlerModalStatus.textContent = wrestler.status;
      wrestlerModalTitle.textContent = wrestler.name;
      wrestlerModalNickname.textContent = `“${wrestler.nickname}”`;

      wrestlerModalHeight.textContent = wrestler.height;
      wrestlerModalWeight.textContent = wrestler.weight;
      wrestlerModalHometown.textContent = wrestler.hometown;
      wrestlerModalFinisher.textContent = wrestler.finisher;
      wrestlerModalBio.textContent = wrestler.bio;

      wrestlerModal.classList.add("wrestler-modal--open");
      wrestlerModal.setAttribute("aria-hidden", "false");
    });
  });

  wrestlerModalClose.addEventListener("click", () => {
    wrestlerModal.classList.remove("wrestler-modal--open");
    wrestlerModal.setAttribute("aria-hidden", "true");
  });

  wrestlerModalBackdrop.addEventListener("click", () => {
    wrestlerModal.classList.remove("wrestler-modal--open");
    wrestlerModal.setAttribute("aria-hidden", "true");
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      wrestlerModal.classList.contains("wrestler-modal--open")
    ) {
      wrestlerModal.classList.remove("wrestler-modal--open");
      wrestlerModal.setAttribute("aria-hidden", "true");
    }
  });
}

/* P3: Featured counter */

const featuredEvent = document.querySelector(".featured-event");

if (featuredEvent) {
  const daysElement = document.querySelector("#event-days");
  const hoursElement = document.querySelector("#event-hours");
  const minutesElement = document.querySelector("#event-minutes");
  const secondsElement = document.querySelector("#event-seconds");

  if (daysElement && hoursElement && minutesElement && secondsElement) {
    const eventDate = new Date("2026-10-12T20:00:00").getTime();

    function updateFeaturedCountdown() {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysElement.textContent = days.toString().padStart(2, "0");
      hoursElement.textContent = hours.toString().padStart(2, "0");
      minutesElement.textContent = minutes.toString().padStart(2, "0");
      secondsElement.textContent = seconds.toString().padStart(2, "0");
    }

    updateFeaturedCountdown();
    setInterval(updateFeaturedCountdown, 1000);
  }
}
