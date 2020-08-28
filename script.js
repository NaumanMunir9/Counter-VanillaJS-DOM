let counter = document.querySelector(".counter");
const addCount = document.getElementById("addCountBtn");
const lowerCount = document.getElementById("lowerCountBtn");

let count = 0;

// function incrementCounter
function incrementCounter() {
  count++;
  counter.innerHTML = count;

  if (counter.innerHTML > "0") {
    counter.style.color = "green";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }

  counter.animate(
    [
      {
        opacity: "0.2",
      },
      {
        opacity: "1.0",
      },
    ],
    {
      duration: 500,
      fill: "forwards",
    }
  );
}

// function incrementCounter
function decrementCounter() {
  count--;
  counter.innerHTML = count;

  if (counter.innerHTML < "0") {
    counter.style.color = "red";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }

  counter.animate(
    [
      {
        opacity: "0.2",
      },
      {
        opacity: "1.0",
      },
    ],
    {
      duration: 500,
      fill: "forwards",
    }
  );
}

// event Listener on addCountBtn and lowerCountBtn
addCount.addEventListener("click", incrementCounter);
lowerCount.addEventListener("click", decrementCounter);
