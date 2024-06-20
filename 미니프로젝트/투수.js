async function calculateHitterScore(pitcher) {
            

    let playerData = {};
    let playerDataList = [];
    const res = await fetch('1pitcher.json');
    const jsonData = await res.json();
    console.log(jsonData.pitcher)

        for (let i = 0; i < jsonData.pitcher.length; i++) {
            let score = 0;
            const Player = jsonData.pitcher[i].Player;
            const ERA = jsonData.pitcher[i].ERA;
            const SO = jsonData.pitcher[i].SO;
            const win = jsonData.pitcher[i].win;
            const IP = jsonData.pitcher[i].IP;
            const Pv = jsonData.pitcher[i].Pv;

            // 평균 자책점 (ERA)
            if (ERA <= 2.50) {
                score += 5;
            } else if (ERA <= 3.00) {
                score += 4;
            } else if (ERA <= 3.50) {
                score += 3;
            } else if (ERA <= 4.00) {
                score += 2;
            } else if (ERA <= 4.50) {
                score += 1;
            }

            // 탈삼진 (SO)
            if (SO >= 80) {
                score += 5;
            } else if (SO >= 70) {
                score += 4;
            } else if (SO >= 60) {
                score += 3;
            } else if (SO >= 50) {
                score += 2;
            } else if (SO >= 40) {
                score += 1;
            }

            // 승리 (W)
            if (win >= 7) {
                score += 5;
            } else if (win >= 6) {
                score += 4;
            } else if (win >= 5) {
                score += 3;
            } else if (win >= 4) {
                score += 2;
            } else if (win >= 3) {
                score += 1;
            }

            // 이닝 (In)
            if (IP >= 80) {
                score += 5;
            } else if (IP >= 75) {
                score += 4;
            } else if (IP >= 70) {
                score += 3;
            } else if (IP >= 65) {
                score += 2;
            } else if (IP >= 60) {
                score += 1;
            }

            // 승률 (Pv)
            if (Pv >= 0.75) {
                score += 5;
            } else if (Pv >= 0.65) {
                score += 4;
            } else if (Pv >= 0.55) {
                score += 3;
            } else if (Pv >= 0.45) {
                score += 2;
            } else if (Pv >= 0.35) {
                score += 1;
            }

            playerDataList.push({ name: Player, score: score })
    }
 
    console.log('playerDataList', playerDataList)
    return playerDataList;
}

// 점수 계산


calculateHitterScore()
    .then((data) => {
        data.sort((a, b) => b.score - a.score);
        console.log('Data:', data);

    })
    .catch((error) => {
        console.error('Error:', error);

    });
     