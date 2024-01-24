function select_wardrobe() {
    let selected_creature = document.getElementById("creature_selector").value;

    switch (selected_creature) {
        case "wizard":
            change_notification("Wizards should wear pointy hats and big beards.")
            break;
        case "demon":
            change_notification("Demons don't wear anything.")
            break;
        case "space_cow":
            change_notification("A space cow needs a space suit.")
            break;
        case "government_man":
            change_notification("A government man should wear a suit and sunglasses.")
            break;
    }
}

function change_notification(text) {
    document.getElementById("costume_info").textContent = text;
}