// script.js
const data = [
    { id: 1, name: '버나디나' }, // Apple
    { id: 2, name: '바나나' }, // Banana
    { id: 3, name: '김도영' }, // Orange
    { id: 4, name: '강감찬' }, // Mango
    { id: 5, name: '가퇴말라' } // Pineapple
];

// 한글 초성 분리 함수
function getChosung(str) {
    const CHOSUNG = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i) - 44032;
        
        if (code > -1 && code < 11172) {
            result += CHOSUNG[Math.floor(code / 588)];
        } else {
            result += str.charAt(i);
        }
    }
    
    return result;
}

function searchFunction() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (input === '') {
        return; // Exit the function if the input is empty
    }

    const inputChosung = getChosung(input);

    const filteredData = data.filter(item => {
        const itemName = item.name.toLowerCase();
        const itemChosung = getChosung(itemName);
        return itemName.includes(input) || itemChosung.includes(inputChosung);
    });

    filteredData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.textContent = item.name;
        resultsContainer.appendChild(div);
    });
}
