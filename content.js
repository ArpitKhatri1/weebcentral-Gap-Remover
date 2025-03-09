setTimeout(() => {
  let sectionList = document.querySelector(
    `[hx-include="[name='reading_style']"]`
  );
  console.log(sectionList);
  console.log(sectionList.classList.remove("gap-4"));
}, 500);
