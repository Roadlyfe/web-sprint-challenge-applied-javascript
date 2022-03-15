import axios from "axios";

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
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
 
const Tabs = (topics) => {
  const topic = document.createElement('div');
  topic.classList.add('topics');
  for(let i = 0; i < topics.length; i++){
    const tab2 = document.createElement('div');
    tab2.classList.add('tab');
    tab2.textContent = topics[i];
    topic.appendChild(tab2);
  }
  return topic;
}

const tabsAppender = (selector) => {
  axios.get('http://localhost:5000/api/topics')
  .then(res => {
    const tabs = document.querySelector(selector);
    const topics = Tabs(res.data.topics);
    tabs.appendChild(topics);
    return tabs;
  })
  .catch(err => {
    console.error('Error!! Data not fetched.');
  })
  .finally(() => {
    console.log("IT'S WORKING! IT'S WORKING!");
  })
}

export { Tabs, tabsAppender }

