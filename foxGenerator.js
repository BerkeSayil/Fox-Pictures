const FOX_URL = "https://randomfox.ca/floof";

const dogg = document.getElementById("fox-target");

async function getPic() {
  const promise = await fetch(FOX_URL);
  console.log(promise);
  const processedResponse = await promise.json();
  if (processedResponse.link.endsWith('.mp4') || processedResponse.link.endsWith('.webm')){
    getPic();
    return;
  }
  const img = document.createElement("img");
  img.src = processedResponse.image;
  img.alt = "Cute FOX!";
  img.style.width = "300px";
  img.style.height = "300px";
  img.style.objectFit = "cover";
  dogg.appendChild(img);
}

document.getElementById("fox-dispenser").addEventListener("click", getPic);