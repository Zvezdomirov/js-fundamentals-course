function squareOfStars(size = 5) {
    let result = "* ".repeat(size - 1) + "*";
    for (let i = 1; i <= size; i++) {
        console.log(result);
    }
}

squareOfStars();
