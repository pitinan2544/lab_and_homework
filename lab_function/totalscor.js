const calculateFootballPoints = (wins, draws, losses) => {
    // นัดที่ชนะได้ 3 คะแนน, นัดที่เสมอได้ 1 คะแนน, นัดที่แพ้ได้ 0 คะแนน
    const points = wins * 3 + draws;
    return points;
  };
  
  // ตัวอย่างการใช้งาน
  const team1Points = calculateFootballPoints(5, 2, 1); // ชนะ 5 นัด, เสมอ 2 นัด, แพ้ 1 นัด
  console.log(`Team 1 Points: ${team1Points}`); // 17 คะแนน
  
  const team2Points = calculateFootballPoints(3, 4, 2); // ชนะ 3 นัด, เสมอ 4 นัด, แพ้ 2 นัด
  console.log(`Team 2 Points: ${team2Points}`); // 13 คะแนน
  