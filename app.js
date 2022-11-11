// Selector
const containers = document.getElementsByClassName("card-container");

// Global Variable
let activeIndex = 0;

// Function that handles when heart button is clicked
const handleHeartClick = () => {
   // Declares next index and ensures its value is looped and limited from 0-2
   const nextIndex =
      activeIndex + 1 <= containers.length - 1 ? activeIndex + 1 : 0;

   // Selects card containers based on identified indices
   const currentContainer = document.querySelector(
         `[data-index="${activeIndex}"]`
      ),
      nextContainer = document.querySelector(`[data-index="${nextIndex}"]`);

   currentContainer.dataset.status = "after";

   nextContainer.dataset.status = "active-from-before";

   // Allows for nextContainer's data-status to be set to 'active-from-before' before 'active'
   setTimeout(() => {
      nextContainer.dataset.status = "active";
      activeIndex = nextIndex;
   });
};

// Function that handles when x button is clicked
// Same logic as handleHeartClick, just reversed
const handleXClick = () => {
   const nextIndex =
      activeIndex - 1 >= 0 ? activeIndex - 1 : containers.length - 1;

   const currentContainer = document.querySelector(
         `[data-index="${activeIndex}"]`
      ),
      nextContainer = document.querySelector(`[data-index="${nextIndex}"]`);

   currentContainer.dataset.status = "before";

   nextContainer.dataset.status = "active-from-after";

   setTimeout(() => {
      nextContainer.dataset.status = "active";
      activeIndex = nextIndex;
   });
};
