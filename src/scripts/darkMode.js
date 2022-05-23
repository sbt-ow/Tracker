const toChange = ['clock-background', 'body', 'clock','up','down','neutral','tr-head','tr-sub']
console.log(toChange)

function darkMode() {
    if (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) {
            for (let i = 0; i < toChange.length; i++) {
                document.toChange[i].classList.add('dark');
            }
    }
}
export default darkMode;