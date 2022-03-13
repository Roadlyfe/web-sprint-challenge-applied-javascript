// TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

const Tabs = (topics) => {
  const tab1 = document.createElement('div');
  const tab2 = document.createElement('div');
  const tab3 = document.createElement('div');
  const tab4 = document.createElement('div');
  const tab5 = document.createElement('div');

  
  tab1.appendChild(tab2);
  tab2.appendChild(tab3);
  tab3.appendChild(tab4);
  tab4.appendChild(tab5);
  
}

 // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  
const tabsAppender = (selector) => {
  // const entryPoint = document.querySelector(selector);
  // axios.get("http://localhost:5000/api/topics")
  // .then(res => {
  //   console.log(res.data.message);
  //   res.data.message.forEach(image => {
  //     const tabs = tabsAppender({ topics });
  //     entryPoint.appendChild(tabs);
  //   })
  // })
  // .catch(err => {
  //   console.error(err);
  // })
  // .finally(() => {
  //   console.log("IT'S WORKING, IT'S WORKING!");
  // })
}
 
export { Tabs, tabsAppender }
