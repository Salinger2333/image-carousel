import "./style.css";
const imgList = document.querySelectorAll(".img-slide");
imgList.forEach((img, index) => {
  img.dataset.index = index;
});
active();
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");

const changeCarsouel = (function(){
  let curIndex = 0;
  const length = imgList.length;
  const increase = () => {
    if (curIndex < length - 1) {
      curIndex++;
    } else if (curIndex === length - 1) {
      curIndex = 0;
    }
    active(curIndex);
  };
  const decrease = () => {
    if (curIndex > 0) {
      curIndex--;
    } else if (curIndex === 0) {
      curIndex = length - 1;
    }
    active(curIndex);
  };
  const changeByIndex = (index) => {
    curIndex = index
    active(index)
  }

  return {
    increase,
    decrease,
    changeByIndex
  };
})();

function active(editIndex = 0) {
  imgList.forEach((img, index) => {
    img.classList.remove("is-active");
    if (index == editIndex) {
      img.classList.add("is-active");
    }
  });
}
pre.addEventListener("click", () => {
  changeCarsouel.decrease()
});
next.addEventListener("click", () => {
  changeCarsouel.increase()
});

