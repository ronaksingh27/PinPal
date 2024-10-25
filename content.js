// content.js

// Function to inject the new HTML element
const injectElement = () => {
  // Select the target div with the specific class
  const pinChatSpace = document.getElementsByClassName('flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2 overflow-y-auto');

  // Check if any pinChatSpace elements were found
  if (pinChatSpace.length > 0) {
      const targetDiv = pinChatSpace[0]; // Access the first element from the collection

      // Create a new div element to insert
      const newDiv = document.createElement('div');
      newDiv.textContent = "This is a new injected element!";
      newDiv.style.backgroundColor = "#e0e0e0";
      newDiv.style.padding = "10px";

      // Insert the new div as the first child of the target element
      targetDiv.insertBefore(newDiv, targetDiv.firstChild);
  }

};

// Create a MutationObserver to watch for changes in the body
const observer1 = new MutationObserver((mutationsList, observer) => {
  // Check if the target div is available
  const pinChatSpace = document.getElementsByClassName('flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2 overflow-y-auto');

  if (pinChatSpace.length > 0 ) {
      console.log("from mutation observer , pinSpace found");
      injectElement();  // Call the function to inject the element
      observer1.disconnect();  // Stop observing after the element has been injected
  }

  
});

const observer2 = new MutationObserver((mutationsList, observer) => {
  // Check if the target div is available

  const buttons = document.getElementsByClassName('flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary');
  if( buttons.length > 0 )
  {
    console.log("elements found",buttons);
    observer2.disconnect();

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        console.log('Button clicked:', buttons[i]);
        // You can also add any action here

        const list = document.getElementsByClassName('z-50 max-w-xs rounded-2xl popover bg-token-main-surface-primary shadow-lg will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade border border-token-border-light py-2 overflow-hidden');
        
        console.log("list length : ",list.length);

        if (list.length > 0) {
          const targetDiv = list[0]; // Access the first element from the collection
    
          // Create a new div element to insert
          const newDiv = document.createElement('div');
          newDiv.textContent = "This is a new injected element!";
          newDiv.style.backgroundColor = "#e0e0e0";
          newDiv.style.padding = "10px";
    
          // Insert the new div as the first child of the target element
          targetDiv.insertBefore(newDiv, targetDiv.firstChild);
      }

        
      });
    }
  }
  
});

// Start observing the body for changes (childList and subtree options)
observer1.observe(document.body, {
  childList: true,
  subtree: true
});
observer2.observe(document.body, {
  childList: true,
  subtree: true
});