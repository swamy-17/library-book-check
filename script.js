function searchBook() {
    const title = document.getElementById('search').value;
    fetch(`search.php?title=${title}`)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = '';
            if (data.length === 0) {
                resultDiv.innerHTML = 'No books found.';
            } else {
                data.forEach(book => {
                    resultDiv.innerHTML += `<p><strong>${book.title}</strong> - ${book.is_available == 1 ? 'Available' : 'Not Available'}</p>`;
                });
            }
        });
}
