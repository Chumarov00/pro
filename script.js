document.addEventListener("DOMContentLoaded", async () => {
  const mindarThree = new window.MINDAR.IMAGE.MindARThree({
    container: document.querySelector("#ar-container"),
    imageTargetSrc: "./targets.mind",  // ← твой маркер
  });

  const { renderer, scene, camera } = mindarThree;
  const anchor = mindarThree.addAnchor(0);

  const loader = new THREE.GLTFLoader();
  loader.load("model.glb", (gltf) => {
    const model = gltf.scene;
    model.scale.set(0.3, 0.3, 0.3); // при необходимости увеличь или уменьшай
    model.position.set(0, 0, 0);
    anchor.group.add(model);
  });

  await mindarThree.start();
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
  });
});
