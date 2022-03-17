/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("pets").del();
  await knex("pets").insert([
    {
      id: 1,
      name: "Hanzo",
      species: "cat",
      breed: "American shorthair",
      coat_color: "black",
      favorite_treat: "buffalo wings",
    },
    {
      id: 2,
      name: "Midori",
      species: "cat",
      breed: "American shorthair",
      coat_color: "tabby",
      favorite_treat: "squid jerky",
    },
    {
      id: 3,
      name: "Jesse",
      species: "cat",
      breed: "Hemingway",
      coat_color: "black/white",
      favorite_treat: "Friskies",
    },
    {
      id: 4,
      name: "Amy",
      species: "dog",
      breed: "Chihuahua/Min-Pin",
      coat_color: "black/brown",
      favorite_treat: "sliced turkey",
    },
  ]);
};
