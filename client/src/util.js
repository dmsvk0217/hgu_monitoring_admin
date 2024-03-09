export const locationFromNodeNumberOptions = {
  0: "전체",
  1: "뉴턴홀",
  2: "현동홀",
  3: "느헤미아홀",
  4: "오석관",
  5: "코너스톤홀",
  6: "올네이션스홀",
  7: "그레이스홀",
  8: "로멘틱잔디",
  9: "평봉필드",
  10: "히딩크 풋살장",
  11: "복지동",
  12: "채플",
  13: "하용조관",
  14: "벧엘관",
  15: "창조관",
};

export function getCurrentDate() {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고 문자열로 변환
  const day = currentDate.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export const timeRanges = [
  { startTime: "0:00", endTime: "3:00" },
  { startTime: "3:00", endTime: "6:00" },
  { startTime: "6:00", endTime: "9:00" },
  { startTime: "9:00", endTime: "12:00" },
  { startTime: "12:00", endTime: "15:00" },
  { startTime: "15:00", endTime: "18:00" },
  { startTime: "18:00", endTime: "21:00" },
  { startTime: "21:00", endTime: "24:00" },
];

export function getCurrentTimeFilerOption() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  const currentTotalMinutes = currentHour * 60 + currentMinute;

  let currentTimerange = null;
  for (const timerange of timeRanges) {
    const startMinutes = convertToMinutes(timerange.startTime);
    const endMinutes = convertToMinutes(timerange.endTime);

    if (currentTotalMinutes >= startMinutes && currentTotalMinutes < endMinutes) {
      currentTimerange = timerange;
      break;
    }
  }

  return currentTimerange;
}

function convertToMinutes(timeString) {
  const [hours, minutes] = timeString.split(":");
  return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
}

export function extractTimes(timeString) {
  console.log("🚀 ~ extractTimes ~ timeString:", timeString);
  // 정규 표현식을 사용하여 시간 문자열에서 숫자 부분을 추출
  const match = timeString.match(/(\d+):(\d+)-(\d+):(\d+)/);
  console.log("🚀 ~ extractTimes ~ match:", match);

  if (match) {
    // match 배열의 인덱스 1과 3은 시작 시간의 시와 분
    // match 배열의 인덱스 2와 4는 끝 시간의 시와 분
    const startTimeHour = parseInt(match[1], 10);
    const startTimeMinute = parseInt(match[2], 10);
    const endTimeHour = parseInt(match[3], 10);
    const endTimeMinute = parseInt(match[4], 10);

    return {
      startTime: {
        hour: startTimeHour,
        minute: startTimeMinute,
      },
      endTime: {
        hour: endTimeHour,
        minute: endTimeMinute,
      },
    };
  }

  // 일치하지 않을 경우 예외 처리 또는 기본값 반환
  return null;
}
