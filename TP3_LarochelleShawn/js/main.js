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

/* P3: Event Modal */

const eventModal = document.querySelector("#event-modal");
const openFractureCard = document.querySelector("#open-fracture-card");
const eventModalClose = document.querySelector(".event-modal__close");
const eventModalBackdrop = document.querySelector(".event-modal__backdrop");

if (eventModal && openFractureCard && eventModalClose && eventModalBackdrop) {
  openFractureCard.addEventListener("click", () => {
    eventModal.classList.add("event-modal--open");
    eventModal.setAttribute("aria-hidden", "false");
  });

  eventModalClose.addEventListener("click", () => {
    eventModal.classList.remove("event-modal--open");
    eventModal.setAttribute("aria-hidden", "true");
  });

  eventModalBackdrop.addEventListener("click", () => {
    eventModal.classList.remove("event-modal--open");
    eventModal.setAttribute("aria-hidden", "true");
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      eventModal.classList.contains("event-modal--open")
    ) {
      eventModal.classList.remove("event-modal--open");
      eventModal.setAttribute("aria-hidden", "true");
    }
  });
}

/* P3: Past Event Results */

const pastEvents = {
  brutality: {
    eyebrow: "Previous Event",
    title: "Breakpoint: Brutality",
    meta: "September 14th, 2026 • Sherbrooke, QC",

    results: [
      {
        type: "BPW World Championship",
        match: "Shawn Dessler (C) def. Karl Jepson",
      },
      {
        type: "BPW Intercontinental Championship",
        match: "Beast King FTM (C) def. Jack Stryker",
      },
      {
        type: "BPW Tag Team Championship",
        match: "The Northern Mafia (C) def. French Invasion",
      },
      {
        type: "Singles Match",
        match: "Rayen Gurzil def. KC Austin and Lil Pep",
      },
    ],
    segments: [
      {
        title: "Jepson Plays God",
        text: "As the match became 50/50, Jepson interrupted the intercontinental championship match, giving Beast King a chair shot to make him win against Stryker via disqualification!",
      },
      {
        title: "Stryker Changes Everything",
        text: "During the World Championship main event, Jack Stryker took his revenge on Karl Jepson behind the referee's back. The interference allowed Shawn Dessler to land the final blow and retain the championship.",
      },

      {
        title: "Shawn Dessler Calls Out The Whole Roster",
        text: "After yet another underhanded win with the uncoordinated help of Jack Stryker, Shawn Dessler grabs the announcer's mic and taunts the BPW universe by telling them no one will ever beat him for the title and that he will keep it until he dies!",
      },

      {
        title: "Axel Wave Returns",
        text: "After months away from BPW, Axel Wave made a surprise return at Brutality to a huge crowd reaction and took down Dessler during his speech, setting his sight on a World Championship match at Fracture!",
      },
    ],
  },

  collision: {
    eyebrow: "Past Event",
    title: "Breakpoint: Collision",
    meta: "August 17th, 2026 • Montreal, QC",

    results: [
      {
        type: "BPW World Championship",
        match: "Shawn Dessler (C) def. Rayen Gurzil",
      },
      {
        type: "BPW Intercontinental Championship",
        match: "Beast King FTM (C) def. KC Austin",
      },
      {
        type: "Tag Team Match - #1 Contenders",
        match: "French Invasion def. The Grays",
      },
      {
        type: "Singles Match",
        match: "Jack Stryker def. Lil Pep",
      },
    ],
    segments: [
      {
        title: "French Invasion Earn Their Shot",
        text: "After defeating The Grays in the #1 contenders match, French Invasion secured redemption in the form of a future BPW Tag Team Championship opportunity against the champions they couldn't defeat at Ground Zero: The Northern Mafia.",
      },
      {
        title: "Jepson Wants The Gold",
        text: "Following Beast King's successful Intercontinental Championship defense, Karl Jepson confronted the champion and made it clear that he had not forgotten losing the title at Ground Zero and that he would be back after taking the World Championship off of Shawn Dessler at Fracture.",
      },
      {
        title: "Stryker Stakes His Claim",
        text: "In a twist no one saw coming, Jack Stryker comes out and tells Karl Jepson that he is next in line against Beast King for his intercontinental championship. He then attacked Jepson and the three men had to be pulled away from eachother by security!",
      },
      {
        title: "Dessler Smells Blood",
        text: "During the chaos, the World Champion came out to penalty kick Jepson, sending a clear message that he is the man to beat and that his challenger should concentrate on him instead of his petty conflict.",
      },
    ],
  },

  "ground-zero": {
    eyebrow: "Past Event",
    title: "Breakpoint: Ground Zero",
    meta: "July 20th, 2026 • Drummondville, QC",

    results: [
      {
        type: "BPW World Championship",
        match: "Shawn Dessler (C) def. KC Austin",
      },
      {
        type: "BPW Intercontinental Championship",
        match: "Beast King FTM def. Karl Jepson (C)",
      },
      {
        type: "BPW Tag Team Championship",
        match: "The Northern Mafia (C) def. The French Invasion",
      },
      {
        type: "Singles Match",
        match: "Grixix def. Lil Pep",
      },
    ],

    segments: [
      {
        title: "The Beast Claims Gold",
        text: "Beast King FTM defeated Karl Jepson to capture the BPW Intercontinental Championship, ending Jepson's reign and beginning a new era of brutality in the division.",
      },
      {
        title: "French Invasion Refuse To Stay Down",
        text: "Despite falling short against The Northern Mafia, French Invasion refused to accept the loss quietly and promised they would fight their way back to another championship opportunity.",
      },
      {
        title: "Shawn Dessler stomps out yet another challenger",
        text: "After a low blow at a critical point of the match, Shawn Dessler took advantage of the opportunity to use his dreaded 'Lights Out' penalty kick to seal another win and defend his World Championship.",
      },
    ],
  },
};
/* Past Event Results Modal */

const resultsModal = document.querySelector("#results-modal");
const resultsButtons = document.querySelectorAll(".results-button");

const resultsModalClose = document.querySelector(".results-modal__close");
const resultsModalBackdrop = document.querySelector(".results-modal__backdrop");

const resultsModalEyebrow = document.querySelector("#results-modal-eyebrow");
const resultsModalTitle = document.querySelector("#results-modal-title");
const resultsModalMeta = document.querySelector("#results-modal-meta");
const resultsModalResults = document.querySelector("#results-modal-results");
const resultsModalSegments = document.querySelector("#results-modal-segments");

if (
  resultsModal &&
  resultsButtons.length > 0 &&
  resultsModalClose &&
  resultsModalBackdrop &&
  resultsModalEyebrow &&
  resultsModalTitle &&
  resultsModalMeta &&
  resultsModalResults &&
  resultsModalSegments
) {
  resultsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const eventId = button.dataset.event;
      const eventData = pastEvents[eventId];

      if (!eventData) {
        return;
      }

      /* Event information */
      resultsModalEyebrow.textContent = eventData.eyebrow;
      resultsModalTitle.textContent = eventData.title;
      resultsModalMeta.textContent = eventData.meta;

      /* Match results */
      resultsModalResults.innerHTML = "";

      eventData.results.forEach((result) => {
        resultsModalResults.innerHTML += `
          <div class="result-item">
            <p class="result-item__type">${result.type}</p>
            <p class="result-item__match">${result.match}</p>
          </div>
        `;
      });

      /* Event segments */
      resultsModalSegments.innerHTML = "";

      if (eventData.segments && eventData.segments.length > 0) {
        eventData.segments.forEach((segment) => {
          resultsModalSegments.innerHTML += `
            <div class="result-segment">
              <p class="result-segment__label">Event Segment</p>
              <h3 class="result-segment__title">${segment.title}</h3>
              <p class="result-segment__text">${segment.text}</p>
            </div>
          `;
        });
      }

      /* Open modal */
      resultsModal.classList.add("results-modal--open");
      resultsModal.setAttribute("aria-hidden", "false");
    });
  });

  function closeResultsModal() {
    resultsModal.classList.remove("results-modal--open");
    resultsModal.setAttribute("aria-hidden", "true");
  }

  resultsModalClose.addEventListener("click", closeResultsModal);

  resultsModalBackdrop.addEventListener("click", closeResultsModal);

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      resultsModal.classList.contains("results-modal--open")
    ) {
      closeResultsModal();
    }
  });
}
