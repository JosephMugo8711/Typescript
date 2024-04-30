// Select an element with class "foo" from the DOM and cast it as an HTMLInputElement
const someElement = document.querySelector(".foo") as HTMLInputElement;

// Attempt to access the value property of someElement
// TypeScript knows that someElement is an HTMLInputElement due to the type assertion above


// Add an event listener to someElement for the 'blur' event
someElement.addEventListener('blur', (event) => {
    // Inside the event listener, cast the event.target as an HTMLInputElement
    // TypeScript knows that event.target is an Element, but we specifically want to treat it as an HTMLInputElement
    const target = event.target as HTMLInputElement;
    
    // Log the value property of the target HTMLInputElement
    // TypeScript knows that target is an HTMLInputElement due to the type assertion above
   // console.log('event', event.target.value)
})

