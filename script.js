let previousWindow;

document.getElementById('openNewWindowButton').addEventListener('click', function() {
  // Close the previous window if it exists
  if (previousWindow) {
    previousWindow.close();
  }

  // Open a new window
  const newWindow = window.open('https://www.example.com', '_blank', 'width=800,height=600');
  
  // Store the reference to the new window as the previous window
  previousWindow = newWindow;

  window.close();
});
