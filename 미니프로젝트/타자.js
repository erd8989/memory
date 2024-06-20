async function calculateHitterScore(hitter) {
            

    let playerData = {};
    let playerDataList = [];
    const res = await fetch('1batter.json');
    const jsonData = await res.json();
    console.log(jsonData.batter)


    for (let i = 0; i < jsonData.batter.length; i++) {
        let score = 0;
        const Player = jsonData.batter[i].Player;
        const avg = jsonData.batter[i].avg;
        const H = jsonData.batter[i].H;
        const TB = jsonData.batter[i].TB;
        const HR = jsonData.batter[i].HR;
        const RBI = jsonData.batter[i].RBI;

        if (avg >= 0.350) {
            score += 5;
        } else if (avg >= 0.320) {
            score += 4;
        } else if (avg >= 0.290) {
            score += 3;
        } else if (avg >= 0.260) {
            score += 2;
        } else if (avg >= 0.230) {
            score += 1;
        }

        // 안타 (H)
        if (H >=90) {
            score += 5;
        } else if (H >= 85) {
            score += 4;
        } else if (H >= 80) {
            score += 3;
        } else if (H >= 75) {
            score += 2;
        } else if (H >= 70) {
            score += 1;
        }

        //총 루타(TB)
        if (TB >= 150) {
            score += 5;
        } else if (TB >= 135) {
            score += 4;
        } else if (TB >= 115) {
            score += 3;
        } else if (TB >= 100) {
            score += 2;
        } else if (TB >= 80) {
            score += 1;
        }

        // 홈런 (HR)
        if (HR >= 15) {
            score += 5;
        } else if (HR >= 12) {
            score += 4;
        } else if (HR >= 9) {
            score += 3;
        } else if (HR >= 6) {
            score += 2;
        } else if (HR >= 3) {
            score += 1;
        }

        // 타점 (RBI)
        if (RBI >= 55) {
            score += 5;
        } else if (RBI >= 45) {
            score += 4;
        } else if (RBI >= 35) {
            score += 3;
        } else if (RBI >= 25) {
            score += 2;
        } else if (RBI >= 15) {
            score += 1;
        }



        playerDataList.push({ name: Player, score: score })
    }
 
    console.log('playerDataList', playerDataList)
    // 타율 (AVG)
    return playerDataList;
}

// 점수 계산


calculateHitterScore()
    .then((data) => {
        data.sort((a, b) => b.score - a.score);
        console.log('Data:', data)

    })
    .catch((error) => {
        console.error('Error:', error);

    });