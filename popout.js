document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('measurementsForm')
    form.addEventListener('submit', function (event) {
        event.preventDefault(); //prevents popup from getting reloaded


        // reading values
        const height = document.getElementById('height').value;
        const chest = document.getElementById('chest').value;
        const waist = document.getElementById('waist').value;
        const hips = document.getElementById('hips').value;

        //Objects for Measurement
        const measurements = {
            height: Number(height),
            chest: Number(chest),
            waist: Number(waist),
            hips: Number(hips),
        };

        console.log('User measurements:', measurements);
    });
});