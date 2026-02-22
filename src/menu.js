const cardTexts = [
  "Spicy Ramen",
  "Blue Ramen",
  "Rich Tonkotsu Ramen",
  "Miso Ramen ",
  "Seasonal Ramen",
];

export function loadMenuPage() {
  const contentArea = document.querySelector("#content");
  //content area

  const menuContent = document.createElement("menu-content");
  contentArea.appendChild(menuContent);
  //menu content area
  const cards = document.createElement("div");
  cards.id = "cards";
  menuContent.appendChild(cards);

  cardTexts.forEach((text) => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = text;
    cards.appendChild(card);
  });
}
