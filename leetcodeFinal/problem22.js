var generateParenthesis = function(n) {
    const combinations = [];
    buildCombinationFrom('(', 1, 0, n, combinations);
    return combinations;
};

function buildCombinationFrom(string, openUsed, closeUsed, n, combinations) {
    if (string.length === 2*n) {
        return;
    }
    if (openUsed < n) {
        buildCombinationFrom(string + '(', openUsed + 1, closeUsed, n, combinations);
    }
    if (openUsed > closeUsed) {
        buildCombinationFrom(string + ')', openUsed, closeUsed + 1, n, combinations);
    }
}