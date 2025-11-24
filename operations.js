document.getElementById('11loadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('11loadFile');
    const file = fileInput.files[0];

    if (!file) {
        alert('choose file');
        return;
    }

    const formData = new FormData();
    formData.append('11loadedFile', file);

    fetch('/nameFile', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                document.getElementById('successMessage').style.display = 'block';
                fileInput.value = ''
                setTimeout(() => {
                    document.getElementById('successMessage').style.display = 'none';
                }, 5000);
            } else {
                throw new Error('Server error');
            }
        })
        .catch(error => {
            console.error('error:', error);
            document.getElementById('errorMessage').style.display = 'block';
            setTimeout(() => {
                document.getElementById('errorMessage').style.display = 'none';
            }, 5000);
        });
});