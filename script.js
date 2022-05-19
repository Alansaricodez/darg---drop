const dropper = document.querySelector('.dropper');
const uploader = document.querySelector('.uploader');
const text = document.querySelector('.text');
const progress = document.querySelector('.progress');

let myFiles = [];

uploader.addEventListener('change', () => {
    dropper.style.display = "none";
    upload_func();
});

dropper.addEventListener('dragover', (e) => {
    e.preventDefault();
    text.innerHTML = "حرر الفأرة لإسقاطه";
    dropper.classList.add('active');
});

dropper.addEventListener('dragleave', (e) => {
    e.preventDefault();
    text.innerHTML = "قم بسحب وإسقاط المستندات والصور ومقاطع الفيديو الخاصة بك هنا";
    dropper.classList.remove('active');
});

dropper.addEventListener('drop', (e) => {
    e.preventDefault();
    files = e.dataTransfer.myFiles;
    dropper.style.display = 'none';
    upload_func();
});


//function to upload files
function upload_func() {
    let intervalCount = 0.25;
    progress.style.display = 'block';
    progress.style.width = `${20 * intervalCount}%`;
    const interval = setInterval(() => {
        intervalCount += 0.25;
        progress.style.width = `${20 * intervalCount}%`;
        if (intervalCount == 5) {
            clearInterval(interval);
        }
    }, 100);
}