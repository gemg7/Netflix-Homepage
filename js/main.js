const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));

// Select tab content item
function selectItem(e) {
    // Remove all borders
    removeBorder();
    // Remove all content
    removeContent();
    
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab content item
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeContent(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}