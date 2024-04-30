document.getElementById('photo').onchange = function (evt) {
    var files = evt.target.files;

    // Check if a file is selected
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            // Create a new image element to display the preview
            var img = new Image();

            // Set the maximum width and height for the preview image
            var maxWidth = 500; // maximum width
            var maxHeight = 500; // maximum height

            img.onload = function() {
                var width = img.width;
                var height = img.height;

                // Calculate the aspect ratio
                var aspectRatio = width / height;

                // Determine the resizing factor based on the maximum dimensions
                if (width > maxWidth || height > maxHeight) {
                    if (width / maxWidth > height / maxHeight) {
                        width = maxWidth;
                        height = Math.round(width / aspectRatio);
                    } else {
                        height = maxHeight;
                        width = Math.round(height * aspectRatio);
                    }
                }

                // Set the dimensions of the preview image
                img.width = width;
                img.height = height;

                // Get or create the preview container element
                var previewContainer = document.getElementById('photo-preview');
                if (!previewContainer) {
                    previewContainer = document.createElement('div');
                    previewContainer.id = 'photo-preview';
                    document.querySelector('form').appendChild(previewContainer);
                }

                // Clear any existing preview content
                previewContainer.innerHTML = "";

                // Append the image element to the preview container
                previewContainer.appendChild(img);
            };

            img.src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    } else {
        // Clear the preview if no file is selected
        var previewContainer = document.getElementById('photo-preview');
        if (previewContainer) {
            previewContainer.innerHTML = "";
        }
    }
};

function addIngredient(button) {
    var container = button.parentElement;
    var input = document.createElement("input");
    input.type = "text";
    input.name = "ingredient[]";
    input.placeholder = "Add Ingredient";
    input.required = true;

    // Create remove button
    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        container.removeChild(input);
        container.removeChild(removeButton);
    };

    container.insertBefore(input, button);
    container.insertBefore(removeButton, button);
}

function addCookingStep(button) {
    var container = button.parentElement;
    var textarea = document.createElement("textarea");
    textarea.name = "cooking_step[]";
    textarea.rows = "4";
    textarea.cols = "50";
    textarea.placeholder = "Add Cooking Step";
    textarea.required = true;

    // Create remove button
    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        container.removeChild(textarea);
        container.removeChild(removeButton);
    };

    container.insertBefore(textarea, button);
    container.insertBefore(removeButton, button);
}