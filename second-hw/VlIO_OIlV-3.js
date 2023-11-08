function groupAnagrams(words){
    let sortedWords = [];
    let result = [];
    for(let i = 0; i < words.length; i++) {
        sortedWords.push(words[i].split('').sort().join(''));
    }
    while(words.length > 0) {
        let arr = [];
        let currentWord = sortedWords[0];
        while(sortedWords.indexOf(currentWord) != -1) {
            arr.push(words.splice(sortedWords.indexOf(currentWord),1)[0]);
            sortedWords.splice(sortedWords.indexOf(currentWord),1);
        }
        result.push(arr);
    }
    return result;
}