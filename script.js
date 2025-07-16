document.addEventListener("DOMContentLoaded", async () => {
  const mindarThree = new window.MINDAR.IMAGE.MindARThree({
    container: document.querySelector("#ar-container"),
    imageTargetSrc: "./targets.mind", // твой сгенерированный .mind файл
  });

  const { renderer, scene, camera } = mindarThree;
  const anchor = mindarThree.addAnchor(0);

  // Загружаем модель
  const loader = new THREE.GLTFLoader();
  loader.load("model.glb", (gltf) => {
    const model = gltf.scene;
    model.scale.set(0.3, 0.3, 0.3); // масштаб модели
    model.position.set(0, 0, 0); // позиция
    anchor.group.add(model);
  }, undefined, (error) => {
    console.error("Ошибка загрузки модели:", error);
  });

  await mindarThree.start();
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
});
