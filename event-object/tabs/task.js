document.addEventListener('DOMContentLoaded', function() {
    const tabsArray = Array.from(document.querySelectorAll('.tab'));
    const contentsArray = Array.from(document.querySelectorAll('.tab__content'));
    
    function getActiveTabIndex() {
        const activeTab = document.querySelector('.tab_active');
        return tabsArray.indexOf(activeTab);
    }
    
    function setNewTab(key) {
        const currentIndex = getActiveTabIndex();
        let newIndex = currentIndex;
        
        if (key === 'ArrowRight') {
            newIndex = (currentIndex + 1) % tabsArray.length;
        } else if (key === 'ArrowLeft') {
            newIndex = (currentIndex - 1 + tabsArray.length) % tabsArray.length;
        }
        
        return newIndex;
    }
    
    function activateTabAndContent(index) {
        document.querySelector('.tab_active')?.classList.remove('tab_active');
        document.querySelector('.tab__content_active')?.classList.remove('tab__content_active');
        
        tabsArray[index]?.classList.add('tab_active');
        contentsArray[index]?.classList.add('tab__content_active');
    }
    
    tabsArray.forEach(function(item) {
        item.addEventListener('click', function() {
            const tabIndex = tabsArray.indexOf(item);
            activateTabAndContent(tabIndex);
        });
    });
    
    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            const newIndex = setNewTab(event.key);
            activateTabAndContent(newIndex);
        }
    });
    
    if (!document.querySelector('.tab_active') && tabsArray.length > 0) {
        activateTabAndContent(0);
    }
});