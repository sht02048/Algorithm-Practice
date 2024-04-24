function solution(today, terms, privacies) {
  const todayInDate = transformToDate(today);
  const termDates = getTerms(terms);
  const answer = [];

  for (let i = 0; i < privacies.length; i += 1) {
    const [date, term] = privacies[i].split(" ");
    const privacyDate = transformToDate(date);

    const additionalDate = termDates[term];
    privacyDate.month += additionalDate;

    if (privacyDate.month > 12) {
      const yearsToAdd = Math.floor((privacyDate.month - 1) / 12);
      privacyDate.month = ((privacyDate.month - 1) % 12) + 1;
      privacyDate.year += yearsToAdd;
    }


    if (
      privacyDate.year < todayInDate.year ||
      (privacyDate.year === todayInDate.year && privacyDate.month < todayInDate.month) ||
      (privacyDate.year === todayInDate.year && privacyDate.month === todayInDate.month && privacyDate.day <= todayInDate.day)
    ) {
      answer.push(i + 1);
    }
  }

  return answer;
}

function transformToDate(stringDate) {
  const dates = stringDate.split(".").map(Number);

  const date = {
    year: dates[0],
    month: dates[1],
    day: dates[2],
  };

  return date;
}

function getTerms(terms) {
  const termInObj = {}

  for (const term of terms) {
    const [termType, month] = term.split(" ");

    termInObj[termType] = Number(month);
  }

  return termInObj;
}