// content.js

// Function to inject the new HTML element
const injectElement = () => {
    // Select the target div with the specific class
    const targetDivs = document.getElementsByClassName('flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2 overflow-y-auto');
  
    // Check if any elements were found
    if (targetDivs.length > 0) {
      const targetDiv = targetDivs[0]; // Access the first element from the collection
  
      // Create a new div element to insert
      const newDiv = document.createElement('div');
      newDiv.textContent = "This is a new injected element!";
      newDiv.style.backgroundColor = "#e0e0e0";
      newDiv.style.padding = "10px";
  
      // Insert the new div as the first child of the target element
      targetDiv.insertBefore(newDiv, targetDiv.firstChild);
    } else {
      console.error('Target div not found');
    }
  };
  
  // Create a MutationObserver to watch for changes in the body
  const observer = new MutationObserver((mutationsList, observer) => {
    // Check if the target div is available
    const targetDivs = document.getElementsByClassName('flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2 overflow-y-auto');
    if (targetDivs.length > 0) {
      injectElement();  // Call the function to inject the element
      observer.disconnect();  // Stop observing after the element has been injected
    }
  });
  
  // Start observing the body for changes (childList and subtree options)
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  