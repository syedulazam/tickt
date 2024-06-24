// pages/api/events.js
export default async function handler(req, res) {
  const events = [
    {
      id: 1,
      name: "Agnes Obel",
      where: "Barcelona, Spain",
      when: "",
      donations: "",
      status: "Postponed",
    },
    {
      id: 2,
      name: "Agustín Jiménez",
      where: "Sevilla, Spain",
      when: "",
      donations: "",
      status: "Cancelled",
    },
    {
      id: 3,
      name: "Alain Johannes",
      where: "Madrid, Spain",
      when: "",
      donations: "",
      status: "Postponed",
    },
    {
      id: 4,
      name: "BTS Map Of The Soul Tour",
      where: "Toronto, ON",
      when: "May 31, 2020",
      donations: 1,
      status: "Postponed",
    },
    {
      id: 5,
      name: "Iron Maiden",
      where: "Barcelona, Spain",
      when: "July 25, 2020",
      donations: 2,
      status: "Postponed",
    },
    {
      id: 6,
      name: "Leyendas del Rock",
      where: "Villena, Spain",
      when: "",
      donations: "",
      status: "Postponed",
    },
    {
      id: 7,
      name: "Rabolagartija",
      where: "Villena, Spain",
      when: "",
      donations: "",
      status: "Postponed",
    },
    {
      id: 8,
      name: "Resurrection Fest",
      where: "Viveiro, Spain",
      when: "",
      donations: "",
      status: "Postponed",
    },
    {
      id: 9,
      name: "Rock Fest Barcelona",
      where: "Barcelona, Spain",
      when: "",
      donations: "",
      status: "Postponed",
    },
    {
      id: 10,
      name: "The Strokes",
      where: "Austin, TX",
      when: "May 9, 2020",
      donations: "",
      status: "Cancelled",
    },
  ];

  res.status(200).json(events);
}
