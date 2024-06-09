document
  .getElementById("upload-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("file", document.getElementById("image-file").files[0]);

    fetch("https://braintumordetectionapi-jf1j.onrender.com/predict", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("prediction-result").innerText =
          "Prediction: " +
          data.prediction +
          " (Confidence: " +
          Math.round(data.confidence * 100 * 1000) / 1000 +
          "%)";
      })
      .catch((error) => {
        console.error("Error:", error);
        document.getElementById("prediction-result").innerText =
          "Error: " + error.toString();
      });
  });

const dropContainer = document.getElementById("dropcontainer");
const fileInput = document.getElementById("image-file");

dropContainer.addEventListener(
  "dragover",
  (e) => {
    e.preventDefault();
  },
  false
);

dropContainer.addEventListener("dragenter", () => {
  dropContainer.classList.add("drag-active");
});

dropContainer.addEventListener("dragleave", () => {
  dropContainer.classList.remove("drag-active");
});

dropContainer.addEventListener("drop", (e) => {
  e.preventDefault();
  dropContainer.classList.remove("drag-active");
  fileInput.files = e.dataTransfer.files;
});
