const commentInput = document.getElementById("commentInput");
const submitComment = document.getElementById("submitComment");
const commentList = document.getElementById("commentList");
const errorComment = document.getElementById("errorComment");

submitComment.addEventListener("click", function() {
    const commentText = commentInput.value.trim();

    errorComment.textContent = '';

    if (commentText.length < 5) {
        errorComment.textContent = 'Komentar harus berisi minimal 5 karakter.';
        return;
    }

    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';

    const textParagraph = document.createElement('p');
    textParagraph.textContent = commentText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.className = 'delete-btn';

    deleteButton.addEventListener('click', function() {
        commentList.removeChild(commentItem);
    });

    commentItem.appendChild(textParagraph);
    commentItem.appendChild(deleteButton);

    commentList.appendChild(commentItem);

    commentInput.value = '';
});
