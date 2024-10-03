const ringImage = document.getElementById('ringImage');

// Initial rotation state
let isDragging = false;
let rotation = { x: 0, y: 0 };
let lastMousePosition = { x: 0, y: 0 };

// Event listener for mouse down (start dragging)
ringImage.addEventListener('mousedown', (e) => {
  isDragging = true;
  lastMousePosition = { x: e.clientX, y: e.clientY };
  document.body.style.cursor = 'grabbing';
});

// Event listener for mouse move (rotate while dragging)
window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  // Calculate the difference in mouse movement
  const deltaX = e.clientX - lastMousePosition.x;
  const deltaY = e.clientY - lastMousePosition.y;

  // Update the rotation angles based on mouse movement
  rotation.x += deltaY * 0.5;
  rotation.y += deltaX * 0.5;

  // Apply the rotation transformation to the image
  ringImage.style.transform = `rotateY(${rotation.y}deg)`;

  // when rotate360 uncomment it
  // ringImage.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;

  lastMousePosition = { x: e.clientX, y: e.clientY };
});

// Event listener for mouse up (stop dragging)
window.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.cursor = 'grab';
});



// // Get the image element
// const image = document.getElementById('ringImage');

// // Variables to track dragging and rotation
// let isDragging = false;
// let lastMouseX = 0;
// let lastMouseY = 0;
// let rotationX = 0;
// let rotationY = 0;
// let rotationZ = 0; // Optional for Z-axis rotation

// // Handle mouse down event
// image.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   lastMouseX = e.clientX;
//   lastMouseY = e.clientY;
//   document.body.style.cursor = 'grabbing'; // Change cursor style
// });

// // Handle mouse move event (rotate the image)
// window.addEventListener('mousemove', (e) => {
//   if (!isDragging) return; // If not dragging, exit

//   // Calculate the distance moved
//   const deltaX = e.clientX - lastMouseX;
//   const deltaY = e.clientY - lastMouseY;
//   const tp = deltaX + deltaY
//   // Update the rotation angles
//   rotationY += deltaX * 0.3; // Rotate on Y-axis (left and right)
//   rotationX -= deltaY * 0.3; // Rotate on X-axis (up and down)

//   // Optionally rotate on Z-axis if needed
//   // rotationZ += deltaX * 0.1; // Rotate on Z-axis (clockwise/counterclockwise)

//   // Apply the rotation to the image
//   image.style.transform = `rotate3d(${rotationX},${rotationY},${rotationZ},${tp}deg)`;

//   // Update the last mouse positions
//   lastMouseX = e.clientX;
//   lastMouseY = e.clientY;
// });

// // Handle mouse up event (stop dragging)
// window.addEventListener('mouseup', () => {
//   isDragging = false;
//   document.body.style.cursor = 'grab'; // Reset cursor style
// });
