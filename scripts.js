var slideInNav = document.querySelector('nav');

slideInNav.addEventListener('mouseenter', function() {
	slideInNav.className += ' extended';
});

slideInNav.addEventListener('mouseleave', function() {
	slideInNav.className = slideInNav.className.replace
      ( /(?:^|\s)extended(?!\S)/g , '' )
});
console.log('slideInNav: ', slideInNav);