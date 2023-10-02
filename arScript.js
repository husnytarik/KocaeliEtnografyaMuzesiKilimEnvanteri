const modelViewer = document.getElementById("modelViewer");
modelViewer.addEventListener("load", () => {
  const material = modelViewer.model.materials[0];
  const createAndApplyTexture = async (channel, event) => {
    if (event.target.value) {
      const texture = await modelViewer.createTexture(event.target.value);
      material.pbrMetallicRoughness[channel].setTexture(texture);
      console.log(material);
      material.setAlphaMode('MASK');
      console.log(material.getAlphaMode(), "alpha")
    }
  };
  document.querySelector("#texture").addEventListener("click", (event) => {
    createAndApplyTexture("baseColorTexture", event);
  });
});
