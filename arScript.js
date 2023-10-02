const modelViewer = document.getElementById("modelViewer");
modelViewer.arPlacement = "Wall";
modelViewer.addEventListener("load", () => {
  const material = modelViewer.model.materials[0];
  const createAndApplyTexture = async (channel, event) => {
    if (event.target.value) {
      const texture = await modelViewer.createTexture(event.target.value);
      material.pbrMetallicRoughness[channel].setTexture(texture);
      console.log(material);
    }
  };
  document.querySelector("#texture").addEventListener("click", (event) => {
    createAndApplyTexture("baseColorTexture", event);
  });
});
