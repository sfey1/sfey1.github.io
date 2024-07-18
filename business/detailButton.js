export const activeButton = () => {
  const modal = document.querySelector(".modal");
  let modalStatus = false;
  document.addEventListener("click", (event) => {
    const target = event.target;
    const closest = target.closest(".class");
    const equipNode = modal.isSameNode(target);
    if (!modalStatus && closest) {
      modal.classList.add("modalOpen");
      modalStatus = true;
    } else if (modalStatus && !equipNode) {
      modal.classList.remove("modalOpen");
      modalStatus = false;
    }
  });
};
