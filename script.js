//mywweb
    function addText() {
        const input = document.getElementById('addInput').value;
        if (input) {
        document.getElementById('web-text').innerText += ' ' + input;
        }
    }
    function fixText() {
        const input = document.getElementById('addInput').value;
        if (input) {
        document.getElementById('web-text').innerText = input;
        }
    }
    function hideText() {
        document.getElementById('web-text').style.display = 'none';
    }
    function appearText() {
        document.getElementById('web-text').style.display = 'block';
    }
