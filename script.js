// Set the targets for the numbers to reach
const targetNumbers = [259, 180, 974, 159];
let counters = document.querySelectorAll('.counter');

// Detect if numbers are in the viewport
let hasStartedCounting = false;

function increaseNumbers() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const countersPosition = document.querySelector('.counter-container').offsetTop;

    if (scrollPosition > countersPosition && !hasStartedCounting) {
        hasStartedCounting = true; // Make sure numbers don't increase multiple times
        
        counters.forEach((counter, index) => {
            let currentValue = 0;
            const target = targetNumbers[index];
            const interval = setInterval(() => {
                currentValue += 1;
                counter.textContent = currentValue;
                if (currentValue >= target) {
                    clearInterval(interval);
                }
            }, 30); // Speed of the count (smaller number means faster)
        });
    }
}

// Event listener to detect scrolling
window.addEventListener('scroll', increaseNumbers);

// Run the function immediately in case the user has already scrolled
increaseNumbers();