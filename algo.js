const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];

var rightDiag = 0;
var leftDiag = 0;

function diagonalDifference(sqrMatrix) {
    for (var i = 0; i < sqrMatrix.length; i++){
        for (var j = 0; j < sqrMatrix.length; i++){
            if (i === j) {
                rightDiag += sqrMatrix[i][j];
            }
        }
    }
    console.log(rightDiag)
}

diagonalDifference(squareMatrix1);
diagonalDifference(squareMatrix2);