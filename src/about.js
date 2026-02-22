import resturauntImg from "./resturauntImg.png";

export function loadAboutPage() {
  const contentArea = document.querySelector("#content");
  //content area

  const aboutContent = document.createElement("div");
  aboutContent.id = "about-content";
  contentArea.appendChild(aboutContent);

  const shopImg = document.createElement("img");
  shopImg.src = resturauntImg;
  shopImg.id = "shop-img";
  aboutContent.appendChild(shopImg);

  const aboutText = document.createElement("div");
  aboutText.id = "about-text";
  aboutText.textContent = `
 Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
  specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
   remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  aboutText.id = "about-text";
  aboutContent.appendChild(aboutText);
}
