const databeach = [
  {
    id: 1,
    name: "La Barre",
    length: "500m",
    location: "Anglet",
    events: {
      dates: [["15-05-2022"], ["25-05-2022"]],
      users: [
        ["Joséphine", "Pierre"],
        ["Antoine", "Roger"],
      ],
    },
    desc: "Beach popular with tourists, due to the activities found there, such as skateboarding, ice skating, and our much loved McDonalds.",
    img: "./assets/beach-img/labarre.jpg",
    missions: "Collection and recovery of marine litter",
  },
  {
    id: 2,
    name: "Les cavaliers",
    length: "630m",
    location: "Anglet",
    events: {
      dates: ["24-05-2022", "10-06-2022", "15-06-2022"],
      users: [
        ["Robert", "Xavier"],
        ["Eliane", "Malvina"],
        ["Salomon", "David"],
      ],
    },
    desc: "Family beach with large expanses of grass, enough to take care of in terms of garbage collection, especially on Wednesday evenings...",
    img: "./assets/beach-img/cavalier.jpg",
    missions:
      "Educational games on learning selective sorting through beach cleaning",
  },
  {
    id: 3,
    name: "Les Dunes",
    length: "410m",
    location: "Anglet",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Beach with nudist tolerance, little frequented but mostly adult people and respectful of the site, presence of a bar by the sea with detox juice on the menu",
    img: "./assets/beach-img/dune.jpg",
    missions: "Trash collection and picnic at the beach",
  },
  {
    id: 4,
    name: "L'océan",
    length: "410m",
    location: "Anglet",
    events: {
      dates: ["05-06-2022", "10-06-2022"],
      users: [
        ["Joe", "Yohana"],
        ["Eliot", "Jeff"],
      ],
    },
    desc: "Next to the dunes, a wilder beach than the others and little frequented by young people, there are beachgoers who are rather respectful of the environment on the whole.",
    img: "./assets/beach-img/ocean.jpg",
    missions:
      "Cleaning the beach through games to raise awareness among the youngest",
  },
  {
    id: 5,
    name: "La Madrague",
    length: "460m",
    location: "Anglet",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Beach with a younger character, although popular with surfers, its ideal location makes it a very popular beach.",
    img: "./assets/beach-img/madrague.jpg",
    missions:
      "Educational games to encourage the youngest to respect the environment",
  },
  {
    id: 6,
    name: "Les Corsaires",
    length: "380m",
    location: "Anglet",
    events: {
      dates: ["07-06-2022"],
      users: [["Dave", "Nat"]],
    },
    desc: "Family beach where it is good to relax, bask in the pill, very busy.",
    img: "./assets/beach-img/corsaire.jpg",
    missions: "Collection and recovery of marine litter",
  },
  {
    id: 7,
    name: "Marinela",
    length: "400m",
    location: "Anglet",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Like its neighbours, beach very popular with families, with a very high concentration in summer.",
    img: "./assets/beach-img/marinela.jpg",
    missions: "Trash collection and picnic at the beach",
  },
  {
    id: 8,
    name: "Les sables d'or",
    length: "370m",
    location: "Anglet",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Facing the promenade of golden sands, beach frequented by a crowd from morning to evening, with bars restaurants and volleyball nets",
    img: "./assets/beach-img/sabledor.jpg",
    missions: "Collection and recovery of marine litter",
  },
  {
    id: 9,
    name: "La chambre d'amour",
    length: "220m",
    location: "Anglet",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "As its name suggests, the beach La Chambre d'Amour has a cave famous for its history, where it is not good to go when the tide rises.",
    img: "./assets/beach-img/chambredamour.jpg",
    missions:
      "Educational games on learning selective sorting through beach cleaning",
  },
  {
    id: 10,
    name: "VFF",
    length: "600m",
    location: "Anglet",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Beach on the edge of a cliff, with a breathtaking view of the Biarritz lighthouse, and its unbeatable Paquebot-type Vacation Village.",
    img: "./assets/beach-img/vff.jpg",
    missions: "Collection and recovery of marine litter",
  },
  {
    id: 11,
    name: "Le Miramar",
    length: "380m",
    location: "Biarritz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Beach on the edge of the cliff, with a breathtaking view of the Biarritz lighthouse, and its unbeatable Miramar luxury hotel.",
    img: "./assets/beach-img/miramar.jpg",
    missions:
      "Educational games on learning selective sorting through beach cleaning",
  },
  {
    id: 12,
    name: "La grande plage",
    length: "600m",
    location: "Biarritz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Known throughout the world, La Grande Plage of Biarritz brings together thousands of tourists every year, with its Barriere casino and its breathtaking view.",
    img: "./assets/beach-img/grandeplageb.jpg",
    missions: "Waste collection and awareness of global warming",
  },
  {
    id: 13,
    name: "La côte des Basques",
    length: "950m",
    location: "Biarritz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Incredible beach for learning to surf, it disappears during high tides but offers quality waves for beginners.",
    img: "./assets/beach-img/cotedesbasques.jpg",
    missions: "Coastal clean-up and picnic",
  },
  {
    id: 14,
    name: "Marbella",
    length: "350m",
    location: "Biarritz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Small VIP beach for Biarritz locals, full of surfers from another era. With friends or family, it's the ideal place to relax",
    img: "./assets/beach-img/marbella.jpg",
    missions: "Waste collection and awareness of global warming",
  },
  {
    id: 15,
    name: "La Milady",
    length: "460m",
    location: "Biarritz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Large beach very popular with Biarrots. Walkway by the sea. Playground for children. Handiplage activity with tiralos and Handisurf with direct access to the sea. At rising tide, the shore break can be quite brutal. ",
    img: "./assets/beach-img/milady.jpg",
    missions: "Educational games to teach selective sorting to the youngest",
  },
  {
    id: 16,
    name: "Ilbaritz",
    length: "1OO0m",
    location: "Biarritz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "On just over 300m of sand, you can fully enjoy this beach on the Basque Coast which is supervised during the summer season, from mid-June to the end of October. Sports enthusiasts can also indulge in golf on a very beautiful course that surrounds & overlooks the beach.",
    img: "./assets/beach-img/ilbaritz.jpg",
    missions: "Waste collection and promotion of sport on health",
  },
  {
    id: 17,
    name: "Erretegia",
    length: "190m",
    location: "Bidart",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Erretegia beach is located near Bidart Center but away from the city center in a green and natural setting that stretches for several hundred meters.",
    img: "./assets/beach-img/erretegia.jpg",
    missions:
      "Educational games to encourage the youngest to respect the environment",
  },
  {
    id: 18,
    name: "L'uhabia",
    length: "790m",
    location: "Bidart",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "It is a wide sandy beach, the largest in the town, but also the most accessible. It is labeled Handiplage",
    img: "./assets/beach-img/luhabia.jpg",
    missions: "Collection and recovery of marine litter",
  },
  {
    id: 19,
    name: "Bahia Beach",
    length: "415m",
    location: "Bidart",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Private beach Vias Plage. Discovering the Bahia Beach Vias Plage Concentrates of Indonesia and the contemporary transport us to this zen and modern place, a change of scenery guaranteed!",
    img: "./assets/beach-img/bahia.jpg",
    missions:
      "Educational games to encourage the youngest to respect the environment",
  },
  {
    id: 20,
    name: "Parlementia",
    length: "330m",
    location: "Guéthary",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "Parliamentia beach is the southernmost beach in Bidart, on the border with the village of Guéthary. This sandy beach is quite rocky and very popular for surfing. The setting is natural and intimate with a side the Basque houses of Bidart and on the other the small village and the port of Guéthary.",
    img: "./assets/beach-img/parlementia.jpg",
    missions:
      "Educational games to encourage the youngest to respect the environment",
  },
  {
    id: 21,
    name: "Mayarco",
    length: "420m",
    location: "Guéthary",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "This sandy beach is very close to the campsites in the Acotz district. Mini-golf by the beach.",
    img: "./assets/beach-img/mayarco.jpg",
    missions: "Collection and recovery of marine litter",
  },
  {
    id: 22,
    name: "Lafitenia",
    length: "720m",
    location: "Guéthary",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "This beach is the favorite spot for experienced surfers who will face the left wave of rocks located a little offshore.",
    img: "./assets/beach-img/lafintenia.jpg",
    missions:
      "Educational games on learning selective sorting through beach cleaning",
  },
  {
    id: 23,
    name: "Erromardie",
    length: "1000m",
    location: "Saint-Jean-de-Luz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "It is a quiet beach where it is essential to come with your bucket and landing net at low tide to look for crabs in the exposed rocks.",
    img: "./assets/beach-img/erromardie.jpg",
    missions:
      "Educational games to encourage the youngest to respect the environment",
  },
  {
    id: 24,
    name: "Grande plage",
    length: "1 km",
    location: "Saint-Jean-de-Luz",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "At the edge of one of the most beautiful bays in the world, a two-minute walk from Place Louis XIV and the port, Grande Plage is the must-see beach in Saint-Jean-de-Luz. Fine sand, plan 'calm water protected by three dykes, the ideal beach for the whole family and especially with young children. Several generations of Luziens meet here.",
    img: "./assets/beach-img/grandeplagestjean.jpg",
    missions:
      "Educational games on learning selective sorting through beach cleaning",
  },
  {
    id: 25,
    name: "Plage de Ciboure",
    length: "192m",
    location: "Ciboure",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: "The ocean is much calmer there than in its neighbors on the Basque Coast thanks to the 3 dikes built in the 19th century and which protect the bay from the assaults of the sea.",
    img: "./assets/beach-img/ciboure.jpg",
    missions: "Collection and recovery of marine litter",
  },
  {
    id: 26,
    name: "Plage d'Hendaye",
    length: "2,5 km",
    location: "Hendaye",
    events: {
      dates: ["jj-mm-aaaa"],
      users: [],
    },
    desc: `Considered as a "green run" for learning to surf, it is also labeled "Handiplage", making it easier for people with reduced mobility to swim. Since 2015, it has been in the TOP 10 of the best French beaches, on the Tripadvisor review site!`,
    img: "./assets/beach-img/hendaye.jpg",
    missions:
      "Educational games on learning selective sorting through beach cleaning",
  },
];

export default databeach;
