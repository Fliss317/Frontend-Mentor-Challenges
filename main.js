// PLAN
// ordered list of notifications
// - take info from html page 
// - mark each item as read/unread
// - make status toggleable?
// - title for notifications list 
// mark read and unread
// - each item to count towards unread total 
// - dynamic counter next to Notifications title
// set unread to 0 by marking all as read 
// - build button 
// - event listener "click" on button
// - function to change counter to 0
// add images to each list item from assets folder
// - html directly
// - alter position etc using CSS
// view layout depending on screen size (CSS)
// see hover and focus states (CSS)
 
let markAsRead = document.querySelector("button");
markAsRead.addEventListener("click", markAllRead);

function markAllRead() {

};