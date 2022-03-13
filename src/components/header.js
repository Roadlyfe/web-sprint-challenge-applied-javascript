
// TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // am I supposed to be creating an object here?? 


  // const headerContainer = document.querySelector(".header-container");

  const Header = (title, date, temp) => {
    const header = document.createElement("div");
    const span1 = document.createElement("span");
    const h1 = document.createElement("h1");
    const span2 = document.createElement("span");

    header.classList.add("header");
    span1.textContent = date;
    h1.textContent = title;
    span2.textContent = temp;

    span1.classList.add("date");
    span2.classList.add("temp");

    header.appendChild(span1);
    header.appendChild(h1);
    header.appendChild(span2);


    
console.log(header)
    return header;
}

// TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //


const headerAppender = (selector) => {
  const header = document.querySelector(selector);
  const txt = "Lambda School";
  const testvar = Header(txt, "January 6th, 2021", "temp")
  header.appendChild(testvar);
  return header;
}
// headerAppender();


export { Header, headerAppender }
