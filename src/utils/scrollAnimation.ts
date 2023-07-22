function backgroundColorIntersect(entries: any, observer: any) {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  });
}

function animationOnScrollIntersect(
  entries: any,
  observer: any,
  className: string
) {
  entries.forEach((entry: any) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(className);
    }
  });
}

const backgroundColorObserver = new IntersectionObserver(
  backgroundColorIntersect
);

const fadeUpObserver = new IntersectionObserver((entries: any, observer: any) =>
  animationOnScrollIntersect(entries, observer, "fade-up-show")
);

const zoomInObserver = new IntersectionObserver((entries: any, observer: any) =>
  animationOnScrollIntersect(entries, observer, "zoom-in-show")
);

const titleObserver = new IntersectionObserver((entries: any, observer: any) =>
  animationOnScrollIntersect(entries, observer, "fade-right-show")
);

export {
  backgroundColorObserver,
  fadeUpObserver,
  titleObserver,
  zoomInObserver,
};
