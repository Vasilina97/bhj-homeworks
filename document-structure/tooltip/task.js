document.addEventListener('DOMContentLoaded', function() {
    // все элементы с подсказками
    const tooltipElements = document.querySelectorAll('.has-tooltip');
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
    
    tooltipElements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            
            // скрываем подсказку
            if (tooltip.classList.contains('tooltip_active') && 
                tooltip.textContent === element.title) {
                tooltip.classList.remove('tooltip_active');
                return;
            }
            
            // текст 
            tooltip.textContent = element.title;
            
            const rect = element.getBoundingClientRect();
            tooltip.style.left = `${rect.left}px`;
            tooltip.style.top = `${rect.bottom}px`;
            
            // Показать надпись
            tooltip.classList.add('tooltip_active');
        });
    });
    
    // Скрыть
    document.addEventListener('click', function(e) {
        if (!e.target.classList.contains('has-tooltip') && 
            e.target !== tooltip) {
            tooltip.classList.remove('tooltip_active');
        }
    });
});